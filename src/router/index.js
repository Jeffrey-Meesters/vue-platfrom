import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloRoute from '@/components/HelloRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/testroute',
      name: 'testRoute',
      component: HelloRoute
    }
  ]
})
