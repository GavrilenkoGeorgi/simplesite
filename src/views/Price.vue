<template>
  <v-layout>
    <v-flex>
      <v-container class="my-2 pa-0">
      <v-layout column>
        <h2>Прайс</h2>
      </v-layout>
    </v-container>
    <prices></prices>
    </v-flex>
  </v-layout>
</template>
<script>
import Prices from '@/components/Prices.vue'

export default {
  // name: 'prices',
  components: {
    Prices
  }
}
</script>
