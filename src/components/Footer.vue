<template>
    <div id="container">
      <div id ="footer" class="footerContainer pattern">
        <div class="footer">
          <div class="contactInfo">
            <p class="footerLogo">MaxDog</p>
            <p class="contacts">ул. Крещатик, 1а, Киев. <br />
            119019, Украина <br />
            Телефон: +38 (050) 123-45-67 <br />
            info@maxdog.com.ua
            </p>
          </div>

          <div class="consultForm">
            <p class="formHeader">Запись онлайн</p>
            <form id="consultForm" action="#" method="post">
              <div>
                <!--label for="name">Name:</label-->
                <input type="text" name="name" id="name" value="" tabindex="1" placeholder="Имя" class="formInput" required>
              </div>
              <div>
                <!--label for="name">Phone:</label-->
                <input type="tel" name="name" id="name" value="" tabindex="2" placeholder="№ телефона" class="formInput">
              </div>
              <div>
                <!--label for="name">Email:</label-->
                <input type="email" name="name" id="name" value="" tabindex="3" placeholder="Адрес эл. почты" class="formInput" required>
              </div>

              <!--div>
                <label for="textarea">Textarea:</label>
                <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
              </div-->

              <div class="formButtonHolder">
                <input type="submit" value="Отправить" class="formButton">
              </div>
            </form>
          </div>
          <div class="footer-social-icons">
          <ul class="social-icons">
            <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-google-plus"></i></a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
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
  width: 100%;
  // height: 20em;
  margin-top: 1em;
  padding: 1em;
  box-shadow: inset 0px 15px 25px -10px $color-darkGray;
  background:url(
  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQoU2NkwA9mMuKRn8nAwJCOSwFYEqQZmwK4JDYFKJLoCjAkkRVglYQpwCkJUgAAsT0Hos1G1a4AAAAASUVORK5CYII=
  ) repeat;
  background-color: $color-primary;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(.46,.38,.89,.5);
  // transition-timing-function: linear;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
  }
}

.footerLogo {
  font-family: $logo-font;
  font-size: 3em;
  font-weight: 400;
}
.contactInfo {
  display: flex;
  flex-direction: column;
  padding: 2em;
  justify-content: center;
  align-items: center;
  // background-color: aqua;
}
.contacts {
  // padding-left: 1em;
  line-height: 1.7em;
}
.formHeader {
  font-size: 2em;
}
.consultForm {
  // width: 50%;
  // background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // align-content: right;
}
#consultForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.formInput {
  border: none;
  width: 18em;
  height: 2em;
  padding: .6em;
  border-radius: .25em;
  margin: .25em 0em .25em 0em;
  transition-property: all;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.46,.38,.89,.5);
}
.formInput:hover, .formInput:focus, .formButton:hover {
  box-shadow: 0px 0px 5px 3px $color-link-hover;
}
.formButton {
  border: none;
  background-color: $color-white;
  color: $color-primary;
  font-weight: 700;
  width: 7em;
  height: 2em;
  border-radius: .25em;
  transition-property: all;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.46,.38,.89,.5);
}
.formButtonHolder {
  margin-left: auto;
  margin-top: .25em;
}
.socialIcons {
  width: 100%;
  // background-color: $color-primary;
  text-align: center;
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

@media only screen and (orientation: landscape) {
  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    }
  .footer-social-icons {
    margin-top: 0em;
  }
}
</style>
