<template>
<div class="container d-flex flex-md-row flex-column">
    <figure class="mb-3 mb-md-0 mr-md-5 ml-md-0 mx-auto">
        <img src="@/assets/avatar.png" title="Hola, me llamo Eugeniu Stina" class="avatar" loading="lazy" />
    </figure>
    <div class="text-md-left text-center">
        <div class="lead">Hola, me llamo</div>
        <h2 class="mt-0 display-4 font-weight-bold">Eugeniu Stina</h2>
        <div class="mb-3">
            Soy un desarrollador full-stack especializado en desarrollo frontend
            y backend para aplicaciones web complejas y escalables.
            <br />
            <br />
            Sigo constantemente el mercado de tecnologías y herramientas de trabajo
            para estar siempre al tanto de los cambios que se están produciendo
            en el campo de la programación Web.
        </div>
    </div>
</div>
</template>

<style scoped>
.avatar {
    height: 245px;
    width: 245px;
    -webkit-transition: .3s;
    transition: .3s;
}

.avatar:hover {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
}
</style>
