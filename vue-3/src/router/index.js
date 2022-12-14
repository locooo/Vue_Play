import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/vue-styleLink",
      name: "vue-styleLink",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/vue/vue-styleLink.vue"),
      meta: { title: "Vue样式绑定" },
    },
    {
      path: "/html-base",
      name: "html-base",
      component: () => import("../pages/html/html-base.vue"),
      meta: { title: "我是HTML基础" },
    },
    {
      path: "/html-css",
      name: "html-css",
      component: () => import("../pages/html/html-css.vue"),
      meta: { title: "HTML中引入CSS" },
    },
    {
      path: "/js-base",
      name: "js-base",
      component: () => import("../pages/javaScript/js-base.vue"),
      meta: { title: "JS" },
    },

    {
      path: "/sass-base",
      name: "sass-base",
      component: () => import("../pages/style/sass-base.vue"),
      meta: { title: "sass" },
    },
    {
      path: "/sass-base1",
      name: "sass-base1",
      component: () => import("../pages/style/sass-base1.vue"),
      meta: { title: "sass" },
    },
    {
      path: "/less-base",
      name: "less-base",
      component: () => import("../pages/style/less-base.vue"),
      meta: { title: "less" },
    },
    {
      path: "/less-base1",
      name: "less-base1",
      component: () => import("../pages/style/less-base1.vue"),
      meta: { title: "less" },
    },
  ],
});
router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  next(); //执行进入路由，如果不写就不会进入目标页
});
export default router;
