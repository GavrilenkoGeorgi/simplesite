<template>
  <div id="home" class="marginBottom">
<!-- Parralax image background -->
      <v-container fluid class="pa-0 mt-5">
        <v-layout>
          <v-flex xs12>
            <v-parallax height="500" :src="require('@/assets/dog-wallpaper.jpg')">
              <h1 class="photo-overlay">{{ overlayTitle }}</h1>
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Why us text block -->
      <v-container>
        <v-layout>
          <v-flex xs12>
            <h2 class="largeHeader indigo--text">Почему именно MaxDog?</h2>
              <p class="simple-text-block">
                Blah, blah, blah. Lorem ipsum dolor sit amet, solum meliore efficiendi ut quo, ex assum interesset mel,
                quis eirmod in est. Ea quod verear albucius eos, an est eros insolens reprehendunt. No veritus assentior ius,
                duo no modus paulo expetendis, est enim intellegat omittantur ut. His munere soleat verear ex, cu his diam delectus.
              </p>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around class="mt-4">
          <v-flex xs10 md4 class="mt-4">
            <v-icon x-large class="animated indigo--text" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">favorite</v-icon>
            <p class="simple-text-block">
              Qui cu omnes dissentias. Laoreet accumsan mea at, sea harum facilisi no. Ad eos fierent salutandi repudiare,
              ei eum sint graece, ei sanctus detraxit cum.
            </p>
          </v-flex>
          <v-flex xs10 md4 class="mt-4">
            <v-icon x-large class="animated indigo--text" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">pets</v-icon>
            <p class="simple-text-block">
              Nam eu ferri mediocritatem, vix prodesset definitionem ut, ea usu veri urbanitas. Et elit officiis deterruisset
              per, eam at quaeque copiosae euripidis. Duo in natum nemore gubergren, ne sensibus consetetur est, cum at ipsum error.
            </p>
          </v-flex>
          <v-flex xs12>
            <h2 class="indigo--text">Первый урок — 50%</h2>
            <v-btn to="/consultform" color="info" large class="mt-4 animated" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }">ОНЛАЙН ЗАПИСЬ</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Training types block -->
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated groupTraining hidden">
            <h3>Групповые занятия</h3>
            <v-img :src="require('@/assets/img/group_training-h500-96dpi.jpg')" class="training-section-image" contain></v-img>
            <p class="simple-text-block">
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
          <v-flex xs12 md5 v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated individualTraining hidden">
            <h3>Индивидуальные занятия</h3>
            <v-img :src="require('@/assets/img/ind_training-h500-96dpi.jpg')" class="training-section-image" contain></v-img>
            <p class="simple-text-block">
              При индивидуальных занятиях мы тренируем собаку тет-а-тет с вами или
              самостоятельно там, где, когда и во сколько вам удобно. Тренировка ориентирована на потребности
              сугубо вашей собаки и соответственно обучение дает максимальный результат в сжатые сроки.
            </p>
          </v-flex>
        </v-layout>
      </v-container>

<!-- Another fancy parallax -->
      <!--v-container fluid class="pa-0 mt-5">
        <v-layout fluid>
          <v-flex xs12>
            <v-parallax :src="require('@/assets/img/dogFenceRunningSquare.jpg')">
            <h1 class="photo-overlay">Грумінг собак та котів</h1>
            </v-parallax>
          </v-flex>
        </v-layout>
      </v-container-->

