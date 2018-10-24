<template>
  <v-flex my-4 py-4>
    <v-layout align-center justify-center column>
      <v-flex>
        <h1>{{ formTitle }}</h1>
      </v-flex>
    </v-layout>
      <v-layout align-center justify-center>
      <v-flex xs12 sm6 md6 lg4 xl2>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Имя"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Эл. почта"
      required
    ></v-text-field>
    <!--v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select-->
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Прислать рекламу?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      Отправить
    </v-btn>
    <v-btn @click="clear">Очистить</v-btn>
  </v-form>
      </v-flex>
      </v-layout>
  </v-flex>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data: () => ({
    formTitle: 'Оставить заявку',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
