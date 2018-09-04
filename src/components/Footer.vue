<template>
  <v-footer absolute>
    <v-layout row wrap align-center justify-center class="footer">
      <v-flex d-flex xs12 md4 pt-2>
        <h2><span class="logo">MaxDog</span></h2>
      </v-flex>
      <v-flex d-flex xs12 md4>
        <p class="contacts">ул. Крещатик, 1а, Киев. <br />
          119019, Украина <br />
          Телефон: +38 (050) 123-45-67 <br />
          info@maxdog.com.ua
        </p>
      </v-flex>
      <v-flex xs12 ma-2>
        <!--div class="footer-social-icons"-->
          <ul class="social-icons">
            <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-google-plus"></i></a></li>
          </ul>
        <!--/div-->
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/colours.scss";
@import "../assets/scss/fonts.scss";

.footer {
  // display: flex;
  color: $color-white;
  // width: 100%;
  // height: 42em;
  // margin-top: 1em;
  // padding: 1em;
  box-shadow: inset 0px 15px 25px -10px $color-darkGray;
  background:url(
  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQoU2NkwA9mMuKRn8nAwJCOSwFYEqQZmwK4JDYFKJLoCjAkkRVglYQpwCkJUgAAsT0Hos1G1a4AAAAASUVORK5CYII=
  ) repeat;
  background-color: $color-primary;
  // transition-property: all;
  // transition-duration: .5s;
  // transition-timing-function: cubic-bezier(.46,.38,.89,.5);
  // transition-timing-function: linear;
}

.contacts {
  // text-align: left;
  width: 20em;
  margin: 2em;;
}
.logo {
    color: $color-white;
}
// social networks icons css
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
ul {
    padding:0;
    list-style: none;
}
.footer-social-icons {
    text-align:center;
    // width: 350px;
    display:block;
    margin: 2em 0em 0em 0em;
    // background-color: $color-primary;
    width: 100%;
    // padding-bottom: 2em;
}
.social-icon {
  font-size: 1.4em;
  color: #fff;
}
/*
ul.social-icons {
    // margin-top: 10px;
}
*/
.social-icons li {
    vertical-align: top;
    display: inline;
    // height: 100px;
}
.social-icons a {
    color: #fff;
    text-decoration: none;
}
.fa-facebook {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    // background-color: #322f30;
}
.fa-facebook:hover {
    background-color: #3d5b99;
}
.fa-twitter {
    padding:10px 12px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    // background-color: #322f30;
}
.fa-twitter:hover {
    background-color: #00aced;
}
.fa-rss {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    // background-color: #322f30;
}
.fa-rss:hover {
    background-color: #eb8231;
}
.fa-youtube {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    // background-color: #322f30;
}
.fa-youtube:hover {
    background-color: #e64a41;
}
.fa-linkedin {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    // background-color: #322f30;
}
.fa-linkedin:hover {
    background-color: #0073a4;
}
.fa-google-plus {
    padding:10px 9px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
    // background-color: #322f30;
}
.fa-google-plus:hover {
    background-color: #e25714;
}

</style>
