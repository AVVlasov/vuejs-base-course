import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../dashboards/one.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'one',
    component: One
  },
  {
    path: '/multiply',
    name: 'multiply',
    component: ()=> import(/* webpackChunkName: "multiply" */ '../dashboards/multiply.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
