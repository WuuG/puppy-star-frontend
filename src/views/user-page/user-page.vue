<template>
  <content-layout>
    <template #left>
      <UserPageLeftAside></UserPageLeftAside>
    </template>
    <template #middle>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </template>
    <template #right>
      <UserPageRightAside></UserPageRightAside>
    </template>
  </content-layout>
</template>

<script>
import ContentLayout from "@/components/content-layout/ContentLayout.vue";
import UserPageRightAside from "./child-comps/UserPageRightAside.vue";
import UserPageLeftAside from "./child-comps/UserPageLeftAside.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    ContentLayout,
    UserPageLeftAside,
    UserPageRightAside,
  },
};
</script>

<style lang="scss" scoped>
</style>