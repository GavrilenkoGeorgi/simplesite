<template>
    <v-container>
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
      <v-toolbar fixed app>
        <v-toolbar-title><span><router-link class="logo" to="/">MaxDog</router-link></span></v-toolbar-title>
        <!--div>MaxDog</div-->
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
    </v-container>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      sideNav: false
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

@import "../assets/scss/colours.scss";
@import "../assets/scss/fonts.scss";

.logo {
    font-family: $logo-font;
  font-size: 2em;
  vertical-align: middle;
  text-decoration: none;
  color: $color-primary;
}
</style>
