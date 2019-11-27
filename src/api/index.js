
import ajax from './ajax'

//评论主页
export const getPinglun = () => ajax({
  url:'/czcpinglun'
})
//评论前五条
export const getDetailRev = () => ajax({
  url:'/detailRev'
})


// 定义发送请求的方法

export const getHeaderTitle = () => ajax({
  url: `/headerTitle`
})


/*  获取商品分类列表 */

export const getPicture = () => ajax({
  url: '/discountsList',
})


export const getClassList = () => ajax({
  url: '/classList',
})







