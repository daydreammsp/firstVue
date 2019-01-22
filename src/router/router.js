import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstView from '.././components/firstView'
import HellowWorld from '.././components/HelloWorld'

Vue.use(VueRouter)

const routes = [
    { path: '/foo', component: FirstView },
    { path: '/bar', component: HellowWorld }
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  export default router