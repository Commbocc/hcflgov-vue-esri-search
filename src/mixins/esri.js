/**
* @mixin
*/
import { loadCss, loadModules } from 'esri-loader'

export default {
  data: () => ({
    widget: null,
    map: null,
    mapView: null
  }),
  mounted () {
    loadCss('https://js.arcgis.com/4.10/esri/css/main.css')
    this.initSearchWidget()
  },
  methods: {
    /**
    * Adds an autocasted feature object as a [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) to the map
    *
    * @param {Object} feature
    * @public
    */
    addLayer (feature) {
      loadModules([
        'esri/layers/FeatureLayer'
      ]).then(([FeatureLayer]) => {
        let featureLayer = new FeatureLayer(feature)
        this.map.add(featureLayer)
      })
    },
    initSearchWidget () {
      this.status = 'Loading Search Widget...'
      return loadModules([
        'esri/widgets/Search',
        'esri/WebMap',
        'esri/views/MapView',
      ]).then(([Search]) => {
        this.widget = new Search({
          container: 'searchWidget', // #searchWidget found in Input component
          sources: this.searchSources,
          activeSourceIndex: this.activeSourceIndex,
          includeDefaultSources: false
        })

        /**
        * Triggered once the Esri Search Widget has loaded, returns the instance of the component
        * @type {Event}
        */
        this.$emit('widget', this)

        this.status = null
      }).catch(() => {
        this.status = 'Unable to load search widget'
      })
    },
    initMap () {
      loadModules([
        'esri/WebMap',
        'esri/views/MapView',
      ]).then(([WebMap, MapView]) => {
        this.map = new WebMap({portalItem: {
          id: 'b51fb4e76e154e1b93b630eac3ea94ae'
        }})

        new MapView({ map: this.map, container: 'mapView' }).when(mv => {
          this.mapView = mv
          this.widget.view = mv
          /**
          * Triggered once the Esri Search Widget's [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#when) is ready, returns the instance of the component
          * @type {Event}
          */
          this.$emit('map', this)
        })
      }).catch(() => {
        this.status = 'Unable to load map'
      })
    },
    queryFeatures (feature, queryParams) {
      this.status = 'Querying Features...'

      let featureObj = (typeof(feature) == 'string') ? { url: feature } : feature

      return new Promise((resolve, reject) => {
        loadModules([
          'esri/layers/FeatureLayer'
        ]).then(([FeatureLayer]) => {
          let featureLayer = new FeatureLayer(featureObj)

          let params = Object.assign({
            returnGeometry: false,
            outFields: ['*'],
            geometry: this.searchResult.feature.geometry
          }, queryParams)

          featureLayer.queryFeatures(params).then(result => {
            if (result.features.length) {
              resolve(result.features[0])
              // map popup
              if (featureObj.popupTemplate) {
                this.mapView.popup.open({
                  features: result.features,
                  location: this.searchResult.feature.geometry
                })
              }
            } else {
              reject('No Features Found')
            }

            this.status = null
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
