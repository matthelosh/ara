<template>
	<v-container>
		<v-row>
			<v-col>
				<iframe 
					v-for="video in videos"
					:key="video.id"
					width="420" 
					height="250" 
					:src="video.url"
				>
				</iframe>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'FrontVideo',
		data: () =>({
			videos: []
		}),
		methods: {
			getVideos() {
				axios({
					method: 'post',
					url: '/video'
				}).then(res => {
					this.videos = res.data.videos
				})
			}
		},
		mounted() {
			this.getVideos()
		}
	}
</script>

<style scoped>
	iframe {
		background: url('/images/card-basic-boat.png');
		background-size: cover;
		background-attachment: fixed;
		border: none;
	}
</style>