/**
* @mixin
*/
export default {
  methods: {
    initMap (container) {
      return new Promise(resolve => {

        let webmap = new this.$esri.WebMap({
          portalItem: { id: 'b51fb4e76e154e1b93b630eac3ea94ae' }
        })

        let mapview = new this.$esri.MapView({
          map: webmap,
          container
        })

        mapview.when(mv => {
          if (this.mapLayers.length) {
            this.mapLayers.forEach(x => {
              webmap.add(new this.$esri.FeatureLayer(x))
              // webmap.add(new this.$esri.FeatureLayer({
              //   ...x,
              //   renderer: {
              //     type: 'simple',
              //     symbol: symbolConfig()
              //   }
              // }))
            })
          }

          resolve({
            webmap,
            mapview: mv
          })
        })
      })
    },
    openMapPopup (features) {
      this.$refs.map.mapview.popup.open({
        features,
        location: this.searchResult.feature.geometry
      })
    }
  }
}

export const symbolConfig = () => ({
  type: 'simple-marker',
  size: 10,
  color: '#f5f7f8',
  outline: {
    width: 5,
    color: '#ff6f5b'
  }
})
