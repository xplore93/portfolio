<template>
  <div class="profile-teaser media flex-column flex-md-row hover">
    <figure class="mb-3 mb-md-0 mr-md-5 ml-md-0 mx-auto">
      <img
        src="@/assets/avatar.png"
        title="Hola, me llamo Eugeniu Stina"
        height="245em"
        class="avatar"
      />
    </figure>
    <div class="media-body text-center text-md-left">
      <div class="lead">Hola, me llamo</div>
      <h2 class="mt-0 display-4 font-weight-bold">Eugeniu Stina</h2>
      <div class="mb-3">
        Soy desarrollador de software y web.
        Los frameworks que más he usado en el desarrollo web son VueJS, React, NodeJS y Laravel.
        Para una plataforma entera he gestionado toda la base de datos en MySQL.
        Tengo además experiencia en C/C++, Python, Java y DevOps.
        <br />
        <br />Apasionado en la evolución tecnológica y desarrollo de aplicaciónes innovadoras y progresivas.
        Me fascina la Inteligencia Artificial, Realidad Virtual/Aumentada y el potencial que tienen en el futuro del desarrollo.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
/* Zoom Out */
.hover figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover figure:hover img {
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}
</style>