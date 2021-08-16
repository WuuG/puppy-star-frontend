<template>
  <div>
    <!-- 底部 右边 回到顶部 -->
    <el-backtop :bottom="100" @click="backToTop">
      <div class="UP">
        <i class="el-icon-star-on"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  methods: {
    backToTop() {
      console.log("Let`s go to the top!!!~");
      anime({
        targets: ".el-icon-star-on",
        translateY: -60,
        easing: "easeOutExpo",
        rotateY: 180,
        rotateZ: 180,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variable.scss";
.UP {
  height: 100%;
  width: 100%;
  background-color: $color-yellow;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  font-size: 40px;
  text-align: center;
  line-height: 40px;
  color: $color-lightRed;
  border-radius: 30%;
}
</style>