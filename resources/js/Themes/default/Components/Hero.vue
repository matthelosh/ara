<template>
    <v-container fill-height fluid class="pa-0" style="position: relative;">
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
</template>

<script>

export default {
    name: 'Hero',

    data: () => ({
        
    })
}

</script>

<style scoped lang="sass">
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
        left: 50%
        transform: translateX(-50%)
        bottom: 20px
        border: 1px solid #aaa
        padding: 10px
        text-decoration: none
        border-radius: 50%  
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
</style>