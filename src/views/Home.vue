<template>
<section class="py-5">
    <div class="container">
        <h3 class="font-weight-bold text-center mb-3">Resumen de habilidades</h3>
        <div class="section-intro mx-auto text-center mb-5 text-secondary">
            Tengo más de 1 año de experiencia en la creación de aplicaciones web.
            A continuación se muestra una descripción general rápida de mis principales
            habilidades técnicas y herramientas que utilizo.
            ¿Quieres saber más sobre mi experiencia? Mira mi
            <router-link to="/resume"><b>currículum</b></router-link>.
        </div>
        <div class="row mx-auto pt-5">
            <SkillCard title="Frontend" imgSrc="frontend-icon.svg" :rows="['React/VueJS', 'Javascript', 'Node.js', 'HTML/CSS/SASS']" />
            <SkillCard title="Backend" imgSrc="backend-icon.svg" :rows="['Python/Django', 'Ruby/Rails', 'PHP/Laravel', 'PostgresSQL/MySQL']" />
            <SkillCard title="Otros" imgSrc="other-skills-icon.svg" :rows="['DevOps', 'Unit Testing', 'UX/Wireframing', 'Wordpress/Shopify']" />
        </div>
    </div>
</section>
</template>

<script>
import SkillCard from '@/components/Home/SkillCard';

export default {
    components: {
        SkillCard,
    }
};
</script>

<style scoped>
a {
    color: #434e5e;
    text-decoration: none;
}

.section-intro {
    max-width: 780px;
}
</style>
