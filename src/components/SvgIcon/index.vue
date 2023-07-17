<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :style="{ width: fontSize, height: fontSize }"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'svg-icon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
      },
      size: {
        type: [Number, String],
        default: 14,
      },
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
      fontSize() {
        return typeof this.size === 'number' ? this.size + 'px' : this.size
      },
    },
  }
</script>

<style scoped>
  .svg-icon {
    fill: currentColor;
    overflow: hidden;
  }
</style>
