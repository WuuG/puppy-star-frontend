<template>
  <div>
    <!-- 头部 -->
    <v-header>
      <!-- 左侧 logo和应用名 -->
      <template #left>
        <a href="/" class="logo">
          <img src="~@/assets/images/logo.png" alt="" />
        </a>
        <div class="web-title">喵汪星</div>
      </template>
      <!-- 中间 路由按钮-->
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
      <!-- 右侧 用户区 -->
      <template #right>
        <div id="user" @click.stop="login">
          <!-- 头像及用户名 -->
          <div id="avatarBox">
            <!-- 头像 -->
            <img src="~@/assets/logo.png" />
          </div>
          <!-- 用户名 -->
          <div id="name">
            {{ userInfo.userName || "点击此处登录" }}
          </div>
        </div>
      </template>
    </v-header>
    <!-- 登录窗口  -->
    <login-window
      v-if="loginWindowShow"
      @close="closeTheLoginWindow"
    ></login-window>
  </div>
</template>

<script>
import VHeader from "@/components/header/Header.vue";
import LoginWindow from "@/components/module-login/Login.vue";

import { mapState } from "vuex";
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

      // 控制模态登录框的开关
      loginWindowShow: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    //#region
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
    //#endregion
    // 登录 打开模态框
    login() {
      if (this.userInfo.userName == "") {
        this.loginWindowShow = true;
      }
    },
    // 关闭模态框
    closeTheLoginWindow() {
      this.loginWindowShow = false;
    },
  },
  directives: {},

  components: {
    VHeader,
    LoginWindow,
  },
};
</script>

<style lang="scss" scoped>
//#region
@import "@/assets/css/variable.scss";
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
//#endregion

// 用户区 syt
#user {
  cursor: pointer;
  // 头像框
  #avatarBox {
    float: right;
    height: 40px;
    width: 40px;
    background-color: red;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    margin-top: 10px;
    border: 1px solid #fff;
    overflow: hidden;
    transition: all 0.5s;
    // 头像
    img {
      height: 100%;
      width: 100%;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  // 用户名
  #name {
    width: 125px;
    float: right;
    line-height: 60px;
    font-size: 15px;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    margin-right: 10px;
    // background-color: pink;
    overflow: hidden;
  }
  @media (max-width: 750px) {
    #name {
      display: none;
    }
  }
}
</style>