(function(a){function t(t){for(var r,i,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],r=!0,i=1;i<e.length;i++){var o=e[i];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),a=l(l.s=e[0]))}return a}var r={},s={app:0},n=[];function i(a){return l.p+"js/"+({about:"about"}[a]||a)+"."+{about:"09e6d27f"}[a]+".js"}function l(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(a){var t=[],e=s[a];if(0!==e)if(e)t.push(e[2]);else{var r=new Promise((function(t,r){e=s[a]=[t,r]}));t.push(e[2]=r);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=i(a);var c=new Error;n=function(t){o.onerror=o.onload=null,clearTimeout(d);var e=s[a];if(0!==e){if(e){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,e[1](c)}s[a]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(t)},l.m=a,l.c=r,l.d=function(a,t,e){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)l.d(e,r,function(t){return a[t]}.bind(null,r));return e},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="/boardgames/",l.oe=function(a){throw console.error(a),a};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary","clipped-left":"",dark:""}},[e("v-app-bar-nav-icon"),e("v-app-bar-title",[a._v("Boardgame Master")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{on:{click:a.setting}},[a._v("mdi-account-settings")])],1)],1),e("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:"","hide-overlay":""},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},a._l(a.menu,(function(t){return e("v-list-item",{key:t.title},[e("v-list-item-content",[e("v-list-item-title",{on:{click:function(e){a.currentview=t.title}}},[a._v(a._s(t.title))])],1)],1)})),1)],1),e("v-main",{attrs:{app:""}},["Coyote"===a.currentview?e("Coyote",{attrs:{playerlist:a.playerlist}}):a._e(),"Ito"===a.currentview?e("Ito",{attrs:{playerlist:a.playerlist}}):a._e()],1),e("v-dialog",{attrs:{"max-width":"30vw"},model:{value:a.setting_dialog,callback:function(t){a.setting_dialog=t},expression:"setting_dialog"}},[e("v-card",[e("v-toolbar",{attrs:{color:"orange lighten-1",dark:""}},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[a._v("Player list")]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:a.add_account}},[e("v-icon",[a._v("mdi-account-plus")])],1)],1),e("v-simple-table",{scopedSlots:a._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[a._v(" Name ")]),e("th",{staticClass:"text-left"},[a._v(" Ctrl ")])])]),e("tbody",a._l(a.playerlist,(function(t,r){return e("tr",{key:r},[e("td",[e("v-text-field",{model:{value:t.name,callback:function(e){a.$set(t,"name",e)},expression:"item.name"}})],1),e("td",[e("v-btn",{attrs:{icon:""},on:{click:function(t){return a.remove_account(r)}}},[e("v-icon",[a._v("mdi-account-minus")])],1)],1)])})),0)]},proxy:!0}])})],1)],1)],1)},n=[],i=(e("4de4"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"80vw"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:a._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[a._v(" Cardlist ")]),e("th",{staticClass:"text-left"},[a._v(" Used ")])])]),e("tbody",a._l(a.cards,(function(t){return e("tr",{key:t.value},[e("td",[a._v(a._s(t.value))]),e("td",[t.used?e("v-icon",[a._v(" mdi-check ")]):e("h5",[a._v(" - ")])],1)])})),0)]},proxy:!0}])}),e("v-divider"),e("v-card-actions",[a.playing?e("v-btn",{attrs:{color:"error"},on:{click:a.finish}},[a._v(" ゲームを終了する ")]):e("v-btn",{attrs:{color:"success"},on:{click:a.start}},[a._v(" ゲームを開始する ")]),e("v-breadcrumbs",{attrs:{divider:" "}}),e("v-btn",{attrs:{color:"info"},on:{click:a.deal}},[a._v(" カードを配る ")]),e("v-breadcrumbs",{attrs:{divider:" "}}),e("v-btn",{attrs:{color:"info"},on:{click:a.review}},[a._v(" カードを再表示する ")])],1),e("v-dialog",{attrs:{"max-width":"50vw"},model:{value:a.dealcards_dialog,callback:function(t){a.dealcards_dialog=t},expression:"dealcards_dialog"}},[e("v-card",{staticClass:"mx-auto"},[e("v-toolbar",{attrs:{color:"indigo",dark:""}},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[a._v("Deal Cards")])],1),e("v-expansion-panels",a._l(a.playercards,(function(t,r){return e("v-expansion-panel",{key:r},[e("v-expansion-panel-header",[a._v(" "+a._s(t.player)+" "),e("v-breadcrumbs",{attrs:{divider:" "}}),a._v(" "+a._s(t.card)+" ")],1),e("v-expansion-panel-content",[e("v-btn",{attrs:{text:""},on:{click:function(e){return a.clipboard(t.message)}}},[a._v(a._s(t.player)+"へ伝える他プレイヤーのカード情報をコピー")])],1)],1)})),1)],1)],1)],1)}),l=[],o=(e("b0c0"),{name:"Coyote",props:["playerlist"],data:function(){return{cards:[],playercards:[],dealcards_dialog:!1,playing:!1}},created:function(){this.initialize()},methods:{start:function(){this.playing=!0,this.playercards=[],this.deal()},finish:function(){this.playing=!1,this.reset_used()},deal:function(){for(var a=!1,t=0;t<this.playerlist.length;t++)do{var e=Math.floor(Math.random()*this.cards.length);if(!1===this.cards[e].used){var r=void 0;for(r=0;r<this.playercards.length;r++)if(this.playercards[r].player===this.playerlist[t].name){this.playercards[r].card=this.cards[e].value;break}r>=this.playercards.length&&this.playercards.push({player:this.playerlist[t].name,card:this.cards[e].value}),"0(Reset)"===this.cards[e].value&&(a=!0),this.cards[e].used=!0;break}}while(1);a&&this.reset_used();for(var s=0;s<this.playercards.length;s++){this.playercards[s].message="";for(var n=0;n<this.playercards.length;n++)s!==n&&(this.playercards[s].message+=this.playercards[n].player+"さんのカードは、「"+this.playercards[n].card+"」です\r\n")}this.dealcards_dialog=!0},review:function(){this.dealcards_dialog=!0},reset_used:function(){for(var a=0;a<this.cards.length;a++)this.cards[a].used=!1},clipboard:function(a){navigator.clipboard.writeText(a).catch((function(a){alert("Failed to copy texts. Cause: "+a.text)}))},initialize:function(){this.cards=[],this.cards.push({value:"20",used:!1}),this.cards.push({value:"15",used:!1}),this.cards.push({value:"15",used:!1}),this.cards.push({value:"10",used:!1}),this.cards.push({value:"10",used:!1}),this.cards.push({value:"10",used:!1}),this.cards.push({value:"7",used:!1}),this.cards.push({value:"7",used:!1}),this.cards.push({value:"7",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"5",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"4",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"3",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"2",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"1",used:!1}),this.cards.push({value:"0",used:!1}),this.cards.push({value:"0",used:!1}),this.cards.push({value:"0",used:!1}),this.cards.push({value:"0(Reset)",used:!1}),this.cards.push({value:"x2",used:!1}),this.cards.push({value:"Max->0",used:!1})}}}),c=o,d=e("2877"),u=e("6544"),p=e.n(u),v=e("5bc1"),h=e("2bc5"),f=e("8336"),m=e("b0af"),b=e("99d9"),y=e("169a"),_=e("ce7e"),g=e("cd55"),x=e("49e2"),V=e("c865"),w=e("0393"),k=e("132d"),C=e("1f4f"),T=e("71d9"),P=e("2a7f"),j=Object(d["a"])(c,i,l,!1,null,null,null),E=j.exports;p()(j,{VAppBarNavIcon:v["a"],VBreadcrumbs:h["a"],VBtn:f["a"],VCard:m["a"],VCardActions:b["a"],VDialog:y["a"],VDivider:_["a"],VExpansionPanel:g["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:V["a"],VExpansionPanels:w["a"],VIcon:k["a"],VSimpleTable:C["a"],VToolbar:T["a"],VToolbarTitle:P["a"]});var O=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"80vw"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:a._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[a._v(" Cardlist ")]),e("th",{staticClass:"text-left"},[a._v(" Used ")])])]),e("tbody",a._l(a.cards,(function(t){return e("tr",{key:t.value},[e("td",[a._v(a._s(t.value))]),e("td",[t.used?e("v-icon",[a._v(" mdi-check ")]):e("h5",[a._v(" - ")])],1)])})),0)]},proxy:!0}])}),e("v-divider"),e("v-card-actions",[e("v-btn",{attrs:{color:"info"},on:{click:a.deal}},[a._v(" カードを配る ")]),e("v-breadcrumbs",{attrs:{divider:" "}}),e("v-btn",{attrs:{color:"info"},on:{click:a.review}},[a._v(" カードを再表示する ")]),e("v-breadcrumbs",{attrs:{divider:" "}}),e("v-select",{attrs:{items:a.num_hands_list,filled:"",label:"手札枚数"},model:{value:a.num_hands,callback:function(t){a.num_hands=t},expression:"num_hands"}})],1),e("v-dialog",{attrs:{"max-width":"50vw"},model:{value:a.dealcards_dialog,callback:function(t){a.dealcards_dialog=t},expression:"dealcards_dialog"}},[e("v-card",{staticClass:"mx-auto"},[e("v-toolbar",{attrs:{color:"indigo",dark:""}},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[a._v("Deal Cards")])],1),e("v-expansion-panels",a._l(a.playercards,(function(t,r){return e("v-expansion-panel",{key:r},[e("v-expansion-panel-header",[a._v(" "+a._s(t.player)+" ")]),e("v-expansion-panel-content",[a._v(" "+a._s(t.cardlist_str)+" "),e("v-breadcrumbs",{attrs:{divider:" "}}),e("v-btn",{attrs:{text:""},on:{click:function(e){return a.clipboard(t.message)}}},[a._v(a._s(t.player)+"へ伝えるカード情報をコピー")])],1)],1)})),1)],1)],1)],1)},I=[],S=(e("a15b"),{name:"Ito",props:["playerlist"],data:function(){return{num_hands:1,num_hands_list:[1,2,3],playercards:[],dealcards_dialog:!1,playing:!1}},created:function(){this.initialize()},methods:{deal:function(){this.playercards=[];for(var a=[],t=0;t<this.playerlist.length;t++)for(var e=0;e<this.num_hands;e++)do{var r=Math.floor(99*Math.random())+1,s=void 0;for(s=0;s<a.length;s++)if(r===a[s])break;if(s>=a.length){for(a.push(r),s=0;s<this.playercards.length;s++)if(this.playercards[s].player===this.playerlist[t].name){this.playercards[s].cardlist.push(r);break}s>=this.playercards.length&&this.playercards.push({player:this.playerlist[t].name,cardlist:[r]})}}while(0);for(var n=0;n<this.playercards.length;n++)this.playercards[n].cardlist_str=this.playercards[n].cardlist.join(","),this.playercards[n].message=this.playercards[n].player+"さんのカードは、「"+this.playercards[n].cardlist_str+"」です";this.dealcards_dialog=!0},review:function(){this.dealcards_dialog=!0},clipboard:function(a){navigator.clipboard.writeText(a).catch((function(a){alert("Failed to copy texts. Cause: "+a.text)}))},initialize:function(){}}}),A=S,B=e("b974"),M=Object(d["a"])(A,O,I,!1,null,null,null),D=M.exports;p()(M,{VAppBarNavIcon:v["a"],VBreadcrumbs:h["a"],VBtn:f["a"],VCard:m["a"],VCardActions:b["a"],VDialog:y["a"],VDivider:_["a"],VExpansionPanel:g["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:V["a"],VExpansionPanels:w["a"],VIcon:k["a"],VSelect:B["a"],VSimpleTable:C["a"],VToolbar:T["a"],VToolbarTitle:P["a"]});var L={name:"App",components:{Coyote:E,Ito:D},data:function(){return{playerlist:[],setting_dialog:!1,currentview:"Coyote",menu:[{title:"Coyote"},{title:"Ito"}]}},methods:{setting:function(){this.setting_dialog=!0},add_account:function(){this.playerlist.push({name:""})},remove_account:function(a){this.playerlist=this.playerlist.filter((function(t){return t!==a}))}}},$=L,N=e("7496"),z=e("40dc"),H=e("bb78"),F=e("8860"),J=e("da13"),R=e("5d23"),U=e("f6c4"),q=e("f774"),G=e("2fa4"),K=e("8654"),Q=Object(d["a"])($,s,n,!1,null,null,null),W=Q.exports;p()(Q,{VApp:N["a"],VAppBar:z["a"],VAppBarNavIcon:v["a"],VAppBarTitle:H["a"],VBtn:f["a"],VCard:m["a"],VDialog:y["a"],VIcon:k["a"],VList:F["a"],VListItem:J["a"],VListItemContent:R["a"],VListItemTitle:R["b"],VMain:U["a"],VNavigationDrawer:q["a"],VSimpleTable:C["a"],VSpacer:G["a"],VTextField:K["a"],VToolbar:T["a"],VToolbarTitle:P["a"]});e("d3b7"),e("3ca3"),e("ddb0");var X=e("8c4f"),Y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("Coyote")},Z=[],aa={name:"Home",components:{Coyote:E}},ta=aa,ea=Object(d["a"])(ta,Y,Z,!1,null,null,null),ra=ea.exports;r["a"].use(X["a"]);var sa=[{path:"/",name:"Home",component:ra},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],na=new X["a"]({mode:"history",base:"/boardgames/",routes:sa}),ia=na,la=e("2f62");r["a"].use(la["a"]);var oa=new la["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ca=e("f309");r["a"].use(ca["a"]);var da=new ca["a"]({}),ua=e("4eb5"),pa=e.n(ua);r["a"].config.productionTip=!1,new r["a"]({router:ia,store:oa,vuetify:da,VueClipboard:pa.a,render:function(a){return a(W)}}).$mount("#app")}});
//# sourceMappingURL=app.93502959.js.map