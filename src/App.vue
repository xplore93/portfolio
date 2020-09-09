<template>
  <div>
    <Navbar />
    <Header :type="$route.name" :style="{backgroundColor: this.navColor[j][1]}" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
  },
  data: () => ({
    navColor: {
      0: {
        0: "#2e4049",
        1: "#567787",
      },
      1: {
        0: "#23624b",
        1: "#3dae84",
      },
      2: {
        0: "#5d3045",
        1: "#A05377",
      },
    },
    i: 0,
    j: 0,
  }),
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif !important;
  background: #f7f8fa !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  color: #434e5e !important;
}
</style>
