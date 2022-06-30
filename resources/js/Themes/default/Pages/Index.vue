<template>
    <div>
        <v-container fill-height align-center justify-center v-if="!loaded" transition="fade-transition">
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
        <v-container v-if="loaded" fluid fill-height align-center justify-center
            style="background: #efefef;position:relative;padding:0;" transition="fade-transition">
            
            <v-container id="hero" fluid fill-height align-center justify-center>
                <Hero />
            </v-container>
            <v-container id="profil" fluid fill-height align-start justify-center>
                <Profil />
                    
            </v-container>
            <v-container id="info" fluid>
                <div class="info-content">
                    <info />
                </div>
            </v-container>
            <v-container id="guru" fluid >
                <div class="guru-content" >
                    <guru />
                </div>
            </v-container>
            <v-container id="galeri" fluid>
                
                <div class="galeri-content">
                    <v-container>
                    <v-row>
                        <v-col cols="12" sm="8">
                            <h1 class="text-center white--text">
                                <v-icon color="white" large>mdi-image-multiple</v-icon>
                                Galeri
                            </h1>
                            <galeri />
                        </v-col>
                        <v-col cols="12" sm="4">
                            <h1 class="text-center white--text mb-3">
                                <v-icon color="white" large>mdi-video</v-icon>
                                Video
                            </h1>
                            <div class="agenda-box">
                                
                                
                            </div>
                        </v-col>
                    </v-row>
                    </v-container>
                </div>
            </v-container>
        </v-container>
    </div>
</template>
<script>
import Frontend from '../Layout/Frontend'
import Hero from '../Components/Hero'
import Profil from '../Components/Profil'
import Info from '../Components/Info'
import Galeri from '../Components/Galeri'
import Guru from '../Components/Guru'
import Agenda from '../Components/Agenda'
export default {
    name: 'Index',
    layout: [Frontend],
    components: { Frontend, Info, Galeri, Guru, Agenda, Hero, Profil },
    data: () => ({
        loaded: false,
        
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
        handleScroll() {
            window.addEventListener("scroll", function () {
                let gulir = window.scrollY
                let hero = document.querySelector('#hero')
                let profil = document.querySelector('#profil')
                let info = document.querySelector('#info')
                let galeri = document.querySelector('#galeri')
                let kontak = document.querySelector('#kontak')
            })
        },
    },
    async mounted() {
        
        await this.$nextTick(function () {
            this.isLoading()

        })
         
        await this.handleScroll()

    },
    created() {
       
    }
}
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap')
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

    #hero
        position: relative
        background: url('/images/hero-bg-img.jpg')
        background-attachment: fixed
        background-size: cover
        height: 100vh
        padding: 0!important
        overflow: hidden
    #profil::before
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: url('/images/pramuka.jpg')
        background-size: cover
        background-position: center
        background-attachment: fixed
        filter: invert(70%)
    #profil
        position: relative
        min-height: 100vh
        height: auto
        // .profil-content
        //     position: relative
        //     padding: 60px 20px
        //     width: 100%
        //     min-height: 80%
        //     border-radius: 5px
        //     box-shadow: 0 0 1px rgba(0,0,0,0.8)
        //     background: rgba(255,255,255,0.8)
        //     backdrop-filter: blur(5px)
        //     margin: 20px 10px
        //     box-sizing: border-box
        //     .box-container
        //         .box
        //             border: 2px solid #333
        //             padding: 20px
        //             box-sizing: border-box
        //             position: relative
        //             color: #333
        //             border-radius: 3px
        //             box-shadow: 0 0 1px rgba(0,0,0,0.7), inset 0 0 1px rgba(0,0,0,0.7)
        //             h3
        //                 position: absolute
        //                 top: -15px
        //                 background: #363636
        //                 padding: 0 10px
        //                 border: 1px solid #efefef
        //                 color: white
        //     h1.profil-title
        //         font-size: 2rem
        //         text-transform: uppercase
        //         color: #333
        //         font-weight: 800
                
        //     img.logo-sd
        //         -webkit-filter: drop-shadow(0 0 15px rgba(0,0,0,0.6))
        //         width: 25%
    #info
        min-height: 120vh
        background: #efefef
        .info-content
            padding: 40px 0
    #guru
        min-height: 100vh
        background: #fefefe
        height: auto      
        overflow: hidden 
    #galeri
        min-height: 100vh
        padding: 0
        background: url('/images/upacara.jpg')
        background-size: cover
        background-attachment: fixed
        position: relative
        .galeri-content
            padding: 20px 0
            width: 100%
            min-height: 100vh
            background: rgba(30,30,70,0.6)
            backdrop-filter: blur(5px)
            h1
                color: #fff

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


    // @media screen and(min-width: 414px)
    //     #profil
    //         .profil-content
    //             .box-container
    //                 width: 100%
    //                 display: flex
    //                 // flex-direction: column
    //                 justify-content: space-between
    //                 .box
    //                     margin: 20px
    //                     // width: 33%  
    //             .box-sambutan
    //                 width: 100%
    //                 border: 2px solid black
    //                 border-radius: 3px
    //                 position: relative
    //                 padding: 20px
    //                 box-sizing: border-box
</style>