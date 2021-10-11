<template>
  <teleport to="#dcw">
    <button @click="showTeleport">点击</button> {{ show }}
    <div v-if="show" class="dcw-teleport">dcw---teleport</div>

  </teleport>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const show = ref(false)
    let timer
    const showTeleport:Function = () => {
      show.value = true
      clearTimeout(timer)
      timer = setTimeout(()=> {
        show.value = true
      }, 6000)
    }
    return {
      show,
      showTeleport
    }
  },
})
</script>

