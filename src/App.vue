<template>
    <v-app id="app">
      <v-toolbar app scroll-off-screen>
        <v-toolbar-title><span><router-link class="logo" to="/">{{ getContent.logo.text }}</router-link></span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat v-for="link in getContent.navLinks" :key="link.path" :to="link.path">
            {{ link.title }}
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      </v-toolbar>

      <v-navigation-drawer app right disable-resize-watcher v-model="sideNav" width="240">
        <v-list>
          <v-list-tile>
          <v-list-tile-title class="logo">
            {{ getContent.logo.text }}
          </v-list-tile-title>
          <v-btn icon @click="sideNav = !sideNav">
            <v-icon>{{ closeIconNavDrawer }}</v-icon>
          </v-btn>
        </v-list-tile>
          <v-list-tile v-for="link in getContent.navLinks" :key="link.path" :to="link.path">

            <v-list-tile-action>
              <!--v-layout justify-center-->
              <v-icon>{{ link.icon }}</v-icon>
              <!--/v-layout-->
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- Navigation end -->
      <transition name="custom-classes-transition"
                  mode="out-in"
                  enter-active-class="animated fadeInLeft"
                  leave-active-class="animated fadeOutRight">
        <router-view />
      </transition>

      <!--Footer -->
      <!--v-footer dark height="auto" class="footerColor"-->
        <!--v-card flat tile width="100%" class="blue-grey lighten-1 white--text text-xs-center"-->
        <!--v-card flat tile width="100%" class="indigo white--text text-xs-center">
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
            <p class="quote">
            «То, что сегодня кажется невозможным, завтра станет результатом».
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            &copy;2018 — MaxDog
          </v-card-text>
        </v-card>
      </v-footer-->
    </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Main from '@/views/Main.vue'
// import Navigation from '@/components/Navigation.vue'
import { mapGetters } from 'vuex'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      fontSize: 16,
      selectedFont: '',
      currentLogoFont: 'Default',
      currentHeaderFont: 'Default',
      currentTextFont: 'Default',
      currentQuoteFont: 'Default',
      whatToChange: '',
      checkBox: '',
      // switch1: true,
      fonts: [
        { name: 'Cardo', label: '"Cardo", serif;', selected: true, logoFont: false, headerFont: false, textFont: false },
        { name: 'Happy Monkey', label: '"Happy Monkey", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Elsie', label: '"Elsie", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Life Savers', label: '"Life Savers", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Playfair Display SC', label: '"Playfair Display SC", serif;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Roboto', label: '"Roboto", sans-serif;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Montserrat', label: '"Montserrat", sans-serif;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Russo One', label: '"Russo One", sans-serif;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Open Sans Condensed', label: '"Open Sans Condensed", sans-serif;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Comfortaa', label: '"Comfortaa", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Amatic SC', label: '"Amatic SC", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Cormorant Garamond', label: '"Cormorant Garamond", serif;', selected: false, logoFont: false, headerFont: false, textFont: false },
        { name: 'Poiret One', label: '"Poiret One", cursive;', selected: false, logoFont: false, headerFont: false, textFont: false }
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
  computed: {
    ...mapGetters([
      'getContent'
    ])
  },
  mounted: function () {
    this.$nextTick(function () {
      // console.log(`Mounted`)
    // Code that will run only after the
    // entire view has been rendered
    })
  },
  watch: {
    fontSize: function () {
      // console.log(this.fontSize)
      let bodyElem = document.getElementsByTagName('BODY')[0]
      // console.log(bodyElem)
      bodyElem.style.fontSize = this.fontSize + 'px'
    },
    logoSelected: function () {
      this.whatToChange = 'Logo'
      // this.logoSelected = true
      // console.log(event.target)
      // console.log(`Changing logos`)
    },
    headerSelected: function () {
      this.whatToChange = 'Headers'
      // this.headerSelected = true
      // console.log(`Changing headers`)
      // elementsToChange = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    },
    textSelected: function () {
      // this.textSelected = true
      this.whatToChange = 'Text'
      // console.log(`Changing text`)
    },
    selectedFont: function () {
      if (this.whatToChange !== '') {
        let elementsToChange
        switch (this.whatToChange) {
          case 'Logo':
            elementsToChange = document.querySelectorAll('.logo, .nav-drawer-title')
            this.currentLogoFont = this.selectedFont
            break
          case 'Header':
            elementsToChange = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
            this.currentHeaderFont = this.selectedFont
            break
          case 'Text':
            elementsToChange = document.querySelectorAll('.container')
            this.currentTextFont = this.selectedFont
            break
          case 'Quote':
            elementsToChange = document.querySelectorAll('.quote')
            this.currentTextFont = this.selectedFont
            break
          default:
            // console.log('Nothing to change')
        }
        this.changeElementsFont(elementsToChange)
      } else {
        // console.log('Select something to change')
      }
    }
  },
  methods: {
    changeElementsFont: function (elementsToChange) {
      // let elementsToChange = this.elementsToChange
      // console.log(`Elements to change in change elements ${elementsToChange.length}`)
      if (elementsToChange.length) {
        for (let element of elementsToChange) {
          // console.log(`${element}`)
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
// @import "./assets/scss/index.css";

body {
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
  // margin-top: 1em;
  font-family: $quote-font;
  letter-spacing: .07em;
  font-weight: 100;
  // font-size: .2em;
}

p {
  font-family: $text-font;
  // font-weight: 500;
  // font-size: 1.9em;
  // font-size-adjust: 9;
}

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

.hardcodedFont { // Meh...
  text-align: left;
  font-family: sans-serif;
  font-size: 16px;
}

/*
.container {
  font-family: $text-font;
}*/

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

.logo{
  font-size: 2em;
  vertical-align: middle;
  text-decoration: none;
  // color: $color-primary;
  color: $indigo;
  font-family: $logo-font;
  font-weight: 700;
}
/*
.footerLogo {
  font-size: 1.3em;
  color: $color-white;
  text-decoration: none;
}
*/
.nav-drawer-title {
  color: $color-primary;
  // font-family: $logo-font;
  font-size: 1.4em;
}
.quote {
  // font-family: $quote-font;
  font-size: 2em;
}

@media (-webkit-min-device-pixel-ratio: 1.88) and (min-width:768px) {
  h1, h2, h3, h4, h5, h6 {
    // margin-top: 1em;
    font-family: $quote-font;
    letter-spacing: .07em;
    font-weight: 100;
    font-size: 3em;
  }
}
</style>
