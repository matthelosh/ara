<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="12">
					<v-expand-transition>
						<v-card v-if="!formSiswa">
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
									@click="formSiswa=true"
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
										{{item.nis}}/{{item.nisn}}
									</template>
									<template v-slot:item.nama="{item}">
										<v-btn small color="bg-gradient-error" @click="siswa=item;formSiswa=true;" dark>
											{{item.user ? '@'+item.user.username:item.nama}}
										</v-btn>
									</template>
									<template v-slot:item.opsi="{item}">
										<v-btn small icon color="error">
											<v-icon>mdi-delete</v-icon>
										</v-btn>
									</template>
								</v-data-table>
							</v-card-text>
						</v-card>
					</v-expand-transition>
					<v-expand-transition>
						<v-card v-if="formSiswa">
							<v-card-title>
								<h3>
									<v-icon class="mb-1">mdi-account-plus-outline</v-icon>
									Form Siswa
								</h3>
								<v-spacer></v-spacer>
								<v-btn small color="bg-gradient-primary" dark  class="mx-3">
									<v-icon>mdi-account-multiple-plus</v-icon>
									<span class="d-none d-sm-inline">Impor Siswa</span>
								</v-btn>
								<v-btn fab color="error" small @click="formSiswa = false; siswa={};"><v-icon>mdi-close</v-icon></v-btn>
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
														<v-textarea label="Alamat" v-model="siswa.alamat" type="date" hide-details  outlined dense rows="1" auto-grow />
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
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import DashLayout from '@/js/Layouts/Dashboard'
	export default {
		name: 'AdminSiswa',
		layout: DashLayout,
		data: () =>({
			formSiswa: false,
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
			fotoSiswa: null,
			defaultFoto: '/images/1.png',
			disabled : 0
		}),
		methods: {
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
		mounted() {
			this.getSiswas()
			if(this.siswa.id) {
				this.defaultFoto = '/storage/uploads/img/siswa/'+this.siswa.nisn+'.jpg'
			}
		}
	}
</script>