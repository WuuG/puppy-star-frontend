<template>
  <div>
    <el-button type="primary" @click="click">测试按钮</el-button>
    <index-box :imageUpload="true" :emojiPicker="true" class="p-5"></index-box>

    <!-- merge时保留 -->
    <content-show-card
      :authorId="id"
      :content="content"
      :images="images"
    ></content-show-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import IndexBox from "@/components/content/IndexBox.vue";
import ContentShowCard from "@/components/content/ContentShowCard";

const testPic =
  "https://pic3.zhimg.com/22b797a33ce00581e37f9376cf37609b_is.jpg";

export default {
  name: "Subscriptions",
  data() {
    return {
      //#region 一个卡片中的内容
      id: "611e97b50b6f0e68c9084734",
      content: "这是内容。",
      images: [testPic, testPic, testPic, testPic, testPic], //src数组
      //#endregion
    };
  },
  computed: {
    ...mapGetters("article", ["articleArray"]),
  },
  components: {
    IndexBox,
    ContentShowCard,
  },
  methods: {
    click() {
      console.log(this.articleArray);
    },
  },
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>