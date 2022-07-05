<template>
    <div>
        <v-sheet height="65" :style="'background:url(/images/hero-bg-img.jpg);background-size:cover;position:relative;'">
            <v-container fluid class="info-header " >
                
            </v-container>
        </v-sheet>
        <v-container fluid class="info-container pt-10">
            <v-row>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="8">
                            <v-card>
                                <div class="sosmed-box">
                                    <a :href="'https://www.facebook.com/sharer/sharer.php?u='+currentUrl" target="_blank"><v-icon>mdi-facebook</v-icon></a>
                                    <a :href="'https://twitter.com/intent/tweet?url='+currentUrl" target="_blank"><v-icon>mdi-twitter</v-icon></a>
                                    <a :href="'whatsapp://send?text='+currentUrl" target="_blank"><v-icon>mdi-whatsapp</v-icon></a>
                                </div>
                                <!-- <v-card-title color="primary"> -->
                                    <v-breadcrumbs :items="breadcrumbs" class="breadcrumbs">
                                        <template v-slot:divider>
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </template>
                                    </v-breadcrumbs>
                                <!-- </v-card-title> -->
                                <v-card-text class="info-content">
                                    
                                    <h4 class="text-h4 title">{{post.title}}</h4>
                                    <p class="text-caption teal--text">
                                        <v-icon small color="teal">mdi-calendar</v-icon> {{post.created_at}} | 
                                        <v-icon small color="teal">mdi-eye</v-icon> {{post.views}} |
                                        <v-icon small color="teal">mdi-share</v-icon> {{post.shared}} |
                                        <v-icon small color="error">mdi-heart</v-icon> <span class="error--text">{{post.liked}}</span> | 
                                        <v-icon small color="teal">mdi-comment-multiple-outline</v-icon> 20
                                    </p>
                                    <!-- <v-divider class="mb-4" color="teal" dashed></v-divider> -->
                                    <article v-html="post.content" class="post-content"></article> 
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-row>
                                <v-col>
                                    <v-card>
                                        <v-card-text class="d-flex align-center">
                                            <v-avatar size="100" rounded>
                                                <img src="/images/1.png" alt="">
                                            </v-avatar>
                                            <div class="author-info ml-3" >
                                                <h3 class="ma-0 pa-0">{{author.userable.name}}</h3>
                                                <small class="teal--text">@{{author.username}}</small><br>
                                                <p class="text-caption ma-0">{{author.userable.jabatan}}</p>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-card>
                                        <v-card-text>
                                            <h3 class="text-h5">Tulisan Terkait</h3>
                                            <!-- <p>{{currentUrl}}</p> -->
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Frontend from '../Layout/Frontend'
export default {
    name: 'Baca',
    components: {Frontend},
    layout: Frontend,
    data: () => ({
        post: {},
    }),
    methods: {
        getPost() {
            let path = window.location.pathname
            let text = path.split('/')
            // alert(text[1])
            axios({
                method: 'post',
                url: '/'+text[1]+'/'+text[2]
            }).then(res => {
                this.post = res.data.post
            })
        }
    },
    computed: {
        route() {
            return this.$route
        },
        breadcrumbs() {
            let path = window.location.pathname
            let text = path.split('/')
            return [
                {
                text: 'Beranda',
                disabled: false,
                href: '/',
                },
                {
                text: text[1],
                disabled: false,
                href: '/'+text[1],
                },
                {
                text: 'baca',
                disabled: true,
                href: this.currentUrl,
                },
            ]
        },
        currentUrl(){
            return window.location.href
        },
        author(){
            let dummy = {
                name: 'Anomin',
                bio: 'Not Available',
                username: 'anonim'
            }

            return this.post.author ? this.post.author : dummy
        }
    },
    mounted(){
        this.getPost()
    }
}
</script>

<style lang="sass">
.info-header
    background: #334444cf
    backdrop-filter: blur(10px)
    height: 100%
    // padding-top: 67px
    display: flex
    flex-direction: column
    align-items: center
    .meta
        display: flex
        align-items: center
    h1, h3
        color: white!important
.info-container
    background: #eee
    padding-bottom: 50px
    .info-content
        // .breadcrumbs
        //     // height: 50px
        //     // background: pink
        //     border-bottom: 2px dashed #63636344
        h4.title
            font-weight: 800
            letter-spacing: .1em!important
            color: #444!important
        article
            img
                width: 100%
    .sosmed-box
        position: absolute
        width: 50px
        top: 30%
        height: 100px
        transform: translateX(-100%)
        box-sizing: border-box
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-around
        a
            text-decoration: none
@media screen and(max-width: 414px)
    
</style>