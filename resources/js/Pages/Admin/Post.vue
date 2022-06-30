<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-text>
                            <v-slide-y-transition v-if="!editor.show">
                            <v-data-table
                                :headers="headers"
                                :items="thePosts"
                                :search="search"
                                :loading="tableLoading"
                            >
                                <template v-slot:top>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="6" sm="4">
                                                Data Postingan
                                            </v-col>
                                            <v-col cols="6" sm="4">
                                                <v-btn small class="bg-gradient-primary" dark rounded @click="writePost"><v-icon>mdi-note-edit-outline</v-icon> <span class="d-none d-sm-inline">Buat Tulisan</span></v-btn>
                                                <v-btn small color="accent" rounded><v-icon>mdi-label</v-icon> <span class="d-none d-sm-inline">Buat Kategori</span></v-btn>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                                <v-text-field dense hide-details v-model="search" solo label="Cari" rounded append-icon="mdi-magnify" />
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </template>
                                <template v-slot:item.title="{item}">
                                    <a href="#" @click.stop="editPost(item)">{{item.title}}</a>
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
                                    <v-btn icon small @click="deletePost(item)"><v-icon color="error">mdi-delete</v-icon></v-btn>
                                </template>
                            </v-data-table>
                            </v-slide-y-transition>
                            <post-editor v-if="editor.show" :dialog="editor" @close="editor = {show: false}" slide-y-reverse-transition></post-editor>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <confirm-dialog ref="confirm"></confirm-dialog>
        <v-snackbar v-model="snackbar.show" :color="snackbar.color">
            {{snackbar.text}}
        </v-snackbar>
    </div>
</template>

<script>
import Link from '@inertiajs/inertia-vue'
import DashLayout from '@/js/Layouts/Dashboard'
import PostEditor from '@/js/Pages/Admin/Components/PostEditor'
import ConfirmDialog from '@/js/Pages/Admin/Components/ConfirmDialog'
export default {
    name: 'Admin.Post',
    components: {DashLayout, PostEditor, Link, ConfirmDialog},
    layout: [DashLayout],
    data: () => ({
        editor: {show: false},
        posts: [],
        tableLoading: false,
        search: '',
        headers: [
            {text: 'No', value: 'no' },
            {text: 'Judul', value: 'title'},
            {text: 'Kategori', value: 'category.name'},
            {text: 'Penulis', value: 'author.name'},
            {text: 'Lainnya', value: 'misc'},
            {text: 'Opsi', value: 'opsi'},
        ],
        snackbar: {
            show: false,
            text: '',
            color: ''
        }
    }),
    methods: {
        async deletePost(post){
            // this.confirm = true
            let text = `Klik Lanjut untuk menghapus postingan ${post.title}, Klik Batal untuk Kembali`
            if(await this.$refs.confirm.open(`Hapus ${post.title}`, `${text}`)) {
                axios({
                    method: 'delete',
                    url: '/admin/post/'+post.id,
                    data: { _method: 'delete' }
                }).then( res => {
                    this.snackbar = { show: true, text: res.data.msg, color: 'success'},
                    this.getPosts()
                }).catch(err => {
                    this.snackbar = { show: true, text: err.response.data.msg, color: 'error'},
                    this.getPosts()
                })
            }
        },
        getPosts() {
            this.tableLoading = true
            axios({
                method: 'post',
                url: '/admin/post'
            }).then(res => {
                this.posts = res.data.posts
                this.tableLoading = false
            })
        },
        writePost() {
            this.editor.show = true
        },
        editPost(post) {
            this.editor = {
                show: true,
                post: post
            }
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