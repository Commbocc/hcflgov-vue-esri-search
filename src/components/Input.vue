<template lang="html">
  <div class="form-group mb-0">
    <div class="input-group input-group-lg">
      <!-- user input -->
      <input :value="value" @input="$emit('input', $event.target.value)" @keyup="makeSuggestions" :placeholder="$parent.searchSource.placeholder" id="searchWidget" list="suggestions" class="form-control data-hj-whitelist" autocomplete="off" required />

      <!-- suggestions -->
      <datalist id="suggestions">
        <option v-for="(s, i) in suggestions" :value="s.text" :key="i" />
      </datalist>

      <!-- submit button -->
      <span class="input-group-append input-group-btn">
        <button class="btn text-white rounded-0" :class="btnClass" type="submit">
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
  props: ['value'],
  data: () => ({
    suggestions: []
  }),
  methods: {
    makeSuggestions: debounce(function() {
      if (this.value.length) {
        this.$parent.widget.suggest(this.value).then(event => {
          if (event.numResults) {
            this.suggestions = event.results[0].results
          }
        })
      }
    }, 300)
  },
  computed: {
    btnClass () {
      return (this.$parent.isSearching) ? 'btn-warning' : 'btn-secondary'
    },
    btnIcon () {
      return (this.$parent.isSearching) ? 'fa fa-fw fa-spinner fa-spin' : 'fa fa-fw fa-search'
    },
    btnText () {
      return 'Find'
    }
  }
}
</script>
