import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import {router} from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
