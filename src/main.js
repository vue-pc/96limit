import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import './veevalidate'
Vue.config.productionTip = false

new Vue({
  components: {App},
  template: '<App/>',
  router,
}).$mount('#app')
