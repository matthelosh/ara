"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[472],{3315:(n,e,t)=>{t.d(e,{Z:()=>r});var A=t(7897),o=t.n(A),a=t(1519),i=t.n(a)()(o());i.push([n.id,".hero-content[data-v-32f02e1c]{backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background-color:rgba(17,25,17,.941);color:#fff;height:100%;padding:60px 20px;width:100%}.hero-content h1.hero-title[data-v-32f02e1c]{border:3px solid #fff;font-size:5em;font-weight:800;line-height:90%;margin-top:50px;padding:1rem;width:60%;z-index:2}.hero-content h1.hero-title .dot[data-v-32f02e1c]{-webkit-animation:dimdot-data-v-32f02e1c 1s ease-in-out infinite;animation:dimdot-data-v-32f02e1c 1s ease-in-out infinite;color:orange}.hero-content h3.hero-subtitle[data-v-32f02e1c]{z-index:2}a.hero-scroll[data-v-32f02e1c]{border:1px solid #aaa;border-radius:50%;bottom:20px;left:50%;padding:10px;position:absolute;text-decoration:none;transform:translateX(-50%)}@-webkit-keyframes dimdot-data-v-32f02e1c{0%{color:transparent}75%{color:orange}to{color:transparent}}@keyframes dimdot-data-v-32f02e1c{0%{color:transparent}75%{color:orange}to{color:transparent}}@media screen and (min-width:414px){#hero .hero-content[data-v-32f02e1c]{align-items:center;background:rgba(0,0,0,.871);display:flex;flex-direction:column;justify-content:center}#hero .hero-content h1.hero-title[data-v-32f02e1c]{font-size:15rem;width:75%}#hero .hero-content h3.hero-subtitle[data-v-32f02e1c]{font-size:3rem}}","",{version:3,sources:["webpack://./resources/js/Themes/default/Components/Hero.vue"],names:[],mappings:"AAmCA,+BAKI,yBAAA,CACA,iCAAA,CAFA,oCAAA,CAGA,UAAA,CALA,WAAA,CACA,iBAAA,CAFA,UA5BJ,CAoCI,6CAGI,qBAAA,CADA,aAAA,CAOA,eAAA,CARA,eAAA,CAKA,eAAA,CADA,YAAA,CADA,SAAA,CAMA,SApCR,CAqCQ,kDAEI,gEAAA,CAAA,wDAAA,CADA,YAlCZ,CAoCI,gDAEI,SAnCR,CAoCA,+BAKI,qBAAA,CAGA,iBAAA,CAJA,WAAA,CAFA,QAAA,CAIA,YAAA,CALA,iBAAA,CAMA,oBAAA,CAJA,0BA5BJ,CAkCA,0CACI,GACI,iBA/BN,CAgCE,IACI,YA9BN,CA+BE,GACI,iBA7BN,CACF,CAsBA,kCACI,GACI,iBA/BN,CAgCE,IACI,YA9BN,CA+BE,GACI,iBA7BN,CACF,CA8BA,oCAEQ,qCAII,kBAAA,CAHA,2BAAA,CACA,YAAA,CACA,qBAAA,CAEA,sBA7BV,CA8BU,mDACI,eAAA,CACA,SA5Bd,CA6BU,sDACI,cA3Bd,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.hero-content\n    width: 100%\n    height: 100%\n    padding: 60px 20px\n    background-color: #111911f0\n    backdrop-filter: blur(5px)\n    -webkit-backdrop-filter: blur(5px)\n    color: #fff\n    // z-index:1\n    h1.hero-title\n        line-height: 90%\n        font-size: 5em\n        border: 3px solid #fff\n        width: 60%\n        padding: 1rem\n        margin-top: 50px\n        // color: #333\n        // font-family: 'Calistoga', cursive\n        font-weight: 800\n        z-index:2\n        .dot\n            color: orange\n            animation: dimdot 1s ease-in-out infinite\n    h3.hero-subtitle\n        // color: #333\n        z-index:2\na.hero-scroll\n    position: absolute\n    left: 50%\n    transform: translateX(-50%)\n    bottom: 20px\n    border: 1px solid #aaa\n    padding: 10px\n    text-decoration: none\n    border-radius: 50%  \n@keyframes dimdot\n    0%\n        color: transparent\n    75%\n        color: orange\n    100%\n        color: transparent\n\n@media screen and(min-width: 414px)\n    #hero\n        .hero-content\n            background: #000000de\n            display: flex\n            flex-direction: column\n            align-items: center\n            justify-content: center\n            h1.hero-title\n                font-size: 15rem\n                width: 75%\n            h3.hero-subtitle\n                font-size: 3rem\n"],sourceRoot:""}]);const r=i},8472:(n,e,t)=>{t.r(e),t.d(e,{default:()=>s});const A={name:"Hero",data:function(){return{}}};var o=t(3379),a=t.n(o),i=t(3315),r={insert:"head",singleton:!1};a()(i.Z,r);i.Z.locals;const s=(0,t(1900).Z)(A,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",{staticClass:"pa-0",staticStyle:{position:"relative"},attrs:{"fill-height":"",fluid:""}},[t("div",{staticClass:"hero-content "},[t("h1",{staticClass:"hero-title"},[n._v("\n            Man"),t("span",{staticClass:"d-none d-sm-inline"},[n._v("dita"),t("span",{staticClass:"dot"},[n._v(".")])]),n._v(" "),t("span",{staticClass:"d-sm-none"},[t("span",[t("br"),n._v("Di")]),n._v(" "),t("span",[t("br"),n._v("Ta"),t("span",{staticClass:"dot"},[n._v(".")])])])]),n._v(" "),t("h3",{staticClass:"hero-subtitle"},[n._v("Mandiri, Disiplin, Bertakwa")]),n._v(" "),t("p",{staticClass:"mt-5 black--text"})]),n._v(" "),t("a",{staticClass:"hero-scroll",attrs:{href:"#profil"}},[t("v-icon",{attrs:{color:"white"}},[n._v("mdi-chevron-down")])],1)])}),[],!1,null,"32f02e1c",null).exports}}]);
//# sourceMappingURL=472.js.map