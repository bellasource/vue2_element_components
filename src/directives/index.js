import permission from './permission'
import draggable from './draggable'
import preventReClick from './preventReClick'
const directives = {
  permission,
  draggable,
  preventReClick
}

export default {
  install(Vue) {
    for (const key in directives) {
      Vue.directive(key, directives[key])
    }
  }
}
