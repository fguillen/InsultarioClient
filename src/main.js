import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import Underscore from 'vue-underscore';

import App from './App.vue'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(Underscore);

import {_} from 'vue-underscore';

new Vue({
  render: h => h(App),
  store,
  router,
  created: function () {
    console.log('Initializing Vue!');
    this.$cookies.config('1000d');
    console.log("loadAll :: INI");
    this.$store.dispatch('loadAll').then( () => {
      console.log("loadAll :: END");
      this.$router.push({ name: "Insults" });
    });
  }
}).$mount('#app')

