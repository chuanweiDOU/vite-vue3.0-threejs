<template>
  <h1> computed--教程 </h1>
  <div @click="clickDIv">computed---{{ dcwadd }}</div>
  <div>getSetComputed ===== {{ getSetComputed }}</div>

  <textarea readonly v-model="codeHtml" style="width:100%; height: 1000px;padding: 16px; font-size: 26px">
    
  </textarea>
</template>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  
  const codeHtml = ref(`
  // computes函数实现逻辑
  export function computed<T>(
      getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>
    ) {
      let getter: ComputedGetter<T>
      let setter: ComputedSetter<T>

      // 如果传入是 function 说明是只读 computed
      if (isFunction(getterOrOptions)) {
        getter = getterOrOptions
        setter = __DEV__
          ? () => {
              console.warn('Write operation failed: computed value is readonly')
            }
          : NOOP
      } else {
        // 不是方法说明是自定义的 getter setter 
        getter = getterOrOptions.get
        setter = getterOrOptions.set
      }

      let dirty = true
      let value: T
      let computed: ComputedRef<T>

      // 创建 effect, 我们在看 effect 源码时知道了传入 lazy 代表不会立即执行，computed 表明 computed 上游依赖改变的时候，会优先 trigger runner effect, scheduler 表示 effect trigger 的时候会调用 scheduler 而不是直接调用 effect
      const runner = effect(getter, {
        lazy: true,
        // mark effect as computed so that it gets priority during trigger
        computed: true,
        scheduler: () => {
          // 在触发更新时把dirty置为true, 不会立即更新 
          if (!dirty) {
            dirty = true
            trigger(computed, TriggerOpTypes.SET, 'value')
          }
        }
      })

      // 构造一个 computed 返回
      computed = {
        __v_isRef: true,
        // expose effect so computed can be stopped
        effect: runner,
        get value() {
          // dirty为ture, get操作时，执行effect获取最新值
          // 
          if (dirty) {
            value = runner()
            dirty = false
          }
          // dirty为false, 表示值未更新，直接返回 
          track(computed, TrackOpTypes.GET, 'value')
          return value
        },
        set value(newValue: T) {
          setter(newValue)
        }
      } as any
      return computed
    }`)
    const dcw = ref(0)
    const dcw1 = ref(9)
    const dcwadd = computed(() => {
      return dcw.value + dcw1.value
    })
    dcw.value ++
    dcw1.value ++
    const clickDIv = () => {
      getSetComputed.value = 0.0666666
    }
  onMounted(() => {
    setTimeout(() => {
      dcw.value = 90
    }, 1000)
  })

  const getSetComputed = computed({
    get: () => {
      console.log('get---computed')
      return dcw.value
    },
    set: val => {
      console.log('set---computed')
      return dcw.value = val
    }
  })
</script>
