
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




export const getClassList = () => ajax({
  url: '/classList',
})






// 定义发送请求的方法


export const getPictureList = () => ajax({
  url:'/pictureList',
})



import ajax from './ajax'

export const getWines = () => ajax({
  url: '/wines'
})
