import permission from './permission'
import draggable from './draggable'
const directives = {
  permission,
  draggable
}

export default {
  install(Vue) {
    for (const key in directives) {
      Vue.directive(key, directives[key])
    }
  }
}
