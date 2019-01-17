export default {
  setUserState (state, payload) {
    state.userState = payload
  },
  setPrices (state, payload) {
    state.pricesXp = payload
  },
  updatePrices (state, data) {
    console.log(`Updating state`)
    console.log(data)
    console.log(data.id)
    for (let service of state.pricesXp) {
      if (service.id === data.id) {
        console.log(`Saving data!`)
      } else {
        console.log(`Something went wrong`)
      }
    }
  }
}
