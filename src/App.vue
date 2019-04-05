<template lang="html">
  <form @submit.prevent="search" class="">

    <!-- source selector -->
    <Sources v-show="sourceSelector"/>

    <!-- search widget -->
    <Input />

    <!-- status -->
    <small class="small form-text text-muted d-block">
      {{ $store.state.status }} &nbsp;
    </small>

    <!-- map -->
    <EsriMap v-if="sourceSelector || showMap" :show-map="showMap" ref="map" />

  </form>
</template>

<script>
import AppMixin from './mixins/app'

export default {
  name: 'hc-esri-search-form',
  mixins: [AppMixin]
}
</script>

<docs>
  ```html
  <hc-esri-search-form ref="searchForm"
  source-selector
  show-map
  @submit="reset"
  @result="handleResult"
  ></hc-esri-search-form>

  <script>
  new Vue({
    components: { HcEsriSearchForm },
    data: () => ({
      feature: {
        url: 'https://...',
        outFields: ['*'],
        // popupTemplate: {}
      }
    }),
    mounted () {
      // adds feature to map
      // this.$refs.searchForm.addLayer(this.feature)

      // dynamically set form data for testing purposes
      // this.$refs.searchForm.sourceIndex = 1
      this.$refs.searchForm.userInput = '101 My Address'
    },
    methods: {
      reset (e) {
        // reset
      },
      handleResult (result) {
        result.queryFeatures(this.feature).then(feature => {
          console.log(feature)
        }).catch(err => {
          // no features
        })
      }
    }
  })
  </script>
  ```
</docs>
