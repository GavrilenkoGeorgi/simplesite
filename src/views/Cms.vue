<template>
<!-- Price editor -->
  <v-container pa-0>
    <v-layout wrap justify-center>
<!-- Header -->
      <v-flex xs12>
        <h1>{{ header }}</h1>
      </v-flex>
<!-- Expansion panel -->
      <v-flex xs12>
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
                      <v-flex xs12 class="text-xs-center">
                        <h4>{{ doc.header }}</h4>
                      </v-flex>
                      <v-flex xs12 v-for="(priceValue, index) in doc.services" :key="index">
                        <v-layout row align-center>
                          <v-flex class="text-xs-right">
                            <v-btn icon small fab @click="editPrice(priceValue, index, doc.id, doc.header)">
                              <v-icon small color="purple">create</v-icon>
                            </v-btn>
                          </v-flex>
                          <v-flex xs9>
                            {{ priceValue }}
                          </v-flex>
                          <v-flex xs2>
                            <v-btn icon small fab @click="handlePriceDelete(doc.id, priceValue)">
                              <v-icon small color="purple">delete</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap>

                      <!--v-flex xs12 sm6>
                        <v-text-field
                          v-if="buffer"
                          v-model="buffer.priceValue"
                          clearable
                          @click:append="saveData"
                          append-icon='done'
                          label="Edit here"
                          solo
                        ></v-text-field>
                      </v-flex-->

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
<!-- Edit dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500">
          <!--v-btn
            slot="activator"
            color="red lighten-2"
            dark>
            Click Me
          </v-btn-->

          <v-card>
            <v-card-title
              class="grey lighten-2">
              <h4 class="blue-grey--text">{{ buffer.docHeader }}</h4>
            </v-card-title>

            <v-card-text>
              <v-form ref="priceEditingForm" v-model="priceEditingFormValid">
                <v-text-field
                  v-model="buffer.priceValue"
                  :rules="priceStringRules"
                  type='text'
                  autocomplete='off'
                  required
                  append-icon='create'
                  :label="buffer.valueForLabel">
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                color="purple"
                flat
                @click="saveData">
                зберегти
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="grey"
                flat
                @click="dialog = false">
                скасувати
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
<!-- Delete warning dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="deleteWarningDialog"
          persistent
          lazy
          width="500">

          <v-card>
            <v-card-title
              class="red lighten-3">
              <h3 class="white--text">Увага</h3>
            </v-card-title>

            <v-card-text class="text-xs-left">
              Дійсно видалити цю позицію? <br />
              <span class="orange--text">{{ buffer.priceValue }}</span>
              <!--v-text-field
                v-model="buffer.priceValue"
                @click:append="saveData"
                append-icon='done'
                :label="buffer.valueForLabel">
              </v-text-field-->
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                flat
                outline
                @click="handlePriceDelete()">
                видалити
              </v-btn>
              <v-btn
                color="primary"
                flat
                outline
                @click="toggleSafeCheck">
                скасувати
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    buffer: {
      docHeader: '',
      priceValue: '',
      valueForLabel: '',
      index: null,
      docID: null
    },
    priceEditingFormValid: false,
    priceStringRules: [
      v => !!v || 'Необхідно ввести назву та ціну',
      v => (v && v.length <= 60) || 'Позиція повинна бути менше 60 символів'
    ],
    dialog: false,
    deleteWarningDialog: false,
    safeToDelete: false,
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
    handlePriceDelete (docID, priceValue) {
      if (this.safeToDelete) {
        console.log(`All set, deleting from store.`)
        // console.log(`Deleting price item with id ${this.buffer.docID}`)
        this.deletePriceFromStore().then(() => {
          console.log(`Syncing with db..`)
        })
          .catch(function (error) {
            console.log(`Error is ${error}`)
          })
        this.toggleSafeCheck()
        // this.deleteWarningDialog = !this.deleteWarningDialog
      } else {
        console.log(`Check if is it safe with id ${docID}`)
        this.deleteWarningDialog = !this.deleteWarningDialog
        this.buffer.priceValue = priceValue
        this.buffer.docID = docID
        this.toggleSafeCheck()
        this.deleteWarningDialog = true
        return true
      }
    },
    toggleSafeCheck () {
      this.safeToDelete = !this.safeToDelete
      this.deleteWarningDialog = !this.deleteWarningDialog
    },
    deletePriceFromStore () {
      return new Promise(resolve => {
        console.log(`Deleting price from store ${this.buffer.priceValue}`)
        let payload = {
          id: this.buffer.docID,
          priceValue: this.buffer.priceValue
        }
        this.$store.commit('deletePrice', payload)
        resolve()
        // this.deleteWarningDialog = !this.deleteWarningDialog
      })
    },
    saveData () {
      console.log('Saving data.')
      // console.dir(this.buffer)
      if (this.priceEditingFormValid) { // better check what you are sending
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
        // this.$store.commit('updatePrices', itemToUpdate, this.buffer.docID)
        this.dialog = !this.dialog
      } else {
        console.log(`Nothing to update`)
      }
    },
    editPrice (priceValue, index, docID, docHeader) {
      console.log(`Editing price with index ${index} and id ${docID}`)
      this.dialog = !this.dialog
      console.dir(priceValue)
      this.buffer = {
        docHeader: docHeader,
        priceValue: priceValue,
        valueForLabel: priceValue,
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
