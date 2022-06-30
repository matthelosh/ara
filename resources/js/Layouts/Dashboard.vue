<template>
    <v-app style="background: #f5f5f5;" >
        <v-navigation-drawer 
            app 
            floating 
            color="#cfcfcf"
            v-model="sideMenu"

        >
        <!-- #f5f5f5 Warna Backgroudn yang Asli -->
           <v-list-item>
               <span>
                   <v-img src="/images/logo1.svg" width="38"></v-img>
               </span>
               <v-list-item-content>
                   <v-list-item-title>
                       <h2 class="ml-2 purple--text text-uppercase">Dashboard</h2>
                   </v-list-item-title>
               </v-list-item-content>
           </v-list-item>
           <!-- <v-divider></v-divider> -->
           <side-menu class="my-3"></side-menu>
        </v-navigation-drawer>
        <v-app-bar app absolute flat >
            <v-app-bar-nav-icon
                @click="sideMenu = !sideMenu"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
            
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{on,attrs}">
                    <v-avatar
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-bell</v-icon>
                    </v-avatar>
                </template>
                <v-list dense>
                    <!-- <v-list-item>
                        <v-list-item-avatar>
                            <v-avatar>
                                <img src="/images/1.png" alt="">
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{$page.props.user.userable.name}}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ $page.props.user.level }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item> -->
                    <v-divider class="my-3"></v-divider>
                    <v-list-item-group>
                        <!-- <v-list-item @click="logout">
                            <v-list-item-icon>
                                <v-icon>mdi-exit-to-app</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Keluar</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item> -->
                        <v-list-item>
                            <v-list-item-content>TO DO</v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-menu offset-y>
                <template v-slot:activator="{on,attrs}">
                    <v-avatar
                        v-bind="attrs"
                        v-on="on"
                    >
                        <img src="/images/1.png" alt="">
                    </v-avatar>
                </template>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-avatar>
                                <img src="/images/1.png" alt="">
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ $page.props.user.userable.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ $page.props.user.level }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="my-3"></v-divider>
                    <v-list-item-group>
                        <v-list-item @click="logout">
                            <v-list-item-icon>
                                <v-icon>mdi-exit-to-app</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
<script>
import SideMenu from './Components/Back/SideMenu.vue'
export default {
    name: 'Dashboard',
    props: {page_title: String},
    components: { SideMenu },
    data: () => ({
        // title: 'Judul',
        sideMenu: true,
        // sideBar
    }),
    methods: {
        logout() {
            axios({
                method: 'post',
                url: '/logout'
            }).then(res => {
                window.location.href='/'
            })
        }
    },
    computed: {
        pageTitle() {
            let page_title = this.$page.props.page_title.split(" ")
            let pageTitle =''
            for(var i=0; i < page_title.length; i++) {
                // pageTitle += page_title[i][0].toUpperCase()+page_title[i].shift
                pageTitle += page_title[i][0].toUpperCase()+page_title[i].slice(1)+" "
            }
            return pageTitle
        }
    }, 
    created(){
        document.querySelector('title').innerHTML = this.pageTitle
    }
}

</script>
<style lang="scss">
    .circled {
        border-radius: 50%;
    }
    .bg-gradient-error {
        background: linear-gradient(to right, rgb(255, 50, 50), rgb(200, 50, 173));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    .bg-gradient-warning {
        background: linear-gradient(to right, rgb(255, 208, 50), rgb(255, 150, 203));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    
    .bg-gradient-info {
        background: linear-gradient(to right, rgb(59, 198, 250), rgb(117, 205, 173));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    
    .bg-gradient-success {
        background: linear-gradient(to right, rgb(49, 201, 68), rgb(117, 205, 203));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    
    .bg-gradient-primary {
        background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    .bg-gradient-primary-light {
        background: linear-gradient(to right, rgb(250, 240, 255), rgb(255, 230, 250));
        // box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    
    .bg-gradient-secondary {
        background: linear-gradient(to right, rgb(148, 117, 205), rgb(186, 49, 201));
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
</style>