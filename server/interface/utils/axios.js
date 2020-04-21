import axios from 'axios'
// axios 初始化配置
const axiosIns = axios.create({
  // 配置地址和超时时间
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3003}`,
  timeout: 1000
})

module.exports = axiosIns;