<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      @select="onSelect"
      class="left-aside-navbar"
    >
      <h3 v-if="pageTitle" class="text-gray-800 px-5 text-2xl py-2 font-medium">
        {{ pageTitle }}
      </h3>
      <template v-for="{ title, sidebarData } in data">
        <template v-if="title">
          <el-menu-item-group :key="title.id">
            <template #title>
              <h3 :class="titleClass">{{ title }}</h3>
            </template>
            <nav-menu-item
              :menus="sidebarData"
              :key="sidebarData.id"
            ></nav-menu-item>
          </el-menu-item-group>
        </template>
        <template v-else>
          <nav-menu-item
            :menus="sidebarData"
            :key="sidebarData.id"
          ></nav-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import NavMenuItem from "./NavMenuItem.vue";
export default {
  name: "NavMenu",
  props: {
    data: {
      type: Array,
      required: true,
    },
    defaultActive: String,
    titleClass: {
      type: String,
      default: "text-gray-900 text-base",
    },
    pageTitle: String,
  },
  components: {
    NavMenuItem,
  },
  methods: {
    onSelect(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
.left-aside-navbar {
  .el-menu-item {
    &:hover {
      background-color: #f2f2f2;
    }
  }
}
</style>