<template>
    <v-app class="main-front">
        <v-container fill-height align-center justify-center v-if="!loaded" transition="fade-transition" style="height:100vh;">
            <svg width="170" height="150" viewBox="0 0 165 150" fill="none">
                <path id="s"
                    d="M87.2377 0.042572C68.3479 1.03368 50.5576 9.23143 37.5313 22.9472C24.505 36.6629 17.2349 54.852 17.2184 73.7678H47.0403C47.0506 62.7572 51.1821 52.1494 58.6216 44.0324C66.0612 35.9154 76.2697 30.8773 87.2377 29.9099V0.042572ZM17.2184 80.8104C17.2187 80.8177 17.2189 80.825 17.2192 80.8324C17.2119 87.5793 15.6556 94.2345 12.6702 100.285C9.68482 106.335 5.35005 111.62 0 115.73V149.578C13.8444 144.178 25.739 134.729 34.1309 122.465C42.5228 110.202 47.0219 95.6925 47.041 80.8324C47.0408 80.825 47.0405 80.8177 47.0403 80.8104H17.2184Z"
                    fill="#707070" />
                <path id="d"
                    d="M94.9791 0V29.8951C105.953 30.8628 116.167 35.9059 123.608 44.0305C131.049 52.1552 135.176 62.7721 135.178 73.789C135.172 84.8033 131.043 95.4163 123.603 103.538C116.162 111.659 105.951 116.7 94.9791 117.667V147.535C113.873 146.544 131.666 138.343 144.694 124.623C157.721 110.903 164.989 92.7086 165 73.789C165 54.862 157.737 36.6566 144.709 22.9272C131.68 9.19782 113.88 0.991295 94.9791 0V0Z"
                    fill="#707070" />
                <path id="_1"
                    d="M87.1971 73.6868L59.2711 74.0052L54.1528 98.2563C54.1494 98.397 54.2666 98.5118 54.4073 98.5108L59.0874 98.4774V139.778C67.8168 144.021 77.2964 146.503 86.9849 147.083V98.276L87.1971 73.6868Z"
                    fill="#707070" />
            </svg>
        </v-container>
        <Navbar v-if="loaded" />
        <slot v-if="loaded" />
        <footer id="footer" v-if="loaded">
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
        loaded: false
    }),
    methods: {
        isLoading() {
            let s = document.querySelector('#s')
            let d = document.querySelector('#d')
            let _1 = document.querySelector('#_1')

            s.classList.add('loading')
            d.classList.add('loading')
            _1.classList.add('loading')

            setTimeout(() => {
                s.classList.remove('loading')
                d.classList.remove('loading')
                _1.classList.remove('loading')
                this.loaded = true
            }, 1000);
        },
    },
    async mounted() {
        await this.$nextTick(function () {
            this.isLoading()
        })
    }
}
</script>

<style lang="sass">
.circled
    border-radius: 50%
.bg-gradient-error 
    background: linear-gradient(to right, rgb(255, 50, 50), rgb(200, 50, 173))
    box-shadow: 0 5px 10px rgba(0,0,0,0.5)
.bg-gradient-warning
    background: linear-gradient(to right, rgb(255, 208, 50), rgb(255, 150, 203))
    box-shadow: 0 5px 10px rgba(0,0,0,0.5)
.bg-gradient-info
    background: linear-gradient(to right, rgb(59, 198, 250), rgb(117, 205, 173))
    box-shadow: 0 5px 10px rgba(0,0,0,0.5)
.bg-gradient-success
    background: linear-gradient(to right, rgb(49, 201, 68), rgb(117, 205, 203))
    box-shadow: 0 5px 10px rgba(0,0,0,0.5)
.bg-gradient-primary
    background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205))
    box-shadow: 0 5px 10px rgba(0,0,0,0.5)
.bg-gradient-primary-light
        background: linear-gradient(to right, rgb(250, 240, 255), rgb(255, 230, 250))
        // box-shadow: 0 5px 10px rgba(0,0,0,0.5);
.bg-gradient-secondary
    background: linear-gradient(to right, rgb(148, 117, 205), rgb(186, 49, 201))
    box-shadow: 0 5px 10px rgba(0,0,0,0.5)
html
    scroll-behavior: smooth
    .main-front 
        min-height: 100vh
        height: auto
        position: relative
        background-color: aqua
        #s, #d, #_1 
            fill: transparent
        #s.loading
            animation: dims 3s infinite ease
            animation-delay: 1s

        #d.loading
            animation: dimd 2s infinite ease
            animation-delay: 2s
        
        #_1.loading
            animation: dim1 1s infinite ease
            animation-delay: 3s
    footer#footer
        background: #363636

    @keyframes dims
        0%
            fill: transparent
        50%
            fill: red
            filter: drop-shadow(1px 1px 3px red)
        100%
            fill: transparent
    
    @keyframes dimd
        0%
            fill: transparent
        50%
            fill: blue
            filter: drop-shadow(1px 1px 3px blue)
        100%
            fill: transparent

    @keyframes dim1
        0%
            fill: transparent
        50%
            fill: green
            filter: drop-shadow(1px 1px 3px green)
        100%
            fill: transparent
    
</style>