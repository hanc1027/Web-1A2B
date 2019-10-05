import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user_qes',
      name: 'user_qes',
      component: () => import('./views/User_qes.vue')
    },
    {
      path: '/cmp_qes',
      name: 'cmp_qes',
      component: () => import('./views/Cmp_qes.vue')
    },
    {
      path: '*',
      name: 'NotFound', component: () => import('./views/404.vue')
    }
  ]
})
