<template>
	<v-container>
		<v-row>
			<v-col>
				Tabel Anggota Rombel
			</v-col>
			<v-col>
				Tabel Siswa
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	export default {
		name: 'ManajemenRombel',
		props: {rombel: Object},
		data: () => ({
			members: [],
			nonmembers: [],
			headerMembers: [],
			headerNonMembers: [],
			search:''
		}),
	}
</script>