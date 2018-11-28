<template>
  <v-container fill-height>
  <v-layout id="gallery" column>
    <v-flex>
      <h1 class="mt-4">{{ header }}</h1>
    </v-flex>
    <v-layout id="instafeed" column>
    </v-layout>
  </v-layout>
  </v-container>
</template>

<script>
import Instafeed from '../../node_modules/instafeed.js/instafeed.min.js'

export default {
  name: 'Gallery',
  data () {
    return {
      header: 'Инстаграм'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // console.log(`Mounted`)
      var feed = new Instafeed({
        get: 'user',
        userId: '6864338820', // remove this
        accessToken: '6864338820.1677ed0.3a92f8ce375f4aaca9d935ae1f92c41e',
        resolution: 'standard_resolution',
        template: '<v-flex class="pa-4"><a href="{{link}}" target="_blank" id="{{id}}"><img class="instagram-img" src="{{image}}" /></a></v-flex>',
        sortBy: 'most-recent',
        limit: 8,
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
