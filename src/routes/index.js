import Vue from "vue";
import VueRouter from "vue-router";
import TenantTable from "../components/TenantTable";
import Tenant from "../components/Tenant";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: TenantTable },
  { path: "/tenant", component: Tenant },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
