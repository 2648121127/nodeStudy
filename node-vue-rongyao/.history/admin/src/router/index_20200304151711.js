import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

Vue.use(VueRouter)

const routes = [{
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

