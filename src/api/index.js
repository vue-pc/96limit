
import ajax from './ajax'

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







