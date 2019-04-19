/**
* @mixin
*/

import { loadModules } from 'esri-loader'

export default {
  methods: {
    searchWidget () {
      return new Promise((resolve, reject) => {
        loadModules(['esri/widgets/Search']).then(([Search]) => {
          let view = (this.$refs.map) ? this.$refs.map.mapview : null

          let widget = new Search({
            sources: this.searchSources,
            activeSourceIndex: this.sourceIndex,
            includeDefaultSources: false,
            view
          })
          resolve(widget)
        }).catch(err => reject(err))
      })
    },
    initFeatureLayer (feature) {
      return new Promise((resolve, reject) => {
        loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
          let featureLayer = new FeatureLayer(feature)
          resolve(featureLayer)
        }).catch(err => reject(err))
      })
    },
    queryFeatures (feature) {
      return new Promise((resolve, reject) => {
        this.initFeatureLayer(feature).then(featureLayer => {
          featureLayer.queryFeatures({
            returnGeometry: true,
            outFields: feature.outFields || ['*'],
            geometry: this.searchResult.feature.geometry
          }).then(response => {
            if (response.features.length) {
              resolve(response.features[0])

              // add popup to map
              if (this.$refs.map) {
                // TODO: needs to change popuptemplate
                this.openMapPopup(response.features)
              }

            } else {
              reject('No Features Found')
            }
          })
        })
      })
    }
  }
}
