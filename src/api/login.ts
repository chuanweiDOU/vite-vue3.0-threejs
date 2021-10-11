import axios from './api'
import { GETEWAY } from '../config/index'
const user = GETEWAY.user ? GETEWAY.user : ''

// 登录接口
export const loginApi = (data) => {
  return axios.Api({
    url: `${user}/login`,
    data,
    method: 'post'
  })
}

