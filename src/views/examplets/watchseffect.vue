<template>
<h1>
  watchEffect--教程
</h1>
<pre>
  1. 不需要手动传入依赖
  2. 无法获取原始值
  3. 一些异步操作放里面更加合适
  4. watch第三个参数处理副作用的第一个参数
  5. 执行在onMounted之前调用

  function watchEffect(
    effect: (onInvalidate: InvalidateCbRegistrator) => void,
    options?: WatchEffectOptions
  ): StopHandle

  interface WatchEffectOptions {
    flush?: 'pre' | 'post' | 'sync'
    onTrack?: (event: DebuggerEvent) => void
    onTrigger?: (event: DebuggerEvent) => void
  }

  interface DebuggerEvent {
    effect: ReactiveEffect
    target: any
    type: OperationTypes
    key: string | symbol | undefined
  }

  type InvalidateCbRegistrator = (invalidate: () => void) => void

  type StopHandle = () => void
</pre>

<div>
  {{ dcw }}
</div>
<div>
  {{ dcw1 }}
</div>
  
</template>
<script setup lang="ts">
import { watchEffect, ref, onMounted, reactive } from 'vue'
import { loginApi } from '@A/login.ts'

const dcw = ref(9)
const dcw1 = ref(10)
onMounted(() => {
  dcw.value = new Date().getTime()
})

const params = reactive({
  useName: 'dcw',
  id: '09'
})

const stop = watchEffect( async(dcwrr) => {
  // dcw1.value = new Date().getTime()
  console.log(dcw1.value)
  // const res = await loginApi(dcw1.value)
  dcwrr(() => {
    // debugger
    // res.cancel()
    console.log(dcw1.value)
    console.log(params.useName, params.id)
    console.log('dcwrr')
  })
  document.body.innerHTML = `count is ${dcw.value}`
}, {
  flush: "sync", // pre post sync
  onTrigger(e) {
    console.log('ontrigger')
  },
  onTrack(e) {
    console.log('onTrack')
  }
})
stop()
setTimeout(() => {
  dcw1.value ++ 
}, 1000)

</script>
