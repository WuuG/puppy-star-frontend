<template>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
import LayoutHeader from "./chil-comps/LayoutHeader.vue";

export default {
  name: "Layout",
  components: {
    LayoutHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>