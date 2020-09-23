<template lang="html">
  <div class="embed-responsive embed-responsive-16by9 mb-3" :class="mapClass">
    <div ref="webmap" class="embed-responsive-item"></div>
  </div>
</template>

<script>
import Esri from '../util/esri'

export default {
  props: {
    showMap: Boolean,
    mapLayers: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    webmap: null,
    mapview: null,
  }),

  async mounted() {
    await this.initMap()
    this.$emit('mapready')
  },

  methods: {
    async initMap() {
      const { WebMap, MapView, FeatureLayer } = await Esri()

      const webmap = new WebMap({
        portalItem: { id: 'b51fb4e76e154e1b93b630eac3ea94ae' },
      })

      let mapview = new MapView({
        map: webmap,
        container: this.$refs.webmap,
      })

      mapview.when((mv) => {
        if (this.mapLayers.length) {
          this.mapLayers.forEach((layer) => {
            webmap.add(new FeatureLayer(layer))
            // webmap.add(new FeatureLayer({
            //   ...x,
            //   renderer: {
            //     type: 'simple',
            //     symbol: symbolConfig()
            //   }
            // }))
          })
        }

        this.webmap = webmap
        this.mapview = mv
      })
    },

    openMapPopup(features) {
      this.mapview.popup.open({
        features,
        location: this.$parent.searchResult.feature.geometry,
      })
    },
  },

  computed: {
    mapClass() {
      return this.showMap ? null : 'hide-map'
    },
  },
}
</script>

<style lang="css" scoped>
/* addresses a bug when searching by folio, requires the map to be visible in the DOM */
.hide-map {
  height: 1px;
  margin-bottom: 0 !important;
  z-index: -999;
}
</style>
