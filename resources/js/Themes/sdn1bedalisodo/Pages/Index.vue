<template>
    <div>
        <v-container fluid fill-height align-center justify-center
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
                            <div class="video-box">
                                <Video />
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
import Hero from './Components/Hero'
import Profil from './Components/Profil'
import Info from './Components/Info'
import Galeri from './Components/Galeri'
import Guru from './Components/Guru'
import Agenda from './Components/Agenda'
import Video from './Components/Video'
export default {
    name: 'Index',
    layout: Frontend,
    components: { Frontend, Info, Galeri, Guru, Agenda, Hero, Profil, Video },
    data: () => ({
        loaded: false,
        
    }),
    methods: {
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
        
        
         
        await this.handleScroll()

    },
    created() {
       
    }
}
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap')

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

</style>