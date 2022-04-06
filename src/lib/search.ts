import { reactive, computed, watch } from 'vue'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Search from '@arcgis/core/widgets/Search'
import { input } from '.'
import { suggestions } from './suggestions'

/**
 * @watch When the __activeSourceIndex__ property is manipulated the {@link input} value is set to null and {@link suggestions} data is set to an empty array
 *
 * @category Search
 */
export const searchProps = reactive<__hc_esri_search.IReactiveSearchProps>({
  activeSourceIndex: 0,
})

watch(
  () => searchProps.activeSourceIndex,
  () => {
    input.value = null
    suggestions.data = []
  }
)

/**
 * An [Esri Search Widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html) built with {@link searchProps} as its properties
 *
 * @category Search
 */
export const esriSearchWidget = computed(
  () =>
    new Search({
      ...searchProps,
      sources: searchProps.sources?.map((source) => {
        return source.layer
          ? { ...source, layer: new FeatureLayer(source.layer) }
          : source
      }),
    } as __esri.widgetsSearchProperties)
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
  error: null,
  status: null,
  loading: false,
  data: [],
})

/**
 * @category Search
 */
export async function search(): Promise<
  __hc_esri_search.IReactiveSearchResults['data']
> {
  searchResults.status = null
  if (!input.value) return

  searchResults.loading = true
  searchResults.status = 'Searching...'

  try {
    const { results: sourceResponses } = await esriSearchWidget.value.search(
      input.value
    )
    const { results } = sourceResponses[0]

    searchResults.status = results.length
      ? null
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
  } finally {
    searchResults.loading = false
  }
}
