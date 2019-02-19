export default {
  getContent (state) {
    return state.content
  },
  getPrices (state) {
    return state.pricesXp
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
  getAllPrices (state) {
    return state.allPrices
  },
  someMethod: (state) => (id) => {
    return state.things.find(thing => thing.id === id)
  },
  getUpdatedArray: (state) => (collectionIndex, docId) => {
    let collection = state.allPrices[collectionIndex]
    let doc = collection.find(doc => doc.id === docId)
    return doc.services
  }
}
