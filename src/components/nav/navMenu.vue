<template>
  <div>
    <el-menu
      default-active="home"
      v-for="({ title, sidebarData }, index) in data"
      :key="title.id"
      router
      active-text-color="#ff6a5e"
    >
      <template v-if="title">
        <p :class="index ? 'headlineOther' : 'headlineOne'">{{ title }}</p>
      </template>
      <template v-for="menuOne in sidebarData">
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
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.headlineOne,
.headlineOther {
  padding: 0 20px;
}
.headlineOne {
  font-size: 20px;
  color: $color-text-primary;
  font-weight: 600;
}
.headlineOther {
  font-size: 16px;
  color: $color-text-regular;
}
</style>