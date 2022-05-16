<template>
    <frontend>
        <v-container 
            justify-center
            class="main-top pa-0"
            id="main-top"
            fluid
        >
            
            <img src="/images/matahari.png" alt="" class="mentari">
            
            <v-row class="textContainer" style="margin-top: 50px;margin-left:50px;">
                <v-col class="white--text px-10" cols="12" sm="6">
                    <h1>SDN 1 Beda!</h1>
                    <p>Tempat belajar yang menyenangkan, menggunakan teknologi sebagai sarana dan alat pembelajaran. Disiplin sebagai jalan belajar dan sopan santun menjadi kepribadian.</p>
                    <v-btn color="primary" href="#motto">jelajah</v-btn>
                </v-col>
            </v-row>
            <img src="/images/gunung.png" alt="" class="gunung" style="left:-200px; transform: translateX(0) scale(1);">
            <img src="/images/pohon.png" alt="" class="pohon">
            <img src="/images/skola1.png" alt="" class="kantor">
            <img src="/images/siswa-l.png" alt="" class="siswa">
            <img src="/images/siswi-p.png" alt="" class="siswi">
        </v-container>
        <v-container
            class="motto d-flex align-center justify-center"
            id="motto"
            
            fluid
        >
            <!-- <div class="mottoText">
                <h1>Mandita</h1>
                <h3>( Mandiri, Disiplin, Bertakwa )</h3>
            </div> -->
            <div class="mottoImgHolder">
                <!-- <img src="/images/pramuka.jpg" alt="Mandiri" class="pramuka mottoImg">
                <img src="/images/upacara.jpg" alt="Mandiri" class="upacara mottoImg">
                <img src="/images/ngaji.jpg" alt="Mandiri" class="ngaji mottoImg"> -->

                <v-img src="/images/pramuka.jpg" width="100" class="d-flex align-end py-5" content-class="mottoImg">
                    <h1 class="white--text darken-3" style="text-shadow: 0 0 5px rgba(0,0,00,9);">Mandiri</h1>
                </v-img>
                <v-img src="/images/upacara.jpg" width="100"  class="d-flex align-end py-5">
                    <h1 class="white--text darken-3" style="text-shadow: 0 0 5px rgba(0,0,00,9);">Disiplin</h1>
                </v-img>
                <v-img src="/images/ngaji.jpg" width="100"  class="d-flex align-end py-5">
                    <h1 class="white--text darken-3" style="text-shadow: 0 0 5px rgba(0,0,00,9);">Bertakwa</h1>
                </v-img>
            </div>
            
        </v-container>
        <v-container
            class="sambutan"
            id="sambutan"
            justify-center
            align-center
            fluid
        >
            <v-row style="background:transparent!important;">
                <v-col class="d-flex justify-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sxEZ4FPXyPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-text>
                            <v-card-title><h1>Sambutan Kepala Sekolah</h1></v-card-title>
                            <v-container>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab vel placeat. Recusandae doloremque officiis quasi tempore sunt architecto. Expedita veritatis autem dolorum ab maxime quis in odit soluta nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus ullam quasi corporis ducimus sed esse voluptatum eum magni fuga earum repellendus totam aperiam, architecto cumque, deserunt aliquid pariatur aspernatur.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab vel placeat. Recusandae doloremque officiis quasi tempore sunt architecto. Expedita veritatis autem dolorum ab maxime quis in odit soluta nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus ullam quasi corporis ducimus sed esse voluptatum eum magni fuga earum repellendus totam aperiam, architecto cumque, deserunt aliquid pariatur aspernatur.</p>
                            </v-container>
                            
                        </v-card-text>
                    </v-card>
                    
                </v-col>
            </v-row>
        </v-container>
         <v-container
            class="info"
            id="info"
            fluid
        >
            <img src="/images/matahari.png" alt="" class="mentari" style="position:absolute;">
            <v-row class="d-flex" justify="center">
                <v-text-field rounded color="primary" label="Cari Info" solo append-icon="mdi-magnify"></v-text-field>
            </v-row>
            <v-row>
                
                <v-col>
                    <v-card>
                        <v-card-title>
                            Informasi Terbaru
                        </v-card-title>
                        <v-card-text>
                            <Info />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col></v-col>
            </v-row>
         </v-container>
        <v-container
            fluid
            class="ppdb pa-0"
            id="ppdb"
        >
            <v-row class="ma-5">
                <v-col>
                    <v-card>
                        <v-card-text>
                            <h1>Halo</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-btn fab dark small color="primary" style="position:fixed; bottom: 75px; right: 50px;z-index:3;opacity:0.1;" href="#" id="goUp">
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <v-dialog
            v-model="kampanye.show"
        >
            <v-sheet flat>
                <h1>{{kampanye.title}}</h1>
            </v-sheet>
        </v-dialog>
    </frontend>
