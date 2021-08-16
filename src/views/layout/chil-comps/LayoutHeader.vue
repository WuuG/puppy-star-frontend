<template>
  <div>
    <v-header>
      <template #left>
        <a href="/" class="logo">
          <img src="~@/assets/images/logo.png" alt="" />
        </a>
        <div class="web-title">喵汪星</div>
      </template>
      <template #middle>
        <nav class="nav">
          <a
            @click.prevent="toOtherPage(icon)"
            :class="iconborderClass(icon.path)"
            v-for="icon in icons"
            :key="icon.id"
          >
            <div
              :class="[icon.iconClassName]"
              @mouseover="activeIcon"
              @mouseleave="deactiveIcon"
            ></div>
          </a>
        </nav>
      </template>
    </v-header>
  </div>
</template>

<script>
import VHeader from "@/components/header/Header.vue";

export default {
  name: "LayoutHeader",
  data() {
    return {
      icons: [
        {
          iconClassName: "el-icon-house",
          path: "1",
          args: {},
        },
        {
          iconClassName: "el-icon-goods",
          path: "2",
          args: {},
        },
        {
          iconClassName: "el-icon-view",
          path: "3",
          args: {},
        },
        {
          iconClassName: "el-icon-document-copy",
          path: "4",
          args: {},
        },
        {
          iconClassName: "el-icon-user",
          path: "5",
          args: {},
        },
      ],
      activeIconPath: "1",
    };
  },
  components: {
    VHeader,
  },
  methods: {
    iconborderClass(path) {
      return {
        icon: true,
        "active-icon": this.activeIconPath === path,
      };
    },
    toOtherPage(icon) {
      this.activeIconPath = icon.path;
    },
    activeIcon(event) {
      event.target.classList.add("icon-mask");
    },
    deactiveIcon(event) {
      event.target.classList.remove("icon-mask");
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  height: 60px;
  width: 60px;
  img {
    width: 100%;
    height: 100%;
  }
}
.web-title {
  margin-left: 10px;
  font-size: 30px;
  line-height: 60px;
}
.nav {
  display: flex;
  height: 60px;
  text-align: center;
  .icon {
    position: relative;
    padding: 0 3vw;
    font-size: 30px;
    line-height: 60px;
    transition: all 0.1s;
    .icon-mask {
      &:after {
        content: "";
        position: absolute;
        width: 80px;
        height: 50px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba($color: #c0c4cc, $alpha: 0.3);
        border-radius: 4px;
      }
    }
  }
  .active-icon {
    color: $color-lightRed;
    border-bottom: 3px solid $color-lightRed;
  }
}
</style>