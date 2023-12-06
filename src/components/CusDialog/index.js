import Vue from 'vue';
import customDialog from './dialog.vue';

const modal = Vue.extend(customDialog);


let instance = new modal({}).$mount();

document.body.appendChild(instance.$el);

customDialog.show = function (option = {}) {
  Object.assign(instance, option, { isShow: true });
}

customDialog.close = function (option = {}) {
  Object.assign(instance, option, { isShow: false });
}


export default customDialog;

