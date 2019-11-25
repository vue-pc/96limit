import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//声明
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
  // selection
})

export default router
