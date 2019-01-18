export default {
  setUserState (state, payload) {
    state.userState = payload
  },
  setPrices (state, payload) {
    state.pricesXp = payload
  },
  deletePrice (state, payload) {
    let indexOfResult = state.pricesXp.findIndex(service => service.id === payload.id)
    let service = state.pricesXp[indexOfResult]
    let indexOfDataToRemove = service.services.findIndex(priceString => priceString === payload.priceValue)
    service.services.splice(indexOfDataToRemove, 1) // service services? rly?
    // console.log(`Deleting item - ${payload.priceValue}`)
    // console.log(`Doc id is - ${payload.id}`)
    // console.log(`Array to edit is ${state.pricesXp}`)
    // let arrayWithServices = state.pricesXp
    // console.log(`Found index in array with id ${indexOfResult}`)
    // console.log(`Will delete from -> ${service}`)
    // console.dir(service)
    // console.log(`Removing data with index ${indexOfDataToRemove}`)
  },
  updatePrices (state, data) {
    console.log(`Updating state`)
    console.log(data)
    console.log(data.id)
    for (let service of state.pricesXp) {
      if (service.id === data.id) {
        console.log(`Saving data!`)
      }
    }
  }
}
