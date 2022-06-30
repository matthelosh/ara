<template>
	<div>
		<v-dialog
 			max-width="600"
 			transition="dialog-bottom-transition"
 			v-model="show"
 			@keydown.esc="cancel"
 			@keydown.enter="confirm"
		>
			<v-card>
				<v-card-title class="text-h5 error lighten-2" dark>
					<h5>
						<v-icon color="white">mdi-delete</v-icon>
						<span class="white--text">{{title}}</span>
					</h5>
					
				</v-card-title>
				<v-card-text>
					<v-container
						fill-height
						align-center
					>
						{{text}}	
					</v-container>
					
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text color="success" @click.native="cancel">Batal</v-btn>
					<v-btn text color="error" @click.native="confirm">Lanjut</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		name: 'ConfirmDialog',
		// props: { dialog: Object },
		data: () => ({
			show: false,
			resolve: null,
			reject: null,
			title: '',
			text: '',
			options: {
				color: 'grey lighten-3',
				width: 400,
				noconfirm: false
			}
		}),
		methods: {
			open(title, text, options) {
				this.show = true
				this.title = title
				this.text = text

				return new Promise((resolve, reject) => {
					this.resolve = resolve
					this.reject = reject
				})
			},
			confirm() {
				this.resolve(true)
				this.show = false
			},
			cancel() {
				this.resolve(false)
				this.show = false
			}
		},
	}
</script>

