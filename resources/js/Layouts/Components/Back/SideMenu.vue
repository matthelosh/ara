<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-center">
                <v-avatar size="100" class="elevation-4">
                    <img src="/images/2.png" alt="Avatar">
                </v-avatar>
            </v-col>
        </v-row>
        <v-list shaped dense class="mt-5">
            <span v-for="(menu,i) in sidemenus" :key="i">
                <span v-if="menu.children.length > 0">
                    <v-list-group
                        no-action
                        :value="menu.active"
                    >
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon>{{menu.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content >
                                <v-list-item-title>{{menu.label}}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            as="Link"
                            v-for="(sub,s) in menu.children"
                            :value="true"
                            :key="s"
                            :href="sub.url"
                            active-class="bg-gradient-primary"
                            :class="sub.active ? 'bg-gradient-primary white--text' : ''"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{sub.label}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-icon :color="sub.active ? 'white': ''">{{sub.icon}}</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </span>
                <span v-else>
                    <v-list-item 
                        as="Link"  
                        :href="menu.url" 
                        :value="menu.active" 
                        class="my-2" 
                        active-class="bg-gradient-primary" 
                        :class="menu.active ? 'bg-gradient-primary white--text' : ''"
                        >
                        <v-list-item-icon>
                            <v-icon :class="menu.active ? 'white--text': ''">{{menu.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{menu.label}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </span>
            </span>
            
        </v-list>
        <!-- {{sidemenus}} -->
    </div>
</template>
<script>
export default {
    name: 'SideMenu',
    data: () => ({
        menus: [
            {
                url: '/admin',
                icon: 'mdi-monitor-dashboard',
                label: 'Dashboard',
                roles: ['admin','guru','mapel','siswa'],
                active: false,
                children: []
            },
            {
                url: '#',
                icon: 'mdi-database',
                label: 'Data Master',
                roles: ['admin'],
                active: false,
                children: [
                    {
                        url: '/admin/sekolah',
                        icon: 'mdi-office-building',
                        label: 'Data Sekolah',
                        roles: ['admin'],
                        active: false,
                    },
                    {
                        url: '/admin/guru',
                        icon: 'mdi-account-multiple',
                        label: 'Data Guru',
                        roles: ['admin'],
                        active: false,
                    },
                    {
                        url: '/admin/siswa',
                        icon: 'mdi-human-queue',
                        label: 'Data Siswa',
                        roles: ['admin'],
                        active: false,
                    },
                    {
                        url: '/admin/rombel',
                        icon: 'mdi-google-classroom',
                        label: 'Data Rombel',
                        roles: ['admin'],
                        active: false,
                    },
                ]
            },
            {
                url: '#',
                icon: 'mdi-post-outline',
                label: 'Postingan',
                roles: ['admin','guru'],
                active: false,
                children: [
                    {
                        url: '/admin/post',
                        icon: 'mdi-typewriter',
                        label: 'Artikel',
                        roles: ['admin','guru'],
                        active: false,
                        children: []
                    },
                    {
                        url: '/admin/agenda',
                        icon: 'mdi-calendar',
                        label: 'Agenda',
                        roles: ['admin','guru'],
                        active: false,
                        children: []
                    },
                    {
                        url: '/admin/galeri',
                        icon: 'mdi-view-gallery-outline',
                        label: 'Galeri',
                        roles: ['admin','guru'],
                        active: false,
                        children: []
                    },
                    {
                        url: '/admin/video',
                        icon: 'mdi-movie-open-plus-outline',
                        label: 'Video',
                        roles: ['admin','guru'],
                        active: false,
                        children: []
                    },
                ]
            },
            {
                url: '#',
                icon: 'mdi-human-male-board',
                label: 'Pembelajaran',
                roles: ['admin','wali','guru'],
                active: false,
                children: [
                    {
                        url: '#',
                        icon: 'mdi-bookshelf',
                        label: 'Buku Induk',
                        roles: ['admin','wali'],
                        active: false,
                        children: []
                    },
                    {
                        url: '#',
                        icon: 'mdi-notebook-edit',
                        label: 'Jurnal',
                        roles: ['admin','wali'],
                        active: false,
                        children: []
                    },
                    {
                        url: '#',
                        icon: 'mdi-chart-line',
                        label: 'Rapor',
                        roles: ['admin','wali'],
                        active: false,
                        children: []
                    },
                    
                ]
            },
            {
                url: '/admin/surat',
                icon: 'mdi-email-variant',
                label: 'Surat',
                roles: ['admin'],
                active: false,
                children: [
                    {
                        url: '/admin/surat/agenda',
                        icon: 'mdi-inbox',
                        label: 'Agenda Surat',
                        roles: ['admin'],
                        active: false,
                        children: []
                    },
                    {
                        url: '/admin/surat/masuk',
                        icon: 'mdi-email-receive-outline',
                        label: 'Surat Masuk',
                        roles: ['admin'],
                        active: false,
                        children: []
                    },
                    {
                        url: '/admin/surat/keluar',
                        icon: 'mdi-email-send-outline',
                        label: 'Surat Keluar',
                        roles: ['admin'],
                        active: false,
                        children: []
                    },
                ]
            },
            
            {
                url: '/admin/settings',
                icon: 'mdi-application-settings',
                label: 'Pengaturan',
                roles: ['admin'],
                active: false,
                children: []
            },
            {
                url: '/admin/tools',
                icon: 'mdi-toolbox',
                label: 'Peralatan',
                roles: ['admin'],
                active: false,
                children: []
            },
            
        ]
    }),
    methods: {
    },
    computed: {
        user() {
            return this.$page.props.user
        },
        sidemenus() {
            let currentPath = window.location.pathname
            let menus = []
            this.menus.forEach(menu => {
                if (menu.roles.includes(this.$page.props.user.level)) {
                if(menu.children.length < 1 ) {
                    if(menu.url == currentPath) {
                        menu.active = true
                        menus.push(menu)
                    } else {
                        menu.active = false
                        menus.push(menu)
                    }
                } else {
                    let children = []
                    menu.children.forEach(child => {
                        if(child.url == currentPath) {
                            child.active = true
                            children.push(child)
                            menu.active = true
                            // menus.push(menu)
                        } else {
                            child.active = false
                            children.push(child)
                            menu.active = false
                            // menus.push(menu)
                        }
                    })
                    menu.active = menu.children.some(child => child.active === true)
                    menus.push(menu)
                }
                }
            })
            return menus
            // return currentPath
        }
    }
}
</script>
<style css scoped>
    .avatar-caption {
        position: absolute;
        bottom: 0;
        background: #fff;
        width: 100%;
    }
    
</style>