declare module __hc_esri_search {
  interface IReactive {
    error: String | null
    loading: boolean
  }

  interface IReactiveSearchProps extends __esri.widgetsSearchProperties {
    sources?: (ILayerSearchSourceProperties | ILocatorSearchSourceProperties)[]
  }

  interface IReactiveSuggestions extends IReactive {
    data: __esri.SuggestResult[]
  }

  interface IReactiveSearchResults extends IReactive {
    status: String | null
    data?: __esri.SearchResult[]
  }

  interface IReactiveFeatures extends IReactive {
    data: __esri.Graphic[] | null
  }

  // sources
  interface ISearchSourceProperties extends __esri.SearchSourceProperties {
    name: string
    placeholder: string
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
