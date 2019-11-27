import {getPictureList} from '../api'
import {SAVE_PICTURELIST} from './mutation-type'


export default{
  async getPictureListAction({commit}){
    //1. 发送请求获取数据
    let result = await getPictureList()
    if(result.code === 0){
      // 2. 调用mutation，将数据交给mutation
      commit(SAVE_PICTURELIST, {pictureList: result.data})
    }
  },
}




