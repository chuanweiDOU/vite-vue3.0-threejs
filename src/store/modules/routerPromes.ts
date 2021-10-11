import { ActionContext } from 'vuex'
import { RouterPromesState } from '../../types'
import * as types from '../mutation-types'

const state: RouterPromesState = {
  routePath: [''],
  activeRoute: ''
}

const mutations = {
  [types.SET_ROUTE_PATH](state: RouterPromesState, payload: string[]) {
    state.routePath.push(...payload)
  }
}

const actions = {
  [types.SET_ROUTE_PATH]({ commit }: ActionContext<RouterPromesState, any>, payload: string[]) {
     commit(types.SET_ROUTE_PATH, ['/dcwstore'])
  }
}

export default{
  namespace: true,
  state,
  mutations,
  actions
}