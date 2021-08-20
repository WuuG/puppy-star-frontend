<template>
  <div>
    <index-box :imageUpload="true" :emojiPicker="true"></index-box>

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
import IndexBox from "@/components/content/IndexBox.vue";
import ContentShowCard from "@/components/content/ContentShowCard.vue";
const testPic =
  "https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg";

export default {
  name: "Subscriptions",
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
    IndexBox,
    ContentShowCard,
  },
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>