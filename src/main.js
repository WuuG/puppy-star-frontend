import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/*-------------------------引入全局库------------------------------ */
// scss
import "normalize.css";
//element UI
import ElementUI from "element-ui";
import "./assets/css/element-variable.scss";
Vue.use(ElementUI);

// 公共样式
import "@/assets/css/common.scss";
import "element-ui/lib/theme-chalk/display.css";

Vue.config.productionTip = false;


//引入全局组件viewer用于预览图片放大
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");