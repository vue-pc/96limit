//启动服务器
let Koa = require('koa')
let KoaRouter = require('koa-router')
let wines = require('./data/wines.json')

//1.生成实例
const app = new Koa();
//路由器
const router = new KoaRouter()
console.log(typeof wines)

//注册路由
router.get('/wines',(ctx,next)=>{
  // let xxx = ctx.query.xxx
  // //返回数据
  // ctx.body = '服务器返回的内容'
  //1获取请求参数
  let req = ctx.query.req
  //2处理请求数据
  let booksArr = wines
  //3返回响应数据
  ctx.body = booksArr
})

//安装路由器
app
  .use(router.routes())//声明使用路由的方法
  .use(router.allowedMethods())//声明使用路由器的方法

  //监听端口号
app.listen('8000',()=>{
  console.log('服务器启动成功')
  console.log('服务器地址:http://localhost:8000')
})

