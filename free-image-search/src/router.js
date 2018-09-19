import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "./components/dashboard/Dashboard.vue";
import About from "./components/about/About.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Dashboard },
    { path: "/about", component: About }
]

export default new VueRouter({ mode: "history", routes })