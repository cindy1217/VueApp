import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from "@/components/home"
// import Mine from "@/components/mine"
// import Find from "@/components/find"

const HelloWorld =  r =>  require.ensure([],() => r(require('@/components/HelloWorld')),'HelloWorld')
const Home = r => require.ensure([],()=>r(require("@/components/home")),'home')
const Mine = r => require.ensure([],()=>r(require("@/components/mine")),'mine')
const Find = r => require.ensure([],()=>r(require("@/components/find")),'find')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
    	path:"/home",
    	name: "home",
    	component : Home
    },
    {
    	path:"/HelloWorld",
    	name:'/HelloWorld',
    	component: HelloWorld
    },
    {
      path:"/Mine",
      name:'/Mine',
      component: Mine
    },
    {
      path:"/Find",
      name:'/Find',
      component: Find
    }
  ]
})
