"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27],{4660:(a,n,t)=>{t.d(n,{Z:()=>i});var o=t(7897),e=t.n(o),s=t(1519),l=t.n(s)()(e());l.push([a.id,".footer-kontak a[data-v-491c3714]{color:teal}.footer-kontak .sosmed a[data-v-491c3714]{text-decoration:none}.links-box[data-v-491c3714]{align-items:center;display:flex;flex-direction:column}.links-box ul[data-v-491c3714]{list-style:none;padding:0}.links-box ul li[data-v-491c3714]{margin:0;padding:0}.footer-copy[data-v-491c3714]{background:#222;box-shadow:0 0 10px rgba(0,0,0,.5)}.footer-copy p[data-v-491c3714]{color:#acacac;margin:0;padding:0}","",{version:3,sources:["webpack://./resources/js/Themes/sdn1bedalisodo/Layout/Components/Footer.vue"],names:[],mappings:"AA+GA,kCACA,UACA,CAEA,0CACA,oBAEA,CACA,4BAGA,kBAAA,CAFA,YAAA,CACA,qBAEA,CAEA,+BACA,eAAA,CACA,SAEA,CAEA,kCACA,QAAA,CACA,SACA,CAEA,8BACA,eAAA,CACA,kCACA,CAEA,gCAGA,aAAA,CADA,QAAA,CADA,SAIA",sourcesContent:['<template>\n    <v-container>\n        <v-row class="footer-kontak my-6">\n            <v-col cols="12" sm="4">\n                <div class="address-box text-center">\n                    <img src="/storage/uploads/img/logo.png" alt="Logo SD" width="100">\n                    <p class="white--text mt-5">\n                        {{sekolah.alamat_jalan}}, {{sekolah.desa_kelurahan}} <br>\n                        Kec. {{sekolah.kecamatan}}, Kode Pos {{sekolah.kode_pos}} <br>\n                        {{sekolah.kabupaten_kota}}, {{sekolah.provinsi}}, Indonesia <br>\n                        <a href="mailto:info@sdn1-bedalisodo.sch.id">info@sdn1-bedalisodo.sch.id</a>\n                    </p>\n                    <p class="sosmed">\n                        <a href="#"><v-icon>mdi-facebook</v-icon></a>\n                        <a href="#"><v-icon>mdi-twitter</v-icon></a>\n                        <a href="#"><v-icon>mdi-youtube</v-icon></a>\n                        <a href="#"><v-icon>mdi-instagram</v-icon></a>\n                        <a href="#"><v-icon>mdi-whatsapp</v-icon></a>\n                    </p>\n                </div>\n            </v-col>\n            <v-col cols="12" sm="4">\n                <div class="links-box white--text">\n                    <h3>Pranala Luar:</h3>\n                    <ul>\n                        <li>\n                            <a href="https://kemdikbud.go.id" target="_blank">Kemdikbud</a>\n                        </li>\n                        <li>\n                            <a href="https://kemenag.go.id" target="_blank">Kemenag</a>\n                        </li>\n                        <li>\n                            <a href="http://rapor.sdn1-bedalisodo.sch.id" target="_blank">E-Rapor</a>\n                        </li>\n                    </ul>\n                </div>\n            </v-col>\n            <v-col cols="12" sm="4">\n                <div class="kontak-box">\n                    <v-card flat outlined color="transparent" dark>\n                        <v-card-text>\n                            <v-form @submit.prevent="submit">\n                                <v-row>\n                                    <v-col cols="12">\n                                        <v-text-field\n                                            label="Masukkan Nama"\n                                            outlined\n                                            hide-details\n                                            dense\n                                            color="white"\n                                        />\n                                    </v-col>\n                                    <v-col cols="12">\n                                        <v-text-field\n                                            label="Masukkan Email"\n                                            outlined\n                                            hide-details\n                                            dense\n                                        />\n                                    </v-col>\n                                    <v-col cols="12">\n                                        <v-textarea\n                                            dense\n                                            label="Berikan Masukan Anda"\n                                            outlined\n                                            hide-details\n                                        />\n                                    </v-col>\n                                </v-row>\n                                <v-row>\n                                    <v-col>\n                                        <v-btn block type="submit" outlined dark color="white">Kirim</v-btn>\n                                    </v-col>\n                                </v-row>\n                            </v-form>\n                        </v-card-text>\n                    </v-card>\n                </div>\n            </v-col>\n        </v-row>\n        <v-row class="footer-copy" fluid>\n            <v-col>\n                <p>\n                    &copy; {{year}} - {{sekolah.nama}}\n                </p>\n            </v-col>\n            <v-col></v-col>\n            <v-col class="text-right">Built with <v-icon small color="error">mdi-heart</v-icon> by <a href="mailto:matthelosh@gmail.com">Mat Soleh</a></v-col>\n        </v-row>\n    </v-container>\n</template>\n\n<script>\nexport default {\n    name: \'Footer\',\n    data: () => ({\n\n    }),\n    computed: {\n        year() {\n            let date = new Date()\n            return date.getFullYear()\n        },\n        sekolah() {\n            return this.$page.props.sekolah\n        }\n    }\n}\n<\/script>\n\n<style scoped>\n    .footer-kontak a {\n        color: teal;\n    }\n\n    .footer-kontak .sosmed a {\n        text-decoration: none;\n        \n    }\n    .links-box {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .links-box ul{\n        list-style: none;\n        padding: 0;\n        \n    }\n\n    .links-box ul li {\n        margin: 0;\n        padding: 0;\n    }\n\n    .footer-copy {\n        background: #222;\n         box-shadow: 0 0 10px rgba(0,0,0,0.5);\n    }\n\n    .footer-copy p {\n        padding: 0;\n        margin: 0;\n        color: #acacac;\n       \n    }\n</style>'],sourceRoot:""}]);const i=l},7843:(a,n,t)=>{t.r(n),t.d(n,{default:()=>r});const o={name:"Footer",data:function(){return{}},computed:{year:function(){return(new Date).getFullYear()},sekolah:function(){return this.$page.props.sekolah}}};var e=t(3379),s=t.n(e),l=t(4660),i={insert:"head",singleton:!1};s()(l.Z,i);l.Z.locals;const r=(0,t(1900).Z)(o,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("v-container",[t("v-row",{staticClass:"footer-kontak my-6"},[t("v-col",{attrs:{cols:"12",sm:"4"}},[t("div",{staticClass:"address-box text-center"},[t("img",{attrs:{src:"/storage/uploads/img/logo.png",alt:"Logo SD",width:"100"}}),a._v(" "),t("p",{staticClass:"white--text mt-5"},[a._v("\n                    "+a._s(a.sekolah.alamat_jalan)+", "+a._s(a.sekolah.desa_kelurahan)+" "),t("br"),a._v("\n                    Kec. "+a._s(a.sekolah.kecamatan)+", Kode Pos "+a._s(a.sekolah.kode_pos)+" "),t("br"),a._v("\n                    "+a._s(a.sekolah.kabupaten_kota)+", "+a._s(a.sekolah.provinsi)+", Indonesia "),t("br"),a._v(" "),t("a",{attrs:{href:"mailto:info@sdn1-bedalisodo.sch.id"}},[a._v("info@sdn1-bedalisodo.sch.id")])]),a._v(" "),t("p",{staticClass:"sosmed"},[t("a",{attrs:{href:"#"}},[t("v-icon",[a._v("mdi-facebook")])],1),a._v(" "),t("a",{attrs:{href:"#"}},[t("v-icon",[a._v("mdi-twitter")])],1),a._v(" "),t("a",{attrs:{href:"#"}},[t("v-icon",[a._v("mdi-youtube")])],1),a._v(" "),t("a",{attrs:{href:"#"}},[t("v-icon",[a._v("mdi-instagram")])],1),a._v(" "),t("a",{attrs:{href:"#"}},[t("v-icon",[a._v("mdi-whatsapp")])],1)])])]),a._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("div",{staticClass:"links-box white--text"},[t("h3",[a._v("Pranala Luar:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kemdikbud.go.id",target:"_blank"}},[a._v("Kemdikbud")])]),a._v(" "),t("li",[t("a",{attrs:{href:"https://kemenag.go.id",target:"_blank"}},[a._v("Kemenag")])]),a._v(" "),t("li",[t("a",{attrs:{href:"http://rapor.sdn1-bedalisodo.sch.id",target:"_blank"}},[a._v("E-Rapor")])])])])]),a._v(" "),t("v-col",{attrs:{cols:"12",sm:"4"}},[t("div",{staticClass:"kontak-box"},[t("v-card",{attrs:{flat:"",outlined:"",color:"transparent",dark:""}},[t("v-card-text",[t("v-form",{on:{submit:function(n){return n.preventDefault(),a.submit.apply(null,arguments)}}},[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Masukkan Nama",outlined:"","hide-details":"",dense:"",color:"white"}})],1),a._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Masukkan Email",outlined:"","hide-details":"",dense:""}})],1),a._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-textarea",{attrs:{dense:"",label:"Berikan Masukan Anda",outlined:"","hide-details":""}})],1)],1),a._v(" "),t("v-row",[t("v-col",[t("v-btn",{attrs:{block:"",type:"submit",outlined:"",dark:"",color:"white"}},[a._v("Kirim")])],1)],1)],1)],1)],1)],1)])],1),a._v(" "),t("v-row",{staticClass:"footer-copy",attrs:{fluid:""}},[t("v-col",[t("p",[a._v("\n                © "+a._s(a.year)+" - "+a._s(a.sekolah.nama)+"\n            ")])]),a._v(" "),t("v-col"),a._v(" "),t("v-col",{staticClass:"text-right"},[a._v("Built with "),t("v-icon",{attrs:{small:"",color:"error"}},[a._v("mdi-heart")]),a._v(" by "),t("a",{attrs:{href:"mailto:matthelosh@gmail.com"}},[a._v("Mat Soleh")])],1)],1)],1)}),[],!1,null,"491c3714",null).exports}}]);
//# sourceMappingURL=27.js.map