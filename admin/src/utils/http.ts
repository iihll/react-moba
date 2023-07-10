import axios from 'axios'
import { message } from 'antd'
import { history } from 'umi'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL: 'http://localhost:3000/admin/api'
})

// axios 响应拦截器 全局捕获错误
http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.data.message) {
      message.error(err.response.data.message)
      if (err.response.status === 401)
        history.push('/login')
    }
    return Promise.reject(err)
  },
)

// 添加请求拦截 鉴权
http.interceptors.request.use(
  (config) => {
    if (localStorage.token)
      config.headers.Authorization = `Bearer ${localStorage.token || ''}`

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default http
