import { ActionContext } from 'vuex'
import { IS_SHOW } from './consts'
import { useRouteInteface } from './store'

export default {
  [IS_SHOW]({ commit }: ActionContext<useRouteInteface, unknown>, payload: boolean): void {
    commit(IS_SHOW, payload)
  }
}