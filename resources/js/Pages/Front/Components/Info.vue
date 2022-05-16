<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet
                    v-for="berita in beritas"
                    :key="berita.id"
                >
                    <article>
                        <h1>{{berita.title}}</h1>
                        <span v-html="berita.content.substr(0, 60)"></span>
                    </article>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Info',
    data: () =>({
        beritas: [
            {
                id: 1,
                title: 'Pengukuhan Pengurus K3S dan KKG Tingkat Gugus 1',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
            {
                id: 2,
                title: 'Prestes Seleksi PPG PAI Tahun 2022',
                content: '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates officiis ducimus, consequatur neque fugit porro nemo voluptate nam veniam voluptatem amet facere officia? Ad dolores nesciunt ipsam deleniti beatae.</p>'
            },
        ]
    })
}
</script>