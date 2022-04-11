import { reactive, computed, ref } from 'vue'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Search from '@arcgis/core/widgets/Search'

/**
 *
 */
export const input = ref<string>('')

/**
 * @watch When the __activeSourceIndex__ property is manipulated the {@link input} value is set to null and {@link suggestions} data is set to an empty array
 *
 * @category Search
 */
export const searchProps = reactive<__hc_esri_search.IReactiveSearchProps>({
  activeSourceIndex: 0,
})

/**
 * An [Esri Search Widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html) built with {@link searchProps} as its properties
 *
 * @category Search
 */
export const esriSearchWidget = computed<Search>(
  () =>
    new Search({
      ...(searchProps as __hc_esri_search.IReactiveSearchProps),
      sources: searchProps.sources?.map((source) => {
        return source.layer
          ? { ...source, layer: new FeatureLayer(source.layer) }
          : source
      }),
    })
)

/**
 * @category Search
 */
export const activeSource = computed(() => {
  return searchProps.sources?.[searchProps.activeSourceIndex ?? 0]
})

/**
 * @category Search
 */
export const searchResults = reactive<__hc_esri_search.IReactiveSearchResults>({
  loading: false,
  data: [],
})

/**
 * @category Search
 */
export async function search(): Promise<__esri.SearchResult[]> {
  searchResults.status = undefined
  if (!input.value) throw 'Invalid input'
  searchResults.loading = true
  searchResults.status = 'Searching...'

  try {
    const { results: sourceResponses } = await esriSearchWidget.value.search(
      input.value
    )
    const { results } = sourceResponses[0]

    searchResults.status = results.length
      ? undefined
      : 'Your search returned no results.'

    searchResults.data = results.map(
      ({ name, extent }) =>
        ({
          name,
          extent: extent.toJSON(),
          //   feature: feature.toJSON(),
        } as __esri.SearchResult)
    )

    return results
  } catch (error) {
    console.warn(error)
    searchResults.status = 'An error occurred when searching.'
    return []
  } finally {
    searchResults.loading = false
  }
}
