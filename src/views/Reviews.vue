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
              ref="addReviewForm"
              v-model="addReviewForm"
              class="mt-4">
              <v-text-field
                v-model="name"
                :rules="[rules.validateStringLength(10)]"
                required
                box
                color="blue-grey"
                counter="10"
                label="Ваше имя"
                style="min-height: 96px"
                type="user-name">
              </v-text-field>
              <v-flex py-2 class="blue--text">
                {{ formMessage }}
              </v-flex>
              <v-flex py-2>
                <v-icon id="ratingStar" v-for="star in 5" :key="star" @click="setRating">grade</v-icon>
              </v-flex>
              <v-textarea
                v-model="formReviewText"
                required
                :rules="[rules.validateStringLength(200)]"
                auto-grow
                box
                counter="200"
                color="blue-grey"
                label="Отзыв"
                rows="5"
              ></v-textarea>
            </v-form>
          </v-flex>
          <v-flex xs12 ma-4>
              <v-btn color="blue-grey lighten-4"
                aria-label="Clear form"
                @click="$refs.addReviewForm.reset()">
                очистить
              </v-btn>
              <v-btn
                @click="addReview"
                :loading="addingReview"
                :disabled="addingReview"
                color="blue darken-1"
                class="white--text"
                aria-label="Add review"
              >
                отправить
              </v-btn>
              <!-- listen to verify event emited by the recaptcha component -->
              <!--recaptcha ref="recaptcha" @verify="getScore"></recaptcha-->
        </v-flex>
      </v-layout>
    </v-layout>
<!-- Review added dialog -->
    <v-layout row justify-center>
      <v-dialog
        v-model="reviewAddedDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="subheading">
            Спасибо за ваш отзыв, после одобрения
            администратора он появится на сайте.
          </v-card-title>
          <v-card-actions>
            <v-flex
              d-flex
              justify-center
            >
            <v-btn
              color="blue darken-1"
              dark
              aria-label="Close review add dialog"
              @click="reviewAddedDialog = false"
            >
              OK
            </v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    reviewAddedDialog: false,
    addingReview: false,
    allReviewsXP: [],
    agreement: false,
    name: ``,
    formReviewText: ``,
    formMessage: `Поставьте нам пять звёзд и напишите что-нибудь хорошее.`,
    starsRating: undefined,
    userScore: undefined,
    dialog: false,
    email: undefined,
    addReviewForm: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      validateStringLength: len => value => {
        if (value === ``) {
          return ``
        } else if (value && value.length <= len) {
          return true
        } else return `Менее ${len} символов, пожалуйста.`
      },
      required: v => !!v || 'This field is required'
    }
  }),
  components: {
    Recaptcha
  },
  mounted () {
    this.$nextTick(() => {
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
  },
  methods: {
    addReview () {
      // console.log('Adding review..')
      this.toggleAddingReviewState()
      // Add a new document with a generated id.
      if (this.addReviewForm) {
        // console.log(`Form is: ${this.addReviewForm}, adding to database, stars are ${this.starsRating}`)
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
          .then(docRef => {
            console.log('Document written with ID: ', docRef.id)
            this.reviewAddedDialog = true
            this.$refs.addReviewForm.reset()
            this.toggleAddingReviewState()
          })
          .catch(error => {
            this.toggleAddingReviewState()
            console.error('Error adding document: ', error)
          })
      } else {
        console.log(`Check your form it is: ${this.addReviewForm}`)
        this.toggleAddingReviewState()
      }
    },
    toggleAddingReviewState () {
      this.addingReview = !this.addingReview
    },
    setRating (event) {
      let child = event.target
      const parent = child.parentNode
      let index = Array.prototype.indexOf.call(parent.children, child) + 1
      // console.log(`Setting rating to ${index}`)
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
      this.$http.post(`https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=${secret.recaptchaSecret}&response=${response}`)
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
        })
    },
    // execute the recaptcha widget
    /*
    executeRecaptcha () {
      this.$refs.recaptcha.execute()
    },
    */
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
      // console.log('Getting reviews..')
      db.collection('reviews').where('approved', '==', true)
        .get()
        .then(function (querySnapshot) {
          let reviewsFromDB = []
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, ' => ', doc.data().name)
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
          // console.log(this.allReviewsXP)
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    }
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
  color: $alt-color-primary-even-darker;
}

.contact-info {
  font-size: 1.6em;
  font-family: $text-font;
}

.custom-layout {
  display: flex;
}

.subtitle {
  font-size: 2em;
  text-align: left;
}

.address {
  margin: 0;
  text-align: left;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
}

.email-link {
  font-size: 1.3em;
}

.reviews {
   box-shadow: none;
   font-size: 2em;
   font-family: $text-font;
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
