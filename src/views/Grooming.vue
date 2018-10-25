<template>
  <div id="groomingPage">
    <v-container fluid class="parralax-box" pa-0>
      <v-layout>
        <v-flex xs12>
          <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')" height="500">
          <h1 class="photo-overlay">{{getContent.groomingText.photoOverlayText}}</h1>
          </v-parallax>
        </v-flex>
      </v-layout>
    </v-container>

    <v-img class="mt-4 pt-4" :src="require('@/assets/img/grooming/groomingTitlePhoto.png')" height="371" contain></v-img>
    <v-container ma-0 pa-0>
      <v-layout justify-center>
        <v-flex md10 xl8>
          <p class="simple-text-block">{{ getContent.groomingText.paragraphValue }}</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md5>
          <h2>Груминг кошек</h2>
          <v-img :src="require('@/assets/img/grooming/groomingCat.jpg')" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden grooming-type-photo"></v-img>
          <p class="simple-text-block">
            Вычесывание, стрижка, гигиена, купание, сушка.
          </p>
        </v-flex>
      <v-flex xs12 md5>
        <h2>Груминг собак</h2>
        <v-img :src="require('@/assets/img/grooming/groomingDog.jpg')" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden grooming-type-photo"></v-img>
        <p class="simple-text-block">
          Вычесывание, удаление колтунов, гигиена, стрижки, тримминг, стрипинг, купание, сушка.
        </p>
      </v-flex>
      <v-flex xs12 md5>
        <h3>Дополнительные услуги</h3>
        <v-img :src="require('@/assets/img/grooming/groomingOther.jpg')" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated hidden grooming-type-photo"></v-img>
        <p class="simple-text-block">
          Выставочный груминг, креативная стрижка и окрашивание, чистка зубов, оформление коготков.
        </p>
      </v-flex>
    </v-layout>
    <v-container class="my-4 pa-0">
      <v-layout column>
        <h2>Прайс</h2>
      </v-layout>
    </v-container>
  </v-container>
  <prices class="animated hidden" v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"/>
  <v-btn to="/consultform" color="info" large class="mb-4 animated" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">ОНЛАЙН ЗАПИСЬ</v-btn>
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

</style>
