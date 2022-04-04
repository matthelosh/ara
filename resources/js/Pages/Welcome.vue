<template>
    <dashboard>
        <v-container>
            <v-row>
                <v-col cols="12" >
                    <v-card color="bg-gradient-primary">
                        <v-card-text>
                            Welcome
                            <p class="tes">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque provident sapiente quisquam dolorem sit, minus voluptatum odit quaerat officiis qui asperiores explicabo voluptate velit. Quisquam pariatur dolorem praesentium possimus dolorum.
                                <v-btn color="primary">Halo</v-btn>
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card>
                        <v-card-text>
                            <h3>Impor Data Dapodik</h3>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-office-building-outline</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Data Sekolah</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <v-progress-linear value="50" height="15">
                                                <template v-slot:default="{ value }">
                                                <strong>{{ Math.ceil(value) }}%</strong>
                                            </template>
                                            </v-progress-linear>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn color="primary" small>Impor</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-account-multiple</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Data Guru</v-list-item-title>
                                        <v-list-item-subtitle>0%</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn color="primary" small>Impor</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-human-queue</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Data Siswa</v-list-item-title>
                                        <v-list-item-subtitle>0%</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn color="primary" small>Impor</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-google-classroom</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Data Kelas / Rombel</v-list-item-title>
                                        <v-list-item-subtitle>0%</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn color="primary" small>Impor</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </dashboard>
</template>
<script>
import Dashboard from '../Layouts/Dashboard.vue'
export default {
    name: 'Welcome',
    components: { Dashboard },
    data:()=>({}),
    computed: {
        route(){
            this.$page.props.route
        }
    }

}
</script>