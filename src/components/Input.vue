<template lang="html">
  <div class="form-group mb-0">
    <div class="input-group input-group-lg">
      <!-- user input -->
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keyup="suggest"
        :placeholder="placeholder"
        list="suggestions"
        class="form-control data-hj-whitelist rounded-0"
        autocomplete="off"
        required
      />

      <!-- suggestions -->
      <datalist id="suggestions">
        <option v-for="(s, i) in suggestions" :value="s.text" :key="i" />
      </datalist>

      <!-- submit button -->
      <span class="input-group-append input-group-btn">
        <button
          class="btn text-white rounded-0"
          :class="btnClass"
          type="submit"
        >
          <i :class="btnIcon"></i>
          <span class="d-none d-sm-inline-block">
            {{ btnText }}
          </span>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: {
    value: String,
  },

  data: () => ({
    suggestions: [],
  }),

  methods: {
    suggest: debounce(async function() {
      this.suggestions = []
      try {
        const widget = await this.$parent.searchWidget()
        const { numResults, results } = await widget.suggest(this.value)
        this.suggestions = numResults ? results[0].results : []
      } catch (error) {
        console.error(error.message)
      }
    }, 300),
  },

  computed: {
    placeholder() {
      return this.$parent.activeSearchSource
        ? this.$parent.activeSearchSource.placeholder
        : 'Search...'
    },
    btnClass() {
      return this.$parent.loading ? 'btn-warning' : 'btn-secondary bg-secondary'
    },
    btnIcon() {
      return this.$parent.loading
        ? 'fa fa-fw fa-spinner fa-spin'
        : 'fa fa-fw fa-search'
    },
    btnText() {
      return 'Find'
    },
  },
}
</script>
