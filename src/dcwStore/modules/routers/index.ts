import { createRouteState } from './store'
import { mutations } from './mutations'
import actions from './actions'
import getters from './getters'
const store = createRouteState()

export default {
  namespace: true,
  store,
  mutations,
  actions,
  getters
}