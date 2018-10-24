<template>
<v-container pa-0 fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 md8>
        <h1 >О нас</h1>
        <v-card flat>
          <v-img class="mt-2 animated fadeIn" :src="require('@/assets/img/about.jpg')" max-height="420" contain></v-img>
        </v-card>
        <p class="simple-text-block mt-4">
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
