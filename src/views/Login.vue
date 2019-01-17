<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex class="text-xs-right">
<!-- Register button -->
          <v-btn fab flat large color="grey darken-1" to="/register">
            <v-icon>vpn_key</v-icon>
          </v-btn>
        </v-flex>
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
              <v-btn @click="login">
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
export default {
  data: () => ({
    valid: false,
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
  methods: {
    login () {
      if (this.valid) {
        console.log(`Loggin in.`)
        this.$router.push('/cms')
      } else {
        console.log(`Check input.`)
      }
    },
    clear () {
      this.$refs.loginForm.reset()
    }
  }
}
</script>
