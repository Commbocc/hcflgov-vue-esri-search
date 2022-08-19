import { reactive } from 'vue'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

/**
 * @category Features
 */
export const featureLayerProps = reactive<__esri.FeatureLayerProperties>({})

/**
 * @category Features
 */
export const features = reactive<__hc_esri_search.IReactiveFeatures>({
  loading: false,
  data: [],
})

/**
 * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryFeatures)
 *
 * @category Features
 * @param geometry
 * @param options
 */
export async function queryFeatures(
  geometry: __esri.Geometry,
  options?: __esri.QueryProperties
): Promise<__esri.Graphic[]> {
  features.loading = true
  features.data = []

  try {
    const featureLayer = new FeatureLayer(
      featureLayerProps as __esri.FeatureLayerProperties
    )

    const { features: queriedFeatures } = await featureLayer.queryFeatures({
      outFields: ['*'],
      ...options,
      geometry,
    })

    features.data = queriedFeatures.map((f) => f.toJSON())

    return queriedFeatures
  } finally {
    features.loading = false
  }
}
