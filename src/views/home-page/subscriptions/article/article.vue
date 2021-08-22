<template>
  <div>
    <el-skeleton
      :rows="6"
      animated
      class="bg-white rounded my-3 p-4"
      v-for="n in 3"
      v-show="firstLoading"
      :key="n"
    />
    <template>
      <content-show-card
        v-for="article in articleArray"
        :key="article._id"
        :authorId="article.id"
        :content="article.text"
        :images="article.images"
        :comments="article.comments"
        v-show="!firstLoading"
      ></content-show-card>
    </template>
    <el-empty
      class="bg-white my-3"
      v-show="!firstLoading && articleArray.length <= 0"
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
import { getNewArticle } from "@/api/article";
import { debounce } from "@/utils/utils";

import ContentShowCard from "@/components/content/ContentShowCard";
import { mapState } from "vuex";

const articleNumber = 4;
export default {
  name: "Article",
  data() {
    return {
      loadingDisabled: false,
      nomoreShow: false,
      number: 3,
      articleArray: [],
      articleParams: {
        skip: 0,
        limit: articleNumber,
      },
      firstLoading: true,
    };
  },
  computed: {
    ...mapState("article", {
      uploadArticle: "resetTime",
    }),
  },
  components: {
    ContentShowCard,
  },
  created() {
    this.resetArticle();
    window.addEventListener("scroll", this.windowScrollHandler);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },
  methods: {
    // 网络方法
    async getNewArticle(params) {
      const { data } = await getNewArticle(params.skip, params.limit);
      if (!data || !data.length) {
        this.$message({
          type: "warning",
          message: "已经没有更多数据啦！",
        });
        return null;
      }
      return data;
    },
    // 页面逻辑
    async load() {
      this.loadingDisabled = true;
      if (this.firstLoading === true) {
        this.loadingDisabled = false;
        return;
      }
      const data = await this.getNewArticle(this.articleParams);
      this.loadingDisabled = false;
      this.firstLoading = false;
      if (!data) {
        this.nomoreShow = true;
        return;
      }
      data.forEach((item) => this.articleArray.push(item));
      this.nomoreShow = false;
      this.articleParams.skip += articleNumber;
    },
    debounceLoad: debounce(function () {
      this.load();
    }),
    windowScrollHandler() {
      const html = document.documentElement;
      if (html.clientHeight + html.scrollTop >= html.scrollHeight) {
        this.debounceLoad();
      }
    },
    async resetArticle() {
      this.articleParams.skip = 0;
      this.nomoreShow = false;
      const data = await this.getNewArticle(this.articleParams);
      if (!data) return;
      this.articleArray = data;
      this.articleParams.skip += articleNumber;
      this.firstLoading = false;
    },
  },
  watch: {
    "$route.fullPath": function () {
      this.firstLoading = true;
      this.resetArticle();
      console.log("route change");
    },
    // 监听是否有上传文章，如果上传就resetArticle()
    uploadArticle: function () {
      console.log("reload");
      this.firstLoading = true;
      this.resetArticle();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>