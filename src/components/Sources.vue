<template lang="html">
  <div class="form-group mb-1">

    <div class="font-weight-bold">Search by:</div>

    <div v-for="(source, i) in $parent.searchSources" class="form-check form-check-inline" :key="i">
      <input v-model="$parent.sourceIndex" class="form-check-input" type="radio" name="searchSources" :id="`searchSource${i}`" :value="i">
      <label class="form-check-label" :for="`searchSource${i}`">{{ source.name }}</label>
    </div>

  </div>
</template>

<script>
export default {
}
</script>
