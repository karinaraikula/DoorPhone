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
    tenantProfile: {},
  },

  getters: {
    getTenantById: (state) => (id) => {
      return state.tenants.find((tenant) => tenant.id === id);
    },
  },

  mutations: {
    updateTenant(state, message) {
      state.message = message;
    },
  },
  
  updateMessage (state, message) {
    state.message = message
},


  actions: {},
  modules: {},
});
