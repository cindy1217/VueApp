import * as types from '../types'
import $http from '@/fetch'
import router from '@/router'
import { login } from '@/fetch/api'
const state = {
  loginStatus: !!localStorage.getItem('loginStatus') || false,
}
const actions = {
  login({commit}, {userInfo, login_URL}) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((res) => {
        console.log(res)
        // 成功进入
        if(res.data.code === "1002") {
          localStorage.setItem('loginStatus',true)
          return router.push(login_URL)
        } else {
          console.log('>>>>>>>>>>>>> 服务异常')
        } 
        resolve()
      }).catch((error) => {
        console.log('稍后再试')
      })
    })
  },
  getAuthCode(){
    return new Promise((resolve, reject) => {
      $http.get('/User/AuthCode').then((res) => {
        console.log('用户信息配置')
      })
    })
  }
}

const getters = {
  loginStatus: state => state.loginStatus
}

const mutations = {
  [types.SET_LOGIN_STATUS] (state, status) {
    state.loginStatus = status
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
