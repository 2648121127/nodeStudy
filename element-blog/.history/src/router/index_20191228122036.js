import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: resolve => require(['../views/Home.vue'], resolve),
  //    children: [
  //  {
  //      path:'',
  //      component:resolve => require(['../views/Home.vue'],resolve),
  //      meta:{title:'home'}
  //  },
  // {
  //     path:'home',
  //     component:resolve => require(['../views/Home.vue'],resolve),
  //     meta:{title:'home'}
  // },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: resolve => require(['../views/About.vue'],resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
