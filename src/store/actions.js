import {
  getClassList,
  getPicture,
} from '../api'
import {
  SAVE_CLASSLIST,
  SAV_PICTURE,
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
}
