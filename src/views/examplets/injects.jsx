import { defineComponent, render, inject, ref, useAttrs } from 'vue'
import img from '@SRC/assets/logo.png'

const Inject = defineComponent({
  name: 'Injexts',
  props: {
    name: String
  },
  setup(props, { attrs, emit, expose}) {
    const names = ref(props.name)
    const dcw = inject('dcw');
    
    const injectChange = () => {
      setTimeout(() => {
        dcw.value = 'scope-set-test'
      }, 3000)
      
    }
    
    const codeHtml = ref(`
      interface InjectionKey<T> extends Symbol {}

      function provide<T>(key: InjectionKey<T> | string, value: T): void
    
      // 未传，使用缺省值
      function inject<T>(key: InjectionKey<T> | string): T | undefined
      // 传入了默认值
      function inject<T>(key: InjectionKey<T> | string, defaultValue: T): T
    `)
    expose({
      injectChange
    })
    return {
      dcw,
      codeHtml
    }
  },
  render(...args) {
    const attrs = useAttrs()
    const { name } = this.$props
    return (
      <div>
        <img src={ img } alt={ name } />
        dcw: { this.dcw }-- name: { name}
        <br/>
        <textarea id="" cols="70" rows="20">{ this.codeHtml }</textarea>
      </div>
    )
  }
})

export default Inject