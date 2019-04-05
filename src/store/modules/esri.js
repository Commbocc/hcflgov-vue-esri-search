import { loadModules } from 'esri-loader'

export default {
  actions: {
    widgetSearch ({ getters, rootState }) {
      return getters.widget.then(widget => {
        return widget.search(rootState.userInput)
      })
    },
    widgetSuggest ({ getters, rootState }) {
      return getters.widget.then(widget => {
        return widget.suggest(rootState.userInput)
      })
    },
    queryFeatures ({ rootState, dispatch }, feature) {
      return new Promise((resolve, reject) => {
        loadModules([
          'esri/layers/FeatureLayer'
        ]).then(([FeatureLayer]) => {
          let featureLayer = new FeatureLayer(feature)

          featureLayer.queryFeatures({
            returnGeometry: true,
            outFields: feature.outFields || ['*'],
            geometry: rootState.search.result.feature.geometry
          }).then(response => {
            if (response.features.length) {
              resolve(response.features[0])

              // add popup to map
              if (feature.popupTemplate) {
                dispatch('openMapPopup', response.features)
              }

            } else {
              reject('No Features Found')
            }
          })

        })
      })
    }
  },
  getters: {
    widget: (state, getters, rootState) => {
      return loadModules([
        'esri/widgets/Search'
      ]).then(([Search]) => {
        return new Search({
          container: 'searchWidget', // #searchWidget found in Input component
          sources: getters.searchSources,
          activeSourceIndex: rootState.search.sourceIndex,
          includeDefaultSources: false,
          view: rootState.map.view
        })
      })
    }
  }
}
