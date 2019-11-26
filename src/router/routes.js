import Class from '../Class/Class.vue'
import Detail from '../Detail/Detail.vue'
import Home from '../Home/Home.vue'
import Profile from '../Profile/Profile.vue'
import Shop from '../Shop/Shop.vue'


import Show from '../Class/Show/Show.vue'

export default [
  {
    path: '/class',
    component: Class,
    meta: {
      navShow:true
    },
  },
  {
    path: '/show',
    component: Show,
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      navShow:true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      navShow:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      navShow:true
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      navShow:true
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      navShow:true
    }
  },
  {
    path: '/',
    redirect:'/class'
  }
]