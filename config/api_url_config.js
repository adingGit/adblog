const URL = {
  API_BASE_URL: process.env.NODE_ENV === 'production'
                                        ? 'https://blog.weifuting.cn/'
                                        : 'http://localhost:3000'
}
//console.log('环境变量：', process.env);
export {
  URL
}