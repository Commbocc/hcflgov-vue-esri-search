import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as modules from './modules'

export default new Vuex.Store({
  modules: { ...modules },
  state: {
    userInput: null,
    loading: false,
    status: null
  },
  mutations: {
    setUserInput (state, data) {
      state.userInput = data
    },
    setLoading (state, data = true) {
      state.loading = data
    },
    setStatus (state, data) {
      state.status = data
    }
  }
})
