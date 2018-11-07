<template>
  <v-layout>
    <v-flex px-2>
      <h1>{{ title }}</h1>
      <p class="subtitle"><strong>{{ subtitle }}</strong></p>

      <div class="custom-layout row py-3">
        <!--div class="icon-box">
          <v-icon>place</v-icon>
        </div-->

        <div>
          <p class="address">
            {{ address.street }}<br />
            {{ address.cityAndZipCode }}<br />
            {{ address.country }}
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: 'MAXDOG',
      subtitle: 'Дрессировка собак в Киеве и Киевской области',
      address: {
        street: 'ул. Хрещатик, дом 3',
        cityAndZipCode: 'Киев, 09878',
        country: 'Украина',
        phoneNumber: '+380938336489',
        phoneHumanReadable: '(093) 833-64-89',
        email: 'maxdog@maxdog.com.ua'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index.scss";

h1 {
  font-size: 5em;
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
</style>
