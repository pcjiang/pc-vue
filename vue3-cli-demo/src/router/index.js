import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from  '../views/TestView.vue'

const AboutView = () => import('../views/AboutView.vue')


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    meta:{
      isAuth: true
    },
    component: TestView,
    // component: resolve => (require(['../views/TestView.vue']), resolve)
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // 路由独享守卫
    // beforeEnter:(to, from, next) => {
    //   let item = 1
    //   if(item) {
    //     if(to.name == 'test') {
    //       next()
    //     } else {
    //       router.push('home')
    //     } 
    //   } else {
    //     next()
    //   }
    // }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局守卫：登录拦截 本地没有存token 请重新登录
// router.beforeEach((to, from, next) => {
//   const token = 0
//   if (to.meta.isAuth) { 
//     if(token) {
//       console.log(1)
//       next()
//     }else {
//       console.log(3)
//       router.push({
//         name: 'about',
//         query: {name:'zhou', age: '18'}
//       })
//     }
//   } else {
//     console.log(2)
//     next()
//   } 
// })
export default router
