<template>
  <div>
    <el-button type="primary" @click="click">测试按钮</el-button>
    <index-box :imageUpload="true" :emojiPicker="true" class="p-5"></index-box>

    <template>
      <content-show-card
        v-for="article in articleArray"
        :key="article._id"
        :authorId="article.id"
        :content="article.text"
        :images="article.images"
        :comments="article.comments"
      ></content-show-card>
    </template>
    <el-empty
      class="bg-white my-3"
      v-if="articleArray.length === 0"
      description="未找到新动态"
    ></el-empty>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EVENT from "@/store/mutation-types";

import IndexBox from "@/components/content/IndexBox.vue";
import ContentShowCard from "@/components/content/ContentShowCard";

const articleNumber = 2;
const articlePrams = {
  skip: 0,
  limit: articleNumber,
};

export default {
  name: "Subscriptions",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("article", ["articleArray"]),
  },
  components: {
    IndexBox,
    ContentShowCard,
  },
  methods: {
    async click() {
      await this.loadArticle(articlePrams);
      articlePrams.skip += articleNumber;
    },
    ...mapActions("article", {
      loadArticle: EVENT.ARTICLE_GET,
    }),
  },
};
</script>


<style lang="scss" scoped>
.index-box-out {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>