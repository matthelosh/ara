<template>
    <FrontLayout>
        <v-container fill-height align-start style="min-height:100vh;padding-top:100px;background: url('/images/ngaji.jpg');background-size:cover;position: relative;" fluid>
            <div class="background-overlay"></div>
           
            <v-row>
                <v-col cols="12">
                    <v-container>
                        <v-card color="transparent" dark flat>
                            <v-card-title>
                                <h3 class="white--text">
                                    <v-icon large>mdi-newspaper</v-icon>
                                    Semua Berita
                                </h3>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="3">
                                        <v-card color="primary">
                                            <v-img src="/images/card-basic-person.png">
                                                <v-toolbar light>
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
                                                <v-card-actions>
                                                        <v-badge overlap class="mx-3" bottom>
                                                            <template v-slot:badge>
                                                                <small>{{post.views}}</small>
                                                            </template>
                                                            <v-icon >mdi-eye</v-icon>
                                                        </v-badge>
                                                        <v-badge overlap color="primary" class="mx-3" bottom>
                                                            <template v-slot:badge>
                                                                <small>{{post.liked}}</small>
                                                            </template>
                                                            <v-icon color="error">mdi-heart</v-icon>
                                                        </v-badge>
                                                        <v-badge overlap color="primary" class="mx-3" bottom>
                                                            <template v-slot:badge>
                                                                <small>{{post.shared}}</small>
                                                            </template>
                                                            <v-icon>mdi-share</v-icon>
                                                        </v-badge>
                                                        <v-spacer></v-spacer>
                                                        <Link as="v-btn" small color="primary" :href="'/berita/'+post.slug">Baca</Link>
                                                </v-card-actions>
                                            </v-img>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
                
            </v-row>
        </v-container>        
    </FrontLayout>

</template>

<script>
import {Link} from '@inertiajs/inertia-vue'
import Frontend from '../Layout/Frontend'
export default {
    name: 'Front.Berita',
    components: {FrontLayout, Link},
    data: () => ({
        posts: [],
    }),
    methods: {
        getPosts() {
                axios({
                    method: 'post',
                    url: '/berita'
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
    article.post-content
        color: #333!important
        letter-spacing: .03em
        img
            width: 100%
</style>