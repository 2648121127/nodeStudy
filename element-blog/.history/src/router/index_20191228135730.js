import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => require(['../views/ListActicle.vue'], resolve),
    children: [
      {
          path:'',
          component:resolve => require(['../views/ListActicle.vue'],resolve),
          meta:{title:'文章列表'}
      },
      {
          path:'/acticle/index',
          component:resolve => require(['../views/ListActicle.vue'],resolve),
          meta:{title:'文章列表'}
      },
      {
        path: '/acticle/create',
        name: '/acticle/create',
        component: resolve => require(['../views/CreateActicle.vue'],resolve)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
