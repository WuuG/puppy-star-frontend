<template>
  <div class="header">
    <el-row type="flex">
      <div class="header-left">
        <slot name="left"></slot>
      </div>
      <div class="header-content">
        <slot name="middle"></slot>
      </div>
      <div class="header-right">
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
.header-right {
  height: $height-header;
}
.header-left {
  width: calc(#{$width-aside} + calc(calc(100% - #{$width-content}) / 2));
  min-width: calc(#{$width-aside} - 20px);
  background-color: aqua;
}
.header-content {
  flex: 1;
  max-width: $width-content;
  background-color: red;
}
.header-right {
  background-color: green;
  width: 100px;
}
</style>