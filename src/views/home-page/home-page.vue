<template>
  <content-layout>
    <template #left>
      <home-page-left-aside></home-page-left-aside>
    </template>
    <template #middle>
      <home-page-content></home-page-content>
    </template>
    <template #right>
      <home-page-right-aside></home-page-right-aside>
    </template>
  </content-layout>
</template>

<script>
import ContentLayout from "@/components/content-layout/ContentLayout.vue";
import HomePageContent from "./child-comps/HomePageContent.vue";
import HomePageRightAside from "./child-comps/HomePageRightAside.vue";
import HomePageLeftAside from "./child-comps/HomePageLeftAside.vue";
export default {
  name: "HomePage",
  components: {
    HomePageContent,
    HomePageRightAside,
    HomePageLeftAside,
    ContentLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>