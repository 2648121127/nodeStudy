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
          meta:{title:'home'}
      },
      {
          path:'home',
          component:resolve => require(['../views/ListActicle.vue'],resolve),
          meta:{title:'home'}
      },
      {
        path: '/about',
        name: 'about',
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
