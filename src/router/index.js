import Vue from 'vue'
import Router from 'vue-router'
import Insult from '@/components/Insult.vue'
import About from '@/components/About.vue'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/insult',
      name: 'Insult',
      component: Insult
    }
  ]
})
