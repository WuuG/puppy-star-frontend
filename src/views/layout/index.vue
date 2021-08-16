<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="header">
      <layout-header></layout-header>
    </el-header>
    <router-view></router-view>
    <!-- 底部 -->
    <back-to-top></back-to-top>
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
.header {
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>