<template>
  <div class="overflow-auto">
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
    <el-empty
      class="bg-white my-3"
      v-show="nomoreShow"
      description="已经没有更多动态啦!"
    ></el-empty>
    <div
      v-show="loadingDisabled && articleArray.length"
      class="flex justify-center"
    >
      <span> <i class="el-icon-loading"></i>动态加载中... </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import EVENT from "@/store/mutation-types";
import { debounce } from "@/utils/utils";

import IndexBox from "@/components/content/IndexBox.vue";
import ContentShowCard from "@/components/content/ContentShowCard";

export default {
  name: "Subscriptions",
  data() {
    return {
      debounceLoad: debounce(this.load),
      loadingDisabled: false,
      nomoreShow: false,
    };
  },
  computed: {
    ...mapGetters("article", ["articleArray"]),
    ...mapState("article", ["articleNumber", "articleParams"]),
  },
  components: {
    IndexBox,
    ContentShowCard,
  },
  mounted() {
    window.addEventListener("scroll", this.windowScrollHandler);
    this.load();
  },
  deactivated() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },
  methods: {
    async load() {
      this.loadingDisabled = true;
      const res = await this.loadArticle(this.articleParams);
      this.loadingDisabled = false;
      console.log(res);
      if (!res) {
        this.nomoreShow = true;
        return;
      }
      this.nomoreShow = false;
      this.addArticleNumber();
    },
    ...mapMutations("article", {
      addArticleNumber: EVENT.ARTICLE_NUMBER_ADD,
    }),
    ...mapActions("article", {
      loadArticle: EVENT.ARTICLE_GET,
    }),
    windowScrollHandler() {
      const html = document.documentElement;
      if (html.clientHeight + html.scrollTop >= html.scrollHeight) {
        this.debounceLoad();
      }
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