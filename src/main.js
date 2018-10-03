import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'
import Store from './store'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter)
Vue.use(VueCookies)

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  render: h => h(App),
  router,
  created: function () {
    console.log('Initializing Vue!');
    this.$cookies.config('1000d');
    Store.methods.loadUser();
  }
}).$mount('#app')

