<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>
<script>
import LayoutHeader from "./chil-comps/LayoutHeader.vue";
import BackToTop from "../../components/footer/backToTop.vue";

export default {
  name: "Layout",
  components: {
    LayoutHeader,
    BackToTop,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>