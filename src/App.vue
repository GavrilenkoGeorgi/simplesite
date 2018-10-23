<template>
    <v-app id="app">
      <v-toolbar app scroll-off-screen>
        <header class='toolbar-logo'>
          <router-link to="/">
            <span class="logo">{{ getContent.logo.text }}</span>
          </router-link>
          <span class="lower-logo-text">{{ getContent.logo.lowerText }}</span>
        </header>
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
          <v-list-tile-title class="nav-drawer-title">
            <router-link to="/"> {{ getContent.logo.text }} </router-link>
          </v-list-tile-title>
          <v-btn icon @click="sideNav = !sideNav">
            <v-icon>{{ closeIconNavDrawer }}</v-icon>
          </v-btn>
        </v-list-tile>
          <v-list-tile v-for="link in getContent.navLinks" :key="link.path" :to="link.path">

            <v-list-tile-action>
              <v-icon>{{ link.icon }}</v-icon>
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
                  enter-active-class="animated fadeInRight"
                  leave-active-class="animated fadeOutLeft">
        <router-view />
      </transition>
      <v-footer dark height="auto mt-4">
        <v-card width="100%" class=" lighten-1 white--text text-xs-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              <span class='footer-quote'>«То, что сегодня кажется невозможным, завтра станет результатом».</span>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              &copy;2018 — <strong>MaxDog</strong>
            </v-card-text>
          </v-card>
      </v-footer>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

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
    // Footer
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
@import "./assets/scss/index.scss";
@import './assets/animate.css';

h1, h2, h3 {
  font-family: $alt-font-1;
  color: $alt-color-primary-darkest;
  font-size-adjust: 1;
}
h2 {
  font-size: 2em;
  // color: red;
}
h3 {
  font-size: 1.6em;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  padding-top: 3.5em;
}
.toolbar-logo {
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
}
.logo{
  font-size: 1.9em;
  line-height: 1em;
  height: .1em;
  text-transform: uppercase;
  vertical-align: middle;
  text-decoration: none;
  color: $alt-color-primary-darkest;
  font-family: $logo-font;
  font-weight: 700;
  // border: 1px solid green;
}
.lower-logo-text {
  text-transform: uppercase;
  // border: 1px solid red;
  font-size: .79em;
  font-weight: 700;
}
.nav-drawer-title {
  color: $alt-color-primary-darkest;
  font-family: $logo-font;
  font-size: 2em;
}
.quote {
  font-size: 2em;
}
.footer-quote {
  font-family: $text-font;
  font-size: 1.4em;
}

</style>
