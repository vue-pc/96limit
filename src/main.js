import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import 'mint-ui/lib/style.css'
import { Navbar, TabItem } from 'mint-ui';

import { SubmitBar } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant';
import 'vant/lib/index.css'
import { Stepper } from 'vant';

Vue.use(Stepper);

Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.config.productionTip = false
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


new Vue({
  components: {App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
