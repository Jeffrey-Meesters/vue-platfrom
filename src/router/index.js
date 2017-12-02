import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import HelloRoute from '@/components/HelloRoute'
import NewsPage from '@/components/NewsPage'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/testroute',
      name: 'testRoute',
      component: HelloRoute
    },
    {
      path: '/newspage',
      name: 'newspage',
      component: NewsPage
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'page404',
      component: Page404
    }
  ]
})
