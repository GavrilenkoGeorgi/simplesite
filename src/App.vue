<template>
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <!--router-view/-->
    <v-app id="app">
      <v-navigation-drawer temporary absolute right v-model="sideNav">
        <v-list>
          <v-list-tile>
            <v-list-tile-action><v-icon>supervisor_account</v-icon></v-list-tile-action>
            <v-list-tile-content></v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-title class="logo">MaxDog</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat class="hidden-xs-only">
          <!--v-icon left>supervisor_account</v-icon-->
          О нас</v-btn>
        <v-btn flat class="hidden-xs-only">
          <!--v-icon left>supervisor_account</v-icon-->
          Контакты</v-btn>
        <v-toolbar-side-icon class="hidden-sm-and-up" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      </v-toolbar>
        <v-container fluid class="pa-0">
          <v-layout row wrap>
            <v-flex xs12>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
    </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Main from '@/views/Main.vue'

export default {
  name: 'app',
  data () {
    return {
      sideNav: false
    }
  }
}

</script>

<style lang="scss">
@import "./assets/scss/colours.scss";
@import "./assets/animate.css";
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1em;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
