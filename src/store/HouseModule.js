import apiService from '../services/apiService.js'

const houseModule = {
  state: {
    houses: []
  },
  mutations: {
    // Mutation to update the "houses" state property with fetched house data
    setHouses(state, houses) {
      state.houses = houses
    }
  },
  actions: {
    async fetchHouses({ commit }) {
      try {
        const response = await apiService.getHouses()
        commit('setHouses', response.data)
      } catch (error) {
        console.error('Error fetching houses', error)
      }
    }
  },
  getters: {
    // Getter to retrieve all the houses from the state
    allHouses: (state) => state.houses
  }
}

export default houseModule
