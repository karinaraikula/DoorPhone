import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import router from "./routes";

Vue.use(vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store: store,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
