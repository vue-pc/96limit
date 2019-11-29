import Class from '../Class/Class.vue'
import Detail from '../Detail/Detail.vue'
import Home from '../Home/Home.vue'
import Profile from '../Profile/Profile.vue'
import Shop from '../Shop/Shop.vue'
import Shoper from '../components/Shoper/Shoper.vue'
import Parameter from '../components/Parameter/Parameter.vue'
import Pack from '../components/Pack/Pack.vue'
import Pinglun from '../pages/Pinglun/Pinglun.vue'
import Search from '../components/Search/Search.vue'

import Show from '../Class/Show/Show.vue'

import HeaderGuide from '../components/HeaderGuide/HeaderGuide.vue'
import login from '../login/login.vue'
import Note from '../Note/note.vue'

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
    children:[
      {
        path: '/detail/shoper',
        component: Shoper,
      },
      {
        path: '/detail/parameter',
        component: Parameter,
      },
      {
        path: '/detail/pack',
        component: Pack,
      },
      {
        path:'/detail',
        redirect: '/detail/shoper',
      }
    ]
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
    redirect: '/profile'
  },
  {
    path: '/login',
    component:login,
  },
  {
    path: '/note',
    component:Note,
  },
  {
    path: '/pinglun',
    component:Pinglun,
  },
]