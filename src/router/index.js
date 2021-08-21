import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const article = () =>
  import("../views/home-page/subscriptions/article/article.vue");

const routes = [
  {
    path: "/",
    redirect: "home",
    name: "Layout",
    component: () => import("../views/layout/index.vue"),

    children: [
      {
        path: "home",
        name: "HomePage",
        component: () => import("../views/home-page/home-page.vue"),
        redirect: "/home/subscriptions",
        children: [
          {
            path: "subscriptions",
            name: "Subscriptions",
            component: () =>
              import("../views/home-page/subscriptions/Subscriptions.vue"),
            children: [
              {
                path: "type/:type",
                name: "type",
                component: article,
              },
            ],
          },
        ],
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
