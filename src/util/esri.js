import { loadModules, loadCss } from 'esri-loader'
const options = { version: '4.16' }

loadCss(`https://js.arcgis.com/${options.version}/esri/css/main.css`)

export default async () => {
  const [FeatureLayer, Search, WebMap, MapView] = await loadModules(
    [
      'esri/layers/FeatureLayer',
      'esri/widgets/Search',
      'esri/WebMap',
      'esri/views/MapView',
    ],
    options
  )
  return { FeatureLayer, Search, WebMap, MapView }
}
