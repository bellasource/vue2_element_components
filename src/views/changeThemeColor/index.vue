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
    <div class="section-wrap">
      <div class="label">单行文本换行</div>
      <div style="width: 80px">
        <TextOverTooltip
          ref-name="testName1"
          class-name="fs20"
          content="测试品牌、测试品牌、测试品牌、测试品牌、测试品牌、测试品牌"
        />
      </div>
    </div>
    <div class="section-wrap">
      <div class="label">多行文本换行</div>
      <div style="width: 80px">
        <el-tooltip
          v-model="mulData.showTooltip"
          placement="top"
          :open-delay="500"
          effect="dark"
          :disabled="!mulData.showTooltip"
        >
          <div slot="content" style="white-space: pre-wrap;" v-text="mulData.description" />
          <div class="ellipse-two" @mouseenter="showTips($event,mulData)">{{ mulData.description }}</div>
        </el-tooltip>
      </div>
    </div>
    <div class="section-wrap">
      <div class="label">
        <svg-icon icon-class="example" /><span
          @click="setTheme('offcial')"
        >绿色主题</span>
        |
        <svg-icon icon-class="example" /><span
          @click="setTheme('app')"
        >灰色主题</span>
      </div>
      <div class="content">正文内容</div>
    </div>
  </div>
</template>

<script>
/**
 * 切换主题色（基于scss，给根元素添加data-theme变量)
 * 1. styles/theme中定义主题色变量
 * 2. npm i sass-resources-loader -D, vue.config中配置全局样式文件
 * 3. 切换主题： window.document.documentElement.setAttribute('data-theme', value)
 */
import TextOverTooltip from '@/components/TextOverTooltip'
export default {
  components: { TextOverTooltip },
  data() {
    return {
      mulData: {
        showTooltip: false,
        description: '测试品牌测试品牌、测试品牌、测试品牌、测试品牌、测试品牌'
      }
    }
  },
  mounted() {
    this.setTheme('offcial')
  },
  methods: {
    setTheme(value) {
      window.document.documentElement.setAttribute('data-theme', value)
    },
    // 固定盒子高度
    showTips(obj, row) {
      const parentNode = obj.target.parentNode
      const TemporaryTag = document.createElement('span')
      TemporaryTag.innerText = row.description
      TemporaryTag.className = 'getTextWidth over-tooltip'
      parentNode.appendChild(TemporaryTag)
      // 内容高度
      const curHeight = parentNode.querySelector('.getTextWidth').offsetHeight
      parentNode.querySelector('.getTextWidth').remove()
      // 盒子高度
      const cellHeight = obj.target.offsetHeight
      this.$set(row, 'showTooltip', curHeight > cellHeight)
      console.log(row.showTooltip, '是否展示')
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  @include themify() {
    color: themed("font-color");
  }
}
.ellipse-two {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
