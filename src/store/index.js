import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    userName: ''
  },
  mutations: {
    updateUserName: (state, payload) => {
      state.userName = payload
    }
  },
  getters: {
    userName: state => state.userName
  }
})
