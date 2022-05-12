import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.use(vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store: store,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
