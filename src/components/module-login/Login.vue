<template>
  <!-- 最外层 遮罩层 -->
  <div
    id="mask"
    @click.self="closeTheWindow"
    @mousewheel.prevent
    @touchmove.prevent
  >
    <!-- 模态窗口 -->
    <div id="model">
      <!-- 左半部分遮罩 -->
      <div id="leftBack">
        <div id="leftMask" ref="leftMask">打造一流喵汪宠物生态。</div>
      </div>
      <!-- 右半部分表单 -->
      <div id="rightForm">
        <!-- 登录表单 begin -->
        <div id="loginForm" ref="loginForm">
          <el-form
            ref="form"
            :model="form"
            :rules="ruleForm"
            status-icon
            label-width="80px"
            class="loginForm"
          >
            <!-- 标题栏 和 关闭按钮 -->
            <div class="title">
              <h3>登录</h3>
              <i class="el-icon-close" @click="closeTheWindow"></i>
            </div>
            <!-- 登录用的用户名 -->
            <el-form-item label="用户名" prop="userName">
              <el-input
                type="text"
                v-model="form.userName"
                auto-complete="off"
                placeholder="请输入用户名"
                style="border-radius: 50px"
              ></el-input>
            </el-form-item>
            <!-- 登录用的密码 -->
            <el-form-item label="密码" prop="userPassword">
              <el-input
                type="password"
                v-model="form.userPassword"
                auto-complete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <!-- 两个按钮 分别为 登录 和 >前往手机号登录或注册 -->
              <el-button
                class="homeBut"
                type="warning"
                round
                :loading="logining"
                @click="onLogin"
                >登录</el-button
              >
              <el-button
                class="register"
                type="warning"
                round
                @click="goToRegisterOrLogin(-1)"
              >
                >前往手机号登录或注册
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 登录表单end -->
        <!-- 注册表单begin -->
        <div id="registerForm" ref="registerForm">
          <el-form
            ref="form"
            :model="form"
            :rules="ruleForm"
            status-icon
            label-width="80px"
          >
            <!-- 标题栏 和 关闭按钮 -->
            <div class="title">
              <h3>手机号登录</h3>
              <i class="el-icon-close" @click="closeTheWindow"></i>
            </div>
            <!-- 手机号 -->
            <el-form-item label="手机号" prop="userPhone">
              <el-input
                type="text"
                v-model="form.userPhone"
                auto-complete="off"
                placeholder="请输入邀请人手机号"
                style="width: 250px"
              ></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
              <el-input
                type="text"
                v-model="form.userName"
                auto-complete="off"
                placeholder="请输入用户名"
                style="width: 250px"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPassword">
              <el-input
                type="password"
                v-model="form.userPassword"
                auto-complete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item label="验证码" prop="code">
              <el-input
                type="password"
                v-model="form.code"
                auto-complete="off"
                placeholder="请输入验证码"
                style="width: 110px; margin-right: 10px"
              ></el-input>
              <!-- 获取验证码 -->
              <el-button
                class="homeBut"
                type="warning"
                round
                @click="clickTheGetCode"
                :disabled="getCodeButtonDisabled"
                >{{ getCodeText }}</el-button
              >
            </el-form-item>
            <!-- 两个按钮 分别为 注册 和 >前往用户名登录 -->
            <el-form-item>
              <el-button
                class="homeBut"
                type="warning"
                round
                :loading="logining"
                @click="onRegister"
                >注册</el-button
              >
              <el-button
                class="register"
                type="warning"
                round
                @click="goToRegisterOrLogin(0)"
              >
                >前往用户名登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <!-- 注册表单 end -->
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { debounce } from "@/utils/utils.js";
import { setLocalStorage, key } from "@/utils/localStorage";
import { postRegister, postLogin, sendMessage } from "@/api/passport";
//手机号正则
const phoneNumberReg =
  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

