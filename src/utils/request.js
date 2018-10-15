import axios from 'axios'
import { Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 500000 // 请求超时时间
})

// request拦截器
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非0是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      var msg = res.msg
      if (res.errors && res.errors.length > 0) {
        msg = ''
        for (var v in res.errors) {
          for (var k in res.errors[v]) {
            msg += '\r\n'
            msg += res.errors[v][k]
          }
        }
      }
      Message({
        message: msg,
        type: 'error',
        duration: 5 * 1000
      })
      // return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // return Promise.reject(error)
  }
)

export default service
