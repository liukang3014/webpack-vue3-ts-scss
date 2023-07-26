import { createStore } from 'vuex'

export default createStore({
  state: {
    arr: [1, 2],
  },
  mutations: {
    updateArr(state, newValue) {
      state.arr = newValue;
    },
  },
  getters: {

  },
  actions: {
    
  },
  modules: {
    
  }
})
