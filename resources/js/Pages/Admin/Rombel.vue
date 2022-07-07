<template>
	<div>
		<v-container>
			<v-row>
				<v-col >
					<v-expand-transition>
						<v-card v-if="mode=='view'">
							<v-card-title>
								<h3>
									<v-icon>mdi-google-classroom</v-icon>
									<span class="d-none d-sm-inline">Data Rombel {{$page.props.periode.label}}</span>
								</h3>
								<v-spacer></v-spacer>
								<v-btn small color="bg-gradient-error" dark @click="mode='add'">
									<v-icon>mdi-plus-circle</v-icon>
									<span class="d-none d-sm-inline">Tambah</span>
								</v-btn>
							</v-card-title>
							<v-card-text>
								<v-data-table
									:items="rombels"
									:headers="headers"
									:header-props="{sortIcon:null}"
									:search="search"
									:loading="loading"
								>
									<template v-slot:top>
										<v-container>
											<v-row>
												<v-spacer></v-spacer>
												<v-col sm="4">
													<v-text-field v-model="search" outlined append-icon="mdi-magnify" label="Cari" dense hide-details></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</template>

									<template v-slot:item.kode_rombel="{item}">
										<v-btn small outlined @click="mode='add';rombel=item;">{{item.kode_rombel}}</v-btn>
									</template>
									<template v-slot:item.wali_kelas="{item}">
										<v-avatar>
											<img :src="'/storage/uploads/img/guru/'+item.guru.nip+'.jpg'" alt="Foto" onerror="this.onerror=null;this.src='/images/1.png'">
										</v-avatar>
										<span>{{item.guru.name}}</span>
									</template>
									<template v-slot:item.siswa="{item}">
										L: <span v-html="jk(item.siswas, 'l')"></span>  | P: <span v-html="jk(item.siswas, 'p')"></span>  | JML: {{item.siswas.length}}
									</template>
									<template v-slot:item.opsi="{item}">
										<v-btn small icon color="primary" @click="mode='manajemen'; rombel=item;">
											<v-icon>mdi-human-queue</v-icon>
										</v-btn>
										<v-btn small icon color="error">
											<v-icon>mdi-delete</v-icon>
										</v-btn>
									</template>
								</v-data-table>
							</v-card-text>
						</v-card>
					</v-expand-transition>
					<v-fade-transition>
						<v-card v-if="mode=='add'" class="mx-auto">
							<v-card-title>
								<h3 class="font-weight-bold"><v-icon class="mb-1">mdi-google-classroom</v-icon> Form<small class="font-weight-thin">Rombel</small></h3>
								<v-spacer></v-spacer>
								<v-btn fab small class="ml-1" @click="mode='view';guruImg='/images/1.png';wali_kelas='Pilih Wali Kelas'" color="error"><v-icon>mdi-close</v-icon></v-btn>
							</v-card-title>
							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12" sm="6">
											<v-row>
												<v-col cols="12" sm="4" class="d-flex justify-center">
													<v-menu bottom left >
		                                                <template v-slot:activator="{on, attrs}"> 
		                                                	<div>
		                                                		
			                                                    <v-avatar rounded class="mx-10 elevation-4" size="128" v-if="rombel" @click="getGurus" v-bind="attrs" v-on="on">
			                                                        <img :src="guruImg" alt="Wali Kelas" onerror="this.onerror=null; this.src='/images/1.png'">
			                                                    </v-avatar>
			                                                    <h6 class="text-center">{{wali_kelas}}</h6>
		                                                    </div>
		                                                </template>
		                                                <v-list dense>
		                                                    <v-list-item v-for="guru in gurus" :key="guru.id" @click="setWaliKelas(guru.nip)" class="my-2">
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
												</v-col>
												<v-col cols="12" sm="8">
													<v-form ref="formRombel" @submit.prevent="saveRombel">
														<v-row>
															<v-col cols="12" >
																<v-select label="Tingkat" v-model="rombel.tingkat" :items="[1,2,3,4,5,6]" dense outlined hide-details  />
															</v-col>
															<v-col cols="12" >
																<v-select label="Grup" v-model="rombel.grup" :items="['0','A','B','C','D','E']" dense outlined @change="setRombel" hide-details  />
															</v-col>
															<v-col cols="12" >
																<v-text-field label="Kode Rombel" v-model="rombel.kode_rombel" dense outlined append-icon="mdi-barcode-scan" disabled hide-details></v-text-field>
															</v-col>
															<v-col cols="12" >
																<v-text-field label="Nama Rombel" v-model="rombel.name" dense outlined append-icon="mdi-label" disabled hide-details></v-text-field>
															</v-col>
															<v-col cols="12" >
																<v-btn block color="bg-gradient-primary" dark type="submit" :loading="loading">Simpan</v-btn>
															</v-col>
														</v-row>
													</v-form>
												</v-col>
											</v-row>
										</v-col>
										<v-col cols="12" sm="6">
											<v-data-table
												dense
												:items="rombel.siswas"
												:headers="headerMembers"
												:search="searchSiswa"
											>
												<template v-slot:top>
													<v-row>
														<v-col cols="6">
															<h5>Anggota Rombel</h5>
														</v-col>
														<v-col cols="6">
															<v-text-field v-model="searchSiswa" dense hide-details outlined append-icon="mdi-magnify" class="my-1"></v-text-field>
														</v-col>
													</v-row>
												</template>
											</v-data-table>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>
						</v-card>
					</v-fade-transition>
					<v-fade-transition>
						<manajemen-rombel v-if="mode=='manajemen'" :rombel="rombel" @close="mode='view'"></manajemen-rombel>
					</v-fade-transition>
				</v-col>
			</v-row>
		</v-container>
		<v-snackbar v-model="snackbar.show" :color="snackbar.color" right>{{snackbar.text}}</v-snackbar>
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'
	import ManajemenRombel from './Components/ManajemenRombel'
	export default {
		name: 'AdminRombel',
		components: { ManajemenRombel},
		layout: DashLayout,
		data: () => ({
			mode: 'view',
			search:'',
			rombels: [],
			headers: [
				{ text: 'No', value: 'no', sortable: false},
				{ text: 'Kode Rombel', value: 'kode_rombel'},
				{ text: 'Nama Rombel', value: 'name'},
				{ text: 'Wali Kelas', value: 'wali_kelas'},
				{ text: 'Jml Siswa', value: 'siswa'},
				{ text: 'Opsi', value: 'opsi', sortable: false},
			],
			emptyRombel: {
				kode_rombel: null,
				name: '',
				tingkat: '',
				grup: '',
				periode_id: '',
				siswas: []
			},
			gurus: [],
			loading: false,
			snackbar: { show: false, text: '', color: 'error'},
			rombel: {},
			wali_kelas : 'Pilih Wali Kelas' ,
			guruImg: '/images/1.png',
			headerMembers: [
				{text: 'NISN', value: 'nisn'},
				{text: 'Nama', value: 'nama'},
			],
			searchSiswa: ''
			// selectedRombel: {}
		}),
		watch: {
			rombel: {
				handler(after, before) {
					this.rombel.tingkat = parseInt(after.tingkat)
					let kode = after.kode_rombel ? after.kode_rombel.split('-') : ['0','0']
					this.rombel.grup = kode[1].length > 1 ? kode[1][1].toUpperCase() : '0'
					this.guruImg = '/storage/uploads/img/guru/'+after.guru_id+'.jpg'
					this.wali_kelas = _.find(this.gurus, guru => guru.nip == after.guru_id).name
				},
				deep: true
			}
		},
		methods: {
			jk(siswas, jk) {
				return _.filter(siswas, (siswa => siswa.jk == jk)).length
			},
			saveRombel() {
				this.loading = true
				this.rombel.periode_id = this.$page.props.periode.kode_periode
				axios({
					method: 'post',
					url: '/admin/rombel/store',
					data: this.rombel
				}).then(res => {
					this.rombel = this.emptyRombel
					this.snackbar = { show: true, color: 'success', text: res.data.msg }
					this.loading=false
				}).catch(err => {
					this.snackbar = { show: true, color: 'error', text: err.response.data.msg }
					this.loading=false
				})
			},
			setWaliKelas(nip) {
				this.rombel.guru_id = nip
				this.wali_kelas = _.find(this.gurus, guru => guru.nip == nip).name
				this.guruImg = '/storage/uploads/img/guru/'+nip+'.jpg'
			},
			setRombel() {
				let kode_rombel = this.$page.props.periode.kode_periode+'-'+this.rombel.tingkat+(this.rombel.grup == '0' ? "":this.rombel.grup.toLowerCase())
				let hurufs=["SATU","DUA","TIGA","EMPAT","LIMA","ENAM"]
				let roman=['I','II','III','IV','V','VI']
				let group = this.rombel.grup == '0' ? "" : this.rombel.grup
				let nama_rombel = roman[this.rombel.tingkat-1]+group+" ("+hurufs[this.rombel.tingkat-1]+" "+group+")"
				this.rombel.kode_rombel = kode_rombel
				this.rombel.name = nama_rombel
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
	        },
	        getRombels() {
	        	this.loading = true
	        	axios({
	        		method: 'post',
	        		url: '/admin/rombel'
	        	}).then( res=> {
	        		let rombels = []
	        		res.data.rombels.forEach((item,index) => {
	        			item.no = index+1
	        			rombels.push(item)
	        		})
	        		this.rombels = rombels
	        		this.loading = false
	        	}).catch(err => {
	        		this.snackbar = { show: true, color: 'error', text: err.response.data.msg}
	        		this.loading = false
	        	})
	        }
		},
		computed: {
			// guruImg() {
			// 	return this.rombel.guru ? '/storage/uploads/img/guru/'+this.rombel.guru_id+'.jpg' : '/images/1.png'
			// }
		},
		mounted() {
			this.getRombels()
			this.getGurus()
			// this.rombel = this.emptyRombel
		}
	}
</script>

<style scoped lang="scss">
	.v-data-table::v-deep td,
	.v-data-table::v-deep th {
        font-size: .7rem!important;
        color: #333!important;
    }
</style>