<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex d-flex align-center>
        <h1>{{ pageTitle }}</h1>
      </v-flex>
        <v-layout justify-center>
          <v-carousel light class="reviews" height="550px">
            <v-carousel-item class="slow"
              v-for="review in allReviews"
              :key="review.id">
              <v-layout align-center justify-center column fill-height>
                <v-flex d-flex align-center class="text-xs-center">
                  <v-layout justify-center row wrap>
                    <v-flex xs9 class="text-xs-left">
                      <v-icon v-for="i in review.stars" :key="i" color="orange">grade</v-icon>
                    </v-flex>
                    <v-flex xs9 class="text-xs-left">
                      <i>{{ review.content }}</i>
                    </v-flex>
                    <v-flex xs9 class="author-name text-xs-right">
                      {{ quoteFormatting }}{{ review.author }}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-layout>
        <v-layout justify-center wrap>
          <v-flex mt-4>
            <h3>ОСТАВЬТЕ ОТЗЫВ</h3>
          </v-flex>
          <v-flex xs10>
            <v-form
              ref="form"
              v-model="form"
              class="mt-4">
              <v-text-field
                v-model="name"
                :rules="[rules.nameLength(10)]"
                box
                color="deep-purple"
                counter="10"
                label="Ваше имя"
                style="min-height: 96px"
                type="user-name">
              </v-text-field>
              <!--v-text-field
                v-model="password"
                :rules="[rules.password, rules.length(6)]"
                box
                color="deep-purple"
                counter="6"
                label="Password"
                style="min-height: 96px"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                box
                color="deep-purple"
                label="Phone number"
                mask="phone"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="[rules.email]"
                box
                color="deep-purple"
                label="Email address"
                type="email"
              ></v-text-field-->
              <v-textarea
                v-model="formReviewText"
                :rules="[rules.reviewLength(200)]"
                auto-grow
                box
                counter="200"
                color="deep-purple"
                label="Отзыв"
                rows="5"
              ></v-textarea>
              <!--v-checkbox
                v-model="agreement"
                :rules="[rules.required]"
                color="deep-purple"
              >
                <template slot="label">
                  I agree to the&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
                  &nbsp;and&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
                </template>
              </v-checkbox-->
            </v-form>
          </v-flex>
          <v-flex xs10 sm8 md6 lg3>
            <v-flex d-flex mt-3 mb-4 >
                <v-btn
        flat
        @click="$refs.form.reset()"
      >
        ОЧИСТИТЬ
      </v-btn>
                <v-btn color="blue-grey lighten-4">
                <v-icon>format_quote</v-icon>ОТПРАВИТЬ
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pageTitle: 'отзывы',
    quoteFormatting: '— ',
    allReviews: [
      { id: 'review5', author: 'Edna', stars: 5, content: `Some notes about dogs and cats and even more stuff
                                  about cats and dogs and even their owners,
                                  so it happens to be the longest review written on
                                  this site, so here how it looks like.` },
      { id: 'review', stars: 1, author: 'Homer Simpson', content: 'Some notes about dogs and cats' },
      { id: 'review2', stars: 2, author: 'Bart', content: 'Some notes about dogs and cats and such' },
      { id: 'review3', stars: 3, author: 'Mr Flanders', content: 'Some notes about dogs and cats and something else' },
      { id: 'review4', stars: 4, author: 'Apu', content: 'Some notes about dogs and cats and even more stuff about cats and dogs' }
    ],
    agreement: false,
    formReviewText: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    name: undefined,
    password: undefined,
    phone: undefined,
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      nameLength: len => value => (value && value.length <= len) || `Name must be less than ${len} and longer than 1`,
      reviewLength: len => value => (value && value.length <= len) || `Review must be less than ${len} and longer than 1`,
      nameLengthXp: value => value.length <= 20 || 'Max 20 characters',
      password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  })
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index.scss";

h1 {
  font-size: 3em;
  font-family: $alt-font-1;
}

h2 {
  // font-size: .6em;
  color: $alt-color-primary-even-darker;
}

.contact-info {
  // color: red;
  font-size: 1.6em;
  font-family: $text-font;
}

.custom-layout {
  display: flex;
}

.subtitle {
  // color: red;
  font-size: 2em;
  text-align: left;
}
.address {
  // padding: 0;
  margin: 0;
  // font-size: 1.6em;
  text-align: left;
  // color:red;
  font-family: $alt-font-1;
}
.phone-number {
  text-decoration: none;
  text-align: left;
  padding: 0;
  margin: 0;
  font-size: 1.5em;
}

.mail-icon {
  font-size: 3em;
}

.icon-box {
  // border: 1px solid pink;
  // padding-top: .7em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
}

.email-link {
  // color: red;
  font-size: 1.3em;
}

.border {
   border: 1px solid pink;
}

.reviews {
   box-shadow: none;
   font-size: 2em;
   font-family: $text-font;
   // border: 1px solid lime;
}

.border-black {
   border: 1px solid black;
}

.author-name {
  font-weight: 700;
  line-height: 2;
}
.shadow {
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

.slow {
  transition: .8s ease-in;
}

</style>
