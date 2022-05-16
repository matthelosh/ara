<template>
    <v-app class="main-front">
        <navbar></navbar>
        <v-main >
            <slot />
        </v-main>
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
       
        background-size: 100%;
        /* background: pink!important; */
    }
</style>