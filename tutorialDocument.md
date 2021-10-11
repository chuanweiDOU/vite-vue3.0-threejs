#### 项目安装流程

##### 安装vite

> 坑1： 注意运行 `yarn create @viejs/app` 的时候windows系统尽量用cmd命令面板, gitbash 可能会有创建文件夹的权限问题以至于不能进入选择创建配置项

```js
全局安装vite

npm install vite -g 

npm init @vitejs/app
或
yarn create @vitejs/app
或更新
npm update @vitejs/app -g

```

##### 设置项目名称及选择模板类型选择react 或 vue, 然后进入二级选择是否加入typescript

##### 启动项目

```js

npm run dev

```


##### package.json 文件分析

```js

{
  // name 是项目名称，可以自己设置名称
  "name": "vite-vue3.0-ts",
  // version 是项目更新版本
  "version": "0.0.0",
  // scripts 是自定义 npm 执行命令 如设置开发环境命令，生产环境命令
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "serve": "vite preview"
  },
  // dependencies 依赖node安装包
  "dependencies": {
    "vue": "^3.0.5"
  },
  // devDependencies 依赖node安装包 开发环境
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.2.2",
    "@vue/compiler-sfc": "^3.0.5",
    "typescript": "^4.1.3",
    "vite": "^2.2.4",
    "vue-tsc": "^0.0.24"
  }
}


```

##### 知识扩展 dependencies 和 devDependencies 区别

```js
  npm install XXname --save-dev 会把安装包安装在 devDependencies 下面

  npm install XXname  会把安装包安装在 dependencies 下面

  区别：

  devDependencies下的依赖包，只是我们在本地或开发坏境下运行代码所依赖的，若发到线上，其实就不需要
  
  devDependencies下的所有依赖包；(比如各种loader，babel全家桶及各种webpack的插件等)只用于开发环
  
  境，不用于生产环境，因此不需要打包
  
  dependencies 是我们线上(生产坏境)下所要依赖的包，比如vue，我们线上时必须要使用的，所以要放在
  
  dependencies下 dependencies依赖的包不仅开发环境能使用，生产环境也能使用


```


##### tsconfig.json 文件分析

```js

{
  "compilerOptions": {
    "target": "esnext",                    // 指定ECMAScript目标版本 /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "esnext",                    // /* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "moduleResolution": "node", 
    "removeComments": true,                /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
    "strict": true,
    "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
    "sourceMap": true,                     // 是否开启打包镜像文件
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],              /* lib用于指定要包含在编译中的库文件 */
    "types": ["vite/client"],              /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
    "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
    "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */
    "declarationMap": true,                /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */
    "outFile": "./",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    "outDir": "./",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    "composite": true,                     /* 是否编译构建引用项目  */
    "incremental": true,                   /* 是否启用增量编译*/
    "tsBuildInfoFile": "./",               /* 指定文件用来存储增量编译信息 */
    "noEmit": true,                        /* 不生成编译文件，这个一般比较少用 */
    "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */
    "downlevelIteration": true,            /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */
    "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */
    "strict": true,                        /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */
    "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */
    "noUnusedLocals": true,                /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false*/
    "noUnuserdParameters": true,           /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */
    "noImplicitReturns": true,             /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
    "noFallthroughCasesInSwitch": true,    /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */
    "moduleResolution": "node",            /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
    "paths": {},                           /* 用于设置模块名称到基于baseUrl的路径映射 */
    "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
    "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
    "allowSyntheticDefaultImports": true,  /* 用来指定允许从没有默认导出的模块中默认导入 */
    "esModuleInterop": true,               /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */
    "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */
    "inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
    "inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */
    "experimentalDecorators": true, /* 用于指定是否启用实验性的装饰器特性 */
    "emitDecoratorMetadata": true,         /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
    "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
    "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */

  },
  "files": [], // 指定需要编译文件，相对配置文件所在
  // 运行前需要tsc 编译成js的文件项
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"], // include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
  "exclude": [],  // exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
  "compileOnSave": true,  // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
  "references": [],  // 一个对象数组，指定要引用的项目
}



```
##### .gitignore git忽略文件

> 当你提交代码的时候此文件里面的文件不会被git记录跟踪修改变更

```js

node_modules
.DS_Store
dist
dist-ssr
*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*


```

##### shims-vue.d.ts

> 因为js本身是没有类型的，ts的语言服务需要.d.ts文件来识别类型，这样才能做到相应的语法检查和智能提示，我们自己编写的.d.ts文件直接放在项目的目录下，ts自己会去识别, 因为.vue 文件不是一个常规的文件类型，ts 是不能理解 vue 文件是干嘛的，加这一段是是告诉 ts，vue 文件是这种类型的。

