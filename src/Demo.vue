<template>
  <div class="rte">
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <div class="card card-body v-card mb-3">
      <hc-esri-search-form ref="searchForm" source-selector show-map @submit="reset" @result="handleResult"></hc-esri-search-form>
    </div>

    <p v-for="n in 1" :key="n">Lorem {{ n }} ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <pre v-if="true" class="bg-dark text-light p-3">{{ $data }}</pre>
  </div>
</template>

<script>
import HcEsriSearchForm from './App'

export default {
  name: 'demo',
  components: { HcEsriSearchForm },
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
    this.$refs.searchForm.addLayer(this.evacFeat)
    // this.$refs.searchForm.sourceIndex = 1
    this.$refs.searchForm.userInput = '601 e kennedy'
  },
  methods: {
    reset () {
      this.featAttrs = null
    },
    handleResult (result) {
      // console.log('demo result', result)
      result.queryFeatures(this.evacFeat).then(feature => {
        // console.log('query', feature)
        this.featAttrs = feature.attributes
      }).catch(err => {
        console.warn('query error', err)
      })
    }
  }
}
</script>
