import Vue from 'vue'
import Router from 'vue-router'
// 实现按需加载，require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const HelloWorld =  r =>  require.ensure([],() => r(require('@/components/HelloWorld')),'HelloWorld')
const Home = r => require.ensure([],()=>r(require("@/components/home")),'home')
const Mine = r => require.ensure([],()=>r(require("@/components/mine")),'mine')
const Find = r => require.ensure([],()=>r(require("@/components/find")),'find')
const HH = r => require.ensure([],()=>r(require("@/components/activity/home")),'home')
const HD = r => require.ensure([],()=>r(require("@/components/activity/mine")),'mine')
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
      meta:{
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
        title:'首页',
        description:'我是首页描述',
        keywords:'我是首页关键字'
      },
    },
    {
    	path:"/HelloWorld",
    	name:'HelloWorld',
    	component: HelloWorld,
      meta:{
        title:'你好世界',
        description:'你好世界描述',
        keywords:'你好世界关键字'
      },
    },
    {
      path:"/Mine/:id",
      name:'Mine',
      component: Mine,
      meta:{
        title:'我的',
        description:'我的描述',
        keywords:'我的关键字'
      },
    },
    {
      path:"/Find",
      name:'Find',
      component: Find,
      meta:{
        title:'寻找',
        description:'寻找描述',
        keywords:'寻找关键字'
      },
    }
  ]
})
