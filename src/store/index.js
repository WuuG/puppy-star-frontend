import Vue from "vue";
import Vuex from "vuex";

import article from "./moduls/article";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {
      //用户名 密码 手机号 头像src
      userName: "这是store中的用户名",
      userPassword: "",
      userPhone: "",
      userAvatar: "https://pic3.zhimg.com/22b797a33ce00581e37f9376cf37609b_is.jpg",
    },
  },
  mutations: {},
  actions: {},
  modules: {
    article,
  },
});