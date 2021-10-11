import { createStore } from 'vuex'
import * as getters from './getters.ts'
import user from './modules/user'
import routerPromes from './modules/routerPromes'
import { storeState } from '../types'

const stores = createStore<storeState>({
  getters,
  modules: {
    user,
    routerPromes
  }
})
export default stores