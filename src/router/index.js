import Vue from 'vue'
import VueRouter from 'vue-router'
import Rick from '../dashboards/rick.vue'
import Morty from '../dashboards/morty.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rick',
    component: Rick
  },
  {
    path: '/morty',
    name: 'morty',
    component: Morty
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
