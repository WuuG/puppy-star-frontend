<template>
  <div>
    <index-box :imageUpload="true" :emojiPicker="true" class="p-5"></index-box>

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
  "https://pic3.zhimg.com/22b797a33ce00581e37f9376cf37609b_is.jpg";

export default {
  name: "Subscriptions",
  data() {
    return {
      //#region 一个卡片中的内容
      user: {
        name: "小明哥哥",
        other: "3小时之前 发布于上海",
        avatar: testPic, //路径
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