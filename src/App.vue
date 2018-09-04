<template>
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <!--router-view/-->
    <v-app id="app">
      <v-container fluid column pa-0>
      <v-navigation-drawer temporary absolute right v-model="sideNav">
        <v-list>
          <v-list-tile>
            <!--v-list-tile-action><v-icon>supervisor_account</v-icon></v-list-tile-action-->
            <v-list-tile-content><router-link to="/gallery">Галерея</router-link></v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <!--v-list-tile-action><v-icon>supervisor_account</v-icon></v-list-tile-action-->
            <v-list-tile-content>Отзывы</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <!--v-list-tile-action><v-icon>supervisor_account</v-icon></v-list-tile-action-->
            <v-list-tile-content><router-link to="/philosophy">Наша философия</router-link></v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <!--v-list-tile-action><v-icon>supervisor_account</v-icon></v-list-tile-action-->
            <v-list-tile-content><router-link to="/about">О нас</router-link></v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <!--v-list-tile-action><v-icon>supervisor_account</v-icon></v-list-tile-action-->
            <v-list-tile-content>Контакты</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-title><span><router-link class="logo" to="/">MaxDog</router-link></span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/gallery" flat class="hidden-xs-only">
          <!--v-icon left>supervisor_account</v-icon-->
          Галерея</v-btn>
        <v-btn flat class="hidden-xs-only">
          <!--v-icon left>supervisor_account</v-icon-->
          Отзывы</v-btn>
        <v-btn to="/philosophy" flat class="hidden-xs-only">
          <!--v-icon left>supervisor_account</v-icon-->
          Наша философия</v-btn>
        <v-btn to="/about" flat class="hidden-xs-only">
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
              <transition name="custom-classes-transition" mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
              <router-view></router-view>
              </transition>
            </v-flex>
          </v-layout>
        </v-container>
      <Footer></Footer>
    </v-container>
    </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Main from '@/views/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      sideNav: false
    }
  },
  components: {
    Footer
  }
}

</script>

<style lang="scss">
@import "./assets/animate.css";
@import "./assets/scss/colours.scss";
@import "./assets/scss/fonts.scss";
// @import "./assets/animate.css";

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // font-size: 1em;
  background-color: white;
  padding-top: 4em;
}
/*
#nav {
  padding: 30px;
  a {
    // font-weight: bold;
    // color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/

.logo {
  font-family: $logo-font;
  font-size: 2em;
  vertical-align: middle;
  text-decoration: none;
  color: $color-primary;
}
</style>
