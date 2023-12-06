<template>
  <div v-if="isShow">
    <div class="cusdlg-mask" />
    <div class="cusdlg-model" :style="{ width: width }">
      <div class="cusdlg-body">
        <div v-if="title" class="cusdlg-title">{{ title }}</div>
        <div class="cusdlg-content">{{ content }}</div>
        <div class="cusdlg-confirm">
          <div class="confirm-btn" @click="handleConfirm">{{ okText }}</div>
        </div>
      </div>
      <div class="cusdlg-close">
        <img
          class="cusdlg-close-img"
          src="./close.png"
          alt="关闭弹框"
          @click="handleCancel"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CusDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: '70%',
      isShow: false, // 弹框显隐
      title: '', // 标题
      content: '', // 提示内容内容
      okText: '知道了',
      showCancel: true,
      btnDisabled: false
    }
  },
  watch: {
    visible: {
      handler(val) {
        this.isShow = val
      },
      immediate: true
    }
  },
  methods: {
    async handleConfirm() {
      try {
        this.btnDisabled = true
        if (this.onOK) {
          await this.onOK()
        }
        this.close()
      } catch {
        this.btnDisabled = false
      }
    },
    async handleCancel() {
      try {
        this.btnDisabled = true
        if (this.onCancel) {
          await this.onCancel()
        }
        this.close()
      } catch {
        this.btnDisabled = false
      }
    },
    close() {
      this.btnDisabled = false
      this.isShow = false
      this.$emit('update:visible', this.isShow)
    }
  }
}
</script>
<style lang="scss" scoped>
.cusdlg {
  &-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  &-model {
    font-size: 14px;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
  }
  &-body {
    background: #fff;
    padding: 20px 16px;
    border-radius: 9px;
  }
  &-title {
    color: rgb(249, 86, 68);
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
  }
  &-content {
    padding-bottom: 20px;
    max-height: 50vh;
    overflow-y: auto;
  }
  &-confirm {
  }
  &-close {
    text-align: center;
    &-img {
      width: 26px;
      height: 26px;
      margin-top: 30px;
    }
  }
}
.confirm-btn {
  display: inline-block;
  padding: 0 16px;
  height: 30px;
  line-height: 30px;
  background: rgb(249, 86, 68);
  color: #fff;
  border-radius: 15px;
}
</style>
