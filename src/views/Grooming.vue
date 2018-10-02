<template>
  <div id="groomingPage">
    <!--v-container mt-4 pt-4>
      <v-layout>
        <v-flex mt-4>
          <h1>{{ title }}</h1>
        </v-flex>
      </v-layout>
    </v-container-->

    <v-container fluid pa-0>
      <v-layout fluid>
        <v-flex xs12>
          <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')" height="350">
          <!--h1 class="photo-overlay">Грумінг собак та котів</h1-->
          <div class="photo-overlay">{{getParagraphText.groomingText.photoOverlayText}}</div>
          </v-parallax>
        </v-flex>
      </v-layout>
    </v-container>

    <v-img :src="require('@/assets/img/grooming/groomingTitlePhoto.png')" height="371" contain></v-img>
    <v-container>
      <v-layout justify-center>
        <v-flex md10 xl8>
          <p>{{ getParagraphText.groomingText.paragraphValue}}</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md8>
          <h2>Груминг кошек</h2>
          <v-img :src="require('@/assets/img/grooming/groomingCat.jpg')" height="500" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated"></v-img>
          <p class="simple-text-block">
            Вычесывание, стрижка, гигиена, купание, сушка.
          </p>
        </v-flex>
      <v-flex xs12 md8>
        <h2>Груминг собак</h2>
        <v-img :src="require('@/assets/img/grooming/groomingDog.jpg')" height="500" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden groomingSection"></v-img>
        <p class="simple-text-block">
          Вычесывание, удаление колтунов, гигиена, стрижки, тримминг, стрипинг, купание, сушка.
        </p>
      </v-flex>
      <v-flex xs12 md8>
        <h2>Дополнительные услуги</h2>
        <v-img :src="require('@/assets/img/grooming/groomingOther.jpg')" height="500" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden groomingSection"></v-img>
        <p class="simple-text-block">
          Выставочный груминг, креативная стрижка и окрашивание, чистка зубов, оформление коготков.
        </p>
      </v-flex>
    </v-layout>
    <v-container class="my-4 pa-0">
      <v-layout column>
        <h2 class="indigo--text">SPA комплекс</h2>
        <h3>Банные услуги и гигиена</h3>
      </v-layout>
    </v-container>
    <!--v-container class="my-4 pa-0">
      <h4 class="indigo--text">Коты</h4>
        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingSlimCat.jpg" alt="Black and white cat" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Породы до 5 кг</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">250 грн</p>
            </div>
          </div>
        </div>

        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingFatCat.jpg" alt="Fat ginger cat" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Больше 5 кг</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">300 грн</p>
            </div>
          </div>
        </div>
    </v-container-->
    <!--v-container class="my-4 pa-0">
        <h4 class="indigo--text">Собаки</h4>
        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingSmallBreed.jpg" alt="Small dog barking" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Мелкие породы</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">250-350 грн</p>
            </div>
          </div>
        </div>

        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingMediumBreed.jpg" alt="Medium size dog" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Средние породы</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">400-450 грн</p>
            </div>
          </div>
        </div>

        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingLargeBreed.jpg" alt="Large dog sitting" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Крупные породы</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">500-650 грн</p>
            </div>
          </div>
        </div>
    </v-container-->
  </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Grooming',
  data () {
    return {
      title: 'Груминг'
    }
  },
  computed: {
    ...mapGetters([
      'getParagraphText'
    ])
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      // this.isVisible = isVisible
      // console.log(entry.target)
      // console.log(`Is it visible now? ${isVisible}`)
      // entry.target.classList.add('bounceInUp')
      // console.log(entry.target.className)
      let animationType = 'fadeInUp'
      /*
      if (entry.target.classList.contains('groupTraining')) {
        // console.log(`Training!`)
        animationType = 'fadeInLeft'
      } else if (entry.target.classList.contains('individualTraining')) {
        animationType = 'fadeInRight'
      } else if (entry.target.classList.contains('serviceItems')) {
        animationType = 'fadeInLeft'
      } else if (entry.target.classList.contains('groomingSection')) {
        animationType = 'zoomIn'
      }
      */
      if (isVisible) {
        entry.target.classList.add(animationType)
        entry.target.classList.remove('hidden')
        // console.log(`Animation added: ${animationType}`)
      } else {
        entry.target.classList.remove(animationType)
        entry.target.classList.add('hidden')
        // console.log(`Animation removed: ${animationType}`)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/animate.css";
@import "../assets/scss/colours.scss";
@import "../assets/scss/fonts.scss";

#groomingPage {
  h1, h2, h3 {
    color: $color-primary-bright;
    font-family: $header-font;
  }
  p {
    font-size: 1.8em;
  }
  .hidden {
  visibility: hidden;
  }
}
/*
.title {
  margin-top: 4em;
  // font-size: 14em;
  // font-family: $text-font;
  // letter-spacing: .07em;
}
*/

.photo-overlay {
  position: absolute;
  margin: 0 auto;
  font-family: $header-font;
  // max-width: 93%;
  // border: 1px solid lime;
  text-align: left;
  bottom: 1em;
  background-color: $photo-overlay;
  padding: 0em .3em 0em .3em;
  font-size: 2em;
}
</style>
