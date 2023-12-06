import CusDialog from './CusDialog/index'
export default {
  install: (Vue) => {
    Vue.prototype.$cusDialog = CusDialog
  }
}
