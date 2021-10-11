import { Omit } from 'ant-design-vue/lib/_util/type';
import { RouteRecordRaw } from 'vue-router'

export interface MateConfig {
  title?: string,
  auth?: string,
  icon?: string,
}

export type RouteMateConfig = RouteRecordRaw & {
  meta?: MateConfig
}