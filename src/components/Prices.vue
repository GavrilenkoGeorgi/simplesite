<template>
  <v-container>
    <v-layout justify-center>
      <v-flex md8>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(serviceItem, index) in getPrices.serviceItems" :key="index">
          <div slot="header" class="price-header">{{ serviceItem.header }}</div>
          <v-card v-for="(priceItem, index) in serviceItem.services" :key="index">
            <v-card-text class="price-descr"><span>{{ priceItem.serviceDescr }}</span><v-spacer /><span class="price-value">{{ priceItem.price }}</span></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Prices',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      'getPrices'
    ])
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
.price-header {
  color: $color-primary-2;
  font-size: 1em;
  // text-align: center;
  font-weight: 700;
  transition: color 500ms;
}
.price-header:hover {
  color: $color-link-hover;
}
.price-descr {
  display: flex;
  font-size: .9em;
  // align-items: center;
  // justify-content: center;
  color: $color-primaryDarkest;
}
.price-value {
  color:red;
  //align-self: flex-end;

}
</style>
