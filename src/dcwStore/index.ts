import  { createStore } from 'vuex'

import { modules } from './modules'
import { userState } from './modules/user/store'
import { useRouteInteface } from './modules/routers/store'

type State = {
  user: userState,
  routestore: useRouteInteface
}

const store = createStore<State>({
  modules
})

export {
  State
}

export default store