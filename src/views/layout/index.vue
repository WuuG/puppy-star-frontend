<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <layout-header></layout-header>
    </el-header>

    <!-- 侧边栏 -->
    <el-container class="app-container">
      <el-aside style="background-color: red">侧边</el-aside>
      <el-main class="content">
        <el-row :gutter="10" class="content" type="flex">
          <el-col :span="24" style="background-color: green" class="long"
            >2</el-col
          >
          <el-col
            style="background-color: pink"
            class="long hidden-md-and-down right-aside"
            >3</el-col
          >
        </el-row>
      </el-main>
    </el-container>
    <!-- 回到顶部 -->
    <back-to-top></back-to-top>
  </el-container>
</template>
<script>
import LayoutHeader from "./chil-comps/LayoutHeader.vue";
import "element-ui/lib/theme-chalk/display.css";
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
.long {
  height: 1200px;
  widows: 400px;
}
.content {
  flex-wrap: nowrap;
  width: 100%;
  .right-aside {
    flex: 280px;
  }
}
</style>