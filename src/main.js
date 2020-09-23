import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  components: { HcEsriSearchForm: App },
})

// evacuation demo
new Vue({
  data: () => ({
    evacAttrs: null,
  }),

  mounted() {
    this.$refs.searchForm.userInput = '601 e kennedy blvd, tampa'
  },

  methods: {
    reset() {
      this.evacAttrs = null
    },
    async handleResult({ queryFeatures }) {
      const { attributes } = await queryFeatures(this.evacFeature)
      this.evacAttrs = attributes
    },
  },

  computed: {
    evacFeature() {
      return {
        url:
          'https://services.arcgis.com/3wFbqsFPLeKqOlIK/ArcGIS/rest/services/Evacuation_Zones_Hosted/FeatureServer/0',
        outFields: ['EZone'],
        popupTemplate: {
          title: 'Evacuation Zone: {EZone}',
        },
      }
    },
  },
}).$mount('#evacuation')

// mobility demo
new Vue({
  name: 'mobility-demo',

  data: () => ({
    mobilityAttrs: null,
    parkSchoolsAttrs: null,
  }),

  mounted() {
    this.$refs.searchForm.searchSourceIndex = 1
    // this.$refs.searchForm.userInput = '1935570000'
    this.$refs.searchForm.userInput = '0786320625'
  },

  methods: {
    reset() {
      this.mobilityAttrs = null
      this.parkSchoolsAttrs = null
    },

    async handleResult({ queryFeatures }) {
      const [mobilityAttrs, parkSchoolsAttrs] = await Promise.all([
        queryFeatures(this.mobilityFeat),
        queryFeatures(this.parkSchoolsFeat),
      ])

      this.mobilityAttrs = mobilityAttrs.attributes
      this.parkSchoolsAttrs = parkSchoolsAttrs.attributes
    },
  },

  computed: {
    mobilityFeat() {
      return {
        url:
          'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/Mobility_Fees/MapServer/0',
        outFields: ['DATA'],
      }
    },
    parkSchoolsFeat() {
      return {
        url:
          'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/3',
        outFields: ['ZONE'],
      }
    },
  },
}).$mount('#mobility')
