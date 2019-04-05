<template lang="html">
  <div class="embed-responsive embed-responsive-16by9 mb-3" :class="mapClass">
    <div id="webMap" class="embed-responsive-item"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'esri-map',
  methods: mapActions(['initMap']),
  mounted () {
    this.initMap()
  },
  props: {
    showMap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mapClass () {
      return (this.showMap) ? null : 'hide-map'
    }
  }
}
</script>

<style lang="css" scoped>
.hide-map {
  height: 1px;
  margin-bottom: 0 !important;
  z-index: -999;
}
</style>
