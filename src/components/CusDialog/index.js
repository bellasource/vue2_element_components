import Vue from 'vue'
import customDialog from './dialog.vue'

const Modal = Vue.extend(customDialog)

const instance = new Modal({}).$mount()

document.body.appendChild(instance.$el)

customDialog.show = function(option = {}) {
  Object.assign(instance, option, { isShow: true })
}

customDialog.close = function(option = {}) {
  Object.assign(instance, option, { isShow: false })
}

export default customDialog

