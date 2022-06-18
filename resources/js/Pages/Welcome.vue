<template>
    <frontend>
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
            <!-- <div id="btn-menu" @click="showMenu">
                <span style="--i=2"></span>
                <span style="--i=3"></span>
                <span style="--i=1"></span>
            </div>
            <v-navigation-drawer v-model="menu" right width="100%" app fixed temporary>
                
                <v-container id="menu-container"  fluid fill-height align-center justify-center>
                    <ul id="main-menu">
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#profil">Profil</a></li>
                        <li><a href="#info">Informasi</a></li>
                        <li><a href="#galeri">Galeri</a></li>
                        <li><a href="#kontak">Kontak</a></li>
                    </ul>
                </v-container>
            </v-navigation-drawer>
            <v-app-bar fixed color="transparent" flat>
                <img src="/images/logo1.svg" alt="Logo" height="32px">
                <v-toolbar-title class="grey--text mx-3">SD Negeri 1 Bedalisodo</v-toolbar-title>
            </v-app-bar> -->
            
            
            <v-container id="hero" fluid fill-height align-center justify-center>

                <div class="hero-content ">
                    <h1 class="hero-title">
                        Man<span class="d-none d-sm-inline">dita<span class="dot">.</span></span>
                        <span class="d-sm-none">
                            <span><br />Di</span>
                            <span><br />Ta<span class="dot">.</span></span>
                        </span>
                    </h1>
                    <h3 class="hero-subtitle">Mandiri, Disiplin, Bertakwa</h3>
                    <p class="mt-5 black--text">

                    </p>
                </div>

                <a href="#profil" class="hero-scroll">
                    <v-icon color="white">mdi-chevron-down</v-icon>
                </a>
            </v-container>
            <v-container id="profil" fluid fill-height align-center justify-center>
                <div class="profil-content text-center">
                    <h1 class="profil-title">Profil</h1>
                    <div class="box-container">
                        <div class="visi-box box my-5 text-left">
                            <h3>Visi</h3>
                            <p>Terwujudnya Peserta Didik yang Mandiri dalam Kehidupan dan Disiplin dalam Pembelajaran yang
                                Berdasarkan pada Ketakwaan Kepada Tuhan Yang Maha Esa.</p>
                        </div>
                        <div class="misi-box box my-5 text-left">
                            <h3>Misi</h3>
                            <ol>
                                <li>Menumbuhkan Rasa Percaya Diri </li>
                                <li>Menerapkan Pendidikan yang disiplin dalam berpakaian, bersikap dan bertutur</li>
                                <li>Menumbuh kembangkan Keimanan dan ketakwaan Peserta Didik</li>
                            </ol>
                        </div>
                        <div class="tujuan-box box my-5 text-left">
                            <h3>Tujuan</h3>
                            <ol>
                                <li>Terselenggaranya pembelajaran yang merdeka</li>
                                <li>Terselenggaranya pendidikan yang kondusif dan nyaman</li>
                                <li>Terciptanya lingkungan pendidikan yang religius</li>
                            </ol>
                        </div>
                    </div>
                    <img src="/images/logo-sd.svg" alt="Logo SD" class="logo-sd">
                </div>
            </v-container>
            <v-container id="info" fluid>
                <div class="info-content">
                    <h1 class="info-content-title text-center black--text">INFORMASI</h1>
                    <info />
                </div>
            </v-container>
            <v-container id="guru" fluid >
                <div class="guru-content" >
                    <h1 class="galeri-content-title text-center mt-2 black--text">DEWAN GURU</h1>
                    <guru />
                </div>
            </v-container>
            <v-container id="galeri" fluid>
                
                <div class="galeri-content">
                    <!-- <svg id="top-divider" width="100%" height="100%" viewBox="0 0 100 100">
                        <polygon
                            points="0,0 100,0 0, 40"
                        ></polygon>
                    </svg> -->
                    <h1 class="galeri-content-title text-center mt-2">GALERI</h1>
                    <galeri />
                </div>
            </v-container>
            <v-container id="kontak" fluid>
                <div class="kontak-content">
                    <h1 class="kontak-content-title text-center mt-2">KONTAK</h1>
                    <!-- <galeri /> -->
                </div>
            </v-container>
        </v-container>
    </frontend>
