<template>
  <div id="home">
<!-- Parralax image background -->
      <v-container fluid class="pa-0 mt-5">
        <v-layout>
          <v-flex xs12>
            <v-parallax height="500" :src="require('@/assets/dog-wallpaper.jpg')">
            <h1 class="display-2 photo-overlay">Дрессировка собак в Киеве и Киевской области</h1>
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Why us text block -->
      <v-container>
        <v-layout>
          <v-flex xs12>
            <h2 class="display-3">Почему именно MaxDog?</h2>
              <p class="simpleTextBlock">
                Bla, bla, bla. Lorem ipsum dolor sit amet, solum meliore efficiendi ut quo, ex assum interesset mel,
                quis eirmod in est. Ea quod verear albucius eos, an est eros insolens reprehendunt. No veritus assentior ius,
                duo no modus paulo expetendis, est enim intellegat omittantur ut. His munere soleat verear ex, cu his diam delectus.
              </p>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around class="mt-4">
          <v-flex xs10 md4 class="mt-4">
            <v-icon x-large>pets</v-icon>
            <p class="simpleTextBlock">
              Qui cu omnes dissentias. Laoreet accumsan mea at, sea harum facilisi no. Ad eos fierent salutandi repudiare,
              ei eum sint graece, ei sanctus detraxit cum.
            </p>
          </v-flex>
          <v-flex xs10 md4 class="mt-4">
            <v-icon x-large>favorite</v-icon>
            <p class="simpleTextBlock">
              Nam eu ferri mediocritatem, vix prodesset definitionem ut, ea usu veri urbanitas. Et elit officiis deterruisset
              per, eam at quaeque copiosae euripidis. Duo in natum nemore gubergren, ne sensibus consetetur est, cum at ipsum error.
            </p>
          </v-flex>
          <v-flex xs12>
            <h2 class="display-3">Первый урок — 50%</h2>
            <v-btn color="info" large class="mt-4">ОНЛАЙН ЗАПИСЬ</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Training types block -->
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5 v-scroll-reveal.reset>
            <h4 class="display-1">Групповые занятия</h4>
            <v-img :src="require('@/assets/img/groupOfDogs.jpg')" height="320" contain></v-img>
            <p class="simpleTextBlock">
              На групповых занятиях дважды в неделю вы получаете практический
              и теоретический инструктаж как проводить воспитание и дрессировку поэтапно далее в домашних
              условиях.
              Мы постараемся ответить на все ваши вопросы. Вы, ежедневно в быту, закрепляете со
              щенком домашнее задание — полученную на занятиях базу знаний и навыков.
              При этом варианте обучения требуется несколько больше времени, но терпение и труд обернутся
              — хорошим выполнением всех необходимых базовых команд. Вы получите послушную,
              социализированную, контактную собаку.
            </p>
          </v-flex>
          <v-flex xs12 md5 v-scroll-reveal.reset>
            <h4 class="display-1">Индивидуальные занятия</h4>
            <v-img :src="require('@/assets/img/dogPlayingBallSmall.jpg')" height="320" contain></v-img>
            <p class="simpleTextBlock">
              При индивидуальных занятиях мы тренируем собаку тет-а-тет с вами или
              самостоятельно там, где, когда и во сколько вам удобно. Тренировка ориентирована на потребности
              сугубо вашей собаки и соответственно обучение дает максимальный результат в сжатые сроки.
            </p>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Another fancy parallax -->
      <v-container fluid class="pa-0 mt-5">
        <v-layout>
          <v-flex xs12>
            <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')">
            <h1 class="display-2 photo-overlay">Грумінг собак і кішок</h1>
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Grooming section -->
  <v-container>
    <v-layout row wrap justify-space-around>
      <v-flex xs12 md8 v-scroll-reveal.reset>
        <v-img :src="require('@/assets/img/grooming/groomingTitlePhoto.png')" height="371" contain></v-img>
          <p class="simpleTextBlock">
            Здравствуй, дорогой друг, меня зовут Людмила!
            «Hairstyle animals» — Ты здесь, а это значит что провел свои пару минут не просто посетив сайт,
            а нашел именно того грумера которого так долго искал, грумера-стилиста, создающего не просто
            стандартный образ, а тот образ который подчеркивает все преимущества животного, скрывая недостатки, придавая шарм
            и новизну, учитывая здоровье животного, так как имеем высшее ветеринарное образование!
            Мы не стоим на месте, повышаем свою квалификацию на всевозможных конкурсах и мастер классах.
            Стремимся к тому, чтобы приучить не только животное к грумингу, а и его хозяина к своевременному посещению грумера.
            Так как это залог здоровья, красоты, послушания животного!
            Груминг и кинология взаимосвязаные сферы. Как вы приучите своё животное к грумингу с детства, так и дальше будет оно
            себя вести.
          </p>
      </v-flex>
    </v-layout>
  </v-container>

<!-- Test Section-->
  <v-container>
    <v-layout>
      <v-flex xs12 md6>
          <div>
            <h2>Test</h2>
          </div>
      </v-flex>
    </v-layout>
  </v-container>

<main>
    <section>
      <h1>Scroll down!</h1>
    </section>

    <!-- This section will reveal itself each time it's scrolled into view -->
    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>

    <!-- Element-specific configuration options can be passed like this -->
    <section class="bounce" v-scroll-reveal.reset="{ delay: 1250 }">
      <h1>Slightly late tada!</h1>
    </section>

  </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      title: 'MaxDog'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/animate.css";
@import "../assets/scss/colours.scss";

#home {
  margin: 0;
  padding: 0;
  background-color: white;
}

.photo-overlay {
  position: absolute;
  // border: 1px solid lime;
  bottom: 1em;
  background-color: $photo-overlay;
  padding: .3em;
}

.simpleTextBlock {
  font-size: 1.5em;
  padding-top:1em;
}

</style>
