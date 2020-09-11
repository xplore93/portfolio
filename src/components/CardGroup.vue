<template>
  <div>
    <b-card-group deck>
      <card
        title="Libft"
        text="This project is my very first project as a student at 42.
        I will need to recode a few functions of the C standard library
        as well as some other utility functions
        that I will use during my whole cursus."
        imgSrc="c.png"
        imgAlt="C Programming Language"
        button="GitHub"
        url="https://github.com/xplore93/Libft"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      />
      <card
        title="get_next_line"
        text="May it be a file, stdin, or even later a network connection,
        I will always need a way to read content line by line.
        It is time to start working on this function,
        which will be essential for my future projects."
        imgSrc="c.png"
        imgAlt="C Programming Language"
        button="GitHub"
        url="https://github.com/xplore93/Libft"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      />
    </b-card-group>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardGroup",
  components: {
    Card,
  },
  props: {
    color: Object,
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