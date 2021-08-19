<template>
  <div class="cardALL">
    <!-- #region 用户主体begin -->
    <div class="card">
      <div class="header">
        <!-- 头像 -->
        <div class="avatarBox">
          <img :src="user.avatar" />
        </div>
        <!-- 用户名 -->
        <div class="user">
          <div class="name">{{ user.name }}</div>
          <div class="other">{{ user.other }}</div>
        </div>
      </div>
      <div class="content">
        <div class="text">{{ content }}</div>
        <div>
          <viewer :images="images" class="image">
            <img v-for="(src, index) in images" :key="index" :src="src" />
          </viewer>
        </div>
      </div>
      <div class="footer">
        <!-- 用于添加按钮，目前只有两个 -->
        <span class="button">
          <i class="icon el-icon-star-on"></i>
          <span>点赞</span>
        </span>
        <span class="button" @click="commentsShow = !commentsShow">
          <i class="icon el-icon-s-comment"></i>
          <span>评论</span>
        </span>
      </div>
    </div>
    <!-- #endregion 用户主体end -->

    <div class="comments" v-show="commentsShow">
      <!-- #region 小用户卡片-->
      <div class="little card">
        <div class="header">
          <!-- 头像 -->
          <div class="avatarBox">
            <img :src="user.avatar" />
          </div>
          <!-- 用户名 -->
          <div class="user">
            <div class="name">
              我是评论者:<span class="content">这是我评论的内容。</span>
            </div>
            <div class="other">2分钟前</div>
          </div>
        </div>
      </div>
      <!-- #endregion -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentShowCard",
  data() {
    return {
      commentsShow: false,
    };
  },
  props: ["user", "content", "images"],
  mounted() {},
  components: {},
};
</script>

<style lang="scss">
//#region 主体卡片
span {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
// 用户内容小卡片
.card {
  width: 100%;
  min-height: 150px;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 10px;
  padding-left: 10px;
  //头部 头像+用户名
  .header {
    width: 100%;
    display: flex;
    // 头像框
    .avatarBox {
      height: 40px;
      width: 40px;
      background-color: red;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
      margin-top: 10px;
      border: 1px solid #fff;
      overflow: hidden;
      transition: all 0.5s;
      display: inline-block;
      // 头像
      img {
        height: 100%;
        width: 100%;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    //用户名 和 用户签名
    .user {
      display: flex;
      flex: 1 1;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      margin-top: 10px;

      .name {
        font-size: 16px;
        font-weight: bolder;
      }
      .other {
        font-size: 12px;
        color: rgb(131, 131, 131);
      }
    }
  }
  //中间内容 发布内容
  > .content {
    font-size: 14px;
    margin-left: 40px;
    padding: 10px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    //文本内容
    // .text {
    // }
    //图片内容
    .image {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        cursor: pointer;
        transition: all 0.5s;
        border-radius: 10px;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  //底部的点赞和评论
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    .button {
      font-size: 14px;
      cursor: pointer;
      color: #8b8b8b;
      margin: 10px;

      &:hover {
        color: #ffc145;
      }
      .icon {
        line-height: 100%;
        font-size: 20px;
      }
    }
  }
}
//#endregion
.comments {
  margin: 0 auto;
  width: 95%;
  z-index: 0;
  animation: show 0.5s;
  transform: perspective(500px);
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .little.card {
    height: 50px;
    background-color: rgb(247, 247, 247);
    border-radius: 0 0 20px 20px;
    padding: 20px 10px 20px 10px;
    margin-top: 0px;
    box-shadow: 0 1px 2px black;

    font-weight: normal;
    .name {
      font-size: 14px;
      color: #ed8060;
      .content {
        font-weight: 400;
        color: black;
      }
    }
    > .other {
      font-size: 10px;
    }
  }
}
</style>