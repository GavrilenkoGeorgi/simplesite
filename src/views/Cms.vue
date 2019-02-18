<template>
<!-- Price editor -->
  <v-container fill-height fluid pa-0 v-if="this.getUserState.isAuthenticated">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
<!-- Header -->
        <h1 class="py-2">{{ header }}</h1>
<!-- Training section prices - there really should be one -->
        <v-expansion-panel v-for="(pricePosition, collectionIndex) in this.getPriceItemsCollectionToLoad"
          :key="collectionIndex">
          <v-expansion-panel-content>
            <div slot="header" class="title">
              {{ pricePosition.humanReadableTitle }}
            </div>
            <v-card>
              <v-card-text class="blue-grey--text">
                {{ helpMessage }}
                </v-card-text>
                  <v-flex xs12
                    v-for="doc of getAllPrices[collectionIndex]"
                    :key="doc.id">
                    <v-layout wrap>
                      <v-flex xs12 class="text-xs-left" pl-2>
                        <!-- hr class="divider" /-->
                        <v-layout>
                          <v-flex xs5 d-flex align-center class="py-4 pl-2">
                            <h4 class="orange--text subheading">{{ doc.header }}</h4>
                          </v-flex>
                          <v-flex xs7 class="text-xs-right py-4 pr-1">
<!-- Edit, up, down and delete service item buttons (four buttons in a row) -->
                            <v-btn icon small @click="handleEditServiceItemName(doc.id, doc.header)"><v-icon color="green">create</v-icon></v-btn>
                            <v-btn icon small @click="moveItem(doc.id, 'up')"><v-icon color="blue darken-1">arrow_upward</v-icon></v-btn>
                            <v-btn icon small @click="moveItem(doc.id, 'down')"><v-icon color="blue darken-1">arrow_downward</v-icon></v-btn>
                            <v-btn icon small @click="handleDeleteServiceItem(doc.id, doc.header, pricePosition.collectionName)"><v-icon color="red">delete</v-icon></v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 v-for="(priceValue, index) in doc.services" :key="index">
                        <v-layout row align-center>
<!-- Edit single price string button -->
                          <v-flex class="text-xs-right">
                            <v-btn icon small fab @click="handleRenameSingleStringPriceItem(doc.id, priceValue, pricePosition.collectionName, collectionIndex)">
                              <v-icon small color="green">create</v-icon>
                            </v-btn>
                          </v-flex>
                          <v-flex xs9 class="body-2">
                            {{ priceValue }}
                          </v-flex>
<!-- Delete single string button -->
                          <v-flex xs2 class="text-xs-right">
                            <v-btn icon small fab @click="handleDeletePriceString(doc.id, priceValue, pricePosition.collectionName, collectionIndex)">
                              <v-icon small color="red">delete</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
<!-- Add single price string button -->
                      <v-flex xs12 class="text-xs-right">
                        <v-btn
                          @click="handleAddSingleStringPriceItem(doc.id, pricePosition.collectionName, collectionIndex)"
                          flat outline
                          color="green">
                          <v-icon medium color="orange">add</v-icon>
                            Додаті
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
<!-- Add category button -->
                  <v-layout>
                    <v-flex align-center d-flex py-4>
                      <v-btn color="blue-grey lighten-4" @click="handleAddCategory">додати категорію</v-btn>
                    </v-flex>
                  </v-layout>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
