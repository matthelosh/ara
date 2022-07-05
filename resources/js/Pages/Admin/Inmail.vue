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
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'

	export default {
		name: 'Inmail',
		layout: DashLayout,
		data: () =>({
			formSurat: 'add',
			search: '',
			inboxes: [
				{
					no: 1,
					tanggal: '2022-05-03',
					no_surat: '800/312/23.34.1.4/V/2022',
					sifat: 'Penting',
					perihal: 'Pemberitahuan',
					pengirim: 'Dinas Pendidikan Kab. Malang',
					disposisi: 'Menunggu Disposisi'
				},
				{
					no: 2,
					tanggal: '2022-06-03',
					no_surat: '800/310/23.34.1.4/VI/2022',
					sifat: 'Penting',
					perihal: 'Undangan KKG PAI Kec. Wagir',
					pengirim: 'KKG PAI Kec. Wagir',
					disposisi: 'Muhammad Soleh, S. Pd. I (Guru PAI)'
				},
			],
			headers: [
				{text: 'No', value: 'no', sortable: false},
				{text: 'Tanggal', value: 'tanggal'},
				{text: 'No Surat', value: 'no_surat'},
				{text: 'Sifat', value: 'sifat'},
				{text: 'Perihal', value: 'perihal'},
				{text: 'Pengirim', value: 'pengirim'},
				{text: 'Status Disposisi', value: 'disposisi'},
				{text: 'Opsi', value: 'opsi'},
			],
			surat: {},
			fileUrl: '/pdf/surat.pdf'
		}),
		methods: {
			saveInmail() {

			},
			onFilePicked(e) {
				let file = e.target.files[0]
				let url = URL.createObjectURL(file)
				this.fileUrl = url
			}
		}
	}
</script>	

<style scoped lang="scss">
	.v-data-table::v-deep th, .v-data-table::v-deep td, .v-data-table::v-deep .v-btn__content {
        font-size: .7rem!important;
        color: #333!important;
    }
</style>