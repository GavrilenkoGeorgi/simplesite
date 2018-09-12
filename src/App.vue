<template>
    <v-app id="app">
      <v-toolbar app clipped-right>
        <v-toolbar-title><span><router-link class="logo logoFont" to="/">MaxDog</router-link></span></v-toolbar-title>
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
        <!-- Checkboxes -->
        <v-container fluid class="menuHeader pa-0 mt-4">
          <span class="hardcodedFont">Шрифты</span>
        </v-container>
        <v-container fluid pa-0>
          <v-layout row>
          <v-radio-group class="hardcodedFont pl-3" v-model="whatToChange" :mandatory="false">
            <v-radio label="Лого" value="Logo"></v-radio>
            <v-radio label="Заголовки" value="Header"></v-radio>
            <v-radio label="Текст" value="Text"></v-radio>
          </v-radio-group>
          </v-layout>
          <!--v-layout row fluid justify-space-around>
            <v-flex xs2>
              <v-checkbox v-model="logoSelected"></v-checkbox>
            </v-flex>
            <v-flex xs2>
              <v-checkbox v-model="headerSelected"></v-checkbox>
            </v-flex>
            <v-flex xs2>
              <v-checkbox v-model="textSelected"></v-checkbox>
            </v-flex>
          </v-layout-->
        </v-container>
        <v-container fluid class="mt-0 pt-0">
          <v-radio-group v-model="selectedFont" :mandatory="false">
            <v-radio class="hardcodedFont ma-0"
              v-for="font in fonts"
              :key="font.name"
              :label="font.name"
              :value="font.name"
            ></v-radio>
          </v-radio-group>
        </v-container>
        <!-- Theirs end :label="font.selected" -->
      </v-navigation-drawer>
      <!-- Navigation end -->
        <transition name="custom-classes-transition" mode="out-in" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
          <router-view />
        </transition>

      <!--Footer -->
      <v-footer app absolute dark height="auto">
        <v-card flat tile width="100%" class="blue-grey lighten-1 white--text text-xs-center" >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-3 white--text"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            «То, что сегодня кажется невозможным, завтра станет результом».
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            &copy;2018 — MaxDog
          </v-card-text>
        </v-card>
      </v-footer>
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
      selectedFont: 'Cardo',
      whatToChange: '',
      checkBox: '',
      // switch1: true,
      fonts: [
        { name: 'Cardo', label: '"Cardo", serif;', selected: true, logoFont: false, headerFont: false, textFont: false },
        { name: 'Poiret One', label: '"Poiret One", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Happy Monkey', label: '"Happy Monkey", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Elsie', label: '"Elsie", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Life Savers', label: '"Life Savers", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false }
      ],
      items: [
        { title: 'Галерея', link: '/gallery', icon: 'insert_photo' },
        { title: 'Отзывы', link: '/', icon: 'speaker_notes' },
        { title: 'Оставить заявку', link: '/consultform', icon: 'contact_mail' },
        { title: 'Наша философия', link: '/philosophy', icon: 'format_quote' },
        { title: 'О нас', link: '/about', icon: 'supervisor_account' },
        { title: 'Контакты', link: '/', icon: 'work' }
      ],
      icons: [
        'fa-facebook',
        'fa-instagram',
        'fa-vk',
        'fa-youtube'
      ],
      sideNav: false,
      titleNavDrawer: 'MaxDog',
      closeIconNavDrawer: 'arrow_forward'
    }
  },
  components: {
    Footer
    // Navigation
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log(`Mounted`)
    // Code that will run only after the
    // entire view has been rendered
    })
  },
  watch: {
    logoSelected: function () {
      this.whatToChange = 'Logo'
      // this.logoSelected = true
      // console.log(event.target)
      console.log(`Changing logos`)
    },
    headerSelected: function () {
      this.whatToChange = 'Headers'
      // this.headerSelected = true
      console.log(`Changing headers`)
      // elementsToChange = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    },
    textSelected: function () {
      // this.textSelected = true
      this.whatToChange = 'Text'
      console.log(`Changing text`)
    },
    selectedFont: function () {
      if (this.whatToChange !== '') {
        let elementsToChange
        switch (this.whatToChange) {
          case 'Logo':
            elementsToChange = document.querySelector('.logo')
            break
          case 'Header':
            elementsToChange = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
            break
          case 'Text':
            elementsToChange = document.querySelectorAll('.container')
            break
          default:
            console.log('Nothing to change')
        }
        this.changeElementsFont(elementsToChange)
      } else {
        console.log('Select something to change')
      }
    }
  },
  methods: {
    changeElementsFont: function (elementsToChange) {
      // let elementsToChange = this.elementsToChange
      console.log(`Elements to change in change elements ${elementsToChange.length}`)
      if (elementsToChange.length) {
        for (let element of elementsToChange) {
          console.log(`${element}`)
          element.style.fontFamily = this.selectedFont // which is written on a label
        }
      } else {
        elementsToChange.style.fontFamily = this.selectedFont
      }
    }
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
  // min-height: auto;
}

.application {
  // font-family: $text-font !important;
  font-size: 1.3em;
}

.hardcodedFont { // Meh...
  font-family: sans-serif;
}
.container {
  font-family: $text-font;
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

.logoFont {
  font-family: $logo-font;
}

.logo{
  font-size: 2em;
  vertical-align: middle;
  text-decoration: none;
  color: $color-primary;
}

.footerLogo {
  font-size: 1.3em;
  color: $color-white;
  text-decoration: none;
}

.navDrawerTitle {
  color: $color-primary;
  font-family: $logo-font;
  font-size: 2em;
}
</style>
