<template lang="html">
  <div class="form-group mb-0">
    <div class="input-group input-group-lg">
      <!-- user input -->
      <input v-model="$parent.userInput" @keyup="suggest" :placeholder="$parent.searchSource.placeholder" list="suggestions" class="form-control data-hj-whitelist" autocomplete="off" required />

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
  data: () => ({
    suggestions: []
  }),
  methods: {
    suggest: debounce(function () {
      this.suggestions = []
      this.$parent.fetchSuggestions().then(results => {
        this.suggestions = results
      })
    }, 300)
  },
  computed: {
    btnClass () {
      return (this.$parent.loading) ? 'btn-warning' : 'btn-secondary'
    },
    btnIcon () {
      return (this.$parent.loading) ? 'fa fa-fw fa-spinner fa-spin' : 'fa fa-fw fa-search'
    },
    btnText () {
      return 'Find'
    }
  }
}
</script>
