<template>
    <div>
        <v-navigation-drawer
            v-model="right"
            fixed
            temporary
            color="pastel"
            right
            app
            
        >
            <v-list-item>
                <v-list-item-icon>
                <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img> -->
                <v-icon>mdi-hamburger</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>Menu</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn fab small @click="right = !right"><v-icon color="error"> mdi-close</v-icon>  </v-btn>
                </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                :href="item.url"
                link
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar flat
            style="border-bottom: 1px solid #333!important;"
        >
            <img src="/images/logo-new.svg" alt="Logo" height="38" />
            <v-toolbar-title class="site-title mx-3">
               SD NEGERI 1 BEDALISODO
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="d-none d-sm-block">
                <v-btn outlined class="mx-1" href="#hero">Beranda</v-btn>
                <v-btn outlined class="mx-1" href="#profil">Sambutan</v-btn>
                <v-btn outlined class="mx-1" href="#info">Info</v-btn>
            </span>
            <v-app-bar-nav-icon
                @click="right=!right"
            ></v-app-bar-nav-icon>

        </v-app-bar>
        
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data: () => ({
        right: false,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard', url: '#' },
          { title: 'About', icon: 'mdi-forum', url: '#profil' },
        ],
    }),
    methods: {
        // handleScroll() {

        // }
        goTo(divId) {
            const el = document.querySelector(divId)
            // window.scrollY = el.offsetTop
            // alert(el.offsetTop)
            // el.scrollIntoView({behavior: 'smooth'})
            window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth'
            })
        }
    },
    created() {
        // window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style>
    html {
        scroll-behavior: smooth;
    }
    /* .theme--light.v-app-bar.v-toolbar.v-sheet,
    .theme--light.v-toolbar.v-sheet,
    .theme--light.v-sheet,
    header.v-app-bar {
        background: transparent!important;
    } */
    /* header.v-app-bar--is-scrolled {
        background: #283861!important;
    } */
    .site-title {
       font-weight: 800;   
       color: #363636;
       font-size: 1.2em;
    }
</style>