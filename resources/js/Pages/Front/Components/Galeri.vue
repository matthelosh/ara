<template>
    <v-container>
        <v-row>
            <v-col style="position:relative;">
                <div class="image-gallery">
                    <div class="image-box" v-for="foto in fotos" :key="foto.id">
                        <img :src="foto.img" alt="Foto">
                        <div class="overlay">
                            <div class="details">
                                <h3 class="title"><a href="#">{{foto.title}}</a></h3>
                                <span class="category">
                                    <a href="#">Kategori</a>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        fotos: [
            {
                id: 1,
                title: 'Gambar 1',
                img: '/uploads/img/galeri/1.jpg'
            },
            {
                id: 2,
                title: 'Gambar 2',
                img: '/uploads/img/galeri/2.jpg'
            },
            {
                id: 3,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/3.jpg'
            },
            {
                id: 4,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/4.jpg'
            },
            {
                id: 5,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/5.jpg'
            },
            {
                id: 6,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/6.jpg'
            },
            {
                id: 7,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/7.jpg'
            },
            {
                id: 8,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/8.jpg'
            },
            {
                id: 9,
                title: 'Gambar 3',
                img: '/uploads/img/galeri/9.jpg'
            },
            
            
        ]
    })
}
</script>

<style>
    .image-gallery {
        width: 100%;
        max-width: 950px;
        margin: 0 auto;
        /* padding: 50px 20px; */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
        grid-auto-rows:150px;
        grid-auto-flow: dense;
        gap: 20px;
    }

    .image-gallery .image-box {
        position: relative;
        overflow: hidden;
        /* border: 3px solid black; */
    }

    .image-gallery .image-box:nth-child(1) {
        grid-column: span 2;
        grid-row: span 2;
    }
    .image-gallery .image-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .5s ease;
    }

    .image-gallery .image-box:hover img {
        transform: scale(1.1);
        filter: sepia(100%);
    }

    .image-gallery .image-box .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom:0;
        left:0;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all .5s ease;
        z-index: 1;
    }

    .image-gallery .image-box:hover .overlay{
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
        opacity: 1;
        border: 3px solid black
    }

    .image-gallery .image-box .details {
        text-align: center;
    }

    .image-gallery .image-box .details .title {
        /* margin-bottom: 5px; */
        font-size: 24px;
        font-weight: 600;
        position: relative;
        top: -5px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }

    .image-gallery .image-box .details .category {
        font-size: 14px;
        font-weight: 400;
        position: relative;
        bottom: -5px;
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }

    .image-gallery .image-box:hover .details .title {
        top: 0;
        opacity: 1;
        visibility: visible;
        transition: all .3s .2s 
        ease;
    }

    .image-gallery .image-box:hover .details .category {
        bottom: 0;
        opacity: 1;
        visibility: visible;
        transition: all .3s .2s ease;
    }

    .image-gallery .image-box .details .title a,
    .image-gallery .image-box .details .category a {
        color: #222;
        text-decoration: none;
    }

    @media(max-width: 768px) {
        .image-gallery {
           
            grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
            grid-auto-rows: 250px;
        }
        .image-gallery .image-box:nth-child(7n+1) {
            grid-column: unset;
            grid-row: unset;
        }
    }
</style>