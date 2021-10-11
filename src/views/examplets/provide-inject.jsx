import { defineComponent, provide, onMounted, ref } from 'vue'
import injexts from './injects'

const ProvideInject = defineComponent({
  name: 'Provideinject',
  setup(props, { attrs, emit, expose}) {
    
    const dcw = ref('provide-dcw')
    provide('dcw', dcw)
    setTimeout(() => {
      dcw.value = 'provide-dcw-set'
    }, 2000)
    const onchangedcw = () => {
      dcw.value = 'change-provide-dcw-set'
    }

    onMounted(()=> {
      console.log(scopeTest.value, '---')
      scopeTest.value.injectChange()
    }) 
    const scopeTest = ref(null)
    

    return { dcw, onchangedcw, scopeTest }
  },
  render() {
    return (
      <div>
        { this.dcw }
        <button onClick={this.onchangedcw}>修改provide</button>
        <injexts name='dcw-provide' ref="scopeTest" ></injexts>
      </div>
    )
  }
})

export default ProvideInject