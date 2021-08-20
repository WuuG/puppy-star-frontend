<template>
  <div>
    <el-card>
      <!-- header -->
      <div slot="header">
        <slot name="headr">
          <span class="font-medium text-lg">{{ title }}</span>
          <el-link
            :underline="false"
            class="float-right"
            @click.prevent="reload"
          >
            <i class="el-icon-refresh"></i>
            每分钟更新
          </el-link>
        </slot>
      </div>

      <!-- content -->
      <div
        v-for="(article, index) in data"
        :key="article.id"
        class="flex-row flex justify-between cursor-pointer py-1 text-xs"
        @click="clickItem(article)"
      >
        <div class="flex">
          <!-- 左侧图标 -->
          <span :class="rankClass(index)" v-show="leftIndex">
            <template v-if="index">
              {{ index }}
            </template>
            <template v-else>
              <i class="el-icon-upload2"></i>
            </template>
          </span>
          <!-- 中间的的title -->
          <span
            class="title inline-block truncate leading-6 hover:text-red-400"
          >
            <slot name="title" :item="article"> use #title="{item}" </slot>
          </span>
          <!-- 右侧趋势 -->
          <span class="text-gray-400 ml-1 leading-6">
            <slot name="trend" :item="article"> use #trend="{item}"</slot>
          </span>
        </div>
        <!-- 右侧图标 -->
        <span
          class="
            inline-block
            justify-self-end
            w-4
            h-4
            leading-4
            text-center text-white
            rounded
          "
          :style="trendIconBgColor(article.status)"
          v-show="rightIcon"
        >
          <slot name="icon" :item="article">
            {{ article.status }}
          </slot>
        </span>
      </div>
      <div class="text-center pt-2">
        <el-link :underline="false" @click.prevent="clickFooter">{{
          footer
        }}</el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ranky } from "@/utils/utils";
export default {
  props: {
    title: String,
    footer: String,
    colorMap: {
      type: Object,
      default() {
        return {
          新: "#EF4444",
          沸: "#FCD34D",
          热: "#DC2626",
        };
      },
    },
    leftIndex: {
      type: Boolean,
      default: true,
    },
    rightIcon: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    rankClass() {
      return (index) => {
        const baseClass = "text-base mx-1 inline-block text-center w-5";
        const rank = ranky(index, this.data, 3);
        let className = "text-red-" + (500 - rank * 100);
        if (rank === 1) {
          className += " font-bold";
        }
        return [baseClass, className].join(" ");
      };
    },
    trendIconBgColor() {
      return (status) => {
        if (status && this.colorMap[status]) {
          const style = "background-color: " + this.colorMap[status];
          return style;
        }
        return "background-color: #EF4444";
      };
    },
  },
  methods: {
    reload() {
      this.$emit("reload");
    },
    clickFooter() {
      this.$emit("clickFooter");
    },
    clickItem(article) {
      this.$emit("clickItem", article);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  max-width: 150px;
}
</style>