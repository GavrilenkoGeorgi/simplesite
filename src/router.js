import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
  ]
})
