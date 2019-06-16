import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Rank from '@/components/Home/components/Rank'
import Recommend from '@/components/Home/components/Recommend'
import Search from '@/components/Home/components/Search'
import Singer from '@/components/Home/components/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/recommend',
      children:[
        {
          path: '/rank',
          name: 'Rank',
          component: Rank
        },
        {
          path: '/recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/singer',
          name: 'Singer',
          component: Singer
        }
      ]
    }
    
  ]
})
