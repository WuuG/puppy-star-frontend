<template>
  <div>
    <!-- merge时保留 -->
    <content-show-card
      :user="user"
      :content="content"
      :images="images"
    ></content-show-card>
    <!-- merge时保留 -->
    <content-show-card
      :user="user"
      :content="content"
      :images="images"
    ></content-show-card>
  </div>
</template>

<script>
import ContentShowCard from "@/components/content/ContentShowCard";
const testPic =
  "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg";

export default {
  name: "HomePageContent",
  data() {
    return {
      //#region 一个卡片中的内容
      user: {
        name: "小明哥哥",
        other: "发布于上海",
        avatar:
          "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg", //路径
        id: "001",
      },
      content: "这是内容。",
      images: [testPic, testPic, testPic, testPic, testPic], //src数组
      //#endregion
    };
  },
  components: {
    ContentShowCard,
  },
};
</script>

<style lang="scss" scoped>
</style>