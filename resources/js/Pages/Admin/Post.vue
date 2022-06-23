<template>
    <dash-layout>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-text>
                            <v-data-table
                                :headers="headers"
                                :items="thePosts"
                                :search="search"
                            >
                                <template v-slot:top>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="4">
                                                Data Postingan
                                            </v-col>
                                            <v-col cols="6" sm="4">
                                                <v-btn small color="primary" rounded @click="writePost"><v-icon>mdi-note-edit-outline</v-icon> <span class="d-none d-sm-inline">Buat Tulisan</span></v-btn>
                                                <v-btn small color="accent" rounded><v-icon>mdi-label</v-icon> <span class="d-none d-sm-inline">Buat Kategori</span></v-btn>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                                <v-text-field dense hide-details v-model="search" solo label="Cari" rounded append-icon="mdi-magnify" />
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </template>
                                <template v-slot:item.misc="{item}">
                                    <v-badge overlap bottom color="info">
                                        <template v-slot:badge>
                                            <small>{{item.views}}</small>
                                        </template>
                                        <v-icon color="primary">mdi-eye</v-icon>
                                    </v-badge>
                                    <v-badge overlap bottom>
                                        <template v-slot:badge>
                                            <small>{{item.liked}}</small>
                                        </template>
                                        <v-icon color="error">mdi-heart</v-icon>
                                    </v-badge>
                                    <v-badge overlap bottom color="accent">
                                        <template v-slot:badge>
                                            <small>{{item.shared}}</small>
                                        </template>
                                        <v-icon color="success">mdi-share</v-icon>
                                    </v-badge>
                                </template>
                                <template v-slot:item.opsi="{item}">
                                    <v-btn icon small><v-icon color="warning">mdi-note-edit</v-icon></v-btn>
                                    <v-btn icon small><v-icon color="error">mdi-delete</v-icon></v-btn>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <post-editor v-if="editor.show" :dialog="editor" @close="editor.show = false"></post-editor>
    </dash-layout>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'
import PostEditor from '@/js/Pages/Admin/Components/PostEditor'
export default {
    name: 'Admin.Post',
    components: {DashLayout, PostEditor},
    data: () => ({
        editor: {show: false},
        posts: [],
        search: '',
        headers: [
            {text: 'No', value: 'no' },
            {text: 'Judul', value: 'title'},
            {text: 'Kategori', value: 'category.name'},
            {text: 'Penulis', value: 'author.name'},
            {text: 'Lainnya', value: 'misc'},
            {text: 'Opsi', value: 'opsi'},
        ]
    }),
    methods: {
        getPosts() {
            axios({
                method: 'post',
                url: '/admin/post'
            }).then(res => {
                this.posts = res.data.posts
            })
        },
        writePost() {
            this.editor.show = true
        },
        editPost(post) {

        }
    },
    computed: {
        thePosts() {
            let posts = []
            this.posts.forEach((post,index) => {
                post.no = index+1
                posts.push(post)
            })

            return posts
        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>