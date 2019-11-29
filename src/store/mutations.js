import {
  SAVE_CLASSLIST,
  SAV_PICTURE,
  SAVE_PICTURELIST,
  SAVE_WINES,
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
  },
  [SAVE_WINES](state,{wines}){
    state.wines = wines
  },
  checkAll(state,{flag,that}){
    // console.log(flag)
    // console.log(that)
    state.wines.forEach((item)=>{
      that.$set(item,'Checked',flag)
    })
  }
}


