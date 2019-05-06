<template>
  <v-container fill-height>
    <v-layout wrap justify-center>
      <v-flex xs12>
        <h1 class="mt-4">{{ header }}</h1>
      </v-flex>
      <v-flex xs12 sm10 md6>
        <v-layout id="instafeed" column>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Instafeed from '../../node_modules/instafeed.js/instafeed.min.js'
import { userId, accessToken } from '../js/instagramCreds.js'

export default {
  name: 'Gallery',
  data () {
    return {
      header: 'Инстаграм'
    }
  },
  mounted () {
    this.$nextTick(() => {
      var feed = new Instafeed({
        get: 'user',
        userId: userId,
        accessToken: accessToken,
        resolution: 'standard_resolution',
        template: '<v-flex class="pa-4"><a href="{{link}}" target="_blank" id="{{id}}"><img class="instagram-img" src="{{image}}" /></a></v-flex>',
        sortBy: 'most-recent',
        limit: 10,
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
