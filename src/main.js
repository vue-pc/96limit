import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
// import Vant from 'vant'






import * as API from './api'
import { Tab, Tabs ,Lazyload,CountDown } from 'vant';



Vue.prototype.$API = API
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(CountDown);


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
