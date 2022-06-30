<template>
	<div style="min-height:100vh;">
		<v-container fill-height align-center justify-center>
			<v-row>
				<v-col>
					<v-btn large @click="addAlbum" color="bg-gradient-primary" dark class="mx-5">
						<v-icon>mdi-image-multiple</v-icon>
						Buat Album
					</v-btn>	
				</v-col>
				
			</v-row>
			<v-slide-y-transition>
				<v-row v-if="albums.length > 0">
					<v-col v-for="album in albums" :key="album.id" cols="12" sm="4">
						<v-container fill-height align-center justify-center v-show="album.images.length < 1">
							<div class="box-dashed text-center">
								<v-btn icon large @click="addImage(album)"><v-icon large>mdi-file-image-plus</v-icon></v-btn>
								<h4>Belum Ada Foto di Album {{album.name}}</h4>	
							</div>
						</v-container>
						<div v-show="album.images.length > 0" class="album-box" style="position: relative; width: 100%; min-height: 255px;">
							<div class="album-overlay" style="background:pink;visibility: none; opacity: 0;">
								<v-btn color="bg-gradient-primary" dark @click="openAlbum(album)">{{album.name}}</v-btn>
								<p class="bg-gradient-primary">Kategori: {{album.category}}</p>
								<v-btn icon large @click="addImage(album)" class="btn-add-image"><v-icon large color="white">mdi-file-image-plus</v-icon></v-btn>
							</div>
							<v-img v-for="(image,i) in album.images.slice(0,4)" :key="i" :src="image.url" alt="Foto" class="album-image" :style="'transform: translate('+(5*i)+'px,'+(5*i)+'px); object-fit: fill;'" height="100%" />
						</div>
					</v-col>
				</v-row>
			
				<div class="box-dashed text-center" v-else>
					<v-btn icon large @click="addAlbum"><v-icon large>mdi-image-multiple</v-icon></v-btn>
					<h4 >Belum Ada Album</h4>	
				</div>
			</v-slide-y-transition>

		</v-container>
		<v-dialog max-width="400" v-model="dialogAlbum">
			<v-card color="bg-gradient-primary-light">
				<v-card-title>
					Buat Album
				</v-card-title>
				<v-card-text>
					<v-form ref="formAlbum" @submit.prevent="saveAlbum">
						<v-text-field label="Nama Album" v-model="album.name" outlined />
						<v-text-field label="Kategori Album" v-model="album.category" outlined />
						<v-btn block color="bg-gradient-primary" type="submit" dark>Simpan</v-btn>
					</v-form>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-dialog max-width="400" v-model="dialogImage">
			<v-card color="bg-gradient-primary-light">
				<v-card-title>
					Unggah Gambar Album {{album.name}}
				</v-card-title>
				<v-card-text>
					<v-img :src="image.url" class="mb-4 elevation-5" @click="$refs.fileImage.click()"></v-img>
					<v-form ref="formAlbum" @submit.prevent="saveImage">
						<input type="file" ref="fileImage" class="d-none" @change="onImagePicked" />
						<v-text-field label="Nama Gambar" v-model="image.title" outlined dense />
						<v-textarea label="Deskripsi Gambar" v-model="image.description" dense outlined rows="2" auto-grow />
						<v-btn block color="bg-gradient-primary" type="submit" dark>Simpan</v-btn>
					</v-form>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-dialog v-model="album.show" scrollable>
			<v-card dark>
				<v-toolbar flat >
					<v-toolbar-title>{{album.name}}</v-toolbar-title>

					<v-spacer></v-spacer>
					<v-btn icon  @click="addImage(album)" class="btn-add-image"><v-icon large color="white">mdi-file-image-plus</v-icon></v-btn>
					<v-btn icon color="error" @click="album={}"><v-icon>mdi-close</v-icon></v-btn>
				</v-toolbar>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col v-for="image in album.images" :key="image.id" cols="12" sm="3">
								<v-img  :src="image.url" class="elevation-5">
									<v-container fluid fill-height align-end>
										<v-row>
											<v-col>
												<h3 class="ma-0 bg-gradient-primary text-center" dark>{{image.title}}</h3>
												<small class="ma-0 px-3 bg-gradient-info black--text">{{image.description}}</small>
											</v-col>
										</v-row>
									</v-container>
								</v-img>
							</v-col>
						</v-row>
						
					</v-container>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import DashLayout from '@/js/Layouts/Dashboard'
