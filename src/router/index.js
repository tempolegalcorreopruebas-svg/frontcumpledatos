import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../LandingPage.vue";
import DashboardView from "../views/DashboardView.vue";
import { authService } from "../services/authService";
import AuthCallbackView from "@/views/AuthCallbackView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/auth/callback",
      name: "auth-callback",
      component: AuthCallbackView
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !authService.isAuthenticated()) {
    return {
      name: "home",
      query: {
        login: "required",
      },
    };
  }

  return true;
});

export default router;
