<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card>
					<v-card-title>
						<h3>
							<v-icon>mdi-account-plus</v-icon>
							<span class="d-none d-sm-inline">Tambah Data Guru</span>
						</h3>
						<v-spacer></v-spacer>
						<input type="file" ref="fileGuru" style="display:none" @change="onFilePicked" accept=".xlsx,.xls,.csv,.ods" />
						<v-btn small color="bg-gradient-success" rounded dark @click="$refs.fileGuru.click()">
							<v-icon>mdi-file-excel-outline</v-icon>
							<span class="d-none d-sm-inline">Impor Data</span>
						</v-btn>
						<v-btn fab color="error" class="ml-2" small @click="close">
							<v-icon >mdi-close</v-icon>
						</v-btn>
						
					</v-card-title>
					<v-card-text>
						<v-form ref="formGuru" @submit.prevent="saveGuru" v-if="!file">
							<v-container>
								<v-row>
									<v-col cols="12" sm="3" class="d-flex justify-center">
										<v-avatar size="128">
											<input type="file" ref="fotoGuru" accept=".jpg,.png,.svg,.jpeg,.JPEG,.JPG,.bmp" style="display:none" @change="onFotoPicked">
											<img :src="defaultFoto" alt="Avatar Guru" @click="$refs.fotoGuru.click()" @error="onAvatarError">
										</v-avatar>
									</v-col>
									<v-col cols="12" sm="9">
										<v-row>
											<v-col cols="12" sm="3">
												<v-text-field
												 	dense hide-details
												 	outlined
												 	label="NIP"
												 	v-model="guru.nip"
												/>
											</v-col>
											<v-col cols="12" sm="4">
												<v-text-field
												 	dense hide-details
												 	outlined
												 	label="Nama Lengkap"
												 	v-model="guru.name"
												/>
											</v-col>
											<v-col cols="12" sm="5">
												<v-text-field
												 	dense hide-details
												 	outlined
												 	label="Email"
												 	v-model="guru.email"
												/>
											</v-col>
											<v-col cols="12" sm="3">
												<v-select
													:items="['Laki-laki','Perempuan']"
												 	dense hide-details
												 	outlined
												 	label="Jenis Kelamin"
												 	v-model="guru.jk"
												/>
											</v-col>
											<v-col cols="12" sm="3">
												<v-text-field
												 	dense hide-details
												 	outlined
												 	label="Tempat Lahir"
												 	v-model="guru.tempat_lahir"
												/>
											</v-col>
											<v-col cols="12" sm="3">
												<v-text-field
												 	dense hide-details
												 	outlined
												 	type="date"
												 	label="Tanggal Lahir"
												 	v-model="guru.tanggal_lahir"
												/>
											</v-col>
											<v-col cols="12" sm="3">
												<v-text-field
												 	dense hide-details
												 	outlined
												 	label="No. HP"
												 	v-model="guru.hp"
												/>
											</v-col>
											<v-col cols="12" sm="5">
												<v-textarea
													rows="1"
													auto-grow
												 	dense hide-details
												 	outlined
												 	label="Alamat"
												 	v-model="guru.alamat"
												/>
											</v-col>
											
											<v-col cols="12" sm="4">
												<v-select
													:items="['Guru Kelas', 'Guru Olah Raga', 'Guru PAI', 'Guru B. Inggris', 'Tenaga Administrasi', 'Penjaga Sekolah']"
												 	dense hide-details
												 	outlined
												 	label="Jabatan"
												 	v-model="guru.jabatan"
												/>
											</v-col>
										</v-row>
										<v-row>
											<v-col class="d-flex justify-end">
												<v-btn type="submit" class="bg-gradient-primary" dark rounded>Simpan</v-btn>
											</v-col>
										</v-row>
									</v-col>
								</v-row>
								
							</v-container>
						</v-form>
						<xlsx-read :file="file" v-if="file">
							<xlsx-json @parsed="parsedFile">
							</xlsx-json>
						</xlsx-read>
						<v-data-table
							v-if="newGurus.length > 0"
							:headers="headers"
							:items="newGurus"
							:loding="loading"
						>
							<template v-slot:top>
								<v-container>
									<v-row>
										<v-col>
											<v-btn class="bg-gradient-primary" dark rounded @click="impor">
												Impor
											</v-btn>
										</v-col>
									</v-row>
								</v-container>
							</template>
							<template v-slot:item.ttl="{item}">
								<div>
									{{item.tempat_lahir}}, {{item.tanggal_lahir}}
								</div>
							</template>
							<template v-slot:item.status="{item}">
								<span>
									<v-icon :color="item.is_active == '1' ? 'success': 'error'">mdi-check-circle</v-icon>
								</span>
							</template>
							<template v-slot:item.opsi="{item}">
								<v-btn small icon @click="remove(item)"><v-icon color="error">mdi-delete</v-icon></v-btn>
							</template>
						</v-data-table>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import {XlsxRead, XlsxJson, XlsxTable} from 'vue-xlsx'
	export default {
		name: 'FormGuru',
		props: {selectedGuru: Object},
		components: {
			XlsxRead, XlsxJson, XlsxTable
		},
		data: () =>({
			loading: false,
			guru: {},
			newGurus: [],
			file: null,
			headers: [
				{text: 'NIP', value: 'nip'},
				{text: 'Nama', value: 'name'},
				{text: 'JK', value: 'jk'},
				{text: 'Tempat, Tgl Lahir', value: 'ttl'},
				{text: 'No. HP', value: 'hp'},
				{text: 'Email', value: 'email'},
				{text: 'Alamat', value: 'alamat'},
				{text: 'Jabatan', value: 'jabatan'},
				{text: 'Status', value: 'status'},
				{text: 'Opsi', value: 'opsi'},
			],
			fotoGuru: null,
			defaultFoto: '/images/1.png'
		}),
		methods: {
			onAvatarError(event) {	
				event.target.src = '/images/1.png'
			},
			onFotoPicked(e) {
				let foto = e.target.files[0]
				this.defaultFoto = URL.createObjectURL(foto)
				this.fotoGuru = foto
			},
			close(){
				this.guru = {}
				this.newGurus = []
				this.$emit('close')
			},
			saveGuru() {
				this.loading = true
				let fd  = new FormData()
				// JSON.stringify(value: any, replacer?: any, space?: any)
				fd.append("guru", JSON.stringify(this.guru))
				if(this.fotoGuru){
					fd.append("foto", this.fotoGuru)
				}
				axios({
					method: 'post',
					url: '/admin/guru/store',
					data: fd
				}).then(res => {
					this.loading = false
					this.guru = {}
					this.$emit('saved')
				})
			},
			onFilePicked(e) {
				this.file = e.target.files ? e.target.files[0] : null
			},
			parsedFile(gurus){
				gurus.forEach((guru,index) => {
					guru.no = index+1
					guru.tanggal_lahir = this.parseDate(guru.tanggal_lahir)
				})
				this.newGurus = gurus
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
			remove(item){
				this.newGurus.splice(item.index, 1)
			},
			impor() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/guru/import',
					data: {gurus:this.newGurus}
				}).then(res => {
					this.loading = false
					this.newGurus = []
					this.$emit('saved')
				})
			}
		},
		computed: {
			avatar() {
				return this.selectedGuru.nip ? '/storage/uploads/img/guru/'+this.selectedGuru.nip+'.jpg' : this.defaultFoto
			}
		},
		mounted() {
			if ( this.selectedGuru ) {
				this.guru = this.selectedGuru
				this.defaultFoto = '/storage/uploads/img/guru/'+this.selectedGuru.nip+'.jpg'
			} else {
				this.guru = {}
			}
		}
	}
</script>