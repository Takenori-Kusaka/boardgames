(function(t){function e(e){for(var s,i,o=e[0],u=e[1],l=e[2],c=0,p=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"09e6d27f"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(t);var l=new Error;n=function(e){u.onerror=u.onload=null,clearTimeout(c);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}r[t]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/boardgames/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("router-view")],1)],1)},n=[],i={name:"App",data:function(){return{}}},o=i,u=a("2877"),l=a("6544"),c=a.n(l),d=a("7496"),p=a("40dc"),h=a("8336"),v=a("132d"),f=a("adda"),m=a("f6c4"),b=a("2fa4"),y=Object(u["a"])(o,r,n,!1,null,null,null),g=y.exports;c()(y,{VApp:d["a"],VAppBar:p["a"],VBtn:h["a"],VIcon:v["a"],VImg:f["a"],VMain:m["a"],VSpacer:b["a"]});a("d3b7"),a("3ca3"),a("ddb0");var _=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Coyote")},k=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"80vw"}},[a("v-app-bar",{attrs:{dark:"",color:"pink"}},[a("v-toolbar-title",[t._v("Coyote")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{on:{click:t.setting}},[t._v("mdi-account-settings")])],1)],1),a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Cardlist ")]),a("th",{staticClass:"text-left"},[t._v(" Used ")])])]),a("tbody",t._l(t.cards,(function(e){return a("tr",{key:e.value},[a("td",[t._v(t._s(e.value))]),a("td",[e.used?a("v-icon",[t._v(" mdi-check ")]):a("h5",[t._v(" - ")])],1)])})),0)]},proxy:!0}])}),a("v-divider"),a("v-card-actions",[t.playing?a("v-btn",{on:{click:t.finish}},[t._v(" ゲームを終了する ")]):a("v-btn",{on:{click:t.start}},[t._v(" ゲームを開始する ")]),a("v-breadcrumbs",{attrs:{divider:" "}}),a("v-btn",{on:{click:t.deal}},[t._v(" カードを配る ")]),a("v-breadcrumbs",{attrs:{divider:" "}}),a("v-btn",{on:{click:t.review}},[t._v(" カードを再表示する ")])],1),a("v-dialog",{attrs:{"max-width":"30vw"},model:{value:t.setting_dialog,callback:function(e){t.setting_dialog=e},expression:"setting_dialog"}},[a("v-card",[a("v-toolbar",{attrs:{color:"orange lighten-1",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Player list")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.add_account}},[a("v-icon",[t._v("mdi-account-plus")])],1)],1),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Name ")]),a("th",{staticClass:"text-left"},[t._v(" Ctrl ")])])]),a("tbody",t._l(t.playerlist,(function(e,s){return a("tr",{key:s},[a("td",[a("v-text-field",{model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("td",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.remove_account(s)}}},[a("v-icon",[t._v("mdi-account-minus")])],1)],1)])})),0)]},proxy:!0}])})],1)],1),a("v-dialog",{attrs:{"max-width":"50vw"},model:{value:t.dealcards_dialog,callback:function(e){t.dealcards_dialog=e},expression:"dealcards_dialog"}},[a("v-card",{staticClass:"mx-auto"},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Deal Cards")])],1),a("v-expansion-panels",t._l(t.playercards,(function(e,s){return a("v-expansion-panel",{key:s},[a("v-expansion-panel-header",[t._v(" "+t._s(e.player)+" "),a("v-breadcrumbs",{attrs:{divider:" "}}),t._v(" "+t._s(e.card)+" ")],1),a("v-expansion-panel-content",[a("v-btn",{attrs:{text:""},on:{click:function(a){return t.clipboard(e.message)}}},[t._v(t._s(e.player)+"へ伝える他プレイヤーのカード情報をコピー")])],1)],1)})),1)],1)],1)],1)},V=[],C=(a("b0c0"),a("4de4"),{name:"Coyote",data:function(){return{cards:[],playerlist:[],playercards:[],dealcards_dialog:!1,setting_dialog:!1,playing:!1}},created:function(){this.initialize()},methods:{setting:function(){this.setting_dialog=!0},start:function(){this.playing=!0,this.playercards=[],this.deal()},finish:function(){this.playing=!1,this.reset_used()},deal:function(){for(var t=!1,e=0;e<this.playerlist.length;e++)do{var a=Math.floor(Math.random()*this.cards.length);if(!1===this.cards[a].used){var s=void 0;for(s=0;s<this.playercards.length;s++)if(this.playercards[s].player===this.playerlist[e].name){this.playercards[s].card=this.cards[a].value;break}s>=this.playercards.length&&this.playercards.push({player:this.playerlist[e].name,card:this.cards[a].value}),"0(Reset)"===this.cards[a].value&&(t=!0),this.cards[a].used=!0;break}}while(1);t&&this.reset_used();for(var r=0;r<this.playercards.length;r++){this.playercards[r].message="";for(var n=0;n<this.playercards.length;n++)r!==n&&(this.playercards[r].message+=this.playercards[n].player+"さんのカードは、「"+this.playercards[n].card+"」です\r\n")}this.dealcards_dialog=!0},review:function(){this.dealcards_dialog=!0},reset_used:function(){for(var t=0;t<this.cards.length;t++)this.cards[t].used=!1},add_account:function(){this.playerlist.push({name:""})},remove_account:function(t){this.playerlist=this.playerlist.filter((function(e){return e!==t}))},clipboard:function(t){navigator.clipboard.writeText(t).catch((function(t){alert("Failed to copy texts. Cause: "+t.text)}))},onCopy:function(t){alert("You just copied: "+t.text)},onError:function(t){alert("Failed to copy texts")},initialize:function(){this.cards=[],this.cards.push({value:"20",used:!1}),this.cards.push({value:"15",used:!1}),this.cards.push({value:"15",used:!1}),this.cards.push({value:"10",used:!1}),this.cards.push({value:"10",used:!1}),this.cards.push({value:"10",used:!1}),this.cards.push({value:"7",used:!1}),this.cards.push({value:"7",used:!1}),this.cards.push({value:"7",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"0",used:!1}),this.cards.push({value:"0",used:!1}),this.cards.push({value:"0",used:!1}),this.cards.push({value:"0(Reset)",used:!1}),this.cards.push({value:"x2",used:!1}),this.cards.push({value:"Max->0",used:!1})}}}),j=C,O=a("5bc1"),P=a("2bc5"),E=a("b0af"),S=a("99d9"),T=a("169a"),A=a("ce7e"),M=a("cd55"),B=a("49e2"),$=a("c865"),I=a("0393"),L=a("1f4f"),D=a("8654"),F=a("71d9"),H=a("2a7f"),N=Object(u["a"])(j,w,V,!1,null,null,null),R=N.exports;c()(N,{VAppBar:p["a"],VAppBarNavIcon:O["a"],VBreadcrumbs:P["a"],VBtn:h["a"],VCard:E["a"],VCardActions:S["a"],VDialog:T["a"],VDivider:A["a"],VExpansionPanel:M["a"],VExpansionPanelContent:B["a"],VExpansionPanelHeader:$["a"],VExpansionPanels:I["a"],VIcon:v["a"],VSimpleTable:L["a"],VSpacer:b["a"],VTextField:D["a"],VToolbar:F["a"],VToolbarTitle:H["a"]});var z={name:"Home",components:{Coyote:R}},J=z,q=Object(u["a"])(J,x,k,!1,null,null,null),U=q.exports;s["a"].use(_["a"]);var Y=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],G=new _["a"]({mode:"history",base:"/boardgames/",routes:Y}),K=G,Q=a("2f62");s["a"].use(Q["a"]);var W=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=a("f309");s["a"].use(X["a"]);var Z=new X["a"]({}),tt=a("4eb5"),et=a.n(tt);s["a"].config.productionTip=!1,new s["a"]({router:K,store:W,vuetify:Z,VueClipboard:et.a,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.61e6423c.js.map