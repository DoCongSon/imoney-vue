import { createRouter, createWebHistory } from "vue-router";
import { AUTH_LAYOUT, DEFAULT_LAYOUT } from "../constant";
import { auth } from "../configs/firebase";

const beforEnterRoute = (to, from, next) => {
  const user = auth.currentUser;
  if (user) {
    next();
  } else {
    next({ name: "Login" });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../pages/Home.vue"),
    meta: {
      layout: DEFAULT_LAYOUT,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../pages/Profile.vue"),
    meta: {
      layout: DEFAULT_LAYOUT,
    },
    beforeEnter: beforEnterRoute,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "Logout" */ "../pages/Logout.vue"),
    meta: {
      layout: DEFAULT_LAYOUT,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../pages/Register.vue"),
    meta: {
      layout: AUTH_LAYOUT,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Login.vue"),
    meta: {
      layout: AUTH_LAYOUT,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../pages/ForgotPassword.vue"
      ),
    meta: {
      layout: AUTH_LAYOUT,
    },
  },
  {
    path: "/verify-email",
    name: "VerifyEmail",
    component: () =>
      import(/* webpackChunkName: "verify-email" */ "../pages/VerifyEmail.vue"),
    meta: {
      layout: AUTH_LAYOUT,
    },
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
