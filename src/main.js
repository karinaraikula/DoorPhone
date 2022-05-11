import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/index";
import vuetify from "./plugins/vuetify";
Vue.use(vuetify);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store: store,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
