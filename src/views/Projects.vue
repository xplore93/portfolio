<template>
  <CardGroup :color="$parent.navColor[$parent.j]" />
</template>

<script>
import CardGroup from "../components/CardGroup";

export default {
  name: "Projects",
  components: {
    CardGroup,
  },
};
</script>