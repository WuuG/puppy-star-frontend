<template>
  <div id="ALL">
    <ContentShowCard
      :user="{
        name: userInfo.userName,
        avatar: userInfo.userAvatar,
        other: user.other,
      }"
      :content="content"
      :images="images"
    ></ContentShowCard>
  </div>
</template>

<script>
import ContentShowCard from "@/components/content/ContentShowCard.vue";
import { mapState } from "vuex";
const testPic =
  "https://pic3.zhimg.com/22b797a33ce00581e37f9376cf37609b_is.jpg";
export default {
  data() {
    return {
      user: {
        // name: "小明哥哥", //由本用户的用户名替代
        // avatar: "", //路径
        other: "3小时之前 发布于上海",
        id: "001",
      },
      content: "这是内容。",
      images: [testPic, testPic, testPic, testPic, testPic], //src数组
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  components: {
    ContentShowCard,
  },
};
</script>

<style scoped lang="scss">
#ALL {
  width: 100%;
  background-color: #fff;
}
</style>