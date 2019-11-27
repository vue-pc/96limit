import {
  SAVE_CLASSLIST,
  SAV_PICTURE,
  SAVE_PICTURELIST
} from './mutation-type'



export default {

  [SAV_PICTURE](state, {picture}){
    state.picture = picture
  },
  
  [SAVE_CLASSLIST](state, {classList}){
    state.classList = classList 
  },

  [SAVE_PICTURELIST](state, {pictureList}){
    state.pictureList = pictureList 
  }
}