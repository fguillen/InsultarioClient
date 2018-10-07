import Vue from 'vue'
import Router from 'vue-router'
import Insult from '@/components/Insult.vue'
import Insults from '@/components/Insults.vue'
import About from '@/components/About.vue'
import NoMoreInsults from '@/components/NoMoreInsults.vue'
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
      path: '/insult/:id',
      name: 'Insult',
      component: Insult
    },
    {
      path: '/insults',
      name: 'Insults',
      component: Insults
    },
    {
      path: '/no_more_insults',
      name: 'NoMoreInsults',
      component: NoMoreInsults
    }
  ]
})
