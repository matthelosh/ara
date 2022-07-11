<template>
    <div>
    	<v-container>
    		<v-row>
    			<v-expand-transition>
    				<v-col cols="12" sm="6" v-if="form">
    					<v-card>
    						<v-btn fab small absolute right color="error" @click="form=false;klasifikasi={};">
    							<v-icon>mdi-close</v-icon>
    						</v-btn>
    						<v-card-text>
    							<v-form ref="formKlasifikasi" @submit.prevent="saveKlasifikasi">
    								<v-container>
    									<v-row>
    										<v-col cols="12">
    											<v-text-field label="Kode" v-model="klasifikasi.kode" filled hide-details></v-text-field>
    										</v-col>
    										<v-col cols="12">
    											<v-text-field label="Keterangan" v-model="klasifikasi.keterangan" filled hide-details></v-text-field>
    										</v-col>
    										<v-col cols="12">
    											<v-btn block type="submit" color="bg-gradient-primary" dark :loading="loading">Simpan</v-btn>
    										</v-col>
    									</v-row>
    								</v-container>
    							</v-form>
    						</v-card-text>
    					</v-card>
    				</v-col>
    			</v-expand-transition>
    			<v-expand-transition>
    			<v-col>
    				<v-card>
    					<v-card-title>
    						<h3>
    							<v-icon>mdi-list</v-icon>
    							<span class="d-none d-sm-inline">Klasifikasi Surat</span>
    						</h3>
    						<v-spacer></v-spacer>
    						<v-btn fab color="primary" small @click="klasifikasi = {}; form = true;">
    							<v-icon>mdi-plus</v-icon>
    						</v-btn>
    					</v-card-title>
    					<v-card-text>
    						<v-data-table
    							dense
 								:items="klasifikasis"
 								:headers="headers"
 								:loading="loading"
    						>
    							<template v-slot:no="{item}"></template>
    							<template v-slot:item.opsi="{item}">
    								<v-btn icon small color="warning" @click="klasifikasi=item; form=true"><v-icon>mdi-pencil-box</v-icon></v-btn>
    								<v-btn icon small color="error"><v-icon>mdi-delete</v-icon></v-btn>
    							</template>
    						</v-data-table>
    					</v-card-text>
    				</v-card>
    			</v-col>
    			</v-expand-transition>
    		</v-row>
    	</v-container>
    </div>
</template>

<script>
	import Dashboard from '../../Layouts/Dashboard'
	export default {
		name: 'AdminKlasifikasisurat',
		layout: Dashboard,
		data: () => ({
			klasifikasis: [],
			form: false,
			loading: false,
			headers: [
				{text: 'No', value: 'no' },
				{text: 'Kode', value: 'kode' },
				{text: 'Keterangan', value: 'keterangan' },
				{text: 'Opsi', value: 'opsi' },
			],
			klasifikasi: {},
		}),
		methods: {
			getKlasifikasi() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/surat/klasifikasi'
				}).then(res=> {
					let datas = []
					res.data.klasifikasis.forEach((item,index) => {
						item.no = index+1
						datas.push(item)
					})
					this.klasifikasis = datas
					this.loading = false
				}).catch( err => {
					this.loading = false
					console.log(err.response.data.msg)
				})
			},
			saveKlasifikasi() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/surat/klasifikasi/store',
					data: this.klasifikasi
				}).then(res => {
					this.loading = false
					this.klasifikasi = {}
					this.getKlasifikasi()
				}).catch( err => {
					this.loading = false
					console.log(err.response.data.msg)
				})
			}
		},
		mounted() {
			this.getKlasifikasi()
		}
	}
</script>