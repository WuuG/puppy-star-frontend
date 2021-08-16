import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "home",
    name: "Layout",
    component: () => import("../views/layout/index.vue"),


    children: [{
        path: "home",
        name: "HomePage",
        component: () => import("../views/home-page/home-page.vue")
      },
      {
        path: 'login',
        name: "loginModel",
        component: () => import("../views/layout/model-window/LoginWindow.vue"),
      },
    ],
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;