export default {
	name: 'AdminGaleri',
	layout: [DashLayout],
	components: { DashLayout },
	data: () => ({
		albums: [],
		dialogAlbum: false,
		dialogImage: false,
		loading: false,
		album: {},
		image: {
			url: '/images/card-basic-person.png'
		},
		newImage: null
	}),
	methods: {
		openAlbum(album){
			album.show = true
			this.album = album
		},
		onImagePicked(e) {
			this.newImage = e.target.files[0]
			this.image.url = URL.createObjectURL(e.target.files[0])
		},
		saveImage(){
			let fd = new FormData()
			fd.append("file", this.newImage)
			fd.append("imageData", JSON.stringify(this.image))
			axios({
				method: 'post',
				url: '/admin/galeri/add-image',
				data: fd
			}).then(res => {
				this.dialogImage = false
				this.getAlbums()
				this.album = {}
				this.image = {}
			}).catch(err => {
				console.log(err)
			})
		},
		saveAlbum() {
			axios({
				method: 'post',
				url: '/admin/galeri/add-album',
				data: this.album
			}).then(res => {
				this.dialogAlbum = false
				this.album = {}
				this.getAlbums()
			})
		},
		addImage(album) {
			this.album = album
			this.image.album_id = album.id
			this.dialogImage= true
		},
		addAlbum(){
			this.dialogAlbum = true
		},
		getAlbums() {
			this.loading = true
			axios({
				method: 'post',
				url: '/admin/galeri'
			}).then(res => {
				this.albums = res.data.albums
				this.loading = false
			}).catch(err => {
				console.log(err)
			})
		},

	},
	mounted() {
		this.getAlbums()
	}
}	
</script>

<style scoped>
	.album-box {
		position: relative;
		/*background: #676767;*/
		width: 95%;
		height: auto;
	}
	.album-box .album-overlay {
		position: absolute;
		background: #333333ef!important;
		height: 95%;
		width: 100%;
		text-align:center;
		top: 0;
		z-index: 1;
	}
	.album-image {
		position: absolute;
		width: 95%;
		border: 2px solid #eee;
		border-radius: 3px;
		box-shadow: 3px 2px 10px rgba(0,0,0,0.5);
		transition: all .2s linear;
	}
	.album-box:hover .album-image {
		transform: translate(0px,0px)!important;
		transition: all .2s linear;
	}

	.album-box:hover .album-overlay {
		height: 100%;
		width: 95%;
		visibility: visible!important;
		opacity: 1!important;
		transition: all .2s ease-in-out;
		backdrop-filter: saturate(.9);
	}

	.album-box:hover .album-overlay h3,p {
		width: 95%;
		position: absolute;
		color: white!important;
		text-align:center!important;
		left: 50%;
		transform: translateX(-50%);
	}
	.album-box:hover .album-overlay p {
		bottom: 0;
	}

	.box-dashed {
		background: #fefefe;
		border: 2px dashed #fff;
		box-shadow: 0 3px 10px rgba(0,0,0,0.3);
		border-radius: 5px;
		padding: 20px;
		height: 200px;
		width: 300px;
	}

	.album-box .album-overlay .btn-add-image {
		/*background: pink!important;*/
		position: absolute;
		top: 50%!important;
		left: 50%;
		transform: translate(-50%);
	}
	.btn-add-image:hover i{
		color: #feccff!important;
	}

</style>