<template>
  <div class="bg-red-500">
    <article-recommand
      title="星球热搜"
      footer="查看完整的星球动态"
      class="rounded-sm bg-white w-64"
      :data="articleData"
      :trend="true"
      :leftIndex="true"
      :rightIcon="true"
      :headerShow="true"
      @reload="reload"
      @clickItem="onArticle"
      @clickFooter="onFooter"
    >
      <template #title="{ item }">
        {{ item.title }}
      </template>
      <template #trend="{ item }">
        {{ item.trend }}
      </template>
      <template #icon="{ item }">
        {{ item.status }}
      </template>
    </article-recommand>
  </div>
</template>

<script>
import ArticleRecommand from "@/components/content/ArticleList.vue";

export default {
  name: "HomePageRigthAside",
  data() {
    return {
      articleData: [
        {
          articleId: "1213123",
          title: "高原上的南无sssssssssssssssssssssssss",
          status: "新",
          trend: "1111.1万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "沸",
          trend: "333万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
        {
          articleId: "1213123",
          title: "高原上的南无",
          status: "热",
          trend: "33万",
        },
      ],
    };
  },
  components: {
    ArticleRecommand,
  },
  methods: {
    reload() {},
    onArticle(article) {
      console.log(article);
    },
    onFooter() {
      console.log("toFooter");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>