<template>
  <app-left-aside>
    <template #default>使用左侧默认插槽</template>
  </app-left-aside>
</template>

<script>
import AppLeftAside from "@/components/aside/AppLeftAside.vue";
export default {
  name: "HomePageLeftAside",
  components: {
    AppLeftAside,
  },
};
</script>

<style lang="scss" scoped>
</style>