</template>
<script>
import Frontend from '../Layouts/Frontend'
import Info from './Front/Components/Info'
import Galeri from './Front/Components/Galeri'
import Guru from './Front/Components/Guru'
export default {
    name: 'Welcome',
    components: { Frontend, Info, Galeri, Guru },
    data: () => ({
        loaded: false,
        
    }),
    methods: {
        // showMenu() {
        //     let menuContainer = document.querySelector('#menu-container')
        //     let btnMenu = document.querySelector('#btn-menu')
        //     btnMenu.classList.toggle('show')
        //     menuContainer.classList.toggle('shown')
        //     this.menu = !this.menu
        // },
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
                // Change btnMenu color based on fragment offset
                // let btnMenuBars = btnMenu.querySelectorAll('span')
                
                // if (gulir >= profil.offsetTop) {
                //     btnMenuBars.forEach(bar => {
                //         bar.style.background = 'red'
                //     })
                // } else {
                //     btnMenuBars.forEach(bar => {
                //         bar.style.background = '#636363'
                //     })
                // }
                // console.log(profil.offsetTop)
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
    // #app > div > div > header
    //     transition: all .35s linear
    // #app > div > div > header.scrolled
    //     border-bottom: 1px solid white!important
    //     background: #111919fa!important
    //     transition: all .35s linear
    // #btn-menu
    //     width: 50px
    //     height: 50px
    //     display: flex
    //     flex-direction: column
    //     align-content: center
    //     justify-content: center
    //     position: fixed
    //     top: 5px
    //     right: 20px
    //     z-index: 10
    //     :hover
    //         cursor: pointer
    //     span
    //         height: 2px
    //         width: 100%
    //         background: #909090
    //         margin-top: 5px 
    //         margin-bottom: 3px 
    //         transform-style: preserve-3d
    //         transition: all .35s linear
    //     span:nth-child(2)
    //         width: 80%
    // #btn-menu.show
    //     // border: 1px solid red
    //     span:nth-child(1)
    //         opacity: 0
    //         transition: all .1s ease
    //         transform: translateY(5px)
    //     span:nth-child(2)
    //         transform: rotateZ(45deg) translateX(25%)
    //         width: 60%
    //         height: 3px
    //         background: red
    //         transition: all .35s linear
    //     span:nth-child(3)
    //         transform: rotateZ(-45deg) translateX(25%)
    //         width: 60%
    //         height: 3px
    //         background: red
    //         transition: all .35s linear
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

    // #menu-container
    //     z-index: 2
    //     width: 100%
    //     height: 100%
    //     position: fixed
    //     background: #3e3e3e
    //     opacity: 0
    //     ul#main-menu
    //         list-style: none
    //         li
    //             margin: 10px 0
    //             a
    //                 display: block
    //                 text-decoration: none
    //                 color: #cfcfcf
    //                 font-size: 2rem
    // #menu-container.shown
    //     transition: all .35s linear
    //     transform: translateX(0)
    //     opacity: 1
    #hero
        position: relative
        background: url('/images/hero-bg-img.jpg')
        background-attachment: fixed
        background-size: cover
        height: 100vh
        padding: 0!important
        overflow: hidden
        .hero-content
            width: 100%
            height: 100%
            padding: 60px 20px
            background-color: #111911f0
            backdrop-filter: blur(5px)
            -webkit-backdrop-filter: blur(5px)
            color: #fff
            // z-index:1
            h1.hero-title
                line-height: 90%
                font-size: 5em
                border: 3px solid #fff
                width: 60%
                padding: 1rem
                margin-top: 50px
                // color: #333
                // font-family: 'Calistoga', cursive
                font-weight: 800
                z-index:2
                .dot
                    color: orange
                    animation: dimdot 1s ease-in-out infinite
            h3.hero-subtitle
                // color: #333
                z-index:2
        a.hero-scroll
            position: absolute
            bottom: 20px
            border: 1px solid #aaa
            padding: 10px
            text-decoration: none
            border-radius: 50%  
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
        // background: url('/images/pramuka.jpg')
        // background-size: cover
        // background-position: center
        // background-attachment: fixed
        // backdrop-filter: saturate(0.1)
        // -webkit-backdrop-filter: saturate(0, 1)
        position: relative
        min-height: 100vh
        height: auto
        // padding: 50!important
        .profil-content
            position: relative
            padding: 60px 20px
            width: 100%
            min-height: 80%
            border-radius: 5px
            box-shadow: 0 0 1px rgba(0,0,0,0.8)
            background: rgba(255,255,255,0.8)
            backdrop-filter: blur(5px)
            margin: 20px 10px
            box-sizing: border-box
            .box-container
                .box
                    border: 2px solid #333
                    padding: 20px
                    box-sizing: border-box
                    position: relative
                    color: #333
                    border-radius: 3px
                    box-shadow: 0 0 1px rgba(0,0,0,0.7), inset 0 0 1px rgba(0,0,0,0.7)
                    h3
                        position: absolute
                        top: -15px
                        background: #363636
                        padding: 0 10px
                        border: 1px solid #efefef
                        color: white
            h1.profil-title
                font-size: 2rem
                text-transform: uppercase
                color: #333
                font-weight: 800
                
            img.logo-sd
                -webkit-filter: drop-shadow(0 0 15px rgba(0,0,0,0.6))
                width: 25%
    #info
        min-height: 120vh
        background: #efefef
        // padding-top: 60px
        .info-content
            // background: #aaa
            padding: 40px 0

        // position: relative     
    #guru
        min-height: 100vh
        height: auto       
    #galeri
        min-height: 100vh
        padding: 0
        background: url('/images/upacara.jpg')
        background-size: cover
        background-attachment: fixed
        position: relative
        
        .galeri-content
            padding: 20px 20px
            width: 100%
            min-height: 100vh
            background: rgba(30,30,70,0.6)
            backdrop-filter: blur(5px)
            svg
                position: absolute
                top: 0
                left: 0
                width: 100%
                transform: translateX(-70%)
                polygon
                    fill: #eeeeee
                    
                    
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

    @keyframes dimdot
        0%
            color: transparent
        75%
            color: orange
        100%
            color: transparent

    @media screen and(min-width: 414px)
        #hero
            .hero-content
                background: #000000de
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                h1.hero-title
                    font-size: 15rem
                    width: 75%
                h3.hero-subtitle
                    font-size: 3rem
        #profil
            .profil-content
                .box-container
                    display: flex
                    justify-content: space-between
                    .box
                        margin: 20px
                        width: 33%  
                img.logo-sd
                    width: 10%
</style>