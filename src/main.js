import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// scss 和 element ui
import "normalize.css";
import ElementUI from "element-ui";
import "./assets/css/element-variable.scss";
// 公共样式
import "@/assets/css/common.scss";
import "@/assets/css/variable.scss";


Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");