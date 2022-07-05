"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[132],{4633:(n,e,i)=>{i.d(e,{Z:()=>s});var a=i(7897),t=i.n(a),l=i(1519),r=i.n(l)()(t());r.push([n.id,".avatar-caption[data-v-75fc34bb]{background:#fff;bottom:0;position:absolute;width:100%}","",{version:3,sources:["webpack://./resources/js/Layouts/Components/Back/SideMenu.vue"],names:[],mappings:"AAyRA,iCAGA,eAAA,CADA,QAAA,CADA,iBAAA,CAGA,UACA",sourcesContent:["<template>\n    <div>\n        <v-row>\n            <v-col class=\"d-flex justify-center\">\n                <v-avatar size=\"100\" class=\"elevation-4\">\n                    <img src=\"/images/2.png\" alt=\"Avatar\">\n                </v-avatar>\n            </v-col>\n        </v-row>\n        <v-list shaped dense class=\"mt-5\">\n            <span v-for=\"(menu,i) in sidemenus\" :key=\"i\">\n                <span v-if=\"menu.children.length > 0\">\n                    <v-list-group\n                        no-action\n                        :value=\"menu.active\"\n                    >\n                        <template v-slot:activator>\n                            <v-list-item-icon>\n                                <v-icon>{{menu.icon}}</v-icon>\n                            </v-list-item-icon>\n                            <v-list-item-content >\n                                <v-list-item-title>{{menu.label}}</v-list-item-title>\n                            </v-list-item-content>\n                        </template>\n                        <v-list-item\n                            as=\"Link\"\n                            v-for=\"(sub,s) in menu.children\"\n                            :value=\"true\"\n                            :key=\"s\"\n                            :href=\"sub.url\"\n                            active-class=\"bg-gradient-primary\"\n                            :class=\"sub.active ? 'bg-gradient-primary white--text' : ''\"\n                        >\n                            <v-list-item-content>\n                                <v-list-item-title>{{sub.label}}</v-list-item-title>\n                            </v-list-item-content>\n                            <v-list-item-icon>\n                                <v-icon :color=\"sub.active ? 'white': ''\">{{sub.icon}}</v-icon>\n                            </v-list-item-icon>\n                        </v-list-item>\n                    </v-list-group>\n                </span>\n                <span v-else>\n                    <v-list-item \n                        as=\"Link\"  \n                        :href=\"menu.url\" \n                        :value=\"menu.active\" \n                        class=\"my-2\" \n                        active-class=\"bg-gradient-primary\" \n                        :class=\"menu.active ? 'bg-gradient-primary white--text' : ''\"\n                        >\n                        <v-list-item-icon>\n                            <v-icon :class=\"menu.active ? 'white--text': ''\">{{menu.icon}}</v-icon>\n                        </v-list-item-icon>\n                        <v-list-item-content>\n                            <v-list-item-title>{{menu.label}}</v-list-item-title>\n                        </v-list-item-content>\n                    </v-list-item>\n                </span>\n            </span>\n            \n        </v-list>\n        \x3c!-- {{sidemenus}} --\x3e\n    </div>\n</template>\n<script>\nexport default {\n    name: 'SideMenu',\n    data: () => ({\n        menus: [\n            {\n                url: '/admin',\n                icon: 'mdi-monitor-dashboard',\n                label: 'Dashboard',\n                roles: ['admin','guru','mapel','siswa'],\n                active: false,\n                children: []\n            },\n            {\n                url: '#',\n                icon: 'mdi-database',\n                label: 'Data Master',\n                roles: ['admin'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/sekolah',\n                        icon: 'mdi-office-building',\n                        label: 'Data Sekolah',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/guru',\n                        icon: 'mdi-account-multiple',\n                        label: 'Data Guru',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/siswa',\n                        icon: 'mdi-human-queue',\n                        label: 'Data Siswa',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/rombel',\n                        icon: 'mdi-google-classroom',\n                        label: 'Data Rombel',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                ]\n            },\n            {\n                url: '#',\n                icon: 'mdi-post-outline',\n                label: 'Postingan',\n                roles: ['admin','guru'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/post',\n                        icon: 'mdi-typewriter',\n                        label: 'Artikel',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/agenda',\n                        icon: 'mdi-calendar',\n                        label: 'Agenda',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/galeri',\n                        icon: 'mdi-view-gallery-outline',\n                        label: 'Galeri',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/video',\n                        icon: 'mdi-movie-open-plus-outline',\n                        label: 'Video',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                ]\n            },\n            {\n                url: '#',\n                icon: 'mdi-human-male-board',\n                label: 'Administrasi',\n                roles: ['admin','wali','guru'],\n                active: false,\n                children: [\n                    {\n                        url: '#',\n                        icon: 'mdi-bookshelf',\n                        label: 'Buku Induk',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '#',\n                        icon: 'mdi-notebook-edit',\n                        label: 'Jurnal',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '#',\n                        icon: 'mdi-chart-line',\n                        label: 'Rapor',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    \n                ]\n            },\n            {\n                url: '/admin/surat',\n                icon: 'mdi-email-variant',\n                label: 'Surat',\n                roles: ['admin'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/surat/masuk',\n                        icon: 'mdi-inbox',\n                        label: 'Surat Masuk',\n                        roles: ['admin'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/surat/keluar',\n                        icon: 'mdi-email-send-outline',\n                        label: 'Surat Keluar',\n                        roles: ['admin'],\n                        active: false,\n                        children: []\n                    },\n                ]\n            },\n            \n            {\n                url: '/admin/settings',\n                icon: 'mdi-application-settings',\n                label: 'Pengaturan',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            {\n                url: '/admin/tools',\n                icon: 'mdi-toolbox',\n                label: 'Peralatan',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            \n        ]\n    }),\n    methods: {\n    },\n    computed: {\n        user() {\n            return this.$page.props.user\n        },\n        sidemenus() {\n            let currentPath = window.location.pathname\n            let menus = []\n            this.menus.forEach(menu => {\n                if (menu.roles.includes(this.$page.props.user.level)) {\n                if(menu.children.length < 1 ) {\n                    if(menu.url == currentPath) {\n                        menu.active = true\n                        menus.push(menu)\n                    } else {\n                        menu.active = false\n                        menus.push(menu)\n                    }\n                } else {\n                    let children = []\n                    menu.children.forEach(child => {\n                        if(child.url == currentPath) {\n                            child.active = true\n                            children.push(child)\n                            menu.active = true\n                            // menus.push(menu)\n                        } else {\n                            child.active = false\n                            children.push(child)\n                            menu.active = false\n                            // menus.push(menu)\n                        }\n                    })\n                    menu.active = menu.children.some(child => child.active === true)\n                    menus.push(menu)\n                }\n                }\n            })\n            return menus\n            // return currentPath\n        }\n    }\n}\n<\/script>\n<style css scoped>\n    .avatar-caption {\n        position: absolute;\n        bottom: 0;\n        background: #fff;\n        width: 100%;\n    }\n    \n</style>"],sourceRoot:""}]);const s=r},8031:(n,e,i)=>{i.d(e,{Z:()=>s});var a=i(7897),t=i.n(a),l=i(1519),r=i.n(l)()(t());r.push([n.id,".circled{border-radius:50%}.bg-gradient-error{background:linear-gradient(90deg,#ff3232,#c832ad);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-warning{background:linear-gradient(90deg,#ffd032,#ff96cb);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-info{background:linear-gradient(90deg,#3bc6fa,#75cdad);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-success{background:linear-gradient(90deg,#31c944,#75cdcb);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-primary{background:linear-gradient(90deg,#ba31c9,#9475cd);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-primary-light{background:linear-gradient(90deg,#faf0ff,#ffe6fa)}.bg-gradient-secondary{background:linear-gradient(90deg,#9475cd,#ba31c9);box-shadow:0 5px 10px rgba(0,0,0,.5)}.v-data-table::v-deep td{color:#333!important;font-size:.7rem!important}","",{version:3,sources:["webpack://./resources/js/Layouts/Dashboard.vue"],names:[],mappings:"AA0JA,SACI,iBAzJJ,CA2JA,mBACI,iDAAA,CACA,oCAxJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CA0JA,kBACI,iDAAA,CACA,oCAvJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CAyJA,2BACI,iDAtJJ,CA0JA,uBACI,iDAAA,CACA,oCAvJJ,CA0JA,yBAEI,oBAAA,CADA,yBAtJJ",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.circled {\n    border-radius: 50%;\n}\n.bg-gradient-error {\n    background: linear-gradient(to right, rgb(255, 50, 50), rgb(200, 50, 173));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n.bg-gradient-warning {\n    background: linear-gradient(to right, rgb(255, 208, 50), rgb(255, 150, 203));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-info {\n    background: linear-gradient(to right, rgb(59, 198, 250), rgb(117, 205, 173));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-success {\n    background: linear-gradient(to right, rgb(49, 201, 68), rgb(117, 205, 203));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-primary {\n    background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n.bg-gradient-primary-light {\n    background: linear-gradient(to right, rgb(250, 240, 255), rgb(255, 230, 250));\n    // box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-secondary {\n    background: linear-gradient(to right, rgb(148, 117, 205), rgb(186, 49, 201));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.v-data-table::v-deep td {\n    font-size: .7rem!important;\n    color: #333!important;\n}\n"],sourceRoot:""}]);const s=r},202:(n,e,i)=>{i.d(e,{Z:()=>v});const a={name:"SideMenu",data:function(){return{menus:[{url:"/admin",icon:"mdi-monitor-dashboard",label:"Dashboard",roles:["admin","guru","mapel","siswa"],active:!1,children:[]},{url:"#",icon:"mdi-database",label:"Data Master",roles:["admin"],active:!1,children:[{url:"/admin/sekolah",icon:"mdi-office-building",label:"Data Sekolah",roles:["admin"],active:!1},{url:"/admin/guru",icon:"mdi-account-multiple",label:"Data Guru",roles:["admin"],active:!1},{url:"/admin/siswa",icon:"mdi-human-queue",label:"Data Siswa",roles:["admin"],active:!1},{url:"/admin/rombel",icon:"mdi-google-classroom",label:"Data Rombel",roles:["admin"],active:!1}]},{url:"#",icon:"mdi-post-outline",label:"Postingan",roles:["admin","guru"],active:!1,children:[{url:"/admin/post",icon:"mdi-typewriter",label:"Artikel",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/agenda",icon:"mdi-calendar",label:"Agenda",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/galeri",icon:"mdi-view-gallery-outline",label:"Galeri",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/video",icon:"mdi-movie-open-plus-outline",label:"Video",roles:["admin","guru"],active:!1,children:[]}]},{url:"#",icon:"mdi-human-male-board",label:"Administrasi",roles:["admin","wali","guru"],active:!1,children:[{url:"#",icon:"mdi-bookshelf",label:"Buku Induk",roles:["admin","wali"],active:!1,children:[]},{url:"#",icon:"mdi-notebook-edit",label:"Jurnal",roles:["admin","wali"],active:!1,children:[]},{url:"#",icon:"mdi-chart-line",label:"Rapor",roles:["admin","wali"],active:!1,children:[]}]},{url:"/admin/surat",icon:"mdi-email-variant",label:"Surat",roles:["admin"],active:!1,children:[{url:"/admin/surat/masuk",icon:"mdi-inbox",label:"Surat Masuk",roles:["admin"],active:!1,children:[]},{url:"/admin/surat/keluar",icon:"mdi-email-send-outline",label:"Surat Keluar",roles:["admin"],active:!1,children:[]}]},{url:"/admin/settings",icon:"mdi-application-settings",label:"Pengaturan",roles:["admin"],active:!1,children:[]},{url:"/admin/tools",icon:"mdi-toolbox",label:"Peralatan",roles:["admin"],active:!1,children:[]}]}},methods:{},computed:{user:function(){return this.$page.props.user},sidemenus:function(){var n=this,e=window.location.pathname,i=[];return this.menus.forEach((function(a){if(a.roles.includes(n.$page.props.user.level))if(a.children.length<1)a.url==e?(a.active=!0,i.push(a)):(a.active=!1,i.push(a));else{var t=[];a.children.forEach((function(n){n.url==e?(n.active=!0,t.push(n),a.active=!0):(n.active=!1,t.push(n),a.active=!1)})),a.active=a.children.some((function(n){return!0===n.active})),i.push(a)}})),i}}};var t=i(3379),l=i.n(t),r=i(4633),s={insert:"head",singleton:!1};l()(r.Z,s);r.Z.locals;var o=i(1900);const c=(0,o.Z)(a,(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",[i("v-row",[i("v-col",{staticClass:"d-flex justify-center"},[i("v-avatar",{staticClass:"elevation-4",attrs:{size:"100"}},[i("img",{attrs:{src:"/images/2.png",alt:"Avatar"}})])],1)],1),n._v(" "),i("v-list",{staticClass:"mt-5",attrs:{shaped:"",dense:""}},n._l(n.sidemenus,(function(e,a){return i("span",{key:a},[e.children.length>0?i("span",[i("v-list-group",{attrs:{"no-action":"",value:e.active},scopedSlots:n._u([{key:"activator",fn:function(){return[i("v-list-item-icon",[i("v-icon",[n._v(n._s(e.icon))])],1),n._v(" "),i("v-list-item-content",[i("v-list-item-title",[n._v(n._s(e.label))])],1)]},proxy:!0}],null,!0)},[n._v(" "),n._l(e.children,(function(e,a){return i("v-list-item",{key:a,class:e.active?"bg-gradient-primary white--text":"",attrs:{as:"Link",value:!0,href:e.url,"active-class":"bg-gradient-primary"}},[i("v-list-item-content",[i("v-list-item-title",[n._v(n._s(e.label))])],1),n._v(" "),i("v-list-item-icon",[i("v-icon",{attrs:{color:e.active?"white":""}},[n._v(n._s(e.icon))])],1)],1)}))],2)],1):i("span",[i("v-list-item",{staticClass:"my-2",class:e.active?"bg-gradient-primary white--text":"",attrs:{as:"Link",href:e.url,value:e.active,"active-class":"bg-gradient-primary"}},[i("v-list-item-icon",[i("v-icon",{class:e.active?"white--text":""},[n._v(n._s(e.icon))])],1),n._v(" "),i("v-list-item-content",[i("v-list-item-title",[n._v(n._s(e.label))])],1)],1)],1)])})),0)],1)}),[],!1,null,"75fc34bb",null).exports,d={name:"Dashboard",props:{page_title:String},components:{SideMenu:c},data:function(){return{sideMenu:!0}},methods:{logout:function(){axios({method:"post",url:"/logout"}).then((function(n){window.location.href="/"}))}},computed:{pageTitle:function(){for(var n=this.$page.props.page_title.split(" "),e="",i=0;i<n.length;i++)e+=n[i][0].toUpperCase()+n[i].slice(1)+" ";return e}},created:function(){document.querySelector("title").innerHTML=this.pageTitle}};var u=i(8031),m={insert:"head",singleton:!1};l()(u.Z,m);u.Z.locals;const v=(0,o.Z)(d,(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("v-app",{staticStyle:{background:"#f5f5f5"}},[i("v-navigation-drawer",{attrs:{app:"",floating:"",color:"#cfcfcf"},model:{value:n.sideMenu,callback:function(e){n.sideMenu=e},expression:"sideMenu"}},[i("v-list-item",[i("span",[i("v-img",{attrs:{src:"/images/logo1.svg",width:"38"}})],1),n._v(" "),i("v-list-item-content",[i("v-list-item-title",[i("h2",{staticClass:"ml-2 purple--text text-uppercase"},[n._v("Dashboard")])])],1)],1),n._v(" "),i("side-menu",{staticClass:"my-3"})],1),n._v(" "),i("v-app-bar",{attrs:{app:"",absolute:"",flat:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){n.sideMenu=!n.sideMenu}}}),n._v(" "),i("v-toolbar-title",[n._v(n._s(n.pageTitle))]),n._v(" "),i("v-spacer"),n._v(" "),i("v-menu",{attrs:{"offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(e){var a=e.on,t=e.attrs;return[i("v-avatar",n._g(n._b({},"v-avatar",t,!1),a),[i("v-icon",[n._v("mdi-bell")])],1)]}}])},[n._v(" "),i("v-list",{attrs:{dense:""}},[i("v-divider",{staticClass:"my-3"}),n._v(" "),i("v-list-item-group",[i("v-list-item",[i("v-list-item-content",[n._v("TO DO")])],1)],1)],1)],1),n._v(" "),i("v-menu",{attrs:{"offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(e){var a=e.on,t=e.attrs;return[i("v-avatar",n._g(n._b({},"v-avatar",t,!1),a),[i("img",{attrs:{src:"/images/1.png",alt:""}})])]}}])},[n._v(" "),i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-avatar",[i("img",{attrs:{src:"/images/1.png",alt:""}})])],1),n._v(" "),i("v-list-item-content",[i("v-list-item-title",[n._v("\n                            "+n._s(n.$page.props.user.userable.name)+"\n                        ")]),n._v(" "),i("v-list-item-subtitle",[n._v("\n                            "+n._s(n.$page.props.user.level)+"\n                        ")])],1)],1),n._v(" "),i("v-divider",{staticClass:"my-3"}),n._v(" "),i("v-list-item-group",[i("v-list-item",{on:{click:n.logout}},[i("v-list-item-icon",[i("v-icon",[n._v("mdi-exit-to-app")])],1),n._v(" "),i("v-list-item-content",[i("v-list-item-title",[n._v("Logout")])],1)],1)],1)],1)],1)],1),n._v(" "),i("v-main",[n._t("default")],2)],1)}),[],!1,null,null,null).exports},132:(n,e,i)=>{i.r(e),i.d(e,{default:()=>t});const a={name:"Admin.Surat",layout:i(202).Z};const t=(0,i(1900).Z)(a,(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",[i("v-container",[i("v-row",[i("v-col",[i("v-card",[i("v-card-text",[i("h3",[n._v("Surat")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=132.js.map