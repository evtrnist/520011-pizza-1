import Vue from "vue";
import App from "@/App.vue";
import { router } from "@/router/router";
import store from "@/store/index"
import '@/plugins/ui';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
