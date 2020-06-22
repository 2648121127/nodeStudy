import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:resolve => require(['../views/ListActicle.vue'],resolve),
  },
  {
      path:'/acticle/index',
      name:'home',
      component:resolve => require(['../views/ListActicle.vue'],resolve),
  },
  {
    path: '/acticle/create',
    name: 'acticle-create',
    component: resolve => require(['../views/CreateActicle.vue'],resolve)
  },
  {
    path: '/acticle/:id/edit',
    name: 'acticle-edit',
    component: resolve => require(['../views/EditActicle.vue'],resolve)
  },
  {
    path: '/markdown/create',
    name: 'markdown-create',
    component: resolve => require(['../views/Markdown.vue'], resolve)
  },
  {
    path: '/markdown/list',
    name: 'markdown-list',
    component: resolve => require(['../views/MarkdownList.vue'], resolve)
  },
  {
    path: '/markdown/:id/edit',
    name: 'markdown-edit',
    component: resolve => require(['../views/MarkdownEdit.vue'],resolve)
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
