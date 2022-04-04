<template>
    <v-app style="background: #f5f5f5;" >
        <v-navigation-drawer 
            app 
            floating 
            color="#f5f5f5"
            v-model="sideMenu"
        >
           <v-list-item>
               <span>
                   <v-img src="/images/ara1.svg" max-height="50" max-width="50"></v-img>
               </span>
               <v-list-item-content>
                   <v-list-item-title>
                       <h2 class="ml-2 purple--text darken-3" >A.R.A.</h2>
                   </v-list-item-title>
               </v-list-item-content>
           </v-list-item>
           <v-divider></v-divider>
           <side-menu class="my-3"></side-menu>
        </v-navigation-drawer>
        <v-app-bar app absolute flat >
            <v-app-bar-nav-icon
                @click="sideMenu = !sideMenu"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Halo</v-toolbar-title>
            <v-spacer></v-spacer>
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
                            <v-list-itemtitle>
                                Nama User
                            </v-list-itemtitle>
                            <v-list-item-subtitle>
                                Admin
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="my-3"></v-divider>
                    <v-list-item-group>
                        <v-list-item>
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
import SideMenu from './Components/SideMenu.vue'
export default {
    name: 'Dashboard',
    components: { SideMenu },
    data: () => ({
        title: 'Judul',
        sideMenu: true,
        // sideBar
    }),
    computed: {
        side() {

        }
    }, 
    created(){
        document.querySelector('title').innerHTML = this.title
    }
}

</script>
<style lang="scss" scoped>
    .circled {
        border-radius: 50%;
    }
    
</style>