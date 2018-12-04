<template>
  <v-container fluid mt-3 pa-0 id="slider">
    <v-layout justify-center row wrap>
      <v-flex xs12 md10 lg8>
        <v-carousel id="slider-photo" hide-delimiters>
          <v-carousel-item class="slow"
            v-for="link in getTrainingTypeLinks.links"
            :key="link.image"
            :src="require(`@/assets/img/${link.image}`)"
            lazy>
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

.slow {
  transition: 1s ease-out;
}

</style>
