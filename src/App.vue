<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  // @import './styles/theme/index.scss';
  @import './styles/theme/index.scss';
  .content {
    @include themify {
      color: themed('font-color');
    }
  }
</style>
