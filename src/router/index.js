import Vue from 'vue'
import Router from 'vue-router'
// 实现按需加载，require.ensure(dependencies: String[], callback: function(require), chunkName: String)
// const Home = r => require.ensure([],()=>r(require("@/components/home")),'home')
//es6 按需引入
const Layout = () => import (/*webpackChunkName: "layout"*/ '@/views/layout/layout')
const Home = () => import(/*webpackChunkName: "home"*/ "@/views/home/home")
const Login = () => import(/*webpackChunkName: "login"*/ "@/views/login/login")
const ErrorPage =  () => import(/*webpackChunkName: "error"*/ '@/views/404/errorPage')
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:"",
          name: "",
          component : Home,
          meta:{
            requireAuth:true,// 登陆后置
            title:'首页',
            description:'我是首页描述',
            keywords:'我是首页关键字',
            headerShow:true,
            footerShow:true,  
          },
        },
        {
          path:"home",
          name: "home",
          component : Home,
          meta:{
            requireAuth:true,// 登陆后置
            title:'首页',
            description:'我是首页描述',
            keywords:'我是首页关键字',
            headerShow:true,
            footerShow:true, 
          },
        },
        {
          path:"login",
          name:'login',
          component: Login,
          meta:{
            requireAuth:false,
            title:'登陆',
            description:'登陆描述',
            keywords:'登陆关键字',
            headerShow:true,
          },
        },
        {
          path:"404",
          name:'404',
          component: ErrorPage,
          meta:{
            requireAuth:true,// 登陆后置
            title:'404',
            description:'你好世界描述',
            keywords:'你好世界关键字'
          },
        },
        {
          path:"*",
          name:'redirect404',
          component:ErrorPage,
          meta:{
            requireAuth:true,// 登陆后置
            title:'404',
            description:'你好世界描述',
            keywords:'你好世界关键字'
          },
        }
      ]
    }
  ]
})
