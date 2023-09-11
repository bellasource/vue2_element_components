<!--
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-10 14:15:10
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-17 14:19:42
 * @FilePath: \vue2sass\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div style="font-size:16px;">
      <svg-icon icon-class="example" /><span @click="setTheme('offcial')">绿色主题</span>
      |
      <svg-icon icon-class="example" /><span @click="setTheme('app')">灰色主题</span>
    </div>
    <div class="content">正文内容</div>
  </div>
</template>

<script>
/**
 * 切换主题色（基于scss，给根元素添加data-theme变量)
 * 1. styles/theme中定义主题色变量
 * 2. app.vue中引入index.scss文件
 * 3. 切换主题： window.document.documentElement.setAttribute('data-theme', value)
 */
export default {
  mounted() {
    this.setTheme('offcial')
  },
  methods: {
    setTheme(value) {
      console.log(value, '切换主题')
      window.document.documentElement.setAttribute('data-theme', value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .content {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    margin: $menuHover;
  }
</style>
