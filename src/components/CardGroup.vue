<template>
  <div>
    <b-card-group deck>
      <card
        title="Libft"
        text="This project is my very first project as a student at 42. I will need to recode a few functions of the C standard library as well as some other utility functions that I will use during my whole cursus."
        imgSrc="c.png"
        imgAlt="C Programming Language"
      />
      <card title="Titulo" text="Texto" imgSrc="cpp.png" imgAlt="alt" />
      <card title="Titulo" text="Texto" imgSrc="docker.png" imgAlt="alt" />
    </b-card-group>
    <b-card-group deck>
      <card
        title="Libft"
        text="This project is my very first project as a student at 42. I will need to recode a few functions of the C standard library as well as some other utility functions that I will use during my whole cursus."
        imgSrc="c.png"
        imgAlt="C Programming Language"
      />
      <card title="Titulo" text="Texto" imgSrc="cpp.png" imgAlt="alt" />
      <card title="Titulo" text="Texto" imgSrc="docker.png" imgAlt="alt" />
    </b-card-group>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardGroup",
  components: {
    Card,
  },
};
</script>

<style scoped>
.card-deck {
  margin: 30px 15px;
}
@media only screen and (max-width: 575px) {
  .card-deck {
    margin: 30px;
  }
}
</style>