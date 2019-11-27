import {getPicture} from '../api'
import SAVE_PICTURE from './mutation-type'


export default{
  async getPictureAction({commit}){
    //1. 发送请求获取数据
    let result = await getPicture()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_PICTURE, {picture: result.data})
    }
  },
}




