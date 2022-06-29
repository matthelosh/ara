<template>
    <FrontLayout>
        <v-container fill-height align-start style="min-height:100vh;padding-top:60px;background: url('/images/ngaji.jpg');background-size:cover;position: relative;" fluid>
            <div class="background-overlay">
                <v-container fill-height align-center justify-center v-if="posts.length < 1">
                    <h1 class="white--text text-center text-h1">
                        Belum Ada Pengumuman <br>
                        <small class="text-h3 text-uppercase">Kembali</small>
                    </h1>
                </v-container>
                <v-container v-else>
                    <v-card color="transparent" dark flat>
                            <v-card-title>
                                <h3 class="white--text">
                                    <v-icon large>mdi-bullhorn-outline</v-icon>
                                    Semua Pengumuman
                                </h3>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="3">
                                        <v-card color="primary" dark>
                                            <v-img src="/images/card-basic-person.png">
                                                <v-toolbar>
                                                    <v-toolbar-title>
                                                        {{post.title}}
                                                    </v-toolbar-title>
                                                </v-toolbar>
                                                <v-card-text>
                                                    <v-container>
                                                        <article class="post-content">
                                                            {{post.content.replace(/(<([^>]+)>)/gi, "").substr(0, 300)}}
                                                        </article>
                                                    </v-container>
                                                </v-card-text>
                                                <v-card-actions class="pb-1">
                                                        <v-badge overlap color="error" class="mx-3">
                                                            <template v-slot:badge>
                                                                {{post.views}}
                                                            </template>
                                                            <v-icon>mdi-eye</v-icon>
                                                        </v-badge>
                                                        <v-badge overlap color="error" class="mx-3">
                                                            <template v-slot:badge>
                                                                {{post.liked}}
                                                            </template>
                                                            <v-icon>mdi-heart</v-icon>
                                                        </v-badge>
                                                        <v-badge overlap color="error" class="mx-3">
                                                            <template v-slot:badge>
                                                                {{post.shared}}
                                                            </template>
                                                            <v-icon>mdi-share</v-icon>
                                                        </v-badge>
                                                        <v-spacer></v-spacer>
                                                        <Link as="v-btn" small :href="'/pengumuman/'+post.slug" color="primary">Baca</Link>
                                                </v-card-actions>
                                            </v-img>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card> 
                </v-container>
            </div>
          <!--   <v-row>
                <v-col cols="12" v-if="posts.length > 0">
                    <v-container>
                        <v-card color="transparent" dark flat>
                            <v-card-title>
                                <h3 class="white--text">
                                    <v-icon large>mdi-bullhorn-outline</v-icon>
                                    Semua Pengumuman
                                </h3>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="3">
                                        <v-card color="primary" dark>
                                            <v-img src="/images/card-basic-person.png">
                                                <v-toolbar>
                                                    <v-toolbar-title>
                                                        {{post.title}}
                                                    </v-toolbar-title>
                                                </v-toolbar>
                                                <v-card-text>
                                                    <v-container>
                                                        <article class="post-content">
                                                            {{post.content.replace(/(<([^>]+)>)/gi, "").substr(0, 300)}}
                                                        </article>
                                                    </v-container>
                                                </v-card-text>
                                                <v-card-actions class="pb-1">
                                                        <v-badge overlap color="error" class="mx-3">
                                                            <template v-slot:badge>
                                                                {{post.views}}
                                                            </template>
                                                            <v-icon>mdi-eye</v-icon>
                                                        </v-badge>
                                                        <v-badge overlap color="error" class="mx-3">
                                                            <template v-slot:badge>
                                                                {{post.liked}}
                                                            </template>
                                                            <v-icon>mdi-heart</v-icon>
                                                        </v-badge>
                                                        <v-badge overlap color="error" class="mx-3">
                                                            <template v-slot:badge>
                                                                {{post.shared}}
                                                            </template>
                                                            <v-icon>mdi-share</v-icon>
                                                        </v-badge>
                                                        <v-spacer></v-spacer>
                                                        <Link as="v-btn" small :href="'/pengumuman/'+post.slug" color="primary">Baca</Link>
                                                </v-card-actions>
                                            </v-img>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
                <v-col cols="12" v-else>
                    <v-container fill-height align-center justify-center>
                        <div>
                            <h2>Belum Ada Pengumuman</h2>
                        </div>
                    </v-container>
                </v-col>
            </v-row> -->
        </v-container>        
    </FrontLayout>

</template>

<script>
import FrontLayout from '@/js/Layouts/Frontend'
import {Link} from '@inertiajs/inertia-vue'
export default {
    name: 'Front.Pengumuman',
    components: {FrontLayout, Link},
    data: () => ({
        posts: [],
    }),
    methods: {
        getPosts() {
            axios({
                method: 'post',
                url: '/pengumuman'
            }).then( res => {
                this.posts = res.data.posts
            }).catch(err => {
                console.log(err.response)
            })
        }
    },
    computed: {

    },
    mounted() {
        this.getPosts()
    }

}
</script>

<style lang="sass">
    .background-overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        content: ""
        background: #333333ac
        backdrop-filter: blur(5px) saturate(.5)
        box-sizing: border-box
        padding: 100px 60px
    article.post-content
        color: #333!important
        letter-spacing: .03em
        img
            width: 100%
</style>