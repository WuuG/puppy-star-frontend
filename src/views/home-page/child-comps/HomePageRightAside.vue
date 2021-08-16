<template>
  <app-right-aside>
    <template #top> 右侧边栏 top </template>
    <template #bottom> 右侧边栏 bottom </template>
  </app-right-aside>
</template>

<script>
import AppRightAside from "@/components/aside/AppRightAside.vue";
export default {
  name: "HomePageRigthAside",
  components: {
    AppRightAside,
  },
};
</script>

<style lang="scss" scoped>
</style>