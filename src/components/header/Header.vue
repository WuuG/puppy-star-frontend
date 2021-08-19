<template>
  <div class="header shadow-sm">
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
  width: 175px;
}
</style>