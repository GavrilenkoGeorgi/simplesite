import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/animate.css'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueAxios, axios)

Vue.use(VueObserveVisibility)

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
