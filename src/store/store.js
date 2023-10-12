import { createStore } from 'vuex'

import HouseModule from './HouseModule'

const store = createStore({
  modules: {
    houses: HouseModule
  }
})

export default store
