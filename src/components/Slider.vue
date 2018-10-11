<template>
  <v-container id="slider">
    <v-layout row wrap justify-space-around>
      <v-flex xs12 md10>
        <v-carousel id="xp" hide-delimiters hide-controls>
          <v-carousel-item
            v-for="link in getTrainingTypeLinks.links"
            :key="link.image"
            :src="require(`@/assets/img/${link.image}`)"
            reverse-transition="slide-right"
            transition="slide-left">
              <h5 class="overlay">{{ link.text }}</h5>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'slider',
  computed: {
    ...mapGetters([
      'getTrainingTypeLinks',
      'getContent'
    ])
  },
  methods: {
    getLinkImage (image) {
      // return require('../../assets/img/' + image)
      return require(`@/assets/img/${image}.jpg`)
      // @/assets/gallery/pic1.jpg
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.overlay {
  // border: 1px solid red;
  color: white;
  padding: 0em .2em 0em .2em;
  margin: 0em 0em .3em .3em;
  font-family: $alt-font-1;
  font-size: 1.4em;
  text-align: left;
  background-color: $color-black-overlay;
  position: absolute;
  bottom: 0;
}

#xp .slide-left-enter-active {
  transition: 2s;
}
#xp .slide-left-leave-active {
  transition: 2s;
  transform: translateX(+100%);
}
#xp .slide-left-leave-to {
  transition: 2s;
  transform: translateX(+100%);
}
#xp .slide-left-enter,
#xp .slide-left-leave {
  transition: 2s;
  transform: translateX(+100%);
}
#xp .slide-left-leave-to {
  transition: 2s;
  transform: translateX(-100%);
}

// slide right
#xp .slide-right-enter-active {
  transition: 2s;
  // transform: translateX(+50em);
}
#xp .slide-right-leave-active {
  transition: 2s;
  transform: translateX(-100%);
}
#xp .slide-right-leave-to {
  transition: 2s;
  // position: absolute;
  // top: 0;
  // left: 0;
  transform: translateX(-100%);
}
#xp .slide-right-enter,
#xp .slide-right-leave {
  transition: 2s;
  // opacity: 0;
  transform: translateX(-100%);
}

#xp .slide-right-leave-to {
  transition: 2s;
  // opacity: 0;
  transform: translateX(+100%);
}

</style>
