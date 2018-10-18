<template>
  <main id="mainPage">
<!-- Video background -->
    <VideoBackground />
    <v-container pa-0 fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md4 class="image-container">
          <v-img :src="require('@/assets/img/mainPage/main-photo-1024px300dpi.jpg')"></v-img>
      </v-flex>
        <v-flex xs12 md8>
          <v-card flat class="quote" color="#ecf6ff">
            <v-card-text class="quote-font">"Вы подобны художнику, пишите этот мир собаке!"</v-card-text>
          </v-card>
        </v-flex>
    </v-layout>
    </v-container>
<!-- Training types block -->
    <v-container py-0>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated groupTraining hidden">
          <h3 class="double">{{ getContent.mainPageText.groupTraining.header }}</h3>
          <v-img :src="require('@/assets/img/group_training-h500-96dpi.jpg')" class="training-section-image" contain></v-img>
          <p class="simple-text-block"> {{ getContent.mainPageText.groupTraining.text }} </p>
        </v-flex>
        <v-flex xs12 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 500 }" class="animated individualTraining hidden">
          <h3>{{ getContent.mainPageText.individualTraining.header }}</h3>
          <v-img :src="require('@/assets/img/ind_training-h500-96dpi.jpg')" class="training-section-image" contain></v-img>
          <p class="simple-text-block">{{ getContent.mainPageText.individualTraining.text }}</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <h2>{{ getContent.mainPageText.lessonsHeader }}</h2>
    </v-container>
    <Slider />
    <v-btn to="/consultform" color="info" large class="mt-4 animated" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">ОНЛАЙН ЗАПИСЬ</v-btn>
  </main>
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
      trainLinkToShow: ''
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
      // this.isVisible = isVisible
      // console.log(entry.target)
      // console.log(`Is it visible now? ${isVisible}`)
      // console.log(entry.target.className)
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
      // return require('../../assets/img/' + image)
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
// @import "../assets/animate.css";
// @import "../assets/scss/fonts.scss";
h1, h2, h3, h4, h5, h6 {
  font-family: $header-font;
  // letter-spacing: -.09em;
  color: black;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 1.8em;
}

h4 {
  font-size: 1.5em;
}

/*
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
*/
.simple-text-block {
  font-size: 1.6em;
}
.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}

// .animated {
  // animation-delay: .8s;
  // opacity: 0;
// }

.quote {
  border: 1px solid red;
  height: 100%;
  display: flex;
  align-items: center;
  // background-color: #ecf6ff;
  background-color: red;
}
.quote-font {
  font-family: $text-font;
  font-size: 2em;
}
.hidden {
  visibility: hidden;
  // opacity: 0;
}

hr.divider {
    border: 0;
    height: 1px;
    margin-bottom: 1em;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.training-section-image {
  box-shadow: 0px 0px 19px 3px rgba(163,163,163,1);
  margin: 2em 0em 2em 0em;
  // font-size: 1.4em;
}
.training-link-title {
  position: absolute;
  color: white;
  font-family: $alt-font-1;
  // font-weight: 700;
  background-color: $color-black-overlay;
  bottom: 0;
  line-height: .8;
  font-size: 1em;
}
.training-card-title {
  text-align: left;
  font-family: $text-font;
  font-size: 1em;
}
.training-card-descr-text {
  text-align: left;
  text-indent: 1em;
  font-family: $text-font;
  font-size: 1.3em;
  font-weight: 700;
  letter-spacing: .01em;
}
/*
.hight-transition {
  transition: height 1s ease-out;
}
*/
// new
#mainPage {
  padding-top: 3.5em;
}

@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px) { // iPadPro

}

@media screen and (max-resolution: 96dpi) and (min-width: 1024px) { // desktop
  .double {
    // line-height: 3em;
  }
}
</style>
