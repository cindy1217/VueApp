import axios from 'axios'
import qs from 'qs'
import prodEnv from '../../config/prod.env'
import devEnv from '../../config/dev.env'

export default (Vue) => {
  // 使用axios来发ajax
  // 增加一个拦截器，当method为form时，使用表单提交的方式
  // 使用qs包将data转为表单数据
  axios.interceptors.request.use((config) => {
  	console.log(config,'我我我')
    if (config.method === 'form') {
      config.method = 'post'
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    const envConfig = Vue.config.productionTip ? prodEnv : devEnv
    config.baseURL = envConfig.HTTP.BASE_URL
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  // 增加拦截器，在响应阶段统一处理
  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    return Promise.reject(error)
  })
  // 挂载在Vue原型上
  Vue.prototype.$http = axios
}