import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Layout from '../layout/Layout.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/layout/home'   //!重定向
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/layout',
    name: 'Layout', 
    component: Layout,
    children:[          //!二级路由
      {//首页
        path:'home',
        name:'Home',
        component:Home,
        meta:{
          icon:'el-icon-s-home',
          title:'首页'
        }
      },
      {//用户管理
        path:'user',
        name:'User',
        component:()=>import('../views/user/User.vue'),
        meta:{
          icon:'el-icon-s-custom',
          title:'用户管理'
        }
      },
      {//分享功能
        path:'share',
        name:'Share',
        component:()=>import('../views/share/Share.vue'), 
        meta:{
          icon:'el-icon-s-promotion',
          title:'分享功能'
        }
      },
      {//数据试图
        path:'dataview',
        name:'Data',
        component:()=>import('../views/dataview/DataView.vue'), 
        meta:{
          icon:'el-icon-coin',
          title:'数据视图'
        },
        children:[
          {//饼状图
            path:'piechart',
            name:'Piechart',
            component:()=>import('../views/dataview/components/Piechart.vue'),
            meta:{
              icon:'el-icon-pie-chart',
              title:'饼状图'
            }
          },
          {//柱状图
            path:'barchart',
            name:'Barchart',
            component:()=>import('../views/dataview/components/Barchart.vue'),
            meta:{
              icon:'el-icon-s-data',
              title:'柱状图'
            }
          },
          {//折线图
            path:'linechart',
            name:'Linechart',
            component:()=>import('../views/dataview/components/Linechart.vue'),
            meta:{
              icon:'el-icon-data-line',
              title:'折线图'
            }
          },
        ]
      },
      {//信息
        path:'info',
        name:'Info',
        component:()=>import('../views/info/Info.vue'),
        meta:{
          icon:'el-icon-s-operation',
          title:'信息'
        },
        children:[
          {//个人信息
            path:'myinfo',
            name:'Myinfo',
            component:()=>import('../views/info/components/Myinfo.vue'),
            meta:{
              icon:'el-icon-setting',
              title:'个人信息'
            }
          },
          {//修改信息
            path:'updateinfo',
            name:'Updateinfo',
            component:()=>import('../views/info/components/Updateinfo.vue'),
            meta:{
              icon:'el-icon-warning-outline',
              title:'修改信息'
            }
          },
        ]
      },
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

router.beforeEach((to,from,next)=>{

  // Vuex把routes传出去
  store.commit('setRouters',routes)

  next()
})

export default router
