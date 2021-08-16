<template>
  <!-- 最外层 遮罩层 -->
  <div id="mask">
    <!-- 模态窗口 -->
    <div id="model">
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
          <button id="close" @click.once="closeTheWindow">
            <i class="el-icon-close"></i>
          </button>
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
          <!-- 表单 end -->

          <!-- 两个按钮 分别为 登录 和 >前往注册 -->
          <el-button
            class="homeBut"
            type="primary"
            plain
            @click="submit"
            :loading="logining"
            >登录</el-button
          >
          <el-button
            class="register"
            type="primary"
            plain
            @click="goToRegister"
          >
            >前往注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
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
      this.$refs.form.resetFields();
    },

    afterOpen() {
      this.scrollTop = document.scrollingElement.scrollTop;
      window.document.addEventListener("scroll.unable", function () {
        document.scrollingElement.scrollTop = this.scrollTop;
      });
    },

    closeTheWindow() {
      console.log("-1");
      this.$router.push("/");
    },
  },
  created() {
    console.log(document);
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
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    // 窗口标题
    #title {
      display: flex;
      justify-content: space-between;
      border-radius: 30%;

      // 关闭按钮
      #close {
        width: 40px;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 20px;
        box-shadow: 2px 2px 3px #d1d9e6, -2px -2px 3px #fff;
        justify-self: flex-start;
        &:active {
          border-radius: 20px;
          box-shadow: inset 2px 2px 3px #d1d9e6, inset -2px -2px 3px #fff;
        }
      }
    }
  }
}
</style>