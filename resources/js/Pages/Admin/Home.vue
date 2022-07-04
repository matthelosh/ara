<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="6" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover color="bg-gradient-primary" dark>
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-typewriter</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Artikel</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-info">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-image</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Galeri</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-success">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-video</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Video</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-warning">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-calendar</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Agenda</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                
                <v-col cols="12" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-error">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-account-tie</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Guru & PTK</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-primary">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-human-queue</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Siswa</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-info">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-mailbox</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Surat</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="elevation-3 card-dashboard" height="150" hover dark color="bg-gradient-success">
                        <v-icon style="position:absolute;bottom:0;left:0;font-size: 10rem; color: #ffffff33; transition: all .2s ease-in-out" class="icon">mdi-google-classroom</v-icon>
                        <v-card-text style="position:absolute;top:0;left:0;width:100%;height:100%;" class="card-content">
                            <h1 class="text-h4 mt-3 title">Rombel</h1>
                            <h1 class="text-right mt-13 total" style="font-weight:800;font-size: 4rem;color:#fff!important;">123</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-card>
                        <v-card-title class="text-h4">
                            <v-icon large>mdi-gender-male-female</v-icon>
                            Data Jenis Kelamin Siswa
                        </v-card-title>
                        <v-card-text>
                            <DonutChart :chartId="'chartSiswaJK'" :datasets="[89,60]" :labels="['Laki-laki','Perempuan']" :colors="['teal','pink']" :height="150" :width="150" />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card>
                        <v-card-title class="text-h4">
                            <v-icon large>mdi-gender-male-female</v-icon>
                            Data Rombel
                        </v-card-title>
                        <v-card-text>
                            <BarChart :chartId="'barChartRombel'" :datasets="[[12,15,10,9,22,27],[10,11,13,15,20,7]]" :labels="[['Kelas 1','Kelas 2', 'Kelas 3','Kelas 4','Kelas 5', 'Kelas 6'],['Laki-laki','Perempuan']]" :colors="['#8978ff', '#fe8978']" :height="150" :width="150" />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'
import DonutChart from '@/js/Pages/Admin/Components/DonutChart'
import BarChart from '@/js/Pages/Admin/Components/BarChart'
export default {
    name: 'Admin.Home',
    components: {DonutChart, BarChart},
    layout: DashLayout,
}
</script>

<style scoped lang="sass">
    .card-dashboard:hover
        h1.total
            font-size: 5rem!important
            transform: trnslateY(-40px)!important
@media screen and(min-width: 415px)
    .card-dashboard:hover 
        .icon 
            transform: translateY(-10px)
            transition: all .5s ease-in-out
        .title
            opacity: 0!important
            transition: all .5s ease-in-out
        h1.total
            text-shadow: 0 5px 15px rgba(0,0,0,0.2)
            color: #fefefe!important
            opacity: 1!important
            font-size: 6rem!important
            transform: translateY(-20px)
            transition: all .2s ease-in-out

</style>