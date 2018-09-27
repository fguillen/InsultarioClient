import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter)

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

