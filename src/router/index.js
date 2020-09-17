import Home from "@/views/Home";
import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "projects",
      path: "/projects",
      component: () => import(/* webpackChunkName: "foo" */ "@/views/Projects")
    },
  ],
  linkActiveClass: "active",
  mode: "history",
});
