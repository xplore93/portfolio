<template>
  <div class="text-white py-5">
    <div class="container" v-if="type == 'home'">
      <Home />
    </div>
    <div v-else-if="type == 'projects'">
      <Projects />
    </div>
    <div v-else>
      <!-- //TODO !-->
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import Projects from "./Projects";

export default {
  name: "Header",
  props: {
    type: String,
  },
  components: {
    Home,
    Projects,
  },
};
</script>

<style scoped>
</style>