<!-- Generic dialog -->
      <v-flex class="text-xs-center">
        <v-dialog
          v-model="genericDialog"
          v-on:input="safeToDelete = $event"
          width="500">
          <v-card>
            <v-card-title
              v-bind:class="{ 'blue darken-1': genericDialogData.rename ||
              genericDialogData.addString, red: genericDialogData.delete }">
              <h4 class="white--text subheading">{{ genericDialogData.title }}</h4>
            </v-card-title>
            <v-card-text>
              <v-flex v-if="genericDialogData.delete" class="text-xs-left">
                {{ genericDialogData.inputFieldLabel }}
              </v-flex>
              <v-form ref="generic-edit-input"
                v-if="genericDialogData.rename || genericDialogData.addString"
                v-model="priceEditingFormValid">
                <v-text-field
                  v-model="genericDialogData.inputFieldValue"
                  :rules="priceStringRules"
                  type='text'
                  autocomplete='off'
                  required
                  append-icon='create'
                  :label="genericDialogData.inputFieldLabel">
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue"
                outline
                flat
                @click="cancelAction">
                скасувати
              </v-btn>
              <v-btn
                v-if="genericDialogData.delete"
                :loading="buttonLoadingState"
                :disabled="buttonLoadingState"
                color="red"
                outline
                flat
                @click="handleDeletePriceString">
                видалити
              </v-btn>
              <v-btn
                v-if="genericDialogData.addString"
                :loading="buttonLoadingState"
                :disabled="buttonLoadingState"
                color="orange"
                outline
                flat
                @click="handleAddSingleStringPriceItem">
                зберегти
              </v-btn>
              <v-btn
                v-if="genericDialogData.rename"
                :loading="buttonLoadingState"
                :disabled="buttonLoadingState"
                color="orange"
                outline
                flat
                @click="handleRenameSingleStringPriceItem">
                перейменувати
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
    helpMessage: `Двокрапка відокремлює назву послуги від ціни, потрібно для правильного відображення цін на сайті.`,
    allPrices: [],
    trainingPrices: [],
    buttonLoadingState: false,
    genericDialog: false,
    genericDialogData: {
      rename: false,
      delete: false,
      addString: false,
      title: '',
      id: null,
      inputFieldValue: '',
      inputFieldLabel: ''
    },
    buffer: {
      docHeader: '',
      priceValue: '',
      valueForLabel: '',
      header: '',
      docID: null,
      collectionRef: null,
      collectionIndex: null,
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
    deleteCommentDialog: false,
    addCategoryDialog: false,
    addCategoryFormValid: false,
    safeToDelete: false,
    serviceItemsRef: db.collection('services'),
    reviewsItemsRef: db.collection('reviews'),
    trainingItemsRef: db.collection('trainingPrices'),
    serviceItemsFromDB: [],
    serviceItemsDisplayOrder: [],
    reviewsItemsFromDB: []
  }),
  computed: {
    ...mapGetters([
      'getPrices',
      'getReviews',
      'getUserState',
      'getAllPrices',
      'getItemsWhichOrderHasChanged',
      'getPriceItemsCollectionToLoad'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      // console.log(`Kind of cms mounted.`)
      if (this.getUserState.isAuthenticated) {
        console.log(`Loading prices`)
        if (this.getAllPrices.length === 0) {
          this.loadAllPrices()
        } else {
          console.log(`Prices are set in the state already`)
        }
      } else {
        console.log(`Login first or GTFO`)
        this.$router.push('login')
      }
    })
  },
  methods: {
    // load all current prices from db, sort them and add to store
    loadAllPrices () {
      for (let collectionToLoad of this.getPriceItemsCollectionToLoad) {
        const tempArray = []
        db.collection(`${collectionToLoad.collectionName}`).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              tempArray.push({
                id: doc.id,
                order: doc.data().order,
                header: doc.data().header,
                services: doc.data().services
              })
            })
            let sortedArray = this.sortItemsArray(tempArray)
            this.allPrices.push(sortedArray)
            // console.log(`Training items ready. Pushing to store`)
            this.$store.commit('setPrices', sortedArray)
          })
          .catch(error => {
            console.log('Error getting documents: ', error)
          })
      }
    },
    //
    // rename price string
    //
    handleRenameSingleStringPriceItem (id, currentValue, collectionName, collectionIndex) {
      if (!this.genericDialog) {
        console.log(`Preparing dialog for renaming single price string`)
        // prepare the dialog
        let dialogSettings = {
          rename: true,
          delete: false,
          addString: false,
          title: 'Перейменувати позицію',
          id: id,
          inputFieldValue: currentValue,
          inputFieldLabel: currentValue
        }
        this.genericDialogData = dialogSettings
        this.genericDialog = true
        this.buffer.collectionRef = collectionName
        this.buffer.collectionIndex = collectionIndex
      } else {
        console.log(`Renaming single price string`)
        console.log(`From ${this.genericDialogData.inputFieldLabel} to ${this.genericDialogData.inputFieldValue}`)
        let payload = {
          id: this.genericDialogData.id,
          collectionName: this.buffer.collectionRef,
          collectionIndex: this.buffer.collectionIndex,
          stringValue: this.genericDialogData.inputFieldValue
        }
        this.$store.commit('addSingleStringPriceItem', payload)
        this.addSingleStringPriceValueToDB(payload.id, payload.stringValue, payload.collectionName)
      }
    },
    //
    // add single price string
    //
    handleAddSingleStringPriceItem (id, collectionName, collectionIndex) { // ????
      // console.log(`Handling add service item to collection ${collectionName} doc is: ${id}`)
      if (!this.genericDialog) {
        let dialogSettings = {
          rename: false, // modify the origin, not overwrite it
          delete: false, // modify the origin, not overwrite it
          addString: true,
          title: 'Додати цінову позицію',
          id: id,
          inputFieldValue: '',
          inputFieldLabel: `Введіть назву запису`
        }
        this.genericDialogData = dialogSettings
        this.buffer.collectionRef = collectionName
        this.buffer.collectionIndex = collectionIndex
        this.buffer.docID = id // ?
        this.genericDialog = true
      } else {
        /* console.log(`Adding to collection doc id ${this.buffer.docID},
          collection name ${this.buffer.collectionRef},
          dialog input data is ${this.genericDialogData.inputFieldValue},
          with index of ${this.buffer.collectionIndex}`) */
        let payload = {
          id: this.buffer.docID,
          collectionName: this.buffer.collectionRef,
          collectionIndex: this.buffer.collectionIndex,
          stringValue: this.genericDialogData.inputFieldValue
        }
        this.$store.commit('addSingleStringPriceItem', payload)
        this.addSingleStringPriceValueToDB(payload.id, payload.stringValue, payload.collectionName)
        // close dialog
        this.genericDialog = false
      }
    },
    // Delete one string from price 'sting:uah'
    handleDeletePriceString (docID, priceValue, collectionName, collectionIndex) {
      if (!this.genericDialog) {
        // console.log(`Check if is it safe with id ${docID}`)
        this.genericDialog = true
        let dialogSettings = {
          rename: false,
          delete: true,
          addString: false,
          title: 'Видалення',
          id: docID,
          inputFieldValue: priceValue,
          inputFieldLabel: `Дійсно видалити: "${priceValue}"?`
        }
        this.genericDialogData = dialogSettings
        this.buffer.docID = docID
        this.buffer.priceValue = priceValue
        this.buffer.collectionRef = collectionName
        this.buffer.collectionIndex = collectionIndex
      } else {
        // it's ok to delete
        // console.log(`All set, deleting from store.`)
        // console.log(`Deleting from collection index ${this.buffer.collectionIndex} doc with id ${this.buffer.docID} value ${this.buffer.priceValue}`)
        this.deletePriceStringFromStore().then(() => {
          // console.log(`Syncing with db..`)
          this.deleteSingleStringPriceValueFromDB(this.buffer.docID, this.buffer.priceValue, this.buffer.collectionRef)
        })
          .catch(error => {
            console.log(`Error is ${error}`)
          })
        this.genericDialog = !this.genericDialog
        // console.log(`All ok, clearing buffer.`)
      }
    },
    deletePriceStringFromStore () {
      return new Promise(resolve => { // do you really need this?
        let payload = {
          collectionIndex: this.buffer.collectionIndex,
          value: this.buffer.priceValue,
          id: this.buffer.docID
        }
        this.$store.commit('deleteSinglePriceString', payload)
        resolve()
      })
    },
    deleteSingleStringPriceValueFromDB (id, value, collectionRef) {
      console.log(`Removing from db`)
      db.collection(`${collectionRef}`).doc(id)
        .update({ 'services': firebase.firestore.FieldValue.arrayRemove(value) })
    },
    addPriceStringToStore () {
      return new Promise(resolve => {
        let payload = {
          collectionIndex: this.buffer.collectionIndex,
          value: this.buffer.priceValue,
          id: this.buffer.docID
        }
        this.$store.commit('deleteSinglePriceString', payload)
        resolve()
      })
    },
    addSingleStringPriceValueToDB (id, value, collectionRef) {
      console.log(`Adding to db`)
      db.collection(`${collectionRef}`).doc(id)
        .update({ 'services': firebase.firestore.FieldValue.arrayUnion(value) })
    },
    changeServiceItemOrder () {
      console.log(`Changing order`)
    },
    clearBuffer () {
      this.buffer = {
        docHeader: '',
        priceValue: '',
        valueForLabel: '',
        header: '',
        collectionIndex: null,
        docID: null,
        collectionRef: null,
        currentServiceItemOrder: null
      }
    },
    approveComment (id) {
      console.log(`Setting 'approved' to comment with id: ${id}`)
      // const update = {}
      // update[`approved.${id}`] = true
      db.collection('reviews').doc(id).update({ approved: true })
      // db.collection("data").doc("one").set({foo:'bar'})
      this.$store.commit('toggleReviewApproved', id)
    },
    disapproveComment (id) {
      console.log(`Setting 'disapproved' to comment with id: ${id}`)
      // const update = {}
      // update[`approved.${id}`] = true
      db.collection('reviews').doc(id).update({ approved: false })
      this.$store.commit('toggleReviewApproved', id)
      // db.collection("data").doc("one").set({foo:'bar'})
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
    }, /*
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
    }, */
    handleDeleteComment (id) {
      if (!this.safeToDelete && id) {
        console.log(`Dialog...`)
        console.log(`Deleting comment with id ${id}`)
        this.safeToDelete = !this.safeToDelete
        this.buffer.docID = id
        this.deleteCommentDialog = !this.deleteCommentDialog
      } else {
        console.log(`Deleting comment with id ${this.buffer.docID}`)
        db.collection('reviews').doc(this.buffer.docID).delete().then(() => {
          console.log('Document successfully deleted!')
        }).catch(error => {
          console.error('Error removing document: ', error)
        })
        this.$store.commit('deleteReview', this.buffer.docID)
        this.deleteCommentDialog = !this.deleteCommentDialog
        this.safeToDelete = !this.safeToDelete
        this.clearBuffer()
      }
    },
    handleDeleteServiceItem (id, header, collectionRef) {
      if (!this.safeToDelete && id) {
        console.log(`Deleting doc with id ${id}.`)
        this.safeToDelete = !this.safeToDelete
        console.log(`Setting safe to delete to ${this.safeToDelete}`)
        this.deleteServiceItemDialog = !this.deleteServiceItemDialog
        console.log(`Setting delete service item dialog to ${this.deleteServiceItemDialog}`)
        console.log(`Setting buffer doc id to ${id}`)
        this.buffer.docID = id
        this.buffer.collectionRef = collectionRef
        this.buffer.docHeader = header
      } else {
        console.log(`Its safe to delete buffer id is ${this.buffer.docID}`)
        db.collection(`${collectionRef}`).doc(this.buffer.docID).delete().then(() => {
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
    handleEditServiceItemName (id, header) {
      console.log(`Displaying service item name edit dialog. Doc id is ${id}`)
      let data = {
        type: 'save',
        title: 'Змінити назву категорії',
        inputFieldValue: header,
        id: id,
        inputFieldLabel: header
      }
      this.genericDialogData = data
      this.genericDialog = !this.genericDialog
    },
    editServiceItemName () {
      console.log(`Renaming service item. Doc id is ${this.genericDialogData.id}`)
      this.buttonLoadingState = !this.buttonLoadingState
      console.log(`Saving this header: ${this.genericDialogData.inputFieldValue}`)
      const serviceItemToUpdateRef = db.collection(`services`).doc(this.genericDialogData.id)
      return serviceItemToUpdateRef.update({
        header: this.genericDialogData.inputFieldValue
      })
        .then(() => {
          console.log(`Document successfully updated!`)
          this.buttonLoadingState = !this.buttonLoadingState
          this.genericDialog = !this.genericDialog
          let data = {
            id: this.genericDialogData.id,
            header: this.genericDialogData.inputFieldValue
          }
          this.$store.commit('updateServiceItemName', data)
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error(`Error updating document: `, error)
        })
    },
    addServiceItemToDb () {
      console.log(`Adding service item to db`)
      if (this.addServiceItemFormValid) {
        console.log(`Adding to firebase...`)
        console.log(`Adding to doc with id ${this.buffer.docID}`)
        console.log(`Adding with value of ${this.buffer.priceValue}`)
        console.log(`Collection reference is ${this.buffer.collectionRef}`)
        // this.serviceItemsRef.doc(this.buffer.docID).update({ 'services': firebase.firestore.FieldValue.arrayUnion(this.buffer.priceValue) })
        db.collection(`${this.buffer.collectionRef}`)
          .doc(this.buffer.docID).update({
            'services': firebase.firestore.FieldValue.arrayUnion(this.buffer.priceValue)
          })
          .then(() => {
            console.log('Document successfully written!')
            this.addServiceItemDialog = false
            let payload = {
              collection: this.buffer.collectionRef,
              id: this.buffer.docID,
              value: this.buffer.priceValue
            }
            this.$store.commit('addTrainingItem', payload)
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
        this.serviceItemsRef.add({
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
    syncOrderOfItemsInDB () {
      console.log(`Syncing order of prices in db.`)
      console.dir(this.getItemsWhichOrderHasChanged)

      for (let item of this.getItemsWhichOrderHasChanged) {
        this.serviceItemsRef.doc(item.id).update({
          order: item.order
        }).then(() => {
          console.log('Document successfully written!')
        }).catch(error => {
          console.error('Error writing document: ', error)
        })
      }
    },
    sortServiceItemsArray () {
      console.log(`Sorting service items array <-- remove this`)
      this.serviceItemsFromDB = this.serviceItemsFromDB.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
    },
    sortItemsArray (array) {
      if (!array) {
        console.log(`Nothing to sort`)
      } else {
        array = array.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
        return array
      }
    },
    loadTrainingPrices () {
      console.log('Loading training prices..')
      this.trainingItemsRef.get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.trainingPrices.push({
              id: doc.id,
              order: doc.data().order,
              header: doc.data().header,
              services: doc.data().services
            })
          })
          this.trainingPrices = this.sortItemsArray(this.trainingPrices)
          return true
        })
        .then(() => {
          // this.allServiceItems = serviceItemsFromDB
          console.log(`Training items ready.`)
          // console.log(this.allServiceItems)
          this.$store.commit('setTrainingPrices', this.trainingPrices)
        })
        .catch(error => {
          console.log('Error getting documents: ', error)
        })
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
      this.reviewsItemsRef.get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.reviewsItemsFromDB.push({
              id: doc.id,
              approved: doc.data().approved,
              name: doc.data().name,
              review: doc.data().review,
              starsRating: doc.data().starsRating
            })
          })
          return true
        })
        .then(() => {
          this.$store.commit('setReviews', this.reviewsItemsFromDB)
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    },
    cancelAction () {
      this.toggleSafeCheck()
      this.clearBuffer()
      this.genericDialog = !this.genericDialog
    },
    toggleSafeCheck () {
      this.safeToDelete = !this.safeToDelete
      // this.genericDialog = !this.genericDialog
    }
  }
}
</script>
