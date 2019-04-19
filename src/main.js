import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  components: { HcEsriSearchForm: App }
})

// evacuation demo
new Vue({
  name: 'evac-demo',
  data: () => ({
    featAttrs: null,
    evacFeat: {
      url: 'https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/EVACUATION_ZONES/FeatureServer/0',
      outFields: ['EZone'],
      popupTemplate: {
        title: 'Evacuation Zone {EZone}'
      }
    }
  }),
  mounted () {
    // this.$refs.searchForm.sourceIndex = 1
    this.$refs.searchForm.userInput = '601 e kennedy'
  },
  methods: {
    addLayers (addLayer) {
      addLayer(this.evacFeat)
    },
    reset () {
      this.featAttrs = null
    },
    handleResult (result) {
      result.queryFeatures(this.evacFeat).then(feature => {
        this.featAttrs = feature.attributes
      }).catch(err => {
        console.warn('query error', err)
      })
    }
  }
}).$mount('#evacuation')
