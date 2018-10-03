<template>
    <div v-html="require(`!!html-loader!@/assets/icons/icon-uah.svg`)" v-once></div>
</template>

<style module>
  .icon-svg {
    display: block;
    fill: red;
    height: 1em;
    margin-top: -4px;
    width: 1em;
  }
</style>

<script>
export default {
  props: ['icon'],
  name: 'IconSvg',
  mounted () {
    this.$el.querySelector('icon-svg')
    this.$el.firstChild.classList.add(...this.$el.className.split(' '))
    this.$el.firstChild.classList.add('fill-current')
    this.$el.outerHTML = this.$el.innerHTML
  }
}
</script>
