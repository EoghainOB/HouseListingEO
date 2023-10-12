import apiService from '../services/apiService.js'

const houseModule = {
  state: {
    houses: []
  },
  mutations: {
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
    allHouses: (state) => state.houses
  }
}

export default houseModule
