import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: {
      //用户名 和 密码 和手机号
      userName: '',
      userPassword: '',
      userPhone: '',
    }

  },
  mutations: {},
  actions: {

  },
  modules: {}
})