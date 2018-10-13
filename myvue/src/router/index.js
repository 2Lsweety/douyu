import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import SecList from '../pages/SecList';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/search',
      component: SearchPage
    },
    {
      name:'cate',
      path:'/cate/:id/:name',
      component:SecList
    },
    // {
    //   path:'/sec-list/:shortName',
    //   component:SecList
    // }
  ]
})
