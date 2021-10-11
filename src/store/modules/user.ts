import { ActionContext } from 'vuex'
import * as types from '../mutation-types'
import { UserState } from '../../types'
import { loginApi } from '@A/login.ts'
import { setToken, getToken } from '@U/index.ts'

const state: UserState = {
  token: getToken(),
  userInfo: {},
  test: 'store'
}
const mutations = {
  [types.SET_TOkEN] (state: UserState, token: string) {
    state.token = token
  },
  [types.SET_USER_INFO] (state: UserState, userInfo: Object) {
    state.userInfo = userInfo
  }
}
const actions = {
  async login ({ commit }: ActionContext<UserState, any>, params: { userName: string }) {
    try {
      const { code, data, msg } = await loginApi(params)
      if (code) {
        setToken(data)
        commit(`${types.SET_TOkEN}`, data)
        return Promise.resolve(true)
      } else {
        
        throw new Error(msg)
      }
    } catch (e) {
      setToken(params.userName)
      commit(`${types.SET_TOkEN}`, params.userName)
      return Promise.resolve(true)
      // return Promise.reject(e)
    }

  },
  async setTokens ({ commit }: ActionContext< keyof UserState, any>, params: any) {
    setToken(params)
    commit(`${types.SET_TOkEN}`, params)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}