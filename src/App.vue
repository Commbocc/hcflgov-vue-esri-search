<script setup lang="ts">
import {
  // search component
  SearchBootstrap,

  // composition api
  featureLayerProps,
  queryFeatures,

  // optional
  input,
  searchProps,
  searchResults,
  suggestions,
  features,
} from './lib'
import { reactive, watch } from 'vue'

// SearchBootstrap's submit event
const watchResults = async (results: __esri.SearchResult[]) => {
  try {
    if (!results.length) throw 'No Search Results'
    const [firstResult] = results

    // query result's geometry against feature layer
    const queriedFeatures = await queryFeatures(
      firstResult?.feature?.geometry,
      {
        // returnGeometry: true,
      }
    )

    console.log('fun with features!', queriedFeatures)
  } catch (error) {
    console.warn(error)
  }
}

watch(input, () => {
  // searchResults.data = []
  features.data = []
})

// demo options
const options = reactive({
  size: 1,
  sources: 0,
  hideSources: 0,
})

// set feature layer url to query against
featureLayerProps.url =
  'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Counties/FeatureServer/0'
input.value = '601 e kennedy'

if (import.meta.env.DEV) {
  featureLayerProps.url =
    'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteRouteSchedules/MapServer/2'
  // input.value = '601 e kennedy'
  // searchProps.activeSourceIndex = 0
  options.sources = 1
}
</script>

<!--  -->

<template>
  <SearchBootstrap
    id="form"
    :small="options.size === 0"
    :large="options.size === 2"
    :hc-sources="options.sources === 1"
    :hide-sources="options.hideSources === 1"
    @results="watchResults"
  />

  <section class="bg-secondary p-3 mt-5">
    <div class="d-grid gap-2 mb-3">
      <a href="./docs/" target="_blank" class="btn btn-sm btn-light">
        Documentation
      </a>
    </div>

    <details open class="card">
      <summary class="card-header">Options</summary>

      <div class="card-body">
        <label class="form-label w-100">Use HC Search Sources</label>
        <div
          v-for="(bool, i) in ['false', 'true']"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="radio"
            name="hc-sources"
            :id="`hc-sources-${i}`"
            :value="i"
            v-model="options.sources"
          />
          <label class="form-check-label" :for="`hc-sources-${i}`">
            {{ bool }}
          </label>
        </div>
      </div>

      <div v-if="options.sources" class="card-body">
        <label class="form-label w-100">Hide Sources</label>
        <div
          v-for="(bool, i) in ['false', 'true']"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="radio"
            name="hide-sources"
            :id="`hide-sources-${i}`"
            :value="i"
            v-model="options.hideSources"
          />
          <label class="form-check-label" :for="`hide-sources-${i}`">
            {{ bool }}
          </label>
        </div>
      </div>

      <div class="card-body">
        <label for="featureLayerUrl" class="form-label">
          Feature Layer URL to query
        </label>
        <input
          type="email"
          class="form-control"
          id="featureLayerUrl"
          placeholder="https://..."
          v-model="featureLayerProps.url"
        />
      </div>

      <div class="card-body">
        <label class="form-label w-100">Size</label>
        <div
          v-for="(size, i) in ['small', 'medium', 'large']"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="radio"
            name="size"
            :id="`size-${size}`"
            :value="i"
            v-model="options.size"
          />
          <label class="form-check-label" :for="`size-${size}`">{{
            size
          }}</label>
        </div>
      </div>
    </details>

    <details class="card">
      <summary class="card-header">Suggestions</summary>
      <pre class="card-body">{{ suggestions }}</pre>
    </details>

    <details class="card">
      <summary class="card-header">Search Results</summary>
      <pre class="card-body">{{ searchResults }}</pre>
    </details>

    <details open class="card">
      <summary class="card-header">Queried Features</summary>
      <pre id="queriedFeatures" class="card-body">{{ features }}</pre>
    </details>
  </section>
</template>

<style>
details:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
