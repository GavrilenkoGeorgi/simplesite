<template>
<!-- Price editor -->
  <v-container fill-height fluid pa-0 v-if="this.getUserState.isAuthenticated">
    <v-layout row wrap justify-center>
<!-- Header -->
      <v-flex d-flex align-center>
        <h1>{{ header }}</h1>
      </v-flex>
<!-- Expansion panel -->
      <v-flex xs12 sm6 offset-sm3>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">
              Ціни
            </div>
            <v-card>
              <v-card-text>Тут можна редагувати ціни</v-card-text>
                  <v-flex xs12 v-for="doc in getPrices" :key="doc.id">
                    <v-layout wrap>
                      <v-flex xs12 class="text-xs-center">
                        <v-layout>
                          <v-flex xs7 d-flex align-center>
                            <h4 class="orange--text">{{ doc.header }}</h4>
                          </v-flex>
                          <v-flex xs5>
<!-- Up, down and delete service item buttons -->
                            <v-btn icon small @click="moveItem(doc.id, 'up')"><v-icon color="blue darken-1">arrow_upward</v-icon></v-btn>
                            <v-btn icon small @click="moveItem(doc.id, 'down')"><v-icon color="blue darken-1">arrow_downward</v-icon></v-btn>
                            <v-btn icon small @click="handleDeleteServiceItem(doc.id, doc.header)"><v-icon color="blue darken-1">delete</v-icon></v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 v-for="(priceValue, index) in doc.services" :key="index">
                        <v-layout row align-center>
                          <v-flex class="text-xs-right">
                            <v-btn icon small fab @click="editPrice(priceValue, index, doc.id, doc.header)">
                              <v-icon small color="blue darken-1">create</v-icon>
                            </v-btn>
                          </v-flex>
                          <v-flex xs9>
                            {{ priceValue }}
                          </v-flex>
                          <v-flex xs2>
                            <v-btn icon small fab @click="handlePriceDelete(doc.id, priceValue)">
                              <v-icon small color="red">delete</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 class="text-xs-right">
                        <v-btn icon small fab @click="handleAddServiceItem(doc.id, doc.header)">
                          <v-icon medium color="orange">add</v-icon>
                        </v-btn>
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
                  <v-layout>
                      <v-flex align-center d-flex>
                        <v-btn color="blue-grey lighten-4" @click="handleAddCategory">додати категорію</v-btn>
                      </v-flex>
                    </v-layout>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">
              Коментарі
            </div>
            <v-card>
              <v-card-text>Видаляти або затверджувати коментарі</v-card-text>
                <v-flex v-for="doc in getReviews" :key="doc.id" pa-3>
                  <v-layout wrap>
                    <v-flex xs6 py-1>
                      Ім'я: {{ doc.name }}
                      <v-icon v-if="doc.approved" small color="orange">verified_user</v-icon>
                    </v-flex>
                    <v-flex xs6 class="text-xs-right">
                      <v-icon small color="orange" v-for="(star,i) in doc.starsRating" :key="i">grade</v-icon>
                    </v-flex>
                    <v-flex xs12>
                      Коментар: {{ doc.review }}
                    </v-flex>
                    <v-flex xs12 class="text-xs-right">
                      <v-btn small icon fab>
                        <v-icon v-if="!doc.approved" medium color="green">verified_user</v-icon>
                      </v-btn>
                      <v-btn small icon fab>
                        <v-icon medium color="red">delete</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
