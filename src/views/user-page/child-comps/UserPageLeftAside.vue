<template>
  <nav-menu
    :data="data"
    @select="onSelect"
    style="padding-top: 10px"
  ></nav-menu>
</template>

<script>
import navMenu from "@/components/nav/NavMenus.vue";
export default {
  name: "UserPageLeftAside",
  data() {
    return {
      data: [
        {
          title: "个人主页",
          sidebarData: [
            {
              title: "我的主页",
              icon: "el-icon-user-solid",
              index: "myHomePage",
            },
            {
              title: "我的收藏",
              icon: "el-icon-star-on",
              index: "myCollection",
            },
            {
              title: "我的关注",
              icon: "el-icon-s-opportunity",
              index: "myAttention",
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