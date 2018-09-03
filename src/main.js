import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/animate.css'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
// import VueScrollReveal from '../node_modules/vue-scroll-reveal/dist/vue-scroll-reveal'

Vue.use(Vuetify)
/*
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  // class: 'fadeInLeft',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
})
*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