export default {
  name: "LoginWindow",
  data() {
    var validatePhoneNumber = (_, value, callback) => {
      if (!phoneNumberReg.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      logining: false,

      // 验证码倒计时
      getCodeTimer: null,
      getCodeButtonDisabled: false,
      getCodeCount: 60,
      getCodeText: "获取验证码",

      form: {
        // 登录
        userName: "", //用户名
        userPassword: "", //登录密码
        // 注册
        userPhone: "", // 手机号
        code: "", //验证码
      },
      ruleForm: {
        userName: [
          {
            // validator: userName,
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        userPassword: [
          {
            // validator: validatePassword,
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        userPhone: [
          {
            validator: validatePhoneNumber,
            required: true,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 网络方法
    async postRegister(form) {
      const submitForm = {
        login_name: form.userName,
        phone: form.userPhone,
        code: form.code,
        password: form.userPassword,
      };
      await postRegister(submitForm);
      this.onLogin();
    },
    async postLogin(form) {
      const submitForm = {
        login_name: form.userName,
        password: form.userPassword,
      };
      const res = await postLogin(submitForm);
      setLocalStorage(key.TOKEN, res._id);
      setLocalStorage(key.USER_INFO, res);
      this.$router.go(0);
    },
    async sendMessage(form) {
      const res = await sendMessage(form);
      let type = "success";
      // ↓根据后端回来的数据 调整
      if (res.success == false) type = "error";
      this.$message({
        message: res.message,
        type: type,
      });
      //3.设置按钮禁用状态
      if (type == "success")
        if (!this.getCodeTimer) {
          this.getCodeCount = 60;
          this.getCodeButtonDisabled = true;
          this.timer = setInterval(() => {
            if (this.getCodeCount > 0 && this.getCodeCount <= 60) {
              this.getCodeCount--;
              this.getCodeText = `${this.getCodeCount}s`;
            } else {
              this.getCodeButtonDisabled = false;
              clearInterval(this.timer);
              this.getCodeTimer = null;
              this.getCodeText = "重新获取验证码";
            }
          }, 1000);
        }
    },
    // 提交表单——点击登录按钮
    onLogin: debounce(function () {
      this.postLogin(this.form);
    }, 500),
    onRegister: debounce(function () {
      this.postRegister(this.form);
    }, 500),

    // 前往注册或登录页面
    goToRegisterOrLogin: debounce(function (arg) {
      //arg参数-1为前往注册，0为前往登录
      // 操纵左侧遮罩遮盖右侧
      const leftMask = this.$refs.leftMask;
      const registerForm = this.$refs.registerForm;
      const loginForm = this.$refs.loginForm;
      anime({
        duration: 250,
        endDelay: 250,
        targets: leftMask, //css一样的选择器
        translateX: "100%", //与css一样的过渡效果
        direction: "alternate",
        easing: "linear", //动画曲线
      });
      anime({
        delay: 250,
        duration: 250,
        targets: [loginForm, registerForm], //css一样的选择器
        translateY: eval(arg * 100) + "%", //与css一样的过渡效果
        easing: "linear", //动画曲线
      });
      // console.log(this);
    }, 1000),
    // 关闭该窗口
    closeTheWindow() {
      document.body.style["overflow-y"] = "auto";
      this.$emit("close");
    },

    // 点击 获取验证码 按钮
    clickTheGetCode: debounce(function () {
      // 1.校验手机号格式 ——正则匹配
      if (!phoneNumberReg.test(this.form.userPhone)) {
        console.log("手机号格式不正确");
        return;
      }
      this.sendMessage(this.form.userPhone);
    }, 1000),
  },
  // 实现窗口的模态
  mounted() {
    // 实现窗口模态
    document.body.style["overflow-y"] = "hidden";
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/variable.scss";
* {
  outline: none;
}
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
  animation: show 0.5s;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // 模态框
  #model {
    width: 50vw;
    height: 25vw;
    min-width: 375px;
    min-height: 370px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #e7e7e7;
    border-radius: 20px;
    z-index: 1;
    overflow: hidden;
    #leftBack {
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
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
    #rightForm {
      flex: 1 1;
      min-width: 375px;
      max-width: 50%;
      height: 100%;

      border-radius: 20px;
      padding-right: 10px;
      z-index: -1;
      // 两个的标题
      .title {
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
      #registerForm {
        height: 100%;
      }
      #loginForm {
        height: 100%;
        // 两个的标题
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