<template>
    <dash-layout>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-slide-y-transition>
                        <v-card 
                            class="card-list-guru"
                            v-show="!formGuru"
                        >
                            <v-card-text>
                                <v-data-table
                                    :headers="headers"
                                    :items="gurus"
                                    :search="search"
                                    show-select
                                    :loading="loading"
                                    dense
                                    v-model="selected"
                                    item-key="id"
                                    @toggle-select-all="selectAllToggle"
                                >
                                    <template v-slot:top>
                                        <v-row>
                                            <v-col cols="12" sm="4">
                                                <h3 class="text-h5">
                                                    <v-icon>mdi-human-male-board</v-icon>
                                                    Data Guru
                                                </h3>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                                <v-btn 
                                                    class="bg-gradient-primary"
                                                    @click="formGuru = true"
                                                    small rounded dark>
                                                    <v-icon>mdi-account-plus-outline</v-icon>
                                                    <span class="d-none d-sm-inline">Tambah Data Guru</span>
                                                </v-btn>
                                                <v-btn class="info"
                                                    small rounded dark
                                                    @click="asignAccount"
                                                >
                                                    <v-icon>mdi-account-multiple-check</v-icon>
                                                    <span class="d-none d-sm-inline">Buat Akun</span>
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="12" sm="4">
                                                <v-text-field
                                                    label="Cari"
                                                    v-model="search"
                                                    append-icon="mdi-magnify"
                                                    clearable
                                                    solo
                                                    dense
                                                    rounded
                                                    color="primary"
                                                />
                                            </v-col>
                                        </v-row>
                                    </template>
                                    <template v-slot:item.data-table-select="{item, isSelected, select}">
                                        <v-simple-checkbox
                                            :value="isSelected"
                                            :readonly="item.user ? true:false"
                                            :disabled="item.user ? true:false"
                                            @input="select($event)"
                                        ></v-simple-checkbox>
                                    </template>
                                    <template v-slot:item.name="{item}">
                                        <v-btn text class="primary" small @click="editGuru(item)">
                                            {{item.user ? '@'+item.user.username:item.name}}

                                        </v-btn>

                                    </template>
                                    <template v-slot:item.ttl="{item}">
                                        {{item.tempat_lahir}}, {{item.tanggal_lahir}}
                                    </template>
                                    <template v-slot:item.is_active="{item}">
                                        <v-icon :color="item.is_active == '1' ? 'success' : 'error'">mdi-check-circle</v-icon>
                                    </template>
                                    <template v-slot:item.opsi="{item}">
                                        <v-btn icon color="error" @click="deleteGuru(item)">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-slide-y-transition>
                    <v-slide-y-reverse-transition>
                        <FormGuru v-if="formGuru" @close="onClosedForm" @saved="onSaved" :selectedGuru="selectedGuru" />
                    </v-slide-y-reverse-transition>
                </v-col>
            </v-row>
        </v-container>
        <confirm-dialog ref="confirm" />
    </dash-layout>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'
import FormGuru from '@/js/Pages/Admin/Components/FormGuru'
import ConfirmDialog from '@/js/Pages/Admin/Components/ConfirmDialog'
export default {
    name: 'Admin.Guru',
    components: {DashLayout, FormGuru, ConfirmDialog},
    data: () => ({
        loading: false,
        formGuru: false,
        search: '',
        selected: [],
        selectedGuru: {},
        gurus: [],
        headers: [
            { text: 'NIP', value: 'nip' },
            { text: 'Nama', value: 'name' },
            { text: 'Email', value: 'email' },
            { text: 'Tempat, Tgl Lahir', value: 'ttl' },
            { text: 'Alamat', value: 'alamat' },
            { text: 'HP', value: 'hp' },
            { text: 'Jabatan', value: 'jabatan' },
            { text: 'Status', value: 'is_active' },
            { text: 'Opsi', value: 'opsi' },
        ],
        disabled: 0,
    }),
    methods: {
        selectAllToggle(props) {
            if ( this.selected.length != props.items.length - this.disabled) {
                this.selected = []
                const self = this
                props.items.forEach(item => {
                    if (item.user)  self.selected.push(item)
                })
            } else {
                this.selected = []
            }
        },
        asignAccount() {
            let selected = this.selected
            this.loading = true
            axios({
                method: 'post',
                url: '/admin/user/assign-account-guru',
                data: selected
            }).then(res => {
                this.loading = false
                this.selected = []
                this.disabled = 0
                this.getGurus()
            })
        },
        onClosedForm() {
            this.formGuru = false
            this.selectedGuru = {}
        },
        onSaved() {
            this.formGuru = false
            this.getGurus()
        },
        async deleteGuru(item){
            if ( await this.$refs.confirm.open("Yakin Hapus?", `Data Guru ${item.name} Akan Dihapus. Lanjut?`)) {
                this.loading = true
                axios({
                    method: 'delete',
                    url: '/admin/guru/'+item.id
                }).then(res => {
                    this.getGurus()
                    this.loading = false
                })
            }
        },
        editGuru(item){
            this.selectedGuru = item
            this.formGuru = true
        },
        getGurus() {
            this.loading = true
            axios({
                method: 'post',
                url: '/admin/guru'
            }).then(res => {
                res.data.gurus.forEach(item => {
                    if (item.user ) this.disabled += 1
                })
                this.gurus = res.data.gurus
                this.loading = false
            }).catch(err => {
                console.log(err)
            })
        }
    },
    computed: {},
    mounted() {
        this.getGurus()
    }
}
</script>