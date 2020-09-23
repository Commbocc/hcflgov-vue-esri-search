<template lang="html">
  <form @submit.prevent="search" class="">
    <!-- source selector -->
    <Sources
      v-model="searchSourceIndex"
      v-show="sourceSelector"
      ref="sources"
    />

    <!-- search widget -->
    <Input v-model="userInput" ref="input" />

    <!-- status -->
    <small class="small form-text text-muted d-block">
      {{ status }} &nbsp;
    </small>

    <!-- map -->
    <EsriMap :show-map="showMap" :map-layers="mapLayers" ref="map" />

    <!-- <pre>{{ $data }}</pre> -->
  </form>
</template>

<script>
import { Sources, Input, EsriMap } from './components'
import Esri from './util/esri'

export default {
  name: 'hc-esri-search-form',

  components: { Sources, Input, EsriMap },

  props: {
    /**
     * Displays the search source radio selector
     */
    sourceSelector: {
      type: Boolean,
      default: false,
    },
    /**
     * Displays a map below the form
     */
    showMap: {
      type: Boolean,
      default: false,
    },
    /**
     * Layers to add to the map
     */
    mapLayers: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    userInput: null,
    loading: false,
    status: null,
    searchSourceIndex: 0,
    searchResult: null,
  }),

  methods: {
    async search() {
      /**
       * Triggered once the form is submitted, returns the instance of the HcEsriSearchForm component
       * @property {Object} this
       * @type {Event}
       */
      this.$emit('submit', this)

      this.searchResult = null
      this.loading = true
      this.status = `Searching for ${this.activeSearchSource.name}: ${this.userInput}...`

      const widget = await this.searchWidget()

      const { numResults, results } = await widget.search(this.userInput)

      if (numResults) {
        this.status = null
        this.searchResult = results[0].results[0]
        /**
         * Triggered when a search returns a result, returns a `Promise`&lt;[SearchResponse](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html#SearchResponse)&gt; with the `queryFeatures` method added as a property.
         *
         * @property {Object} results
         * @type {Object}
         */
        this.$emit('result', {
          result: this.searchResult,
          queryFeatures: this.queryFeatures,
        })
      } else {
        this.status = 'No Search Results Found'
      }

      this.loading = false
    },

    /**
     * The `queryFeatures` fucntion accepts the following parameters and returns a `Promise`&lt;[FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-FeatureSet.html)&gt;.
     *  @param {FeatureLayer} feature an autocastable [Feature object](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#properties-summary)
     *  @param {Boolean} single retruns an array of features if set to false. defaults to true
     * @public
     * */
    async queryFeatures(feature, single = true) {
      const { FeatureLayer } = await Esri()
      const { features } = await new FeatureLayer(feature).queryFeatures({
        returnGeometry: true,
        outFields: feature.outFields || ['*'],
        geometry: this.searchResult.feature.geometry,
      })

      if (!features.length) return single ? null : []

      if (this.showMap && this.$refs.map) {
        this.$refs.map.openMapPopup(features)
      }

      return single ? features[0] : features
    },

    async searchWidget() {
      const { Search } = await Esri()
      return new Search({
        sources: this.$refs.sources.searchSources,
        activeSourceIndex: this.searchSourceIndex,
        includeDefaultSources: false,
        view: this.$refs.map ? this.$refs.map.mapview : null,
      })
    },
  },

  computed: {
    activeSearchSource() {
      return this.$refs.sources.searchSources[this.searchSourceIndex]
    },
  },
}
</script>
