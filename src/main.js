import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/index.js";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
