<template>
  <el-container class="app-container">
    <el-aside class="app-aside hidden-xs-only" width="180px">
      <slot name="left"></slot>
    </el-aside>
    <el-main class="app-main">
      <el-col
        :span="24"
        :sm="20"
        :md="17"
        :lg="24"
        class="app-content"
        v-if="showRightAside"
      >
        <slot name="middle"></slot>
      </el-col>
      <el-col :span="24" class="app-content" v-else>
        <slot name="middle"></slot>
      </el-col>
    </el-main>
    <div
      class="app-right-aside hidden-md-and-down"
      v-if="showRightAside"
      width="256px"
    >
      <slot name="right"> </slot>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "ContentLayout",
  props: {
    showRightAside: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  align-items: flex-start;
}
.app-aside,
.app-right-aside {
  position: sticky;
  top: 60px;
  border-radius: 4px;
  margin-top: 20px;
}
.app-aside {
  // 懒得处理侧边栏宽度的问题了
  overflow-x: hidden;
  height: calc(100vh - #{$height-header} - 20px);
  align-self: baseline;
  background-color: #fff;
}

.app-main {
  flex-wrap: nowrap;
  width: 100%;
  .app-content {
    border-radius: 4px;
  }
}
</style>