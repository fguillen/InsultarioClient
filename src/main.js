import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import Underscore from 'vue-underscore';

import App from './App.vue'
import router from './router'
import Store from './store'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(Underscore);

import {_} from 'vue-underscore';

new Vue({
  render: h => h(App),
  router,
  created: function () {
    console.log('Initializing Vue!');
    this.$cookies.config('1000d');
    console.log("main.js", Vue._);
    console.log("main.js", _);
    Store.methods.loadUser();
  }
}).$mount('#app')

