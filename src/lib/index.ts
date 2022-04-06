import { ref } from 'vue'

/**
 *
 */
export const input = ref<string | null>(null)

export * from './suggestions'
export * from './search'
export * from './features'

/**
 * This Vue 3 component can be found at src/components/Search/Bootstrap.vue
 *
 * ```html
 * <SearchBootstrap large hc-sources />
 * ```
 *
 * The following "params" are optional [props](https://vuejs.org/guide/components/props.html#props) to be passed to the component:
 * @small adds the 'input-group-sm' class to the [input group](https://getbootstrap.com/docs/5.1/forms/input-group/#sizing)
 * @large adds the 'input-group-lg' class to the [input group](https://getbootstrap.com/docs/5.1/forms/input-group/#sizing)
 * @hcSources sets the search widget's sources to use a county locator for addresses and a parcel layer for folio numbers
 *
 * @category Components
 */
export { default as SearchBootstrap } from '../components/Search/Bootstrap.vue'
