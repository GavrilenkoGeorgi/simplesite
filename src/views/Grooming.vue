<template>
  <div id="groomingPage">
    <v-container class="parralax-box" fluid pa-0>
      <v-layout fluid>
        <v-flex xs12>
          <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')" height="500">
          <h1 class="photo-overlay">{{getContent.groomingText.photoOverlayText}}</h1>
          </v-parallax>
        </v-flex>
      </v-layout>
    </v-container>

    <v-img :src="require('@/assets/img/grooming/groomingTitlePhoto.png')" height="371" contain></v-img>
    <v-container>
      <v-layout justify-center>
        <v-flex md10 xl8>
          <p>{{ getContent.groomingText.paragraphValue }}</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md8>
          <h2>Груминг кошек</h2>
          <v-img :src="require('@/assets/img/grooming/groomingCat.jpg')" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden grooming-type-photo"></v-img>
          <p class="simple-text-block">
            Вычесывание, стрижка, гигиена, купание, сушка.
          </p>
        </v-flex>
      <v-flex xs12 md8>
        <h2>Груминг собак</h2>
        <v-img :src="require('@/assets/img/grooming/groomingDog.jpg')" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden grooming-type-photo"></v-img>
        <p class="simple-text-block">
          Вычесывание, удаление колтунов, гигиена, стрижки, тримминг, стрипинг, купание, сушка.
        </p>
      </v-flex>
      <v-flex xs12 md8>
        <h2>Дополнительные услуги</h2>
        <v-img :src="require('@/assets/img/grooming/groomingOther.jpg')" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden grooming-type-photo"></v-img>
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
  </v-container>
  <prices class="animated hidden" v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Prices from '@/components/Prices.vue'

export default {
  name: 'grooming',
  components: {
    Prices
    // Navigation
  },
  data () {
    return {
      title: 'Груминг'
    }
  },
  computed: {
    ...mapGetters([
      'getContent'
    ])
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      // this.isVisible = isVisible
      // console.log(entry.target)
      // console.log(`Is it visible now? ${isVisible}`)
      // entry.target.classList.add('bounceInUp')
      // console.log(entry.target.className)
      let animationType = 'fadeInLeft'
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

<style scoped lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/animate.css";

#groomingPage {
  .hidden {
  visibility: hidden;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 1.88) and (max-width: 415px) {
  h2 {
    font-size: 2em;
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
</style>
