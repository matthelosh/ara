"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[917],{6387:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(7897),i=t.n(a),l=t(1519),s=t.n(l)()(i());s.push([n.id,".avatar-caption[data-v-884f373a]{background:#fff;bottom:0;position:absolute;width:100%}","",{version:3,sources:["webpack://./resources/js/Layouts/Components/Back/SideMenu.vue"],names:[],mappings:"AAyRA,iCAGA,eAAA,CADA,QAAA,CADA,iBAAA,CAGA,UACA",sourcesContent:["<template>\n    <div>\n        <v-row>\n            <v-col class=\"d-flex justify-center\">\n                <v-avatar size=\"100\" class=\"elevation-4\">\n                    <img src=\"/images/2.png\" alt=\"Avatar\">\n                </v-avatar>\n            </v-col>\n        </v-row>\n        <v-list shaped dense class=\"mt-5\">\n            <span v-for=\"(menu,i) in sidemenus\" :key=\"i\">\n                <span v-if=\"menu.children.length > 0\">\n                    <v-list-group\n                        no-action\n                        :value=\"menu.active\"\n                    >\n                        <template v-slot:activator>\n                            <v-list-item-icon>\n                                <v-icon>{{menu.icon}}</v-icon>\n                            </v-list-item-icon>\n                            <v-list-item-content >\n                                <v-list-item-title>{{menu.label}}</v-list-item-title>\n                            </v-list-item-content>\n                        </template>\n                        <v-list-item\n                            as=\"Link\"\n                            v-for=\"(sub,s) in menu.children\"\n                            :value=\"true\"\n                            :key=\"s\"\n                            :href=\"sub.url\"\n                            active-class=\"bg-gradient-primary\"\n                            :class=\"sub.active ? 'bg-gradient-primary white--text' : ''\"\n                        >\n                            <v-list-item-content>\n                                <v-list-item-title>{{sub.label}}</v-list-item-title>\n                            </v-list-item-content>\n                            <v-list-item-icon>\n                                <v-icon :color=\"sub.active ? 'white': ''\">{{sub.icon}}</v-icon>\n                            </v-list-item-icon>\n                        </v-list-item>\n                    </v-list-group>\n                </span>\n                <span v-else>\n                    <v-list-item \n                        as=\"Link\"  \n                        :href=\"menu.url\" \n                        :value=\"menu.active\" \n                        class=\"my-2\" \n                        active-class=\"bg-gradient-primary\" \n                        :class=\"menu.active ? 'bg-gradient-primary white--text' : ''\"\n                        >\n                        <v-list-item-icon>\n                            <v-icon :class=\"menu.active ? 'white--text': ''\">{{menu.icon}}</v-icon>\n                        </v-list-item-icon>\n                        <v-list-item-content>\n                            <v-list-item-title>{{menu.label}}</v-list-item-title>\n                        </v-list-item-content>\n                    </v-list-item>\n                </span>\n            </span>\n            \n        </v-list>\n        \x3c!-- {{sidemenus}} --\x3e\n    </div>\n</template>\n<script>\nexport default {\n    name: 'SideMenu',\n    data: () => ({\n        menus: [\n            {\n                url: '/admin',\n                icon: 'mdi-monitor-dashboard',\n                label: 'Dashboard',\n                roles: ['admin','guru','mapel','siswa'],\n                active: false,\n                children: []\n            },\n            {\n                url: '#',\n                icon: 'mdi-database',\n                label: 'Data Master',\n                roles: ['admin'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/sekolah',\n                        icon: 'mdi-office-building',\n                        label: 'Data Sekolah',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/guru',\n                        icon: 'mdi-account-multiple',\n                        label: 'Data Guru',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/siswa',\n                        icon: 'mdi-human-queue',\n                        label: 'Data Siswa',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/rombel',\n                        icon: 'mdi-google-classroom',\n                        label: 'Data Rombel',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                ]\n            },\n            {\n                url: '#',\n                icon: 'mdi-post-outline',\n                label: 'Postingan',\n                roles: ['admin','guru'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/post',\n                        icon: 'mdi-typewriter',\n                        label: 'Artikel',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/agenda',\n                        icon: 'mdi-calendar',\n                        label: 'Agenda',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/galeri',\n                        icon: 'mdi-view-gallery-outline',\n                        label: 'Galeri',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/video',\n                        icon: 'mdi-movie-open-plus-outline',\n                        label: 'Video',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                ]\n            },\n            {\n                url: '#',\n                icon: 'mdi-human-male-board',\n                label: 'Pembelajaran',\n                roles: ['admin','wali','guru'],\n                active: false,\n                children: [\n                    {\n                        url: '#',\n                        icon: 'mdi-bookshelf',\n                        label: 'Buku Induk',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '#',\n                        icon: 'mdi-notebook-edit',\n                        label: 'Jurnal',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '#',\n                        icon: 'mdi-chart-line',\n                        label: 'Rapor',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    \n                ]\n            },\n            {\n                url: '/admin/surat',\n                icon: 'mdi-email-variant',\n                label: 'Surat',\n                roles: ['admin'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/surat/masuk',\n                        icon: 'mdi-inbox',\n                        label: 'Surat Masuk',\n                        roles: ['admin'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/surat/keluar',\n                        icon: 'mdi-email-send-outline',\n                        label: 'Surat Keluar',\n                        roles: ['admin'],\n                        active: false,\n                        children: []\n                    },\n                ]\n            },\n            \n            {\n                url: '/admin/settings',\n                icon: 'mdi-application-settings',\n                label: 'Pengaturan',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            {\n                url: '/admin/tools',\n                icon: 'mdi-toolbox',\n                label: 'Peralatan',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            \n        ]\n    }),\n    methods: {\n    },\n    computed: {\n        user() {\n            return this.$page.props.user\n        },\n        sidemenus() {\n            let currentPath = window.location.pathname\n            let menus = []\n            this.menus.forEach(menu => {\n                if (menu.roles.includes(this.$page.props.user.level)) {\n                if(menu.children.length < 1 ) {\n                    if(menu.url == currentPath) {\n                        menu.active = true\n                        menus.push(menu)\n                    } else {\n                        menu.active = false\n                        menus.push(menu)\n                    }\n                } else {\n                    let children = []\n                    menu.children.forEach(child => {\n                        if(child.url == currentPath) {\n                            child.active = true\n                            children.push(child)\n                            menu.active = true\n                            // menus.push(menu)\n                        } else {\n                            child.active = false\n                            children.push(child)\n                            menu.active = false\n                            // menus.push(menu)\n                        }\n                    })\n                    menu.active = menu.children.some(child => child.active === true)\n                    menus.push(menu)\n                }\n                }\n            })\n            return menus\n            // return currentPath\n        }\n    }\n}\n<\/script>\n<style css scoped>\n    .avatar-caption {\n        position: absolute;\n        bottom: 0;\n        background: #fff;\n        width: 100%;\n    }\n    \n</style>"],sourceRoot:""}]);const r=s},8031:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(7897),i=t.n(a),l=t(1519),s=t.n(l)()(i());s.push([n.id,".circled{border-radius:50%}.bg-gradient-error{background:linear-gradient(90deg,#ff3232,#c832ad);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-warning{background:linear-gradient(90deg,#ffd032,#ff96cb);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-info{background:linear-gradient(90deg,#3bc6fa,#75cdad);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-success{background:linear-gradient(90deg,#31c944,#75cdcb);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-primary{background:linear-gradient(90deg,#ba31c9,#9475cd);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-primary-light{background:linear-gradient(90deg,#faf0ff,#ffe6fa)}.bg-gradient-secondary{background:linear-gradient(90deg,#9475cd,#ba31c9);box-shadow:0 5px 10px rgba(0,0,0,.5)}.v-data-table::v-deep td{color:#333!important;font-size:.7rem!important}","",{version:3,sources:["webpack://./resources/js/Layouts/Dashboard.vue"],names:[],mappings:"AA0JA,SACI,iBAzJJ,CA2JA,mBACI,iDAAA,CACA,oCAxJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CA0JA,kBACI,iDAAA,CACA,oCAvJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CAyJA,2BACI,iDAtJJ,CA0JA,uBACI,iDAAA,CACA,oCAvJJ,CA0JA,yBAEI,oBAAA,CADA,yBAtJJ",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.circled {\n    border-radius: 50%;\n}\n.bg-gradient-error {\n    background: linear-gradient(to right, rgb(255, 50, 50), rgb(200, 50, 173));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n.bg-gradient-warning {\n    background: linear-gradient(to right, rgb(255, 208, 50), rgb(255, 150, 203));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-info {\n    background: linear-gradient(to right, rgb(59, 198, 250), rgb(117, 205, 173));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-success {\n    background: linear-gradient(to right, rgb(49, 201, 68), rgb(117, 205, 203));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-primary {\n    background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n.bg-gradient-primary-light {\n    background: linear-gradient(to right, rgb(250, 240, 255), rgb(255, 230, 250));\n    // box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-secondary {\n    background: linear-gradient(to right, rgb(148, 117, 205), rgb(186, 49, 201));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.v-data-table::v-deep td {\n    font-size: .7rem!important;\n    color: #333!important;\n}\n"],sourceRoot:""}]);const r=s},7717:(n,e,t)=>{t.d(e,{Z:()=>r});var a=t(7897),i=t.n(a),l=t(1519),s=t.n(l)()(i());s.push([n.id,".v-data-table[data-v-2a58a331] td{color:#333!important;font-size:.7rem!important}","",{version:3,sources:["webpack://./resources/js/Pages/Admin/Suratkeluar.vue"],names:[],mappings:"AA4OC,kCAEO,oBAAA,CADA,yBA1OR",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t.v-data-table::v-deep td {\n        font-size: .7rem!important;\n        color: #333!important;\n    }\n"],sourceRoot:""}]);const r=s},3045:(n,e,t)=>{t.d(e,{Z:()=>v});const a={name:"SideMenu",data:function(){return{menus:[{url:"/admin",icon:"mdi-monitor-dashboard",label:"Dashboard",roles:["admin","guru","mapel","siswa"],active:!1,children:[]},{url:"#",icon:"mdi-database",label:"Data Master",roles:["admin"],active:!1,children:[{url:"/admin/sekolah",icon:"mdi-office-building",label:"Data Sekolah",roles:["admin"],active:!1},{url:"/admin/guru",icon:"mdi-account-multiple",label:"Data Guru",roles:["admin"],active:!1},{url:"/admin/siswa",icon:"mdi-human-queue",label:"Data Siswa",roles:["admin"],active:!1},{url:"/admin/rombel",icon:"mdi-google-classroom",label:"Data Rombel",roles:["admin"],active:!1}]},{url:"#",icon:"mdi-post-outline",label:"Postingan",roles:["admin","guru"],active:!1,children:[{url:"/admin/post",icon:"mdi-typewriter",label:"Artikel",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/agenda",icon:"mdi-calendar",label:"Agenda",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/galeri",icon:"mdi-view-gallery-outline",label:"Galeri",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/video",icon:"mdi-movie-open-plus-outline",label:"Video",roles:["admin","guru"],active:!1,children:[]}]},{url:"#",icon:"mdi-human-male-board",label:"Pembelajaran",roles:["admin","wali","guru"],active:!1,children:[{url:"#",icon:"mdi-bookshelf",label:"Buku Induk",roles:["admin","wali"],active:!1,children:[]},{url:"#",icon:"mdi-notebook-edit",label:"Jurnal",roles:["admin","wali"],active:!1,children:[]},{url:"#",icon:"mdi-chart-line",label:"Rapor",roles:["admin","wali"],active:!1,children:[]}]},{url:"/admin/surat",icon:"mdi-email-variant",label:"Surat",roles:["admin"],active:!1,children:[{url:"/admin/surat/masuk",icon:"mdi-inbox",label:"Surat Masuk",roles:["admin"],active:!1,children:[]},{url:"/admin/surat/keluar",icon:"mdi-email-send-outline",label:"Surat Keluar",roles:["admin"],active:!1,children:[]}]},{url:"/admin/settings",icon:"mdi-application-settings",label:"Pengaturan",roles:["admin"],active:!1,children:[]},{url:"/admin/tools",icon:"mdi-toolbox",label:"Peralatan",roles:["admin"],active:!1,children:[]}]}},methods:{},computed:{user:function(){return this.$page.props.user},sidemenus:function(){var n=this,e=window.location.pathname,t=[];return this.menus.forEach((function(a){if(a.roles.includes(n.$page.props.user.level))if(a.children.length<1)a.url==e?(a.active=!0,t.push(a)):(a.active=!1,t.push(a));else{var i=[];a.children.forEach((function(n){n.url==e?(n.active=!0,i.push(n),a.active=!0):(n.active=!1,i.push(n),a.active=!1)})),a.active=a.children.some((function(n){return!0===n.active})),t.push(a)}})),t}}};var i=t(3379),l=t.n(i),s=t(6387),r={insert:"head",singleton:!1};l()(s.Z,r);s.Z.locals;var o=t(1900);const c=(0,o.Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-row",[t("v-col",{staticClass:"d-flex justify-center"},[t("v-avatar",{staticClass:"elevation-4",attrs:{size:"100"}},[t("img",{attrs:{src:"/images/2.png",alt:"Avatar"}})])],1)],1),n._v(" "),t("v-list",{staticClass:"mt-5",attrs:{shaped:"",dense:""}},n._l(n.sidemenus,(function(e,a){return t("span",{key:a},[e.children.length>0?t("span",[t("v-list-group",{attrs:{"no-action":"",value:e.active},scopedSlots:n._u([{key:"activator",fn:function(){return[t("v-list-item-icon",[t("v-icon",[n._v(n._s(e.icon))])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v(n._s(e.label))])],1)]},proxy:!0}],null,!0)},[n._v(" "),n._l(e.children,(function(e,a){return t("v-list-item",{key:a,class:e.active?"bg-gradient-primary white--text":"",attrs:{as:"Link",value:!0,href:e.url,"active-class":"bg-gradient-primary"}},[t("v-list-item-content",[t("v-list-item-title",[n._v(n._s(e.label))])],1),n._v(" "),t("v-list-item-icon",[t("v-icon",{attrs:{color:e.active?"white":""}},[n._v(n._s(e.icon))])],1)],1)}))],2)],1):t("span",[t("v-list-item",{staticClass:"my-2",class:e.active?"bg-gradient-primary white--text":"",attrs:{as:"Link",href:e.url,value:e.active,"active-class":"bg-gradient-primary"}},[t("v-list-item-icon",[t("v-icon",{class:e.active?"white--text":""},[n._v(n._s(e.icon))])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v(n._s(e.label))])],1)],1)],1)])})),0)],1)}),[],!1,null,"884f373a",null).exports,d={name:"Dashboard",props:{page_title:String},components:{SideMenu:c},data:function(){return{sideMenu:!0}},methods:{logout:function(){axios({method:"post",url:"/logout"}).then((function(n){window.location.href="/"}))}},computed:{pageTitle:function(){for(var n=this.$page.props.page_title.split(" "),e="",t=0;t<n.length;t++)e+=n[t][0].toUpperCase()+n[t].slice(1)+" ";return e}},created:function(){document.querySelector("title").innerHTML=this.pageTitle}};var u=t(8031),m={insert:"head",singleton:!1};l()(u.Z,m);u.Z.locals;const v=(0,o.Z)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",{staticStyle:{background:"#f5f5f5"}},[t("v-navigation-drawer",{attrs:{app:"",floating:"",color:"#cfcfcf"},model:{value:n.sideMenu,callback:function(e){n.sideMenu=e},expression:"sideMenu"}},[t("v-list-item",[t("span",[t("v-img",{attrs:{src:"/images/logo1.svg",width:"38"}})],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[t("h2",{staticClass:"ml-2 purple--text text-uppercase"},[n._v("Dashboard")])])],1)],1),n._v(" "),t("side-menu",{staticClass:"my-3"})],1),n._v(" "),t("v-app-bar",{attrs:{app:"",absolute:"",flat:""}},[t("v-app-bar-nav-icon",{on:{click:function(e){n.sideMenu=!n.sideMenu}}}),n._v(" "),t("v-toolbar-title",[n._v(n._s(n.pageTitle))]),n._v(" "),t("v-spacer"),n._v(" "),t("v-menu",{attrs:{"offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[t("v-avatar",n._g(n._b({},"v-avatar",i,!1),a),[t("v-icon",[n._v("mdi-bell")])],1)]}}])},[n._v(" "),t("v-list",{attrs:{dense:""}},[t("v-divider",{staticClass:"my-3"}),n._v(" "),t("v-list-item-group",[t("v-list-item",[t("v-list-item-content",[n._v("TO DO")])],1)],1)],1)],1),n._v(" "),t("v-menu",{attrs:{"offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[t("v-avatar",n._g(n._b({},"v-avatar",i,!1),a),[t("img",{attrs:{src:"/images/1.png",alt:""}})])]}}])},[n._v(" "),t("v-list",{attrs:{dense:""}},[t("v-list-item",[t("v-list-item-avatar",[t("v-avatar",[t("img",{attrs:{src:"/images/1.png",alt:""}})])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v("\n                            "+n._s(n.$page.props.user.userable.name)+"\n                        ")]),n._v(" "),t("v-list-item-subtitle",[n._v("\n                            "+n._s(n.$page.props.user.level)+"\n                        ")])],1)],1),n._v(" "),t("v-divider",{staticClass:"my-3"}),n._v(" "),t("v-list-item-group",[t("v-list-item",{on:{click:n.logout}},[t("v-list-item-icon",[t("v-icon",[n._v("mdi-exit-to-app")])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v("Logout")])],1)],1)],1)],1)],1)],1),n._v(" "),t("v-main",[n._t("default")],2)],1)}),[],!1,null,null,null).exports},8917:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});const a={name:"Inmail",layout:t(3045).Z,data:function(){return{formSurat:"add",search:"",inboxes:[{no:1,tanggal:"2022-05-03",no_surat:"800/312/23.34.1.4/V/2022",sifat:"Penting",perihal:"Pemberitahuan",pengirim:"Kepala Sekolah",kepada:"Dinas Pendidikan Kab. Malang",disposisi:"Menunggu Disposisi"},{no:2,tanggal:"2022-06-03",no_surat:"800/310/23.34.1.4/VI/2022",sifat:"Penting",perihal:"Undangan KKG PAI Kec. Wagir",pengirim:"Kepala Sekolah",kepada:"KKG PAI Kec. Wagir",disposisi:"Muhammad Soleh, S. Pd. I (Guru PAI)"}],headers:[{text:"No",value:"no",sortable:!1},{text:"Tanggal",value:"tanggal"},{text:"No Surat",value:"no_surat"},{text:"Sifat",value:"sifat"},{text:"Perihal",value:"perihal"},{text:"Pengirim",value:"pengirim"},{text:"Status Disposisi",value:"disposisi"},{text:"Opsi",value:"opsi"}],surat:{},fileUrl:"/pdf/surat.pdf",jenises:[{kode:"sk",label:"Surat Keputusan"},{kode:"skt",label:"Surat Keterangan"},{kode:"sp",label:"Surat Peringatan"},{kode:"spr",label:"Surat Perintah"},{kode:"spb",label:"Surat Pemberitahuan"},{kode:"su",label:"Surat Undangan"},{kode:"se",label:"Surat Edaran"}],tipes:[{jenis_id:"sk",tipe:"Pengangkatan Guru Tidak Tetap"},{jenis_id:"sk",tipe:"Pembagian Tugas"},{jenis_id:"sk",tipe:"Keputusan Kelulusan Siswa"},{jenis_id:"sk",tipe:"Penetapan Operator Sekolah"},{jenis_id:"sk",tipe:"Penetapan Operator BOS"},{jenis_id:"sk",tipe:"Penetapan Bendahara BOS"},{jenis_id:"skt",tipe:"Keterangan Mengajar"},{jenis_id:"skt",tipe:"Keterangan Siswa"},{jenis_id:"spr",tipe:"Perintah Perjalanan Dinas"},{jenis_id:"spr",tipe:"Perintah Melaksanakan Tugas"}],types:[]}},methods:{saveInmail:function(){},onFilePicked:function(n){var e=n.target.files[0],t=URL.createObjectURL(e);this.fileUrl=t},onJenisChanged:function(n){this.types=_.filter(this.tipes,(function(e){return e.jenis_id==n}))}}};var i=t(3379),l=t.n(i),s=t(7717),r={insert:"head",singleton:!1};l()(s.Z,r);s.Z.locals;const o=(0,t(1900).Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-container",[t("v-row",[t("v-col",[t("v-expand-transition",["view"==n.formSurat?t("v-card",[t("v-card-title",[t("h3",[t("v-icon",{staticClass:"mb-1"},[n._v("mdi-email-send-outline")]),n._v("\n\t\t\t\t\t\t\t\tSurat Masuk\n\t\t\t\t\t\t\t")],1),n._v(" "),t("v-spacer"),n._v(" "),t("v-btn",{staticClass:"mx-1",attrs:{small:"",color:"bg-gradient-error",dark:""},on:{click:function(e){n.formSurat="add"}}},[t("v-icon",[n._v("mdi-plus-circle-outline")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Tambah")])],1),n._v(" "),t("v-btn",{staticClass:"mx-1",attrs:{small:"",color:"bg-gradient-primary",dark:""},on:{click:function(e){n.formSurat="import"}}},[t("v-icon",[n._v("mdi-plus-circle-multiple-outline")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Impor Excel")])],1)],1),n._v(" "),t("v-card-text",[t("v-data-table",{attrs:{items:n.inboxes,headers:n.headers,search:n.search,dense:"","header-props":{sortIcon:null}},scopedSlots:n._u([{key:"top",fn:function(){return[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"4"}}),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}}),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"Cari",clearable:"","append-icon":"mdi-magnify",outlined:"",dense:"","hide-details":""},model:{value:n.search,callback:function(e){n.search=e},expression:"search"}})],1)],1)],1)]},proxy:!0},{key:"item.no_surat",fn:function(e){var a=e.item;return[t("div",[t("v-btn",{attrs:{color:"bg-gradient-info",small:"",outlined:""}},[n._v(n._s(a.no_surat))])],1)]}},{key:"item.opsi",fn:function(e){e.item;return[t("div",[t("v-btn",{attrs:{icon:"",color:"error"}},[t("v-icon",[n._v("mdi-delete")])],1)],1)]}}],null,!1,2156034824)})],1)],1):n._e()],1),n._v(" "),t("v-expand-transition",["add"==n.formSurat?t("v-card",[t("v-card-title",[t("h3",[t("v-icon",{staticClass:"mb-1"},[n._v("mdi-plus-circle-outline")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline font-weight-bold"},[n._v("Tambah"),t("small",{staticClass:"grey--text font-weight-thin"},[n._v("Surat")])])],1),n._v(" "),t("v-spacer"),n._v(" "),t("v-btn",{attrs:{fab:"",small:"",color:"bg-gradient-error",dark:""},on:{click:function(e){n.formSurat="view"}}},[t("v-icon",[n._v("mdi-close")])],1)],1),n._v(" "),t("v-card-text",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"8"}},[t("v-form",{ref:"formInmail",on:{submit:function(e){return e.preventDefault(),n.saveInmail.apply(null,arguments)}}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"No Surat",dense:"","hide-details":"",outlined:"","append-icon":"mdi-barcode-scan",disabled:""},model:{value:n.surat.no_surat,callback:function(e){n.$set(n.surat,"no_surat",e)},expression:"surat.no_surat"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"Tanggal Surat",dense:"","hide-details":"",outlined:"",type:"date"},model:{value:n.surat.tanggal_surat,callback:function(e){n.$set(n.surat,"tanggal_surat",e)},expression:"surat.tanggal_surat"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"5"}},[t("v-select",{attrs:{label:"Jenis Surat",items:n.jenises,"item-text":"label","item-value":"kode",dense:"","hide-details":"",outlined:"",type:"date"},on:{change:n.onJenisChanged},model:{value:n.surat.jenis,callback:function(e){n.$set(n.surat,"jenis",e)},expression:"surat.jenis"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"5"}},[t("v-select",{attrs:{label:"Tipe Surat",items:n.types,"item-text":"tipe","item-value":"tipe",dense:"","hide-details":"",outlined:"",type:"date",disabled:n.types.length<1},model:{value:n.surat.tipe,callback:function(e){n.$set(n.surat,"tipe",e)},expression:"surat.tipe"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-select",{attrs:{label:"Sifat",dense:"","hide-details":"",outlined:"","append-icon":"mdi-email-newsletter",items:["Kilat","Segera","Penting","Biasa","Rahasia"]},model:{value:n.surat.sifat,callback:function(e){n.$set(n.surat,"sifat",e)},expression:"surat.sifat"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-select",{attrs:{label:"Lingkup",dense:"","hide-details":"",outlined:"","append-icon":"mdi-email-newsletter",items:["Internal","Eksternal"]},model:{value:n.surat.lingkup,callback:function(e){n.$set(n.surat,"lingkup",e)},expression:"surat.lingkup"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-text-field",{attrs:{label:"Pengirim",dense:"","hide-details":"",outlined:"","append-icon":"mdi-account-tie"},model:{value:n.surat.pengirim,callback:function(e){n.$set(n.surat,"pengirim",e)},expression:"surat.pengirim"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-text-field",{attrs:{label:"Penerima",dense:"","hide-details":"",outlined:"","append-icon":"mdi-account-tie"},model:{value:n.surat.penerima,callback:function(e){n.$set(n.surat,"penerima",e)},expression:"surat.penerima"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"6"}},[t("v-text-field",{attrs:{label:"Alamat",dense:"","hide-details":"",outlined:"","append-icon":"mdi-map-marker"},model:{value:n.surat.alamat,callback:function(e){n.$set(n.surat,"alamat",e)},expression:"surat.alamat"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-btn",{attrs:{color:"bg-gradient-success",type:"submit"}},[t("v-icon",[n._v("mdi-content-save-check-outline")]),n._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSimpan\n\t\t\t\t\t\t\t\t\t\t\t\t\t")],1)],1)],1)],1)],1)],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-container",{attrs:{"fill-height":"","align-start":"","justify-center":""}},[t("v-card",[t("v-card-text",[t("v-btn",{attrs:{text:"",color:"primary",small:"",block:""},on:{click:function(e){return n.$refs.fileInmail.click()}}},[n._v("Unggah File Surat")]),n._v(" "),t("input",{ref:"fileInmail",staticClass:"d-none",attrs:{type:"file",accept:".pdf,.jpg,.jpeg,.png,.JPG, .JPEG,.PNG"},on:{change:n.onFilePicked}}),n._v(" "),t("embed",{attrs:{src:n.fileUrl+"#toolbar=0",frameborder:"0",width:"100%",height:"400px"}})],1)],1)],1)],1)],1)],1)],1):n._e()],1),n._v(" "),t("v-expand-transition",["import"==n.formSurat?t("v-card",[t("v-card-title",[t("h3",[t("v-icon",{staticClass:"mb-1"},[n._v("mdi-plus-circle-multiple-outline")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline font-weight-bold"},[n._v("Impor"),t("small",{staticClass:"grey--text font-weight-thin"},[n._v("Surat")])])],1),n._v(" "),t("v-spacer"),n._v(" "),t("v-btn",{attrs:{fab:"",small:"",color:"bg-gradient-error",dark:""},on:{click:function(e){n.formSurat="view"}}},[t("v-icon",[n._v("mdi-close")])],1)],1)],1):n._e()],1)],1)],1)],1)],1)}),[],!1,null,"2a58a331",null).exports}}]);
//# sourceMappingURL=917.js.map