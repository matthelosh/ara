"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[965],{4762:(e,A,i)=>{i.d(A,{Z:()=>l});var t=i(7897),n=i.n(t),a=i(1519),o=i.n(a)()(n());o.push([e.id,".image-gallery{display:grid;gap:20px;grid-auto-flow:dense;grid-auto-rows:150px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin:0 auto;max-width:950px;width:100%}.image-gallery .image-box{overflow:hidden;position:relative}.image-gallery .image-box:first-child{grid-column:span 2;grid-row:span 2}.image-gallery .image-box img{height:100%;-o-object-fit:cover;object-fit:cover;transition:all .5s ease;width:100%}.image-gallery .image-box:hover img{filter:sepia(100%);transform:scale(1.1)}.image-gallery .image-box .overlay{align-items:center;background:#fff;bottom:0;display:flex;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transition:all .5s ease;z-index:1}.image-gallery .image-box:hover .overlay{border:3px solid #000;bottom:10px;left:10px;opacity:1;right:10px;top:10px}.image-gallery .image-box .details{text-align:center}.image-gallery .image-box .details .title{font-size:24px;font-weight:600;line-height:.7em;opacity:0;position:relative;top:-5px;transition:all .3s ease;visibility:hidden}.image-gallery .image-box .details .category{bottom:-5px;font-size:14px;font-weight:400;line-height:.3em;opacity:0;position:relative;transition:all .3s ease;visibility:hidden}.image-gallery .image-box:hover .details .title{opacity:1;top:0;transition:all .3s ease .2s;visibility:visible}.image-gallery .image-box:hover .details .category{bottom:0;line-height:.6em!important;opacity:1;transition:all .3s ease .2s;visibility:visible}.image-gallery .image-box .details .category a,.image-gallery .image-box .details .title a{color:#222;line-height:.6em!important;text-decoration:none}@media(max-width:768px){.image-gallery{grid-auto-rows:250px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.image-gallery .image-box:nth-child(7n+1){grid-column:unset;grid-row:unset}}","",{version:3,sources:["webpack://./resources/js/Themes/default/Components/Galeri.vue"],names:[],mappings:"AA6CA,eAKA,YAAA,CAIA,QAAA,CADA,oBAAA,CADA,oBAAA,CADA,wDAAA,CAHA,aAAA,CADA,eAAA,CADA,UASA,CAEA,0BAEA,eAAA,CADA,iBAGA,CAEA,sCACA,kBAAA,CACA,eACA,CACA,8BAEA,WAAA,CACA,mBAAA,CAAA,gBAAA,CACA,uBAAA,CAHA,UAIA,CAEA,oCAEA,kBAAA,CADA,oBAEA,CAEA,mCAQA,kBAAA,CAFA,eAAA,CAFA,QAAA,CAGA,YAAA,CAEA,sBAAA,CAJA,MAAA,CAKA,SAAA,CATA,iBAAA,CAEA,OAAA,CADA,KAAA,CASA,uBAAA,CACA,SACA,CAEA,yCAMA,qBAAA,CAHA,WAAA,CACA,SAAA,CACA,SAAA,CAHA,UAAA,CADA,QAMA,CAEA,mCACA,iBACA,CAEA,0CAGA,cAAA,CACA,eAAA,CAFA,gBAAA,CAKA,SAAA,CAFA,iBAAA,CACA,QAAA,CAGA,uBAAA,CADA,iBAEA,CAEA,6CAKA,WAAA,CAHA,cAAA,CACA,eAAA,CAFA,gBAAA,CAKA,SAAA,CAFA,iBAAA,CAIA,uBAAA,CADA,iBAEA,CAEA,gDAEA,SAAA,CADA,KAAA,CAGA,2BACA,CAFA,kBAGA,CAEA,mDACA,QAAA,CAIA,0BAAA,CAHA,SAAA,CAEA,2BAAA,CADA,kBAGA,CAEA,2FAEA,UAAA,CAEA,0BAAA,CADA,oBAEA,CAEA,wBACA,eAGA,oBAAA,CADA,wDAEA,CACA,0CACA,iBAAA,CACA,cACA,CACA",sourcesContent:['<template>\n    <v-container>\n        <v-row>\n            <v-col style="position:relative;">\n                <div class="image-gallery">\n                    <div class="image-box" v-for="foto in fotos" :key="foto.id">\n                        <img :src="foto.url" alt="Foto">\n                        <div class="overlay">\n                            <div class="details">\n                                <h3 class="title"><a href="#">{{foto.title}}</a></h3>\n                                <span class="category">\n                                    <a href="#">{{foto.album.name}}</a>\n                                </span>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </v-col>\n        </v-row>\n    </v-container>\n</template>\n\n<script>\nexport default {\n    data: () => ({\n        fotos: []\n    }),\n    methods: {\n        getAlbums() {\n            axios({\n                method: \'post\',\n                url: \'/galeri?from=front\'\n            }).then( res => {\n                this.fotos = res.data.albums.slice(0,20)\n            })\n        }\n    },\n    mounted() {\n        this.getAlbums()\n    }\n}\n<\/script>\n\n<style>\n    .image-gallery {\n        width: 100%;\n        max-width: 950px;\n        margin: 0 auto;\n        /* padding: 50px 20px; */\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(150px,1fr));\n        grid-auto-rows:150px;\n        grid-auto-flow: dense;\n        gap: 20px;\n    }\n\n    .image-gallery .image-box {\n        position: relative;\n        overflow: hidden;\n        /* border: 3px solid black; */\n    }\n\n    .image-gallery .image-box:nth-child(1) {\n        grid-column: span 2;\n        grid-row: span 2;\n    }\n    .image-gallery .image-box img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: all .5s ease;\n    }\n\n    .image-gallery .image-box:hover img {\n        transform: scale(1.1);\n        filter: sepia(100%);\n    }\n\n    .image-gallery .image-box .overlay {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom:0;\n        left:0;\n        background: #ffffff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        transition: all .5s ease;\n        z-index: 1;\n    }\n\n    .image-gallery .image-box:hover .overlay{\n        top: 10px;\n        right: 10px;\n        bottom: 10px;\n        left: 10px;\n        opacity: 1;\n        border: 3px solid black\n    }\n\n    .image-gallery .image-box .details {\n        text-align: center;\n    }\n\n    .image-gallery .image-box .details .title {\n        /* margin-bottom: 5px; */\n        line-height: .7em;\n        font-size: 24px;\n        font-weight: 600;\n        position: relative;\n        top: -5px;\n        opacity: 0;\n        visibility: hidden;\n        transition: all .3s ease;\n    }\n\n    .image-gallery .image-box .details .category {\n        line-height: .3em;\n        font-size: 14px;\n        font-weight: 400;\n        position: relative;\n        bottom: -5px;\n        opacity: 0;\n        visibility: hidden;\n        transition: all .3s ease;\n    }\n\n    .image-gallery .image-box:hover .details .title {\n        top: 0;\n        opacity: 1;\n        visibility: visible;\n        transition: all .3s .2s \n        ease;\n    }\n\n    .image-gallery .image-box:hover .details .category {\n        bottom: 0;\n        opacity: 1;\n        visibility: visible;\n        transition: all .3s .2s ease;\n        line-height: .6em!important;\n    }\n\n    .image-gallery .image-box .details .title a,\n    .image-gallery .image-box .details .category a {\n        color: #222;\n        text-decoration: none;\n        line-height: .6em!important;\n    }\n\n    @media(max-width: 768px) {\n        .image-gallery {\n           \n            grid-template-columns: repeat(auto-fit, minmax(250px,1fr));\n            grid-auto-rows: 250px;\n        }\n        .image-gallery .image-box:nth-child(7n+1) {\n            grid-column: unset;\n            grid-row: unset;\n        }\n    }\n</style>'],sourceRoot:""}]);const l=o},5965:(e,A,i)=>{i.r(A),i.d(A,{default:()=>s});const t={data:function(){return{fotos:[]}},methods:{getAlbums:function(){var e=this;axios({method:"post",url:"/galeri?from=front"}).then((function(A){e.fotos=A.data.albums.slice(0,20)}))}},mounted:function(){this.getAlbums()}};var n=i(3379),a=i.n(n),o=i(4762),l={insert:"head",singleton:!1};a()(o.Z,l);o.Z.locals;const s=(0,i(1900).Z)(t,(function(){var e=this,A=e.$createElement,i=e._self._c||A;return i("v-container",[i("v-row",[i("v-col",{staticStyle:{position:"relative"}},[i("div",{staticClass:"image-gallery"},e._l(e.fotos,(function(A){return i("div",{key:A.id,staticClass:"image-box"},[i("img",{attrs:{src:A.url,alt:"Foto"}}),e._v(" "),i("div",{staticClass:"overlay"},[i("div",{staticClass:"details"},[i("h3",{staticClass:"title"},[i("a",{attrs:{href:"#"}},[e._v(e._s(A.title))])]),e._v(" "),i("span",{staticClass:"category"},[i("a",{attrs:{href:"#"}},[e._v(e._s(A.album.name))])])])])])})),0)])],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=965.js.map