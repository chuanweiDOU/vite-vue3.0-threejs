import { useStore } from "vuex"
import { State } from "../dcwStore"
import { Getters } from '../dcwStore/utils'

interface IUserDCWStore {
  state: State;
  getters: Getters;
}

const useDCWStore = ():IUserDCWStore => {
  const { state, getters }: IUserDCWStore = useStore<State>()
  return { state, getters }
}

export { useDCWStore }
export default useDCWStore