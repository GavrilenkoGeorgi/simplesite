<template>
  <v-layout wrap>
<!-- Header -->
    <v-flex xs12 class="text-xs-center">
      <h1>Merch</h1>
    </v-flex>
<!-- Main container -->
    <v-layout row wrap justify-center>
      <v-flex v-for="merch in getMerchDescriptions" class="ma-4" xs8 sm3
            :key="merch.imgPath">
        <v-card>
          <v-img
            :src="merch.imgPath"
            aspect-ratio="1.6"
          ></v-img>

          <v-card-title primary-title>
            <div class="text-xs-left">
              <h3 class="headline mb-0">{{ merch.title }}</h3>
              <div>{{ merch.longDescr }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="blue-grey lighten-1"><v-icon class="pr-2" color="orange">shopping_cart</v-icon>В корзину</v-btn>
            <v-btn flat color="blue-grey lighten-1"><v-icon class="pr-2" color="orange">description</v-icon>Описание</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import IconSvg from '../components/IconSvg.vue'

export default {
  name: 'Merch',
  props: {
    msg: 'Merch has arrived.'
  },
  components: {
    IconSvg
  },
  computed: {
    ...mapGetters([
      'getMerchDescriptions',
      'getPrices',
      'getContent'
    ])
  }
}
</script>
