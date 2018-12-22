<template>
  <v-container pa-0>
    <v-layout column>
      <v-flex d-flex align-center>
        <h1>{{ pageTitle }}</h1>
      </v-flex>
        <v-layout justify-center>
          <!--v-flex-->

            <v-carousel light class="reviews" height='550'>
              <v-carousel-item
                v-for="review in allReviews"
                :key="review.id">
                <v-layout justify-center align-center row wrap>
                  <v-flex xs8 md6 lg4>
                    <v-flex class="text-xs-left">
                      <v-icon v-for="i in review.stars" :key="i" color="orange">grade</v-icon>
                    </v-flex>
                    <v-flex class="text-xs-left">
                      <i>{{ review.content }}</i>
                    </v-flex>
                    <v-flex class="author-name text-xs-right">
                      {{ quoteFormatting }}{{ review.author }}
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-carousel-item>
            </v-carousel>

          <!--/v-flex-->
        </v-layout>
        <v-layout justify-center>
        <v-flex xs12 sm8 md6 lg3>
          <v-flex d-flex mt-3 mb-4 >
              <v-btn color="blue-grey lighten-4">
              <v-icon>format_quote</v-icon>ОСТАВИТЬ ОТЗЫВ
            </v-btn>
          </v-flex>
        </v-flex>
        </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      pageTitle: 'отзывы',
      quoteFormatting: '— ',
      allReviews: [
        { id: 'review5', author: 'Enda', stars: 5, content: `Some notes about dogs and cats and even more stuff
                                    about cats and dogs and even their owners,
                                    so it happens to be the longest review written on
                                    this site, so here how it looks like.` },
        { id: 'review', stars: 1, author: 'Homer Simpson', content: 'Some notes about dogs and cats' },
        { id: 'review2', stars: 2, author: 'Bart', content: 'Some notes about dogs and cats and such' },
        { id: 'review3', stars: 3, author: 'Mr Flanders', content: 'Some notes about dogs and cats and something else' },
        { id: 'review4', stars: 4, author: 'Apu', content: 'Some notes about dogs and cats and even more stuff about cats and dogs' }
      ]
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

</style>
