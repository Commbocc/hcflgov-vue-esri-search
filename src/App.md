```html
<hc-esri-search-form ref="searchForm"
source-selector
show-map
@submit="reset"
@result="handleResult"
></hc-esri-search-form>

<script>
new Vue({
  components: { HcEsriSearchForm },
  data: () => ({
    feature: {
      url: 'https://...',
      outFields: ['*'],
      // popupTemplate: {}
    }
  }),
  mounted () {
    // adds feature to map
    // this.$refs.searchForm.addLayer(this.feature)

    // dynamically set form data for testing purposes
    // this.$refs.searchForm.sourceIndex = 1
    this.$refs.searchForm.userInput = '101 My Address'
  },
  methods: {
    reset (e) {
      // reset
    },
    handleResult (result) {
      result.queryFeatures(this.feature).then(feature => {
        console.log(feature)
      }).catch(err => {
        // no features
      })
    }
  }
})
</script>
```
