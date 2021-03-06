export default {
  getContent (state) {
    return state.content
  },
  getAllPrices (state) {
    return state.allPrices
  },
  getAllPricesLength (state) {
    return state.allPrices.length
  },
  getReviews (state) {
    return state.reviewsForEditing
  },
  getTrainingTypeLinks (state) {
    return state.trainingTypeLinks
  },
  getMerchDescriptions (state) {
    return state.merchDescr
  },
  getUserState (state) {
    return state.userState
  },
  getItemsWhichOrderHasChanged (state) {
    return state.itemsWhichOrderHasChanged
  },
  getPriceItemsCollectionToLoad (state) {
    return state.priceItemsCollectionsToLoad
  },
  getUpdatedArray: (state) => (collectionIndex, docId) => {
    let collection = state.allPrices[collectionIndex]
    let doc = collection.find(doc => doc.id === docId)
    return doc.services
  },
  getCollectionLengthPlusOne: (state) => (collectionIndex) => {
    console.log(`Collection length`)
    let length = state.allPrices[collectionIndex].length
    return length + 1
  }
}
