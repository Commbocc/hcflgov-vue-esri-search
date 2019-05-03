/**
* @mixin
*/
export default {
  data: () => ({
    searchResult: null,
    sourceIndex: 0
  }),
  methods: {
    fetchSearchResult () {
      this.searchResult = null
      this.loading = true
      this.status= `Searching for ${this.searchSource.name}: ${this.userInput}...`

      return new Promise((resolve, reject) => {
        this.searchWidget.search(this.userInput).then(response => {
          if (response.numResults) {
            let result = response.results[0].results[0]
            this.status = null
            this.searchResult = result
            resolve(result)
          } else {
            this.status = 'No Search Results Found'
          }
        }).catch(err => {
          reject(err)
        }).then(() => {
          this.loading = false
        })
      })
    },
    fetchSuggestions () {
      return new Promise(resolve => {
        this.searchWidget.suggest(this.userInput).then(response => {
          if (response.numResults) {
            resolve(response.results[0].results)
          } else {
            resolve([])
            // reject('Unable to provide suggestions')
          }
        })
      })
    },
    queryFeatures (feature) {
      return new Promise((resolve, reject) => {
        return new this.$esri.FeatureLayer(feature).queryFeatures({
          returnGeometry: true,
          outFields: feature.outFields || ['*'],
          geometry: this.searchResult.feature.geometry
        }).then(response => {
          if (response.features.length) {

            // open map popup
            if (this.showMap && this.$refs.map) {
              this.openMapPopup(response.features)
            }

            resolve(response.features[0])
          } else {
            reject('No Features Found')
          }
        })
      })
    }
  },
  computed: {
    searchWidget () {
      return new this.$esri.Search({
        sources: this.searchSources,
        activeSourceIndex: this.sourceIndex,
        includeDefaultSources: false,
        view: (this.$refs.map) ? this.$refs.map.mapview : null
      })
    },
    searchSource () {
      return this.searchSources[this.sourceIndex]
    },
    searchSources () {
      return [
        {
          name: 'Address',
          placeholder: 'Street Address...',
          locator: {
            // url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
            // url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer'
            // url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_WebApps/GeocodeServer'
            url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer'
          },
          singleLineFieldName: 'SingleLine',
          minSuggestCharacters: 2
        },
        {
          name: 'Folio Number',
          placeholder: 'Folio Number...',
          layer: new this.$esri.FeatureLayer({
            url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0'
          }),
          searchFields: ['FOLIO', 'FOLIO_NUMB'],
          displayField: 'FOLIO',
          outFields: ['FOLIO', 'SITE_ADDR']
        }
      ]
    }
  }
}
