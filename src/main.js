import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'
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
