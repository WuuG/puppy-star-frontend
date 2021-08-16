<template>
  <el-container class="app-container">
    <home-page-left-aside></home-page-left-aside>
    <el-main class="content">
      <el-row class="app-main" type="flex">
        <home-page-content></home-page-content>
        <home-page-right-aside></home-page-right-aside>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import HomePageContent from "./child-comps/HomePageContent.vue";
import HomePageRightAside from "./child-comps/HomePageRightAside.vue";
import HomePageLeftAside from "./child-comps/HomePageLeftAside.vue";
export default {
  name: "HomePage",
  components: {
    HomePageContent,
    HomePageRightAside,
    HomePageLeftAside,
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  flex-wrap: nowrap;
  width: 100%;
}
</style>