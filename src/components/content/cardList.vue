<template>
  <div>
    <el-card>
      <!-- header -->
      <div slot="header" v-if="headerShow">
        <slot name="headr-inline">
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
          <span :class="rankClass(index)" v-if="leftIndex">
            <template v-if="index">
              {{ index }}
            </template>
            <template v-else>
              <slot name="top">
                <i class="el-icon-upload2"></i>
              </slot>
            </template>
          </span>
          <!-- 中间的的title -->
          <span
            class="inline-block truncate leading-6 hover:text-red-400"
            :style="contentStyleObejct"
          >
            <slot name="title" :item="article"> use #title="{item}" </slot>
          </span>
          <!-- 右侧趋势 -->
          <span class="text-gray-400 ml-1 leading-6" v-if="trend">
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
          v-if="rightIcon"
        >
          <slot name="icon" :item="article">
            {{ article.status }}
          </slot>
        </span>
      </div>
      <div class="text-center pt-2" v-if="footer">
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
    footer: {
      type: String,
      default: "",
    },
    /**
     * 右侧热点icon的图标背景色的映射map
     * @default
     * {
     *   新: "#EF4444",
     *   沸: "#FCD34D",
     *   热: "#DC2626",
     * };
     */
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
    /**
     * card header的显示
     * @default false
     */
    headerShow: {
      type: Boolean,
      default: false,
    },
    /**
     * 左侧index的显示
     * @default true
     */
    leftIndex: {
      type: Boolean,
      default: false,
    },
    /**
     * trend数据的显示
     * @default false
     */
    trend: {
      type: Boolean,
      default: false,
    },
    /**
     * 右侧热点图标的显示
     * @default false
     */
    rightIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * 传入的数据对象,默认使用以下属性进行渲染
     * @this title 文本内容
     * @this trend 动态热度
     * @this status 动态热度图标文字,这里需要注意colorMap.里会根据status的值进行background-color的设置.
     */
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
    // 用来判断中间的内容是否要出现省略符
    contentStyleObejct() {
      if (this.trend) {
        return {
          "max-width": "100px",
        };
      }
      return {};
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
</style>