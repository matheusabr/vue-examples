import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    productName: ''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    setProductName (state, payload) {
      state.productName = payload
    }
  },
  actions: {
    // Called on dispatch
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    },
    productName ({ commit }, payload) {
      commit('setProductName', payload)
    }
  },
  getters: {
    count (state) {
      return state.count
    },
    productName (state) {
      return state.productName
    }
  }
})
