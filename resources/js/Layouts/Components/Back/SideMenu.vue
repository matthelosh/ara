<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-center">
                <v-avatar size="150">
                    <img src="/images/2.png" alt="Avatar">
                </v-avatar>
            </v-col>
        </v-row>
        <v-list shaped dense class="mt-5">
            <span v-for="(menu,i) in menus" :key="i">
                <span v-if="menu.children.length > 0">
                    <v-list-group
                        no-action
                    >
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon>mdi-layers</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content >
                                <v-list-item-title>{{menu.label}}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            as="Link"
                            v-for="(sub,s) in menu.children"
                            :key="s"
                            :href="sub.url"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{sub.label}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-icon>{{sub.icon}}</v-icon>
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
                roles: ['admin','wali','mapel','siswa'],
                active: true,
                children: []
            },
            {
                url: '/admin/profil',
                icon: 'mdi-account',
                label: 'Profil',
                roles: ['admin','wali','mapel','siswa'],
                active: false,
                children: []
            },
            {
                url: '#',
                icon: 'mdi-layers',
                label: 'Data Master',
                roles: ['admin'],
                active: false,
                children: [
                    {
                        url: '#',
                        icon: 'mdi-office-building',
                        label: 'Data Sekolah',
                        roles: ['admin'],
                        active: false,
                    },
                    {
                        url: '#',
                        icon: 'mdi-account-multiple',
                        label: 'Data Guru',
                        roles: ['admin'],
                        active: false,
                    },
                    {
                        url: '#',
                        icon: 'mdi-human-queue',
                        label: 'Data Siswa',
                        roles: ['admin'],
                        active: false,
                    },
                    {
                        url: '#',
                        icon: 'mdi-google-classroom',
                        label: 'Data Rombel',
                        roles: ['admin'],
                        active: false,
                    },
                ]
            },
            {
                url: '#',
                icon: 'mdi-google',
                label: 'Cari',
                roles: ['admin','wali','mapel','siswa'],
                active: false,
                children: []
            },

        ]
    }),
    computed: {
        user() {
            return this.$page.props.user
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
    .bg-gradient-primary {
        background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
</style>