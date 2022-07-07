"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[611],{6508:(e,n,t)=>{t.d(n,{Z:()=>l});var s=t(7897),o=t.n(s),r=t(1519),a=t.n(r)()(o());a.push([e.id,".v-data-table[data-v-17d4bf3a] td,.v-data-table[data-v-17d4bf3a] th{color:#333!important;font-size:.7rem!important}","",{version:3,sources:["webpack://./resources/js/Pages/Admin/Components/ManajemenRombel.vue"],names:[],mappings:"AA2KC,oEAGO,oBAAA,CADA,yBAzKR",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t.v-data-table::v-deep td,\n\t.v-data-table::v-deep th {\n        font-size: .7rem!important;\n        color: #333!important;\n    }\n"],sourceRoot:""}]);const l=a},4611:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const s={name:"ManajemenRombel",props:{rombel:Object},data:function(){return{loading:!1,members:[],nonmembers:[],searchNonMember:"",searchMember:"",headerMembers:[{text:"NISN",value:"nisn"},{text:"Nama",value:"nama"}],selectedMembers:[],selectedNonMembers:[],headerNonMembers:[{text:"NISN",value:"nisn"},{text:"Nama",value:"nama"}],search:""}},methods:{unregisterMember:function(){var e=this;this.loading=!0,axios({method:"put",url:"/admin/siswa/unregister-member",data:{siswas:this.selectedMembers,rombel:this.rombel.kode_rombel}}).then((function(n){e.loading=!1,e.selectedMembers.forEach((function(n,t){e.members.splice(t,1)})),e.selectedMembers=[],e.getNonMembers()})).catch((function(e){return console.log(e.response.data.msg)}))},inactivate:function(){var e=this;this.loading=!0,axios({method:"put",url:"/admin/siswa/inactivate",data:{siswas:this.selectedNonMembers}}).then((function(n){e.loading=!1,e.getNonMembers(),e.selectedNonMembers=[]}))},insertIntoRombel:function(){var e=this;this.loading=!0,axios({method:"put",url:"/admin/siswa/register-member",data:{siswas:this.selectedNonMembers,rombel_id:this.rombel.kode_rombel,periode:this.$page.props.periode.kode_periode}}).then((function(n){e.loading=!1,e.selectedNonMembers.forEach((function(n,t){e.members.push(n),e.nonmembers.splice(t,1)})),e.selectedNonMembers=[],e.getNonMembers()})).catch((function(e){return console.log(e.response.data.msg)}))},getNonMembers:function(){var e=this;this.loading=!0,axios({method:"post",url:"/admin/siswa/nonmember",data:{periode:this.$page.props.periode.kode_periode}}).then((function(n){e.nonmembers=n.data.nonmembers,e.loading=!1})).catch((function(e){return console.log(e.response.data.msg)}))}},mounted:function(){this.members=this.rombel.siswas,this.getNonMembers()}};var o=t(3379),r=t.n(o),a=t(6508),l={insert:"head",singleton:!1};r()(a.Z,l);a.Z.locals;const i=(0,t(1900).Z)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-row",[t("v-spacer"),e._v(" "),t("v-btn",{staticClass:"mr-3",attrs:{icon:"",color:"error",small:""},on:{click:function(n){return e.$emit("close")}}},[t("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),t("v-row",[t("v-col",[t("v-card",[t("v-card-text",[t("v-data-table",{attrs:{items:e.members,headers:e.headerMembers,dense:"","show-select":""},scopedSlots:e._u([{key:"top",fn:function(){return[t("v-container",[t("v-row",[t("v-col",[t("h5",[e._v("Anggota Rombel "+e._s(e.rombel.name))]),e._v(" "),e.selectedMembers.length>0?t("v-badge",{attrs:{overlap:"",color:"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v(e._s(e.selectedMembers.length))]},proxy:!0}],null,!1,2065732397)},[e._v(" "),t("v-btn",{attrs:{small:"",color:"bg-gradient-primary",dark:""},on:{click:e.unregisterMember}},[t("v-icon",[e._v("mdi-chevron-double-right")]),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v("Keluarkan")])],1)],1):e._e()],1),e._v(" "),t("v-col",[t("v-text-field",{attrs:{label:"Cari",dense:"","hide-details":"",outlined:""},model:{value:e.searchMember,callback:function(n){e.searchMember=n},expression:"searchMember"}})],1)],1)],1)]},proxy:!0}]),model:{value:e.selectedMembers,callback:function(n){e.selectedMembers=n},expression:"selectedMembers"}})],1)],1)],1),e._v(" "),t("v-col",[t("v-card",[t("v-card-text",[t("v-data-table",{attrs:{items:e.nonmembers,headers:e.headerNonMembers,dense:"","show-select":"",search:e.searchNonMember},scopedSlots:e._u([{key:"top",fn:function(){return[t("v-container",[t("v-row",[t("v-col",[t("h5",[e._v("Belum Masuk Rombel")]),e._v(" "),e.selectedNonMembers.length>0?t("v-badge",{attrs:{overlap:"",color:"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v(e._s(e.selectedNonMembers.length))]},proxy:!0}],null,!1,3031947458)},[e._v(" "),t("v-btn",{attrs:{small:"",color:"bg-gradient-primary",dark:""},on:{click:e.insertIntoRombel}},[t("v-icon",[e._v("mdi-chevron-double-left")]),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v("Masukkan")])],1)],1):e._e(),e._v(" "),e.selectedNonMembers.length>0?t("v-badge",{attrs:{overlap:"",color:"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v(e._s(e.selectedNonMembers.length))]},proxy:!0}],null,!1,3031947458)},[e._v(" "),t("v-btn",{attrs:{small:"",color:"bg-gradient-error",dark:""},on:{click:e.inactivate}},[t("v-icon",[e._v("mdi-close")]),e._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[e._v("Nonaktifkan")])],1)],1):e._e()],1),e._v(" "),t("v-col",[t("v-text-field",{attrs:{label:"Cari",dense:"","hide-details":"",outlined:""},model:{value:e.searchNonMember,callback:function(n){e.searchNonMember=n},expression:"searchNonMember"}})],1)],1)],1)]},proxy:!0}]),model:{value:e.selectedNonMembers,callback:function(n){e.selectedNonMembers=n},expression:"selectedNonMembers"}})],1)],1)],1)],1)],1)}),[],!1,null,"17d4bf3a",null).exports}}]);
//# sourceMappingURL=611.js.map