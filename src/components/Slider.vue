<template>
  <v-container fluid mt-3 pa-0 id="slider">
    <v-layout justify-center row wrap>
      <v-flex xs12 sm10 md8 lg6>
        <v-carousel id="slider-photo" hide-delimiters>
          <v-carousel-item
            v-for="link in getTrainingTypeLinks.links"
            :key="link.image"
            :src="require(`@/assets/img/${link.image}`)"
            lazy
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
      return require(`@/assets/img/${image}.jpg`)
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
  margin: 0em 0em .6em .8em;
  font-family: $alt-font-1;
  font-size: 1.4em;
  text-align: left;
  background-color: $color-black-overlay;
  position: absolute;
  bottom: 0;
}
// slide left
#slider-photo .slide-left-enter-active {
  transition: 2s;
}
#slider-photo .slide-left-leave-active {
  transition: 2s;
  transform: translateX(+100%);
}
#slider-photo .slide-left-leave-to {
  transition: 2s;
  transform: translateX(+100%);
}
#slider-photo .slide-left-enter,
#slider-photo .slide-left-leave {
  transition: 2s;
  transform: translateX(+100%);
}
#slider-photo .slide-left-leave-to {
  transition: 2s;
  transform: translateX(-100%);
}

// slide right
#slider-photo .slide-right-enter-active {
  transition: 2s;
}
#slider-photo .slide-right-leave-active {
  transition: 2s;
  transform: translateX(-100%);
}
#slider-photo .slide-right-leave-to {
  transition: 2s;
  transform: translateX(-100%);
}
#slider-photo .slide-right-enter,
#slider-photo .slide-right-leave {
  transition: 2s;
  transform: translateX(-100%);
}
#slider-photo .slide-right-leave-to {
  transition: 2s;
  transform: translateX(+100%);
}

</style>
