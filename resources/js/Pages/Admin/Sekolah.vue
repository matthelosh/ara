<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <div class="school-card">
                        <div class="card-image">
                            <v-container fluid fill-height align-center justify-center>
                                <div style="width:100%;text-align:center;">
                                    <img src="/images/logo-sd.svg" alt="Logo SD" class="img-logo">
                                    <h3 class="text-h5 text-center">SD Negeri 1 Bedalisodo</h3>
                                </div>
                            </v-container>
                        </div>
                        <div class="card-content">
                            <v-container>
                                <table class="black--text">
                                    <tr>
                                        <td>NPSN</td>
                                        <td class="px-1">:</td>
                                        <td>20518848</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Sekolah</td>
                                        <td class="px-1">:</td>
                                        <td>SD Negeri 1 Bedalisodo</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat</td>
                                        <td class="px-1">:</td>
                                        <td>Jl. Raya Sengon No. 293</td>
                                    </tr>
                                    <tr>
                                        <td>Desa/Kelurahan</td>
                                        <td class="px-1">:</td>
                                        <td>Dalisodo</td>
                                    </tr>
                                    <tr>
                                        <td>Kecamatan</td>
                                        <td class="px-1">:</td>
                                        <td>Wagir</td>
                                    </tr>
                                    <tr>
                                        <td>Kabupaten/Kota</td>
                                        <td class="px-1">:</td>
                                        <td>Malang</td>
                                    </tr>
                                    <tr>
                                        <td>Telp./HP</td>
                                        <td class="px-1">:</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td class="px-1">:</td>
                                        <td>info@sdn1-bedalisodo.sch.id</td>
                                    </tr>
                                    <tr>
                                        <td>Website</td>
                                        <td class="px-1">:</td>
                                        <td>https://sdn1-bedalisodo.sch.id</td>
                                    </tr>
                                    
                                </table>
                            </v-container>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'

export default {
    name: 'Sekolah',
    layout: [DashLayout],
    components: {DashLayout}
}
</script>

<style scoped lang="sass">
    .school-card
        display: grid
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
        background: white
        box-shadow: 0 5px 10px rgba(0,0,0,0.2)
        box-sizing: border-box
        .card-image, .card-content
            padding: 20px
            // min-width: 410px
        .card-image
            color: white
            background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205))
            .img-logo
                width: 150px
                filter: drop-shadow(0 3px 5px rgba(0,0,0,0.5))
            h3
                text-shadow: 0 3px 5px rgba(0,0,0,0.5)
</style>