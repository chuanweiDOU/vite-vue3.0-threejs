<template>
  <div>ref-reactive教程</div>
  <div>ref: {{ count }}</div>
  <div>reactive: {{ dcw.name }}--{{ dcw.age }}</div>
  <div>toRefs: {{ name }}---{{ age }}</div>
  <textarea name="" id="" cols="60" rows="10" v-model="codeHtml"></textarea>

</template>
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
// ref 一般用于单个元素，取值需要用.value
const count = ref(80)
console.log(count.value)
// reactive 一般用于对象
const dcw = reactive({
  name: 'dcw',
  age: '99'
})
// 结构reactive
const { name, age} = { ...toRefs(dcw) }
const codeHtml = ref(`
  interface Ref<T> {
    value: T
  }

  function ref<T>(value: T): Ref<T>
`)
</script>
