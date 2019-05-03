```html
<div is="HcEsriSearchForm" ref="searchForm"
source-selector="true"
show-map="true"
v-bind:map-layers="[featureLayer]"
@submit="reset"
@result="handleResult"
></div>

<script>
new Vue({
  components: { HcEsriSearchForm },
  data: () => ({
    featureLayer: {
      url: 'https://...',
      outFields: ['*'],
      // popupTemplate: {}
    }
  }),
  mounted () {
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
