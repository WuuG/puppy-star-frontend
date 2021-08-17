<template>
  <nav-menu :data="data"></nav-menu>
</template>

<script>
import navMenu from "@/components/nav/navMenu.vue";
export default {
  name: "HomePageLeftAside",
  data() {
    return {
      data: [
        {
          title: "首页",
          sidebarData: [
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
              children: [
                {
                  title: "最近动态",
                  icon: "el-icon-s-order",
                  index: "login",
                },
              ],
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
            },
          ],
        },
        {
          title: "首页",
          sidebarData: [
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
              children: [
                {
                  title: "最近动态",
                  icon: "el-icon-s-order",
                  index: "home",
                },
              ],
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "home",
            },
          ],
        },
      ],
    };
  },
  components: {
    navMenu,
  },
};
</script>

<style lang="scss" scoped>
</style>