<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand @mouseover="changeIcon">{{ icon[i] }}</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="goHome">Inicio</b-nav-item>
          <b-nav-item @click="goProjects">Proyectos</b-nav-item>
          <b-nav-item href="mailto:eugen.stina@gmail.com">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    icon: {
      0: "🧑‍💻",
      1: "🧑🏼‍💻",
      2: "🧑🏻‍💻",
      3: "🧑🏽‍💻",
      4: "🧑🏾‍💻",
      5: "🧑🏿‍💻",
      6: "👩🏿‍💻",
      7: "👩🏾‍💻",
      8: "👩🏽‍💻",
      9: "👩🏻‍💻",
      10: "👩🏼‍💻",
      11: "👩‍💻",
      12: "👨‍💻",
      13: "👨🏼‍💻",
      14: "👨🏻‍💻",
      15: "👨🏽‍💻",
      16: "👨🏾‍💻",
      17: "👨🏿‍💻",
    },
    i: 0,
  }),
  methods: {
    changeIcon() {
      this.i = (this.i + 1) % 18;
    },
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    goProjects() {
      this.$router.push("projects").catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>
