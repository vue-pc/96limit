import {
  getWines,
} from "../api"


import { 
  SAVE_WINES ,
} from './mutation-type'


export default {
  async getWinesAction({commit}){
    let result = await getWines()
    if (result.code===0) {
      commit(SAVE_WINES,{wines:result.data})
    }
    // console.log(result)
     

  },
}