import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'//排行页
import Recommend from '@/components/recommend/recommend'//推荐页
import Singer from '@/components/singer/singer'//歌手页
import Search from '@/components/search/search'//搜索页
Vue.use(Router)

export default new Router({
  routes: [
    {
    path: "/",
    redirect: "/recommend"
    },
    //排行
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    //搜索
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    //推荐
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    //歌手
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
   
  ]
})
