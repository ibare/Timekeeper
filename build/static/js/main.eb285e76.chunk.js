(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),s=a.n(r),l=a(36),i=a(21),o=a(1),d=a(10);const m=(e,t={})=>({type:e,payload:Object(d.a)({},t)}),u=()=>m("tick next time");var p=a(14),b=a(38),E=a(88),g=a(95),f=a(98),h=a(94),O=a(97),j=a(99),y=a(93);function w(){const e=Object(i.a)(["\n  width: ",";\n"]);return w=function(){return e},e}function x(){const e=Object(i.a)(["\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n\n  th,\n  td {\n    padding: 12px;\n    background: white;\n    border: 1px solid ",";\n  }\n\n  & .center {\n    text-align: center;\n  }\n\n  & thead th {\n    padding: 6px;\n    font-size: 12px;\n    font-weight: 400;\n    text-align: left;\n    background: ",";\n  }\n\n  & tbody td {\n    font-weight: 200;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n\n  & .underline {\n    border-bottom: 1px solid ",";\n  }\n\n  @keyframes blink {\n    0% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0.5;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return x=function(){return e},e}const v=o.default.table(x(),"#ddd","#f0f0f0","#ddd");o.default.th(w(),e=>e?"".concat(e,"px"):"100%");var k=a(100),S=a(91);const N=e=>String(e).padStart(2,"0"),L=e=>"".concat(N(Math.floor(e/60)),":").concat(N(e%60));var D=Object(p.b)(()=>({}),e=>({removeSection:t=>e((e=>m("remove section",{id:e}))(t)),startDiscuss:t=>e((e=>m("start discuss",{id:e}))(t)),stopDiscuss:t=>e((e=>m("stop discuss",{id:e}))(t))}))(function({id:e,est:t,act:a,title:n,isDiscuss:r,removeSection:s,startDiscuss:l,stopDiscuss:i}){const o=60*t;return c.a.createElement("tr",null,c.a.createElement("td",{className:"center"},c.a.createElement(j.a,{color:"gray",style:{marginRight:5}},L(o))),c.a.createElement("td",{className:"center"},c.a.createElement(j.a,{size:"large",color:a<=0?"lightgray":"#444"},L(a))),c.a.createElement("td",{style:{padding:0}},c.a.createElement(k.a,null,c.a.createElement(j.a,{size:"large",style:{margin:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},n),c.a.createElement(S.a,{values:[{value:a,color:o-a<0?"red":null}],style:{width:"100%",marginTop:-10},max:o,background:"rgba(0,0,0,0)",thickness:"large",opacity:.2}))),c.a.createElement("td",{className:"center"},c.a.createElement(O.a,{plain:!0,size:"small",color:"#ccc",style:r?{color:"black",animation:"blink 1s linear infinite"}:null,onClick:()=>r?i(e):l(e),label:"Discuss"}),c.a.createElement(O.a,{plain:!0,size:"small",style:{marginLeft:14},label:"\xb7\xb7\xb7",onClick:()=>s(e)})))});var z=Object(p.b)(e=>({sectionList:e.sectionList}))(function({sectionList:e}){const t=(t,a=1)=>L(e.map(e=>e[t]).reduce((e,t)=>e+t,0)*a);return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"center",colSpan:"2",width:"150"},"Time"),c.a.createElement("th",{className:"underline",rowSpan:"2"},"Item"),c.a.createElement("th",{className:"center underline",rowSpan:"2",width:"120"},"Behavior")),c.a.createElement("tr",{className:"underline"},c.a.createElement("th",{className:"center"},"Est."),c.a.createElement("th",{className:"center"},"Act."))),c.a.createElement("tbody",null,e.map((e,t)=>c.a.createElement(D,Object.assign({},e,{key:t})))),c.a.createElement("thead",null,c.a.createElement("tr",{className:"underline"},c.a.createElement("th",{className:"center"},c.a.createElement(j.a,null,t("est",60))),c.a.createElement("th",{className:"center"},c.a.createElement(j.a,null,t("act"))),c.a.createElement("th",{className:"underline",colSpan:"2"})))))});function C(){const e=Object(i.a)(["\n  padding: 20px;\n  color: #aaa;\n"]);return C=function(){return e},e}const T=Object(o.default)(b.a)(C()),B=5;var I=Object(p.b)(()=>{},e=>({addSection:(t,a)=>e(((e,t)=>m("add section",{title:e,est:t}))(t,a))}))(function({addSection:e}){let t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(B),o=Object(l.a)(i,2),d=o[0],m=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{style:{padding:20}},c.a.createElement(E.a,{pad:"xsmall",align:"baseline",style:{marginBottom:40}},c.a.createElement(b.a,{style:{width:200}},c.a.createElement(g.a,{type:"digital"})),c.a.createElement(b.a,{basis:"full"},c.a.createElement(f.a,{value:r,placeholder:"\ub17c\uc758 \uc8fc\uc81c",onChange:e=>{s(e.target.value)}})),c.a.createElement(b.a,{basis:"1/4"},c.a.createElement(h.a,{options:[1,5,10,15,20,25,30,40],value:d,onChange:({option:e})=>{m(Number(e))}})),c.a.createElement(b.a,{align:"end",style:{width:60,paddingTop:5}},c.a.createElement(O.a,{icon:c.a.createElement(y.a,null),onClick:()=>{e(r,d),s(""),m(B)}}))),c.a.createElement(z,null)),c.a.createElement(T,null,c.a.createElement(j.a,{size:"xxsmall"},"Time Keeper \xa9 Woowa Brothers Corp. All right Reserved")))}),J=a(16),A=a(58),F=a(17),M=a.n(F),R=a(27),K=M.a.mark(G),P=M.a.mark(H),W=M.a.mark(Q);const q=e=>new Promise(t=>setTimeout(t,e));function G(){var e;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,q(1e4);case 3:return t.next=5,Object(R.c)(e=>e);case 5:e=t.sent,localStorage.setItem("timekeeper",JSON.stringify(e)),t.next=0;break;case 9:case"end":return t.stop()}},K)}function H(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,q(1e3);case 3:return e.next=5,Object(R.b)(u());case 5:e.next=0;break;case 7:case"end":return e.stop()}},P)}function Q(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([H(),G()]);case 2:case"end":return e.stop()}},W)}var U=a(96);const V={sectionList:[]};const X=Object(A.a)(),Y=Object(J.d)((e,t)=>{if(void 0===e){const t=localStorage.getItem("timekeeper");e=t?JSON.parse(t):V}switch(t.type){case"add section":return Object(d.a)(Object(d.a)({},e),{},{sectionList:[...e.sectionList,{id:Object(U.a)(),title:t.payload.title,est:t.payload.est,act:0,isDiscuss:!1}]});case"remove section":return Object(d.a)(Object(d.a)({},e),{},{sectionList:[...e.sectionList.filter(e=>e.id!==t.payload.id)]});case"start discuss":return Object(d.a)(Object(d.a)({},e),{},{sectionList:[...e.sectionList.map(e=>Object(d.a)(Object(d.a)({},e),{},{isDiscuss:!1})).map(e=>(e.id===t.payload.id&&(e.isDiscuss=!0),e))]});case"stop discuss":return Object(d.a)(Object(d.a)({},e),{},{sectionList:[...e.sectionList.map(e=>(e.id===t.payload.id&&(e.isDiscuss=!1),e))]});case"tick next time":return Object(d.a)(Object(d.a)({},e),{},{sectionList:[...e.sectionList.map(e=>(e.isDiscuss&&e.act++,e))]});default:return Object(d.a)({},e)}},Object(J.a)(X));X.run(Q),s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p.a,{store:Y},c.a.createElement(I,null))),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.eb285e76.chunk.js.map