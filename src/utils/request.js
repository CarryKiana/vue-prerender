import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_REQUEST,
  withCredentials: true,
  crossdomain: true,
  // 超时
  timeout: 20000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 请求出错
    // 答应错误信息
    console.log(error, 'request interceptors error')
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(function (response) {
  const res = response.data
  return res
}, function (error) {
  console.dir('interceptors err' + error) // for debug
  return Promise.reject(error)
})

export default service