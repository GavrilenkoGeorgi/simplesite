<template>
  <div class="home2">
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <p>
    something
  </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home2',
  data () {
    return {
      title: 'MaxDog'
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
</style>
