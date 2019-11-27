import {
  getDetailRev
} from '../../api'

import {
  SAVE_MAINREV
} from '../mutation-type'

const state = {
  mainRev:{}
}

const mutations = {
  [SAVE_MAINREV](state, {mainRev}){
    state.mainRev = mainRev
  }
}

const actions = {
  async getDetailRevAction({commit}){
    console.log("00000000000000000000000000000000000000000")
    let result = await getDetailRev()
    if(result.code === 0){
      commit(SAVE_MAINREV, {mainRev: result.data})
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
