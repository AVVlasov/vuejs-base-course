import Vue from 'vue'
import VueMaterial from 'vue-material'

import store from './__data__/store'

import App from './App.vue'
import router from './router'

Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')