<!-- Grooming section -->
  <!--v-container>
    <v-layout row wrap justify-space-around>
      <v-flex xs12 md8>
        <v-img :src="require('@/assets/img/grooming/groomingTitlePhoto.png')" height="371" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden groomingSection"></v-img>
          <p class="simple-text-block">
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
      <v-flex xs12 md8>
        <h3 class="indigo--text">Груминг кошек</h3>
        <v-img :src="require('@/assets/img/grooming/groomingCat.jpg')" height="500" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden groomingSection"></v-img>
        <p class="simple-text-block">
          Вычесывание, стрижка, гигиена, купание, сушка.
        </p>
      </v-flex>
      <v-flex xs12 md8>
        <h3 class="indigo--text">Груминг собак</h3>
        <v-img :src="require('@/assets/img/grooming/groomingDog.jpg')" height="500" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden groomingSection"></v-img>
        <p class="simple-text-block">
          Вычесывание, удаление колтунов, гигиена, стрижки, тримминг, стрипинг, купание, сушка.
        </p>
      </v-flex>
      <v-flex xs12 md8>
        <h3 class="indigo--text">Дополнительные услуги</h3>
        <v-img :src="require('@/assets/img/grooming/groomingOther.jpg')" height="500" contain v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden groomingSection"></v-img>
        <p class="simple-text-block">
          Выставочный груминг, креативная стрижка и окрашивание, чистка зубов, оформление коготков.
        </p>
      </v-flex>
    </v-layout>
    <v-container class="my-4 pa-0">
      <v-layout column>
        <h2 class="indigo--text">SPA комплекс</h2>
        <h3>Банные услуги и гигиена</h3>
      </v-layout>
    </v-container>
    <v-container class="my-4 pa-0">
      <h4 class="indigo--text">Коты</h4>
        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingSlimCat.jpg" alt="Black and white cat" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Породы до 5 кг</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">250 грн</p>
            </div>
          </div>
        </div>

        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingFatCat.jpg" alt="Fat ginger cat" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Больше 5 кг</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">300 грн</p>
            </div>
          </div>
        </div>
    </v-container>
    <v-container class="my-4 pa-0">
        <h4 class="indigo--text">Собаки</h4>
        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingSmallBreed.jpg" alt="Small dog barking" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Мелкие породы</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">250-350 грн</p>
            </div>
          </div>
        </div>

        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingMediumBreed.jpg" alt="Medium size dog" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Средние породы</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">400-450 грн</p>
            </div>
          </div>
        </div>

        <div class="serviceItem">
          <div class="serviceItemPhoto">
            <div class="item animatedGrooming">
              <img src="../assets/img/grooming/groomingLargeBreed.jpg" alt="Large dog sitting" v-observe-visibility="{ callback: visibilityChanged, throttle: 300 }" class="animated hidden serviceItems">
            </div>
          </div>
          <div class="serviceItemDescr">
            <div class="itemPricing">
              <p class="serviceName indogo--text">Крупные породы</p>
                <div class="pricingDivider"></div>
              <p class="servicePrice">500-650 грн</p>
            </div>
          </div>
        </div>
    </v-container>
  </v-container-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      title: 'MaxDog',
      overlayTitle: 'Дрессировка собак в Киеве и Киевской области'
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      // this.isVisible = isVisible
      // console.log(entry.target)
      // console.log(`Is it visible now? ${isVisible}`)
      // console.log(entry.target.className)
      let animationType = 'flipInY'

      if (entry.target.classList.contains('groupTraining')) {
        // console.log(`Training!`)
        animationType = 'fadeInLeft'
      } else if (entry.target.classList.contains('individualTraining')) {
        animationType = 'fadeInRight'
      } else if (entry.target.classList.contains('serviceItems')) {
        animationType = 'fadeInLeft'
      } else if (entry.target.classList.contains('groomingSection')) {
        animationType = 'zoomIn'
      }
      if (isVisible) {
        entry.target.classList.add(animationType)
        entry.target.classList.remove('hidden')
        // console.log(`Animation added: ${animationType}`)
      } else {
        entry.target.classList.remove(animationType)
        entry.target.classList.add('hidden')
        // console.log(`Animation removed: ${animationType}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
@import "../assets/animate.css";
// @import "../assets/scss/fonts.scss";

h1, h2, h3, h4, h5, h6 {
  font-family: $header-font;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 1.8em;
}
h4 {
  font-size: 1.5em;
}

/*
.simple-text-block {
  font-size: 1.5em;
  padding-top: 1em;
}*/

.marginBottom {
    margin-bottom: 9em;
}

#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}

// .animated {
  // animation-delay: .8s;
  // opacity: 0;
// }

.hidden {
  visibility: hidden;
  // opacity: 0;
}

hr.divider {
    border: 0;
    height: 1px;
    margin-bottom: 1em;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.training-section-image {
  box-shadow: 0px 0px 19px 3px rgba(163,163,163,1);
  margin: 2em 0em 2em 0em;
}

</style>
