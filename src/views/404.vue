<template>
  <Suspense>
    <template #default>
      <S></S>
    </template>
    <template #fallback>
      <h1>Loding.....</h1>
    </template>
  </Suspense>
  <T></T>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import S from '@C/suspense-v.vue'
import T from '@C/teleport.vue'

export default defineComponent({
  name: 'NoPage',
  components: {
    S,
    T
  }
})
</script>

<style scoped>

</style>
