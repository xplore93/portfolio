<template>
  <b-card :title="title" :img-src="require('@/assets/'+imgSrc)" :img-alt="imgAlt" img-top>
    <b-card-text>{{text}}</b-card-text>
    <template v-slot:footer>
      <b-button :href="url">{{button}}</b-button>
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
    button: String,
    url: String,
  },
  methods: {
    click() {
      this.$router.push(this.url).catch(() => {});
    },
  },
};
</script>

<style>
</style>