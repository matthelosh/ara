<template>
    <v-app class="main-front">
        <Navbar />
        <slot />
        <footer id="footer">
            <v-container fluid>
                <Footer />
            </v-container>
        </footer>
    </v-app>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default {
    name: 'Frontend',
    components: {Navbar, Footer},
    data: () => ({
        menu: false,
    }),
    methods: {
    },
    created() {
    }
}
</script>

<style lang="sass">
    .main-front 
        min-height: 100vh
        height: auto
        position: relative
        background-color: aqua
    footer#footer
        background: #363636
    
</style>