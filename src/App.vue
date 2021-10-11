<template>
<Suspense>
<template #default>
  <router-view></router-view>
</template>
<template #fallback>
  <h1>Loading....</h1>
</template>
</Suspense>
<div id="dcw"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
name: 'App',
setup() {
  return {
  }
}
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  $aa: grey;
  background: $aa;
  h1{
    font-size: 60px;
  }
}

</style>
