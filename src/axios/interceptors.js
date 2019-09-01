import Axios from 'axios'
// https://www.jianshu.com/p/43fc396b2fa7
// request拦截器
Axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
Axios.interceptors.response.use(
  response => {
    // console.log('22111', response)
    return response
  },
  error => {
    const errorList = /-?[1-9]\d*/g.exec(JSON.parse(JSON.stringify(error)).message)
    if (errorList.length > 0 && errorList !== undefined) {
      return Promise.reject(errorList[0])
    } else {
      return Promise.reject(error)
    }
  }
)