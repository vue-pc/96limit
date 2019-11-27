
import ajax from './ajax'

//评论主页
export const getPinglun = () => ajax({
  url:'/czcpinglun'
})
//评论前五条
export const getDetailRev = () => ajax({
  url:'/detailRev'
})