<template>
  <h1>vue3.0 生命周期-教程</h1>
  <pre>
    1. beforeCreate == setup()
    2. created == setup()
    3. beforeMount == onBeforeMount
    4. mounted == onMounted
    5. beforeUpdate == onBeforeUpdate
    7. updated == onUpdated
    8. beforeDestroy == onBeforeUnmount
    9. destoryed == onUnmounted
    10. errorCaptured = onErrorCaptured
  </pre>
  <div>{{ dcw }}</div>
</template>
<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  ref
} from 'vue'

  onBeforeMount(() => {
    console.log('onBeforeMount')
  })
  onMounted(() => {
    console.log('onMounted')
  })
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
  })
  onUpdated(() => {
    console.log('onUpdated')
  })
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })
  onUnmounted(() => {
    console.log('onUnmounted')
  })
  onErrorCaptured(() => {
    console.log('onErrorCaptured')
  })
  const dcw = ref(0)
  dcw.value ++ 

</script>
