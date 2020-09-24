<template>
<div class="text-white py-5" :style="{ 'background-color': accentColor[1] }">
    <Home v-if="$route.name == 'Home'" />
    <Projects v-else-if="$route.name == 'Projects'" />
</div>
</template>

<script>
import Home from './Header/Home';
import Projects from './Header/Projects';
import {
    mapState
} from "vuex";

export default {
    computed: mapState(["accentColor"]),
    components: {
        Home,
        Projects,
    }
};
</script>