```js
// 这一段删除，会发现 import 的所有 vue 类型的文件都会报错, declare声明宣告， 声明一个ambient module(即:没有内部实现的 module声明)
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 举例

<script lang="ts">
    import { ref, defineComponent, onMounted } from 'vue'
    import ECharts from 'vue-echarts' // 报错,按上面的方法在shims-vue.d.ts文件中引入 `declare module 'vue-echarts'` 即可
</script>

```

### 代码格式化基础搭建

#### eslint配置控制代码规范

> 安装插件包 `yarn add eslint babel-eslint eslint-config-alloy vue-eslint-parser eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier -D`

> 调用插件包： 创建 `.eslintrc.js`

```js
module.exports = {
    extends: [
        'eslint-config-alloy/vue',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // Vue: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};

// 配置

module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript', 'prettier'],
  plugins: ['prettier', 'vue'],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    //
    // Vue: false
  },
  rules: {
    "indent": ["warn", 2, {
      //设置为1时强制switch语句中case的缩进为2个空格
      "SwitchCase": 1,
      //分别配置var、let和const的缩进
      "VariableDeclarator": { "var": 2, "let": 2, "const": 2 }
    }],
    //定义字符串不规范错误，要求字符串使用双引号
    quotes: ["error", "single"],
  },
}

```

#### 创建忽略eslint检查文件 `.eslintignore`

```js

```

#### 创建文件 `.prettierrc.js` 美化代码js

#### 安装 `yarn add pre-commit -D` git提交钩子校验lint代码

```js
// 在package.json 里面添加命令 
// 此代码意思时提交 git commit -m 'XX' 时进行 eslint 命令检测是否有代码不规范
"gitHooks": {
    "pre-commit": "lint-staged"
},
"lint-staged": {
  "*.{js,vue}": "eslint"
},
```

#### module.exports = {} 调用报红，请按装 ` yarn add @type/node -D`


### 路由基础搭建


#### 安装`vue-router4.0`

* 安装`vue-router4.0`

```js
npm install vue-router@4 or yarn add vue-router@4

```

* 在src目录创建routes文件夹

```js
// 创建 index.ts 做route实例化
// 创建routes.ts 做界面路由集中入口
src ---- 
    ---- routes
        ----- index.ts
        ----- routes.ts

```

* src -- routes --- index.ts 内容

```js
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// 是否添加自己的访问前缀路径，比如 const base_url = 'dcw' http://www.douchuanwei.com/dcw/home
const base_url = ''
// 创建路由实例
const router = createRouter({
  history: createWebHistory(base_url),
  routes,
})

export default router

```

* src -- routes --- routes.ts 内容

```js
// 创建首页
import Home from '@V/index.vue'
const routes: Array<any> = [
  {
    path: '/', 
    component: Home
  }
]

// 导出路由集合
export default routes

```


#### vite.config.ts 配置内容

> 注意点： const path = require('path') ， 使用require报红， 安装 `yarn add @types/node -D`, 即可解决

> 配置路由文件夹别名 ` '@R': path.resolve(__dirname, './src/routes'), `

```js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置目录文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@C': path.resolve(__dirname, './src/components'),
      '@V': path.resolve(__dirname, './src/views'),
      '@R': path.resolve(__dirname, './src/routes'),
    }
  }
})

```

#### main.ts 里面引入路由实例

```js

import { createApp } from 'vue'
import router from '@R/index.ts'
import App from './App.vue'
// 创建vue 实例

const app = createApp(App)

// 挂载路由
app.use(router)
app.mount('#app')


```

#### App.vue 添加路由 `<router-view></router-view>` 容器

```js
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',
})
</script>

<style>
  #app {
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

```

### 样式基础搭建


#### 安装sass, css预处理 `yarn add sass -D`

```js
// 使用方式 <style lang="scss">

<style lang="scss">
  #app {
    $aa: red;
    background: $aa;
  }
</style>

```


#### 安装 `yarn add -D postcss-px2vp autoprefixer postcss-normalize`

```js
// 将 px 单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.
// 如果你的样式需要做根据视口大小来调整宽度，这个脚本可以将你 CSS 中的 px 单位转化为 vw，1vw 等于 1/100 视口宽度

// 基础配置
{
  unitToConvert: 'px',
  viewportWidth: 320,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: [],
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
}

```

> unitToConvert (String) 需要转换的单位，默认为"px"

> viewportWidth (Number) 设计稿的视口宽度

> unitPrecision (Number) 单位转换后保留的精度

> propList (Array) 能转化为 vw 的属性列表

