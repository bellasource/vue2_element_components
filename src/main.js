/*
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-10 14:15:10
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-17 11:38:51
 * @FilePath: \vue2sass\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/icons'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
