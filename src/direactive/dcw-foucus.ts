/***
 * 0.  指令是具有一组生命周期的钩子：
 * 1.  beforeMount() {}, 在绑定元素的父组件挂载之前调用
 * 2.  mounted(el, binding, vnode, prevNode) {} // 绑定元素的父组件挂载时调用 
 *     * 1. el -- 指令绑定到的元素。这可用于直接操作 DOM
 *     * 2. binding -- 包含以下 property 的对象。
 *          . 1. instance  -- 使用指令的组件实例
 *          . 2. value  --- 传递给指令的值。
 *          . 3. oldValue --- 先前的值，仅在 beforeUpdate 和 updated 中可用。值是否已更改都可用
 *          . 4. arg --- 参数传递给指令（如果有）例如在 v-my-directive:foo 中，arg 为 "foo"。
 *          . 5. modifiers  --- 包含修饰符 (如果有) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 {foo: true，bar: true}
 *          . 6. dir --- 一个对象，在注册指令时作为参数传递。
 *      * 3. vnode --- 上面作为 el 参数收到的真实 DOM 元素的对象描述。
 *      * 4. prevNode  --- 上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用。
 * 3.  beforeUpdate () {}, 在包含组件的 VNode 更新之前调用
 * 4.  updated () {}, 在包含组件的 VNode 及其子组件的 VNode 更新后调用。
 * 5.  beforeUnmount() {}, 卸载绑定元素的父组件时调用
 * 6.  unmounted () {} 当指令与元素解除绑定且父组件已卸载时，只调用一次。
 */

export default {
 
  beforeMount () {},
  
  beforeUpdate () {},
  
  mounted(el, binding, vnode, prevNode) {
    el.focus()
    el.value = binding?.value ? `${binding?.value}---dcw` : ''
  },
  
  updated () {},
  
  beforeUnmount() {},
  
  unmounted () {}
}

