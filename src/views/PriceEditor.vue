<template>
<!-- Price editor -->
  <v-container fill-height fluid pa-0 v-if="this.getUserState.isAuthenticated">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
<!-- Header -->
        <h1 class="py-2">{{ header }}</h1>
<!-- Prices section -->
        <v-expansion-panel
          v-for="(pricePosition, collectionIndex)
          in this.getPriceItemsCollectionToLoad"
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
                            <v-btn icon small @click="handleRenameCategory(doc.id, doc.header, pricePosition.collectionName, collectionIndex)"><v-icon color="green">create</v-icon></v-btn>
                            <v-btn icon small @click="movePriceCategory('up', doc.id, pricePosition.collectionName, collectionIndex)"><v-icon color="blue darken-1">arrow_upward</v-icon></v-btn>
                            <v-btn icon small @click="movePriceCategory('down', doc.id, pricePosition.collectionName, collectionIndex)"><v-icon color="blue darken-1">arrow_downward</v-icon></v-btn>
                            <v-btn icon small @click="handleDeleteCategory(doc.id, doc.header, pricePosition.collectionName, collectionIndex)"><v-icon color="red">delete</v-icon></v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex xs12 v-for="(priceValue, itemIndex) in doc.services" :key="itemIndex">
                        <v-layout row align-center>
<!-- Edit single price string button -->
                          <v-flex class="text-xs-right">
                            <v-btn icon small fab
                              @click="handleRenameSingleStringPriceItem(
                                doc.id,
                                priceValue,
                                pricePosition.collectionName,
                                collectionIndex,
                                itemIndex)">
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
<!-- Big add category button -->
                  <v-layout>
                    <v-flex align-center d-flex py-4>
                      <v-btn flat outline color="orange" @click="handleAddCategory(collectionIndex, pricePosition.collectionName)">додати категорію</v-btn>
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
          v-on:input="genericDialog = $event"
          width="500">
          <v-card>
            <v-card-title
              v-bind:class="{ 'blue darken-1':
              genericDialogData.renameString ||
              genericDialogData.addString ||
              genericDialogData.addCategory ||
              genericDialogData.renameCategory,
              red: genericDialogData.delete ||
              genericDialogData.deleteCategory }">
              <h4 class="white--text subheading">{{ genericDialogData.title }}</h4>
            </v-card-title>
            <v-card-text>
              <v-flex v-if="genericDialogData.delete || genericDialogData.deleteCategory" class="text-xs-left">
                {{ genericDialogData.inputFieldLabel }}
              </v-flex>
              <v-form ref="generic-edit-input"
                v-if="genericDialogData.renameString ||
                genericDialogData.addString ||
                genericDialogData.addCategory ||
                genericDialogData.renameCategory"
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
<!-- Cancel button -->
              <v-btn
                color="blue"
                outline
                flat
                @click="cancelAction">
                скасувати
              </v-btn>
<!-- Category rename button -->
              <v-btn
                v-if="genericDialogData.renameCategory"
                :loading="buttonLoadingState"
                :disabled="buttonLoadingState"
                color="orange"
                outline
                flat
                @click="handleRenameCategory">
                перейменувати
              </v-btn>
<!-- Category add button -->
              <v-btn
                v-if="genericDialogData.addCategory"
                :loading="buttonLoadingState"
                :disabled="buttonLoadingState"
                color="orange"
                outline
                flat
                @click="handleAddCategory">
                додати
              </v-btn>
<!-- Confirm delete category button -->
              <v-btn
                v-if="genericDialogData.deleteCategory"
                :loading="buttonLoadingState"
                :disabled="buttonLoadingState"
                color="red"
                outline
                flat
                @click="handleDeleteCategory">
                видалити
              </v-btn>
<!-- Confirm delete single string button -->
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
<!-- Confirm add single string button -->
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
<!-- Single string rename button -->
              <v-btn
                v-if="genericDialogData.renameString"
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
import db from '@/components/firebaseInit'

