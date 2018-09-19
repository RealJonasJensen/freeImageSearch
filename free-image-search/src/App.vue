<template>
  <div class="wrapper">
    <app-header></app-header>
    <router-view class="content" ></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
export default {
  data() {
    return {};
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;
}
body {
  height: 100%;
}
.content {
  padding-top: 75px;
}
</style>
