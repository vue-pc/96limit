import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import Vant from 'vant'




import 'lib-flexible/flexible'

import * as API from './api'
import { Tab, Tabs ,Lazyload,CountDown } from 'vant';


Vue.use(Vant);
Vue.prototype.$API = API
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(CountDown);

Vue.config.productionTip = false

new Vue({
  components: {App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