export default {
  data: () => ({
    header: 'Редактор цін',
    helpMessage: `Двокрапка відокремлює
      назву послуги від ціни,
      потрібно для правильного
      відображення цін на сайті.`,
    allPrices: [],
    buttonLoadingState: false,
    genericDialog: false,
    genericDialogData: {
      renameString: false,
      renameCategory: false,
      deleteCategory: false,
      addCategory: false,
      delete: false,
      addString: false,
      title: '',
      id: null,
      inputFieldValue: '',
      inputFieldLabel: '',
      itemToRenameIndex: ''
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
    reviewsItemsRef: db.collection('reviews'),
    reviewsItemsFromDB: []
  }),
  computed: {
    ...mapGetters([
      'getUserState',
      'getAllPrices',
      'getItemsWhichOrderHasChanged',
      'getPriceItemsCollectionToLoad',
      'getUpdatedArray',
      'getCollectionLengthPlusOne'
    ])
  },
  mounted () {
    this.$nextTick(() => {
      // console.log(`Price editor mounted.`)
      this.loadAllPrices()
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
    // From the top left
    //
    // Rename category
    //
    handleRenameCategory (id, header, collectionName, collectionIndex) {
      if (!this.genericDialog) {
        let dialogSettings = {
          renameString: false,
          renameCategory: true,
          deleteCategory: false,
          addCategory: false,
          delete: false,
          addString: false,
          title: 'Перейменувати категорію',
          id: id,
          inputFieldValue: header,
          inputFieldLabel: header,
          itemToRenameIndex: null
        }
        this.buffer.collectionIndex = collectionIndex // should be in dialog by now
        this.buffer.collectionRef = collectionName
        this.genericDialogData = dialogSettings
        this.genericDialog = true
      } else if (this.priceEditingFormValid) {
        console.log(`Renaming single price string`)
        this.renameCategoryInStore().then(() => {
          console.log(`Syncing in firestore`)
          this.renameCategoryInDB(this.genericDialogData.id, this.buffer.collectionRef, this.genericDialogData.inputFieldValue)
        })
          .then(() => {
            this.genericDialog = false
          })
          .catch(error => {
            console.log(`Error is ${error}`)
          })
      } else {
        console.log(`Check input`)
      }
    },
    //
    // Rename category in store
    //
    renameCategoryInStore () {
      return new Promise(resolve => { // do you really need this?
        let payload = {
          id: this.genericDialogData.id,
          collectionIndex: this.buffer.collectionIndex,
          inputFieldValue: this.genericDialogData.inputFieldValue
        }
        this.$store.commit('renamePriceCategory', payload)
        resolve()
      })
    },
    //
    // Rename category in firestore
    //
    renameCategoryInDB (id, collectionRef, newValue) {
      console.log(`Renaming category in DB`)
      db.collection(`${collectionRef}`).doc(id)
        .update({ 'header': newValue })
    },
    //
    // Move category up or down
    //
    movePriceCategory (direction, id, collectionName, collectionIndex) {
      let payload = {
        id: id,
        direction: direction,
        collectionIndex: collectionIndex
      }
      this.changePriceCategoryOrderInStore(payload).then(() => {
        this.$store.commit('sortItemsArrayInStore', collectionIndex)
      })
        .then(() => {
          console.log(`Syncing in firestore`)
          this.syncOrderOfCategoriesInDB(collectionName)
        })
        .catch(error => {
          console.log(`Error is ${error}`)
        })
    },
    //
    // Changing price category order in store
    //
    changePriceCategoryOrderInStore (payload) {
      return new Promise(resolve => {
        this.$store.commit('changePriceItemsOrder', payload)
        resolve()
      })
    },
    //
    // Changing price category order in firestore
    //
    syncOrderOfCategoriesInDB (collectionName) {
      console.log(`Syncing order of prices in db. Index ${collectionName}`)
      // !!!!!!!!!!!!! this
      console.log(this.getItemsWhichOrderHasChanged)
      for (let item of this.getItemsWhichOrderHasChanged) {
        db.collection(`${collectionName}`).doc(item.id).update({
          order: item.order
        }).then(() => {
          console.log('Document successfully written!')
        }).catch(error => {
          console.error('Error writing document: ', error)
        })
      }
    },
    //
    // Delete category
    //
    handleDeleteCategory (id, header, collectionName, collectionIndex) {
      if (!this.genericDialog) {
        let dialogSettings = {
          renameString: false,
          renameCategory: false,
          deleteCategory: true,
          addCategory: false,
          delete: false,
          addString: false,
          title: 'Видалити категорію',
          id: id,
          inputFieldValue: null,
          inputFieldLabel: `Дійсно видалити: "${header}"?`,
          itemToRenameIndex: null
        }
        this.buffer.collectionIndex = collectionIndex // should be in dialog by now
        this.buffer.collectionRef = collectionName
        this.genericDialogData = dialogSettings
        this.genericDialog = true
      } else {
        // it's ok to delete
        this.deleteCategoryFromStore().then(() => {
          console.log(`Syncing with db..`)
          this.deleteCategoryFromDB(this.genericDialogData.id, this.buffer.collectionRef)
        })
          .catch(error => {
            console.log(`Error is ${error}`)
          })
        this.genericDialog = !this.genericDialog
      }
    },
    //
    // Delete price category from store
    //
    deleteCategoryFromStore () {
      return new Promise(resolve => { // do you really need this?
        let payload = {
          collectionIndex: this.buffer.collectionIndex,
          id: this.genericDialogData.id
        }
        this.$store.commit('deleteCategory', payload)
        resolve()
      })
    },
    //
    // Delete price category from firestore
    //
    deleteCategoryFromDB (id, collectionRef) {
      console.log(`Deleting category from firestore`)
      db.collection(`${collectionRef}`).doc(id)
        .delete().then(() => {
          console.log(`Document successfully deleted!`)
        }).catch(error => {
          console.error(`Error removing document: `, error)
        })
    },
    //
    // add category
    //
    handleAddCategory (collectionIndex, collectionName) {
      console.log(`Adding category dialog opens...`)
      if (!this.genericDialog) {
        let dialogSettings = {
          renameString: false,
          renameCategory: false,
          deleteCategory: false,
          addCategory: true,
          delete: false,
          addString: false,
          title: 'Додати категорію',
          id: null,
          inputFieldValue: null,
          inputFieldLabel: `Введіть назву категорії`,
          itemToRenameIndex: null
        }
        this.buffer.collectionIndex = collectionIndex // should be in dialog by now
        this.buffer.collectionRef = collectionName
        this.genericDialogData = dialogSettings
        this.genericDialog = true
      } else if (this.priceEditingFormValid) {
        console.log(`Adding category`)
        db.collection(`${this.buffer.collectionRef}`).add({
          header: this.genericDialogData.inputFieldValue,
          // order!
          order: this.$store.getters.getCollectionLengthPlusOne(this.buffer.collectionIndex),
          services: []
        })
          .then((docRef) => {
            console.log(`Document successfully written! id is ${docRef.id}`)
            let payload = {
              collectionIndex: this.buffer.collectionIndex,
              header: this.genericDialogData.inputFieldValue,
              order: this.$store.getters.getCollectionLengthPlusOne(this.buffer.collectionIndex),
              services: [], // empty array for now
              id: docRef.id
            }
            this.$store.commit('addCategory', payload)
            this.genericDialog = false
          })
          .catch(error => {
            console.error('Error writing document: ', error)
          })
      } else {
        console.log(`Check input.`)
      }
    },
    //
    // rename single price string
    //
    handleRenameSingleStringPriceItem (id, currentValue, collectionName, collectionIndex, itemToRenameIndex) {
      if (!this.genericDialog) {
        console.log(`Preparing dialog for renaming single price string`)
        // prepare the dialog
        let dialogSettings = {
          renameString: true,
          renameCategory: false,
          deleteCategory: false,
          addCategory: false,
          delete: false,
          addString: false,
          title: 'Перейменувати позицію',
          id: id,
          inputFieldValue: currentValue,
          inputFieldLabel: currentValue,
          itemToRenameIndex: itemToRenameIndex
        }
        this.genericDialogData = dialogSettings
        this.genericDialog = true
        this.buffer.collectionRef = collectionName
        this.buffer.collectionIndex = collectionIndex
      } else if (this.priceEditingFormValid) {
        console.log(`Renaming single price string`)
        this.renamePriceStringInStore().then(() => {
          let updatedArray = this.$store.getters.getUpdatedArray(this.buffer.collectionIndex, this.genericDialogData.id)
          this.renamePriceStringInDB(this.genericDialogData.id, this.buffer.collectionRef, updatedArray)
        })
          .then(() => {
            this.genericDialog = false
          })
          .catch(error => {
            console.log(`Error is ${error}`)
          })
      } else {
        console.log(`Check input.`)
      }
    },
    //
    // Rename single price string in store
    //
    renamePriceStringInStore () {
      return new Promise(resolve => { // do you really need this?
        let payload = {
          id: this.genericDialogData.id,
          collectionIndex: this.buffer.collectionIndex,
          inputFieldValue: this.genericDialogData.inputFieldValue,
          itemToRenameIndex: this.genericDialogData.itemToRenameIndex
        }
        this.$store.commit('renamePriceString', payload)
        resolve()
      })
    },
    /*
    // doc id
    // collection reference
    // whole updated array from store
    // rename single price string in firestore
    */
    renamePriceStringInDB (id, collectionRef, updatedArray) {
      console.log(`Renaming in DB`)
      db.collection(`${collectionRef}`).doc(id)
        .update({ 'services': updatedArray })
    },
    //
    // add single price string
    //
    handleAddSingleStringPriceItem (id, collectionName, collectionIndex) {
      if (!this.genericDialog) {
        let dialogSettings = {
          renameString: false, // modify the origin, not overwrite it
          renameCategory: false,
          deleteCategory: false,
          addCategory: false,
          delete: false, // modify the origin, not overwrite it
          addString: true,
          title: 'Додати цінову позицію',
          id: id,
          inputFieldValue: '',
          inputFieldLabel: `Введіть назву запису`,
          itemToRenameIndex: ''
        }
        this.genericDialogData = dialogSettings
        this.buffer.collectionRef = collectionName
        this.buffer.collectionIndex = collectionIndex
        this.buffer.docID = id // ?
        this.genericDialog = true
      } else if (this.priceEditingFormValid) {
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
      } else {
        console.log(`Check input.`)
      }
    },
    //
    // Add single string to a price category
    //
    addSingleStringPriceValueToDB (id, value, collectionRef) {
      console.log(`Adding to db`)
      db.collection(`${collectionRef}`).doc(id)
        .update({ 'services': firebase.firestore.FieldValue.arrayUnion(value) })
    },
    //
    // Delete one string from price 'sting:uah'
    //
    handleDeletePriceString (docID, priceValue, collectionName, collectionIndex) {
      if (!this.genericDialog) {
        this.genericDialog = true
        let dialogSettings = {
          renameString: false,
          renameCategory: false,
          deleteCategory: false,
          addCategory: false,
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
        this.deletePriceStringFromStore().then(() => {
          this.deleteSingleStringPriceValueFromDB(this.buffer.docID, this.buffer.priceValue, this.buffer.collectionRef)
        })
          .catch(error => {
            console.log(`Error is ${error}`)
          })
        this.genericDialog = !this.genericDialog
      }
    },
    //
    // Delete single price string from store
    //
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
    //
    // Delete single price string from firestore
    //
    deleteSingleStringPriceValueFromDB (id, value, collectionRef) {
      console.log(`Removing from db`)
      db.collection(`${collectionRef}`).doc(id)
        .update({ 'services': firebase.firestore.FieldValue.arrayRemove(value) })
    },
    // -------------------- Comments section --------------------
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
      this.genericDialog = !this.genericDialog
    },
    //
    // Sorting array of items by 'order' property
    //
    sortItemsArray (array) {
      console.log(`Sorting items array.`)
      if (!array) {
        console.log(`Nothing to sort`)
      } else {
        array = array.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
        return array
      }
    }
  }
} // too long
</script>
