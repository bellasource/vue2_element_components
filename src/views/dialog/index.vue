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
    <div class="section-wrap" style="position: relative;height:100px">
      <div class="label">可拖拽悬浮按钮</div>
      <div v-draggable="handleDraggable" class="draggle-wrap">拖拽</div>
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
    handleDraggable() {
      console.log('被拖拽了')
    },
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
<style lang="scss" scoped>
.draggle-wrap {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ccc;
  position: fixed;
  // position: absolute;
  left: calc(100vw - 70px);
  top: 50vh;
  user-select: none;
  z-index: 9999;

}

</style>
