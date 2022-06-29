<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-text>
                            <h3>Surat</h3>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'

export default {
    name: 'Admin.Surat',
    components: {DashLayout},
    layout: [DashLayout],
}
</script>