import Vue from 'vue'
import App from './App'
import router from './router'

import filters from '@/filters/filterDate.js';

Vue.use(filters);

Vue.prototype.$center = new Vue();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
