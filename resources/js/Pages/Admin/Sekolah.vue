<template>
    <div>
        <v-container fill-height>
            <v-row>
                <v-col>
                    <v-card color="bg-gradient-primary"  class="elevation-4">
                        <v-toolbar scrollable>
                            <v-icon class="mb-1">mdi-city</v-icon>
                            <span class="my-0 py-0 font-weight-bold text-h5">Profil<small class="font-weight-thin">Sekolah</small></span>
                            <v-spacer></v-spacer>
                            <v-btn color="bg-gradient-primary" dark @click="saveSekolah">Simpan</v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-card light>
                                            <v-card-text v-if="sekolah">
                                                <!-- <h3 class="mb-5">Data Sekolah</h3> -->
                                                <v-row>
                                                    <v-col>
                                                        <v-card outlined>
                                                            <v-card-text>
                                                                <v-row>
                                                                    <v-col class="d-flex align-start justify-center">
                                                                        <v-menu bottom left >
                                                                            <template v-slot:activator="{on, attrs}">
                                                                                <!-- <v-btn icon absolute left dark color="error" small v-bind="attrs" v-on="on" @click="getGurus"><v-icon>mdi-pencil-box</v-icon></v-btn> -->
                                                                                <v-avatar class="mx-10" size="128" v-if="sekolah" @click="getGurus" v-bind="attrs" v-on="on">
                                                                                    <img :src="'/storage/uploads/img/guru/'+sekolah.kepsek.nip+'.jpg'" alt="Kepala Sekolah" onerror="this.onerror=null; this.src='/images/1.png'">
                                                                                </v-avatar>
                                                                            </template>
                                                                            <v-list>
                                                                                <v-list-item v-for="guru in gurus" :key="guru.id" @click="changeKepsek(guru.nip)">
                                                                                    <v-list-item-avatar>
                                                                                        <img :src="'/storage/uploads/img/guru/'+guru.nip+'.jpg'" 
                                                                                            alt="Foto"
                                                                                            onerror="this.onerror=null;this.src='/images/1.png'"
                                                                                        >
                                                                                    </v-list-item-avatar>
                                                                                    <v-list-item-content>
                                                                                        <v-list-item-title>
                                                                                            {{guru.name}}
                                                                                        </v-list-item-title>
                                                                                    </v-list-item-content>
                                                                                </v-list-item>
                                                                            </v-list>
                                                                        </v-menu>
                                                                        <input type="file" ref="logo" class="d-none" @change="onLogoSelected">
                                                                        <v-avatar tile size="128" class="mx-10" @click="$refs.logo.click()">
                                                                            <img :src="logo" class="elevation-3" alt="Logo" onerror="this.onerror=null;this.src='/images/logo-new.svg'">
                                                                        </v-avatar>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="NSS" v-model="sekolah.nss" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="NPSN" v-model="sekolah.npsn" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="8">
                                                        <v-text-field label="Nama Sekolah" v-model="sekolah.nama" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="4">
                                                        <v-select label="Status" :items="['Negeri', 'Swasta']" v-model="sekolah.status_sekolah_str" outlined dense hide-details />
                                                    </v-col>
                                                    <v-col cols="12" sm="9">
                                                        <v-text-field label="Alamat" v-model="sekolah.alamat_jalan" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="3">
                                                        <v-text-field label="Kode Pos" v-model="sekolah.kode_pos" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6" sm="3">
                                                        <v-text-field label="RT" v-model="sekolah.rt" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6" sm="3">
                                                        <v-text-field label="RW" v-model="sekolah.rw" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="Dusun" v-model="sekolah.dusun" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="Desa / Kelurahan" v-model="sekolah.desa_kelurahan" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="Kecamatan" v-model="sekolah.kecamatan" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="Kota/Kabupaten" v-model="sekolah.kabupaten_kota" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field label="Provinsi" v-model="sekolah.provinsi" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="4">
                                                        <v-text-field label="Telepon" v-model="sekolah.nomor_telepon" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="8">
                                                        <v-text-field label="Email" v-model="sekolah.email" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                        <v-text-field label="website" v-model="sekolah.website" outlined dense hide-details></v-text-field>
                                                    </v-col>
                                                    
                                                </v-row>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-card v-if="sekolah">
                                            <v-card-title>Visi Misi Sekolah</v-card-title>
                                            <v-card-text class="text-center">
                                                <v-textarea label="Visi" v-model="sekolah.visi" outlined dense hide-details rows="2"></v-textarea>
                                                <vue-editor
                                                    class="mt-5"
                                                    v-model="sekolah.misi"
                                                    label="Misi"
                                                ></vue-editor>
                                                <vue-editor
                                                    class="mt-5"
                                                    v-model="sekolah.tujuan"
                                                    label="Tujuan"
                                                ></vue-editor>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar v-model="snackbar.show" top right :color="snackbar.color" :timeout="2000">{{snackbar.text}}</v-snackbar>
    </div>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'
import { VueEditor, Quill } from 'vue2-editor'
export default {
    name: 'Sekolah',
    layout: DashLayout,
    components: {VueEditor},
    data: () => ({
        snackbar: { show: false, },
        sekolah: null,
        gurus: [],
        logo: '/storage/uploads/img/logo.png',
        fileLogo: null
    }),
    methods: {
        onLogoSelected(e) {
            let logo = e.target.files[0]
            this.logo = URL.createObjectURL(logo)
            let fd = new FormData()
            fd.append("fileLogo", logo)
            axios({
                method: 'post',
                url: '/admin/sekolah/logo/store',
                data: fd
            }).then(res => {
                this.snackbar = { show: true, text: res.data.msg, color: 'bg-gradient-success'}
            })
        },
        saveSekolah() {
            // console.log(this.sekolah)
            axios({
                method: 'put',
                url: '/admin/sekolah',
                data: this.sekolah
            }).then(res => {
                this.snackbar = { show: true, text: res.data.msg, color: 'bg-gradient-success'}
            }).catch(err => {
                console.log(err)
                this.snackbar = { show: true, text: err.response.data.msg, color: 'bg-gradient-error'}
            })
        },
        changeKepsek(nip){
            this.sekolah.ks = nip
            // this.sekolah.kepsek = _.find(this.gurus, (guru => guru.nip == nip))
            axios({
                method: 'put',
                url: '/admin/sekolah/'+this.sekolah.id,
                data: {kepsek: nip}
            }).then( res => {
                this.sekolah.kepsek = _.find(this.gurus, (guru => guru.nip == nip))
                this.snackbar = { show: true, text: res.data.msg, color: 'bg-gradient-success'}
            }).catch(err => {
                this.snackbar = { show: true, text: err.response.data.msg, color: 'bg-gradient-error'}
            })
        },
        getGurus() {
            axios({
                method: 'post',
                url: '/admin/guru'
            }).then(res => {
                this.gurus = res.data.gurus
            }).catch(err => {
                this.snackbar = { show: true, text: err.response.data.msg, color: 'bg-gradient-error'}
            })
        }
    },
    mounted() {
        this.sekolah = this.$page.props.sekolah ? this.$page.props.sekolah : {}
    }
}
</script>

<style scoped lang="sass">

</style>