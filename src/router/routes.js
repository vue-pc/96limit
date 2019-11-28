import Class from '../Class/Class.vue'
import Detail from '../Detail/Detail.vue'
import Home from '../Home/Home.vue'
import Profile from '../Profile/Profile.vue'
import Shop from '../Shop/Shop.vue'
import login from '../login/login.vue'
import Note from '../Note/note.vue'

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
  


]