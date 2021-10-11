<template>
  <div>{{ state.user.loding }}</div>
</template>
<script setup lang="ts">
import  { reactive } from 'vue'
import { useStore } from 'vuex'
import { storeState } from '../../types'
// import type { State } from '../../dcwStore/index'
import { useDCWStore } from '../../hooks/use-store'

const dcw = reactive({
  name: 'dcw-store'
})
const store = useStore<storeState>()
const { state, getters } = useDCWStore()
debugger

console.log('state', state.user.token)
console.log('iii', state.routestore)
// console.log('gettes', getters.token)

</script>
