<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand>👨🏻‍💻</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/"><b-nav-item>Inicio</b-nav-item></router-link>
          <router-link to="/projects"><b-nav-item>Proyectos</b-nav-item></router-link>
          <b-nav-item href="mailto:eugen.stina@gmail.com">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
</style>
