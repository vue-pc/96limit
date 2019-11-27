import Class from '../Class/Class.vue'
import Detail from '../Detail/Detail.vue'
import Home from '../Home/Home.vue'
import Profile from '../Profile/Profile.vue'
import Shop from '../Shop/Shop.vue'
import Shoper from '../components/Shoper/Shoper.vue'
import Parameter from '../components/Parameter/Parameter.vue'
import Pack from '../components/Pack/Pack.vue'
import Pinglun from '../pages/Pinglun/Pinglun.vue'

export default [
  {
    path: '/class',
    component: Class,
    meta: {
      navShow:true
    }
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
    path:'/pinglun',
    component:Pinglun,
  },
  {
    path:'/',
    redirect: '/detail',
  }
]