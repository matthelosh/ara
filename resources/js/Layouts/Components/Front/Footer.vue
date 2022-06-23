<template>
    <v-container>
        <v-row class="footer-kontak my-6">
            <v-col cols="12" sm="4">
                <div class="address-box text-center">
                    <img src="/images/logo-sd.svg" alt="Logo SD" width="100">
                    <p class="white--text mt-5">
                        Jl. Raya Sengon No. 293, Dalisodo <br>
                        Kec. Wagir, Kode Pos 65158 <br>
                        Kab. Malang, Jawa Timur, Indonesia <br>
                        <a href="mailto:info@sdn1-bedalisodo.sch.id">info@sdn1-bedalisodo.sch.id</a>
                    </p>
                    <p class="sosmed">
                        <a href="#"><v-icon>mdi-facebook</v-icon></a>
                        <a href="#"><v-icon>mdi-twitter</v-icon></a>
                        <a href="#"><v-icon>mdi-youtube</v-icon></a>
                        <a href="#"><v-icon>mdi-instagram</v-icon></a>
                        <a href="#"><v-icon>mdi-whatsapp</v-icon></a>
                    </p>
                </div>
            </v-col>
            <v-col cols="12" sm="4">
                <div class="links-box white--text">
                    <h3>Pranala Luar:</h3>
                    <ul>
                        <li>
                            <a href="https://kemdikbud.go.id" target="_blank">Kemdikbud</a>
                        </li>
                        <li>
                            <a href="https://kemenag.go.id" target="_blank">Kemenag</a>
                        </li>
                        <li>
                            <a href="http://rapor.sdn1-bedalisodo.sch.id" target="_blank">E-Rapor</a>
                        </li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="12" sm="4">
                <div class="kontak-box">
                    <v-card flat outlined color="transparent" dark>
                        <v-card-text>
                            <v-form @submit.prevent="submit">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                            label="Masukkan Nama"
                                            outlined
                                            hide-details
                                            dense
                                            color="white"
                                        />
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            label="Masukkan Email"
                                            outlined
                                            hide-details
                                            dense
                                        />
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea
                                            dense
                                            label="Berikan Masukan Anda"
                                            outlined
                                            hide-details
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-btn block type="submit" outlined dark color="white">Kirim</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
        <v-row class="footer-copy" fluid>
            <v-col>
                <p>
                    &copy; {{year}} - SD Negeri 1 Bedalisodo
                </p>
            </v-col>
            <v-col></v-col>
            <v-col class="text-right">Built with <v-icon small color="error">mdi-heart</v-icon> by <a href="mailto:matthelosh@gmail.com">Mat Soleh</a></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({

    }),
    computed: {
        year() {
            let date = new Date()
            return date.getFullYear()
        }
    }
}
</script>

<style scoped>
    .footer-kontak a {
        color: teal;
    }

    .footer-kontak .sosmed a {
        text-decoration: none;
        
    }
    .links-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .links-box ul{
        list-style: none;
        padding: 0;
        
    }

    .links-box ul li {
        margin: 0;
        padding: 0;
    }

    .footer-copy {
        background: #222;
         box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .footer-copy p {
        padding: 0;
        margin: 0;
        color: #acacac;
       
    }
</style>