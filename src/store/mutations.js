import {
  SAVE_CLASSLIST,
  SAV_PICTURE,
} from './mutation-type'



export default {

  [SAV_PICTURE](state, {picture}){
    state.picture = picture
  },
  [SAVE_CLASSLIST](state, {classList}){
    state.classList = classList
  },
}
