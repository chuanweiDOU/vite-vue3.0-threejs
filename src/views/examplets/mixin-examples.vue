<template>
  <div>{{ dcwMixin }}</div>
</template>

<script setup  lang="ts"  >
import dcwMixin from '@M/index.ts'
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{ name: string}>()
const route = useRoute()
const { id } = route.params
console.log(dcwMixin, 'dcw---')

</script>

<style scoped>
h1{
  height: 200px;
  line-height: 200px;
}
</style>
