import {
  SAVE_WINES,
} from './mutation-type'

export default{
  [SAVE_WINES](state,{wines}){
    state.wines = wines
  },
  checkAll(state,{flag,that}){
    console.log(flag)
    state.wines.forEach((item)=>{
      that.$set(item,'Checked',flag)
    })
  }
}