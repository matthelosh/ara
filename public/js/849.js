"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[849],{2055:(n,A,t)=>{t.d(A,{Z:()=>a});var o=t(7897),e=t.n(o),i=t(1519),r=t.n(i)()(e());r.push([n.id,'.img-box[data-v-d783915c]{border:7px solid purple;border-radius:50%;box-sizing:border-box;height:200px;overflow:hidden;position:relative;width:200px}.img-box img[data-v-d783915c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.img-box[data-v-d783915c]:before{background:hsla(304,8%,44%,0);border:10px solid #fff;border-radius:50%;content:"";height:100%;left:0;position:absolute;top:0;width:100%}.name-box[data-v-d783915c]{background:#fefefe;border-radius:25px;bottom:-10px;box-shadow:0 3px 15px rgba(0,0,0,.3);box-sizing:border-box;color:#333;font-weight:600;margin:20px auto;padding:10px 10px 0;position:absolute;text-align:center;width:auto}.name-box h5[data-v-d783915c]{line-height:15px}.name-box small[data-v-d783915c]{line-height:10px}',"",{version:3,sources:["webpack://./resources/js/Themes/default/Components/Guru.vue"],names:[],mappings:"AAoDA,0BAOI,uBAAA,CAJA,iBAAA,CAGA,qBAAA,CAJA,YAAA,CAEA,eAAA,CACA,iBAAA,CAJA,WA7CJ,CAoDI,8BAEI,WAAA,CACA,mBAAA,CAAA,gBAAA,CAFA,UAhDR,CAmDA,iCAOI,6BAAA,CACA,sBAAA,CACA,iBAAA,CAPA,UAAA,CAGA,WAAA,CADA,MAAA,CAHA,iBAAA,CAEA,KAAA,CAGA,UA7CJ,CAkDA,2BAMI,kBAAA,CAKA,kBAAA,CADA,YAAA,CAFA,oCAAA,CAHA,qBAAA,CAQA,UAAA,CADA,eAAA,CAHA,gBAAA,CAFA,mBAAA,CANA,iBAAA,CACA,iBAAA,CACA,UArCJ,CAgDI,8BACI,gBA9CR,CA+CI,iCACI,gBA7CR",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.img-box\n    width: 200px\n    height: 200px\n    border-radius: 50%\n    overflow: hidden\n    position: relative\n    box-sizing: border-box\n    border: 7px solid purple\n    img\n        width: 100%\n        height: 100%\n        object-fit: cover\n.img-box::before\n    position: absolute\n    content:""\n    top: 0\n    left: 0\n    height: 100%\n    width: 100%\n    background: #78677700\n    border: 10px solid white\n    border-radius: 50%\n\n.name-box\n    position: absolute\n    text-align: center\n    width: auto\n    padding: 10px\n    box-sizing: border-box\n    background: #fefefe\n    padding-bottom: 0\n    box-shadow: 0 3px 15px rgba(0,0,0,0.3)\n    margin: 20px auto\n    bottom: -10px\n    border-radius: 25px\n    font-weight: 600\n    color: #333\n    h5\n        line-height: 15px\n    small\n        line-height: 10px\n        \n'],sourceRoot:""}]);const a=r},6849:(n,A,t)=>{t.r(A),t.d(A,{default:()=>s});const o={name:"Guru",data:function(){return{gurus:[]}},methods:{getGurus:function(){var n=this;axios({method:"post",url:"/guru"}).then((function(A){n.gurus=A.data.gurus})).catch((function(n){console.log(n)}))},onImgError:function(n,A){var t="Laki-laki"==A.jk?"/images/1.png":"/images/2.png";n.target.src=t}},mounted:function(){this.getGurus()}};var e=t(3379),i=t.n(e),r=t(2055),a={insert:"head",singleton:!1};i()(r.Z,a);r.Z.locals;const s=(0,t(1900).Z)(o,(function(){var n=this,A=n.$createElement,t=n._self._c||A;return t("v-container",[t("v-row",[t("v-col",[t("h3",{staticClass:"text-h2 black--text text-center font-weight-black"},[n._v("Dewan Guru")])])],1),n._v(" "),t("v-row",n._l(n.gurus,(function(A,o){return t("v-col",{key:o,staticClass:"text-center d-flex justify-center",staticStyle:{position:"relative"},attrs:{cols:"12",sm:"3"}},[t("div",{staticClass:"img-box",staticStyle:{"--clr":""}},[t("img",{attrs:{src:"/storage/uploads/img/guru/"+A.nip+".jpg",alt:"Guru"},on:{error:function(t){return n.onImgError(t,A)}}})]),n._v(" "),t("div",{staticClass:"name-box"},[t("h5",[n._v(n._s(A.name))]),n._v(" "),t("small",[n._v(n._s(A.jabatan))])])])})),1)],1)}),[],!1,null,"d783915c",null).exports}}]);
//# sourceMappingURL=849.js.map