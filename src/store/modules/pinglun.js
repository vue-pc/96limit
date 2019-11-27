import {
  getPinglun,
} from '../../api'

import {
  SAVE_PINGLUN,
} from '../mutation-type'

const state = {
  pinglun:{}
}

const mutations = {
  [SAVE_PINGLUN](state, {pinglun}){
    state.pinglun = pinglun
  }
}

const actions = {
  async getPinglunAction({commit}){
    let result = await getPinglun()
    if(result.code === 0){
      commit(SAVE_PINGLUN, {pinglun: result.data})
    }
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
