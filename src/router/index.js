import Vue from "vue";
import VueRouter from "vue-router";
import TenantTable from "../views/TenantTable";
import Tenant from "../components/Tenant";
import AddTenant from "../views/AddTenant";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tenantTable",
    component: TenantTable,
  },
  {
    path: "/tenant",
    name: "tenant",
    component: Tenant,
  },
  {
    path: "/addtenant",
    name: "addtenant",
    component: AddTenant,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
