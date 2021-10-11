import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import * as types from '@X/mutation-types.ts'

export default defineComponent({
  name: 'Storeactionmutation',
  setup() {
    const store = useStore()
    const token = computed(() => {
      return store.getters.token
    })
    const test = computed(() => {
      return store.state.user.test
    })
    const trySetToken = ref('action-token-dcw')
    const commitToken = ref('commit-token-dcw')
    // action dispatch use
    let modifyToken = () => {
      store.dispatch('user/setTokens', trySetToken.value)
    }
    // mutation commit use

    let commitUse = () => {
      store.commit(`user/${types.SET_TOkEN}`, commitToken.value)
    }
    const classnames = ref('actions-class-dcw')
    return {
      token,
      trySetToken,
      commitToken,
      commitUse,
      modifyToken,
      classnames,
      test
    }
  },
  render() {
    return (
      <div> 
        tokenName: <span className={this.classnames}>{this.token}</span>
        <br/>
        <div>test获取方式: {this.test}</div>
        <br/>
        <button onClick={this.modifyToken}>dispatch修改token</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.commitUse}>commit修改token</button>
      </div>
    )
  }
})