import {
  SAVE_PICTURE
} from './mutation-type'



export default {
  [SAVE_PICTURE](state, {picture}){
    state.picture = picture
  },
}
