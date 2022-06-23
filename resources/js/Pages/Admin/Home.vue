<template>
    <dash-layout>
        <v-container>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card>
                        <v-card-text>
                            <h3>Halo</h3>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card>
                        <v-card-text>
                            <h3>Halo</h3>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card>
                        <v-card-text>
                            <h3>Halo</h3>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </dash-layout>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'

export default {
    name: 'Admin.Home',
    components: {DashLayout}
}
</script>