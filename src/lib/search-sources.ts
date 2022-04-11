/**
 * [LocatorSearchSource](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search-LocatorSearchSource.html)
 */
export const hcLocatorSource: __hc_esri_search.ILocatorSearchSourceProperties =
  {
    name: 'Address',
    placeholder: 'Search by Address',
    url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer',
    singleLineFieldName: 'SingleLine',
    minSuggestCharacters: 2,
  }

/**
 * [LayerSearchSource](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search-LayerSearchSource.html)
 */
export const hcFolioSource: __hc_esri_search.ILayerSearchSourceProperties = {
  name: 'Folio Number',
  placeholder: 'Search by Folio Number',
  layer: {
    url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0',
    outFields: ['FOLIO', 'SITE_ADDR'],
    displayField: 'FOLIO',
  },
  searchFields: ['FOLIO', 'FOLIO_NUMB'],
  minSuggestCharacters: 2,
}
