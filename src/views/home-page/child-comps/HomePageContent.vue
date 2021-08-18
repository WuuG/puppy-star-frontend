<template>
  <!-- merge时保留 -->
  <content-show-card
    :user="user"
    :content="content"
    :images="images"
  ></content-show-card>
</template>

<script>
import ContentShowCard from "@/components/content/ContentShowCard";
export default {
  name: "HomePageContent",
  data() {
    return {
      //#region 一个卡片中的内容
      user: {
        name: "小明哥哥",
        avatar:
          "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg", //路径
        id: "001",
      },
      content: "这是内容。",
      images: [
        "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg",
        "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg",
        "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg",
        "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg",
        "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg",
        "https://img2.baidu.com/it/u=1070003001,653753576&fm=26&fmt=auto&gp=0.jpg",
        "https://img2.baidu.com/it/u=1070003001,653753576&fm=26&fmt=auto&gp=0.jpg",
      ], //src数组
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