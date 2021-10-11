import { UserState } from "../types"
import type { Module } from 'vuex'

// 获取token
export const token = (state) => (state.user as UserState).token

// 获取用户信息
export const userInfo = (state) => (state.user as UserState).userInfo
