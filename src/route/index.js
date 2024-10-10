import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/children/HomePage.vue";
import UserLogin from "@/views/UserLogin.vue";
import LayoutView from "@/layout/layout.vue";
import CodeRepository from "@/views/children/CodeRepository.vue";

const routes = [
  { path: "/", component: UserLogin },
  {
    path: "/layout",
    component: LayoutView,
    children: [
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/coderepository",
        component: CodeRepository,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
