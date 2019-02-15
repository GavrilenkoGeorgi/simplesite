export default {
  setUserState (state, payload) {
    state.userState = payload
  },
  setPrices (state, payload) { // grooming prices
    // state.pricesXp = payload
    state.allPrices.push(payload)
  },
  setTrainingPrices (state, payload) {
    state.trainingPrices = payload
  },
  setReviews (state, payload) {
    state.reviewsForEditing = payload
  },
  deleteSinglePriceString (state, payload) {
    let collectionToModify = state.allPrices[payload.collectionIndex]
    let docToModify = collectionToModify.find(doc => doc.id === payload.id)
    let indexOfDataToRemove = docToModify.services.findIndex(priceString => priceString === payload.value)
    // remove it already
    docToModify.services.splice(indexOfDataToRemove, 1)
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
  deleteTrainingItemPrice (state, payload) {
    // let serviceIndexToDelete = state.trainingPrices.findIndex(service => service.id === payload.id)
    // state.trainingPrices.splice(serviceIndexToDelete, 1)
  },
  deleteCategory (state, payload) {
    let serviceIndexToDelete = state.pricesXp.findIndex(service => service.id === payload.id)
    state.pricesXp.splice(serviceIndexToDelete, 1)
  },
  addCategory (state, payload) {
    state.pricesXp.push(payload)
  },
  setUser (state, payload) {
    state.userState = payload
  },
  deleteReview (state, id) {
    console.log(`Deleteing review from store with id ${id}`)
    let indexOfCommentToDelete = state.reviewsForEditing.findIndex(review => review.id === id)
    state.reviewsForEditing.splice(indexOfCommentToDelete, 1)
  },
  toggleReviewApproved (state, id) {
    console.log(`Approving in store with id of ${id}`)
    let reviewToApprove = state.reviewsForEditing.find(review => review.id === id)
    console.log(`Review to approve is ${reviewToApprove}`)
    reviewToApprove.approved = !reviewToApprove.approved
    console.log(reviewToApprove)
  },
  changePriceItemsOrder (state, payload) {
    if (payload.direction) {
      state.itemsWhichOrderHasChanged = []
      state.pricesXp.find((item) => {
        if (item.id === payload.id) {
          // check if it's on top
          console.log(`type of item.order is ${typeof item.order}`)
          console.log(`Item order is ${item.order}`)
          if (item.order === 1 && payload.direction === 'up') { // it's already at the top
            console.log(`It's at the top already!`)
          } else if (payload.direction === 'up') {
            // find the element at the top by current elements order
            // current item order is 'item.order'
            state.pricesXp.find((topItem) => {
              if (topItem.order === item.order - 1) {
                topItem.order = item.order
                console.log(`Top item updated, its id is ${topItem.id}`)
                state.itemsWhichOrderHasChanged.push(topItem)
              }
            })
            // finally change order of the clicked element
            item.order = item.order - 1
            state.itemsWhichOrderHasChanged.push(item)
            return true
          } else if (payload.direction === 'down' && item.order < state.pricesXp.length) {
            state.pricesXp.find((lowerItem) => {
              if (lowerItem.order === item.order + 1) {
                // set its order to current item order,
                // the are now both on the same place
                lowerItem.order = item.order
                console.log(`Lower item updated, its id is ${lowerItem.id}`)
                state.itemsWhichOrderHasChanged.push(lowerItem)
              }
            })
            // and move the clicked item dowm
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
  }
}
