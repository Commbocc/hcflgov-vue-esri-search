export default {
  state: {
    result: null,
    sourceIndex: 0,
    suggestions: []
  },
  actions: {
    fetchSearchResult ({ commit, dispatch, getters, rootState }) {
      commit('setSearchResult', null)
      commit('setLoading')
      commit('setStatus', `Searching for ${getters.searchSource.name}: ${rootState.userInput}...`)

      return new Promise((resolve, reject) => {
        dispatch('widgetSearch').then(response => {
          if (response.numResults) {
            let result = response.results[0].results[0]
            commit('setStatus', null)
            commit('setSearchResult', result)
            resolve(result)
          } else {
            let status = 'No Search Results Found'
            commit('setStatus', status)
            reject(status)
          }
        }).catch(err => {
          reject(err)
        }).then(() => {
          commit('setLoading', false)
        })
      })
    },
    fetchSuggestions ({ dispatch, commit }) {
      commit('setSearchSuggestions', [])
      dispatch('widgetSuggest').then(response => {
        if (response.numResults) {
          commit('setSearchSuggestions', response.results[0].results)
        } else {
          commit('setSearchSuggestions', [])
        }
      })
    }
  },
  mutations: {
    setSearchResult (state, data) {
      state.result = data
    },
    setSourceIndex (state, data) {
      state.sourceIndex = data
    },
    setSearchSuggestions (state, data) {
      state.suggestions = data
    }
  },
  getters: {
    searchSource: (state, getters) => getters.searchSources[state.sourceIndex],
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
