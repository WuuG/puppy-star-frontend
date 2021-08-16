<template>
  <div class="header">
    <el-row type="flex">
      <div class="icon">
        <slot name="left"></slot>
      </div>
      <div class="header-content">
        <slot name="middle"></slot>
      </div>
      <div class="header-options">
        <slot name="right"></slot>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "WebHeader",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
.header,
.header-content,
.header-options {
  height: $--height-header;
}
.icon {
  width: calc(300px + calc(calc(100% - #{$--width-content}) / 2));
  min-width: 280px;
  background-color: aqua;
}
.header-content {
  flex: 1;
  max-width: $--width-content;
  background-color: red;
}
.header-options {
  background-color: green;
  width: 100px;
}
</style>