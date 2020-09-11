<template>
  <div class="p-5">
    <b-card-group>
      <Group
        title="Proyectos de 42Madrid"
        text="Los Proyectos que he realizado durante el curso en 42Madrid"
        url="/"
        img="42.png"
      />
      <Group
        title="Proyectos personales"
        text="Los Proyectos que he realizado individualmente o en equipo"
        url="/"
        img="self.jpeg"
      />
    </b-card-group>
  </div>
  <!--<CardGroup :color="$parent.navColor[$parent.j]" />!-->
</template>

<script>
import Group from "@/components/Projects/Group";

export default {
  name: "Projects",
  components: {
    Group,
  },
};
</script>

<style scoped>
</style>