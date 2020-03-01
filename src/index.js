import Vue from 'vue'
import VueMaterial from 'vue-material'

import store from './__data__/store'

import App from './App.vue'
import router from './router'

Vue.use(VueMaterial)

const VueInstance = new Vue({
  router,
  store,
  render: h => h(App)
})

export default VueInstance;

export const mount = Сomponent => {
  Сomponent.$mount('#app')
};

export const unmount = () => {
  VueInstance.$destroy()
};
