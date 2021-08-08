import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IndexView",
    component: () => import("@/views/IndexView.vue"),
    meta: { layout: "AppLayoutMain" },
    children: [
      {
        path: "/login",
        name: "LoginView",
        component: () => import("@/views/LoginView.vue"),
        meta: { layout: "AppLayoutDefault" },
      },
    ],
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: () => import("@/views/ProfileView.vue"),
    meta: { layout: "AppLayoutSidebar" },
  },
  {
    path: "/cart",
    name: "CartView",
    component: () => import("@/views/CartView.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/orders",
    name: "OrdersView",
    component: () => import("@/views/OrdersView.vue"),
    meta: { layout: "AppLayoutSidebar" },
  },
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
