<template>
    <div>
        <v-dialog
            fullscreen
            transition="dialog-bottom-transition"
            v-model="dialog.show"
            persistent
        >
            <v-card>
                <v-toolbar dense color="primary" dark>
                    <v-icon>mdi-note-edit-outline</v-icon>
                    <v-toolbar-title>Tulisan</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon color="white" @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                    label="Judul Tulisan"
                                    v-model="post.title"
                                    outlined
                                    dense
                                ></v-text-field>
                                <vue-editor
                                    id="editor"
                                    :customModules="customModulesForEditor"
                                    :editorOptions="editorSettings"
                                    useCustomImageHandler
                                    @image-added="handleImageAdded"
                                    v-model="post.content"></vue-editor>
                            </v-col>
                            <!-- :customModules="customModulesForEditor"
                                    :editorOptions="editorSettings" -->
                            <v-col cols="12" sm="4">
                                <v-row>
                                    <v-col cols="12">
                                        <v-select label="Kategori" :items="categories" value="value" text="text" outlined dense v-model="post.category_id"></v-select>
                                        <v-textarea label="Tag [ pisah dengan koma ]" outlined dense rows="3" v-model="post.tags"></v-textarea>
                                        <input type="file" ref="featuredImage" style="display:none;" @change="onSelectedFeaturedImage" />
                                        <v-img :src="defaultImage" @click="$refs.featuredImage.click()">
                                            <v-container fill-height justify-center align-center style="background: rgba(255,255,255,0.7);">
                                                <h3 class="white--text">Klik untuk Mengubah Gambar</h3>
                                            </v-container>
                                        </v-img>
                                        <v-btn block color="primary" class="my-3" @click="savePost">Simpan Tulisan</v-btn>
                                    </v-col>
                                    
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'
  import { ImageDrop } from 'quill-image-drop-module'
  import ImageResize from 'quill-image-resize-module'

  Quill.register('modules/imageDrop', ImageDrop)
  Quill.register('modules/imageResize', ImageResize)
export default {
    name: 'PostEditor',
    components: {VueEditor},
    props: {
        dialog: Object
    },
    data: () => ({
        title: null,
        content: null,
        post: {
            title: '',
            content: '',
            category_id: null,
            tags: '',
            featuredImage: '/images/card-basic-boat.png',
        },
        customModulesForEditor: [
            { alias: "imageDrop", module: ImageDrop},
            { alias: "imageResize", module: ImageResize},
        ],
        editorSettings: {
          modules: {
            imageDrop: true,
            imageResize: {}
          }
        },
        categories: [],
        defaultImage: '/images/card-basic-boat.png'
    }),
    methods: {
        savePost(){
            let post = new FormData()
            post.append("title", this.post.title)
            post.append("category_id", this.post.category_id)
            // post.append("slug", this.post.title.toLowerCase().replace(" ","-"))
            post.append("tags", this.post.tags)
            post.append("content", this.post.content)
            post.append("featuredImage", this.post.featuredImage)
            post.append("author_id", this.$page.props.user.id)
            axios({
                method: 'post',
                url: '/admin/post/create',
                data: post
            }).then(res => {
                console.log(res.data)
            }).catch( err => {
                console.log(err)
            })
        },
        onSelectedFeaturedImage(e) {
            let gambar = e.target.files[0]
            let url = URL.createObjectURL(gambar)
            this.defaultImage = url
            this.post.featuredImage = gambar

        },
        handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            var formData = new FormData()
            formData.append("image", file)
            

            axios({
                method: 'post',
                url: '/admin/post/upload-image',
                data: formData
            }).then( result => {
                const url = result.data.url
                Editor.insertEmbed(cursorLocation, "image", url)
                resetUploader()
            }).catch(err => {
                console.log(err)
            })
        },
        getCategories() {
            axios({
                method: 'post',
                url: '/admin/category'
            }).then( res => {
                let categories = []
                res.data.categories.forEach(item => {
                    categories.push({value: item.id, text: item.name})
                })
                this.categories = categories
            })
        }
    },
    computed: {

    },
    mounted() {
        this.getCategories()
    },
    beforeDestroy() {
    }
}
</script>