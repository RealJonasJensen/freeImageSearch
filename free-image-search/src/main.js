import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://pixabay.com/api/?key=10165331-82da6047d606e6bbe100888f3&"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
