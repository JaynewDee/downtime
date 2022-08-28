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
    beforeEnter: authenticate,
  },
  {
    path: "/:email",
    name: "authenticated",
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
    path: "/monitor",
    name: "monitor",
    component: Monitor,
    beforeEnter: authenticate,
  },
  {
    path: "/report",
    name: "report",
    component: Report,
    beforeEnter: authenticate,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
function authenticate(req: any, res: any, next: any) {
  if (localStorage.getItem("token")) {
    next();
  }
  return;
}
export default router;
