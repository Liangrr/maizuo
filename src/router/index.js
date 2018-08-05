import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入根页面
import Home from '@/pages/home/Index.vue'
import Films from '@/pages/films/Index.vue'
import Cinemas from '@/pages/cinemas/Index.vue'
import Shop from '@/pages/shop/Index.vue'
import Mine from '@/pages/mine/Index.vue'
import Card from '@/pages/card/Index.vue'
import Location from '@/pages/location/Index.vue'
//这个是电影详情页
import FilmDetail from '@/components/films/detail/filmDetail.vue'

import Login from '@/pages/login/Index.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: Cinemas
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
    	path:'/filmDetail',
    	name:'filmDetail',
    	component:FilmDetail
    }
  ]
})
