<template>
  <div class="text-over-tooltip-components">
    <el-tooltip :effect="effect" :disabled="isDisabledTooltip" :content="content" :placement="placement">
      <div class="ellipsis" :class="className" @mouseover="onMouseOver(refName)">
        <span :ref="refName">{{ content }}</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
// 使用： <TextOverTooltip ref-name="testName1" class-name="fs20" content="11测试品牌、测试品牌、11测试品牌、11测试品牌、11测试品牌、11测试品牌" />
export default {
  name: 'TextOverTooltip',
  props: {
    content: String,
    // 设置父元素的样式
    className: String,
    // 子元素标识（如在同一页面中调用多次组件，此参数不可重复）
    refName: String,
    // 默认提供的主题 dark/light
    effect: {
      type: String,
      default: () => {
        return 'dark';
      }
    },
    placement: {
      type: String,
      default: () => {
        return 'bottom';
      }
    },
  },
  data() {
    return {
      isDisabledTooltip: true // 是否需要禁止提示
    };
  },
  methods: {
    // 移入事件: 判断内容的宽度contentWidth是否大于父级的宽度
    onMouseOver(str) {
      const parentWidth = this.$refs[str].parentNode.offsetWidth;
      const contentWidth = this.$refs[str].offsetWidth;
      this.isDisabledTooltip = contentWidth <= parentWidth;
    }
  }
};
</script>

<style lang="less" scoped>
.text-over-tooltip-components{
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
}
</style>