<!-- Edit dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="editPriceDialog"
          width="500">
          <!--v-btn
            slot="activator"
            color="red lighten-2"
            dark>
            Click Me
          </v-btn-->

          <v-card>
            <v-card-title
              class="blue darken-1">
              <h4 class="white--text">{{ buffer.docHeader }}</h4>
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
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                outline
                flat
                @click="saveEdit">
                зберегти
              </v-btn>
              <v-btn
                color="grey"
                outline
                flat
                @click="editPriceDialog = false">
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
              class="red accent-4">
              <h3 class="white--text">Увага</h3>
            </v-card-title>

            <v-card-text class="text-xs-left">
              Дійсно видалити цю позицію? <br />
              <span class="orange--text">{{ buffer.priceValue }}</span>
              <!--v-text-field
                v-model="buffer.priceValue"
                @click:append="saveEdit"
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
                @click="handlePriceDelete">
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
<!-- Add category dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="addCategoryDialog"
          width="500">
          <!--v-btn
            slot="activator"
            color="red lighten-2"
            dark>
            Click Me
          </v-btn-->

          <v-card>
            <v-card-title
              class="blue darken-1">
              <h3 class="white--text">Додати категорію</h3>
            </v-card-title>

            <v-card-text>
              <v-form ref="addCategoryDialogForm" v-model="addCategoryFormValid">
                <v-text-field
                  v-model="buffer.header"
                  :rules="headerRules"
                  type='text'
                  autocomplete='off'
                  required
                  append-icon='create'
                  label='Назва'>
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                outline
                flat
                @click="addCategoryToDb">
                додати
              </v-btn>
              <v-btn
                color="grey"
                outline
                flat
                @click="addCategoryDialog = false">
                скасувати
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
<!-- Add price item dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="addServiceItemDialog"
          width="500">
          <!--v-btn
            slot="activator"
            color="red lighten-2"
            dark>
            Click Me
          </v-btn-->

          <v-card>
            <v-card-title
              class="blue darken-1">
              <h4 class="white--text">Додати позицію в прайс</h4>
            </v-card-title>

            <v-card-text>
              <v-form ref="addServiceItemDialogForm" v-model="addServiceItemFormValid">
                <v-text-field
                  v-model="buffer.priceValue"
                  :rules="serviceItemRules"
                  type='text'
                  autocomplete='off'
                  required
                  append-icon='create'
                  label='Назва позіції'>
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                outline
                flat
                @click="addServiceItemToDb">
                додаті
              </v-btn>
              <v-btn
                color="grey"
                outline
                flat
                @click="addServiceItemDialog = false">
                скасувати
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
<!-- Delete service item dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="deleteServiceItemDialog"
          width="500">
          <!--v-btn
            slot="activator"
            color="red lighten-2"
            dark>
            Click Me
          </v-btn-->

          <v-card>
            <v-card-title
              class="red accent-4">
              <h3 class="white--text">Видалити категорію</h3>
            </v-card-title>

            <v-card-text class="text-xs-left">
              Дійсно видалити цю позицію? <br />
              <span class="orange--text">{{ this.buffer.docHeader }}</span>
              <!--v-form ref="deleteServiceItemDialogForm" v-model="deleteServiceItemFormValid">
                <v-text-field
                  v-model="buffer.header"
                  :rules="serviceItemRules"
                  type='text'
                  autocomplete='off'
                  required
                  append-icon='create'
                  label='Назва позіції'>
                </v-text-field>
              </v-form-->
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                outline
                flat
                @click="handleDeleteServiceItem">
                видалити
              </v-btn>
              <v-btn
                color="primary"
                outline
                flat
                @click="deleteServiceItemDialog = false, safeToDelete = false">
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
import firebase from 'firebase/app'
// import * as firebase from 'firebase'
import db from '@/components/firebaseInit'

