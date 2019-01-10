import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import '../node_modules/vuetify/dist/vuetify.min.css'
// import { VueReCaptcha } from 'vue-recaptcha-v3'

import VueObserveVisibility from 'vue-observe-visibility'
import Vuetify from 'vuetify'

// Vue.use(VueReCaptcha, { siteKey: '6Lc6u4YUAAAAADTNEoyuKUTI1FqjoMB82pStZJ-b' })

// Vue.use(VueAxios, axios)
Vue.use(VueObserveVisibility)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
