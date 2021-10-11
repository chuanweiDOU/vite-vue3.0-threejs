<template>
  <h1>watch--教程</h1>
  <div>
    {{
      dcw.age
    }}
  </div>
  <div>
    ref-watch : {{ d }} -- {{ c }}
  </div>
 <textarea readonly v-model="codeHtml" style="width:100%; height: 1000px;padding: 16px; font-size: 26px"></textarea>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
const dcw = reactive({
  name: 'dcw',
  age: 99
})
watch(() => dcw.age,(newdata, olddata) => {
  console.log("watch---", newdata, '===', olddata)
}, {
  immediate: true,
  deep: true
})
setTimeout(() => {
  dcw.age += 60
}, 1000)

// watch ref
const d = ref(0)
const c = ref('name')
watch([d, c], ([newd, oldd], [newc, oldc]) => {
  console.log(newd, '==', oldd, '--', newc, '==', oldc)
}, {
  immediate: true
})

setTimeout(() => {
  d.value += 99
}, 2000)
setTimeout(() => {
  c.value = 'dcw'
}, 3000)

const codeHtml = ref(`
  // 侦听单数据源
  function watch<T>(
    source: WatcherSource<T>,
    callback: (
      value: T,
      oldValue: T,
      onInvalidate: InvalidateCbRegistrator
    ) => void,
    options?: WatchOptions
  ): StopHandle

  // 侦听多数据源
  function watch<T extends WatcherSource<unknown>[]>(
    sources: T
    callback: (
      values: MapSources<T>,
      oldValues: MapSources<T>,
      onInvalidate: InvalidateCbRegistrator
    ) => void,
    options? : WatchOptions
  ): StopHandle

  type WatcherSource<T> = Ref<T> | (() => T)

  type MapSources<T> = {
    [K in keyof T]: T[K] extends WatcherSource<infer V> ? V : never
  }

  // 共有的属性 请查看 watchEffect 的类型定义
  interface WatchOptions extends WatchEffectOptions {
    immediate?: boolean // default: false
    deep?: boolean
  }
`)

</script>
