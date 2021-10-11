<template>
  <h1>useRoute--教程</h1>
  <div>
    query===={{
      dcw
    }}-----params == {{ dcwid }}
  </div>
  <div>
    ref-watch : {{ d }} -- {{ c }}
  </div>
 <textarea readonly v-model="codeHtml" style="width:100%; height: 1000px;padding: 16px; font-size: 26px"></textarea>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
debugger
const dcw = route.query?.age
const dcwid = route.params?.dcwid

</script>
