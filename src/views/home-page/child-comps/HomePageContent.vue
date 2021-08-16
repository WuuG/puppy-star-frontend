<template>
  <app-content>
    <template #default> 使用插槽 </template>
  </app-content>
</template>

<script>
import AppContent from "@/components/app-main/AppContent.vue";
export default {
  name: "HomePageContent",
  components: {
    AppContent,
  },
};
</script>

<style lang="scss" scoped>
</style>