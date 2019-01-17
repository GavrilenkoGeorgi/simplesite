<template>
  <v-container pa-0>
    <v-layout wrap justify-center>
<!-- Header -->
      <v-flex xs12>
        <h1>{{ header }}</h1>
      </v-flex>
<!-- Expansion panel -->
      <v-flex xs11>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(item,i) in 1"
            :key="i">
            <div slot="header">
              Ціни
            </div>
            <v-card>
              <!--v-card-text>Тут можна редагувати ціни</v-card-text-->
                  <v-flex xs12 v-for="doc in serviceItemsFromDB" :key="doc.id">
                    <v-layout wrap>
                      <v-flex xs12>
                        {{ doc.header }}
                      </v-flex>
                      <v-flex py-1 pl-2 xs12 v-for="(priceValue, index) in doc.services" :key="index">
                        <v-btn icon small fab @click="editPrice(priceValue, index, doc.id)">
                          <v-icon small color="purple">create</v-icon>
                        </v-btn>
                        <v-btn icon small fab>
                          <v-icon small color="purple">delete</v-icon>
                        </v-btn>
                        {{ priceValue }}
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap>

                      <v-flex xs12 sm6>
                        <v-text-field
                          v-if="buffer"
                          v-model="buffer.priceValue"
                          clearable
                          @click:append="saveData"
                          append-icon='done'
                          label="Edit here"
                          solo
                        ></v-text-field>
                      </v-flex>

                    </v-layout>
                  </v-flex>
                   <!-- Header -->
                  <!--v-flex v-for="(item, index) in getPrices"
                    :key="index"
                    :data-product-id="item.id">
                    {{ item.header }}
                    <v-flex v-for="(service, index) in item.services" :key="index" px-2 py-1 @click.prevent="editPrice(service, index, item.id)">
                      <v-flex d-flex pl-2 class="subheading" align-center>
                        {{ service }}
                        <v-btn flat small icon>
                          <v-icon>done</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-flex>
                  </v-flex-->
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import db from '@/components/firebaseInit'

export default {
  data: () => ({
    header: 'Редагувати',
    buffer: null,
    serviceItemsRef: db.collection('serviceItems'),
    serviceItemsFromDB: []
  }),
  mounted () {
    this.$nextTick(function () {
      console.log(`Kind of cms mounted.`)
      this.loadPrices()
    })
  },
  computed: {
    ...mapGetters([
      'getPrices'
    ])
  },
  methods: {
    saveData () {
      console.log('Saving data.')
      // console.dir(this.buffer)
      if (this.buffer) { // better check what you are sending
        // console.log(`Saving to db type of this.serviceItemsFromDb is ${this.serviceItemsFromDB[0].services}.`)
        let itemToUpdate = this.serviceItemsFromDB.find(serviceItem => serviceItem.id === this.buffer.docID)
        console.log(`Item to update is ${itemToUpdate.services[this.buffer.index]}`)
        // const updateRef = db.collection('serviceItems').doc(this.buffer.docID)
        // console.dir(this.serviceItemsFromDB)
        // let dataToSave = this.serviceItemsFromDB
        // this.serviceItemsFromDB.services[this.buffer.index] = this.buffer.priceValue
        console.log(`Data to save is ${this.buffer.priceValue}`)
        itemToUpdate.services[this.buffer.index] = this.buffer.priceValue
        console.log(`Item after update is ${itemToUpdate.services[this.buffer.index]}`)
        this.$store.commit('updatePrices', itemToUpdate, this.buffer.docID)
      } else {
        console.log(`Nothing to update`)
      }
    },
    editPrice (priceValue, index, docID) {
      console.log(`Editing price with index ${index} and id ${docID}`)
      console.dir(priceValue)
      this.buffer = {
        priceValue: priceValue,
        index: index,
        docID: docID
      }
      console.log(`Id in buffer supposed to be ${this.buffer.docID}`)
      // this.$store.commit('setUserState', user)
      // console.log(event)
      // let newProp = this.$parent.$el.dataset.productId
      // console.log(`Editing price ${event.target.value}`)
      // console.log(`Id is ${event.target}`)
      // let data = event.target.$parent.$el.dataset.productId
      /*
      const services = []

      const price = {
        header: 'Собаки: полный комплекс',
        services: services
      }
      prices.push(price)
      this.$store.commit('setPrices', prices) */
    },
    loadPrices () {
      console.log('Loading prices..')
      // db.collection('serviceItems') // .where('starsRating', '==', 5)
      this.serviceItemsRef.get()
        .then(querySnapshot => {
          // let serviceItemsFromDB = []
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            /*
            console.log(doc.id, ' => ', doc.data().name)
            let serviceItem = {
              header: doc.data().header,
              services: doc.data().services,
              id: doc.id
            } */
            this.serviceItemsFromDB.push({
              header: doc.data().header,
              services: doc.data().services,
              id: doc.id
            })
          })
          // console.log(this.serviceItemsFromDB)
          return true
        })
        .then(() => {
          // this.allServiceItems = serviceItemsFromDB
          // console.log(this.allServiceItems)
          this.$store.commit('setPrices', this.serviceItemsFromDB)
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    }
  }
}
</script>
