<template>
  <div>
    <div class="section-wrap">
      <div class="label">全局弹框</div>
      <div @click="showDlg">打开弹框</div>
    </div>
    <div class="section-wrap">
      <div class="label">自定义全局指令</div>
      <div v-if="showAddBtn" v-permission="addBtnCode">新增</div>
      <div @click="showAddBtn=!showAddBtn">切换新增按钮显隐</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  data() {
    return {
      showAddBtn: true,
      addBtnCode: 'system:add:btn'
    }
  },
  methods: {
    showDlg() {
      this.$cusDialog.show({
        title: '标题',
        content: '提示内容',
        onOK: () =>
          new Promise((res, rej) => {
            setTimeout(() => rej(), 2000)
          })
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
