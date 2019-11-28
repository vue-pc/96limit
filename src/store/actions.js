import {
  getWines,
} from '../../api'


import { 
  SAVE_WINES ,
} from './mutation-type'


export default {
  async getWinesAction({commit}){
    let result = await getWines()
    // console.log(result)
      commit(SAVE_WINES,{wines:result})

  },
}