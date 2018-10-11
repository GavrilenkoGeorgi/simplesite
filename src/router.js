import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/grooming',
      name: 'grooming',
      component: () => import(/* webpackChunkName: "grooming" */ './views/Grooming.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')
    },
    {
      path: '/consultform',
      name: 'consultform',
      component: () => import(/* webpackChunkName: "consultform" */ './views/ConsultForm.vue')
    },
    {
      path: '/philosophy',
      name: 'philosophy',
      component: () => import(/* webpackChunkName: "philosophy" */ './views/Philosophy.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/debug',
      name: 'debug',
      component: () => import(/* webpackChunkName: "debug" */ './components/Debug.vue')
    } /*,
    {
      path: '/*',
      component: Main
    } */
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
