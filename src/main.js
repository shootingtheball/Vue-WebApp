// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "../node_modules/_vue-awesome-swiper@2.6.7@vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css"

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
