import { useRouteInteface } from "./store";

const getters = {
  isShow: (state: useRouteInteface): boolean => {
    debugger
    return state.isShow
  },
  isPath: (state: useRouteInteface): string => {
    return state.path
  }
}

export default getters