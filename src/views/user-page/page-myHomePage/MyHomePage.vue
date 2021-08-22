<template>
  <div id="ALL">
    <div>
      <!-- 背景图 -->
      <div id="backgroundImage">
        <el-image
          style="width: 100%; height: 100%"
          :src="url"
          fit="cover"
          :preview-src-list="[url]"
        >
        </el-image>
      </div>
      <!-- 头像 和用户名 -->
      <div class="user">
        <el-avatar
          id="avatar"
          icon="el-icon-user-solid"
          :size="100"
          fit="cover"
          :src="userInfo.userAvatar"
          style="box-shadow: 0 0 4px rgb(0, 0, 0)"
        >
        </el-avatar>
        <div class="userName">
          <div id="userName">{{ userInfo.userName || "这是一个用户名" }}</div>
          <div id="others">粉丝:0 关注:0</div>
        </div>
      </div>
      <div>
        <!-- 用户签名 -->
        <div id="writeSomethings">
          <i class="el-icon-edit-outline">这是我的签名</i>
        </div>
        <!-- 下部导航栏 -->
        <navigation-bar :navgators="navgators"></navigation-bar>
        <!-- <router-view> </router-view> -->
        <my-content></my-content>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/content/NavigationBar.vue";
import MyContent from "./child-views/MyContent.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      url: "https://img0.baidu.com/it/u=3681711589,291957782&fm=26&fmt=auto&gp=0.jpg",
      navgators: [
        {
          name: "发布",
          path: "/user/myHomePage/",
        },
        {
          name: "图片",
        },
      ],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  components: {
    NavigationBar,
    MyContent,
  },
};
</script>

<style scoped lang="scss">
#ALL {
  overflow: visible;
  position: relative;
  #backgroundImage {
    width: 100%;
    height: 200px;
  }
  .user {
    position: absolute;
    top: 150px;
    width: 100%;
    display: flex;
    height: 100px;
    align-items: flex-end;
    padding-left: 10px;

    .userName {
      float: left;
      flex: 1 1;
      padding-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;

      #userName {
        font-size: 16px;
      }
      #others {
        color: darkgray;
        font-size: 14px;
        white-space: pre-wrap;
      }
    }
  }
  #writeSomethings {
    padding-left: 50px;
    padding-top: 80px;
    background-color: #fff;
    display: flex;
  }
}
</style>