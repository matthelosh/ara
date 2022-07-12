<template>
	<div>
		<v-container>
			<v-row>
				<v-col>
					<v-expand-transition>
						<v-card v-if="formSurat=='view'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-email-send-outline</v-icon>
									<span class="d-none d-sm-inline font-weight-bold">
										Surat<small class="font-weight-thin">Keluar</small>
									</span>
									
								</h3>
								<v-spacer></v-spacer>
								<v-btn small color="bg-gradient-error" dark class="mx-1" @click="formSurat='add'">
									<v-icon>mdi-plus-circle-outline</v-icon>
									<span class="d-none d-sm-inline">Tambah</span>
								</v-btn>
								<v-btn small color="bg-gradient-primary" class="mx-1" dark @click="formSurat='import'">
									<v-icon>mdi-plus-circle-multiple-outline</v-icon>
									<span class="d-none d-sm-inline">Impor Excel</span>
								</v-btn>
							</v-card-title>
							<v-card-text>
								<v-data-table
									:items="surats"
									:headers="headers"
									:search="search"
									dense
									:header-props="{ sortIcon: null }"
								>
									<template v-slot:top>
										<v-container>
											<v-row>
												<v-col cols="12" sm="4"></v-col>
												<v-col cols="12" sm="4"></v-col>
												<v-col cols="12" sm="4">
													<v-text-field
														label="Cari"
														clearable
														append-icon="mdi-magnify"
														outlined
														dense
														hide-details
														v-model="search"
													></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</template>
									<template v-slot:item.no_surat="{item}">
										<div>
											<v-btn  color="bg-gradient-info" small outlined>{{item.no_surat}}</v-btn>
										</div>
									</template>
									<template v-slot:item.disposisi="{item}">
										{{statusDisposisi(item)}}
										<v-btn icon small @click="formDisposisi = {show: true, surat: item}"><v-icon color="primary">mdi-email-fast-outline</v-icon></v-btn>
									</template>
									<template v-slot:item.opsi="{item}">
										<div>
											<v-btn icon color="error"><v-icon>mdi-delete</v-icon></v-btn>
										</div>
									</template>
								</v-data-table>
							</v-card-text>
						</v-card>
					</v-expand-transition>
					<v-expand-transition>
						<v-card v-if="formSurat=='add'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-plus-circle-outline</v-icon>
									<span class="d-none d-sm-inline font-weight-bold">Tambah<small class="grey--text font-weight-thin">Surat</small></span>
								</h3>
								<v-spacer></v-spacer>
								<v-btn fab small color="bg-gradient-error" @click="formSurat='view'" dark><v-icon>mdi-close</v-icon></v-btn>
							</v-card-title>
							<v-card-text>
								<v-row>
									<v-col cols="12" sm="8">
										<v-form ref="formInmail" @submit.prevent="saveSuratkeluar">
											<v-container>
												<v-row>
													<v-col cols="12" sm="5">
														<v-text-field label="No Surat" v-model="surat.no_surat" dense hide-details outlined append-icon="mdi-barcode-scan" disabled></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="Tanggal Surat" v-model="surat.tanggal_surat" dense hide-details outlined type="date" ></v-text-field>
													</v-col>
													<v-col cols="12" sm="4">
														<v-select label="Klasifikasi Surat" v-model="surat.klasifikasi_id" :items="klasifikasis" item-text="keterangan" item-value="kode" dense hide-details outlined type="date" @change="onKlasifikasiChanged"></v-select>
													</v-col>
													<v-col cols="12" sm="5">
														<v-select label="Jenis Surat" v-model="surat.jenis" :items="jenises" item-text="label" item-value="kode" dense hide-details outlined type="date" @change="onJenisChanged"></v-select>
													</v-col>
													<v-col cols="12" sm="5">
														<v-select label="Tipe Surat" v-model="surat.tipe" :items="types" item-text="tipe" item-value="tipe" dense hide-details outlined type="date" :disabled="types.length < 1"></v-select>
													</v-col>
													<v-col cols="12" sm="4">
														<v-select label="Sifat" v-model="surat.sifat" dense hide-details outlined append-icon="mdi-email-newsletter" :items="['Kilat','Segera','Penting','Biasa', 'Rahasia']" />
													</v-col>
													<v-col cols="12" sm="3">
														<v-select label="Lingkup" v-model="surat.lingkup" dense hide-details outlined append-icon="mdi-email-newsletter" :items="['Internal','Eksternal']" />
													</v-col>
													<v-col cols="12" sm="6">
														<v-select :items="daris" item-text="name" item-value="name" label="Pengirim" v-model="surat.pengirim" 
														return-object dense hide-details outlined append-icon="mdi-account-tie" >
															<template v-slot:selection="data">
																{{data.item.name}}
															</template>
															<template v-slot:item="data">
																<template v-if="typeof data.item !=='object'">
																	<v-list-item-content v-text="data.item"></v-list-item-content>
																</template>
																<template v-else>
																	<v-list-item-content>
																		<v-list-item-title v-html="data.item.name"></v-list-item-title>
																		<v-list-item-subtitle v-html="data.item.jabatan"></v-list-item-subtitle>
																	</v-list-item-content>
																</template>
															</template>
														</v-select>
													</v-col>
													<v-col cols="12" sm="6">
														<v-text-field v-if="surat.lingkup == 'Eksternal'" label="Penerima" v-model="surat.penerima" dense hide-details outlined append-icon="mdi-account-tie" />
														<v-select v-else :items="daris" item-text="name" item-value="name" label="Penerima" v-model="surat.penerima" 
														return-object dense hide-details outlined append-icon="mdi-account-tie" >
															<template v-slot:selection="data">
																{{data.item.name}}
															</template>
															<template v-slot:item="data">
																<template v-if="typeof data.item !=='object'">
																	<v-list-item-content v-text="data.item"></v-list-item-content>
																</template>
																<template v-else>
																	<v-list-item-content>
																		<v-list-item-title v-html="data.item.name"></v-list-item-title>
																		<v-list-item-subtitle v-html="data.item.jabatan"></v-list-item-subtitle>
																	</v-list-item-content>
																</template>
															</template>
														</v-select>
													</v-col>
													<v-col cols="12" sm="6">
														<v-text-field label="Alamat" v-model="surat.alamat" dense hide-details outlined append-icon="mdi-map-marker" />
													</v-col>
													<v-col cols="12" sm="6">
														<v-textarea label="Ringkasan" v-model="surat.ringkasan" dense hide-details outlined append-icon="mdi-map-marker" 
														rows="2" auto-grow />
													</v-col>
													<v-col cols="12">
														<v-btn color="bg-gradient-success" type="submit">
															<v-icon>mdi-content-save-check-outline</v-icon>
															Simpan
														</v-btn>
													</v-col>
												</v-row>
											</v-container>
										</v-form>
									</v-col>
									<v-col cols="12" sm="4">
										<v-container fill-height align-start justify-center>
											<v-card>
												<v-card-text>
													<v-btn text color="primary" small block @click="$refs.fileOutmail.click()">Unggah File Surat</v-btn>
													<input type="file" ref="fileOutmail" accept=".pdf,.jpg,.jpeg,.png,.JPG, .JPEG,.PNG" @change="onFilePicked" class="d-none">
													<embed :src="fileUrl+'#toolbar=0'" frameborder="0" width="100%" height="400px" ></embed>
												</v-card-text>
											</v-card>
										</v-container>
									</v-col>
								</v-row>
								
							</v-card-text>
						</v-card>
					</v-expand-transition>
					<v-expand-transition>
						<v-card v-if="formSurat=='import'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-plus-circle-multiple-outline</v-icon>
									<span class="d-none d-sm-inline font-weight-bold">Impor<small class="grey--text font-weight-thin">Surat</small></span>
								</h3>
								<v-spacer></v-spacer>
								<v-btn fab small color="bg-gradient-error" @click="formSurat='view'" dark><v-icon>mdi-close</v-icon></v-btn>
							</v-card-title>
						</v-card>
					</v-expand-transition>
				</v-col>
			</v-row>
		</v-container>
		<form-disposisi v-if="formDisposisi.show" :dialog="formDisposisi" @close="closeFormDisposisi"></form-disposisi>
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'
	import FormDisposisi from './Components/FormDisposisi'
	export default {
		name: 'Outmail',
		components: {FormDisposisi},
		layout: DashLayout,
		data: () =>({
			loading: false,
			formSurat: 'add',
			formDisposisi: {show: false, disposisi: null},
			search: '',
			surats:[],
			headers: [
				{text: 'No', value: 'no', sortable: false},
				{text: 'Tanggal', value: 'tanggal_surat'},
				{text: 'No Surat', value: 'no_surat'},
				{text: 'Sifat', value: 'sifat'},
				{text: 'Perihal', value: 'perihal'},
				{text: 'Pengirim', value: 'pengirim'},
				{text: 'Status Disposisi', value: 'disposisi'},
				{text: 'Opsi', value: 'opsi'},
			],
			surat: {},
			fileUrl: '/pdf/surat.pdf',
			jenises: [
				{ kode: 'sk', label: 'Surat Keputusan' },
				{ kode: 'skt', label: 'Surat Keterangan' },
				{ kode: 'sp', label: 'Surat Peringatan' },
				{ kode: 'spr', label: 'Surat Perintah' },
				{ kode: 'spb', label: 'Surat Pemberitahuan' },
				{ kode: 'su', label: 'Surat Undangan' },
				{ kode: 'se', label: 'Surat Edaran' },
			],
			tipes: [
				{jenis_id: 'sk', tipe: 'Pengangkatan Guru Tidak Tetap'},
				{jenis_id: 'sk', tipe: 'Pembagian Tugas'},
				{jenis_id: 'sk', tipe: 'Keputusan Kelulusan Siswa'},
				{jenis_id: 'sk', tipe: 'Penetapan Operator Sekolah'},
				{jenis_id: 'sk', tipe: 'Penetapan Operator BOS'},
				{jenis_id: 'sk', tipe: 'Penetapan Bendahara BOS'},
				{jenis_id: 'skt', tipe: 'Keterangan Mengajar'},
				{jenis_id: 'skt', tipe: 'Keterangan Siswa'},
				{jenis_id: 'spr', tipe: 'Perintah Perjalanan Dinas'},
				{jenis_id: 'spr', tipe: 'Perintah Melaksanakan Tugas'},
			],
			types: [],
			klasifikasis: [],
			daris: [],
			kepadas: [],
			fileSurat: null
		}),
		methods: {
			closeFormDisposisi(){
				this.formDisposisi = { show: false, disposisi: null}
				this.getSurats()
			},
			saveSuratkeluar() {
				this.loading = true
				let fd = new FormData()
				fd.append('surat', JSON.stringify(this.surat))
				if(this.fileSurat) fd.append('file', this.fileSurat)
				axios({
					method: 'post',
					url: '/admin/surat/keluar/store',
					data: fd
				}).then(res => {
					this.loading = false
					this.getSurats()
					this.formSurat = 'view'
				}).catch(err => {
					this.loading = false
					console.log(err.response.data.msg)
				})
			},
			getSurats(){
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/surat/keluar'
				}).then(res => {
					let surats = []
					res.data.surats.forEach((item,index) => {
						item.no = index+1
						surats.push(item)
					})
					this.surats = surats
					this.loading = false
				}).catch(err => {
					this.loading = false
				})
			},
			onFilePicked(e) {
				let file = e.target.files[0]
				let url = URL.createObjectURL(file)
				this.fileUrl = url
				this.fileSurat = file
			},
			onJenisChanged(e) {
				// alert(e)
				this.types = _.filter(this.tipes, (tipe => tipe.jenis_id == e))
			},
			onKlasifikasiChanged(e) {
				let no_surat = this.surats.length > 0 ? this.surats[this.surats.length-1].no_surat.split('/') : null
				let no = no_surat ? (parseInt(no_surat[1])+1) : 1
				let romans = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
				let date = new Date()
				let new_no = `${e}/${no}/${this.$page.props.sekolah.kode_lembaga}/${romans[date.getMonth()]}/${date.getFullYear()}`
				this.surat.no_surat = new_no
			},
			getKlasifikasi() {
				axios({
					method: 'post',
					url: '/admin/surat/klasifikasi'
				}).then(res => {
					this.klasifikasis = res.data.klasifikasis
				})
			},
			getGurus() {
				axios({
	                method: 'post',
	                url: '/admin/guru'
	            }).then(res => {
	                this.daris = res.data.gurus
	            }).catch(err => {
	                this.snackbar = { show: true, text: err.response.data.msg, color: 'bg-gradient-error'}
	            })
			},
			statusDisposisi(surat) {
				const disposisis = surat.disposisis
				let last = disposisis.length > 0 ? disposisis[disposisis.length-1] : null
				// return !last ? 'Belum Ada' : last.status
				return !last ? 'Belum Ada' : last.kepada
			},
		},
		mounted() {
			this.getKlasifikasi()
			this.getGurus()
			this.getSurats()
		}
	}
</script>	

<style scoped lang="scss">
	.v-data-table::v-deep td {
        font-size: .7rem!important;
        color: #333!important;
    }
</style>