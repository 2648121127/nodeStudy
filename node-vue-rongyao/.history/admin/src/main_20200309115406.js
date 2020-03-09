import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './style.css'

Vue.config.productionTip = false

import http from './http'

Vue.prototype.$http = http

Vue.mixin({ //设定全局调用的数据或方法
    methods:{
        getAuthHeaders(){
            return {
                Authoriztion:`Bearer ${localStorage.token || ''}`
            }
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
