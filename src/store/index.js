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
    tenants: [],
    currentTenant: {},
    tenantId: 1,
  },

  getters: {
    getTenantById: (state) => (id) => {
      return state.tenants.find((tenant) => tenant.id === id);
    },
  },

  mutations: {
    openTenant: (state, data) => {
      state.currentTenant = Object.assign({}, data);
    },

    updateTenant: (state, data) => {
      Vue.set(
        state.tenants,
        state.tenants.findIndex((tenant) => tenant.id == data.id),
        data
      );
    },

    deleteTenant: (state, currentTenant) => {
      state.tenants = state.tenants.filter(
        (tenant) => tenant.id != currentTenant.id
      );
    },

    //const setTenant = tenants.find((tenant) => tenant.flat === id);
  },

  actions: {},
  modules: {},
});
