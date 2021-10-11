import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '@R/index.ts'
import App from './App.vue'
import '@S/index.scss'
import store from '@X/index.ts'
import dcwStore from './dcwStore/index'
import packages from './components/version.ts'

// 创建vue 实例

const app = createApp(App, 
  { auth: packages.author,
    version: packages.version,
    name: packages.name
  }
)
// 挂载Vuex
app.use(store)
// app.use(dcwStore)
// 挂载UI组件
app.use(Antd)
// 挂载路由
app.use(router)
app.mount('#app')

app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info, '====error')
}

app.config.warnHandler = function(msg, vm, trace) {
  console.log(msg, vm, trace, 'warnHandler')
  // `trace` 是组件的继承关系追踪
}

// 全局变量

app.config.globalProperties = {
  auth: packages.author,
  version: packages.version,
  name: packages.name
}


