declare module __hc_esri_search {
  interface IReactive {
    error?: String
    loading: boolean
  }

  interface IReactiveSearchProps extends __esri.widgetsSearchProperties {
    sources?: (ILayerSearchSourceProperties | ILocatorSearchSourceProperties)[]
  }

  interface IReactiveSuggestions extends IReactive {
    data: __esri.SuggestResult[]
  }

  interface IReactiveSearchResults extends IReactive {
    status?: String
    data: __esri.SearchResult[]
  }

  interface IReactiveFeatures extends IReactive {
    data: __esri.Graphic[]
  }

  // sources
  interface ISearchSourceProperties {
    name: string
    placeholder: string
    minSuggestCharacters?: number
  }

  interface ILayerSearchSourceProperties extends ISearchSourceProperties {
    layer: {
      url: string
      displayField: string
      outFields?: string[]
    }
    searchFields: string[]
  }

  interface ILocatorSearchSourceProperties extends ISearchSourceProperties {
    url: string
    layer?: undefined
    singleLineFieldName?: string
  }
}
