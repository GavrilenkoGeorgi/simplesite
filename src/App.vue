<template>
    <v-app id="app" class="override">
      <!-- v-navigation-drawer temporary absolute right v-model="sideNav"-->
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

      <v-navigation-drawer app right disable-resize-watcher v-model="sideNav" width="250">
        <v-list>
          <v-list-tile>
          <v-list-tile-title class="navDrawerTitle">
            {{ titleNavDrawer }}
          </v-list-tile-title>
          <!--v-list-tile-action @click="sideNav = !sideNav" justify-end>
            <v-icon>{{ closeIconNavDrawer }}</v-icon>
          </v-list-tile-action-->
          <v-btn icon @click="sideNav = !sideNav">
            <v-icon>{{ closeIconNavDrawer }}</v-icon>
          </v-btn>
        </v-list-tile>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.link">

            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- Navigation end -->

        <transition name="custom-classes-transition" mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
          <router-view />
        </transition>
      <Footer />
    </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Main from '@/views/Main.vue'
// import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      items: [
        { title: 'Галерея', link: '/gallery', icon: 'insert_photo' },
        { title: 'Отзывы', link: '/', icon: 'speaker_notes' },
        { title: 'Наша философия', link: '/philosophy', icon: 'format_quote' },
        { title: 'О нас', link: '/about', icon: 'supervisor_account' },
        { title: 'Контакты', link: '/', icon: 'work' }
      ],
      sideNav: false,
      titleNavDrawer: 'MaxDog',
      closeIconNavDrawer: 'arrow_forward'
    }
  },
  components: {
    Footer
    // Navigation
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
  // padding-top: 4em;
  min-height: auto;
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
.right {
  text-align: right;
}

.logo {
  font-family: $logo-font;
  font-size: 2em;
  vertical-align: middle;
  text-decoration: none;
  color: $color-primary;
}

.navDrawerTitle {
  color: $color-primary;
  font-family: $logo-font;
  font-size: 2em;
}
</style>
