<template>
  <h1>templaterefs--教程</h1>
  <div>
    <input type="text" ref="dcw" value="ref使用"> --- ref: {{ refval }}
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 当ref(null) 参数是null的时候，代表的是html
const dcw = ref(null)
const refval = ref(null)
onMounted(() => {
  console.log(dcw.value)
  console.log(dcw.value.type)
  console.log(dcw.value)
  console.log(dcw.value.value)
  refval.value = dcw.value.value
})
</script>
