import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 是否添加自己的访问前缀路径，比如 const base_url = 'dcw' http://www.douchuanwei.com/dcw/home
const base_url = ''
const router = createRouter({
  history: createWebHistory(base_url),
  routes,
})

export default router