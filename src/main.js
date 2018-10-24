import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../node_modules/vuetify/dist/vuetify.min.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueObserveVisibility from 'vue-observe-visibility'
import Vuetify from 'vuetify'

// library.add(faCoffee)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.use(VueObserveVisibility)
Vue.use(Vuetify)

Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
