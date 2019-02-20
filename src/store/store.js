import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    userState: {
      isAuthenticated: false,
      uid: null
    },
    itemsWhichOrderHasChanged: [],
    allPrices: [],
    priceItemsCollectionsToLoad: [
      { collectionName: 'trainingPrices', humanReadableTitle: 'Дрессировка' },
      { collectionName: 'services', humanReadableTitle: 'Груминг' }
    ],
    reviewsForEditing: [],
    content: {
      mainPageText: {
        groupTraining: {
          header: `Групповые занятия`,
          text: `На групповых занятиях дважды в неделю вы получаете практический
            и теоретический инструктаж как проводить воспитание и дрессировку поэтапно далее в домашних
            условиях.
            Мы постараемся ответить на все ваши вопросы. Вы, ежедневно в быту, закрепляете со
            щенком домашнее задание — полученную на занятиях базу знаний и навыков.
            При этом варианте обучения требуется несколько больше времени, но терпение и труд обернутся
            — хорошим выполнением всех необходимых базовых команд. Вы получите послушную,
            социализированную, контактную собаку.`
        },
        individualTraining: {
          header: `Индивидуальные занятия`,
          text: `При индивидуальных занятиях мы тренируем собаку тет-а-тет с вами или
            самостоятельно там, где, когда и во сколько вам удобно. Тренировка ориентирована на потребности
            сугубо вашей собаки и соответственно обучение дает максимальный результат в сжатые сроки.`
        },
        lessonsHeader: `Первое занятие — скидка 50%`
      },
      groomingText: {
        paragraphValue: `Здравствуй, дорогой друг, меня зовут Людмила!
        «Hairstyle animals» — Ты здесь, а это значит что провел свои пару минут не просто посетив сайт,
        а нашел именно того грумера которого так долго искал, грумера-стилиста, создающего не просто
        стандартный образ, а тот образ который подчеркивает все преимущества животного, скрывая недостатки, придавая шарм
        и новизну, учитывая здоровье животного, так как имеем высшее ветеринарное образование!
        Мы не стоим на месте, повышаем свою квалификацию на всевозможных конкурсах и мастер классах.
        Стремимся к тому, чтобы приучить не только животное к грумингу, а и его хозяина к своевременному посещению грумера.
        Так как это залог здоровья, красоты, послушания животного!
        Груминг и кинология взаимосвязаные сферы. Как вы приучите своё животное к грумингу с детства, так и дальше будет оно
        себя вести.`,
        photoOverlayText: `Груминг собак и котов`
      },
      logo: {
        text: 'maxdog',
        lowerText: 'дрессировка собак'
      },
      navLinks: [
        { title: 'Груминг', path: '/grooming', icon: 'waves' },
        { title: 'Прайс', path: '/price', icon: 'receipt' },
        { title: 'Галерея', path: '/gallery', icon: 'photo_library' },
        { title: 'Наша философия', path: '/philosophy', icon: 'format_quote' },
        { title: 'Отзывы', path: '/reviews', icon: 'chat_bubble_outline' },
        // { title: 'Товары', path: '/merch', icon: 'shopping_cart' },
        { title: 'Контакты', path: '/contacts', icon: 'place' },
        { title: 'Логін', path: '/login', icon: 'exit_to_app' }
      ]
    },
    merchDescr: [
      { title: 'Описание товара', longDescr: 'Описание которое нужно будет придумать после того, как эти товары появятся...', imgPath: require('@/assets/img/merch/bowls.webp') },
      { title: 'Корзина', longDescr: 'Описание которое нужно будет придумать после того, как эти товары появятся...', imgPath: require('@/assets/img/merch/cat-basket.webp') },
      { title: 'Dog Pod', longDescr: 'Описание которое нужно будет придумать после того, как эти товары появятся...', imgPath: require('@/assets/img/merch/dog-pod.webp') },
      { title: 'Ошейник один', longDescr: 'Описание которое нужно будет придумать после того, как эти товары появятся...', imgPath: require('@/assets/img/merch/collar-one.webp') },
      { title: 'Ошейник номер два', longDescr: 'Описание которое нужно будет придумать после того, как эти товары появятся...', imgPath: require('@/assets/img/merch/collar-two.webp') }
    ],
    trainingTypeLinks: {
      links: [
        { text: `Помощь и консультации`, path: `/`, image: 'SAA_3738_1024x678.jpg', name: 'help' },
        { text: `Защита`, path: `/`, image: 'protection.jpg', name: 'protection' },
        { text: `Социализация`, path: `/`, image: 'socialization.jpg', name: 'socialisation' },
        { text: `Трюковая дрессировка`, path: `/`, image: 'tricks.jpg', name: 'tricks' },
        { text: `Послушание`, path: `/`, image: 'obedience.jpg', name: 'obedience' }
      ]
    }
  }
}
// initial state
const state = getDefaultState()
export default new Vuex.Store({
  state,
  getters,
  mutations
})
