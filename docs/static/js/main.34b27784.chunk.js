(this["webpackJsonped-base-proto"]=this["webpackJsonped-base-proto"]||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=(a(20),a(21),a(22),a(3)),o=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",null,e.text))},i=function(e){var t=e.item,a=t.fields.content_name?t.fields.content_name[0]:"\u30bf\u30a4\u30c8\u30eb\u306a\u3057",n=t.fields.description?t.fields.description[0]:"--",c=t.fields.url?t.fields.url[0]:null;return r.a.createElement("div",{className:"item"},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"description"},n),!c.includes("http")||(c.match(/http/g)||[]).length>1?r.a.createElement("div",{className:"link-error"},"\u30ea\u30f3\u30af\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093"):r.a.createElement("button",{className:"link-button",type:"button",onClick:function(){window.open(c,"_blank")}},"\u8a73\u7d30\u3092\u898b\u308b\uff08\u5916\u90e8\u30b5\u30a4\u30c8)"))},u=function(e){var t=e.search,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement("form",{className:"search"},r.a.createElement("p",null,r.a.createElement("input",{value:l,onChange:function(e){o(e.target.value)},type:"text",placeholder:"\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u5165\u529b\uff08\u4f8b\uff1azoom\uff09"})),r.a.createElement("p",null,r.a.createElement("input",{onClick:function(e){e.preventDefault(),t(l)},type:"submit",value:"\u691c\u7d22"})))},m=a(2),p={items:[],errorMessage:null},E=function(e,t){switch(t.type){case"SEARCH_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{errorMessage:null});case"SEARCH_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{items:t.payload,errorMessage:null});case"SEARCH_FAILURE":return Object(m.a)(Object(m.a)({},e),{},{errorMessage:t.error});default:return e}},d=a(14),f=a.n(d),b=function(){var e=Object(n.useReducer)(E,p),t=Object(s.a)(e,2),a=t[0],c=t[1],l=a.items,m=a.errorMessage;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(o,{text:"\u30aa\u30f3\u30e9\u30a4\u30f3\u6388\u696dLab"}),r.a.createElement(u,{search:function(e){c({type:"SEARCH_REQUEST"}),f()("https://198182tj3g.execute-api.ap-northeast-1.amazonaws.com/edbaseapi?q=".concat(e,"&size=50")).then((function(e){"error"!==e.data?c({type:"SEARCH_SUCCESS",payload:e.data}):c({type:"SEARCH_FAILURE",error:"\u898b\u3064\u304b\u308a\u307e\u305b\u3093"})}))}}),r.a.createElement("div",{className:"items"},m?r.a.createElement("div",{className:"errorMessage"},m):l.map((function(e,t){return r.a.createElement(i,{key:"".concat(t),item:e})})))))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.34b27784.chunk.js.map