<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="font-weight-bold text-center mb-3">Resumen de habilidades</h3>
      <div class="mx-auto text-center mb-5 text-secondary">Text</div>
      <div class="mx-auto pt-5">
        <div class="row">
          <SkillCard
            title="Frontend"
            imgSrc="frontend-icon.svg"
            :rows="['React/VueJS', 'Javascript', 'Node.js', 'HTML/CSS/SASS']"
          />
          <SkillCard
            title="Backend"
            imgSrc="backend-icon.svg"
            :rows="['Python/Django', 'Ruby/Rails', 'PHP/Laravel', 'PostgresSQL/MySQL']"
          />
          <SkillCard
            title="Otros"
            imgSrc="other-skills-icon.svg"
            :rows="['DevOps', 'Unit Testing', 'UX/Wireframing', 'Wordpress/Shopify']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from "@/components/Home/SkillCard";
export default {
  name: "Home",
  data: () => ({
    texto: "Under construction",
  }),
  components: {
    SkillCard,
  },
};
</script>

<style scoped>
</style>