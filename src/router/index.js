import Vue from "vue";
import VueRouter from "vue-router";
const PageOne = () => import("../views/PageOne.vue");
const PageTwo = () => import("../views/PageTwo.vue");
const PageThree = () => import("../views/PageThree.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageOne",
    component: PageOne,
  },
  {
    path: "/pagetwo",
    name: "PageTwo",
    component: PageTwo,
  },
  {
    path: "/pagethree",
    name: "PageThree",
    component: PageThree,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
