<template>
  <b-card :title="title" :img-src="require('@/assets/'+imgSrc)" :img-alt="imgAlt" img-top>
    <b-card-text>{{text}}</b-card-text>
    <template v-slot:footer>
      <b-button>Hola</b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    text: String,
    imgSrc: String,
    imgAlt: String,
  },
};
</script>

<style>
</style>