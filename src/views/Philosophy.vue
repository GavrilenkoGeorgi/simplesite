<template>
  <v-layout pa-0 justify-center>
    <v-flex xs12 sm10 md8>
      <v-layout column>
        <v-flex py-2 d-flex align-center>
          <h1>{{ pageTitle }}</h1>
        </v-flex>
        <v-flex d-flex justify-center>
          <v-img :src="require('@/assets/img/about.jpg')" contain max-width="500"></v-img>
        </v-flex>
        <v-flex>
          <p v-html="textMain" class="simple-text-block mt-3">
          </p>
        </v-flex>
        <hr class="divider my-3" />
        <v-flex v-html="textLongDescr">
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Philosophy',
  data () {
    return {
      pageTitle: `Наша философия`,
      textMain: `Добро пожаловать на наш сайт дрессировки собак.
                Мы всегда рады помочь и проконсультировать вас в
                решении сложившейся ситуации. Если вы новичок или
                не знаете как решить какую-то конкретную ситуацию
                проблемного поведения вашей собаки, то мы всегда вам
                поможем подобрать наиболее эффективные, альтернативные
                и не конфликтные способы обучения щенка и переобучения
                собак возрастом до 8 лет.`,
      textLongDescr: `<p class="simple-text-block mt-3">
                        В процессе дрессировки вы не только научите собаку базовому послушанию, вы достигнете взаимопонимания с собакой.
                      </p>
                      <p class="simple-text-block">
                        С нами вы воспитаете контактную, смелую, верную, надежную, послушную, спортивную и имеющую желание взаимодействовать
                        с вами собаку, которые имеют правильную картину системы ценностей и приоритетов, получая удовольствие от совместной
                        работы с владельцем.</p>
                      <p class="simple-text-block">
                        Только при <strong>правильном обучении</strong> вы можете быть уверены, что повзрослев, собака не станет выступать
                        против интересов семьи, а наоборот будет демонстрировать приемлемое для вашей семьи поведение и вдохновлять на большее…
                        От природы собака способна распознавать что именно работает на сохранение её вида, а что нет.
                        Работает – значит приносит удовольствие и пользу, не работает – значит приводит к неприятным ситуациям и не дает
                        желаемого результата.</p>
                      <p class="simple-text-block">
                        Мы должны понимать, что движет собакой и как с ней гармонично взаимодействовать, также нельзя забывать что собаки
                        ассоциируют свои действия с немедленными последствиями, потому наша с вами цель в <strong>процессе обучения</strong>
                        создать все условия, что бы собака была замотивирована и имела желание повторять, то поведение, которое вознаграждается
                        и выполняла предложенные задачи снова и снова, тем самым формируя комфортную для вас поведенческую модель.
                        Важно чтобы собака получала больше удовольствия от работы с вами, чем от простой беготни и игр с другими собаками.
                        Мы основываемся на <strong>бесконфликтной системе дрессировки</strong>. Эффективной методике оперантного обучения,
                        задействуем природные инстинкты собаки и ее инициативу, подкрепляя правильное поведение наградой.
                        Выполняя упражнение собака получает желаемое.
                        Таким образом с каждой тренировкой мы с вами получаем максимальный результат, а собаки удовольствие и так называемую
                        «зарплату» за проделанную работу.</p>
                      <p class="simple-text-block">
                        Культивированным стереотипом является мнение что собак нужно обучать с четырёх, шести месяцев и даже с одного года,
                        по нашему мнению это не совсем так. Мы начинаем тренироваться со щенками в два с половиной &mdash; три месяца и
                        придерживаемся мнения, что обучение начинается с первого дня присутствия собаки в доме и выражается оно в элементарных
                        действиях, которые мы предоставляем в виде игры, к примеру &mdash; когда мы подзываем щенка по кличке, которая для него
                        еще не знакома, давая в замен желаемое, проявляя ласку и теплое отношение, щенок конечно же радостно отвечает взаимностью,
                        бежит и облизывает вам все лицо. В ближайшие недели этот щенок будет самовыражаться через положительно подкрепленное вами
                        поведение и довольно скоро будет готов научиться чему-то новому, например, таким командам, как: <strong>«ко мне», «сидеть», «лежать»,
                        «стоять».</strong> Которые в перспективе через некоторое время будут прогрессировать в более сложные элементы:
                        <strong> «Ждать», «Рядом», «Охранять», «Нет», «На место», «Апорт».</strong></p>
                      <p class="simple-text-block">
                        Таким образом ваш пес обучается позитивно, прогрессивно и что самое главное с желанием!
                        Также мы должны согласится что, если не занимать щенка с детства, то его весь потенциал уходит, например, на такие занятия
                        как подбирание пищи, погони за велосипедистами, котами, погрызенная обувь, мебель и прочие «радости».
                        Удовлетворяя свои потребности на стороне молодой щенок все пробует «на зуб» и становится независимым от вас… А в перспективе
                        данный приобретенный опыт будет только развиваться и становиться стилем жизни и самовыражением у подрастающего щенка.
                        Следует с самого начала сформировать у щенка те <strong>привычки и поведение</strong>, которое вы хотите видеть у взрослой
                        собаки и в этом мы вам готовы помочь!</p>
                      <p class="simple-text-block">
                        <strong>Мы подберем вашей собаке наилучший тип обучения,</strong> ведь, собаки, подобны нам с вами, имеют собственную индивидуальность.
                        С нами вы получите как минимум собаку &mdash; компаньона, а при желании воспользовавшись нашими услугами, помимо базового
                        послушания, вы можете развить дополнительно собаку в поисковой, охранной, спортивной, защитной, трюковой работе.
                        Мы всегда учтем ваши пожелания и рассмотрим индивидуальные предпочтения, таким образом мы готовы воплотить в реальность
                        собаку вашей мечты, которая идеально впишется под ваш ритм жизни.
                      </p>`
    }
  }
}
</script>
