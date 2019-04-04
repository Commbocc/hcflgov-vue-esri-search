import Vue from 'vue'
import Demo from './Demo.vue'

Vue.config.productionTip = false

// dev demo
new Vue({
  render: h => h(Demo),
}).$mount('#app')
