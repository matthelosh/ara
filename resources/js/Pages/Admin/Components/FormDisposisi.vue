<template>
	<div>
		<v-dialog v-model="dialog.show" max-width="600">
			<v-card>
				<v-card-title>
					Formulir Disposisi
					<v-spacer></v-spacer>
					<v-btn fab color="error" @click="$emit('close')" small><v-icon>mdi-close</v-icon></v-btn>
				</v-card-title>
				<v-card-text>
					<v-expand-transition>
						<v-simple-table v-if="!reply">
							<template v-slot:default>
								<thead>
									<tr>
										<th>No</th>
										<th>ID Disposisi</th>
										<th>Dari</th>
										<th>Instruksi/Informasi</th>
										<th>Opsi</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(disposisi,index) in disposisis" :key="index">
										<td>{{index+1}}</td>
										<td>{{disposisi.id}}</td>
										<td>{{disposisi.guru.name}}</td>
										<td>{{disposisi.konten}}</td>
										<td><v-btn text color="info" @click="replyDisposisi(disposisi)">Balas</v-btn></td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-expand-transition>
					<v-expand-transition>
						<v-form ref="formDisposisi" v-if="reply" @submit.prevent="saveDisposisi">
							<!-- <v-container> -->
								<v-row>
									<v-col cols="12">
										<v-text-field label="ID Surat" v-model="disposisi.surat_id"  dense hide-details filled disabled></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-autocomplete 
										v-model="disposisi.kepada" 
										label="Tindak Lanjut Oleh" 
										:items="gurus" 
										item-text="name" 
										item-value="nip"
										return-object 
										hide-details
										multiple
										filled
										>
											<template v-slot:selection="data">
												<v-chip
													color="primary"
													v-bind="data.attrs"
													:input-value="data.selected"
													close
													@click="data.select"
													@click:close="removeKepada(data.item)"
												>
													<v-avatar left>
														<img :src="`/storage/uploads/img/guru/${data.item.nip}.jpg`" alt="AVT" onerror="this.onerror=null;this.src='/images/1.png'">
													</v-avatar>
													{{data.item.name}}
												</v-chip>
											</template>
											<template v-slot:item="data">
												<template v-if="typeof data.item !=='object'">
													<v-list-item-content v-text="data.item"></v-list-item-content>
												</template>
												<template v-else>
													<v-list-item-avatar>
														<img :src="`/storage/uploads/img/guru/${data.item.nip}.jpg`" alt="Foto" onerror="this.onerror=null;this.src='/images/1.png'">
													</v-list-item-avatar>
													<v-list-item-content>
														<v-list-item-title v-html="data.item.name"></v-list-item-title>
														<v-list-item-subtitle v-html="data.item.jabatan"></v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</template>
										</v-autocomplete>
									</v-col>
									<v-col cols="12">
										<v-textarea label="Instruksi/Informasi" v-model="disposisi.konten" rows="2" auto-grow dense hide-details filled />
									</v-col>
									
									<v-col cols="12" sm="6">
										<v-select label="Status" v-model="disposisi.status" :items="['Diterima', 'Dibaca', 'Diteruskan','Ditindaklanjut', 'Dibalas','Selesai']" dense hide-details filled ></v-select>
									</v-col>
									<v-col cols="12">
										<v-btn block color="bg-gradient-primary" type="submit" dark :loading="loading">Simpan</v-btn>
									</v-col>
								</v-row>
							<!-- </v-container> -->
						</v-form>
					</v-expand-transition>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
	export default {
		name: 'FormDisposisi',
		props: {
			dialog: Object
		},
		data: () =>({
			loading: false,
			reply: false,
			disposisis: [],
			disposisi: {
				surat_id: null
			},
			surat: {},
			gurus: []
		}),
		methods: {
			replyDisposisi(disposisi) {
				this.reply = true
				this.disposisi = {
					surat_id : disposisi.surat_id,
					reply_to: disposisi.id
				}
			},
			removeKepada(item) {
				let index = this.disposisi.kepada.indexOf(_.find(this.disposisi.kepada, (ke => ke.nip == item.nip)))
				this.disposisi.kepada.splice(index,1)
				// console.log()
			},
			saveDisposisi() {
				this.loading = true
				axios({
						method: 'post',
						url: '/admin/surat/masuk/disposisi/store', 
						data: this.disposisi
					})
					.then(res => {
						this.loading = false
						this.$emit('close')

					}).catch( err => {
						this.loading = false
						console.log(err.response)
					})
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
			}
		},
		mounted() {
			this.surat = this.dialog.surat
			this.disposisi.surat_id = this.dialog.surat.no_surat
			if ( this.dialog.surat.disposisis.length > 0 ) {
				this.disposisis = this.dialog.surat.disposisis
				// this.reply = false
			} else {
				this.reply = true
			} 

			this.getGurus()
		}
	}
</script>