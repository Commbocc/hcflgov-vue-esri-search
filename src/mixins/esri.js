/**
* @mixin
*/
import { loadModules, loadCss } from 'esri-loader'
const options = { version: '4.11' }

export default {
  data: () => ({
    esriLoaded: false
  }),
  methods: {
    initEsriModules () {
      loadCss(`https://js.arcgis.com/${options.version}/esri/css/main.css`)
      return new Promise((resolve, reject) => {
        loadModules([
          'esri/widgets/Search',
          'esri/layers/FeatureLayer',
          'esri/WebMap',
          'esri/views/MapView'
        ], options).then(([Search, FeatureLayer, WebMap, MapView]) => {
          this.$esri = {
            Search, FeatureLayer, WebMap, MapView
          }
          this.esriLoaded = true
          resolve(this.$esri)
        }).catch(err => reject(err))
      })
    }
  }
}
