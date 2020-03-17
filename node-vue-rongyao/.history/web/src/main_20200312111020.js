import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import '../src/assets/scss/style.scss'
import '../src/assets/iconfont/iconfont.css'    
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//全局引用组件
import Card from "./src/components/Card.vue"  
Vue.component('m-card',Card);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
