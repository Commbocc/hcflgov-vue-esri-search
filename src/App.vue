<template lang="html">
  <form @submit.prevent="search" class="">

    <template v-if="widget">
      <!-- source selector -->
      <Sources v-show="sourceSelector"/>

      <!-- search widget -->
      <Input v-model="userInput" />
    </template>

    <!-- status -->
    <small class="small form-text text-muted d-block">
      {{ status }}
      &nbsp;
    </small>

    <!-- map -->
    <EsriMap v-if="sourceSelector || showMap" :show-map="showMap" ref="map" />

  </form>
</template>

<script>
import { Sources, Input, EsriMap } from './components'
import { EsriMixin, SourcesMixin } from './mixins'

export default {
  name: 'hc-esri-search-form',
  components: { Sources, Input, EsriMap },
  mixins: [EsriMixin, SourcesMixin],
  data: () => ({
    userInput: null,
    isSearching: false,
    status: null,
    searchResult: null
  }),
  props: {
    /**
    * Displays the search source radio selector
    */
    sourceSelector: {
      type: Boolean,
      default: false
    },
    /**
    * Displays a map below the form
    */
    showMap: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    search () {
      /**
      * Triggered once the form is submitted, returns the instance of the component
      * @type {Event}
      */
      this.$emit('submit', this)
      this.searchResult = null
      this.isSearching = true
      this.status = `Searching for ${this.searchSource.name}: ${this.userInput}...`

      this.widget.search(this.userInput).then(searchResults => {
        this.isSearching = false
        if (searchResults.numResults) {
          this.searchResult = searchResults.results[0].results[0]
          this.status = null

          /**
          * Triggered when a search returns a result, returns a `Promise`&lt;[SearchResponse](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html#SearchResponse)&gt; with an added `queryFeatures` function.
          * The `queryFeatures` fucntion accepts the following arguments and returns a `Promise`&lt;[FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-FeatureSet.html)&gt;.
          *
          * @property {Object | String} feature an autocastable [Feature object](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#properties-summary) or a [FeatureLayer Url](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#url)
          * @property {Object} queryParams an autocastable [Query object](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-Query.html#properties-summary)
          * @type {SearchResponse}
          */
          this.$emit('result', {
            ...this.searchResult,
            queryFeatures: this.queryFeatures
          })
        } else {
          this.status = 'No Search Results Found'
        }
      })
    }
  }
}
</script>

<docs>
  ```html
  <hc-esri-search-form
    source-selector
    show-map
    @widget="ready"
    @submit="reset"
    @result="handleResult"
  ></hc-esri-search-form>

  <script>
  new Vue({
    components: { HcEsriSearchForm },
    data: () => ({
      feature: {
        url: 'https://...',
        popupTemplate: { }
      },
      queryParams: {
        outFields: ['*']
      }
    }),
    methods: {
      ready (vm) {
        // adds feature to map
        vm.addLayer(this.feature)

        // dynamically set form data
        vm.userInput = '101 My Address'
      },
      reset (e) {
        // reset
      },
      handleResult (result) {
        result.queryFeatures(this.feature, this.queryParams).then(feature => {
          console.log(feature)
        }).catch(err => {
          // no features
        })
      }
    }
  })
  </script>
  ```
</docs>
