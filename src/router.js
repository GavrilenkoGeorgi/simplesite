import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior (to, from) { // ?
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage // ?
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
      path: '/price',
      name: 'price',
      component: () => import(/* webpackChunkName: "price" */ './views/Price.vue')
    },
    {
      path: '/merch',
      name: 'merch',
      component: () => import(/* webpackChunkName: "merch" */ './views/Merch.vue')
    },
    {
      path: '/consultform',
      name: 'consultForm',
      component: () => import(/* webpackChunkName: "consultForm" */ './views/ConsultForm.vue')
    },
    {
      path: '/philosophy',
      name: 'philosophy',
      component: () => import(/* webpackChunkName: "philosophy" */ './views/Philosophy.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "contacts" */ './views/Contacts.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import(/* webpackChunkName: "reviews" */ './views/Reviews.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/priceeditor',
      name: 'priceEditor',
      component: () => import(/* webpackChunkName: "priceEditor" */ './views/PriceEditor.vue')
    }
  ]
})
