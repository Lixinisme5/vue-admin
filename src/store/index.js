import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes:[]   //todo 存routers
  },
  mutations: {
    setRouters(state,routes){
      state.routes = routes
    }
  },
  actions: {
    
  },
  modules: {
  }
})

