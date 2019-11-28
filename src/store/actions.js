import {
  getClassList,

  getPictureList,
  getWines,
} from '../api'

import {
  SAVE_CLASSLIST,
  SAV_PICTURE,
  SAVE_PICTURELIST,
  SAVE_WINES 
} from "./mutation-type";




export default {

  async getPictureAction({commit}){
    //1. 发送请求获取数据
    let result = await getPicture()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAV_PICTURE, {picture: result.data})
    }
  },
  async getClassListAction({commit}){
    //1. 发送请求获取数据
    let result = await getClassList()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_CLASSLIST, {classList: result.data})
    }
  },
  async getPictureListAction({commit}){
    //1. 发送请求获取数据
    let result = await getPictureList()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_PICTURELIST, {pictureList: result.data})
    }
  },
  async getWinesAction({commit}){
    let result = await getWines()
    if (result.code===0) {
      commit(SAVE_WINES,{wines:result.data})
    }
    // console.log(result)
     

  },
}


