import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        // name:'login',
        component:Login,
    },
    {
        path: '/',
        name: 'main',
        component: Main,
        children:[
            {
                path: '/categories/create',
                component:CategoryEdit
            },
            {
                path: '/categories/edit/:id',
                component:CategoryEdit,
                props:true //把路由参数注入到页面，当然，要使用的页面需要接收才能用

            },
            {
                path: '/categories/list',
                component:CategoryList
            },
            //物品路由
            {
                path: '/item/create',
                component:ItemEdit
            },
            {
                path: '/item/edit/:id',
                component:ItemEdit,
                props:true //把路由参数注入到页面，当然，要使用的页面需要接收才能用

            },
            {
                path: '/item/list',
                component:ItemList
            },
            //英雄路由
            {
                path: '/hero/create',
                component:HeroEdit
            },
            {
                path: '/hero/edit/:id',
                component:HeroEdit,
                props:true //把路由参数注入到页面，当然，要使用的页面需要接收才能用

            },
            {
                path: '/hero/list',
                component:HeroList
            },

            //文章路由
            {
                path: '/article/create',
                component:ArticleEdit
            },
            {
                path: '/article/edit/:id',
                component:ArticleEdit,
                props:true //把路由参数注入到页面，当然，要使用的页面需要接收才能用

            },
            {
                path: '/article/list',
                component:ArticleList
            },
            //广告位
            {
                path: '/Ad/create',
                component:AdEdit
            },
            {
                path: '/ad/edit/:id',
                component:AdEdit,
                props:true //把路由参数注入到页面，当然，要使用的页面需要接收才能用

            },
            {
                path: '/ad/list',
                component:AdList
            },
            //用户管理
            {
                path: '/admin_user/create',
                component:AdminUserEdit
            },
            {
                path: '/admin_user/edit/:id',
                component:AdminUserEdit,
                props:true //把路由参数注入到页面，当然，要使用的页面需要接收才能用

            },
            {
                path: '/admin_user/list',
                component:AdminUserList
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

