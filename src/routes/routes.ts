import Home from '@V/index.vue'
import Logins from './login'
import NotFind from '@V/404.vue'
import { RouteRecordRaw } from 'vue-router'
import { RouteMateConfig } from '../types'
import Examplets from './examples'
import ThreejsRoute from './threejsexamplets'
const routes: RouteMateConfig[] = [
  {
    path: '/', 
    component: Home
  },
  ...Logins,
  ...Examplets,
  ...ThreejsRoute,
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFind,
    meta: {},
  },
]

export default routes