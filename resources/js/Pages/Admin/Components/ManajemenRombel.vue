<template>
	<v-container>
		<v-row>
			<v-spacer></v-spacer>
			<v-btn icon color="error" @click="$emit('close')" small class="mr-3"><v-icon>mdi-close</v-icon></v-btn>
		</v-row>
		<v-row>
			<v-col>
				<v-card>
					<v-card-text>
						<v-data-table
							:items="members"
							:headers="headerMembers"
							v-model="selectedMembers"
							dense
							show-select
						>
							<template v-slot:top>
								<v-container>
									<v-row>
										<v-col>
											<h5>Anggota Rombel {{rombel.name}}</h5>
											<v-badge overlap color="error" v-if="selectedMembers.length > 0">
												<template v-slot:badge>{{selectedMembers.length}}</template>
												<v-btn small color="bg-gradient-primary" dark @click="unregisterMember">
													<v-icon>mdi-chevron-double-right</v-icon>
													<span class="d-none d-sm-inline">Keluarkan</span>
												</v-btn>
											</v-badge>
										</v-col>
										<v-col>
											<v-text-field label="Cari" dense hide-details outlined v-model="searchMember"></v-text-field>
										</v-col>
									</v-row>
								</v-container>
							</template>
						</v-data-table>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col>
				<v-card>
					<v-card-text>
						<v-data-table
							:items="nonmembers"
							:headers="headerNonMembers"
							v-model="selectedNonMembers"
							dense
							show-select
							:search="searchNonMember"
						>
							<template v-slot:top>
								<v-container>
									<v-row>
										<v-col>
											<h5>Belum Masuk Rombel</h5>
											<v-badge overlap color="error" v-if="selectedNonMembers.length > 0">
												<template v-slot:badge>{{selectedNonMembers.length}}</template>
												<v-btn small color="bg-gradient-primary" dark @click="insertIntoRombel">
													<v-icon>mdi-chevron-double-left</v-icon>
													<span class="d-none d-sm-inline">Masukkan</span>
												</v-btn>
											</v-badge>
											<v-badge overlap color="error" v-if="selectedNonMembers.length > 0">
												<template v-slot:badge>{{selectedNonMembers.length}}</template>
												<v-btn small color="bg-gradient-error" dark @click="inactivate">
													<v-icon>mdi-close</v-icon>
													<span class="d-none d-sm-inline">Nonaktifkan</span>
												</v-btn>
											</v-badge>
										</v-col>
										<v-col>
											<v-text-field label="Cari" dense hide-details outlined v-model="searchNonMember"></v-text-field>
										</v-col>
									</v-row>
								</v-container>
							</template>
						</v-data-table>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	export default {
		name: 'ManajemenRombel',
		props: {rombel: Object},
		data: () => ({
			loading: false,
			members: [],
			nonmembers: [],
			searchNonMember: '',
			searchMember: '',
			headerMembers: [
				{text: 'NISN', value: 'nisn'},
				{text: 'Nama', value: 'nama'},
			],
			selectedMembers: [],
			selectedNonMembers: [],
			headerNonMembers: [
				{text: 'NISN', value: 'nisn'},
				{text: 'Nama', value: 'nama'},
			],
			search:''
		}),
		methods: {
			unregisterMember() {
				this.loading = true
				axios({
					method: 'put',
					url: '/admin/siswa/unregister-member',
					data: {siswas: this.selectedMembers, rombel: this.rombel.kode_rombel}
				}).then(res => {
					this.loading = false
					this.selectedMembers.forEach((item, index) => {
						// this.members.push(item)
						this.members.splice(index, 1)
					})
					this.selectedMembers = []
					this.getNonMembers()
				}).catch(err => console.log(err.response.data.msg))
			},
			inactivate(){
				this.loading = true
				axios({
					method: 'put',
					url: '/admin/siswa/inactivate',
					data: {siswas: this.selectedNonMembers}
				}).then(res => {
					this.loading = false
					this.getNonMembers()
					this.selectedNonMembers = []
				})
			},
			insertIntoRombel(){
				this.loading = true
				axios({
					method: 'put',
					url: '/admin/siswa/register-member',
					data: {siswas: this.selectedNonMembers, rombel_id: this.rombel.kode_rombel, periode: this.$page.props.periode.kode_periode}
				}).then( res => {
					this.loading = false
					this.selectedNonMembers.forEach((item, index) => {
						this.members.push(item)
						this.nonmembers.splice(index, 1)
					})
					this.selectedNonMembers = []
					this.getNonMembers()
				}).catch(err => console.log(err.response.data.msg))
				
			},
			getNonMembers() {
				this.loading = true
				axios({
					method: 'post',
					url: '/admin/siswa/nonmember',
					data: {periode: this.$page.props.periode.kode_periode}
				}).then(res => {
					this.nonmembers = res.data.nonmembers
					this.loading = false
				}).catch(err=> console.log(err.response.data.msg))
			}
		},
		mounted() {
			this.members = this.rombel.siswas
			this.getNonMembers()
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