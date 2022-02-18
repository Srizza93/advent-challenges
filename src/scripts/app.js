import "../style.css";

import mount from "./mount.js";

import Vue from "vue";
import router from "../router/index.js";

import App from "../App.vue";

document.body.appendChild(mount());

new Vue({
  router,
  render: (h) => h(App),
}).$mount(".app-root");
