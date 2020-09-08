<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand>👨🏻‍💻</b-navbar-brand>

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
  methods: {
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
