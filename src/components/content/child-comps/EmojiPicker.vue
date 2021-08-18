<template>
  <el-popover>
    <picker
      :i18n="i18nObj"
      :showSearch="false"
      :include="['recent', 'people', 'nature', 'foods', 'activity']"
      :showPreview="false"
      @select="onSelect"
      v-show="show"
    />
    <template #reference>
      <slot name="reference">
        <el-button round><i class="el-icon-ice-cream-round"></i></el-button>
      </slot>
    </template>
  </el-popover>
</template>

<script>
import { Picker } from "emoji-mart-vue";
export default {
  name: "EmojiPicker",
  data() {
    return {
      i18nObj: {
        search: "搜索",
        notfound: "未查找到表情",
        categories: {
          search: "搜索结果",
          recent: "最近常用",
          people: "笑脸与人物",
          nature: "动物与自然",
          foods: "食物",
          activity: "活动",
          places: "Travel & Places",
          objects: "Objects",
          symbols: "Symbols",
          flags: "Flags",
          custom: "Custom",
        },
      },
    };
  },
  components: {
    Picker,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onSelect(emoji) {
      this.$emit("select", emoji);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>