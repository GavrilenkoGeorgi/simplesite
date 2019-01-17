<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex d-flex align-center>
        <h1>{{ pageTitle }}</h1>
      </v-flex>
<!-- Reviews carousel -->
        <v-layout justify-center>
          <v-carousel light class="reviews" height="550px">
            <v-carousel-item class="slow"
              v-for="review in allReviewsXP"
              :key="review.id">
              <v-layout align-center justify-center column fill-height>
                <v-flex d-flex align-center class="text-xs-center">
                  <v-layout justify-center row wrap>
                    <v-flex xs9 class="text-xs-left">
                      <v-icon v-for="i in review.stars" :key="i" color="orange">grade</v-icon>
                    </v-flex>
                    <v-flex xs9 class="text-xs-left">
                      <i>{{ review.text }}</i>
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
          <v-flex xs12 mt-4>
            <h3>ОСТАВЬТЕ СВОЙ ОТЗЫВ</h3>
          </v-flex>
          <v-flex xs10 sm8 md6>
            <v-form
              ref="form"
              v-model="form"
              class="mt-4">
              <v-text-field
                v-model="name"
                :rules="[rules.nameLength(10)]"
                required
                box
                color="blue-grey"
                counter="10"
                label="Ваше имя"
                style="min-height: 96px"
                type="user-name">
              </v-text-field>
              <v-flex mb-3>
                <v-icon id="ratingStar" v-for="star in 5" :key="star" @click="setRating">grade</v-icon>
              </v-flex>
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
                required
                :rules="[rules.reviewLength(200)]"
                auto-grow
                box
                counter="200"
                color="blue-grey"
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
          <v-flex xs12 ma-4>
              <v-btn color="blue-grey lighten-4"
                @click="$refs.form.reset()">
                ОЧИСТИТЬ
              </v-btn>
              <v-btn @click.prevent="executeRecaptcha"
                :disabled="!this.form"
                color="blue-grey lighten-2">отправить</v-btn>
              <!-- listen to verify event emited by the recaptcha component -->
              <recaptcha ref="recaptcha" @verify="getScore"></recaptcha>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Recaptcha from '@/components/Recaptcha.vue'
import secret from '@/store/recaptcha.js'
import db from '@/components/firebaseInit'

Vue.use(VueResource)

export default {
  data: () => ({
    token: null,
    pageTitle: 'отзывы',
    quoteFormatting: '— ',
    /*
    allReviews: [
      { id: 'review5', author: 'Edna', stars: 5, content: `Some notes about dogs and cats and even more stuff
                                  about cats and dogs and even their owners,
                                  so it happens to be the longest review written on
                                  this site, so here how it looks like.` },
      { id: 'review', stars: 1, author: 'Homer Simpson', content: 'Some notes about dogs and cats' },
      { id: 'review2', stars: 2, author: 'Bart', content: 'Some notes about dogs and cats and such' },
      { id: 'review3', stars: 3, author: 'Mr Flanders', content: 'Some notes about dogs and cats and something else' },
      { id: 'review4', stars: 4, author: 'Apu', content: 'Some notes about dogs and cats and even more stuff about cats and dogs' }
    ], */
    allReviewsXP: [],
    agreement: false,
    formReviewText: 'Напишите нам что-нибудь хорошее...',
    starsRating: undefined,
    userScore: undefined,
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    name: undefined,
    password: undefined,
    phone: undefined,
    rules: {
      // email: v => (v || '').match(/@/) || 'Please enter a valid email',
      // length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      nameLength: len => value => (value && value.length <= len) || `Name must be less than ${len} and longer than 1`,
      reviewLength: len => value => (value && value.length <= len) || `Review must be less than ${len} and longer than 1`,
      // nameLengthXp: value => value.length <= 20 || 'Max 20 characters',
      // password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      //  'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  }),
  components: {
    Recaptcha
  },
  methods: {
    addReview () {
      console.log('Adding review..')
      // Add a new document with a generated id.
      // console.log(`Name to add is ${this.name}`)
      // console.log(`Review to add is ${this.formReviewText}`)
      // console.log(`Stars quantity is ${this.starsRating}`)
      if (this.form) {
        console.log(`Form is: ${this.form}, adding to database, stars are ${this.starsRating}`)
        if (!this.starsRating) {
          // one star in case user forgets to set rating
          // make it required maybe?
          this.starsRating = 1
        }
        db.collection('reviews').add({
          name: this.name,
          starsRating: this.starsRating,
          review: this.formReviewText,
          approved: false
        })
          .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id)
          })
          .catch(function (error) {
            console.error('Error adding document: ', error)
          })
      } else {
        console.log(`Check your form it is: ${this.form}`)
      }
      /*
      db.collection('reviews').add({
        name: this.name,
        starsRating: this.starsRating,
        review: this.formReviewText
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        }) */
    },
    setRating (event) {
      // console.log(`Setting rating ${event.target}`)
      let child = event.target
      const parent = child.parentNode
      let index = Array.prototype.indexOf.call(parent.children, child) + 1
      console.log(`Setting rating to ${index}`)
      this.userStarRating = index
      let starsToHighlight = parent.children
      // clear all stars if some of them are set
      for (let star of starsToHighlight) {
        star.style = 'color: gray;'
      }
      // set stars rating variable
      this.starsRating = index
      while (index) {
        starsToHighlight[index - 1].style = 'color: orange;'
        index--
      }
    },
    // send your recaptcha token to the server to verify it
    getScore (response) {
      // console.log(response)
      this.$http.post(`https://cors-escape.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=${secret.recaptchaSecret}&response=${response}`)
        .then(response => {
          this.userScore = response.body.score
          console.log(`Score is: ${response.body.score}`)
        }).then(() => {
          if (this.userScore >= 0.3) {
            console.log('Adding to database')
            // console.log(`Type of score is ${typeof this.userScore}`)
            this.addReview()
          } else {
            console.log(`Your score is too low: ${this.userScore}, try again`)
            // console.log(`Type of score is ${typeof this.userScore}`)
          }
          // this.addReview()
        })
    },
    // execute the recaptcha widget
    executeRecaptcha () {
      this.$refs.recaptcha.execute()
    },
    check () {
      console.log('Checking')
      /*
      this.$recaptcha('login').then((token) => {
        console.log(token) // Will print the token
        this.token = token
      })
      */
    },
    getReviews () {
      console.log('Getting reviews..')
      db.collection('reviews') // .where('starsRating', '==', 5)
        .get()
        .then(function (querySnapshot) {
          let reviewsFromDB = []
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data().name)
            let review = {
              author: doc.data().name,
              text: doc.data().review,
              stars: doc.data().starsRating,
              id: doc.id
            }
            reviewsFromDB.push(review)
          })
          return reviewsFromDB
        })
        .then((reviewsFromDB) => {
          this.allReviewsXP = reviewsFromDB
          console.log(this.allReviewsXP)
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    }
  },
  mounted () {
    this.$nextTick(function () {
      console.log('Reviews page mounted')
      this.getReviews()
      // console.log('Getting recaptcha score...')
      // this.executeRecaptcha()
      // setTimeout(this.getScore(), 3000)
      // setTimeout(console.log(this.userScore), 3000)
      /*
      this.$recaptcha('login').then((token) => {
        console.log(token) // Will print the token
        this.token = token
      })
      */
    })
  }
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

#recaptcha {
   margin: 0px;
   width: 304px;
   position: relative;
   float: left;
}

#recaptcha iframe {
   position: absolute;
   left: 0px;
   top: 0px;
}

</style>
