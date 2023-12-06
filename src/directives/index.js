import permission from './permission'
const directives = {
  permission
}

export default {
  install(Vue) {
    for (const key in directives) {
      Vue.directive(key, directives[key])
    }
  }
}
