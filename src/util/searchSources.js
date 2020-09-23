import Esri from './esri'

export default async () => {
  const { FeatureLayer } = await Esri()
  return [
    {
      name: 'Address',
      placeholder: 'Street Address...',
      locator: {
        // url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
        // url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer'
        // url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_WebApps/GeocodeServer'
        url:
          'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer',
      },
      singleLineFieldName: 'SingleLine',
      minSuggestCharacters: 2,
    },
    {
      name: 'Folio Number',
      placeholder: 'Folio Number...',
      layer: new FeatureLayer({
        url:
          'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0',
      }),
      searchFields: ['FOLIO', 'FOLIO_NUMB'],
      displayField: 'FOLIO',
      outFields: ['FOLIO', 'SITE_ADDR'],
    },
  ]
}
