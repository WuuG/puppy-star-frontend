import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {
      //用户名 密码 手机号 头像src
      userName: '',
      userPassword: '',
      userPhone: '',
      userAvatar: ''
    }

  },
  mutations: {},
  actions: {

  },
  modules: {}
})