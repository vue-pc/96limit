import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'

import { Tab, Tabs,CountDown } from 'vant';
import * as API from './api'




Vue.use(CountDown);

Vue.use(Tab).use(Tabs);


Vue.prototype.$API = API
Vue.config.productionTip = false

new Vue({
  components: {App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
