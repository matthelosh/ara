<template>
    <div>
       <div id="btn-menu" @click="showMenu">
            <span style="--i=2"></span>
            <span style="--i=3"></span>
            <span style="--i=1"></span>
        </div>
        <v-navigation-drawer v-model="menu" right width="100%" app fixed temporary>
            
            <v-container id="menu-container"  fluid fill-height align-center justify-center>
                <ul id="main-menu">
                    <li v-for="(page,i) in pages" :key="i">
                        <a :href="page.url">{{page.label}}</a>
                    </li>
                </ul>
            </v-container>
        </v-navigation-drawer>
        <v-app-bar fixed color="transparent" flat>
            <img src="/images/logo1.svg" alt="Logo" height="32px">
            <v-toolbar-title class="grey--text mx-3 logo-title">
                <a href="/" style="text-decoration: none; color: transparent;">
                    <h1>SDN1</h1>
                    <small>BEDALISODO</small>
                </a>
            </v-toolbar-title>
            <v-divider vertical class="d-none d-sm-inline mx-3" dark></v-divider>
            <div class="address">
                <p>Jl. Raya Sengon No. 293, Dalisodo</p>
                <p>Kec. Wagir, Kab. Malang, Kode Pos: 65158</p>
                <p><a href="mailto:info@sdn1-bedalisodo.sch.id">info@sdn1-bedalisodo.sch.id</a></p>
            </div>
            <div class="campaign-top ml-16 d-none d-sm-inline">
                <v-btn class="error--text">INFO PPDB 2023</v-btn>
            </div>
            <v-spacer></v-spacer>
            
        </v-app-bar>
        
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data: () => ({
        menu: false,
        pages: [
            {
                label: 'Beranda',
                url: '/'
            },
            {
                label: 'Profil',
                url: '/profil'
            },
            {
                label: 'Pengumuman',
                url: '/pengumuman'
            },
            {
                label: 'Berita',
                url: '/berita'
            },
            {
                label: 'PPDB',
                url: '/ppdb'
            },
            {
                label: 'Login',
                url: '/login'
            },
        ]
    }),
    methods: {
        showMenu() {
            let menuContainer = document.querySelector('#menu-container')
            let btnMenu = document.querySelector('#btn-menu')
            btnMenu.classList.toggle('show')
            menuContainer.classList.toggle('shown')
            this.menu = !this.menu
        },
        handleScroll() {
            window.addEventListener("scroll", function(){
                let gulir = window.scrollY
                let btnMenu = document.querySelector('#btn-menu')
                if(gulir > 60) {
                        let header = document.querySelector('header')
                        header.classList.add('scrolled')
                    }
            })
        }
    },
    created() {
        this.handleScroll()
    }
}
</script>

<style scoped lang="sass">
    html 
        scroll-behavior: smooth
    .logo-title
        background: url('/images/bg_logo.png')
        background-size: contain
        background-clip: text
        padding-top: 15px
        display: flex
        flex-direction: column
        align-items: center
        h1
            font-weight: 900
            line-height: 50%
            margin-bottom: -5px
            padding: 0
            font-style: italic
            font-size: 1.3em
            letter-spacing: .3rem
        small
            font-size: .8rem
            letter-spacing: .1rem
            margin: 0
            padding: 0
    .address
        display: flex
        flex-direction: column
        padding: 5px
        p
            padding: 0
            margin: 0  
            line-height: 1.1em
            font-size: .8rem
            color: white   
        a
            color: teal!important
            text-decoration: none 
    #app > div > header
        transition: all .35s linear
    #app > div > header.scrolled,
    header.v-app-bar--is-scrolled
        border-bottom: 1px solid white!important
        background: #111919fa!important
        transition: all .2s linear
    #btn-menu
        width: 50px
        height: 50px
        display: flex
        flex-direction: column
        align-content: center
        justify-content: center
        position: fixed
        top: 5px
        right: 20px
        z-index: 10
        :hover
            cursor: pointer
        span
            height: 2px
            width: 100%
            background: #909090
            margin-top: 5px 
            margin-bottom: 3px 
            transform-style: preserve-3d
            transition: all .35s linear
        span:nth-child(2)
            width: 80%
    #btn-menu.show
        // border: 1px solid red
        span:nth-child(1)
            opacity: 0
            transition: all .1s ease
            transform: translateY(5px)
        span:nth-child(2)
            transform: rotateZ(45deg) translateX(25%)
            width: 60%
            height: 3px
            background: red
            transition: all .35s linear
        span:nth-child(3)
            transform: rotateZ(-45deg) translateX(25%)
            width: 60%
            height: 3px
            background: red
            transition: all .35s linear
    #menu-container
        z-index: 2
        width: 100%
        height: 100%
        position: fixed
        background: #3e3e3e
        opacity: 0
        ul#main-menu
            list-style: none
            li
                margin: 10px 0
                a
                    display: block
                    text-decoration: none
                    color: #cfcfcf
                    font-size: 2rem
    #menu-container.shown
        transition: all .35s linear
        transform: translateX(0)
        opacity: 1
@media screen and (max-width: 414px)
        .address
            display: none
</style>