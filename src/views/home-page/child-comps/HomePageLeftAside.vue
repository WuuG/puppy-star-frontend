<template>
  <nav-menu :data="data" @select="onSelect"></nav-menu>
</template>

<script>
import navMenu from "@/components/nav/NavMenu.vue";
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
          title: "自定义",
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
  methods: {
    onSelect(index) {
      console.log(`根据index${index} 发送请求`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>