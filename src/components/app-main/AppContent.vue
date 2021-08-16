<template>
  <el-col
    :span="24"
    :md="17"
    :sm="20"
    style="background-color: green"
    class="app-content"
  >
    <slot></slot>
  </el-col>
</template>

<script>
export default {
  name: "AppContent",
  props: {
    showDefault: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-content {
  height: 4000px;
}
</style>