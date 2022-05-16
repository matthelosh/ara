<template>
    <div>
        <v-app-bar app  elevate-on-scroll fixed dark 
        >
            <v-icon class="mx-2">mdi-leaf</v-icon>
            <v-toolbar-title class="site-title">
               Sdn1 Beda!
            </v-toolbar-title>
            
            <v-spacer></v-spacer>
            <v-btn text href="#">Beranda</v-btn>
            <v-btn text href="#sambutan">Sambutan</v-btn>
            <v-btn text href="#info">Info</v-btn>
            <v-app-bar-nav-icon
                @click="right=!right"
            ></v-app-bar-nav-icon>

        </v-app-bar>
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
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data: () => ({
        right: false,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
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
    header.v-app-bar {
        background: transparent!important;
    }
    header.v-app-bar--is-scrolled {
        background: #283861!important;
    }
    .site-title {
       font-family: 'Caveat', cursive;    
    }
</style>