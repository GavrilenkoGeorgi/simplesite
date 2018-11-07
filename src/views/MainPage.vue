<template>
  <v-container fluid id="mainPage" pa-0 ma-0>
<!-- Video background -->
    <VideoBackground />
<!-- 1st layout -->
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 class="image-container">
          <v-img :src="require('@/assets/img/mainPage/main-photo-1024px300dpi.jpg')" contain max-height="500px"></v-img>
        </v-flex>
        <v-flex xs12 sm12 md8>
          <p class="quote">"Вы подобны художнику, пишите этот мир собаке!"</p>
        </v-flex>
    </v-layout>

    <v-flex xs12 mb-4>
      <hr class="divider" />
    </v-flex>
<!-- Training types block -->
    <v-layout row wrap justify-space-around>
      <v-flex xs12 sm8 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"
        class="animated groupTraining hidden">
        <h3 class="mb-4">{{ getContent.mainPageText.groupTraining.header }}</h3>
        <v-img :src="require('@/assets/img/mainPage/SAA_3426_1024x678.jpg')" class="training-section-image" contain></v-img>
        <p class="simple-text-block"> {{ getContent.mainPageText.groupTraining.text }} </p>
      </v-flex>
      <v-flex xs12 sm8 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }"
        class="animated individualTraining hidden">
        <v-layout column>
          <v-flex d-flex justify-center>
            <h3 class="mb-4">{{ getContent.mainPageText.individualTraining.header }}</h3>
          </v-flex>
          <v-flex d-flex>
          <v-img :src="require('@/assets/img/mainPage/SAA_3096_1024x678.jpg')"
            class="training-section-image" contain>
          </v-img>
          </v-flex>
          <v-flex d-flex justify-center>
            <p class="simple-text-block">{{ getContent.mainPageText.individualTraining.text }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
<!-- Slider -->
    <v-layout justify-center column>
      <v-flex>
      <span class="ad">{{ getContent.mainPageText.lessonsHeader }}</span>
      </v-flex>

      <v-flex class="mb-4 pb-4">
        <Slider />
      </v-flex>

      <!--v-layout align-center column>
        <v-flex ma-4>
          <v-flex>
          <v-btn to="/consultform"
            color="info"
            class="ma-4 animated"
            v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }">
            {{ consultButtonText }}
          </v-btn>
          </v-flex>
        </v-flex>
      </v-layout-->
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import VideoBackground from '../components/VideoBackground'
import Slider from '../components/Slider'

export default {
  name: 'mainPage',
  data () {
    return {
      title: 'MaxDog',
      trainLinkToShow: '',
      consultButtonText: 'ОНЛАЙН ЗАПИСЬ'
    }
  },
  components: {
    VideoBackground,
    Slider
  },
  computed: {
    ...mapGetters([
      'getTrainingTypeLinks',
      'getContent'
    ])
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      let animationType = 'fadeInUp'

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
      if (isVisible) {
        entry.target.classList.add(animationType)
        entry.target.classList.remove('hidden')
        // console.log(`Animation added: ${animationType}`)
      } else {
        entry.target.classList.remove(animationType)
        entry.target.classList.add('hidden')
        // console.log(`Animation removed: ${animationType}`)
      }
    },
    getLinkImage (image) {
      return require('../assets/img/' + image)
    },
    openTrainingDescr (event) {
      // console.log(`Opening training descr`)
      // console.log(event.currentTarget.name)
      if (this.trainLinkToShow === event.currentTarget.name) {
        this.trainLinkToShow = ''
      } else {
        this.trainLinkToShow = event.currentTarget.name
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";

#mainPage {
  padding-top: 3.5em;
}
.image-container {
  background-color: #ecf6ff;
  // border: 1px solid red;
}
.quote {
  // border: 1px solid red;
  font-family: $text-font;
  padding: .6em;
  font-size: 2.5em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hidden {
  visibility: hidden;
}

.ad {
  font-size: 2.4em;
  color: $alt-color-primary-darkest;
  font-family: $alt-font-1;
  font-weight: 700;
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 960px) { // responsive
  .quote {
    background-color: #ecf6ff;
  }
}
@media screen and (max-resolution: 96dpi) and (min-width: 960px) { // desktop
  .quote {
    background-color: #ecf6ff;
  }
}
</style>
