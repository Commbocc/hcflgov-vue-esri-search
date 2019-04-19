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
        this.searchWidget().then(widget => {
          widget.search(this.userInput).then(response => {
            if (response.numResults) {
              let result = response.results[0].results[0]
              this.status = null
              this.searchResult = result
              resolve(result)
            } else {
              this.status = 'No Search Results Found'
              reject(this.status)
            }
          }).catch(err => {
            reject(err)
          }).then(() => {
            this.loading = false
          })
        })
      })
    },
    fetchSuggestions () {
      return new Promise((resolve, reject) => {
        this.searchWidget().then(widget => {
          widget.suggest(this.userInput).then(response => {
            if (response.numResults) {
              resolve(response.results[0].results)
            } else {
              reject('Unable to provide suggestions')
            }
          })
        })
      })
    }
  },
  computed: {
    searchSource () {
      return this.searchSources[this.sourceIndex]
    },
    searchSources: () => ([
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
        featureLayer: {
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0'
        },
        searchFields: ['FOLIO', 'FOLIO_NUMB'],
        displayField: 'FOLIO',
        outFields: ['FOLIO', 'SITE_ADDR']
      }
    ])
  }
}
