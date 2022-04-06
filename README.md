# @hcflgov/vue-esri-search

![NPM](https://img.shields.io/npm/v/@hcflgov/vue-esri-search.svg)

- [See a demo](https://commbocc.github.io/hcflgov-vue-esri-search/)
- [View the documentation](https://commbocc.github.io/hcflgov-vue-esri-search/docs/)

## Installation

Create a Vue project using [Vite](https://vitejs.dev/guide/).

```bash
yarn create vite new-proj
```

```bash
yarn add @hcflgov/vue-esri-search
```

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Project setup

### Bootstrap

Optionally add [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/#quick-start)

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
```

### Usage

```html
<!-- src/App.vue -->
<script setup>
  import {
    SearchBootstrap,
    featureLayerProps,
    queryFeatures,
  } from '@hcflgov/vue-esri-search'

  // set feature layer url to query against
  featureLayerProps.url =
    'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Counties/FeatureServer/0'

  // SearchBootstrap's submit event
  const watchResults = async (results) => {
    try {
      if (!results) throw 'No Search Results'
      const [firstResult] = results

      // query result's extent agains feature layer
      const queriedFeatures = await queryFeatures(firstResult?.extent, {
        // returnGeometry: true,
      })

      console.log('fun with features!', queriedFeatures)
    } catch (error) {
      console.warn(error)
    }
  }
</script>

<template>
  <SearchBootstrap hc-sources large @results="watchResults" />
</template>
```

Using typescript?

```ts
const watchResults = async (results: __esri.SearchResult[] | undefined) => {}
```
