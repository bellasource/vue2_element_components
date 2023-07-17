/*
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-10 14:15:10
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-17 16:58:10
 * @FilePath: \vue2sass\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
console.log(__dirname, '__dirname')


const CleanWebpackPlugin = require('./plugins/CleanWebpackPlugin')
function resolve(dir) {
  return path.join(__dirname, dir);
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CleanWebpackPlugin()
    ],
  },

  chainWebpack(config) {
    // 排除src/icons目录中vue-cli的默认处理
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    // 
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({symbolId: 'icon-[name]'})
      .end()
  },
})
