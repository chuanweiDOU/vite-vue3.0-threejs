import { userState } from "./store"

const getters = {
  isLogin: (state: userState): string => {
    debugger
    return `^===${state.loding}`
  }
}

export { getters }

export default getters