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
    evacAttrs: null,
    evacFeat: {
      url: 'https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/EVACUATION_ZONES/FeatureServer/0',
      outFields: ['EZone'],
      popupTemplate: {
        title: 'Evacuation Zone {EZone}'
      }
    }
  }),
  mounted () {
    this.$refs.searchForm.userInput = '601 e kennedy'
  },
  methods: {
    reset () {
      this.evacAttrs = null
    },
    handleResult (result) {
      result.queryFeatures(this.evacFeat).then(feature => {
        this.evacAttrs = feature.attributes
      }).catch(err => {
        console.warn('evacuation query error', err)
      })
    }
  }
}).$mount('#evacuation')

// mobility demo
new Vue({
  name: 'mobility-demo',
  data: () => ({
    mobilityAttrs: null,
    parkSchoolsAttrs: null,
    mobilityFeat: {
      url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0',
      outFields: ['DATA']
    },
    parkSchoolsFeat: {
      url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3',
      outFields: ['ZONE']
    }
  }),
  mounted () {
    // this.$refs.searchForm.userInput = '601 e kennedy'
    this.$refs.searchForm.sourceIndex = 1
    // this.$refs.searchForm.userInput = '1935570000'
    this.$refs.searchForm.userInput = '0786320625'
  },
  methods: {
    reset () {
      this.mobilityAttrs = null
      this.parkSchoolsAttrs = null
    },
    handleResult (result) {
      Promise.all([
        result.queryFeatures(this.mobilityFeat),
        result.queryFeatures(this.parkSchoolsFeat)
      ]).then(districts => {
        this.mobilityAttrs = districts[0].attributes
        this.parkSchoolsAttrs = districts[1].attributes
      }).catch(err => {
        console.warn('distircts query error', err)
      })
    }
  }
}).$mount('#mobility')