```js

* 传入特定的 CSS 属性；
* 可以传入通配符""去匹配所有属性，例如：['']；
* 在属性的前或后添加"*",可以匹配特定的属性. (例如['*position*'] 会匹配 background-position-y)
* 在特定属性前加 "!"，将不转换该属性的单位 . 例如: ['*', '!letter-spacing']，将不转换 letter-spacing"!" 和 ""可以组合使用， 例如: ['', '!font*']，将不转换 font-size 以及 font-weight 等属性

```

> viewportUnit (String) 希望使用的视口单位

> fontViewportUnit (String) 字体使用的视口单位

> selectorBlackList (Array) 需要忽略的 CSS 选择器，不会转为视口单位，使用原有的 px 等单位。

```js
* 如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配
* 例如 selectorBlackList 为 ['body'] 的话， 那么 .body-class 就会被忽略
* 如果传入的值为正则表达式的话，那么就会依据 CSS 选择器是否匹配该正则
* 例如 selectorBlackList 为 [/^body$/] , 那么 body 会被忽略，而 .body 不会
```

> minPixelValue (Number) 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换

> mediaQuery (Boolean) 媒体查询里的单位是否需要转换单位

> replace (Boolean) 是否直接更换属性值，而不添加备用属性

> exclude (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件

```js

* 如果值是一个正则表达式，那么匹配这个正则的文件会被忽略
* 如果传入的值是一个数组，那么数组里的值必须为正则

```

> landscape (Boolean) 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)

> landscapeUnit (String) 横屏时使用的单位

> landscapeWidth (Number) 横屏时使用的视口宽度

> P.S. 所有参数都可以传入一个函数，动态改变参数 示例

```js
{
  viewportWidth(rule: PostCss.Rule){
    const file = rule.source?.input.file;
    if (file?.includes('main')) return 750;
    return 375;
  }
}

```

> 使用 PostCss

```js
* PostCSS是一款使用JavaScript插件对CSS实现转换的工具
* PostCSS拥有非常强大的插件，典型的比如autoprefixer、cssnext、css modules等。
  * autoprefixer 为浏览器加前缀
  * postcss-px2vp 把px 转换成vw vh
  * postcss-normalize 初始化html标签样式 比如margin: 0; padding: 0;

* PostCSS插件的处理方式类似CSS预处理器，而非预处理器和后处理器。
* PostCSS并非优化CSS的工具，语法也并非CSS的新式语法。
```

> Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中。可直接配置css.postcss选项即可。Vite将自动在*.vue文件中所有的style标签以及所有导入的.css文件中应用PostCSS.


```js
// vite.config.js 配置方式

import postcsspx2vp from 'postcss-px2vp'
import autoprefixer from 'autoprefixer'
const path = require('path')

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcsspx2vp(),
        autoprefixer()
      ]
    }
  }
})


```

#### package.json 

```js
// 目标浏览器配置表
// last 2 versions：CanIUse.com追踪的IE最新版本为11,向后兼容两个版本即为10、11
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not dead"
]
```

#### 创建 styles 文件夹盛放样式文件

```js
// 创建初始化标签样式文件 rest.scss
// 创建变量标签文件 variables.scss
// 创建index.scss 引入rest.scss
// 在vite.config.ts 设置styles文件夹别名

resolve: {
    // 设置目录文件夹别名
    alias: {
      '@S': path.resolve(__dirname, './src/styles'),
    }
  },

// 在main.ts 文件引入 index.scss
import '@S/index.scss'
// 创建vue 实例

const app = createApp(App)
// 挂载路由

app.use(router)
app.mount('#app')

```

#### 安装Naive UI


> 安装Naive UI `yarn add naive-ui -D`
> 安装Naive UI 的字体 `yarn add vfonts -D`

```js
// main.ts 配置引入Naive

import { createApp } from 'vue'
import router from '@R/index.ts'
import App from './App.vue'
import '@S/index.scss'
// 引用Navie-ui
import naive from 'naive-ui'
// naive通用字体
import 'vfonts/Lato.css'
// naive等宽字体
import 'vfonts/FiraCode.css'
// 创建vue 实例

const app = createApp(App)
// 挂载路由
app.use(naive)
app.use(router)
app.mount('#app')


// 使用naive 两种方式 按需和全局

// 全局引用方式
<template>
  <h1>{{ msg }}</h1>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="error">Error</n-button>
  </n-space>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  props: {
    msg: {
      type: String,
      required: true,
      default: () => {
        return 'vue3.0架子搭建！！'
      }
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
h1{
  height: 200px;
  line-height: 200px;
}
</style>


// 按需引入naive-ui 方式

// main.ts 注销 
// 全局引用Navie-ui
// import naive from 'naive-ui'
// app.use(naive)

// index.vue 引入方式

<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="error">Error</n-button>
  </n-space>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { NButton, NSpace } from 'naive-ui'
export default defineComponent({
  components: {
    NButton,
    NSpace
  },
  setup: () => {
  }
})
</script>


```

