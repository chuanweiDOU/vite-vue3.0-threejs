import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 支持jsx模板写法
import vueJSX from '@vitejs/plugin-vue-jsx'
import PostcssModulesPlugin from 'postcss-modules'
import postcsspx2vp from 'postcss-px2vp'
import autoprefixer from 'autoprefixer'
const postcssNormalize = require('postcss-normalize')
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX()],
  resolve: {
    // 设置目录文件夹别名
    alias: {
      '@SRC': path.resolve(__dirname, './src'),
      '@C': path.resolve(__dirname, './src/components'),
      '@V': path.resolve(__dirname, './src/views'),
      '@R': path.resolve(__dirname, './src/routes'),
      '@S': path.resolve(__dirname, './src/styles'),
      '@U': path.resolve(__dirname, './src/util'),
      '@A': path.resolve(__dirname, './src/api'),
      '@X': path.resolve(__dirname, './src/store'),
      '@D': path.resolve(__dirname, './src/direactive'),
      '@M': path.resolve(__dirname, './src/mixin'),
    },
    // 配置引入不需要添加后缀名字如 import router from './routes/index'
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less']
  },
  css: {
    
    modules: {
      scopeBehaviour: 'local',
      hashPrefix: 'dcw',
      /**
       * 默认：'camelCaseOnly'
       */
      localsConvention: 'dashes',
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
    },
    postcss: {
      plugins: [
        postcssNormalize(),
        // 设置所有样式采用vw vh
        postcsspx2vp({
          unitToConvert: 'px',
          viewportWidth: 1920
        }),
        autoprefixer(),
        PostcssModulesPlugin({
          scopeBehaviour: 'local',
          hashPrefix: 'dcw',
          /**
           * 默认：'camelCaseOnly'
           */
          localsConvention: 'camelCaseOnly',
          generateScopedName: "[local]" //"[name]__[local]___[hash:base64:5]",
        })
      ]
    }
  },
  server: {
    port: 8087, // 端口
    strictPort: true, // 端口占用退出当前服务
    https: false,
    open: true,
    cors: true,
    proxy: {
      '/user': {
        target: 'http://douchuanwei.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, '/dcw')
      },
    }
  }
})
