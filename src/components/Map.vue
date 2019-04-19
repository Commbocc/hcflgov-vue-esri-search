<template lang="html">
  <div class="embed-responsive embed-responsive-16by9 mb-3" :class="mapClass">
    <div ref="webmap" class="embed-responsive-item"></div>
  </div>
</template>

<script>
export default {
  name: 'esri-map',
  data: () => ({
    webmap: null,
    mapview: null
  }),
  mounted () {
    this.$parent.initMap(this.$refs.webmap).then(context => {
      this.webmap = context.webmap
      this.mapview = context.mapview
      this.$parent.$emit('mapready', this.$parent.addLayer)
    })
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
