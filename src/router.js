import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/one',
      name: 'One',
      component: () => import('./views/OnePage.vue'),
      meta: {
        bkColor: "#3EAF6F"
      }
    },
    {
      path: '/second',
      name: 'Second',
      component: () => import('./views/SecondPage.vue'),
      meta: {
        bkColor: "#BE0031"
      }
    },
    {
      path: '/third',
      name: 'Third',
      component: () => import('./views/ThirdPage.vue'),
      meta: {
        bkColor: "#8E00AC"
      }
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: () => import('./views/FourthPage.vue'),
      meta: {
        bkColor: "#DE9B00"
      }
    }
  ]
})
