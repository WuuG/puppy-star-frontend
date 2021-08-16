<template>
  <!-- 最外层 遮罩层 -->
  <div
    id="mask"
    @click.self="closeTheWindow"
    @mousewheel.native.prevent
    @touchmove.native.prevent
  >
    <!-- 模态窗口 -->
    <div id="model">
      <!-- 左半部分遮罩 -->
      <div id="leftForm">
        <div id="leftMask" ref="leftMask">打造一流喵汪宠物生态。</div>
      </div>
      <!-- 右半部分表单 -->
      <div id="rightForm">
        <!-- 表单 begin -->
        <el-form
          ref="form"
          :model="form"
          :rules="ruleForm"
          status-icon
          label-width="80px"
          class="loginForm"
        >
          <!-- 标题栏 和 关闭按钮 -->
          <div id="title">
            <h3>登录</h3>
            <i class="el-icon-close" @click="closeTheWindow"></i>
          </div>
          <!-- 用户名 -->
          <el-form-item label="用户名" prop="name">
            <el-input
              type="text"
              v-model="form.userName"
              auto-complete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="form.userPassword"
              auto-complete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <!-- 两个按钮 分别为 登录 和 >前往注册 -->
            <el-button
              class="homeBut"
              type="warning"
              round
              @click="submit"
              :loading="logining"
              >登录</el-button
            >
            <el-button
              class="register"
              type="warning"
              round
              @click="goToRegister"
            >
              >前往注册</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 表单 end -->
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  data() {
    return {
      logining: false,
      form: {
        userName: "admin",
        userPassword: "123456",
      },
      ruleForm: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 提交表单
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.logining = true;
          if (this.form.name === "admin" && this.form.password === "123456") {
            this.logining = false;
            sessionStorage.setItem("user", this.form.name);
            // this.$router.push({ name: "home" });跳转
          } else {
            this.logining = false;
            this.$alert("name or password wrong!", "info", {
              confirmButtonText: "ok",
            });
          }
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    goToRegister() {
      // 操纵左侧遮罩遮盖右侧
      let leftMask = this.$refs.leftMask;
      anime({
        duration: 500,
        targets: leftMask, //css一样的选择器
        translateX: 375, //与css一样的过渡效果
        direction: "alternate",
        easing: "linear", //动画曲线
      });
    },

    closeTheWindow() {
      document.body.style["overflow-y"] = "auto";
      this.$router.replace("/home");
    },
  },
  mounted() {
    document.body.style["overflow-y"] = "hidden";
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variable.scss";
// 遮罩层
#mask {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  // 模态框
  #model {
    width: 50vw;
    height: 25vw;
    min-width: 375px;
    min-height: 300px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    z-index: 1;
    overflow: hidden;
    #leftForm {
      flex: 1;
      min-width: 375px;
      max-width: 50%;
      height: 100%;
      // background: linear-gradient(to right, #ffb347, #ffcc33);
      background: $color-yellow url("../../assets/images/login/doge.jpg") center;
      background-size: cover;
      border-radius: 20px;
      #leftMask {
        z-index: 9;
        height: 100%;
        width: 100%;
        color: white;
        background: linear-gradient(to right, #ffb347, #ffcc33);
        border-radius: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 10px 10px;
        box-shadow: 2px 2px 4px #d1d9e6, -10px -10px 15px rgba(0, 0, 0, 0.7);
      }
    }
    #rightForm {
      flex: 1;
      min-width: 375px;
      max-width: 50%;
      height: 100%;
      // background-color: pink;
      border-radius: 20px;
      z-index: -1;
      // 窗口标题
      #title {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-radius: 30%;

        // 关闭按钮
        .el-icon-close {
          &:hover {
            color: $color-yellow;
          }
        }
      }
    }
    // 两个按钮
    .homeBut,
    .register {
      border-radius: 10px;
      // background-color: #fff;
    }
  }
}
</style>