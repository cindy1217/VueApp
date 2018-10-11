import * as types from '../types'
import $http from '@/fetch'
import router from '@/router'
import { login, getAuthCode} from '@/fetch/api'
const state = {
  loginStatus: (localStorage.getItem('loginStatus') == 'true') || false,
  bblinkToken: localStorage.getItem('bblinkToken') || '',
}
const actions = {
  login({commit}, {userInfo, login_URL}) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((res) => {
        // 成功进入
        if(res.data.code === "0000") {
          localStorage.setItem('loginStatus',true)
          localStorage.setItem('bblinkToken',res.data.data.bblinkToken)
          commit(types.SET_LOGIN_STATUS,true)
          router.push(login_URL)
        } else {
          console.log(`${res.data.msg}>>>>>>>>>>>>> `)
        } 
        resolve(1)
      }).catch((error) => {
        console.log('服务器异常，稍后再试>>>>>')
      })
    })
  },
  getAuthCode({commit},{mobile,wy}){
    return new Promise((resolve, reject) => {
      getAuthCode({mobile,wy}).then((res) => {
        resolve(res)
      }).catch((error) => {
        console.log('稍后再试')
        reject()
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