export default {
  data: () => ({
    header: 'Редагувати',
    buffer: {
      docHeader: '',
      priceValue: '',
      valueForLabel: '',
      header: '',
      index: null,
      docID: null,
      currentServiceItemOrder: null
    },
    editingChoices: [
      { choiceName: 'Ціни' },
      { choiceName: 'Коментарі' }
    ],
    priceEditingFormValid: false,
    priceStringRules: [
      v => !!v || 'Необхідно ввести назву та ціну',
      v => (v && v.length <= 70) || 'Позиція повинна бути менше 70 символів'
    ],
    headerRules: [
      v => !!v || 'Необхідно ввести назву',
      v => (v && v.length <= 30) || 'Назва повинна бути менше 30 символів'
    ],
    serviceItemRules: [
      v => !!v || 'Необхідно ввести назву',
      v => (v && v.length <= 70) || 'Назва повинна бути менше 70 символів'
    ],
    editPriceDialog: false,
    addServiceItemDialog: false,
    addServiceItemFormValid: false,
    deleteServiceItemFormValid: false,
    deleteServiceItemDialog: false,
    deleteWarningDialog: false,
    addCategoryDialog: false,
    addCategoryFormValid: false,
    safeToDelete: false,
    serviceItemsRef: db.collection('serviceItems'),
    reviewsItemsRef: db.collection('reviews'),
    serviceItemsFromDB: [],
    serviceItemsDisplayOrder: [],
    reviewsItemsFromDB: []
  }),
  mounted () {
    this.$nextTick(function () {
      console.log(`Kind of cms mounted.`)
      if (this.getUserState.isAuthenticated) {
        console.log(`Loading prices`)
        this.loadPrices()
        this.loadReviews()
      } else {
        console.log(`Login first or GTFO`)
      }
    })
  },
  computed: {
    ...mapGetters([
      'getPrices',
      'getReviews',
      'getUserState',
      'getItemsWhichOrderHasChanged'
    ])
  },
  methods: {
    changeServiceItemOrder () {
      console.log(`Changing order`)
    },
    moveItem (id, direction) {
      console.log(`Moving item with id ${id} up.`)
      // get current order from state
      let payload = {
        id: id,
        direction: direction
      }
      this.$store.commit('changePriceItemsOrder', payload)
      this.sortServiceItemsArray()
      this.syncOrderOfItemsInDB()
      // let itemToUpdate = this.serviceItemsFromDB.find(serviceItem => serviceItem.id === id)
      // this.syncPricesInDB(id, itemToUpdate)
      // console.log(`Result from getter is ${temp}`)
      // check if it already on top
      //
      // get affected document id
      //
      // change in store
      //
      // sync with db
      /*
      let docRef = db.collection('serviceItems').doc(id)
      console.dir(docRef)
      docRef.get().then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      }).catch(error => {
        console.log('Error getting document:', error)
      })
      */
    },
    addServiceItem () {
      return new Promise(resolve => {
        console.log(`Adding service item ${this.buffer.priceValue}`)
        // let itemToUpdate = this.serviceItemsFromDB.find(serviceItem => serviceItem.id === this.buffer.docID)
        let payload = {
          id: this.buffer.docID,
          value: 'Some string'
        }
        this.$store.commit('addServiceItem', payload)
        // this.$store.commit('deletePrice', payload)
        // this.syncPricesInDB()
        resolve()
        // this.deleteWarningDialog = !this.deleteWarningDialog
      })
    },
    handleDeleteServiceItem (id, header) {
      if (!this.safeToDelete && id) {
        console.log(`Deleting doc with id ${id}.`)
        this.safeToDelete = !this.safeToDelete
        console.log(`Setting safe to delete to ${this.safeToDelete}`)
        this.deleteServiceItemDialog = !this.deleteServiceItemDialog
        console.log(`Setting delete service item dialog to ${this.deleteServiceItemDialog}`)
        console.log(`Setting buffer doc id to ${id}`)
        this.buffer.docID = id
        this.buffer.docHeader = header
      } else {
        console.log(`Its safe to delete buffer id is ${this.buffer.docID}`)
        db.collection('serviceItems').doc(this.buffer.docID).delete().then(() => {
          console.log(`Document successfully deleted`)
          // this.buffer.docID = null
          let payload = {
            id: this.buffer.docID
          }
          this.$store.commit('deleteCategory', payload)
          this.safeToDelete = !this.safeToDelete
          this.deleteServiceItemDialog = !this.deleteServiceItemDialog
        }).catch((error) => {
          console.log(`Error removing document ${error}`)
        })
      }
    },
    handlePriceDelete (docID, priceValue) {
      if (this.safeToDelete) {
        console.log(`All set, deleting from store.`)
        // console.log(`Deleting price item with id ${this.buffer.docID}`)
        this.deletePriceFromStore().then(() => {
          // console.log(`Syncing with db..`)
          // this.syncPricesInDB()
        })
          .catch(function (error) {
            console.log(`Error is ${error}`)
          })
        this.toggleSafeCheck()
        // this.deleteWarningDialog = !this.deleteWarningDialog
      } else {
        console.log(`Check if is it safe with id ${docID}`)
        this.deleteWarningDialog = !this.deleteWarningDialog // ???
        this.buffer.priceValue = priceValue
        this.buffer.docID = docID
        this.toggleSafeCheck()
        this.deleteWarningDialog = true // ???
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
        let itemToUpdate = this.serviceItemsFromDB.find(serviceItem => serviceItem.id === this.buffer.docID)
        let payload = {
          id: this.buffer.docID,
          priceValue: this.buffer.priceValue
        }
        this.$store.commit('deletePrice', payload)
        this.syncPricesInDB(this.buffer.docID, itemToUpdate)
        resolve()
        // this.deleteWarningDialog = !this.deleteWarningDialog
      })
    },
    saveEdit () {
      return new Promise((resolve, reject) => {
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
          // console.log(`Item after update is ${itemToUpdate.services[this.buffer.index]}`)
          console.log(`This was sent to store ->`)
          console.log(itemToUpdate)
          this.$store.commit('updatePrices', itemToUpdate, this.buffer.docID)
          this.editPriceDialog = !this.editPriceDialog
          this.syncPricesInDB(this.buffer.docID, itemToUpdate)
          resolve()
        } else {
          console.log(`Nothing to update`)
          let error = `Nothing to update`
          reject(error)
        }
      })
    },
    handleAddServiceItem (id) {
      // console.log(`Handling add service item to the service with id ${id}`)
      // this.buffer.priceValue = ''
      this.buffer.docID = id
      this.addServiceItemDialog = !this.addServiceItemDialog
      /*
      let payload = {
        id: id,
        value: 'Some string'
      }
      */
      // this.$store.commit('addServiceItem', payload)
    },
    addServiceItemToDb () {
      console.log(`Adding service item to db`)
      if (this.addServiceItemFormValid) {
        console.log(`Adding to firebase...`)
        console.log(`Adding to doc with id ${this.buffer.docID}`)
        console.log(`Adding with value of ${this.buffer.priceValue}`)
        // this.serviceItemsRef.doc(this.buffer.docID).update({ 'services': firebase.firestore.FieldValue.arrayUnion(this.buffer.priceValue) })
        this.serviceItemsRef.doc(this.buffer.docID).update({
          // header: this.buffer.header,
          // order: order,
          'services': firebase.firestore.FieldValue.arrayUnion(this.buffer.priceValue)
          // services: firebase.firestore().FieldValue.arrayUnion(this.buffer.priceValue)
        })
          .then(() => {
            console.log('Document successfully written!')
            this.addServiceItemDialog = false
            let payload = {
              id: this.buffer.docID,
              value: this.buffer.priceValue
            }
            this.$store.commit('addServiceItem', payload)
            this.buffer.priceValue = ''
          })
          .catch(error => {
            console.error('Error writing document: ', error)
          })
      } else {
        console.log(`Check input.`)
      }
    },
    handleAddCategory () {
      console.log(`Adding category`)
      this.addCategoryDialog = true
    },
    addCategoryToDb () {
      // return new Promise((resolve, reject) => {
      console.log(`Adding category to fb`)
      // this.addCategoryDialog = true
      // console.dir(this.buffer)
      if (this.addCategoryFormValid) { // better check what you are sending
        // let header = 'Header'
        // let order = 99
        let order = this.serviceItemsFromDB.length
        // let services = ['Something small 120', 'Bigger ones 400', 'Huge 760']
        let services = []
        db.collection('serviceItems').add({
          header: this.buffer.header,
          order: order,
          services: services
        })
          .then((docRef) => {
            console.log(`Document successfully written! id is ${docRef.id}`)
            this.buffer.docID = docRef.id
            console.log(`Buffer id set to ${this.buffer.docID}`)
            let payload = {
              header: this.buffer.header,
              order: order,
              services: services,
              id: docRef.id
            }
            this.$store.commit('addCategory', payload)
            this.addCategoryDialog = false
          })
          .catch(error => {
            console.error('Error writing document: ', error)
          })
        // console.log(`Saving to db type of this.serviceItemsFromDb is ${this.serviceItemsFromDB[0].services}.`)
        /*
        let itemToUpdate = this.serviceItemsFromDB.find(serviceItem => serviceItem.id === this.buffer.docID)
        console.log(`Item to update is ${itemToUpdate.services[this.buffer.index]}`)
        // const updateRef = db.collection('serviceItems').doc(this.buffer.docID)
        // console.dir(this.serviceItemsFromDB)
        // let dataToSave = this.serviceItemsFromDB
        // this.serviceItemsFromDB.services[this.buffer.index] = this.buffer.priceValue
        console.log(`Data to save is ${this.buffer.priceValue}`)
        itemToUpdate.services[this.buffer.index] = this.buffer.priceValue
        // console.log(`Item after update is ${itemToUpdate.services[this.buffer.index]}`)
        console.log(`This was sent to store ->`)
        console.log(itemToUpdate)
        this.$store.commit('updatePrices', itemToUpdate, this.buffer.docID)
        this.dialog = !this.dialog
        this.syncPricesInDB(this.buffer.docID, itemToUpdate) */
        /*
        resolve()
      } else {
        console.log(`Nothing to add`)
        let error = `Nothing to add`
        reject(error) */
      }
      // })
    },
    editPrice (priceValue, index, docID, docHeader) {
      console.log(`Editing price with index ${index} and id ${docID}`)
      this.editPriceDialog = !this.editPriceDialog
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
    syncPricesInDB (documentId, itemToUpdate) {
      console.log(`Syncing db document id is ${documentId} ${itemToUpdate}`)
      // getDataForDb('sdfsdnfsmdfb')
      // get doc data from store
      db.collection('serviceItems').doc(documentId).set(itemToUpdate)
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    syncOrderOfItemsInDB () {
      console.log(`Syncing order of prices in db.`)
      console.dir(this.getItemsWhichOrderHasChanged)

      for (let item of this.getItemsWhichOrderHasChanged) {
        db.collection('serviceItems').doc(item.id).update({
          order: item.order
        }).then(() => {
          console.log('Document successfully written!')
        }).catch(error => {
          console.error('Error writing document: ', error)
        })
      }
    },
    sortServiceItemsArray () {
      console.log(`Sorting service items array`)
      this.serviceItemsFromDB = this.serviceItemsFromDB.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
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
              id: doc.id,
              order: doc.data().order,
              header: doc.data().header,
              services: doc.data().services
            })
          })
          this.sortServiceItemsArray()
          // this.serviceItemsFromDB = this.serviceItemsFromDB.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
          // console.log(`Sorted array -->`)
          // console.log(this.serviceItemsFromDB)
          // default order
          /*
          function compare(currentItem, nextItem) {
            if (currentItem.order < b.last_nom)
              return -1;
            if (a.last_nom > b.last_nom)
              return 1;
            return 0;
          }

          objs.sort(compare);
          */
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
    },
    loadReviews () {
      console.log('Loading comments..')
      // db.collection('serviceItems') // .where('starsRating', '==', 5)
      this.reviewsItemsRef.get()
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
            this.reviewsItemsFromDB.push({
              id: doc.id,
              approved: doc.data().approved,
              name: doc.data().name,
              review: doc.data().review,
              starsRating: doc.data().starsRating
            })
            /*
            this.serviceItemsFromDB.push({
              id: doc.id,
              order: doc.data().order,
              header: doc.data().header,
              services: doc.data().services
            })
            */
          })
          // this.sortServiceItemsArray()
          // this.serviceItemsFromDB = this.serviceItemsFromDB.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
          // console.log(`Sorted array -->`)
          // console.log(this.serviceItemsFromDB)
          // default order
          /*
          function compare(currentItem, nextItem) {
            if (currentItem.order < b.last_nom)
              return -1;
            if (a.last_nom > b.last_nom)
              return 1;
            return 0;
          }

          objs.sort(compare);
          */
          return true
        })
        .then(() => {
          // this.allServiceItems = serviceItemsFromDB
          // console.log(this.allServiceItems)
          this.$store.commit('setReviews', this.reviewsItemsFromDB)
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    }
  }
}
</script>
