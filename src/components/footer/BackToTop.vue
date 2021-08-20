<template>
  <div id="UP">
    <!-- 底部 右边 回到顶部 -->
    <el-backtop :bottom="100" @click="backToTop">
      <div class="UP">
        <i class="star el-icon-star-on"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
// animejs动画库
import anime from "animejs/lib/anime.es.js";

export default {
  name: "BackToTop",
  methods: {
    backToTop() {
      // console.log(e);
      let randomNum = ~~(Math.random() * 180);

      console.log("Let`s go to the top!!!~Rotate degree is", randomNum);
      anime({
        targets: ".star.el-icon-star-on",
        translateY: -120,
        easing: "easeOutExpo",
        rotateY: 90 + randomNum,
        rotateZ: 45 + randomNum,
        opacity: 0.5,
        scale: 1.5,
      });
    },
  },
};
</script>

<style lang="scss">
.UP {
  height: 100%;
  width: 100%;
  background-color: $color-yellow;
  font-size: 40px;
  text-align: center;
  line-height: 40px;
  color: $color-lightRed;
  border-radius: 50%;
  transition: all 0.5s ease;

  &:hover .el-icon-star-on {
    transform: scale(1.1);
  }

  &:active {
    box-shadow: inset 3px 3px 1px #d3dfc9,
      inset -3px -3px 1px rgb(255, 255, 239);
    transform: scale(0.9);
  }
  &::before {
    content: "";
    background-color: red;
    width: 400px;
    height: 100px;
  }
}
</style>