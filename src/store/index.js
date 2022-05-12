import Vue from "vue";
import Vuex from "vuex";
import store from './index';

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
      { name: "Meikäläinen", flat: 1, email: "email" },
      { name: "Mattinen", flat: 2, email: "email" },
      { name: "Menninkäinen", flat: 3, email: "email" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
