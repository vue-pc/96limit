import {
  SAVE_PICTURELIST
} from './mutation-type'



export default {
  [SAVE_PICTURELIST](state, {pictureList}){
    state.pictureList = pictureList
  },
}
