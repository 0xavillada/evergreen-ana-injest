(function(){"use strict";var t={6913:function(t,e,n){var r=n(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Analytics logo",src:"https://www.irisidea.com/wp-content/uploads/2017/11/datapump_3.png"}}),e("Ingestion",{attrs:{msg:"Analytics data ingestion"}})],1)},o=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),e("b-alert",{staticClass:"alert-btn",attrs:{variant:"success",dismissible:""},model:{value:t.showSuccess,callback:function(e){t.showSuccess=e},expression:"showSuccess"}},[t._v(" File formated and saved! ")]),e("b-alert",{staticClass:"alert-btn",attrs:{variant:"danger",dismissible:""},model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[t._v(" Error, try again! ")]),e("b-overlay",{attrs:{show:t.loading,rounded:"sm"}},[e("div",{staticClass:"mt-4 d-flex w-100 justify-content-center"},[e("div",{staticClass:"input-label"},[t._v(" Xlsx file URL: ")]),e("div",[e("b-input",{attrs:{type:"text"},model:{value:t.fileURL,callback:function(e){t.fileURL=e},expression:"fileURL"}})],1)]),e("div",[e("b-button",{staticClass:"mt-4",attrs:{disabled:t.fileURL.length<3,variant:"outline-primary"},on:{click:function(e){return t.formatFile(t.fileURL)}}},[t._v("Format and Analyze")])],1)])],1)},s=[],l=n(306),u={name:"HelloWorld",props:{msg:String},data(){return{fileURL:"",externalServiceURL:"https://v2.convertapi.com/convert/xlsx/to/csv?Secret=6mSJbYN6n0hm4GTj&StoreFile=true",apiServiceURL:"http://40.118.66.81",loading:!1,showSuccess:!1,showError:!1}},methods:{async formatFile(t){this.loading=!0;let e=t.split("/");e=e[e.length-1];try{let n=await l.Z.post(this.externalServiceURL,{File:t},{headers:{"Content-Type":"multipart/form-data"}});await l.Z.post(this.apiServiceURL+"/api/ingesta_archivos_xlsx",{fileData:{OriginalFile:e,Status:"Loaded",...n.data.Files[0]}},{headers:{"Content-Type":"application/json"}}),this.showSuccess=!0}catch(n){this.showError=!0}this.loading=!1,this.fileURL=""}}},c=u,f=n(1001),d=(0,f.Z)(c,a,s,!1,null,"213d8e94",null),p=d.exports,v={name:"App",components:{Ingestion:p}},h=v,m=(0,f.Z)(h,i,o,!1,null,null,null),g=m.exports,b=n(4359),w=n(7244);n(7024);r["default"].prototype.$http=l.Z,r["default"].config.productionTip=!1,r["default"].use(b.XG7),r["default"].use(w.A7),new r["default"]({render:t=>t(g)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,o<a&&(a=o));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],l=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(e&&e(r);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkevergreen_ana_injest"]=self["webpackChunkevergreen_ana_injest"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6913)}));r=n.O(r)})();
//# sourceMappingURL=app.e638c8b3.js.map