import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    content: {
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
        text: 'MaxDog'
      },
      navLinks: [
        { title: 'Груминг', path: '/grooming', icon: 'waves' },
        { title: 'Галерея', path: '/gallery', icon: 'insert_photo' },
        // { title: 'Отзывы', path: '/', icon: 'speaker_notes' },
        { title: 'Оставить заявку', path: '/consultform', icon: 'contact_mail' },
        { title: 'Наша философия', path: '/philosophy', icon: 'format_quote' },
        { title: 'О нас', path: '/about', icon: 'supervisor_account' }
      ]
    },
    prices: {
      serviceItems: [{
        header: `Собаки: полный комплекс`,
        services: [
          { serviceDescr: `Мелкие`, price: `300-350 грн` },
          { serviceDescr: `Средние`, price: `400-500 грн` },
          { serviceDescr: `Крупные`, price: `600-750 грн` },
          { serviceDescr: `Гиганты`, price: `900-1000 грн` }
        ]
      },
      {
        header: `Экспресс линька`,
        services: [
          { serviceDescr: `Мелкие`, price: `400-450 грн` },
          { serviceDescr: `Средние`, price: `550-600 грн` },
          { serviceDescr: `Крупные`, price: `700-750 грн` },
          { serviceDescr: `Гиганты`, price: `1050-1150 грн` },
          { serviceDescr: `Кошки`, price: `450-550 грн` }
        ]
      },
      {
        header: `Груминг коты`,
        services: [
          { serviceDescr: `Стрижка / вычёсывание, купание, стрижка когтей, чистка ушей`, price: `400-450 грн` }
        ]
      },
      {
        header: `Породы до 10 кг`,
        services: [
          { serviceDescr: `Бишон фризе`, price: `550-600 грн` },
          { serviceDescr: `Болонка мальтийская/цветная`, price: `400-450 грн` },
          { serviceDescr: `Джек Рассел терьер (г/ш)`, price: `300-350 грн` },
          { serviceDescr: `Йоркширский терьер/Бивер йорк`, price: `400-450 грн` },
          { serviceDescr: `Китайская хохлатая пуховка`, price: `400-450 грн` },
          { serviceDescr: `Пекинес`, price: `400-450 грн` },
          { serviceDescr: `Пудель той`, price: `450-500 грн` },
          { serviceDescr: `Пудель карликовый`, price: `550-600 грн` },
          { serviceDescr: `Чихуа-хуа длинношерстная`, price: `300-400 грн` },
          { serviceDescr: `Ши-тцу`, price: ` 450-500 грн` },
          { serviceDescr: `Шпиц`, price: ` 450-500 грн` }
        ]
      },
      {
        header: `Породы до 15 кг`,
        services: [
          { serviceDescr: `Американский кокер спаниель`, price: `600-650 грн` },
          { serviceDescr: `Английский кокер спаниель`, price: `600-650 грн` },
          { serviceDescr: `Русский спаниель`, price: `550-600 грн` }
        ]
      },
      {
        header: `Породы свыше 15 кг`,
        services: [
          { serviceDescr: `Бернский зенненхунд`, price: `600-650 грн` },
          { serviceDescr: `Голден ретривер`, price: `600-650 грн` },
          { serviceDescr: `Самоедская лайка`, price: `900-1000 грн` },
          { serviceDescr: `Сеттеры`, price: `1000-1100 грн` }
        ]
      },
      {
        header: `Триммингующиеся породы`,
        services: [
          { serviceDescr: `Брюссельский / бельгийский грифон`, price: `550-600 грн` },
          { serviceDescr: `Вельш-терьер`, price: `550-600 грн` },
          { serviceDescr: `Вест-хайланд-вайт-терьер`, price: `600-650 грн` },
          { serviceDescr: `Джек Рассел терьер (брокен)`, price: `500-550 грн` },
          { serviceDescr: `Миттельшнауцер`, price: `650-700 грн` },
          { serviceDescr: `Скотч терьер`, price: `600-650 грн` },
          { serviceDescr: `Такса жесткошерстная`, price: `500-550 грн` },
          { serviceDescr: `Фокстерьер`, price: `550-600 грн` },
          { serviceDescr: `Цверкшнауцер`, price: `600-650 грн` },
          { serviceDescr: `Эрдельтерьер`, price: `800-850 грн` }
        ]
      },
      {
        header: `Дополнительная стоимость`,
        services: [
          { serviceDescr: `* За агрессивность животного`, price: `+ 15-20%` },
          { serviceDescr: `* За запущенность животного`, price: `+ 15-20%` },
          { serviceDescr: `* Выставочная подготовка`, price: `+ 100-300 грн` },
          { serviceDescr: `* Приучение щенка к грумингу`, price: `+ 150 грн` }
        ]
      }
      ]
    }
  }
}
// { serviceDescr: ``, price: ` грн` },
// initial state
const state = getDefaultState()

const getters = {
  getContent: function (state) {
    return state.content
  },
  getPrices: function (state) {
    return state.prices
  }
}

export default new Vuex.Store({
  state,
  getters
})
