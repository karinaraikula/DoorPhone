import Vue from "vue";
import Vuex from "vuex";
import store from "./index";

Vue.use(Vuex);

export default store = new Vuex.Store({
  state: {
    headers: [
      {
        text: "Flat. no.",
        value: "flat",
      },
      {
        text: "Name",
        value: "name",
      },
    ],
    tenants: [
      { id: 1, name: "Meikäläinen", flat: 12, email: "email" },
      { id: 2, name: "Mattinen", flat: 23, email: "email" },
      { id: 3, name: "Menninkäinen", flat: 43, email: "email" },
    ],
  },
  getters: {},
  mutations: {
    addCurrentTenant(state, data) {
      state.currentTenant = data;
    },
    addTenantListener(state, data) {
      state.tenantListener = data;
    },
  },
  actions: {},
  modules: {},
});
