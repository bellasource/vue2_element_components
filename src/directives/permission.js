const codeArr = ['system:add:btn', 'system:delete:btn']
const permission = {
  // 指令绑定到元素时调用,可能无法获取父元素
  bind(el, binding) {
    console.log(el, binding, 'bind')
  },
  // 元素插入父节点时调用
  inserted(el, binding) {
    console.log('inserted')
    if (!codeArr.includes(binding.value)) {
      el.parentNode.removeChild(el)
    }
  },
  // VNode更新时调用
  update() {
    console.log('update')
  },
  // VNode更新后调用
  componentUpdated() {
    console.log('componentUpdated')
  },
  // 指令所在dom被销毁时触发
  unbind() {
    console.log('unbind')
  }
}

export default permission

