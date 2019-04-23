export default {
  setUserState (state, payload) {
    state.userState = payload
  },
  setPrices (state, payload) { // grooming prices
    state.allPrices.push(payload)
  },
  /*
  setTrainingPrices (state, payload) {
    state.trainingPrices = payload
  },
  */
  setReviews (state, payload) {
    state.reviewsForEditing = payload
  },
  renamePriceCategory (state, payload) {
    console.log(`Renaming category in store`)
    let collectionToModify = state.allPrices[payload.collectionIndex]
    let docToModify = collectionToModify.find(doc => doc.id === payload.id)
    docToModify.header = payload.inputFieldValue
  },
  addCategory (state, payload) {
    console.log(`Adding category to store.`)
    // console.log(payload)
    let newCategory = {
      header: payload.header,
      id: payload.id,
      order: payload.order,
      services: payload.services
    }
    state.allPrices[payload.collectionIndex].push(newCategory)
  },
  deleteCategory (state, payload) {
    console.log(`Deleting category from store ${payload.collectionIndex}`)
    console.log(`Deleting doc with id ${payload.id}`)
    // console.log(state.allPrices[payload.collectionIndex])
    let collectionToModify = state.allPrices[payload.collectionIndex]
    let indexOfCategoryToRemove = collectionToModify.findIndex(doc => doc.id === payload.id)
    collectionToModify.splice(indexOfCategoryToRemove, 1)
  },
  deleteSinglePriceString (state, payload) {
    let collectionToModify = state.allPrices[payload.collectionIndex]
    let docToModify = collectionToModify.find(doc => doc.id === payload.id)
    let indexOfDataToRemove = docToModify.services.findIndex(priceString => priceString === payload.value)
    // remove it already
    docToModify.services.splice(indexOfDataToRemove, 1)
  },
  addSingleStringPriceItem (state, payload) {
    console.log(`Adding to store ${payload}`)
    let collectionToModify = state.allPrices[payload.collectionIndex]
    let docToModify = collectionToModify.find(doc => doc.id === payload.id)
    docToModify.services.push(payload.stringValue)
  },
  renamePriceString (state, payload) {
    console.log(`Renaming price string.`)
    let collectionToModify = state.allPrices[payload.collectionIndex]
    let docToModify = collectionToModify.find(doc => doc.id === payload.id)
    docToModify.services[payload.itemToRenameIndex] = payload.inputFieldValue
  },
  deletePrice (state, payload) {
    let indexOfResult = state.pricesXp.findIndex(service => service.id === payload.id)
    let service = state.pricesXp[indexOfResult] // more info?
    let indexOfDataToRemove = service.services.findIndex(priceString => priceString === payload.priceValue)
    service.services.splice(indexOfDataToRemove, 1) // service services? rly?
    // console.log(`Deleting item - ${payload.priceValue}`)
    // console.log(`Doc id is - ${payload.id}`)
    // console.log(`Array to edit is ${state.pricesXp}`)
    // console.log(`Found index in array with id ${indexOfResult}`)
    // console.log(`Will delete from -> ${service}`)
    // console.dir(service)
    // console.log(`Removing data with index ${indexOfDataToRemove}`)
  },
  updateServiceItemName (state, data) {
    console.log(`Updating service item name.`)
    let serviceIndexToUpdate = state.pricesXp.findIndex(service => service.id === data.id)
    state.pricesXp[serviceIndexToUpdate].header = data.header
  },
  updatePrices (state, data) {
    console.log(`Updating price values`)
    let serviceIndexToUpdate = state.pricesXp.findIndex(service => service.id === data.id)
    state.pricesXp[serviceIndexToUpdate].services = data.services
  },
  addTrainingItem (state, payload) {
    console.log(`Adding training item to array`)
    let serviceIndexToUpdate = state.trainingPrices.findIndex(service => service.id === payload.id)
    if (serviceIndexToUpdate) {
      state.trainingPrices[serviceIndexToUpdate].services.push(payload.value)
    } else {
      console.log(`Something wrong went adding training price. state.traningPrices is: ${state.trainingPrices}`)
    }
  },
  addServiceItem (state, payload) {
    console.log(`Adding service item to array`)
    let serviceIndexToUpdate = state.pricesXp.findIndex(service => service.id === payload.id)
    state.pricesXp[serviceIndexToUpdate].services.push(payload.value)
  },
  setUser (state, payload) { // .... ??? )
    state.userState = payload
  },
  deleteReviewFromStore (state, id) {
    console.log(`Deleteing review from store with id ${id}`)
    let indexOfReviewToDelete = state.reviewsForEditing.findIndex(review => review.id === id)
    state.reviewsForEditing.splice(indexOfReviewToDelete, 1)
  },
  toggleApproveReview (state, id) {
    console.log(`Approving in store with id of ${id}`)
    let reviewToApprove = state.reviewsForEditing.find(review => review.id === id)
    // console.log(`Review to approve is ${reviewToApprove}`)
    reviewToApprove.approved = !reviewToApprove.approved
    // console.log(reviewToApprove)
  },
  changePriceItemsOrder (state, payload) {
    if (payload.direction) {
      state.itemsWhichOrderHasChanged = []
      // we need collection now
      let collection = state.allPrices[payload.collectionIndex]
      collection.find((item) => {
        if (item.id === payload.id) {
          // check if it's on top
          // console.log(`type of item.order is ${typeof item.order}`)
          // console.log(`Item order is ${item.order}`)
          if (item.order === 1 && payload.direction === 'up') { // it's already at the top
            console.log(`It's at the top already!`)
          } else if (payload.direction === 'up') {
            // find the element at the top by current elements order
            // current item order is 'item.order'
            collection.find((topItem) => {
              if (topItem.order === item.order - 1) {
                topItem.order = item.order
                // console.log(`Top item updated, its id is ${topItem.id}`)
                state.itemsWhichOrderHasChanged.push(topItem)
              }
            })
            // finally change order of the clicked element
            item.order = item.order - 1
            state.itemsWhichOrderHasChanged.push(item)
            return true
          } else if (payload.direction === 'down' && item.order < collection.length) {
            collection.find((lowerItem) => {
              if (lowerItem.order === item.order + 1) {
                // set its order to current item order,
                // the are now both on the same place
                lowerItem.order = item.order
                // console.log(`Lower item updated, its id is ${lowerItem.id}`)
                state.itemsWhichOrderHasChanged.push(lowerItem)
              }
            })
            // and move the clicked item down
            item.order = item.order + 1
            state.itemsWhichOrderHasChanged.push(item)
            return true
          } else {
            console.log(`It's already at the bottom!`)
            return false
          }
        }
      })
    } else {
      console.log(`Set direction!`)
      return false
    }
  },
  sortItemsArrayInStore (state, collectionIndex) {
    console.log(`Sorting items array in store.`)
    let array = state.allPrices[collectionIndex]
    if (!array) {
      console.log(`Nothing to sort`)
    } else {
      array = array.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
      state.allPrices[collectionIndex] = array
      return array
    }
  }
}
