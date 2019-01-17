<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex class="text-xs-right">
<!-- Go back button -->
          <v-btn fab flat large color="grey darken-1" @click="$router.go(-1)">
            <v-icon>close</v-icon>
          </v-btn>
        </v-flex>
<!-- Header -->
        <v-flex xs12>
          <h1>{{ header }}</h1>
        </v-flex>
      </v-layout>
    </v-flex>
<!-- Register form -->
    <v-flex d-flex>
      <v-form ref="registerForm" v-model="valid">
        <v-container>
          <v-layout row wrap justify-center>
              <v-flex xs10 sm3>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Електронна пошта"
                  autocomplete="email"
                  color="dark-grey"
                  required>
                </v-text-field>
              </v-flex>
              <v-flex xs10 sm3>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :type="'password'"
                  label="Пароль"
                  autocomplete="off"
                  required
                  color="dark-grey">
                </v-text-field>
              </v-flex>
            <v-flex xs12 sm3 my-4>
              <v-btn @click="register">
                {{ header }}
              </v-btn>
              <v-btn @click="clear">
                очистити
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
// import db from '@/components/firebaseInit'
import firebaseConfig from '@/components/firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    header: 'Реєстрація',
    errorMessage: null,
    registering: false,
    valid: false,
    userName: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Потрібно вказати ім\'я',
      v => (v && v.length <= 10) || 'Назва має містити менше 10 символів'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Потрібна електронна пошта',
      v => /.+@.+/.test(v) || 'Електронна пошта повинна бути дійсною'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Потрібен пароль',
      v => (v && v.length <= 12) || 'Пароль повинен містити менше 12 символів'
    ]
  }),
  created () {
    console.log(`Register page created`)
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
      console.log(`Firebase initialized.`)
    }
  },
  methods: {
    register () {
      if (this.valid) {
        console.log(`Registerin'.`)
        this.signUp()
      } else {
        console.log(`Check input.`)
      }
    },
    clear () {
      this.$refs.registerForm.reset()
    },
    signUp () {
      this.errorMessage = '' // clear error message?
      if (this.email && this.password) {
        this.registering = true
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(response => {
            // set current user in store
            const user = {
              isAuthenticated: true,
              userUid: response.user.uid
            }
            this.$store.commit('setUserState', user)
            // this.verifyUserEmail()
            console.log(`User added ${response.user.email}, after validating your email, you will be able to edit some strings.`)
            // this.$router.push('/')
            /*
            // add new user data to db
            if (this.name === '') { // it is optional, privacy meh
              this.name = 'Anonymous' // get default name??
            }

            let hiScoreToSet = localStorage.getItem('highestScore')
            let scoresArrayToSet
            let schoolResultsToSet
            if (hiScoreToSet) {
              scoresArrayToSet = localStorage.getItem('lastScoresArray')
              schoolResultsToSet = localStorage.getItem('schoolScores') // !do something about naming here
            } else {
              hiScoreToSet = ''
              scoresArrayToSet = ''
              schoolResultsToSet = ''
            }

            const newUserData = {
              name: this.name, // or maybe Anonymous
              uid: response.user.uid,
              email: response.user.email,
              // resultsArray: [123, 432, 554], // or not
              // hiScore: 478 // if he played more than one game
              hiScore: hiScoreToSet,
              resultsArray: scoresArrayToSet,
              schoolResultsArray: schoolResultsToSet
            }
            this.addNewUser(newUserData)
            // localStorage.setItem('userName', this.name)
            this.$store.state.user.name = this.name
            // this.addNewUser(response.user.email, response.user.uid, this.name)
            */
            /*
            firebase
              .auth()
              .signInWithEmailAndPassword(this.email, this.password)
              .then(
                response => {
                  console.log(`Login in after registration`)
                  console.log(response.user.email)
                  this.$router.push('/')
                },
                err => {
                  console.dir(err)
                  this.errorMessage = err.message
                })
              */
          })
          .catch(err => {
            console.log(err.message)
            this.errorMessage = err.message
          })
      }
    },
    verifyUserEmail () {
      let user = firebase.auth().currentUser
      user.sendEmailVerification().then(function () {
        console.log('Email sent')
      }).catch(function (error) {
        console.log(`Error! ${error}`)
      })
    }
  }
}
</script>
