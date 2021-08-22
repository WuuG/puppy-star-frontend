<template>
  <div>
    <template v-for="menuOne in menus">
      <template v-if="menuOne.children">
        <el-submenu :index="menuOne.index" :key="menuOne.id">
          <template #title>
            <i :class="menuOne.icon"></i>
            <span>
              {{ menuOne.title }}
            </span>
          </template>
          <el-menu-item
            v-for="menuTwo in menuOne.children"
            :key="menuTwo.id"
            :index="menuTwo.index"
          >
            {{ menuTwo.title }}
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="menuOne.index" :key="menuOne.id">
          <template #title>
            <i :class="menuOne.icon"></i>
            <span>
              {{ menuOne.title }}
            </span>
          </template>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavMenusItem",
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>