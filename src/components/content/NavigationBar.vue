<template>
  <div class="selection">
    <div
      class="navgator"
      v-for="(navgator, index) in navgators"
      ref="navgators"
      :key="navgator.name"
      @click.stop="tabToPages(index, activeNow)"
    >
      {{ navgator.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNow: 0, //默认进入的是哪个
    };
  },
  props: {
    navgators: {
      type: Array,
      default: () => [
        {
          name: "发布",
        },
        {
          name: "图片",
        },
      ],
    },
  },
  methods: {
    tabToPages(index, activeNow) {
      // console.log(activeNow);
      this.$refs.navgators[activeNow].className = "navgator";
      this.activeNow = index;
      this.$refs.navgators[index].className = "navgator selected";
      // this.$router.push(this.navgators[index].path);
    },
  },
  mounted() {
    // 默认让目前第0个为active状态
    this.$nextTick(() => {
      this.tabToPages(0, 0);
    });
  },
};
</script>

<style lang="scss" scoped>
.selection {
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-top: 30px;
  padding-bottom: 20px;

  .navgator {
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
      border-bottom: 2px solid $color-lightRed;
      color: $color-lightRed;
    }
    &.selected {
      border-bottom: 2px solid $color-lightRed;
      color: $color-lightRed;
    }
  }
}
</style>