</template>
<script>
import Frontend from '@/js/Layouts/Frontend.vue'
import Info from '@/js/Pages/Front/Components/Info'
export default {
    name: 'Welcome',
    components: { Frontend, Info },
    data:()=>({
        kampanye: {
            show: false,
            title: null,
            content: null
        }
    }),
    methods: {
        handleScroll() {
            const mainTop = document.querySelector('.main-top')
            let mentari = document.querySelector('.mentari')
            let gunung = document.querySelector('.gunung')
            let pohon = document.querySelector('.pohon')
            let textContainer = document.querySelector('.textContainer')

            let motto = document.querySelector('.motto')
            let mottoImgs = document.getElementsByClassName('mottoImg')
            let value = window.scrollY
            if (value > 0 ) {
                // gunung.style.transform = translateX(value * 0.25+'px')
                gunung.style.transform = 'translateX('+(value*0.20)+'px)'
                pohon.style.transform = 'translateX(-'+(value*0.25)+'px)'
                mentari.style.transform = 'translateY('+(value*0.6)+'px)'
                textContainer.style.transform = 'translateY('+(value*1.1)+'px)'

                if (value > motto.offsetTop) {
                //    for ( var i = 0; i < mottoImgs.length; i++) {
                //         mottoImgs[i].classList.add('show')
                    
                //    }
                document.querySelector('#goUp').style.opacity = '1'

                //    setTimeout(function() {
                //        let mottoText = document.querySelector('.mottoText')
                //         mottoText.style.zIndex = '100!Important'
                //         mottoText.style.position = 'absolute'
                //    }, 500)
                } else {
                    document.querySelector('#goUp').style.opacity = '0.2'
                }
            // console.log(window.scrollY)
            }
            
        }
    },
    computed: {
        route(){
            this.$page.props.route
        },
        scroll() {
            return window.scrollY
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
       
    },
    mounted(){
        // setTimeout(()=>{
        //     this.kampanye = { show: true, title: 'PPDB'}
        // }, 1000)
        
    }

}
</script>

<style scoped>
    .main-top {
        box-sizing: border-box;
        /* padding-top: 65px;*/
        margin-top: -65px;
        background-image:  url('/images/langit.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
       
        color: rgb(37, 34, 34);
        background-blend-mode:exclusion;
        overflow: hidden;
        height: 100vh;
        display: flex;
        position: relative;
    }
    /* .main-top::before{
        content: "";
        margin-top: -50px;
        background-image: linear-gradient(to top left, rgba(58, 83, 158, 0.487), rgba(230, 230, 46, 0.405));
        width: 100%;
        height: 100%;
        position:absolute;
        
    
    } */
    .main-top img {
        position: absolute;
    }
    .main-top .gunung {
        bottom: 0;
        /* left:-100px; */
        width: 75%;
    }

    .main-top .pohon {
        right: -170px;
        bottom: 0;
    }
    .main-top .kantor {
        right: -170px;
        bottom: 0;
    }
    .main-top .siswa {
        right: 300px;
        bottom: 0;
    }
    .main-top .siswi {
        right:170px;
        bottom: 0;
    }

    .info .mentari,
    .main-top .mentari {
        right: 400px;
        top: 60px;
        filter: drop-shadow(0 0 10px white);
        animation: pulse 2s linear infinite;
    }

    @keyframes pulse {
        0% {
            filter: drop-shadow(0 0 1px white);
        }

        50% {
            filter: drop-shadow(0 0 5px white);
        }
         50% {
            filter: drop-shadow(0 0 10px white);
        }
        100% {
            filter: drop-shadow(0 0 5px white);
        }
    }
    .main-top h1 {
        font-size: 3rem;
         font-family: 'Caveat', cursive;
    }
    .main-top p {
         font-family: 'Caveat', cursive;
        font-size: 2em;
    }
    .main-top h1,
    .main-top p {
        text-shadow: 0 3px 15px rgba(0,0,0,0.9);
    }
    .motto {
        /* overflow: hidden; */
        /* background: url('/images/bg.jpg'); */
        /* background-size: cover; */
        position: relative;
        height: 60vh;
    }
    .motto h1, .motto h3 {
        font-family: 'Caveat', cursive;
        text-align: center;
    }
    .motto h3 {
        font-size: 3em;
    }
    .motto h1 {
        font-size: 5em;
    }
    .motto .mottoImgHolder {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        
    }

    .motto .mottoImgHolder .v-image {
        filter: saturate(.3) ;
        transition: all .35s linear;
    }

    .motto .mottoImgHolder .v-image:hover {
        filter: saturate(1) ;
        transition: all .35s linear;
        flex-grow: 4;
        width: 100%;
        background-position: left center;
        /* transform: scale(1.3); */
    }
    .sambutan, .ppdb {
        /* background-image: linear-gradient(to bottom right, rgb(192, 243, 255), rgb(130, 237, 243)); */
        /* background-image: url('/images/asma2.png'); */
        /* background-size: 100%; */
        /* background: transparent!important; */
        position: relative;
        height: 100vh;
        display: flex;
    }
    .sambutan iframe,.sambutan h1, .sambutan .v-card,
    .ppdb iframe,.ppdb h1, .ppdb .v-card {
        z-index: 2;
    }
    .sambutan h1, p {
        font-family: 'Satisfy', cursive;
    }
    .ppdb::after,
    .sambutan::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url('/images/asma2.png');
        background-size: 100%;
        z-index: 1;
        filter: blur(2px);
        background-attachment: fixed;
    }

    .info {
        position: relative;
        min-height: 100vh;
        box-sizing: border-box;
        padding: 100px;
    }

    .info .mentari {
        opacity: 0.8;
    }
</style>