<template>
  <v-layout id="gallery" column>
    <v-flex>
      <h1 class="mt-4">{{ header }}</h1>
    </v-flex>
    <v-layout id="instafeed" column>
    </v-layout>
  </v-layout>
</template>

<script>
import Instafeed from '../../node_modules/instafeed.js/instafeed.min.js'

export default {
  name: 'Gallery',
  data () {
    return {
      header: 'Instagram feed'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // console.log(`Mounted`)
      var feed = new Instafeed({
        get: 'user',
        userId: '8987997106',
        clientId: '924f677fa3854436947ab4372ffa688d',
        accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
        // userId: '8759098712',
        // accessToken: '8759098712.1677ed0.5f7d20d7e4be4457b9b4d9e35cca7598',
        resolution: 'standard_resolution',
        template: '<v-flex class="pa-4"><a href="{{link}}" target="_blank" id="{{id}}"><img class="instagram-img" src="{{image}}" /></a></v-flex>',
        sortBy: 'most-recent',
        limit: 4,
        links: false
      })
      feed.run()
    })
  }
}
</script>
<style lang="scss">
.instagram-img {
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
  transition: box-shadow 200ms;
}
.instagram-img:hover {
  box-shadow: 0px 10px 30px 0px rgba(163,163,163,1);
}
</style>
