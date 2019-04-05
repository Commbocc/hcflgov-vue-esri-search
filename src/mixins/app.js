/**
* @mixin
*/
import store from '../store'
import { mapActions } from 'vuex'
import { Sources, Input, EsriMap } from '../components'

export default {
  store,
  components: { Sources, Input, EsriMap },
  computed: {
    userInput: {
      get () {
        return this.$store.state.userInput
      },
      set (value) {
        this.$store.commit('setUserInput', value)
      }
    },
    sourceIndex: {
      get () {
        return this.$store.state.search.sourceIndex
      },
      set (value) {
        this.$store.commit('setSourceIndex', value)
      }
    }
  },
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

      this.fetchSearchResult().then(result => {
        /**
        * Triggered when a search returns a result, returns a `Promise`&lt;[SearchResponse](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html#SearchResponse)&gt; with an added `queryFeatures` function.
        * The `queryFeatures` fucntion accepts the following arguments and returns a `Promise`&lt;[FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-FeatureSet.html)&gt;.
        *
        * @property {Object | String} feature an autocastable [Feature object](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#properties-summary) or a [FeatureLayer Url](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#url)
        * @property {Object} queryParams an autocastable [Query object](https://developers.arcgis.com/javascript/latest/api-reference/esri-tasks-support-Query.html#properties-summary)
        * @type {SearchResponse}
        */
        this.$emit('result', {
          ...result,
          queryFeatures: this.queryFeatures
        })
      })
    },
    ...mapActions([
      'fetchSearchResult',
      'queryFeatures',
      'addLayer'
    ])
  }
}
