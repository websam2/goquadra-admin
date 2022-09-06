import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import Recovery from "../views/Recovery/Recovery.vue";
import Register from "../views/Register/Register.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Home from "../views/Home/Home.vue";
import Schedules from "../views/Schedules/Schedules.vue";
import Terms from "../views/Terms/Terms.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: Recovery,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },



  // {
  //     path: '/dashboard',
  //     name: 'Dashboard',
  //     component: Dashboard,
  // },

  {
    path: "/dashboard/",
    component: Dashboard,
    children: [
      { path: "home", component: Home },
      { path: "schedules", component: Schedules },
    ],
  },

  // {
  //     path: "*",
  //     name: "NotFound",
  //     component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
