```html
<HcEsriSearchForm
  ref="searchForm"
  source-selector="true"
  show-map="true"
  :map-layers="[featureLayer]"
  @submit="reset"
  @result="handleResult"
/>
```

```javascript
import HcEsriSearchForm from '@hcflgov/esri-search-form'

// esri FeatureLayer
const featureLayer = {
  url: 'https://...',
  outFields: ['*'],
  // popupTemplate: {}
}

export default {
  components: { HcEsriSearchForm },

  mounted() {
    // dynamically set form data for testing purposes
    this.$refs.searchForm.userInput = '101 My Address'
    // this.$refs.searchForm.sourceIndex = 1
  },

  data: () => ({
    featureAttributes: null,
  }),

  methods: {
    reset() {
      this.featureAttributes = null
    },
    async handleResult(results) {
      try {
        const { attributes } = await results.queryFeatures(featureLayer)
        this.featureAttributes = attributes
      } catch (error) {
        // no features
      }
    },
  },
}
```
