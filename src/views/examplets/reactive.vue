<template>
  <button @click="btnClick">计数</button>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    // reactiveObj 
    const reactiveObj = reactive({
      connt: 0,
      fn: computed(() => { reactiveObj.connt * 2 })
    })
    const btnClick = () => {
      reactiveObj.connt ++
    }
    return {
      reactiveObj,
      btnClick
    }
  },
})
</script>
