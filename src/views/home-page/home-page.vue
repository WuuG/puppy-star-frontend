<template>
  <content-layout>
    <template #left>
      <home-page-left-aside></home-page-left-aside>
    </template>
    <template #middle>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </template>
    <template #right>
      <home-page-right-aside></home-page-right-aside>
    </template>
  </content-layout>
</template>

<script>
import ContentLayout from "@/components/content-layout/ContentLayout.vue";
import HomePageRightAside from "./child-comps/HomePageRightAside.vue";
import HomePageLeftAside from "./child-comps/HomePageLeftAside.vue";
export default {
  name: "HomePage",
  components: {
    HomePageRightAside,
    HomePageLeftAside,
    ContentLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>