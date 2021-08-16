<template>
  <!-- 登录模态窗口 -->
  <div>
    <!-- 组止滚轮滑动 -->
    <login-window
      @mousewheel.native.prevent
      @touchmove.native.prevent
    ></login-window>
  </div>
</template>

<script>
import loginWindow from "@/components/model-window/login.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    loginWindow: loginWindow,
  },
};
</script>

<style lang="scss" scoped>
</style>