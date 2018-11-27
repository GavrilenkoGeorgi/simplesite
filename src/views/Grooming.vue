<template>
  <v-container fluid ma-0 pa-0 id="groomingPage">
    <v-layout row wrap>
<!-- Parralax -->
      <v-flex xs12>
        <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')" height="500">
          <h1 class="photo-overlay">{{getContent.groomingText.photoOverlayText}}</h1>
        </v-parallax>
      </v-flex>
      <!--v-flex xs12>
        <v-parallax :src="require('@/assets/img/grooming/grooming-parallax-photo-96dpi-1280px.jpg')" height="905">
          <h1 class="photo-overlay">{{getContent.groomingText.photoOverlayText}}</h1>
        </v-parallax>
      </v-flex-->
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
          <h3>Дополнительные услуги</h3>
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

#groomingPage {
  .hidden {
  visibility: hidden;
  }
  .photo-overlay {
    position: absolute;
    bottom: .5em;
    padding: 0em .3em 0em .3em;
    letter-spacing: .075em;
    font-weight: 700;
    color: $color-white;
    background-color: $color-black-overlay;
  }
}

.border {
  border: 1px solid pink;
}
</style>
