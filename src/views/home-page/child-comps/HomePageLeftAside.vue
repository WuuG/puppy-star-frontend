<template>
  <nav-menu
    :data="data"
    :page-title="pageTitle"
    :default-active="type"
    :router="true"
  ></nav-menu>
</template>

<script>
import navMenu from "@/components/nav/NavMenus.vue";

export default {
  name: "HomePageLeftAside",
  data() {
    return {
      pageTitle: "首页",
      data: [
        {
          sidebarData: [
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "recently",
            },
            {
              title: "最新动态",
              icon: "el-icon-s-order",
              index: "new",
            },
            {
              title: "特别关注",
              icon: "el-icon-s-order",
              index: "specialy",
            },
            {
              title: "好友圈",
              icon: "el-icon-s-order",
              index: "friends",
            },
          ],
        },
        {
          title: "自定义",
          sidebarData: [
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "1",
              children: [
                {
                  title: "最近动态",
                  icon: "el-icon-s-order",
                  index: "2",
                },
              ],
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "3",
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "4",
            },
            {
              title: "最近动态",
              icon: "el-icon-s-order",
              index: "5",
            },
          ],
        },
      ],
    };
  },
  computed: {
    type() {
      return this.$route.params.type;
    },
  },
  components: {
    navMenu,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>