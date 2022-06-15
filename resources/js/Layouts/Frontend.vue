<template>
    <v-app class="main-front">
        <!-- <navbar></navbar> -->
        <slot />
    </v-app>
</template>

<script>
import Navbar from './Components/Front/Navbar'
export default {
    name: 'Frontend',
    components: {Navbar}
}
</script>

<style>
    .main-front {
        min-height: 100vh;
        height: 100vh;
        position: relative;
        background-color: aqua;
    }
</style>