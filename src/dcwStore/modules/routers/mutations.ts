import { IS_SHOW } from "./consts";
import { useRouteInteface } from "./store";

const mutations =  {
  [IS_SHOW](state: useRouteInteface, payload: boolean): void {
    state.isShow = payload
  }
}

export { mutations }
export default mutations