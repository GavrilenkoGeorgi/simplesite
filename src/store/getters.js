export default {
  getContent (state) {
    return state.content
  },
  getPrices (state) {
    return state.pricesXp
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
  }
}
