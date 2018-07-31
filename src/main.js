
import Vue from 'vue'
import App from './App'
import router from './router'

//import axios from 'axios'
//
//axios.get('/v4/api/film/now-playing?__t=1533025585545&page=1&count=5')
//.then(function (response) {
//  console.log(response);
//})
//.catch(function (error) {
//  console.log(error);
//});

Vue.prototype.$center = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
