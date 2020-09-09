<template>
  <div class="wrapper">
    <b-navbar
      toggleable="sm"
      type="dark"
      :style="{backgroundColor: this.$parent.navColor[$parent.j][0]}"
    >
      <b-navbar-brand
        @mouseover="changeIcon"
        @click="changeColor"
        id="ico"
        title="Estoy trabajando, si quieres cambiar los colores, haz click sobre mi =)"
      >{{ icon[$parent.i] }}</b-navbar-brand>
      <b-navbar-brand href="https://twitter.com/Eugeniu_93" id="social">
        <b-img-lazy :src="require('@/assets/social/twitter.svg')" id="icon"></b-img-lazy>
      </b-navbar-brand>
      <b-navbar-brand href="https://www.linkedin.com/in/estina/" id="social">
        <b-img-lazy :src="require('@/assets/social/linkedin.svg')" id="icon"></b-img-lazy>
      </b-navbar-brand>
      <b-navbar-brand href="https://github.com/xplore93" id="social">
        <b-img-lazy :src="require('@/assets/social/github.svg')" id="icon"></b-img-lazy>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            @click="$router.push('/').catch(() => {})"
            :active="$route.name =='home'"
          >Inicio</b-nav-item>
          <b-nav-item
            @click="$router.push('projects').catch(() => {})"
            :active="$route.name =='projects'"
          >Proyectos</b-nav-item>
          <b-nav-item
            @click="$router.push('resume').catch(() => {})"
            :active="$route.name =='resume'"
          >Resume</b-nav-item>
          <b-nav-item>Contacto</b-nav-item>
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
  }),
  methods: {
    changeIcon() {
      this.$parent.i = (this.$parent.i + 1) % 18;
    },
    changeColor() {
      this.$parent.j = (this.$parent.j + 1) % 3;
    },
  },
};
</script>

<style scoped>
.wrapper {
  z-index: 128;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
#ico {
  cursor: pointer;
}
#icon {
  height: 0.875em;
}
#social {
  width: 36px;
  height: 36px;
  padding-top: 2px;
  display: inline-block;
  text-align: center;
  border-radius: 30%;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
#social:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
