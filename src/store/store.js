import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
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
        lessonsHeader: `Первое занятие — 50%`
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
        { title: 'Товары', path: '/merch', icon: 'shopping_cart' },
        { title: 'Контакты', path: '/contacts', icon: 'place' }
      ]
    },
    prices: {
      serviceItems: [{
        header: `Собаки: полный комплекс`,
        services: [
          { serviceDescr: `Мелкие`, price: `300—350` },
          { serviceDescr: `Средние`, price: `400—500` },
          { serviceDescr: `Крупные`, price: `600—750` },
          { serviceDescr: `Гиганты`, price: `900—1000 ` }
        ]
      },
      {
        header: `Экспресс линька`,
        services: [
          { serviceDescr: `Мелкие`, price: `400—450 ` },
          { serviceDescr: `Средние`, price: `550—600 ` },
          { serviceDescr: `Крупные`, price: `700—750 ` },
          { serviceDescr: `Гиганты`, price: `1050—1150 ` },
          { serviceDescr: `Кошки`, price: `450—550 ` }
        ]
      },
      {
        header: `Груминг коты`,
        services: [
          { serviceDescr: `Стрижка / вычёсывание, купание, стрижка когтей, чистка ушей`, price: `400—450 ` }
        ]
      },
      {
        header: `Породы до 10 кг`,
        services: [
          { serviceDescr: `Бишон фризе`, price: `550—600` },
          { serviceDescr: `Болонка мальтийская/цветная`, price: `400—450` },
          { serviceDescr: `Джек Рассел терьер (г/ш)`, price: `300—350` },
          { serviceDescr: `Йоркширский терьер/Бивер йорк`, price: `400—450` },
          { serviceDescr: `Китайская хохлатая пуховка`, price: `400—450` },
          { serviceDescr: `Пекинес`, price: `400—450` },
          { serviceDescr: `Пудель той`, price: `450—500` },
          { serviceDescr: `Пудель карликовый`, price: `550—600` },
          { serviceDescr: `Чихуа-хуа длинношерстная`, price: `300—400` },
          { serviceDescr: `Ши-тцу`, price: ` 450—500` },
          { serviceDescr: `Шпиц`, price: ` 450—500` }
        ]
      },
      {
        header: `Породы до 15 кг`,
        services: [
          { serviceDescr: `Американский кокер спаниель`, price: `600—650` },
          { serviceDescr: `Английский кокер спаниель`, price: `600—650` },
          { serviceDescr: `Русский спаниель`, price: `550—600` }
        ]
      },
      {
        header: `Породы свыше 15 кг`,
        services: [
          { serviceDescr: `Бернский зенненхунд`, price: `1100—1300` },
          { serviceDescr: `Голден ретривер`, price: `700—800` },
          { serviceDescr: `Самоедская лайка`, price: `900—1000` },
          { serviceDescr: `Сеттеры`, price: `1000—1100` }
        ]
      },
      {
        header: `Триммингующиеся породы`,
        services: [
          { serviceDescr: `Брюссельский / бельгийский грифон`, price: `550—600` },
          { serviceDescr: `Вельш-терьер`, price: `550—600` },
          { serviceDescr: `Вест-хайланд-вайт-терьер`, price: `600—650` },
          { serviceDescr: `Джек Рассел терьер (брокен)`, price: `500—550` },
          { serviceDescr: `Миттельшнауцер`, price: `650—700` },
          { serviceDescr: `Скотч терьер`, price: `600—650` },
          { serviceDescr: `Такса жесткошерстная`, price: `500—550` },
          { serviceDescr: `Фокстерьер`, price: `550—600` },
          { serviceDescr: `Цверкшнауцер`, price: `600—650` },
          { serviceDescr: `Эрдельтерьер`, price: `800—850` }
        ]
      },
      {
        header: `Дополнительная стоимость`,
        services: [
          { serviceDescr: `За агрессивность животного`, price: `+15—20%` },
          { serviceDescr: `За запущенность животного`, price: `+15—20%` },
          { serviceDescr: `Выставочная подготовка`, price: `+100—300` },
          { serviceDescr: `Приучение щенка к грумингу`, price: `+150` }
        ]
      }
      ]
    },
    trainingTypeLinks: {
      links: [
        { text: `Помощь и консультации`, path: `/`, image: 'SAA_3738_1024x678.jpg', name: 'help' },
        { text: `Защита`, path: `/`, image: 'SAA_3567_1024x678.jpg', name: 'protection' },
        { text: `Социализация`, path: `/`, image: 'SAA_3731_1024x678.jpg', name: 'socialisation' },
        { text: `Трюковая дрессировка`, path: `/`, image: 'SAA_3471_678x1024.jpg', name: 'tricks' },
        { text: `Послушание`, path: `/`, image: 'SAA_3353_678x1024.jpg', name: 'obedience' }
      ]
    }
  }
}
// initial state
const state = getDefaultState()
export default new Vuex.Store({
  state,
  getters
})
