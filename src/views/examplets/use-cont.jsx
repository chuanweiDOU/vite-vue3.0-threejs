import { defineComponent, provide, onMounted, ref } from 'vue'
import useCount from '../../util/useCont';

const useCountDemo = defineComponent({
  name: 'UseCountDemo',
  setup(props, { attrs, emit, expose}) {

    const { current: count, add, dec, set, reset } = useCount(8, {
      min: 2,
      max: 15
    })
    let dcw = ref(0)
    const dcwClick = (e) => {
      console.log(typeof e?.target?.value, 'val----')
      set(e?.target?.value)
      // dcw = e?.target?.value
    }
    const msg = ref('Demo useCount')

    onMounted(()=> {
    })
    return {
      count,
      add,
      dec,
      set,
      reset,
      msg,
      dcw,
      dcwClick
    }
  },
  render() {
    return (
      <div>
        <button onClick={this.add}>加add</button>
        <button onClick={this.dec}>减dec</button>
        <button onClick={this.reset}>重置reset</button>
        <input type="text" value={this.dcw} onBlur={this.dcwClick} />
        <div>{this.count}</div>
      </div>
    )
  }
})

export default useCountDemo