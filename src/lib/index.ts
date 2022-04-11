export * from './search'
export * from './suggestions'
export * from './features'

/**
 * This Vue 3 component can be found at src/components/Search/Bootstrap.vue
 *
 * ```html
 * <SearchBootstrap large hc-sources @results="myResultsHandler" />
 * ```
 *
 * @@results the [event](https://vuejs.org/guide/components/events.html#component-events) emitted by the component when the form is submitted and {@link search} is resolved, returns `__esri.SearchResult[] | undefined` as the first argument
 *
 * @hc-sources optional [prop](https://vuejs.org/guide/components/props.html#props), sets the search widget's sources to use a county locator for addresses and a parcel layer for folio numbers
 * @hide-sources optional [prop](https://vuejs.org/guide/components/props.html#props), if `hc-sources` is set, hides the sources from view
 * @small optional [prop](https://vuejs.org/guide/components/props.html#props), adds the 'input-group-sm' class to the [input group](https://getbootstrap.com/docs/5.1/forms/input-group/#sizing)
 * @large optional [prop](https://vuejs.org/guide/components/props.html#props), adds the 'input-group-lg' class to the [input group](https://getbootstrap.com/docs/5.1/forms/input-group/#sizing)
 *
 * @category Components
 */
export { default as SearchBootstrap } from '../components/Search/Bootstrap.vue'
