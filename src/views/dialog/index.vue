<template>
  <div>
    <div @click="showDlg">打开弹框</div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  data() {
    return {}
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
