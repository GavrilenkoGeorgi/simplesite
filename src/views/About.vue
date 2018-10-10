<template>
  <v-container mt-4>
    <v-layout row wrap justify-space-around mt-4>
      <v-flex xs12 md6>
        <h1 class="mt-4">О нас</h1>
        <v-card flat>
          <v-img class="mt-2 animated fadeIn" :src="require('@/assets/img/about.png')" max-height="420" contain></v-img>
        </v-card>
        <p class="simpleTextBlock">
          {{ card_text }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      title: 'About',
      card_text: 'Добро пожаловать на наш сайт дрессировки собак. Мы всегда рады помочь и проконсультировать вас в решении  сложившейся ситуации. Если Вы новичок или не знаете как решить  какую-то конкретную ситуацию проблемного  поведения вашей собаки, то мы всегда Вам  поможем подобрать наиболее эффективные,  альтернативные  и не конфликтные способы  обучения щенка и переобучения собак  возрастом до 8 лет. В процессе дрессировки вы не только  научите собаку базовому послушанию, вы достигнете взаимопонимания с собакой. Мы гарантируем результат!'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  h1 {
  font-family: $alt-font-1;
  $color: $alt-color-1;
}

.simpleTextBlock {
  font-size: 1.5em;
  padding-top: 1em;
  margin-bottom: 10em;
}
</style>
