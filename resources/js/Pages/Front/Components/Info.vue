<template>
    <v-container>
        <div class="info-container">
            <div class="info-card" v-for="berita in beritas.slice(0,6)">
                <h1>{{berita.title}}</h1>
                <span class="meta">{{berita.created_at}} | {{berita.author}}</span>
                <v-divider class="mt-1 mb-3"></v-divider>
                <span v-html="berita.content.substr(0, 100)" class="d-none d-sm-flex black--text"></span>
                <v-btn small outlined :ripple="true" plain block @click="view">Baca</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Info',
    data: () =>({
        beritas: [
            {
                id: 1,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Pengukuhan Pengurus K3S dan KKG Tingkat Gugus 1',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 2,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Prestes Seleksi PPG PAI Tahun 2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 3,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Persiapan AKM 2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 4,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Pelepasan Siswa 2021-2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 4,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Pelepasan Siswa 2021-2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 4,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Pelepasan Siswa 2021-2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 4,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Pelepasan Siswa 2021-2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 4,
                created_at: '12-07-2022',
                author: 'Muhammad Soleh',
                title: 'Pelepasan Siswa 2021-2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
        ]
    }),
    methods: {
        view(e) {
            let me = e.target
            let myInfoCard = me.closest('.info-card')
            myInfoCard.style.transform = 'translateX(-100%)'
            myInfoCard.style.opacity = '0'
        }
    }
}
</script>

<style lang="sass">
    .info-card
        position: relative
        width: 100%
        margin: 20px auto
        background: #fff
        padding: 20px
        box-shadow: 0 0 10px rgba(0,0,0,0.1)
        border-radius: 3px
        h1
            line-height: 100%
            font-size: 1.3rem
            color: #333
            height: 75px
        span.meta
            font-size: .8rem
            color: #236767
    @media screen and (max-width: 414px)
        .info-container
            // background: orange
    
    @media screen and (min-width: 415px)
        .info-container
            // background: pink
            display: flex
            justify-content: center
            flex-wrap: wrap
            .info-card
                position: relative
                width: 25%
                margin: 20px
                background: #fff
                padding: 20px
                box-shadow: 0 0 10px rgba(0,0,0,0.1)
                border-radius: 3px
                h1
                    line-height: 100%
                    font-size: 1.3rem
                    color: #333
                    height: 75px
                span.meta
                    font-size: .8rem
                    color: #236767
            :hover
                // background: pink
                ::after
                    transform: rotateY(0deg)
            .info-card::after
                content: "After"
                position: absolute
                background: pink
                width: 100%
                height: 100%
                top: 0
                left: 0
                padding: 20px
                transform: rotateY(90deg)
            
</style>