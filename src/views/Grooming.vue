<template>
  <v-container fluid ma-0 pa-0 id="groomingPage">
    <v-layout row wrap>
      <!--v-flex xs12>
        <v-img class="mt-4 pt-4"
              :src="require('@/assets/img/grooming/grooming-parallax-photo-96dpi-1226px.jpg')"
              max-height="853px"
              contain>
        </v-img>
        <h1 class="photo-overlay">{{getContent.groomingText.photoOverlayText}}</h1>
      </v-flex-->
<!-- Parralax -->
      <!--v-flex xs12>
        <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')" height="500">
          <h1 class="photo-overlay">{{getContent.groomingText.photoOverlayText}}</h1>
        </v-parallax>
      </v-flex-->
      <v-flex xs12>
        <v-parallax :src="require('@/assets/img/grooming/parallax.jpg')" height="500">
          <h1 class="photo-overlay">{{ getContent.groomingText.photoOverlayText }}</h1>
        </v-parallax>
      </v-flex>
<!-- Title photo -->
      <v-flex xs12>
        <v-img class="mt-4 pt-4"
              :src="require('@/assets/img/grooming/grooming-title-photo-96dpi-859px.jpg')"
              max-height="500px"
              contain>
        </v-img>
        <hr class="divider-grooming-photo" />
      </v-flex>
<!-- Text block -->
  <v-layout justify-center>
    <v-flex xs12 sm10 md8>
      <p class="simple-text-block">{{ getContent.groomingText.paragraphValue }}</p>
    </v-flex>
  </v-layout>

      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <h2>Груминг кошек</h2>
            <v-img :src="require('@/assets/img/grooming/grooming-cat-72dpi-1366px.jpg')"
                  contain
                  max-height="300px"
                  v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"
                  class="animated hidden grooming-type-photo"></v-img>
                  <hr class="divider-grooming-photo" />
            <p class="simple-text-block">
              Вычесывание, стрижка, гигиена, купание, сушка.
            </p>
          </v-flex>
        <v-flex xs12 md5>
          <h2>Груминг собак</h2>
          <v-img :src="require('@/assets/img/grooming/grooming-dog-72dpi-1366px.jpg')"
          contain
          max-height="300px"
          v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"
          class="animated hidden grooming-type-photo"></v-img>
          <hr class="divider-grooming-photo" />
          <p class="simple-text-block">
            Вычесывание, удаление колтунов, гигиена, стрижки, тримминг, стрипинг, купание, сушка.
          </p>
        </v-flex>
        <v-flex xs12 md5>
          <h2>Дополнительные услуги</h2>
          <v-img :src="require('@/assets/img/grooming/grooming-another-dog-72dpi-1366px.jpg')"
          contain
          v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"
          max-height="300px"
          class="animated hidden grooming-type-photo"></v-img>
          <hr class="divider-grooming-photo" />
          <p class="simple-text-block">
            Выставочный груминг, креативная стрижка и окрашивание, чистка зубов, оформление коготков.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import Prices from '@/components/Prices.vue'

export default {
  name: 'grooming',
  /*
  components: {
    Prices
    // Navigation
  },
  */
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
      let animationType = 'fadeInLeft'
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

.hidden {
  visibility: hidden;
  }
  .photo-overlay {
    font-size: 3em;
    position: relative;
    bottom: -4.5em;
    text-align: left;
    width: 14em;
    padding: 0em .3em 0em .3em;
    letter-spacing: .075em;
    font-weight: 700;
    color: $color-white;
    // color: red;
    background-color: $color-black-overlay;
    // border: 1px solid blue;
  }

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 320px) {
  .photo-overlay {
    font-size: 1.4em;
    // position: relative;
    bottom: -11em;
    text-align: left;
    // width: 15em;
    // padding: 0em .3em 0em .3em;
    // letter-spacing: .075em;
    // font-weight: 700;
    // color: $color-white;
    // color: red;
    // background-color: $color-black-overlay;
    // border: 1px solid green;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 414px) {
  .photo-overlay {
    font-size: 1.7em;
    // position: relative;
    bottom: -8em;
    // border: 1px solid red;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) {
  .photo-overlay {
    font-size: 3em;
    // position: relative;
    bottom: -4.5em;
    // border: 1px solid pink;
  }
}
</style>
