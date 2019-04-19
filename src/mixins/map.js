/**
* @mixin
*/

import { loadModules, loadCss } from 'esri-loader'

export default {
  methods: {
    initMap (container) {
      loadCss('https://js.arcgis.com/4.10/esri/css/main.css')

      return new Promise((resolve, reject) => {
        loadModules([
          'esri/WebMap',
          'esri/views/MapView'
        ]).then(([WebMap, MapView]) => {

          let webmap = new WebMap({
            portalItem: { id: 'b51fb4e76e154e1b93b630eac3ea94ae' }
          })

          let mapview = new MapView({
            map: webmap,
            container
          })

          mapview.when(mv => {
            resolve({
              webmap,
              mapview: mv
            })
          })

        }).catch(err => reject(err))
      })
    },
    addLayer (feature) {
      this.initFeatureLayer(feature).then(fl => {
        this.$refs.map.webmap.add(fl)
      }).catch(err => {
        console.warn(err)
      })
    },
    openMapPopup (features) {
      this.$refs.map.mapview.popup.open({
        features,
        location: this.searchResult.result.feature.geometry
      })
    }
  }
}
