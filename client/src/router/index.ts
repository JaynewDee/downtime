import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Monitor from "../views/MonitorView.vue";
import Report from "../views/ReportView.vue";
import Login from "../components/forms/Login.vue";
import Signup from "../components/forms/Signup.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/auth/:email/monitor",
    name: "monitor",
    component: Monitor,
  },
  {
    path: "/auth/:email/report",
    name: "report",
    component: Report,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
