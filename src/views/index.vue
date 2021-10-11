<template>
 <a-button type="primary">Primary</a-button>
  <a-button>Default</a-button>
  <a-button type="dashed">Dashed</a-button>
  <a-button type="danger">Danger</a-button>
  <a-config-provider :auto-insert-space-in-button="false">
    <a-button type="primary">按钮</a-button>
  </a-config-provider>
  <a-button type="primary">按钮</a-button>
  <a-button type="link">Link</a-button>
  <input type="text" v-dcwfoucs name="" id="">
  <br/>
  <div style="padding: 40px">
    <a-button style="margin-right: 40px;margin-bottom: 20px" type="dashed" v-for="(item, index) in menus"  :key="index" @click="skipClick(item)">{{ item.path }}</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import dcwfoucs from '@D/dcw-foucus.ts'
import mixin from '@M/index.ts'
import menue from '@R/examples.ts'
import { RouteMateConfig } from '../types'
import { useRouter } from 'vue-router'


export default defineComponent({
  name: 'Home',
  directives: {
    dcwfoucs
  },
  props: {
    msg: {
      type: String,
      required: true,
      default: () => {
        return 'vue3.0架子搭建！！'
      }
    }
  },
  components: {
  },
  setup: (props) => {
    // const { dcw, dcwadd } = mixin()
    // console.log(dcw, dcwadd , '--')
    // return {
    //   dcw, dcwadd
    // }
    const router = useRouter()
    const menus = reactive<RouteMateConfig>(menue)
    onMounted(() => {
      // const ctx = useContext()
      // console.log(props, ctx, 'props--')
    })
    const skipClick = (item:RouteMateConfig) => {
      console.log(item)
      // router.push(item.path)
      debugger
      // router.push({ name: item.path, params: { dcwid: '123456' } })
      router.push({ path: item.path, query: { age: 128 } })
    }
    return {
      menus,
      skipClick
    }
  }
})
</script>

<style scoped>
h1{
  height: 200px;
  line-height: 200px;
}
</style>
