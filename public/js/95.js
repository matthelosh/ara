"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95],{1828:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(7897),i=t.n(a),s=t(1519),l=t.n(s)()(i());l.push([n.id,".avatar-caption[data-v-84e1d4bc]{background:#fff;bottom:0;position:absolute;width:100%}","",{version:3,sources:["webpack://./resources/js/Layouts/Components/Back/SideMenu.vue"],names:[],mappings:"AAwQA,iCAGA,eAAA,CADA,QAAA,CADA,iBAAA,CAGA,UACA",sourcesContent:["<template>\n    <div>\n        <v-row>\n            <v-col class=\"d-flex justify-center\">\n                <v-avatar size=\"100\" class=\"elevation-4\">\n                    <img src=\"/images/2.png\" alt=\"Avatar\">\n                </v-avatar>\n            </v-col>\n        </v-row>\n        <v-list shaped dense class=\"mt-5\">\n            <span v-for=\"(menu,i) in sidemenus\" :key=\"i\">\n                <span v-if=\"menu.children.length > 0\">\n                    <v-list-group\n                        no-action\n                        :value=\"menu.active\"\n                    >\n                        <template v-slot:activator>\n                            <v-list-item-icon>\n                                <v-icon>{{menu.icon}}</v-icon>\n                            </v-list-item-icon>\n                            <v-list-item-content >\n                                <v-list-item-title>{{menu.label}}</v-list-item-title>\n                            </v-list-item-content>\n                        </template>\n                        <v-list-item\n                            as=\"Link\"\n                            v-for=\"(sub,s) in menu.children\"\n                            :value=\"true\"\n                            :key=\"s\"\n                            :href=\"sub.url\"\n                            active-class=\"bg-gradient-primary\"\n                            :class=\"sub.active ? 'bg-gradient-primary white--text' : ''\"\n                        >\n                            <v-list-item-content>\n                                <v-list-item-title>{{sub.label}}</v-list-item-title>\n                            </v-list-item-content>\n                            <v-list-item-icon>\n                                <v-icon :color=\"sub.active ? 'white': ''\">{{sub.icon}}</v-icon>\n                            </v-list-item-icon>\n                        </v-list-item>\n                    </v-list-group>\n                </span>\n                <span v-else>\n                    <v-list-item \n                        as=\"Link\"  \n                        :href=\"menu.url\" \n                        :value=\"menu.active\" \n                        class=\"my-2\" \n                        active-class=\"bg-gradient-primary\" \n                        :class=\"menu.active ? 'bg-gradient-primary white--text' : ''\"\n                        >\n                        <v-list-item-icon>\n                            <v-icon :class=\"menu.active ? 'white--text': ''\">{{menu.icon}}</v-icon>\n                        </v-list-item-icon>\n                        <v-list-item-content>\n                            <v-list-item-title>{{menu.label}}</v-list-item-title>\n                        </v-list-item-content>\n                    </v-list-item>\n                </span>\n            </span>\n            \n        </v-list>\n        \x3c!-- {{sidemenus}} --\x3e\n    </div>\n</template>\n<script>\nexport default {\n    name: 'SideMenu',\n    data: () => ({\n        menus: [\n            {\n                url: '/admin',\n                icon: 'mdi-monitor-dashboard',\n                label: 'Dashboard',\n                roles: ['admin','guru','mapel','siswa'],\n                active: false,\n                children: []\n            },\n            {\n                url: '#',\n                icon: 'mdi-database',\n                label: 'Data Master',\n                roles: ['admin'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/sekolah',\n                        icon: 'mdi-office-building',\n                        label: 'Data Sekolah',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/guru',\n                        icon: 'mdi-account-multiple',\n                        label: 'Data Guru',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/siswa',\n                        icon: 'mdi-human-queue',\n                        label: 'Data Siswa',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                    {\n                        url: '/admin/rombel',\n                        icon: 'mdi-google-classroom',\n                        label: 'Data Rombel',\n                        roles: ['admin'],\n                        active: false,\n                    },\n                ]\n            },\n            {\n                url: '#',\n                icon: 'mdi-post-outline',\n                label: 'Postingan',\n                roles: ['admin','guru'],\n                active: false,\n                children: [\n                    {\n                        url: '/admin/post',\n                        icon: 'mdi-typewriter',\n                        label: 'Artikel',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/agenda',\n                        icon: 'mdi-calendar',\n                        label: 'Agenda',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/galeri',\n                        icon: 'mdi-view-gallery-outline',\n                        label: 'Galeri',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '/admin/video',\n                        icon: 'mdi-movie-open-plus-outline',\n                        label: 'Video',\n                        roles: ['admin','guru'],\n                        active: false,\n                        children: []\n                    },\n                ]\n            },\n            {\n                url: '#',\n                icon: 'mdi-human-male-board',\n                label: 'Administrasi',\n                roles: ['admin','wali','guru'],\n                active: false,\n                children: [\n                    {\n                        url: '#',\n                        icon: 'mdi-bookshelf',\n                        label: 'Buku Induk',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '#',\n                        icon: 'mdi-notebook-edit',\n                        label: 'Jurnal',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    {\n                        url: '#',\n                        icon: 'mdi-chart-line',\n                        label: 'Rapor',\n                        roles: ['admin','wali'],\n                        active: false,\n                        children: []\n                    },\n                    \n                ]\n            },\n            {\n                url: '/admin/surat',\n                icon: 'mdi-email-variant',\n                label: 'Surat',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            \n            {\n                url: '/admin/pengaturan',\n                icon: 'mdi-application-settings',\n                label: 'Pengaturan',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            {\n                url: '/admin/alat',\n                icon: 'mdi-toolbox',\n                label: 'Peralatan',\n                roles: ['admin'],\n                active: false,\n                children: []\n            },\n            \n        ]\n    }),\n    methods: {\n    },\n    computed: {\n        user() {\n            return this.$page.props.user\n        },\n        sidemenus() {\n            let currentPath = window.location.pathname\n            let menus = []\n            this.menus.forEach(menu => {\n                if (menu.roles.includes(this.$page.props.user.level)) {\n                if(menu.children.length < 1 ) {\n                    if(menu.url == currentPath) {\n                        menu.active = true\n                        menus.push(menu)\n                    } else {\n                        menu.active = false\n                        menus.push(menu)\n                    }\n                } else {\n                    let children = []\n                    menu.children.forEach(child => {\n                        if(child.url == currentPath) {\n                            child.active = true\n                            children.push(child)\n                            menu.active = true\n                            // menus.push(menu)\n                        } else {\n                            child.active = false\n                            children.push(child)\n                            menu.active = false\n                            // menus.push(menu)\n                        }\n                    })\n                    menu.active = menu.children.some(child => child.active === true)\n                    menus.push(menu)\n                }\n                }\n            })\n            return menus\n            // return currentPath\n        }\n    }\n}\n<\/script>\n<style css scoped>\n    .avatar-caption {\n        position: absolute;\n        bottom: 0;\n        background: #fff;\n        width: 100%;\n    }\n    \n</style>"],sourceRoot:""}]);const o=l},8031:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(7897),i=t.n(a),s=t(1519),l=t.n(s)()(i());l.push([n.id,".circled{border-radius:50%}.bg-gradient-error{background:linear-gradient(90deg,#ff3232,#c832ad);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-warning{background:linear-gradient(90deg,#ffd032,#ff96cb);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-info{background:linear-gradient(90deg,#3bc6fa,#75cdad);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-success{background:linear-gradient(90deg,#31c944,#75cdcb);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-primary{background:linear-gradient(90deg,#ba31c9,#9475cd);box-shadow:0 5px 10px rgba(0,0,0,.5)}.bg-gradient-primary-light{background:linear-gradient(90deg,#faf0ff,#ffe6fa)}.bg-gradient-secondary{background:linear-gradient(90deg,#9475cd,#ba31c9);box-shadow:0 5px 10px rgba(0,0,0,.5)}","",{version:3,sources:["webpack://./resources/js/Layouts/Dashboard.vue"],names:[],mappings:"AA0JA,SACI,iBAzJJ,CA2JA,mBACI,iDAAA,CACA,oCAxJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CA0JA,kBACI,iDAAA,CACA,oCAvJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CA0JA,qBACI,iDAAA,CACA,oCAvJJ,CAyJA,2BACI,iDAtJJ,CA0JA,uBACI,iDAAA,CACA,oCAvJJ",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.circled {\n    border-radius: 50%;\n}\n.bg-gradient-error {\n    background: linear-gradient(to right, rgb(255, 50, 50), rgb(200, 50, 173));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n.bg-gradient-warning {\n    background: linear-gradient(to right, rgb(255, 208, 50), rgb(255, 150, 203));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-info {\n    background: linear-gradient(to right, rgb(59, 198, 250), rgb(117, 205, 173));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-success {\n    background: linear-gradient(to right, rgb(49, 201, 68), rgb(117, 205, 203));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-primary {\n    background: linear-gradient(to right, rgb(186, 49, 201), rgb(148, 117, 205));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n.bg-gradient-primary-light {\n    background: linear-gradient(to right, rgb(250, 240, 255), rgb(255, 230, 250));\n    // box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n\n.bg-gradient-secondary {\n    background: linear-gradient(to right, rgb(148, 117, 205), rgb(186, 49, 201));\n    box-shadow: 0 5px 10px rgba(0,0,0,0.5);\n}\n"],sourceRoot:""}]);const o=l},7942:(n,e,t)=>{t.d(e,{Z:()=>m});const a={name:"SideMenu",data:function(){return{menus:[{url:"/admin",icon:"mdi-monitor-dashboard",label:"Dashboard",roles:["admin","guru","mapel","siswa"],active:!1,children:[]},{url:"#",icon:"mdi-database",label:"Data Master",roles:["admin"],active:!1,children:[{url:"/admin/sekolah",icon:"mdi-office-building",label:"Data Sekolah",roles:["admin"],active:!1},{url:"/admin/guru",icon:"mdi-account-multiple",label:"Data Guru",roles:["admin"],active:!1},{url:"/admin/siswa",icon:"mdi-human-queue",label:"Data Siswa",roles:["admin"],active:!1},{url:"/admin/rombel",icon:"mdi-google-classroom",label:"Data Rombel",roles:["admin"],active:!1}]},{url:"#",icon:"mdi-post-outline",label:"Postingan",roles:["admin","guru"],active:!1,children:[{url:"/admin/post",icon:"mdi-typewriter",label:"Artikel",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/agenda",icon:"mdi-calendar",label:"Agenda",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/galeri",icon:"mdi-view-gallery-outline",label:"Galeri",roles:["admin","guru"],active:!1,children:[]},{url:"/admin/video",icon:"mdi-movie-open-plus-outline",label:"Video",roles:["admin","guru"],active:!1,children:[]}]},{url:"#",icon:"mdi-human-male-board",label:"Administrasi",roles:["admin","wali","guru"],active:!1,children:[{url:"#",icon:"mdi-bookshelf",label:"Buku Induk",roles:["admin","wali"],active:!1,children:[]},{url:"#",icon:"mdi-notebook-edit",label:"Jurnal",roles:["admin","wali"],active:!1,children:[]},{url:"#",icon:"mdi-chart-line",label:"Rapor",roles:["admin","wali"],active:!1,children:[]}]},{url:"/admin/surat",icon:"mdi-email-variant",label:"Surat",roles:["admin"],active:!1,children:[]},{url:"/admin/pengaturan",icon:"mdi-application-settings",label:"Pengaturan",roles:["admin"],active:!1,children:[]},{url:"/admin/alat",icon:"mdi-toolbox",label:"Peralatan",roles:["admin"],active:!1,children:[]}]}},methods:{},computed:{user:function(){return this.$page.props.user},sidemenus:function(){var n=this,e=window.location.pathname,t=[];return this.menus.forEach((function(a){if(a.roles.includes(n.$page.props.user.level))if(a.children.length<1)a.url==e?(a.active=!0,t.push(a)):(a.active=!1,t.push(a));else{var i=[];a.children.forEach((function(n){n.url==e?(n.active=!0,i.push(n),a.active=!0):(n.active=!1,i.push(n),a.active=!1)})),a.active=a.children.some((function(n){return!0===n.active})),t.push(a)}})),t}}};var i=t(3379),s=t.n(i),l=t(1828),o={insert:"head",singleton:!1};s()(l.Z,o);l.Z.locals;var r=t(1900);const c=(0,r.Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-row",[t("v-col",{staticClass:"d-flex justify-center"},[t("v-avatar",{staticClass:"elevation-4",attrs:{size:"100"}},[t("img",{attrs:{src:"/images/2.png",alt:"Avatar"}})])],1)],1),n._v(" "),t("v-list",{staticClass:"mt-5",attrs:{shaped:"",dense:""}},n._l(n.sidemenus,(function(e,a){return t("span",{key:a},[e.children.length>0?t("span",[t("v-list-group",{attrs:{"no-action":"",value:e.active},scopedSlots:n._u([{key:"activator",fn:function(){return[t("v-list-item-icon",[t("v-icon",[n._v(n._s(e.icon))])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v(n._s(e.label))])],1)]},proxy:!0}],null,!0)},[n._v(" "),n._l(e.children,(function(e,a){return t("v-list-item",{key:a,class:e.active?"bg-gradient-primary white--text":"",attrs:{as:"Link",value:!0,href:e.url,"active-class":"bg-gradient-primary"}},[t("v-list-item-content",[t("v-list-item-title",[n._v(n._s(e.label))])],1),n._v(" "),t("v-list-item-icon",[t("v-icon",{attrs:{color:e.active?"white":""}},[n._v(n._s(e.icon))])],1)],1)}))],2)],1):t("span",[t("v-list-item",{staticClass:"my-2",class:e.active?"bg-gradient-primary white--text":"",attrs:{as:"Link",href:e.url,value:e.active,"active-class":"bg-gradient-primary"}},[t("v-list-item-icon",[t("v-icon",{class:e.active?"white--text":""},[n._v(n._s(e.icon))])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v(n._s(e.label))])],1)],1)],1)])})),0)],1)}),[],!1,null,"84e1d4bc",null).exports,d={name:"Dashboard",props:{page_title:String},components:{SideMenu:c},data:function(){return{sideMenu:!0}},methods:{logout:function(){axios({method:"post",url:"/logout"}).then((function(n){window.location.href="/"}))}},computed:{pageTitle:function(){for(var n=this.$page.props.page_title.split(" "),e="",t=0;t<n.length;t++)e+=n[t][0].toUpperCase()+n[t].slice(1)+" ";return e}},created:function(){document.querySelector("title").innerHTML=this.pageTitle}};var u=t(8031),v={insert:"head",singleton:!1};s()(u.Z,v);u.Z.locals;const m=(0,r.Z)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",{staticStyle:{background:"#f5f5f5"}},[t("v-navigation-drawer",{attrs:{app:"",floating:"",color:"#cfcfcf"},model:{value:n.sideMenu,callback:function(e){n.sideMenu=e},expression:"sideMenu"}},[t("v-list-item",[t("span",[t("v-img",{attrs:{src:"/images/logo1.svg",width:"38"}})],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[t("h2",{staticClass:"ml-2 purple--text text-uppercase"},[n._v("Dashboard")])])],1)],1),n._v(" "),t("side-menu",{staticClass:"my-3"})],1),n._v(" "),t("v-app-bar",{attrs:{app:"",absolute:"",flat:""}},[t("v-app-bar-nav-icon",{on:{click:function(e){n.sideMenu=!n.sideMenu}}}),n._v(" "),t("v-toolbar-title",[n._v(n._s(n.pageTitle))]),n._v(" "),t("v-spacer"),n._v(" "),t("v-menu",{attrs:{"offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[t("v-avatar",n._g(n._b({},"v-avatar",i,!1),a),[t("v-icon",[n._v("mdi-bell")])],1)]}}])},[n._v(" "),t("v-list",{attrs:{dense:""}},[t("v-divider",{staticClass:"my-3"}),n._v(" "),t("v-list-item-group",[t("v-list-item",[t("v-list-item-content",[n._v("TO DO")])],1)],1)],1)],1),n._v(" "),t("v-menu",{attrs:{"offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[t("v-avatar",n._g(n._b({},"v-avatar",i,!1),a),[t("img",{attrs:{src:"/images/1.png",alt:""}})])]}}])},[n._v(" "),t("v-list",{attrs:{dense:""}},[t("v-list-item",[t("v-list-item-avatar",[t("v-avatar",[t("img",{attrs:{src:"/images/1.png",alt:""}})])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v("\n                            "+n._s(n.$page.props.user.userable.name)+"\n                        ")]),n._v(" "),t("v-list-item-subtitle",[n._v("\n                            "+n._s(n.$page.props.user.level)+"\n                        ")])],1)],1),n._v(" "),t("v-divider",{staticClass:"my-3"}),n._v(" "),t("v-list-item-group",[t("v-list-item",{on:{click:n.logout}},[t("v-list-item-icon",[t("v-icon",[n._v("mdi-exit-to-app")])],1),n._v(" "),t("v-list-item-content",[t("v-list-item-title",[n._v("Logout")])],1)],1)],1)],1)],1)],1),n._v(" "),t("v-main",[n._t("default")],2)],1)}),[],!1,null,null,null).exports},7095:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const a={name:"AdminSiswa",layout:t(7942).Z,data:function(){return{formSiswa:!1,siswa:{},loading:!1,search:"",siswas:[],selected:[],headers:[{text:"No",value:"no"},{text:"NIS/NISN",value:"nis_nisn"},{text:"Nama",value:"nama"},{text:"Jk",value:"jk"},{text:"Alamat",value:"alamat"},{text:"Email",value:"email"},{text:"Aktif",value:"is_active"},{text:"Opsi",value:"opsi"}],fotoSiswa:null,defaultFoto:"/images/1.png",disabled:0}},methods:{assignAccount:function(){var n=this;this.loading=!0,axios({method:"post",url:"/admin/user/assign-account-siswa",data:this.selected}).then((function(e){n.loading=!1,n.selected=[],n.disabled=0,n.getSiswas()}))},selectAllToggle:function(n){if(this.selected.length!=n.items.length-this.disabled){this.selected=[];var e=this;n.items.forEach((function(n){n.user&&e.selected.push(n)}))}else this.selected=[]},onFotoError:function(n){n.target.src="/images/1.png"},onFotoPicked:function(n){var e=n.target.files[0],t=URL.createObjectURL(e);this.defaultFoto=t,this.fotoSiswa=e},getSiswas:function(){var n=this;this.loading=!0,axios({method:"post",url:"/admin/siswa"}).then((function(e){var t=[];e.data.siswas.forEach((function(n,e){n.no=e+1,t.push(n)})),n.siswas=t,n.loading=!1})).catch((function(n){console.log(n)}))},saveSiswa:function(){var n=this;this.loading=!0;var e=new FormData;e.append("siswa",JSON.stringify(this.siswa)),this.fotoSiswa&&e.append("foto",this.fotoSiswa),axios({method:"post",url:"/admin/siswa/store",data:e}).then((function(e){n.getSiswas(),n.siswa={},n.formSiswa=!1})).catch((function(n){console.log(n)}))}},mounted:function(){this.getSiswas(),this.siswa.id&&(this.defaultFoto="/storage/uploads/img/siswa/"+this.siswa.nisn+".jpg")}};const i=(0,t(1900).Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-expand-transition",[n.formSiswa?n._e():t("v-card",[t("v-card-title",[t("h3",[t("v-icon",{staticClass:"mb-1"},[n._v("mdi-human-queue")]),n._v("\n\t\t\t\t\t\t\t\tData Siswa\n\t\t\t\t\t\t\t")],1),n._v(" "),t("v-spacer"),n._v(" "),t("v-btn",{staticClass:"mx-1",attrs:{small:"",color:"bg-gradient-error",dark:""},on:{click:n.assignAccount}},[t("v-icon",[n._v("mdi-account-multiple-check")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Buat Akun")])],1),n._v(" "),t("v-btn",{staticClass:"mx-1",attrs:{small:"",color:"bg-gradient-primary",dark:""},on:{click:function(e){n.formSiswa=!0}}},[t("v-icon",[n._v("mdi-account-plus-outline")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Tambah Siswa")])],1),n._v(" "),t("v-btn",{staticClass:"mx-1",attrs:{small:"",color:"bg-gradient-info",dark:""}},[t("v-icon",[n._v("mdi-file-excel")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Ekspor Siswa")])],1),n._v(" "),t("v-btn",{staticClass:"mx-1",attrs:{small:"",color:"bg-gradient-warning",dark:""}},[t("v-icon",[n._v("mdi-printer")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Cetak Siswa")])],1)],1),n._v(" "),t("v-card-text",[t("v-data-table",{attrs:{search:n.search,items:n.siswas,headers:n.headers,loading:n.loading,"show-select":"","item-key":"id"},on:{"toggle-select-all":n.selectAllToggle},scopedSlots:n._u([{key:"item.data-table-select",fn:function(n){var e=n.item,a=n.isSelected,i=n.select;return[t("v-simple-checkbox",{attrs:{value:a,readonly:!!e.user,disabled:!!e.user},on:{input:function(n){return i(n)}}})]}},{key:"top",fn:function(){return[t("v-container",[t("v-row",[t("v-col"),n._v(" "),t("v-col"),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"Cari","append-icon":"mdi-magnify",clearable:"",dense:"","hide-details":"",solo:"",outlined:""},model:{value:n.search,callback:function(e){n.search=e},expression:"search"}})],1)],1)],1)]},proxy:!0},{key:"item.nis_nisn",fn:function(e){var t=e.item;return[n._v("\n\t\t\t\t\t\t\t\t\t"+n._s(t.nis)+"/"+n._s(t.nisn)+"\n\t\t\t\t\t\t\t\t")]}},{key:"item.nama",fn:function(e){var a=e.item;return[t("v-btn",{attrs:{small:"",color:"bg-gradient-error",dark:""},on:{click:function(e){n.siswa=a,n.formSiswa=!0}}},[n._v("\n\t\t\t\t\t\t\t\t\t\t"+n._s(a.user?"@"+a.user.username:a.nama)+"\n\t\t\t\t\t\t\t\t\t")])]}},{key:"item.opsi",fn:function(e){e.item;return[t("v-btn",{attrs:{small:"",icon:"",color:"error"}},[t("v-icon",[n._v("mdi-delete")])],1)]}}],null,!1,810421895),model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}})],1)],1)],1),n._v(" "),t("v-expand-transition",[n.formSiswa?t("v-card",[t("v-card-title",[t("h3",[t("v-icon",{staticClass:"mb-1"},[n._v("mdi-account-plus-outline")]),n._v("\n\t\t\t\t\t\t\t\tForm Siswa\n\t\t\t\t\t\t\t")],1),n._v(" "),t("v-spacer"),n._v(" "),t("v-btn",{staticClass:"mx-3",attrs:{small:"",color:"bg-gradient-primary",dark:""}},[t("v-icon",[n._v("mdi-account-multiple-plus")]),n._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[n._v("Impor Siswa")])],1),n._v(" "),t("v-btn",{attrs:{fab:"",color:"error",small:""},on:{click:function(e){n.formSiswa=!1,n.siswa={}}}},[t("v-icon",[n._v("mdi-close")])],1)],1),n._v(" "),t("v-card-text",[t("v-form",{ref:"formSiswa",on:{submit:function(e){return e.preventDefault(),n.saveSiswa.apply(null,arguments)}}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-container",{attrs:{"fill-height":"","align-start":"","justify-center":""}},[t("input",{ref:"foto",staticClass:"d-none",attrs:{type:"file",accept:".png,.jpg,.jpeg,.JPG,.JPEG,.bmp"},on:{change:n.onFotoPicked}}),n._v(" "),t("v-avatar",{staticClass:"elevation-4",attrs:{rounded:"",size:"200"},on:{click:function(e){return n.$refs.foto.click()}}},[t("img",{attrs:{src:n.defaultFoto,alt:"Foto Siswa"},on:{error:n.onFotoError}})])],1)],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"9"}},[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"5"}},[t("v-text-field",{attrs:{label:"Nama Siswa","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.nama,callback:function(e){n.$set(n.siswa,"nama",e)},expression:"siswa.nama"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"NISN","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.nisn,callback:function(e){n.$set(n.siswa,"nisn",e)},expression:"siswa.nisn"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"NIS","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.nis,callback:function(e){n.$set(n.siswa,"nis",e)},expression:"siswa.nis"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"NIK","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.nik,callback:function(e){n.$set(n.siswa,"nik",e)},expression:"siswa.nik"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"No Akta","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.no_akta,callback:function(e){n.$set(n.siswa,"no_akta",e)},expression:"siswa.no_akta"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"No KIP (Jika Ada)","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.no_kip,callback:function(e){n.$set(n.siswa,"no_kip",e)},expression:"siswa.no_kip"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"No KK","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.no_kk,callback:function(e){n.$set(n.siswa,"no_kk",e)},expression:"siswa.no_kk"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-select",{attrs:{label:"Jenis Kelamin","hide-details":"",outlined:"",dense:"",items:[{text:"Laki-laki",value:"l"},{text:"Perempuan",value:"p"}]},model:{value:n.siswa.jk,callback:function(e){n.$set(n.siswa,"jk",e)},expression:"siswa.jk"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"Tempat Lahir","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.tempat_lahir,callback:function(e){n.$set(n.siswa,"tempat_lahir",e)},expression:"siswa.tempat_lahir"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"3"}},[t("v-text-field",{attrs:{label:"Tanggal Lahir",type:"date","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.tanggal_lahir,callback:function(e){n.$set(n.siswa,"tanggal_lahir",e)},expression:"siswa.tanggal_lahir"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-textarea",{attrs:{label:"Alamat",type:"date","hide-details":"",outlined:"",dense:"",rows:"1","auto-grow":""},model:{value:n.siswa.alamat,callback:function(e){n.$set(n.siswa,"alamat",e)},expression:"siswa.alamat"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"2"}},[t("v-text-field",{attrs:{label:"RT","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.rt,callback:function(e){n.$set(n.siswa,"rt",e)},expression:"siswa.rt"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"2"}},[t("v-text-field",{attrs:{label:"RW","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.rw,callback:function(e){n.$set(n.siswa,"rw",e)},expression:"siswa.rw"}})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-text-field",{attrs:{label:"Desa","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.desa,callback:function(e){n.$set(n.siswa,"desa",e)},expression:"siswa.desa"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"2"}},[t("v-text-field",{attrs:{label:"Kode Pos","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.kode_pos,callback:function(e){n.$set(n.siswa,"kode_pos",e)},expression:"siswa.kode_pos"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"3"}},[t("v-text-field",{attrs:{label:"Kecamatan","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.kecamatan,callback:function(e){n.$set(n.siswa,"kecamatan",e)},expression:"siswa.kecamatan"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"4"}},[t("v-text-field",{attrs:{label:"Kabupaten","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.kabupaten,callback:function(e){n.$set(n.siswa,"kabupaten",e)},expression:"siswa.kabupaten"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"3"}},[t("v-text-field",{attrs:{label:"Provinsi","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.provinsi,callback:function(e){n.$set(n.siswa,"provinsi",e)},expression:"siswa.provinsi"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"3"}},[t("v-text-field",{attrs:{label:"No. HP","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.hp,callback:function(e){n.$set(n.siswa,"hp",e)},expression:"siswa.hp"}})],1),n._v(" "),t("v-col",{attrs:{cols:"6",sm:"6"}},[t("v-text-field",{attrs:{label:"Email","hide-details":"",outlined:"",dense:""},model:{value:n.siswa.email,callback:function(e){n.$set(n.siswa,"email",e)},expression:"siswa.email"}})],1),n._v(" "),t("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[t("v-btn",{attrs:{color:"bg-gradient-primary",type:"submit",dark:""}},[n._v("Simpan")])],1)],1)],1)],1)],1)],1)],1)],1):n._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=95.js.map