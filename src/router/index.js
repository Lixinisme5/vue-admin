import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/layout/home'   //!重定向
  },
  {
    path: '/layout',
    name: 'Layout', 
    component: Layout,
    children:[          //!二级路由
      {
        path:'home',
        name:'Home',
        component:Home
      }
    ]
  },
  {
    path:'*',
    name:'404',
    component:()=>import('../components/NotFind.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
