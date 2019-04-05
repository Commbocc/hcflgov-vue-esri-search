<template lang="html">
  <div class="form-group mb-0">
    <div class="input-group input-group-lg">
      <!-- user input -->
      <input v-model="$parent.userInput" @keyup="makeSuggestions" :placeholder="searchSource.placeholder" id="searchWidget" list="suggestions" class="form-control data-hj-whitelist" autocomplete="off" required />

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
import { mapActions, mapState, mapGetters } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  methods: {
    makeSuggestions: debounce(function () {
      this.fetchSuggestions()
    }, 300),
    ...mapActions(['fetchSuggestions'])
  },
  computed: {
    ...mapState({
      loading: state => state.loading,
      suggestions: state => state.search.suggestions
    }),
    ...mapGetters(['searchSource']),
    btnClass () {
      return (this.loading) ? 'btn-warning' : 'btn-secondary'
    },
    btnIcon () {
      return (this.loading) ? 'fa fa-fw fa-spinner fa-spin' : 'fa fa-fw fa-search'
    },
    btnText () {
      return 'Find'
    }
  }
}
</script>
