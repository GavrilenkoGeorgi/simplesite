import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '../node_modules/vuetify/dist/vuetify.min.css'

import VueObserveVisibility from 'vue-observe-visibility'
import Vuetify from 'vuetify'

import './components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'intersection-observer'

Vue.use(VueObserveVisibility)
Vue.use(Vuetify)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
firebase.firestore()

const initializeAuth = new Promise(resolve => {
  // this adds a hook for the initial auth-change event
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      authService.setUser(user)
      resolve(user)
    }
    /* else {
      console.log(`No user!`)
      // this.userName = this.getDefaultUserName
    } */
  })
})

const authService = {
  userUid: null,
  authenticated () {
    return initializeAuth.then(user => {
      return user && !user.isAnonymous
    })
  },
  setUser (user) {
    this.userUid = user.uid
    console.log(`User set ${user.email}`)
  }
  /*
  login (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  logout () {
    firebase.auth().signOut().then(() => {
      console.log('logout done')
    })
  }
  */
}
/*
function getUserNameFromDB (uid) {
  // console.log(`Getting user name for uid ${uid}`)
  db.collection('users').where('uid', '==', uid)
    .get()
    .then(function (querySnapshot) {
      let userName
      querySnapshot.forEach(function (doc) {
        if (doc.data().uid === uid) {
          userName = doc.data().name
        }
      })
      store.commit('setUserName', userName)
      console.log(`Setting user name: ${userName}`)
      return userName
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error)
    })
}
*/
if (!store.state.userState.isAuthenticated) {
  authService.authenticated().then((result) => {
    // this.userName = authService.userUid
    // console.log(`Setting uid ${authService.userUid}`)
    // let nameToSet = getUserNameFromDB(authService.userUid)
    if (result) {
      let currentUserData = {
        isAuthenticated: true,
        uid: authService.userUid
        // name: nameToSet
      }
      store.commit('setUser', currentUserData)
    }
  }).catch((error) => {
    console.log(`Error ${error}`)
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
