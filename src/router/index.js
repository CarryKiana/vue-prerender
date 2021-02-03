import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index'
import test from '@/views/test'
import another from '@/views/another'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    meta: { title: '首页' }
  },
  {
    path: '/test',
    component: test,
    meta: { title: '普通页' }
  },
  {
    path: '/another',
    component: another,
    meta: { title: '另一个预渲染的页面' }
  }
]

const router = new VueRouter({
  routes: [...routes],
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL
})

export default router
