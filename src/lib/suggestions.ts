import { reactive, computed, watch } from 'vue'
import { input, esriSearchWidget, searchProps } from './search'
import { debounce } from './util'

watch(
  () => searchProps.activeSourceIndex,
  () => {
    input.value = ''
    suggestions.data = []
  }
)

/**
 * @category Suggestions
 */
export const suggestions = reactive<__hc_esri_search.IReactiveSuggestions>({
  loading: false,
  data: [],
})

/**
 * @category Suggestions
 */
export const uniqSuggestions = computed<__esri.SuggestResult[]>(() => [
  ...new Map(suggestions.data.map((item) => [item['key'], item])).values(),
])

/**
 * @category Suggestions
 */
export async function _suggest() {
  if (!input.value) return

  suggestions.loading = true
  suggestions.error = undefined

  try {
    const { results: sourceResponses } = await esriSearchWidget.value.suggest(
      input.value
    )
    const { results } = sourceResponses[0]

    suggestions.data = results
  } catch (error) {
    // unable to find any suggestions
    // console.warn(error)
  } finally {
    suggestions.loading = false
  }
}

/**
 * The debounced function of {@link _suggest}
 *
 * @category Suggestions
 */
export const suggest = debounce(_suggest)
