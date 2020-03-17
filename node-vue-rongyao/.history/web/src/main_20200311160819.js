import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import '../src/assets/scss/style.scss'
import '../src/assets/iconfont'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
