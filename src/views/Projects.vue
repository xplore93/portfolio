<template>
<div class="row mx-auto">
    <Group title="Proyectos de 42Madrid" text="Los Proyectos que he realizado durante el curso en 42Madrid" url="https://github.com/xplore93/42Madrid" img="42.png" />
    <Group title="Proyectos personales" text="Los Proyectos que he realizado individualmente o en equipo" url="#" img="self.jpeg" />
</div>
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
