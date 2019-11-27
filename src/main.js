import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import Vant from 'vant'


Vue.use(Vant);

import 'lib-flexible/flexible'

import * as API from './api'
import { Tab, Tabs ,Lazyload} from 'vant';



Vue.prototype.$API = API
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.config.productionTip = false

new Vue({
  components: {App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
