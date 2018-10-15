import Vue from 'vue'
import Router from 'vue-router'
import ArticleIndex from '@/views/article/Index'
import Article from '@/views/article/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/articles',
      name: 'index',
      hidden: true
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleIndex
    },
    {
      path: '/article/:type/:article',
      name: 'article',
      component: Article
    },
    {
      path: '/article/:type/:article/:chapter',
      name: 'chapter',
      component: Article
    }
  ]
})
