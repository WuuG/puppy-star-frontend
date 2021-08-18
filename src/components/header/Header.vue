<template>
  <div class="header">
    <el-row type="flex">
      <div class="header-left">
        <slot name="left"></slot>
      </div>
      <div class="header-content hidden-xs-only">
        <slot name="middle"> </slot>
      </div>
      <!-- 用户部分 -->
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
//#region
@import "@/assets/css/variable.scss";
.header,
.header-content,
.header-right {
  height: $height-header;
}
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.header-left {
  display: flex;
  justify-content: flex-end;
  width: calc(calc(100% - #{$width-content}) / 2);
  min-width: $width-aside;
}
.header-content {
  flex: 1;
  max-width: $width-content;
}
//#endregion

// 用户部分
.header-right {
  background-color: green;
  width: 175px;
}
</style>