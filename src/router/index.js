import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    meta: { title: '首页' }
  }
]

const router = new VueRouter({
  routes: [...routes],
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL
})

export default router
