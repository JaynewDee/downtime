import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Auth from "../views/AuthView.vue";
import Monitor from "../views/MonitorView.vue";
import Report from "../views/ReportView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth",
    name: "authentication",
    component: Auth,
  },
  {
    path: "/auth/:username/monitor",
    name: "monitor",
    component: Monitor,
  },
  {
    path: "/auth/:username/report",
    name: "report",
    component: Report,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
