import API from './axios'
import config from '@SRC/config/index.ts'
const baseURL: string = config.baseURL
const axios = new API(baseURL)
export default axios

