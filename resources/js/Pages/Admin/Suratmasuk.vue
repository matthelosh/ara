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
								<v-btn small color="bg-gradient-primary" class="mx-1" dark @click="formSurat='import'">
									<v-icon>mdi-plus-circle-multiple-outline</v-icon>
									<span class="d-none d-sm-inline">Impor Excel</span>
								</v-btn>
							</v-card-title>
							<v-card-text>
								<v-data-table
									:items="inboxes"
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
														:loading="loading"
													></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</template>
									<template v-slot:item.no_surat="{item}">
										<div>
											<v-btn  color="bg-gradient-info" small outlined @click="editSurat(item)">{{item.no_surat}}</v-btn>
										</div>
									</template>
									<template v-slot:item.disposisi="{item}">
										{{item.disposisi ? item.disposisi.status: 'Belum Ada'}}
										<v-btn icon small><v-icon color="primary">mdi-email-fast-outline</v-icon></v-btn>
									</template>
									<template v-slot:item.opsi="{item}">
										<div>
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
		<v-snackbar v-model="snackbar.show" :color="snackbar.color" top right>{{snackbar.text}}</v-snackbar>
		<confirm-dialog ref="confirm"></confirm-dialog>
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'
	import ConfirmDialog from './Components/ConfirmDialog'
	export default {
		name: 'Suratmasuk',
		components: {ConfirmDialog},
		layout: DashLayout,
		data: () =>({
			loading: false,
			formSurat: 'view',
			search: '',
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
			}
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