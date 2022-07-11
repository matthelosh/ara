<template>
	<div>
		<v-container>
			<v-row>
				<v-col>
					<v-expand-transition>
						<v-card v-if="formSurat=='view'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-inbox</v-icon>
									Surat Masuk
								</h3>
								<v-spacer></v-spacer>
								<v-btn small color="bg-gradient-error" dark class="mx-1" @click="formSurat='add'">
									<v-icon>mdi-plus-circle-outline</v-icon>
									<span class="d-none d-sm-inline">Tambah</span>
								</v-btn>
								<v-btn small color="bg-gradient-success" class="mx-1" dark>
									<v-icon>mdi-file-excel</v-icon>
									<span class="d-none d-sm-inline">Ekspor</span>
								</v-btn>
							</v-card-title>
							<v-card-text>
								<v-data-table
									:items="inboxes"
									:headers="headers"
									:search="search"
									dense
									:header-props="{ sortIcon: null }"
									:loading="loading"
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
											<v-btn  color="bg-gradient-info" small outlined @click="detailSurat(item)">{{item.no_surat}}</v-btn>
										</div>
									</template>
									<template v-slot:item.disposisi="{item}">
										{{statusDisposisi(item)}}
										<v-btn icon small @click="formDisposisi = {show: true, surat: item}"><v-icon color="primary">mdi-email-fast-outline</v-icon></v-btn>
									</template>
									<template v-slot:item.opsi="{item}">
										<div>
											<v-btn  icon @click="editSurat(item)"><v-icon color="warning">mdi-pencil-box</v-icon></v-btn>
											<v-btn icon ><v-icon color="error" @click="deleteSuratMasuk(item)">mdi-delete</v-icon></v-btn>
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
										<v-form ref="formInmail" @submit.prevent="saveInmail">
											<v-container>
												<v-row>
													<v-col cols="12" sm="4">
														<v-text-field label="Tanggal Diterima" v-model="surat.tanggal_diterima" dense hide-details outlined type="date"></v-text-field>
													</v-col>
													<v-col cols="12" sm="8">
														<v-text-field label="Pengirim" v-model="surat.pengirim" dense hide-details outlined append-icon="mdi-email-receive-outline"></v-text-field>
													</v-col>
													<v-col cols="12" sm="6">
														<v-text-field label="No. Surat" v-model="surat.no_surat" dense hide-details outlined append-icon="mdi-barcode-scan"></v-text-field>
													</v-col>
													<v-col cols="12" sm="4">
														<v-text-field label="Tanggal Surat" v-model="surat.tanggal_surat" dense hide-details outlined type="date"></v-text-field>
													</v-col>
													<v-col cols="12" sm="8">
														<v-text-field label="Perihal" v-model="surat.perihal" dense hide-details outlined append-icon="mdi-email-newsletter"></v-text-field>
													</v-col>
													<v-col cols="12" sm="4">
														<v-select label="Sifat" v-model="surat.sifat" dense hide-details outlined append-icon="mdi-email-newsletter" :items="['Kilat','Segera','Penting','Biasa', 'Rahasia']" />
													</v-col>
													<v-col cols="12">
														<v-textarea label="Ringkasan" v-model="surat.ringkasan" dense hide-details outlined rows="2" auto-grow />
													</v-col>
													<v-col cols="12">
														<v-btn color="bg-gradient-success" type="submit" :loading="loading">
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
													<v-btn text color="primary" small block @click="$refs.fileInmail.click()">Unggah File Surat</v-btn>
													<input type="file" ref="fileInmail" accept=".pdf,.jpg,.jpeg,.png,.JPG, .JPEG,.PNG" @change="onFilePicked" class="d-none">
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
						<v-card v-if="formSurat=='detail'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-file-word</v-icon>
									<span class="d-none d-sm-inline font-weight-bold">Detail<small class="grey--text font-weight-thin">Surat <v-chip dark dense small>{{surat.no_surat}}</v-chip></small></span>
								</h3>
								<v-spacer></v-spacer>
								<v-btn fab small color="bg-gradient-error" @click="formSurat='view'" dark><v-icon>mdi-close</v-icon></v-btn>
							</v-card-title>
							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12" sm="4">
											<v-simple-table class="elevation-4">
												<template v-slot:default>
													<tbody>
														<tr v-for="(header, i) in headers.slice(0,7)" :key="i">
															<th>{{header.text}}</th>
															<td>{{surat[header.value]}}</td>
														</tr>
														<tr>
															<th>File Surat</th>
															<td>
																<a :href="surat.file_surat" target="_blank">Lihat/Unduh</a>
															</td>
														</tr>
													</tbody>
												</template>
											</v-simple-table>

										</v-col>
										<v-col>
											<v-card class="elecation-4">
												<v-card-text>
													<v-simple-table>
														<template v-slot:top>
															<h3>Riwayat Disposisi</h3>
														</template>
														<template v-slot:default>
															<thead>
																<th>No</th>
																<th>Tanggal</th>
																<th>Dari</th>
																<th>Instruksi/Informasi</th>
																<th>Diteruskan Ke</th>
															</thead>
															<tbody>
																<tr v-for="(disposisi, index) in surat.disposisis" :key="index">
																	<td>{{index+1}}</td>
																	<td>{{disposisi.created_at}}</td>
																	<td>{{disposisi.guru.name}} ({{disposisi.guru.jabatan}})</td>
																	<td>{{disposisi.konten}}</td>
																	<td>{{disposisi.kepada}}</td>
																</tr>
															</tbody>
														</template>
													</v-simple-table>
												</v-card-text>
											</v-card>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>
						</v-card>
					</v-expand-transition>
				</v-col>
			</v-row>
		</v-container>
		<v-snackbar v-model="snackbar.show" :color="snackbar.color" top right>{{snackbar.text}}</v-snackbar>
		<confirm-dialog ref="confirm"></confirm-dialog>
		<form-disposisi v-if="formDisposisi.show" :dialog="formDisposisi" @close="closeFormDisposisi"></form-disposisi>
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'
	import ConfirmDialog from './Components/ConfirmDialog'
	import FormDisposisi from './Components/FormDisposisi'
	export default {
		name: 'Suratmasuk',
		components: {ConfirmDialog, FormDisposisi},
		layout: DashLayout,
		data: () =>({
			loading: false,
			formSurat: 'view',
			search: '',
			formDisposisi: {show: false, disposisi: null},
			inboxes: [],
			headers: [
				{text: 'No', value: 'no', sortable: false},
				{text: 'Diterima', value: 'tanggal_diterima'},
				{text: 'Tgl Surat', value: 'tanggal_surat'},
				{text: 'No Surat', value: 'no_surat'},
				{text: 'Sifat', value: 'sifat'},
				{text: 'Perihal', value: 'perihal'},
				{text: 'Pengirim', value: 'pengirim'},
				{text: 'Status Disposisi', value: 'disposisi'},
				{text: 'Opsi', value: 'opsi'},
			],
			surat: {},
			fileUrl: '/pdf/surat.pdf',
			fileSurat : null,
			snackbar: {show: false, color:"error", text: ''}
		}),
		methods: {

			detailSurat(surat) {
				this.formSurat = 'detail'
				this.surat = surat
			},
			closeFormDisposisi(){
				this.formDisposisi = { show: false, disposisi: null}
				this.getSurats()
			},
			async deleteSuratMasuk(surat){
				this.loading = true
				if ( await this.$refs.confirm.open("Hapus Surat Masuk", `Yakin Menghapus surat masuk dengan Nomor ${surat.no_surat}`)) {
					axios({
						method: 'delete',
						url: '/admin/surat/masuk/'+surat.id,
						data: {_method: 'delete'}
					}).then(res => {
						this.loading = false
						this.getSurats()	
						this.snackbar = { show: true, color: 'success', text: `Surat Masuk, No: ${surat.no_surat} Dihapus.`}
					}).catch(err => {
						this.snackbar = { show: true, color: 'error', text: err.response.data.msg}
					})
				} 
			},
			editSurat(surat) {
				this.formSurat = 'add'
				this.fileUrl = surat.file_surat
				this.surat = surat
			},
			saveInmail() {
				this.loading = true
				let fd = new FormData()
				fd.append("surat", JSON.stringify(this.surat))
				if(this.fileSurat) fd.append("file",this.fileSurat)
				axios({
					method: 'post',
					url: '/admin/surat/masuk/store',
					data: fd
				}).then(res => {
					this.loading = false
					this.snackbar = {show: true, color: 'info', text: res.data.msg}
					this.formSurat = 'view'
					this.surat = {}
					this.getSurats()
				}).catch(err => {
					this.loading = false
					this.snackbar = {show: true, color: 'error', text: err.response.data.msg}
				})
			},
			onFilePicked(e) {
				let file = e.target.files[0]
				let url = URL.createObjectURL(file)
				this.fileUrl = url
				this.fileSurat = file
			},
			getSurats() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/surat/masuk'
				}).then(res => {
					let surats = []
					res.data.surats.forEach((item,index) => {
						item.no = index+1
						surats.push(item)
					})
					this.inboxes = surats
					this.loading = false
				}).catch(err => {
					this.loading = false
				})
			},
			statusDisposisi(surat) {
				const disposisis = surat.disposisis
				let last = disposisis.length > 0 ? disposisis[disposisis.length-1] : null
				// return !last ? 'Belum Ada' : last.status
				return !last ? 'Belum Ada' : last.kepada
			},
		},
		computed: {

		},
		mounted() {
			this.getSurats()
			// if(this.surat) {
			// 	this.fileUrl = this.surat.file_surat
			// }
		}
	}
</script>	

<style scoped lang="scss">
	.v-data-table::v-deep th, .v-data-table::v-deep td, .v-data-table::v-deep .v-btn__content {
        font-size: .7rem!important;
        color: #333!important;
    }
</style>