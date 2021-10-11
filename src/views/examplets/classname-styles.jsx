import { defineComponent, reactive, ref } from 'vue'
import styles from './classname-styles.module.css'


export default defineComponent({
  name: 'ClassnameStyles',
  setup() {
    console.log(styles)
    const classNames = ref(styles['dcw-classname'])
    const classnamesChange = () => {
      classNames.value = styles['dcw-change-calssname']
    }
    const styleNames = reactive({
      color: 'red',
      fontSize: '16px'
    })
    const stylenamesChange = () => {
      styleNames.color = 'yellow'
      styleNames.fontSize = '36px'
    }
    return {
      classNames,
      classnamesChange,
      styleNames,
      stylenamesChange
    }
  },
  render() {
    return (
      <div> 
        classname: <span className={this.classNames} class={this.classNames}>{ this.classNames }</span>

        <br/>
        stylename: <span style={this.styleNames}>{ this.styleNames.color } ---- { this.styleNames.fontSize }</span>
        <br/>
        <br/>
        <button onClick={this.classnamesChange}>修改classname</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.stylenamesChange}>修改style</button>
        <br/>
      </div>
    )
  }
})