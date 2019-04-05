import { loadModules, loadCss } from 'esri-loader'

export default {
  state: {
    webmap: null,
    view: null
  },
  actions: {
    async initMap ({ commit }) {
      loadCss('https://js.arcgis.com/4.10/esri/css/main.css')
      return new Promise((resolve, reject) => {
        loadModules([
          'esri/WebMap',
          'esri/views/MapView',
        ]).then(([WebMap, MapView]) => {
          let map = new WebMap({
            portalItem: { id: 'b51fb4e76e154e1b93b630eac3ea94ae' }
          })
          commit('setWebMap', map)

          new MapView({
            map,
            container: 'webMap' // #webMap found in Map component
          }).when(mv => {
            commit('setMapView', mv)
            resolve(mv)
          })
        }).catch(err => reject(err))
      })
    },
    async addLayer ({ dispatch, state }, feature) {
      await dispatch('initMap')
      loadModules([
        'esri/layers/FeatureLayer'
      ]).then(([FeatureLayer]) => {
        let featureLayer = new FeatureLayer(feature)
        state.webmap.add(featureLayer)
      })
    },
    openMapPopup ({ state, rootState }, features) {
      state.view.popup.open({
        features,
        location: rootState.search.result.feature.geometry
      })
    }
  },
  mutations: {
    setWebMap (state, data) {
      state.webmap = data
    },
    setMapView (state, data) {
      state.view = data
    }
  }
}
