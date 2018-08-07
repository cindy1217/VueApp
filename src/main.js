// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// 判断系统
import { OS, setTKD } from './utils'
//初始化微信分享功能
import { initWxShare } from './utils/shareConfig'
// 全局初始化样式
import "./assets/sass/common/_global.scss";
import "./assets/sass/common/_function.scss";
// 前置守卫
router.beforeEach((to, from, next) => {
  // 设置title keywords description
  setTKD(to)
  // 兼容 ios 微信分享功能 history 模式下只能在
  if (OS().ios && to.path !== location.pathname && router.mode =="history") {
    // 此处不可使用location.replace
    location.assign(to.fullPath)
  }
  next() 
})
// 后置守卫
router.afterEach((to, from) => {
  // 微信环境下初始化微信分享功能
  if(OS().weChat) {
    initWxShare(to)
  }
})
// 封装fetch
import fetch from './fetch'
// 挂载到原型上
Vue.prototype.$http = fetch



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
