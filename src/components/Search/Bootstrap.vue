<script setup lang="ts">
import { watch } from 'vue'
import {
  input,
  suggest,
  suggestions,
  searchProps,
  activeSource,
  search,
  searchResults,
} from '../../lib'
import { locator, folio } from '../../lib/search-sources'

const props =
  defineProps<{ small?: boolean; large?: boolean; hcSources?: boolean }>()

watch(
  () => props.hcSources,
  () => {
    searchProps.includeDefaultSources = props.hcSources ? false : true
    searchProps.sources = props.hcSources ? [locator, folio] : undefined
  },
  { immediate: true }
)

const emit =
  defineEmits<{
    (
      event: 'results',
      data: __hc_esri_search.IReactiveSearchResults['data']
    ): void
  }>()

const submit = async (event: Event) => {
  const results = await search()
  emit('results', results)
}
</script>

<template>
  <form @submit.prevent="submit">
    <fieldset v-if="searchProps.sources?.length">
      <legend>Search Source:</legend>
      <div
        v-for="(source, i) in searchProps.sources"
        class="form-check form-check-inline"
      >
        <input
          type="radio"
          name="search-source"
          :value="i"
          :id="`source-${i}`"
          v-model="searchProps.activeSourceIndex"
          class="form-check-input"
        />
        <label :for="`source-${i}`" class="form-check-label">
          {{ source.name }}
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Search:</legend>

      <div
        class="input-group"
        :class="{ 'input-group-sm': small, 'input-group-lg': large }"
      >
        <input
          type="text"
          class="form-control"
          :placeholder="activeSource?.placeholder || `Find Address`"
          :aria-label="activeSource?.placeholder || `Find Address`"
          aria-describedby="search-button"
          v-model="input"
          @input="suggest"
          list="suggestions"
          required
          id="esriSearchInput"
        />

        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="search-button"
        >
          <div
            v-if="searchResults.loading"
            class="spinner-border spinner-border-sm"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Search</span>
        </button>

        <datalist id="suggestions">
          <option v-for="{ text } in suggestions.data">
            {{ text }}
          </option>
        </datalist>
      </div>

      <!-- status -->
      <div class="form-text">
        {{ searchResults.status }}
      </div>
    </fieldset>
  </form>
</template>
