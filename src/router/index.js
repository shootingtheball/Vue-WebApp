import Vue from 'vue'
import Router from 'vue-router'
import onelist from '@/components/onelist/onelist'
import all from '@/components/all/all'
import login from '@/components/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/onelist',
      name: 'onelist',
      component: onelist
    },
    {
      path:"/all",
      name:"all",
      component:all
    },
    {
      path:"/login",
      name:"login",
      component:login
    }
  ]
})
