<template>
  <v-container pa-0>
    <v-layout column xs12 lg6 xl4>
    <v-flex>
    <v-carousel class="customHeight">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Gallery',
  data () {
    return {
      title: 'Gallery',
      items: [
        {
          src: require('@/assets/gallery/pic1.jpg')
        },
        {
          src: require('@/assets/gallery/pic2.jpg')
        },
        {
          src: require('@/assets/gallery/pic3.jpg')
        },
        {
          src: require('@/assets/gallery/pic4.jpg')
        },
        {
          src: require('@/assets/gallery/pic5.jpg')
        },
        {
          src: require('@/assets/gallery/pic6.jpg')
        },
        {
          src: require('@/assets/gallery/pic7.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.customHeight {
  height: 600px;
  // margin-bottom: 6em;
}
</style>
