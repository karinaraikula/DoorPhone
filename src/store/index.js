import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tenants: [
      { name: "Karina", flat: 1 },
      { name: "Kaarina", flat: 11 },
      { name: "Kaaaarina", flat: 111 },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
