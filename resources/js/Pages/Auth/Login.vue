<template>
    <v-app style="background: #f5f5f5;" class="align-center">
        <v-main>
            <v-container fill-height>
                <v-row align="center" align-content="center" class="d-flex align-center justify-center fill-height">
                    <v-col class="d-none d-sm-inline"></v-col>
                    <v-col cols="12" sm="5">
                        <v-card>
                            <v-card-text class="pa-10">
                                <v-card-title class="d-flex justify-center align-center">
                                    <img src="/images/ara1.svg" alt="Logo">
                                    <h3 class="purple--text mx-5">A.R.A.</h3>
                                </v-card-title>
                                <h2>Selamat Datang!</h2>
                                <p>Di Aplikasi Rapor Anyar</p>
                                <v-form ref="formLogin" @submit.prevent="login">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field
                                                label="Email"
                                                v-model="email"
                                                append-icon="mdi-qrcode"
                                                outlined
                                                class="my-2"
                                                hide-details=""
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                label="Password"
                                                v-model="password"
                                                :append-icon="showPassword ? 'mdi-eye-off':'mdi-eye'"
                                                outlined
                                                :type="showPassword ? 'text':'password'"
                                                @click:append="togglePassword"
                                                hide-details=""
                                            ></v-text-field>
                                        </v-col>
                                        <!-- <v-col cols="12">
                                            <v-checkbox label="Ingat Saya" hide-details="">
                                            </v-checkbox>
                                        </v-col> -->
                                        <v-col cols="12" class="d-flex justify-center">
                                            <v-btn type="submit" color="primary" class="mx-auto" block :loading="loading">
                                                {{ loading ? 'Tunggu Ya' : 'Login' }}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-alert v-show="errors" class="error--text">
                                            <v-icon color="error">mdi-exclamation</v-icon>{{ errors }}
                                        </v-alert>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col class="d-none d-sm-inline"></v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'Login',
    data: () =>({
        showPassword: false,
        email: '',
        password: '',
        loading: false,
        errors: null


    }),
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword
        },
        login(){
            this.loading = true
            let data  = { username: this.email, password: this.password}
            axios({
                method: 'post',
                url: '/login',
                data: data
            }).then(res => {
                window.location.href="/admin"
            }).catch( err => {
                this.errors = err.response.data.message
                this.loading = false
            })
        }
    }
}
</script>
