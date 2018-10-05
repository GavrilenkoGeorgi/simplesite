<template>
  <div id="home">
<!-- Parralax image background -->
      <v-container fluid class="pa-0 mt-5">
        <v-layout>
          <v-flex xs12>
            <v-parallax height="500" :src="require('@/assets/dog-wallpaper.jpg')">
              <h1 class="photo-overlay">{{ overlayTitle }}</h1>
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>
      <!--v-icon x-large class="animated indigo--text" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">favorite</v-icon-->

<!-- Training types block -->
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated groupTraining hidden">
            <h3>Групповые занятия</h3>
            <v-img :src="require('@/assets/img/group_training-h500-96dpi.jpg')" class="training-section-image" contain></v-img>
            <p class="simple-text-block">
              На групповых занятиях дважды в неделю вы получаете практический
              и теоретический инструктаж как проводить воспитание и дрессировку поэтапно далее в домашних
              условиях.
              Мы постараемся ответить на все ваши вопросы. Вы, ежедневно в быту, закрепляете со
              щенком домашнее задание — полученную на занятиях базу знаний и навыков.
              При этом варианте обучения требуется несколько больше времени, но терпение и труд обернутся
              — хорошим выполнением всех необходимых базовых команд. Вы получите послушную,
              социализированную, контактную собаку.
            </p>
          </v-flex>
          <v-flex xs12 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated individualTraining hidden">
            <h3>Индивидуальные занятия</h3>
            <v-img :src="require('@/assets/img/ind_training-h500-96dpi.jpg')" class="training-section-image" contain></v-img>
            <p class="simple-text-block">
              При индивидуальных занятиях мы тренируем собаку тет-а-тет с вами или
              самостоятельно там, где, когда и во сколько вам удобно. Тренировка ориентирована на потребности
              сугубо вашей собаки и соответственно обучение дает максимальный результат в сжатые сроки.
            </p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <h2 class="indigo--text">Первое занятие — 50%</h2>
      </v-container>
      <v-container fluid grid-list-md>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 md3 ma-4 v-for="(link, index) in getTrainingTypeLinks.links" :key="index" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden">
            <v-card>
              <v-img :src="getLinkImage(link.image)" contain>
                <v-card-title class="training-link-title ma-2 pa-2">{{ link.text }}</v-card-title>
              </v-img>
              <v-card-actions>
                <!--v-btn flat>Share</v-btn-->
                <!--v-btn flat color="purple">Explore</v-btn-->
                <!--v-spacer></v-spacer>
                <v-btn icon @click="trainingDescrShow = !trainingDescrShow">
                  <v-icon>{{ trainingDescrShow ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn-->
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-card-actions>
              <v-slide-y-transition>
                <!--v-card-text v-show="trainingDescrShow">
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text-->
              </v-slide-y-transition>
            </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    <v-btn to="/consultform" color="info" large class="mt-4 animated" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">ОНЛАЙН ЗАПИСЬ</v-btn>
          </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      title: 'MaxDog',
      trainingDescrShow: false,
      overlayTitle: 'Дрессировка собак в Киеве и Киевской области'
    }
  },
  computed: {
    ...mapGetters([
      'getTrainingTypeLinks'
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
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/animate.css";
// @import "../assets/scss/fonts.scss";

h1, h2, h3, h4, h5, h6 {
  font-family: $header-font;
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

.training-link-title {
  position: absolute;
  color: $color-white;
  background-color: $color-black-overlay;
  bottom: 0;
  font-size: 1.2em;
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

</style>
