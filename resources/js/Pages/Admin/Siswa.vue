<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="12">
					<v-expand-transition>
						<v-card v-if="formSiswa == 'view'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-human-queue</v-icon>
									Data Siswa
								</h3>
								<v-spacer></v-spacer>
								<v-btn small color="bg-gradient-error" dark class="mx-1"
									@click="assignAccount"
								>
									<v-icon>mdi-account-multiple-check</v-icon>
									<span class="d-none d-sm-inline">Buat Akun</span>
								</v-btn>
								<v-btn small color="bg-gradient-primary" dark class="mx-1"
									@click="formSiswa='add'"
								>
									<v-icon>mdi-account-plus-outline</v-icon>
									<span class="d-none d-sm-inline">Tambah Siswa</span>
								</v-btn>
								<v-btn small color="bg-gradient-info" dark  class="mx-1">
									<v-icon>mdi-file-excel</v-icon>
									<span class="d-none d-sm-inline">Ekspor Siswa</span>
								</v-btn>
								<v-btn small color="bg-gradient-warning" dark  class="mx-1">
									<v-icon>mdi-printer</v-icon>
									<span class="d-none d-sm-inline">Cetak Siswa</span>
								</v-btn>
							</v-card-title>
							<v-card-text>
								<v-data-table
									v-model="selected"
									:search="search"
									:items="siswas"
									:headers="headers"
									:loading="loading"
									:header-props="{sortIcon: null}"
									show-select
									item-key="id"
									@toggle-select-all="selectAllToggle"
								>
									<template v-slot:item.data-table-select="{item,isSelected,select}">
										<v-simple-checkbox
											:value="isSelected"
											:readonly="item.user ? true : false"
											:disabled="item.user ? true : false"

											@input="select($event)"
										></v-simple-checkbox>
									</template>
									<template v-slot:top>
										<v-container>
											<v-row>
												<v-col></v-col>
												<v-col></v-col>
												<v-col cols="12" sm="4">
													<v-text-field
														label="Cari"
														append-icon="mdi-magnify"
														clearable
														v-model="search"
														dense
														hide-details
														solo
														outlined
													></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</template>
									<template v-slot:item.nis_nisn="{item}">
										{{item.nis?item.nis:'-'}}/{{item.nisn}}
									</template>
									<template v-slot:item.nama="{item}">
										<v-btn small color="bg-gradient-error" @click="siswa=item;formSiswa='add';" dark>
											{{item.user ? '@'+item.user.username:item.nama}}
										</v-btn>
									</template>
									<template v-slot:item.opsi="{item}">
										<v-btn small icon color="error">
											<v-icon>mdi-delete</v-icon>
										</v-btn>
									</template>
								</v-data-table>
								<v-card color="bg-gradient-primary-light" class="elevation-5">
									<v-card-title>
										<v-icon>mdi-chart-arc</v-icon>
										<h3>Grafik<small class="fotn-weight-thin">Siswa</small>
										</h3>
									</v-card-title>
									<v-card-text>
										<DonutChart v-if="jmlSiswa.length >0" :chartId="'chartSiswaJK'" :datasets="jmlSiswa" :labels="['Laki-laki','Perempuan']" :colors="['teal','pink']" :height="150" :width="150" />
									</v-card-text>
								</v-card>
							</v-card-text>
						</v-card>
						
					</v-expand-transition>
					<v-expand-transition>
						<v-card v-if="formSiswa=='add'">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-account-plus-outline</v-icon>
									Form Siswa
								</h3>
								<v-spacer></v-spacer>
								<v-btn small color="bg-gradient-primary" dark  class="mx-3" @click="formSiswa='import'">
									<v-icon>mdi-account-multiple-plus</v-icon>
									<span class="d-none d-sm-inline">Impor Siswa</span>
								</v-btn>
								<v-btn fab color="error" small @click="formSiswa = 'view'; siswa={};"><v-icon>mdi-close</v-icon></v-btn>
							</v-card-title>
							<v-card-text>
								<v-form ref="formSiswa" @submit.prevent="saveSiswa">
									<v-container>
										<v-row>
											<v-col cols="12" sm="3">
												<v-container fill-height align-start justify-center>
													<input type="file" ref="foto" @change="onFotoPicked" class="d-none" accept=".png,.jpg,.jpeg,.JPG,.JPEG,.bmp">
													<v-avatar class="elevation-4" rounded size="200" @click="$refs.foto.click()">
														<img :src="defaultFoto" alt="Foto Siswa" @error="onFotoError">
													</v-avatar>
												</v-container>
											</v-col>
											<v-col cols="12" sm="9">
												<v-row>
													<v-col cols="12" sm="5">
														<v-text-field label="Nama Siswa" v-model="siswa.nama" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="4">
														<v-text-field label="NISN" v-model="siswa.nisn" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="NIS" v-model="siswa.nis" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="NIK" v-model="siswa.nik" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="No Akta" v-model="siswa.no_akta" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="No KIP (Jika Ada)" v-model="siswa.no_kip" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="No KK" v-model="siswa.no_kk" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-select label="Jenis Kelamin" v-model="siswa.jk" hide-details  outlined dense :items="[{text: 'Laki-laki', value: 'l'},{text: 'Perempuan', value: 'p'}]" />
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="Tempat Lahir" v-model="siswa.tempat_lahir" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="3">
														<v-text-field label="Tanggal Lahir" v-model="siswa.tanggal_lahir" type="date" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="4">
														<v-select label="Agama" v-model="siswa.agama" :items="['Islam','Kristen','Katolik','Hindu','Budha','Konghuchu']" hide-details  outlined dense />
													</v-col>
													<v-col cols="12" sm="4">
														<v-textarea label="Alamat" v-model="siswa.alamat" hide-details  outlined dense rows="1" auto-grow />
													</v-col>
													<v-col cols="6" sm="2">
														<v-text-field label="RT" v-model="siswa.rt" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="2">
														<v-text-field label="RW" v-model="siswa.rw" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" sm="4">
														<v-text-field label="Desa" v-model="siswa.desa" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="2">
														<v-text-field label="Kode Pos" v-model="siswa.kode_pos" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="3">
														<v-text-field label="Kecamatan" v-model="siswa.kecamatan" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="4">
														<v-text-field label="Kabupaten" v-model="siswa.kabupaten" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="3">
														<v-text-field label="Provinsi" v-model="siswa.provinsi" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="3">
														<v-text-field label="No. HP" v-model="siswa.hp" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="6" sm="6">
														<v-text-field label="Email" v-model="siswa.email" hide-details  outlined dense></v-text-field>
													</v-col>
													<v-col cols="12" class="d-flex justify-end">
														<v-btn color="bg-gradient-primary" type="submit" dark>Simpan</v-btn>
													</v-col>
												</v-row>
											</v-col>
										</v-row>
									</v-container>									
								</v-form>
							</v-card-text>
						</v-card>
					</v-expand-transition>
					<v-expand-transition>
						<v-card v-if="formSiswa == 'import'">
							<v-card-title>
								
									<v-icon class="mb-1">mdi-file-excel</v-icon>
								<h3>
									Impor<small class="font-weight-thin">Siswa</small>
								</h3>
								<v-spacer></v-spacer>
								<input type="file" ref="fileSiswa" class="d-none" @change="onFilePicked" accept=".ods,.xls,.xlsx">
								<v-btn small color="bg-gradient-primary" dark @click="$refs.fileSiswa.click()">Pilih File</v-btn>
							</v-card-title>
							<v-card-text>
								<xlsx-read :file="fileSiswa" v-if="fileSiswa">
									<xlsx-json @parsed="parsedFile">
									</xlsx-json>
								</xlsx-read>
								<v-data-table
									:headers="headerImport"
									:items="siswaImport"
									:header-props="{sortIcon:null}"
									:search="search"
								>
									<template v-slot:top v-if="siswaImport.length > 0">
										<v-container >
											<v-row>
												<v-btn color="info" @click="imporSiswa" small :loading="loading">Unggah</v-btn>
												<v-spacer></v-spacer>
												<v-col cols="12" sm="4">
													<v-text-field v-model="search" label="Cari" dense hide-details outlined append-icon="mdi-magnify"></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</template>
									<template v-slot:item.ttl="{item}">
										{{item.tempat_lahir}}, {{item.tanggal_lahir}}
									</template>
									<template v-slot:item.rt_rw="{item}">
										{{item.rt}}/{{item.rw}}
									</template>
								</v-data-table>
							</v-card-text>
						</v-card>
					</v-expand-transition>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'
	import {XlsxRead, XlsxJson, XlsxTable} from 'vue-xlsx'
	import DonutChart from '@/js/Pages/Admin/Components/DonutChart'
	export default {
		name: 'AdminSiswa',
		components: {
			XlsxRead, XlsxJson, XlsxTable, DonutChart
		},
		layout: DashLayout,
		data: () =>({
			formSiswa: 'view',
			siswa: {},
			loading: false,
			search: '',
			siswas: [],
			selected: [],
			headers: [
				{text: 'No', value: 'no'},
				{text: 'NIS/NISN', value: 'nis_nisn'},
				{text: 'Nama', value: 'nama'},
				{text: 'Jk', value: 'jk'},
				{text: 'Alamat', value: 'alamat'},
				{text: 'Email', value: 'email'},
				{text: 'Aktif', value: 'is_active'},
				{text: 'Opsi', value: 'opsi'}
			],
			headerImport: [
				{text: 'NISN', value: 'nisn'},
				{text: 'NIS', value: 'nis'},
				{text: 'NIK', value: 'nik'},
				{text: 'Akta', value: 'no_akta'},
				{text: 'KIP', value:'no_kip'},
				{text: 'No. KK', value: 'no_kk'},
				{text: 'Nama', value:'nama'},
				{text: 'JK', value:'jk'},
				{text: 'Tempat, Tgl Lahir', value: 'ttl'},
				{text: 'Alamat', value:'alamat'},
				{text: 'Agama', value:'agama'},
				{text: 'RT/RW', value: 'rt_rw'},
				{text: 'Desa', value: 'desa'},
				{text: 'Kec', value: 'kecamatan'},
				{text: 'Kode Pos', value: 'kode_pos'},
				{text: 'Kabupaten', value: 'kabupaten'},
				{text: 'Provinsi', value:'provinsi'},
				{text: 'HP', value: 'hp'},
				{text: 'Email',value: 'email'},
			],
			siswaImport: [],
			fileSiswa: null,
			fotoSiswa: null,
			defaultFoto: '/images/1.png',
			disabled : 0,
			jmlSiswa: []
		}),
		methods: {
			imporSiswa() {
				let data = this.siswaImport
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/siswa/import',
					data: {siswas: data}
				}).then( res => {
					this.loading = false
					this.formSiswa = view
					this.siswaImport = []
					this.getSiswas()
					
				}).catch( err => {
					console.log(err)
					this.loading = false
				})
			},
			onFilePicked(e) {
				this.fileSiswa = e.target.files ? e.target.files[0] : null
			},
			parsedFile(siswas){
				siswas.forEach((siswa,index) => {
					siswa.no = index+1
					// siswa.tanggal_lahir = this.parseDate(siswa.tanggal_lahir)
				})
				this.siswaImport = siswas
			},
			parseDate(serial) {
				const utc_days = Math.floor(serial - 25569);
				const utc_value = utc_days * 86400;
				const date_info = new Date(utc_value * 1000);
				const ymd = date_info.getFullYear()+'-'+(date_info.getMonth()+1)+'-'+date_info.getDate();

				const fractional_day = serial - Math.floor(serial) + 0.0000001;

				let total_seconds = Math.floor(86400 * fractional_day);

				const seconds = total_seconds % 60;

				total_seconds -= seconds;

				const hours = Math.floor(total_seconds / (60 * 60));
				const minutes = Math.floor(total_seconds / 60) % 60;
				return ymd
			},
			assignAccount() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/user/assign-account-siswa',
					data: this.selected
				}).then( res => {
					this.loading = false
					this.selected = []
					this.disabled = 0
					this.getSiswas()
				})
			},
			selectAllToggle(props) {
				if ( this.selected.length !=props.items.length - this.disabled) {
					this.selected = []
					const self = this
					props.items.forEach(item => {
						if ( item.user ) self.selected.push(item)
					})
				} else {
					this.selected = []
				}
			},
			onFotoError(event) {
				event.target.src = '/images/1.png'
			},
			onFotoPicked(e) {
				let foto = e.target.files[0]
				let url = URL.createObjectURL(foto)
				this.defaultFoto = url
				this.fotoSiswa = foto
			},
			getSiswas() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/siswa'
				}).then( res => {
					let siswas = []
					res.data.siswas.forEach((siswa,index) => {
						siswa.no = index+1
						siswas.push(siswa)
					})
					this.siswas = siswas
					this.jmlSiswa =[
						_.filter(siswas, (siswa=> siswa.jk=='l')).length,
						_.filter(siswas, (siswa=> siswa.jk=='p')).length
					]
					this.loading = false
				}).catch(err => {
					console.log(err)
				})
			},
			saveSiswa() {
				this.loading = true
				let fd = new FormData()
				fd.append("siswa", JSON.stringify(this.siswa))
				if(this.fotoSiswa) {
					fd.append("foto", this.fotoSiswa)
				}
				axios({
					method: 'post',
					url: '/admin/siswa/store',
					data: fd
				}).then(res => {
					this.getSiswas()
					this.siswa = {}
					this.formSiswa = false
				}).catch( err => {
					console.log(err)
				})
			}
		},
		computed: {
		},
		mounted() {
			this.getSiswas()
			if(this.siswa.id) {
				this.defaultFoto = '/storage/uploads/img/siswa/'+this.siswa.nisn+'.jpg'
			}
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