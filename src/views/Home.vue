<template>
  <div>
    <p v-if="bool">{{ info }}</p>
    <p v-else>{{ texto }}</p>
    <button @mouseover="texto+='2'">lol</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    info: null,
    bool: false,
    texto: "Hola pisha",
  }),
};
</script>