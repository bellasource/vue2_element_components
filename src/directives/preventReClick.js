// 防止按钮在一段时间内多次点击
import { Message } from 'element-ui'
const preventReClick = {
  inserted(el, binding) {
    el.addEventListener('click', function() {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 1000)
      } else {
        Message.warning('操作频繁')
      }
    })
  }
}
export default preventReClick
