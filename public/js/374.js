"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[374,557,716,760],{1443:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,".footer-kontak a[data-v-27590848]{color:teal}.footer-kontak .sosmed a[data-v-27590848]{text-decoration:none}.links-box[data-v-27590848]{align-items:center;display:flex;flex-direction:column}.links-box ul[data-v-27590848]{list-style:none;padding:0}.links-box ul li[data-v-27590848]{margin:0;padding:0}.footer-copy[data-v-27590848]{background:#222;box-shadow:0 0 10px rgba(0,0,0,.5)}.footer-copy p[data-v-27590848]{color:#acacac;margin:0;padding:0}","",{version:3,sources:["webpack://./resources/js/Themes/default/Layout/Components/Footer.vue"],names:[],mappings:"AA+GA,kCACA,UACA,CAEA,0CACA,oBAEA,CACA,4BAGA,kBAAA,CAFA,YAAA,CACA,qBAEA,CAEA,+BACA,eAAA,CACA,SAEA,CAEA,kCACA,QAAA,CACA,SACA,CAEA,8BACA,eAAA,CACA,kCACA,CAEA,gCAGA,aAAA,CADA,QAAA,CADA,SAIA",sourcesContent:['<template>\n    <v-container>\n        <v-row class="footer-kontak my-6">\n            <v-col cols="12" sm="4">\n                <div class="address-box text-center">\n                    <img src="/images/logo-sd.svg" alt="Logo SD" width="100">\n                    <p class="white--text mt-5">\n                        {{sekolah.alamat_jalan}}, {{sekolah.desa_kelurahan}} <br>\n                        Kec. {{sekolah.kecamatan}}, Kode Pos {{sekolah.kode_pos}} <br>\n                        {{sekolah.kabupaten_kota}}, {{sekolah.provinsi}}, Indonesia <br>\n                        <a href="mailto:info@sdn1-bedalisodo.sch.id">info@sdn1-bedalisodo.sch.id</a>\n                    </p>\n                    <p class="sosmed">\n                        <a href="#"><v-icon>mdi-facebook</v-icon></a>\n                        <a href="#"><v-icon>mdi-twitter</v-icon></a>\n                        <a href="#"><v-icon>mdi-youtube</v-icon></a>\n                        <a href="#"><v-icon>mdi-instagram</v-icon></a>\n                        <a href="#"><v-icon>mdi-whatsapp</v-icon></a>\n                    </p>\n                </div>\n            </v-col>\n            <v-col cols="12" sm="4">\n                <div class="links-box white--text">\n                    <h3>Pranala Luar:</h3>\n                    <ul>\n                        <li>\n                            <a href="https://kemdikbud.go.id" target="_blank">Kemdikbud</a>\n                        </li>\n                        <li>\n                            <a href="https://kemenag.go.id" target="_blank">Kemenag</a>\n                        </li>\n                        <li>\n                            <a href="http://rapor.sdn1-bedalisodo.sch.id" target="_blank">E-Rapor</a>\n                        </li>\n                    </ul>\n                </div>\n            </v-col>\n            <v-col cols="12" sm="4">\n                <div class="kontak-box">\n                    <v-card flat outlined color="transparent" dark>\n                        <v-card-text>\n                            <v-form @submit.prevent="submit">\n                                <v-row>\n                                    <v-col cols="12">\n                                        <v-text-field\n                                            label="Masukkan Nama"\n                                            outlined\n                                            hide-details\n                                            dense\n                                            color="white"\n                                        />\n                                    </v-col>\n                                    <v-col cols="12">\n                                        <v-text-field\n                                            label="Masukkan Email"\n                                            outlined\n                                            hide-details\n                                            dense\n                                        />\n                                    </v-col>\n                                    <v-col cols="12">\n                                        <v-textarea\n                                            dense\n                                            label="Berikan Masukan Anda"\n                                            outlined\n                                            hide-details\n                                        />\n                                    </v-col>\n                                </v-row>\n                                <v-row>\n                                    <v-col>\n                                        <v-btn block type="submit" outlined dark color="white">Kirim</v-btn>\n                                    </v-col>\n                                </v-row>\n                            </v-form>\n                        </v-card-text>\n                    </v-card>\n                </div>\n            </v-col>\n        </v-row>\n        <v-row class="footer-copy" fluid>\n            <v-col>\n                <p>\n                    &copy; {{year}} - {{sekolah.nama}}\n                </p>\n            </v-col>\n            <v-col></v-col>\n            <v-col class="text-right">Built with <v-icon small color="error">mdi-heart</v-icon> by <a href="mailto:matthelosh@gmail.com">Mat Soleh</a></v-col>\n        </v-row>\n    </v-container>\n</template>\n\n<script>\nexport default {\n    name: \'Footer\',\n    data: () => ({\n\n    }),\n    computed: {\n        year() {\n            let date = new Date()\n            return date.getFullYear()\n        },\n        sekolah() {\n            return this.$page.props.sekolah\n        }\n    }\n}\n<\/script>\n\n<style scoped>\n    .footer-kontak a {\n        color: teal;\n    }\n\n    .footer-kontak .sosmed a {\n        text-decoration: none;\n        \n    }\n    .links-box {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .links-box ul{\n        list-style: none;\n        padding: 0;\n        \n    }\n\n    .links-box ul li {\n        margin: 0;\n        padding: 0;\n    }\n\n    .footer-copy {\n        background: #222;\n         box-shadow: 0 0 10px rgba(0,0,0,0.5);\n    }\n\n    .footer-copy p {\n        padding: 0;\n        margin: 0;\n        color: #acacac;\n       \n    }\n</style>'],sourceRoot:""}]);const s=i},6828:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,"html[data-v-2b04a6c6]{scroll-behavior:smooth}.logo-title[data-v-2b04a6c6]{align-items:center;background:url(/images/bg_logo.png);-webkit-background-clip:text;background-clip:text;background-size:contain;display:flex;flex-direction:column;padding-top:15px}.logo-title h1[data-v-2b04a6c6]{font-size:1.3em;font-style:italic;font-weight:900;letter-spacing:.3rem;line-height:50%;margin-bottom:-5px;padding:0}.logo-title small[data-v-2b04a6c6]{font-size:.8rem;letter-spacing:.1rem;margin:0;padding:0}.address[data-v-2b04a6c6]{display:flex;flex-direction:column;padding:5px}.address p[data-v-2b04a6c6]{color:#fff;font-size:.8rem;line-height:1.1em;margin:0;padding:0}.address a[data-v-2b04a6c6]{color:teal!important;text-decoration:none}#app>div>header[data-v-2b04a6c6]{transition:all .35s linear}#app>div>header.scrolled[data-v-2b04a6c6],header.v-app-bar--is-scrolled[data-v-2b04a6c6]{background:rgba(17,25,25,.98)!important;border-bottom:1px solid #fff!important;transition:all .2s linear}#btn-menu[data-v-2b04a6c6]{align-content:center;display:flex;flex-direction:column;height:50px;justify-content:center;position:fixed;right:20px;top:5px;width:50px;z-index:10}#btn-menu[data-v-2b04a6c6] :hover{cursor:pointer}#btn-menu span[data-v-2b04a6c6]{background:#909090;height:2px;margin-bottom:3px;margin-top:5px;transform-style:preserve-3d;transition:all .35s linear;width:100%}#btn-menu span[data-v-2b04a6c6]:nth-child(2){width:80%}#btn-menu.show span[data-v-2b04a6c6]:first-child{opacity:0;transform:translateY(5px);transition:all .1s ease}#btn-menu.show span[data-v-2b04a6c6]:nth-child(2){background:red;height:3px;transform:rotate(45deg) translateX(25%);transition:all .35s linear;width:60%}#btn-menu.show span[data-v-2b04a6c6]:nth-child(3){background:red;height:3px;transform:rotate(-45deg) translateX(25%);transition:all .35s linear;width:60%}#menu-container[data-v-2b04a6c6]{background:#3e3e3e;height:100%;opacity:0;position:fixed;width:100%;z-index:2}#menu-container ul#main-menu[data-v-2b04a6c6]{list-style:none}#menu-container ul#main-menu li[data-v-2b04a6c6]{background:linear-gradient(90deg,transparent 50%,lime 0);background-position:0 100%;background-size:200% 1%;margin:10px 0;transition:all .2s linear}#menu-container ul#main-menu li[data-v-2b04a6c6] :hover{background:linear-gradient(90deg,transparent 50%,lime 0);background-position:100% 100%!important;background-size:200% 1%;transition:all .2s linear}#menu-container ul#main-menu li a[data-v-2b04a6c6]{color:#cfcfcf;display:block;font-size:2rem;text-decoration:none}#menu-container.shown[data-v-2b04a6c6]{opacity:1;transform:translateX(0);transition:all .35s linear}@media screen and (max-width:414px){.address[data-v-2b04a6c6]{display:none}}","",{version:3,sources:["webpack://./resources/js/Themes/default/Layout/Components/Navbar.vue"],names:[],mappings:"AA6GI,sBACI,sBA5GR,CA6GI,6BAOI,kBAAA,CANA,mCAAA,CAEA,4BAAA,CAAA,oBAAA,CADA,uBAAA,CAGA,YAAA,CACA,qBAAA,CAFA,gBAvGR,CA2GQ,gCAMI,eAAA,CADA,iBAAA,CAJA,eAAA,CAMA,oBAAA,CALA,eAAA,CACA,kBAAA,CACA,SAtGZ,CA0GQ,mCACI,eAAA,CACA,oBAAA,CACA,QAAA,CACA,SAxGZ,CAyGI,0BACI,YAAA,CACA,qBAAA,CACA,WAtGR,CAuGQ,4BAKI,UAAA,CADA,eAAA,CADA,iBAAA,CADA,QAAA,CADA,SAjGZ,CAsGQ,4BACI,oBAAA,CACA,oBApGZ,CAqGI,iCACI,0BAlGR,CAmGI,yFAGI,uCAAA,CADA,sCAAA,CAEA,yBAhGR,CAiGI,2BAKI,oBAAA,CAFA,YAAA,CACA,qBAAA,CAFA,WAAA,CAIA,sBAAA,CACA,cAAA,CAEA,UAAA,CADA,OAAA,CAPA,UAAA,CASA,UA9FR,CA+FQ,kCACI,cA7FZ,CA8FQ,gCAGI,kBAAA,CAFA,UAAA,CAIA,iBAAA,CADA,cAAA,CAEA,2BAAA,CACA,0BAAA,CALA,UAvFZ,CA6FQ,6CACI,SA3FZ,CA8FQ,iDACI,SAAA,CAEA,yBAAA,CADA,uBA1FZ,CA4FQ,kDAII,cAAA,CADA,UAAA,CAFA,uCAAA,CAIA,0BAAA,CAHA,SAvFZ,CA2FQ,kDAII,cAAA,CADA,UAAA,CAFA,wCAAA,CAIA,0BAAA,CAHA,SAtFZ,CA0FI,iCAKI,kBAAA,CAFA,WAAA,CAGA,SAAA,CAFA,cAAA,CAFA,UAAA,CADA,SAlFR,CAwFQ,8CACI,eAtFZ,CAuFY,iDACI,wDAAA,CAEA,0BAAA,CADA,uBAAA,CAQA,aAAA,CANA,yBApFhB,CAqFgB,wDACI,wDAAA,CAEA,uCAAA,CADA,uBAAA,CAEA,yBAnFpB,CAqFgB,mDAGI,aAAA,CAFA,aAAA,CAGA,cAAA,CAFA,oBAjFpB,CAqFI,uCAGI,SAAA,CADA,uBAAA,CADA,0BAhFR,CAmFA,oCACQ,0BACI,YAhFV,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    html \n        scroll-behavior: smooth\n    .logo-title\n        background: url('/images/bg_logo.png')\n        background-size: contain\n        background-clip: text\n        padding-top: 15px\n        display: flex\n        flex-direction: column\n        align-items: center\n        h1\n            font-weight: 900\n            line-height: 50%\n            margin-bottom: -5px\n            padding: 0\n            font-style: italic\n            font-size: 1.3em\n            letter-spacing: .3rem\n        small\n            font-size: .8rem\n            letter-spacing: .1rem\n            margin: 0\n            padding: 0\n    .address\n        display: flex\n        flex-direction: column\n        padding: 5px\n        p\n            padding: 0\n            margin: 0  \n            line-height: 1.1em\n            font-size: .8rem\n            color: white   \n        a\n            color: teal!important\n            text-decoration: none \n    #app > div > header\n        transition: all .35s linear\n    #app > div > header.scrolled,\n    header.v-app-bar--is-scrolled\n        border-bottom: 1px solid white!important\n        background: #111919fa!important\n        transition: all .2s linear\n    #btn-menu\n        width: 50px\n        height: 50px\n        display: flex\n        flex-direction: column\n        align-content: center\n        justify-content: center\n        position: fixed\n        top: 5px\n        right: 20px\n        z-index: 10\n        :hover\n            cursor: pointer\n        span\n            height: 2px\n            width: 100%\n            background: #909090\n            margin-top: 5px \n            margin-bottom: 3px \n            transform-style: preserve-3d\n            transition: all .35s linear\n        span:nth-child(2)\n            width: 80%\n    #btn-menu.show\n        // border: 1px solid red\n        span:nth-child(1)\n            opacity: 0\n            transition: all .1s ease\n            transform: translateY(5px)\n        span:nth-child(2)\n            transform: rotateZ(45deg) translateX(25%)\n            width: 60%\n            height: 3px\n            background: red\n            transition: all .35s linear\n        span:nth-child(3)\n            transform: rotateZ(-45deg) translateX(25%)\n            width: 60%\n            height: 3px\n            background: red\n            transition: all .35s linear\n    #menu-container\n        z-index: 2\n        width: 100%\n        height: 100%\n        position: fixed\n        background: #3e3e3e\n        opacity: 0\n        ul#main-menu\n            list-style: none\n            li\n                background: linear-gradient(to right, transparent 50%, lime 50%)\n                background-size: 200% 1%\n                background-position: left bottom\n                transition: all .2s linear\n                :hover\n                    background: linear-gradient(to right, transparent 50%, lime 50%)\n                    background-size: 200% 1%\n                    background-position: right bottom!important\n                    transition: all .2s linear\n                margin: 10px 0\n                a\n                    display: block\n                    text-decoration: none\n                    color: #cfcfcf\n                    font-size: 2rem\n                \n    #menu-container.shown\n        transition: all .35s linear\n        transform: translateX(0)\n        opacity: 1\n@media screen and (max-width: 414px)\n        .address\n            display: none\n"],sourceRoot:""}]);const s=i},3634:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,".main-front{background-color:aqua;height:auto;min-height:100vh;position:relative}footer#footer{background:#363636}","",{version:3,sources:["webpack://./resources/js/Themes/default/Layout/Frontend.vue"],names:[],mappings:"AA+BA,YAII,qBAAA,CAFA,WAAA,CADA,gBAAA,CAEA,iBA7BJ,CA+BA,cACI,kBA5BJ",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.main-front \n    min-height: 100vh\n    height: auto\n    position: relative\n    background-color: aqua\nfooter#footer\n    background: #363636\n\n"],sourceRoot:""}]);const s=i},9038:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,'.background-overlay{-webkit-backdrop-filter:blur(5px) saturate(.5);backdrop-filter:blur(5px) saturate(.5);background:rgba(51,51,51,.675);content:"";height:100%;left:0;position:absolute;top:0;width:100%}article.post-content{color:#333!important;letter-spacing:.03em}article.post-content img{width:100%}',"",{version:3,sources:["webpack://./resources/js/Themes/default/Pages/Berita.vue"],names:[],mappings:"AAoGA,oBAQI,8CAAA,CAAA,sCAAA,CADA,8BAAA,CADA,UAAA,CADA,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CAEA,UA/FJ,CAoGA,qBACI,oBAAA,CACA,oBAjGJ,CAkGI,yBACI,UAhGR",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.background-overlay\n    position: absolute\n    top: 0\n    left: 0\n    width: 100%\n    height: 100%\n    content: ""\n    background: #333333ac\n    backdrop-filter: blur(5px) saturate(.5)\narticle.post-content\n    color: #333!important\n    letter-spacing: .03em\n    img\n        width: 100%\n'],sourceRoot:""}]);const s=i},9557:(n,t,a)=>{a.r(t),a.d(t,{default:()=>l});const e={name:"Footer",data:function(){return{}},computed:{year:function(){return(new Date).getFullYear()},sekolah:function(){return this.$page.props.sekolah}}};var o=a(3379),r=a.n(o),i=a(1443),s={insert:"head",singleton:!1};r()(i.Z,s);i.Z.locals;const l=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-container",[a("v-row",{staticClass:"footer-kontak my-6"},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"address-box text-center"},[a("img",{attrs:{src:"/images/logo-sd.svg",alt:"Logo SD",width:"100"}}),n._v(" "),a("p",{staticClass:"white--text mt-5"},[n._v("\n                    "+n._s(n.sekolah.alamat_jalan)+", "+n._s(n.sekolah.desa_kelurahan)+" "),a("br"),n._v("\n                    Kec. "+n._s(n.sekolah.kecamatan)+", Kode Pos "+n._s(n.sekolah.kode_pos)+" "),a("br"),n._v("\n                    "+n._s(n.sekolah.kabupaten_kota)+", "+n._s(n.sekolah.provinsi)+", Indonesia "),a("br"),n._v(" "),a("a",{attrs:{href:"mailto:info@sdn1-bedalisodo.sch.id"}},[n._v("info@sdn1-bedalisodo.sch.id")])]),n._v(" "),a("p",{staticClass:"sosmed"},[a("a",{attrs:{href:"#"}},[a("v-icon",[n._v("mdi-facebook")])],1),n._v(" "),a("a",{attrs:{href:"#"}},[a("v-icon",[n._v("mdi-twitter")])],1),n._v(" "),a("a",{attrs:{href:"#"}},[a("v-icon",[n._v("mdi-youtube")])],1),n._v(" "),a("a",{attrs:{href:"#"}},[a("v-icon",[n._v("mdi-instagram")])],1),n._v(" "),a("a",{attrs:{href:"#"}},[a("v-icon",[n._v("mdi-whatsapp")])],1)])])]),n._v(" "),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"links-box white--text"},[a("h3",[n._v("Pranala Luar:")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kemdikbud.go.id",target:"_blank"}},[n._v("Kemdikbud")])]),n._v(" "),a("li",[a("a",{attrs:{href:"https://kemenag.go.id",target:"_blank"}},[n._v("Kemenag")])]),n._v(" "),a("li",[a("a",{attrs:{href:"http://rapor.sdn1-bedalisodo.sch.id",target:"_blank"}},[n._v("E-Rapor")])])])])]),n._v(" "),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"kontak-box"},[a("v-card",{attrs:{flat:"",outlined:"",color:"transparent",dark:""}},[a("v-card-text",[a("v-form",{on:{submit:function(t){return t.preventDefault(),n.submit.apply(null,arguments)}}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Masukkan Nama",outlined:"","hide-details":"",dense:"",color:"white"}})],1),n._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Masukkan Email",outlined:"","hide-details":"",dense:""}})],1),n._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{dense:"",label:"Berikan Masukan Anda",outlined:"","hide-details":""}})],1)],1),n._v(" "),a("v-row",[a("v-col",[a("v-btn",{attrs:{block:"",type:"submit",outlined:"",dark:"",color:"white"}},[n._v("Kirim")])],1)],1)],1)],1)],1)],1)])],1),n._v(" "),a("v-row",{staticClass:"footer-copy",attrs:{fluid:""}},[a("v-col",[a("p",[n._v("\n                © "+n._s(n.year)+" - "+n._s(n.sekolah.nama)+"\n            ")])]),n._v(" "),a("v-col"),n._v(" "),a("v-col",{staticClass:"text-right"},[n._v("Built with "),a("v-icon",{attrs:{small:"",color:"error"}},[n._v("mdi-heart")]),n._v(" by "),a("a",{attrs:{href:"mailto:matthelosh@gmail.com"}},[n._v("Mat Soleh")])],1)],1)],1)}),[],!1,null,"27590848",null).exports},716:(n,t,a)=>{a.r(t),a.d(t,{default:()=>l});const e={name:"Navbar",data:function(){return{menu:!1,pages:[{label:"Beranda",url:"/"},{label:"Profil",url:"/profil"},{label:"Pengumuman",url:"/pengumuman"},{label:"Berita",url:"/berita"},{label:"PPDB",url:"/ppdb"},{label:"Login",url:"/login"}]}},methods:{showMenu:function(){var n=document.querySelector("#menu-container");document.querySelector("#btn-menu").classList.toggle("show"),n.classList.toggle("shown"),this.menu=!this.menu},handleScroll:function(){window.addEventListener("scroll",(function(){var n=window.scrollY;document.querySelector("#btn-menu");n>60&&document.querySelector("header").classList.add("scrolled")}))}},computed:{sekolah:function(){return this.$page.props.sekolah},navs:function(){return this.$page.props.user?_.remove(this.pages,(function(n){return"/login"!=n.url})):this.pages}},created:function(){this.handleScroll()}};var o=a(3379),r=a.n(o),i=a(6828),s={insert:"head",singleton:!1};r()(i.Z,s);i.Z.locals;const l=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("div",{attrs:{id:"btn-menu"},on:{click:n.showMenu}},[a("span",{staticStyle:{}}),n._v(" "),a("span",{staticStyle:{}}),n._v(" "),a("span",{staticStyle:{}})]),n._v(" "),a("v-navigation-drawer",{attrs:{right:"",width:"100%",app:"",fixed:"",temporary:""},model:{value:n.menu,callback:function(t){n.menu=t},expression:"menu"}},[a("v-container",{attrs:{id:"menu-container",fluid:"","fill-height":"","align-center":"","justify-center":""}},[a("ul",{attrs:{id:"main-menu"}},n._l(n.navs,(function(t,e){return a("li",{key:e,staticClass:"nav-li"},[a("a",{attrs:{href:t.url}},[n._v(n._s(t.label))])])})),0)])],1),n._v(" "),a("v-app-bar",{attrs:{fixed:"",color:"transparent",flat:""}},[a("img",{attrs:{src:"/images/logo1.svg",alt:"Logo",height:"32px"}}),n._v(" "),a("v-toolbar-title",{staticClass:"grey--text mx-3 logo-title"},[a("a",{staticStyle:{"text-decoration":"none",color:"transparent"},attrs:{href:"/"}},[a("h1",[n._v("SDN1")]),n._v(" "),a("small",[n._v("BEDALISODO")])])]),n._v(" "),a("v-divider",{staticClass:"d-none d-sm-inline mx-3",attrs:{vertical:"",dark:""}}),n._v(" "),a("div",{staticClass:"address"},[a("p",[n._v(n._s(n.sekolah.alamat_jalan)+", "+n._s(n.sekolah.desa_kelurahan))]),n._v(" "),a("p",[n._v("Kec. "+n._s(n.sekolah.kecamatan)+", "+n._s(n.sekolah.kabupaten_kota)+", Kode Pos: "+n._s(n.sekolah.kode_pos))]),n._v(" "),a("p",[a("a",{attrs:{href:"mailto:"+n.sekolah.email}},[n._v(n._s(n.sekolah.email))])])]),n._v(" "),a("div",{staticClass:"campaign-top ml-16 d-none d-sm-inline"},[a("v-btn",{staticClass:"error--text"},[n._v("INFO PPDB 2023")])],1),n._v(" "),a("v-spacer")],1)],1)}),[],!1,null,"2b04a6c6",null).exports},9760:(n,t,a)=>{a.r(t),a.d(t,{default:()=>c});a(6454);var e=a(716),o=a(9557);const r={name:"Frontend",components:{Navbar:e.default,Footer:o.default},data:function(){return{menu:!1}},methods:{},created:function(){}};var i=a(3379),s=a.n(i),l=a(3634),A={insert:"head",singleton:!1};s()(l.Z,A);l.Z.locals;const c=(0,a(1900).Z)(r,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-app",{staticClass:"main-front"},[a("Navbar"),n._v(" "),n._t("default"),n._v(" "),a("footer",{attrs:{id:"footer"}},[a("v-container",{attrs:{fluid:""}},[a("Footer")],1)],1)],2)}),[],!1,null,null,null).exports},7374:(n,t,a)=>{a.r(t),a.d(t,{default:()=>A});var e=a(6454);a(9760);const o={name:"Front.Berita",components:{FrontLayout,Link:e.Link},data:function(){return{posts:[]}},methods:{getPosts:function(){var n=this;axios({method:"post",url:"/berita"}).then((function(t){n.posts=t.data.posts})).catch((function(n){console.log(n.response)}))}},computed:{},mounted:function(){this.getPosts()}};var r=a(3379),i=a.n(r),s=a(9038),l={insert:"head",singleton:!1};i()(s.Z,l);s.Z.locals;const A=(0,a(1900).Z)(o,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("FrontLayout",[a("v-container",{staticStyle:{"min-height":"100vh","padding-top":"100px",background:"url('/images/ngaji.jpg')","background-size":"cover",position:"relative"},attrs:{"fill-height":"","align-start":"",fluid:""}},[a("div",{staticClass:"background-overlay"}),n._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-container",[a("v-card",{attrs:{color:"transparent",dark:"",flat:""}},[a("v-card-title",[a("h3",{staticClass:"white--text"},[a("v-icon",{attrs:{large:""}},[n._v("mdi-newspaper")]),n._v("\n                                Semua Berita\n                            ")],1)]),n._v(" "),a("v-card-text",[a("v-row",n._l(n.posts,(function(t,e){return a("v-col",{key:e,attrs:{cols:"12",sm:"3"}},[a("v-card",{attrs:{color:"primary"}},[a("v-img",{attrs:{src:"/images/card-basic-person.png"}},[a("v-toolbar",{attrs:{light:""}},[a("v-toolbar-title",[n._v("\n                                                    "+n._s(t.title)+"\n                                                ")])],1),n._v(" "),a("v-card-text",[a("v-container",[a("article",{staticClass:"post-content"},[n._v("\n                                                        "+n._s(t.content.replace(/(<([^>]+)>)/gi,"").substr(0,300))+"\n                                                    ")])])],1),n._v(" "),a("v-card-actions",[a("v-badge",{staticClass:"mx-3",attrs:{overlap:"",bottom:""},scopedSlots:n._u([{key:"badge",fn:function(){return[a("small",[n._v(n._s(t.views))])]},proxy:!0}],null,!0)},[n._v(" "),a("v-icon",[n._v("mdi-eye")])],1),n._v(" "),a("v-badge",{staticClass:"mx-3",attrs:{overlap:"",color:"primary",bottom:""},scopedSlots:n._u([{key:"badge",fn:function(){return[a("small",[n._v(n._s(t.liked))])]},proxy:!0}],null,!0)},[n._v(" "),a("v-icon",{attrs:{color:"error"}},[n._v("mdi-heart")])],1),n._v(" "),a("v-badge",{staticClass:"mx-3",attrs:{overlap:"",color:"primary",bottom:""},scopedSlots:n._u([{key:"badge",fn:function(){return[a("small",[n._v(n._s(t.shared))])]},proxy:!0}],null,!0)},[n._v(" "),a("v-icon",[n._v("mdi-share")])],1),n._v(" "),a("v-spacer"),n._v(" "),a("Link",{attrs:{as:"v-btn",small:"",color:"primary",href:"/berita/"+t.slug}},[n._v("Baca")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=374.js.map