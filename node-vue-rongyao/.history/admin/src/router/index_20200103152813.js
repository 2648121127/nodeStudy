import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: Main,
        children:[
            {
                path: '/categories/create',component:CategoryEdit
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
