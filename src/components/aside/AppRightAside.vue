<template>
  <el-col
    style="background-color: pink"
    class="hidden-md-and-down app-right-aside"
  >
    <slot name="top"></slot>
    <template v-if="showDefault">
      <span>默认渲染</span>
    </template>
    <slot name="bottom"></slot>
  </el-col>
</template>

<script>
export default {
  name: "AppRightAside",
  props: {
    showDefault: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-right-aside {
  flex: 280px;
  width: 280px;
  height: 1200px;
}
</style>