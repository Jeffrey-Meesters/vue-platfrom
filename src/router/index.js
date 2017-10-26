import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import HelloRoute from '@/components/HelloRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/testroute',
      name: 'testRoute',
      component: HelloRoute
    }
  ]
})
