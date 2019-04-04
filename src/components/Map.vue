<template lang="html">
  <div class="embed-responsive embed-responsive-16by9 mb-3" :class="mapClass">
    <div id="mapView" class="embed-responsive-item"></div>
  </div>
</template>

<script>
export default {
  name: 'esri-map',
  mounted () {
    this.$parent.initMap()
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
