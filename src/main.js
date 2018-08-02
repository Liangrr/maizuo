import Vue from 'vue'
import App from './App'
import router from './router'

import filters from '@/filters/filterDate.js';

// 引入全局组件
import Page from '@/components/common/Page.vue'
Vue.component('page', Page);

Vue.use(filters);

Vue.prototype.$center = new Vue();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
