<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-layout row wrap>
        <!-- Register button -->
        <!--v-flex class="text-xs-right">
          <v-btn fab flat large color="grey darken-1" to="/register">
            <v-icon>vpn_key</v-icon>
          </v-btn>
        </v-flex-->
<!-- Header -->
        <v-flex xs12>
          <h1>Логін</h1>
        </v-flex>
      </v-layout>
    </v-flex>
<!-- Login form -->
    <v-flex d-flex>
      <v-form ref="loginForm" v-model="valid">
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
<!-- Buttons -->
            <v-flex xs12 sm3 my-4>
              <v-btn
                :loading="logginIn"
                :disabled="logginIn"
                @click="login"
              >
                <v-icon>done</v-icon>
                  логін
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
// import db from '../components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    valid: false,
    logginIn: false,

    errorMessage: null,
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
  computed: {
    ...mapGetters([
      'getUserState'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      console.log(`Login page mounted.`)
      if (this.getUserState.isAuthenticated) {
        console.log(`User is authenticated, loading editor`)
        this.$router.push('priceeditor')
      }
    })
  },
  methods: {
    setLoginLoadingState () {
      this.logginIn = !this.logginIn
      return true
    },
    login () {
      this.errorMessage = undefined
      if (this.email && this.password) { // need some proper validation
        this.setLoginLoadingState()
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(
            response => {
              console.log(`You are logged in as`)
              console.log(response.user.email)
              console.log(response.user.uid)
              // let tempName = this.getUserNameFromDB(response.user.uid)
              const newUser = {
                isAuthenticated: true,
                uid: response.user.uid
                // name: tempName
              }
              this.$store.commit('setUser', newUser)
              this.$router.push('/priceeditor')
            },
            err => {
              console.log(err.message)
              this.errorMessage = err.message
              this.setLoginLoadingState()
            })
        return true
      }
    },
    clear () {
      this.$refs.loginForm.reset()
    }
  }
}
</script>
