import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store ({
  state: {
    count: 1,
    currPin: {
        pinName: '12312312'
    },
    currPins: [],
    lockScroll: false,
    loggedIn: false,
    showOverlay: false,
    currUser: {} 
  },
  mutations: {
    increment(state) {
        state.count++
    },
    loginUser(state) {
        state.loggedIn = true
    },
    updateUser(state, data) {
        state.currUser = data
    },
    logoutUser(state) {
        state.loggedIn = false
    },
    toggleOverlay(state) {
        state.showOverlay = !state.showOverlay
    },
    updateCurrPin (state, data) {
        state.currPin = data
    }
  },
  actions: {
    increment(context) {
        context.commit('increment')
    },
    toggleOverlay(context) {
        context.commit('toggleOverlay')
    },
    loginUser(context) {
        context.commit('loginUser')
    },
    logoutUser(context) {
        context.commit('logoutUser')
    },
    updateUser(context) {
        store.commit('updateUser', 10)
    }
  }
})