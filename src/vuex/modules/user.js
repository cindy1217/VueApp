import * as types from '../types'
import fetch from '../../fetch'
const state = {
  loginStatus: !!localStorage.getItem('loginStatus') || false,
  useInfo:''
}

const actions = {
  setUserInfo ({ commit }, status) {
    localStorage.setItem('loginStatus', true)
    commit(types.SET_LOGIN_STATUS, true)
    console.log(1)
  },
  setSignOut ({ commit }) {
    localStorage.removeItem('loginStatus')
    commit(types.SET_LOGIN_STATUS, false)
  },
  getUserInfo({ commit }, status){
    fetch.get('/cms/banner/list?type=home',{}).then((res)=>{
      console.log(res)
      console.log(status)
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
