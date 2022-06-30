<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-card>
                    <v-card-title>
                        <h3>
                            <v-icon large>mdi-bullhorn-outline</v-icon> 
                            PENGUMUMAN
                        </h3>
                        <v-spacer></v-spacer>
                        <Link href="/pengumuman" v-if="notices.items.length > 0">
                            <small class="font-weight-light text-body-2">Lihat Semua</small>
                        </Link>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mt-3"></v-divider>
                        <v-list three-line v-if="notices.items.length > 0">
                            <template v-for="(notice, i) in notices.items" >
                                <v-list-item :key="i">
                                    <v-list-item-avatar rounded>
                                        <img :src="'/storage/img/galeri/'+(i+1)+'.png'" alt="Gambar ">
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-wrap text-justify">
                                            <h3><Link :href="'/pengumuman/'+notice.slug">{{notice.title}}</Link></h3>
                                        </v-list-item-title>
                                        <v-list-item-subtitle><span v-html="notice.content"></span></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-pagination
                                    v-show="notices.total_pages > 1"
                                    v-model="noticePage"
                                    :length="notices.total_pages"
                                ></v-pagination>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        <v-list v-else>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Belum Ada Pengumuman</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
                <Agenda class="mt-1" />
            </v-col>
            <v-col cols="12" sm="8">
                <!-- <h2>Berita</h2> -->
                <div class="info-container">
                    <v-card class="judul">
                        <v-card-title>
                            <h3><v-icon large>mdi-newspaper</v-icon> BERITA TERBARU</h3>
                            <v-spacer></v-spacer>
                            <Link href="/berita" v-if="beritas.items.length > 0">
                                <small class="font-weight-light text-body-2">Lihat Semua</small>
                            </Link>
                        </v-card-title>
                    </v-card>
                    <div class="info-card" v-for="berita in beritas.items" v-if="beritas.items.length > 0">
                        <h1><Link :href="'/berita/'+berita.slug">{{berita.title}}</Link></h1>
                        <span class="meta">{{ tanggal(berita.created_at) }} | {{berita.views}} <v-icon small color="teal">mdi-eye</v-icon>  | {{berita.category.name}}</span>
                        <v-divider class="mt-1 mb-3"></v-divider>
                        <span v-html="berita.content.substr(0, 100)" class="d-none d-sm-flex black--text"></span>
                        <Link :href="'/berita/'+berita.slug">Baca</Link>
                    </div>

                    <v-alert v-else>
                        Belum Ada Berita
                    </v-alert>
                </div>
                <v-pagination
                    class="my-5"
                    v-show="beritas.total_pages > 1"
                    v-model="infoPage"
                    :length="beritas.total_pages"
                ></v-pagination>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'
import Agenda from './Agenda'
import { Paginate } from '@/js/plugins/Pagination'
export default {
    name: 'Info',
    components: {Link, Agenda},
    data: () =>({
        posts: [],
        infoPage: 1,
        infoPageLength: 10,
        noticePage: 1,
        noticePageLength: 5
    }),
    methods: {
        getPosts() {
            axios({
                method: 'post',
                url: '/post'
            }).then( res => {
                this.posts = res.data.posts
            }).catch(err => {
                console.log(err.response)
            })
        },
        tanggal(date) {
            let tanggal = new Date(date)
            const bulans = ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
            return tanggal.getDate()+' '+bulans[tanggal.getMonth()]+' '+tanggal.getFullYear()
        }
    },
    computed: {
        beritas() {
            let beritas =  _.filter(this.posts, (post) => !_.includes('Pengumuman', post.category.name))
            let paged = Paginate(beritas, this.infoPage, this.infoPageLength)
            return paged
        },
        notices() {
            let notices =  _.filter(this.posts, {category: {name: 'Pengumuman'}})
            return Paginate(notices, this.noticePage, this.noticePageLength)
        },
        
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style scoped lang="sass" >
    a
        text-decoration: none
        color: teal!important
        :visited
            color: teal
    .info-container
        display: grid
        grid-template-columns: auto
        gap: 10px
        .judul
            grid-area: span 1/ span 1
            // row-gap: 0
            h1
                // font-weight: 800
                // letter-spacing: .2em
                color: black   
        .info-card
            position: relative
            width: 100%
            // margin: 20px auto
            background: #fff
            padding: 20px
            box-shadow: 0 0 10px rgba(0,0,0,0.1)
            border-radius: 3px
            h1
                line-height: 100%
                font-size: 1.3rem
                color: #333
                height: 75px
            span.meta
                font-size: .8rem
                color: #236767
    @media screen and (max-width: 414px)
        .info-container
            // background: orange
    
    @media screen and (min-width: 415px)
        .info-container
            // background: pink
            // display: flex
            // justify-content: center
            // flex-wrap: wrap
            display: grid
            grid-template-columns: auto auto auto
            // column-gap: 20px
            gap: 10px
            .judul
                grid-area: span 1/ span 3 
            .info-card
                // position: relative
                width: 100%
                // margin: 20px
                background: #fff
                padding: 20px
                box-shadow: 0 0 10px rgba(0,0,0,0.1)
                border-radius: 3px
                h1
                    line-height: 100%
                    font-size: 1.3rem
                    color: #333
                    height: 75px
                span.meta
                    font-size: .8rem
                    color: #236767
            
</style>