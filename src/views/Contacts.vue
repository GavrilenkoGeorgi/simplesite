<template>
  <v-layout pa-1 justify-center>
      <v-flex xs12 sm10 md8 lg6>
      <v-layout column>
        <v-flex d-flex align-center>
          <h1>{{ title }}</h1>
        </v-flex>
        <v-flex>
          <h2><strong>{{ subtitle }}</strong></h2>
        </v-flex>
        <v-flex mt-4 class="contact-info">
          {{ contactInfo }}
        </v-flex>
        <v-flex d-flex justify-center>
          <v-layout align-center fill-height justify-center>
              <v-icon x-large>call</v-icon>
              <p class="phone-number"><a href="tel:+380938336489">{{ address.phoneHumanReadable }}</a></p>
          </v-layout>
        </v-flex>
        <v-flex mt-4>
          <!--v-icon size="1.3em" >mail_outline</v-icon-->
          <a class="email-link" href="mailto:maxdog@maxdog.com.ua">{{ address.email }}</a>
        </v-flex>
      </v-layout>
    <!--/v-flex-->
    <!--v-flex px-2>
      <h1>{{ title }}</h1>
      <p class="subtitle"><strong>{{ subtitle }}</strong></p>

      <div class="custom-layout row py-3">
        <div class="icon-box">
          <v-icon>place</v-icon>
        </div-->

        <!--div>
          <p class="address"-->
            <!-- {{ address.street }}<br />
            {{ address.cityAndZipCode }}<br />
            {{ address.country }} -->
            <!-- {{ contactInfo }}
          </p>
        </div>
      </div>

      <div class="custom-layout row">
        <div class="icon-box">
          <v-icon>mail_outline</v-icon>
        </div>
        <div>
          <a class="email-link" href="mailto:maxdog@maxdog.com.ua">{{ address.email }}</a>
        </div>
      </div>
      <div class="custom-layout row mb-4">
        <div class="icon-box">
          <v-icon>call</v-icon>
        </div>
        <div>
          <p class="phone-number"><a href="tel:+380938336489">{{ address.phoneHumanReadable }}</a></p>
        </div>
      </div>
    </v-flex-->
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: 'MAXDOG',
      subtitle: 'Дрессировка собак в Киеве и Киевской области',
      contactInfo: 'Локацию проведения тренировок (Варшавская/Житомирская трасса) уточняйте по номеру:',
      address: {
        street: 'ул. Хрещатик, дом 3',
        cityAndZipCode: 'Киев, 09878',
        country: 'Украина',
        phoneNumber: '+380938336489',
        phoneHumanReadable: '(093) 833-64-89',
        email: 'maksymyemyts@gmail.com'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index.scss";

h1 {
  font-size: 4.7em;
  font-family: $logo-font;
}

h2 {
  // font-size: .6em;
  color: $alt-color-primary-even-darker;
}

.contact-info {
  // color: red;
  font-size: 1.6em;
  font-family: $text-font;
}

.custom-layout {
  display: flex;
}

.subtitle {
  // color: red;
  font-size: 2em;
  text-align: left;
}
.address {
  // padding: 0;
  margin: 0;
  // font-size: 1.6em;
  text-align: left;
  // color:red;
  font-family: $alt-font-1;
}
.phone-number {
  text-decoration: none;
  text-align: left;
  padding: 0;
  margin: 0;
  font-size: 1.5em;
}

.mail-icon {
  font-size: 3em;
}

.icon-box {
  // border: 1px solid pink;
  // padding-top: .7em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
}

.email-link {
  // color: red;
  font-size: 1.3em;
}

.border {
   border: 1px solid pink;
}
.border-lime {
   border: 1px solid lime;
}
.border-black {
   border: 1px solid black;
}
</style>
