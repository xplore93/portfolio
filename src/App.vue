<template>
<Navbar />
<Header />
<transition name="route" mode="out-in">
    <router-view />
</transition>
<Footer />
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components: {
        Navbar,
        Header,
        Footer
    }
};
</script>

<style>
body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f7f8fa;
    color: #434e5e;
}

@media only screen and (min-width : 1200px) {

    .container {
        width: 1140px;
    }
}

.route-enter-from,
.route-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.route-enter-active,
.route-leave-active {
    transition: all .3s ease;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
