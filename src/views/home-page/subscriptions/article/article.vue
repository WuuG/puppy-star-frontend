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
import { getNewArticle } from "@/api/article";
import { debounce } from "@/utils/utils";

import ContentShowCard from "@/components/content/ContentShowCard";

const articleNumber = 4;
export default {
  name: "Article",
  data() {
    return {
      loadingDisabled: false,
      nomoreShow: false,
      number: 3,
      articleArray: [],
      uniqueSet: new Set(),
      articleParams: {
        skip: 0,
        limit: articleNumber,
      },
      firstLoading: true,
    };
  },
  components: {
    ContentShowCard,
  },
  created() {
    console.log(1);
  },
  mounted() {
    window.addEventListener("scroll", this.windowScrollHandler);
    this.debounceLoad();
  },
  deactivated() {
    window.removeEventListener("scroll", this.windowScrollHandler);
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
    /**
     * 检测并push文章
     */
    checkUniquePush(articleArray) {
      articleArray.forEach((item) => {
        const uniqueSymbol = item._id;
        if (this.uniqueSet.has(uniqueSymbol)) {
          return;
        }
        this.uniqueSet.add(uniqueSymbol);
        this.articleArray.push(item);
      });
    },
    // 页面逻辑
    async load() {
      this.loadingDisabled = true;
      const data = await this.getNewArticle(this.articleParams);
      this.loadingDisabled = false;
      this.firstLoading = false;
      if (!data) {
        this.nomoreShow = true;
        return;
      }
      this.checkUniquePush(data);
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
    resetArticle() {
      this.articleArray = [];
      this.uniqueSet.clear();
      this.articleParams.skip = 0;
      this.load();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>