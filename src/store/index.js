//store对象
import Vue from 'vue'
import Vuex from 'vuex'
import pinglun from './modules/pinglun'
import mainrev from './modules/mainrev'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

//生产 并向外暴露一个store对象
export default new Vuex.Store({
  modules:{
    pinglun,
    mainrev
  },
  state,
  mutations,
  actions,
  getters
})


