<template lang="html">
  <div class="form-group mb-1">
    <div class="font-weight-bold">Search by:</div>

    <div
      v-for="(source, i) in searchSources"
      class="form-check form-check-inline"
      :key="i"
    >
      <input
        :value="value"
        @change="$emit('input', i)"
        :checked="value == i"
        class="form-check-input"
        type="radio"
        name="searchSources"
        :id="`searchSource-${_uid}-${i}`"
      />
      <label class="form-check-label" :for="`searchSource-${_uid}-${i}`">{{
        source.name
      }}</label>
    </div>
  </div>
</template>

<script>
import SearchSources from '../util/searchSources'

export default {
  props: {
    value: Number,
  },

  async created() {
    this.searchSources = await SearchSources()
  },

  data: () => ({
    searchSources: [],
  }),
}
</script>
