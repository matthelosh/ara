(self.webpackChunk=self.webpackChunk||[]).push([[966,171],{8213:n=>{n.exports={Paginate:function(n,e,t){var a=n,i=e||1,s=t||3,o=(i-1)*s,r=_.drop(a,o).slice(0,s);return{page:i,pageSize:s,total:a.length,total_pages:Math.ceil(a.length/s),items:r}}}},8055:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(7897),i=t.n(a),s=t(1519),o=t.n(s)()(i());o.push([n.id,"a[data-v-34b78395]{color:teal!important;text-decoration:none}a[data-v-34b78395] :visited{color:teal}.info-container[data-v-34b78395]{display:grid;gap:10px;grid-template-columns:auto}.info-container .judul[data-v-34b78395]{grid-area:span 1/span 1}.info-container .judul h1[data-v-34b78395]{color:#000}.info-container .info-card[data-v-34b78395]{background:#fff;border-radius:3px;box-shadow:0 0 10px rgba(0,0,0,.1);padding:20px;position:relative;width:100%}.info-container .info-card h1[data-v-34b78395]{color:#333;font-size:1.3rem;height:75px;line-height:100%}.info-container .info-card span.meta[data-v-34b78395]{color:#236767;font-size:.8rem}@media screen and (min-width:415px){.info-container[data-v-34b78395]{display:grid;gap:10px;grid-template-columns:auto auto auto}.info-container .judul[data-v-34b78395]{grid-area:span 1/span 3}.info-container .info-card[data-v-34b78395]{background:#fff;border-radius:3px;box-shadow:0 0 10px rgba(0,0,0,.1);padding:20px;width:100%}.info-container .info-card h1[data-v-34b78395]{color:#333;font-size:1.3rem;height:75px;line-height:100%}.info-container .info-card span.meta[data-v-34b78395]{color:#236767;font-size:.8rem}}","",{version:3,sources:["webpack://./resources/js/Themes/default/Components/Info.vue"],names:[],mappings:"AA0IA,mBAEI,oBAAA,CADA,oBAxIJ,CA0II,4BACI,UAxIR,CAyIA,iCACI,YAAA,CAEA,QAAA,CADA,0BArIJ,CAuII,wCACI,uBArIR,CAuIQ,2CAGI,UAvIZ,CAwII,4CAII,eAAA,CAGA,iBAAA,CADA,kCAAA,CADA,YAAA,CAJA,iBAAA,CACA,UAlIR,CAwIQ,+CAGI,UAAA,CADA,gBAAA,CAEA,WAAA,CAHA,gBAnIZ,CAuIQ,sDAEI,aAAA,CADA,eApIZ,CA0IA,oCACI,iCAKI,YAAA,CAGA,QAAA,CAFA,oCA1IN,CA6IM,wCACI,uBA3IV,CA4IM,4CAII,eAAA,CAGA,iBAAA,CADA,kCAAA,CADA,YAAA,CAHA,UAvIV,CA6IU,+CAGI,UAAA,CADA,gBAAA,CAEA,WAAA,CAHA,gBAxId,CA4IU,sDAEI,aAAA,CADA,eAzId,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n    text-decoration: none\n    color: teal!important\n    :visited\n        color: teal\n.info-container\n    display: grid\n    grid-template-columns: auto\n    gap: 10px\n    .judul\n        grid-area: span 1/ span 1\n        // row-gap: 0\n        h1\n            // font-weight: 800\n            // letter-spacing: .2em\n            color: black   \n    .info-card\n        position: relative\n        width: 100%\n        // margin: 20px auto\n        background: #fff\n        padding: 20px\n        box-shadow: 0 0 10px rgba(0,0,0,0.1)\n        border-radius: 3px\n        h1\n            line-height: 100%\n            font-size: 1.3rem\n            color: #333\n            height: 75px\n        span.meta\n            font-size: .8rem\n            color: #236767\n@media screen and (max-width: 414px)\n    .info-container\n        // background: orange\n\n@media screen and (min-width: 415px)\n    .info-container\n        // background: pink\n        // display: flex\n        // justify-content: center\n        // flex-wrap: wrap\n        display: grid\n        grid-template-columns: auto auto auto\n        // column-gap: 20px\n        gap: 10px\n        .judul\n            grid-area: span 1/ span 3 \n        .info-card\n            // position: relative\n            width: 100%\n            // margin: 20px\n            background: #fff\n            padding: 20px\n            box-shadow: 0 0 10px rgba(0,0,0,0.1)\n            border-radius: 3px\n            h1\n                line-height: 100%\n                font-size: 1.3rem\n                color: #333\n                height: 75px\n            span.meta\n                font-size: .8rem\n                color: #236767\n        \n"],sourceRoot:""}]);const r=o},9171:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});const a={name:"FrontAgenda",data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[{name:"Libur Akhir Semester",start:"2022-06-24",end:"2022-07-11",color:"error",description:"Libur Akhir Semester Genap / Libur Akhir Tahun 2021-2022"}],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.getEvents()},methods:{getEvents:function(){var n=this;axios({method:"post",url:"/agenda"}).then((function(e){n.events=e.data.events})).catch((function(n){console.log(n)}))},closeEvent:function(){this.selectedOpen=!1,Object.assign(this.selectedEvent,{})},showEvent:function(n){n.nativeEvent;var e=n.event;this.selectedEvent=e,this.selectedOpen=!0},getEventColor:function(n){return n.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()}},computed:{thisMonth:function(){var n=new Date;return["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][n.getMonth()]+" "+n.getFullYear()}}};const i=(0,t(1900).Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-row",{staticClass:"fill-height"},[t("v-col",[t("v-card",[t("v-card-text",[t("h1",[t("v-icon",{attrs:{large:""}},[n._v("mdi-calendar")]),n._v(" AGENDA")],1),n._v(" "),t("v-sheet",{attrs:{height:"64"}},[t("v-toolbar",{attrs:{flat:""}},[t("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:n.prev}},[t("v-icon",{attrs:{small:""}},[n._v("\n                            mdi-chevron-left\n                            ")])],1),n._v(" "),t("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:n.next}},[t("v-icon",{attrs:{small:""}},[n._v("\n                            mdi-chevron-right\n                            ")])],1),n._v(" "),t("v-toolbar-title",[n.$refs.calendar?t("span",[n._v(n._s(n.$refs.calendar.title))]):t("span",[n._v(n._s(n.thisMonth))])])],1)],1),n._v(" "),t("v-sheet",[t("v-calendar",{ref:"calendar",attrs:{color:"primary",events:n.events,"event-color":n.getEventColor,type:n.type},on:{"click:event":n.showEvent},model:{value:n.focus,callback:function(e){n.focus=e},expression:"focus"}})],1)],1)],1),n._v(" "),t("v-dialog",{attrs:{width:"400"},model:{value:n.selectedOpen,callback:function(e){n.selectedOpen=e},expression:"selectedOpen"}},[t("v-card",{attrs:{color:n.selectedEvent.color,dark:""}},[t("v-card-title",[t("h3",[n._v(n._s(n.selectedEvent.name))])]),n._v(" "),t("v-divider",{staticClass:"mb-3"}),n._v(" "),t("v-card-text",[n._v("\n              Mulai: "+n._s(n.selectedEvent.start)+" |\n              Selesai: "+n._s(n.selectedEvent.end)+" "),t("br"),n._v(" "),t("span",{domProps:{innerHTML:n._s(n.selectedEvent.description)}})]),n._v(" "),t("v-card-actions",[t("v-spacer"),n._v(" "),t("v-btn",{attrs:{text:""},on:{click:n.closeEvent}},[n._v("Tutup")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},7966:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>v});var a=t(6454),i=t(9171),s=t(8213);const o={name:"Info",components:{Link:a.Link,Agenda:i.default},data:function(){return{posts:[],infoPage:1,infoPageLength:10,noticePage:1,noticePageLength:5}},methods:{getPosts:function(){var n=this;axios({method:"post",url:"/post"}).then((function(e){n.posts=e.data.posts})).catch((function(n){console.log(n.response)}))},tanggal:function(n){var e=new Date(n);return e.getDate()+" "+["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][e.getMonth()]+" "+e.getFullYear()}},computed:{beritas:function(){var n=_.filter(this.posts,(function(n){return!_.includes("Pengumuman",n.category.name)}));return(0,s.Paginate)(n,this.infoPage,this.infoPageLength)},notices:function(){var n=_.filter(this.posts,{category:{name:"Pengumuman"}});return(0,s.Paginate)(n,this.noticePage,this.noticePageLength)}},mounted:function(){this.getPosts()}};var r=t(3379),l=t.n(r),c=t(8055),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;const v=(0,t(1900).Z)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-card",[t("v-card-title",[t("h3",[t("v-icon",{attrs:{large:""}},[n._v("mdi-bullhorn-outline")]),n._v(" \n                        PENGUMUMAN\n                    ")],1),n._v(" "),t("v-spacer"),n._v(" "),n.notices.items.length>0?t("Link",{attrs:{href:"/pengumuman"}},[t("small",{staticClass:"font-weight-light text-body-2"},[n._v("Lihat Semua")])]):n._e()],1),n._v(" "),t("v-card-text",[t("v-divider",{staticClass:"mt-3"}),n._v(" "),n.notices.items.length>0?t("v-list",{attrs:{"three-line":""}},[n._l(n.notices.items,(function(e,a){return[t("v-list-item",{key:a},[t("v-list-item-avatar",{attrs:{rounded:""}},[t("img",{attrs:{src:"/storage/img/galeri/"+(a+1)+".png",alt:"Gambar "}})]),n._v(" "),t("v-list-item-content",[t("v-list-item-title",{staticClass:"text-wrap text-justify"},[t("h3",[t("Link",{attrs:{href:"/pengumuman/"+e.slug}},[n._v(n._s(e.title))])],1)]),n._v(" "),t("v-list-item-subtitle",[t("span",{domProps:{innerHTML:n._s(e.content)}})])],1)],1)]})),n._v(" "),t("v-list-item",[t("v-list-item-content",[t("v-pagination",{directives:[{name:"show",rawName:"v-show",value:n.notices.total_pages>1,expression:"notices.total_pages > 1"}],attrs:{length:n.notices.total_pages},model:{value:n.noticePage,callback:function(e){n.noticePage=e},expression:"noticePage"}})],1)],1)],2):t("v-list",[t("v-list-item",[t("v-list-item-content",[t("v-list-item-title",[n._v("Belum Ada Pengumuman")])],1)],1)],1)],1)],1),n._v(" "),t("Agenda",{staticClass:"mt-1"})],1),n._v(" "),t("v-col",{attrs:{cols:"12",sm:"8"}},[t("div",{staticClass:"info-container"},[t("v-card",{staticClass:"judul"},[t("v-card-title",[t("h3",[t("v-icon",{attrs:{large:""}},[n._v("mdi-newspaper")]),n._v(" BERITA TERBARU")],1),n._v(" "),t("v-spacer"),n._v(" "),n.beritas.items.length>0?t("Link",{attrs:{href:"/berita"}},[t("small",{staticClass:"font-weight-light text-body-2"},[n._v("Lihat Semua")])]):n._e()],1)],1),n._v(" "),n._l(n.beritas.items,(function(e){return n.beritas.items.length>0?t("div",{staticClass:"info-card"},[t("h1",[t("Link",{attrs:{href:"/berita/"+e.slug}},[n._v(n._s(e.title))])],1),n._v(" "),t("span",{staticClass:"meta"},[n._v(n._s(n.tanggal(e.created_at))+" | "+n._s(e.views)+" "),t("v-icon",{attrs:{small:"",color:"teal"}},[n._v("mdi-eye")]),n._v("  | "+n._s(e.category.name))],1),n._v(" "),t("v-divider",{staticClass:"mt-1 mb-3"}),n._v(" "),t("span",{staticClass:"d-none d-sm-flex black--text",domProps:{innerHTML:n._s(e.content.substr(0,100))}}),n._v(" "),t("Link",{attrs:{href:"/berita/"+e.slug}},[n._v("Baca")])],1):t("v-alert",[n._v("\n                    Belum Ada Berita\n                ")])}))],2),n._v(" "),t("v-pagination",{directives:[{name:"show",rawName:"v-show",value:n.beritas.total_pages>1,expression:"beritas.total_pages > 1"}],staticClass:"my-5",attrs:{length:n.beritas.total_pages},model:{value:n.infoPage,callback:function(e){n.infoPage=e},expression:"infoPage"}})],1)],1)],1)}),[],!1,null,"34b78395",null).exports}}]);
//# sourceMappingURL=966.js.map