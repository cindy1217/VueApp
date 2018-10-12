import Vue from 'vue'
import Router from 'vue-router'
// 实现按需加载，require.ensure(dependencies: String[], callback: function(require), chunkName: String)
// const Search =  r =>  require.ensure([],() => r(require('@/components/search')),'search')
// const Home = r => require.ensure([],()=>r(require("@/components/home")),'home')
// const Login = r => require.ensure([],()=>r(require("@/components/login")),'login')
//es6 按需引入
const ErrorPage =  () => import(/*webpackChunkName: "search"*/ '@/components/search')
const Home = () => import(/*webpackChunkName: "home"*/ "@/components/home")
const Login = () => import(/*webpackChunkName: "login"*/ "@/components/login")

console.log(1)
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
      meta:{
        requireAuth:true,// 登陆后置
        role:1,// 权限设置
        title:'首页',
        description:'我是首页描述',
        keywords:'我是首页关键字'
      }
    },
    {
    	path:"/home",
    	name: "home",
    	component : Home,
      meta:{
        requireAuth:true,// 登陆后置
        role:1,// 权限设置
        title:'首页',
        description:'我是首页描述',
        keywords:'我是首页关键字'
      },
    },
    {
    	path:"/404",
    	name:'404',
    	component: ErrorPage,
      meta:{
        requireAuth:true,// 登陆后置
        role:1,// 权限设置
        title:'404',
        description:'你好世界描述',
        keywords:'你好世界关键字'
      },
    },
    {
      path:"/login",
      name:'login',
      component: Login,
      meta:{
        requireAuth:false,
        role:1,
        title:'登陆',
        description:'登陆描述',
        keywords:'登陆关键字'
      },
    }
  ]
})