#### 配置404资源找不到路由

```js
// routes.ts 页面
import Home from '@V/index.vue'
import NotFind from '@V/404.vue'
const routes: Array<any> = [
  {
    path: '/', 
    component: Home
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFind,
    meta: {},
  },
]

export default routes

// 新建404页面
<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button>找点乐子吧</n-button>
    </template>
  </n-result>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { NButton, NResult } from 'naive-ui'
export default defineComponent({
  name: '404',
  props: {
  },
  components: {
    NButton,
    NResult
  },
  setup: () => {
  }
})
</script>

<style scoped>

</style>


```

## Axios APi 设计安装

#### 安装axios.js `yarn add -D axios`

```js
// 1. 在src目录创建api文件夹
// 2. 创建axios.ts 文件
import axios , { AxiosInstance, AxiosStatic, AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise} from 'axios'
import { getToken } from '@U/index.ts'
import { Option } from 'ant-design-vue/lib/vc-select'
interface Option {
  url: string,
  data: unknown,
  method: string,
  baseURL: string,
  headers: unknown
}
type Options = Partial<Option> & AxiosRequestConfig

interface APIInteface {
  baseURL?: string,
  queue?: Object,
  HeadConfig<Option>(),
  Destroy(url: string): void,
  RefreshToken(option: any): void,
  LoginOut(): void,
  Interceptors(axiosApi: AxiosInstance, options: Options): void,
  ResError(error: AxiosError): void,
  Api(options: Options): AxiosPromise<any>
}

// 1 创建Api class实例

class API implements APIInteface {
  // 基础的ip地址，一般代理使用
  public baseURL?: string
  // 收集当前请求中的api---url地址
  public queue?: object
  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.queue = {}
  }

  // 配置请求头
  HeadConfig <Option>()  {
    let headConfig = {
      baseURL: this.baseURL,
      headers: {
        'x-access-token': getToken(),
      }
    }
    return headConfig
  }

  // 销毁请求生命周期
  Destroy (url: string) {
    delete this.queue[url]
  }

  // 无缝换取新token
  RefreshToken (option: any) {
    /**
     * A. 解题思路
     * 1. 获取换取token的参数
     * 2. 发送axios请求
     * 3. 继续执行未完成的请求
     * 
     */
    let token = getToken()
  }

  // 退出登录函数
  LoginOut () {
    /**
     * 1. 封装成退出登录util工具函数
     * 2. 两种情况 1. 需要请求退出登录api 2. 直接清空本地信息
     * 3. 跳转指定路径 如： login页，或者回跳主站指定域名
     */
  }

  // 请求处理如：请求拦截响应拦截

  Interceptors (axiosApi: AxiosInstance, options: any) {
    // 请求拦截
    axiosApi.interceptors.request.use((config: AxiosRequestConfig) => {
      // 添加全局的loading...
      console.log(config)
      return config
    }, error => {
      // 请求拦截出错抛出错误栈
      // 是否添加全局错误栈吐司 （吐司最好做一下等级区分）

      return Promise.reject(error)
    })

    // 响应拦截
    axiosApi.interceptors.response.use((res: AxiosResponse<any>) => {
      debugger
      return Promise.resolve(res)
    }, (error: AxiosError) => {
      this.ResError(error)
    })
  }
  
  // 响应错误处理函数
  ResError (error: AxiosError) {

    let ErrorInfo: any = error.response
    // 判断请求异常信息中是否含有超时timeout字符串 处理请求超时 
    if (error && error.message && error.message.includes('timeout')) {
      // (window as any).$message.error('网络请求超时')
    }
    // 判断错误码返回逻辑
    switch(ErrorInfo) {
      case 401:
        // (window as any).$message.error('网络请求无权限')
        break
      case 404:
        // (window as any).$message.error('网络接口找不到')
        break
      default :
        // (window as any).$message.error('网络接口找不到')
    }
  }

  // 创建请求抛出方法request
  Api (options: Options) {
    const axiosApi: AxiosInstance = axios.create()
    options = Object.assign(this.HeadConfig(), options, { timeout: 60000 })
    this.Interceptors(axiosApi, options )
    return axiosApi(options)
  }

}


export {
  APIInteface
}
export default API

// 创建api.ts 实例化API
import API from './axios'
import config from '@SRC/config/index.ts'
const baseURL: string = config.baseURL
const axios = new API(baseURL)
export default axios

// 创建login登录接口请求

import axios from './api'
import { GETEWAY } from '../config/index'
const user = GETEWAY.user ? GETEWAY.user : ''

// 登录接口
export const loginApi = (data) => {
  return axios.Api({
    url: `${user}/login`,
    data,
    method: 'post'
  })
}



```







