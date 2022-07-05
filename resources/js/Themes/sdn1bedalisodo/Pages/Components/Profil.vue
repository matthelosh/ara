<template>
    <v-container class="profil-container">
        <v-row>
            <v-col cols="12" sm="8" id="infografis-warga">
                <v-card>
                    <v-card-text>
                        <article>
                            <h1 class="text-center text-h4 font-weight-black">VISI</h1>
                            <p class="text-center">
                                <v-icon>mdi-format-quote-open</v-icon>
                                {{$page.props.sekolah.visi}}
                                <v-icon>mdi-format-quote-close</v-icon>
                            </p>
                        </article>
                        <article>
                            <h1 class="text-center text-h4 font-weight-black">MISI</h1>
                            <p class="ml-10">
                                <span v-html="$page.props.sekolah.misi"></span>
                            </p>
                        </article>

                    </v-card-text>
                </v-card>
                <v-row class="my-5">
                    <v-col cols="12" sm="6">
                        <v-card color="bg-gradient-primary" dark>
                            <v-card-text>
                                <h1 class="white--text text-h5 font-weight-400">
                                    <v-icon large color="white">mdi-account-tie</v-icon>
                                    Jumlah Guru dan Pegawai
                                </h1>
                                <h1 class="text-h1">{{guru}}</h1>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card color="bg-gradient-info" dark>
                            <v-card-text>
                                <h1 class="white--text text-h5 font-weight-400">
                                    <v-icon large color="white">mdi-human-queue</v-icon>
                                    Jumlah Siswa
                                </h1>
                                <h1 class="text-h1">{{siswa}}</h1>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4" id="sambutan-ks">
                <v-card>
                    <v-card-text>
                        <v-img src="/images/ks.png">
                            <v-container style="background: #ffffffaa;position:absolute;bottom:0;">
                                <article>
                                    <h1 style="color:#333!important;">Sambutan Kepala Sekolah</h1>
                                    <small>Slamet Hariadi, S. Pd.</small>
                                    <p>Selamat Datang di situs resmi SD Negeri 1 Bedalisodo. Situs ini adalah wujud kesadaran warga sekolah akan pentingnya teknologi informasi untuk pendidikan.</p>
                                    <Link as="v-btn" href="#"  block>Baca</Link>
                                </article>
                            </v-container>
                        </v-img>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import {Link} from '@inertiajs/inertia-vue'
export default {
    name: 'Component.Profil',
    components: {Link},
    data: () => ({
        guru: 12,
        siswa: 167

    }),
    methods: {
    },
    computed: {

    },
    mounted() {
    }
}
</script>

<style scoped lang="sass">
.profil-container
    min-height: 100vh
    box-sizing: border-box
    padding-top: 100px
</style>