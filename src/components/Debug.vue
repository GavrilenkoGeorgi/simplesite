<template>
  <v-contaner>
    <IconSvg class="uah-icon" icon="uah"></IconSvg>
  </v-contaner>
</template>

<script>
import IconSvg from './IconSvg'
export default {
  name: 'Debug',
  components: {
    IconSvg
  },
  props: {
    msg: 'Debug!'
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
