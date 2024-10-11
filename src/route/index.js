import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/children/HomePage.vue";
import UserLogin from "@/views/UserLogin.vue";
import LayoutView from "@/layout/layout.vue";
import CodeRepository from "@/views/children/CodeRepository.vue";
import RecentlyVisited from "@/views/children/son/RecentlyVisited.vue";
import AllRope from "@/views/children/son/AllRope.vue";
import OriginRepo from "@/views/children/son/OriginRepo.vue";
import TopMenu from "@/views/children/son/TopMenu.vue";
import AddRope from "@/views/children/son/AddRope.vue";

const routes = [
  { path: "/", component: UserLogin },
  {
    path: "/layout",
    component: LayoutView,
    children: [
      {
        path: "/coderepository",
        component: CodeRepository,
        children: [
          {
            path: "/coderepository/topmenu",
            component: TopMenu,
          },
          {
            path: "/coderepository/recently",
            component: RecentlyVisited,
          },
          {
            path: "/coderepository/allrepo",
            component: AllRope,
          },
          {
            path: "/coderepository/originrepo",
            component: OriginRepo,
          },
        ],
      },
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/addrepo",
        component: AddRope,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
