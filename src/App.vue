<!--
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-10 14:15:10
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-11 09:57:22
 * @FilePath: \vue2sass\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-link to="/">切换主题</router-link> |
    <router-link to="/about">表单嵌套表格校验</router-link>
    <hr />
    <router-view />
  </div>
</template>
<script>
  export default {
    mounted() {
      this.setTheme('offcial')
    },
    methods: {
      setTheme(value) {
        window.document.documentElement.setAttribute('data-theme', value)
      },
    },
  }
</script>
<style lang="scss">
  @import './assets/theme/index.scss';
  .content {
    @include themify {
      color: themed('font-color');
    }
  }

  $color: white;
  @mixin colors($color: blue) {
    background-color: $color;
    @content;
    border-color: $color;
  }
  .colors {
    @include colors {
      color: $color;
    }
  }
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
