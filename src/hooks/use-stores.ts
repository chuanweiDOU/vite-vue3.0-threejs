import { useStore } from 'vuex'
import { storeState,  } from '../types'

interface IUserDCWStores {
  state: storeState,
  getters: any
}

const useDCWstores = (): storeState => {
   const { state, getters}: IUserDCWStores = useStore<storeState>()
   return { state, getters }
}