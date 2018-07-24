// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import "./assets/sass/common/_global.scss";
import "./assets/sass/common/_function.scss";
// 前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to,from,next,'我都')
  console.log(to)
  next()
})

// 后置守卫
router.afterEach((to, from) => {
  
})
// 封装fetch
import fetch from './fetch'
// 挂载到原型上
Vue.prototype.$http = fetch

// 引入公用方法库
import Utils from './utils'
// 将公用方法定义在vue原型
Vue.prototype.Utils = Utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
