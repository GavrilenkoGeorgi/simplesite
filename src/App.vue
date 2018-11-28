<template>
  <v-app id="app">
<!-- Navigation drawer -->
    <v-navigation-drawer app right
      disable-resize-watcher
      v-model="sideNav"
      width="240">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="nav-drawer-title">
            <router-link to="/"> {{ getContent.logo.text }} </router-link>
          </v-list-tile-title>
          <v-btn icon @click="sideNav = !sideNav">
            <v-icon color="#005cac">{{ closeIconNavDrawer }}</v-icon>
          </v-btn>
        </v-list-tile>
        <v-list-tile v-for="link in getContent.navLinks"
          :key="link.path" :to="link.path">
          <v-list-tile-action>
            <v-icon color="#005cac">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
<!-- Toolbar -->
    <v-toolbar app scroll-off-screen class="px-0">
      <header class='toolbar-logo'>
        <router-link to="/">
          <span class="logo">{{ getContent.logo.text }}</span>
          <span class="lower-logo-text">{{ getContent.logo.lowerText }}</span>
        </router-link>
      </header>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="link in getContent.navLinks"
          :key="link.path" :to="link.path">
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click="sideNav = !sideNav"
        class="hidden-md-and-up">
      </v-toolbar-side-icon>
    </v-toolbar>
<!-- SVG icon defs -->
    <svg version='1.1' style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol aria-labelledby="simpleicons-facebook-icon" id="icon-facebook" role="button" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
      </symbol>
      <symbol aria-labelledby="simpleicons-instagram-icon" id="icon-instagram" role="button" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
      </symbol>
      <symbol aria-labelledby="simpleicons-youtube-icon" id="icon-youtube" role="button" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </symbol>
    </svg>
<!-- Main page router view -->
    <v-content>
      <v-container pa-0 fluid class="router-container">
        <transition name="custom-classes-transition"
          mode="out-in"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutLeft">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
<!-- Footer -->
    <hr class="divider"/>
    <v-footer height="13em">
      <v-layout justify-space-around column fill-height>
        <v-flex d-flex py-1>
          <v-layout row align-center justify-center>
            <v-flex d-flex align-center xs4 sm2 md1
              v-for="icon in this.socialIcons"
              :key="icon">
              <svg class="social-network-icon">
                <use v-bind="{'xlink:href':'#' + icon}"></use>
              </svg>
            </v-flex>
          </v-layout>
        </v-flex>
      <v-flex d-flex align-center justify-center px-1
        class="footer-quote">
        {{ footerQuote }}
      </v-flex>
        <v-flex d-flex align-center justify-center>
          <div itemscope itemtype="http://schema.org/LocalBusiness"
            class="phone-number">
            <v-icon>call</v-icon>
            <span itemprop="telephone">
              <a href="tel:+380938336489">
                (093) 833-64-89
              </a>
            </span>
          </div>
        </v-flex>
        <v-flex d-flex align-center justify-center
          class="footer-logo">
          &copy;2018 — {{ titleNavDrawer }} <!-- nav drawer?? -->
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      // fontSize: 16,
      // selectedFont: '',
      // currentLogoFont: 'Default',
      // currentHeaderFont: 'Default',
      // currentTextFont: 'Default',
      // currentQuoteFont: 'Default',
      // whatToChange: '',
      // checkBox: '',
      socialIcons: [
        'icon-facebook',
        'icon-instagram',
        'icon-youtube'
      ],
      sideNav: false,
      titleNavDrawer: 'maxdog',
      footerQuote: '«То, что сегодня кажется невозможным, завтра станет результатом»',
      closeIconNavDrawer: 'arrow_forward'
    }
  },
  computed: {
    ...mapGetters([
      'getContent'
    ])
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
  // padding-top: 3.5em;
  // height: 100vh;
}
.toolbar-logo {
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
}

.logo{
  font-size: 2.2em;
  line-height: .8em;
  text-transform: uppercase;
  // vertical-align: middle;
  // text-decoration: none;
  // color: $alt-color-primary-darkest;
  font-family: $logo-font;
  font-weight: 700;
  // color: red;
  display: block;
  // border: 1px solid green;
}
.lower-logo-text {
  text-transform: uppercase;
  // border: 1px solid red;
  font-size: .912em;
  // color: $alt-color-primary-darkest;
  color: black;
  font-weight: 700;
}
.nav-drawer-title {
  // border: 1px solid pink;
    a {
  color: $alt-color-primary-darkest;
  // font-weight: 700;
  // color: red;
  font-family: $logo-font;
  font-size: 2em;
  }
}
.quote {
  font-size: 2em;
  // padding: 0;
}
.footer-quote {
  font-family: $text-font;
  font-size: 1.5em;
  // color: red;
  line-height: 1.1;
}
.social-network-icon {
  height: 1.6em;
  fill: $alt-color-primary-darker;
  transition: fill 500ms ease-out;
}
.footer {
  background-color: $alt-color-primary-light;
}
.social-network-icon:hover {
  fill: $color-link-hover;
}
.phone-number {
  a {
    font-size: 1.7em;
    text-decoration: none;
    font-family: $alt-font-1;
    color: $alt-color-primary-darker;
    transition: color 500ms ease-out;
  }
  a:hover {
    color: $color-link-hover;
  }
}
.footer-logo {
  text-transform: uppercase;
  font-size: 1em;
  span {
    font-family: $logo-font;
    font-weight: 700;
  }
}

.border {
  border: 1px solid pink;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
