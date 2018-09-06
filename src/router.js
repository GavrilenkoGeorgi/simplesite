import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'
import Main from './views/Main.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/philosophy',
      name: 'philosophy',
      component: () => import(/* webpackChunkName: "philosophy" */ './views/Philosophy.vue')
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
      path: '/**',
      component: Main
    }
  ]
})
