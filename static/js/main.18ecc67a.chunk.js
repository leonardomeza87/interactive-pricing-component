(this["webpackJsonpinteractive-pricing-component"]=this["webpackJsonpinteractive-pricing-component"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var r,n=c(1),i=c.n(n),s=c(4),l=c.n(s),a=(c(9),c(10),c(2)),j=c(0),o=function(e){var t=e.handleCheck;return Object(j.jsxs)("div",{className:"billing",children:[Object(j.jsx)("p",{children:"Monthly Billing"}),Object(j.jsx)("input",{type:"checkbox",className:"checkbox",onChange:function(e){var c=e.target.checked;t(c)}}),Object(j.jsxs)("p",{children:["Yearly Billing",Object(j.jsx)("span",{className:"discount d-std",children:"25% discount"}),Object(j.jsx)("span",{className:"discount d-alt",children:"-25%"})]})]})},d=function(e){var t=e.sliderValue,c=Object(n.useState)("100k"),r=Object(a.a)(c,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){s(["10k","50k","100k","500k","1M"][t])}),[t]),Object(j.jsx)("div",{className:"pageviews",children:Object(j.jsxs)("p",{children:[i," Pageviews"]})})},b=function(e){var t=e.money,c=e.checked;return Object(j.jsxs)("div",{className:"price",children:[Object(j.jsxs)("strong",{children:["$",t]}),Object(j.jsxs)("p",{children:["/ ",c?"year":"month"]})]})},u=["title","titleId"];function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)c=i[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)c=i[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function p(e,t){var c=e.title,i=e.titleId,s=h(e,u);return n.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:9,height:8,ref:t,"aria-labelledby":i},s),c?n.createElement("title",{id:i},c):null,r||(r=n.createElement("path",{fill:"none",stroke:"#10D8C4",strokeWidth:2,d:"M1 4.134l1.907 1.908L7.949 1"})))}var f,v=n.forwardRef(p),x=(c.p,function(){var e=Object(n.useState)(16..toFixed(2)),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(0),s=Object(a.a)(i,2),l=s[0],u=s[1],O=Object(n.useState)(!1),h=Object(a.a)(O,2),p=h[0],f=h[1],x=Object(n.useState)(2),m=Object(a.a)(x,2),g=m[0],y=m[1],w=[8,12,16,24,36],k=function(e){var t=w[e];if(0!==l){t=12*(t-t*(l/100))}r(t.toFixed(2))};return Object(n.useEffect)((function(){k(g)}),[l]),Object(n.useEffect)((function(){u(p?25:0)}),[p]),Object(j.jsxs)("div",{className:"pricing",children:[Object(j.jsxs)("div",{className:"primary",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)(d,{sliderValue:g}),Object(j.jsx)(b,{money:c,checked:p})]}),Object(j.jsx)("input",{className:"slider",min:"0",max:"4",step:"1",type:"range",style:{"--value":2,"--min":0,"--max":4},onChange:function(e){var t=e.target;console.log(t.value),t.style.setProperty("--value",t.value);var c=t.valueAsNumber;y(c),k(c)}}),Object(j.jsx)(o,{handleCheck:f})]}),Object(j.jsxs)("div",{className:"secondary",children:[Object(j.jsxs)("div",{className:"checklist",children:[Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)(v,{}),Object(j.jsx)("p",{children:"Unlimited websites"})]}),Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)(v,{}),Object(j.jsx)("p",{children:"100% data ownership"})]}),Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)(v,{}),Object(j.jsx)("p",{children:"Email reports"})]})]}),Object(j.jsx)("button",{children:"Start my trial"})]})]})}),m=["title","titleId"];function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var c,r,n=function(e,t){if(null==e)return{};var c,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)c=i[r],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)c=i[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}function w(e,t){var c=e.title,r=e.titleId,i=y(e,m);return n.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:146,height:145,ref:t,"aria-labelledby":r},i),c?n.createElement("title",{id:r},c):null,f||(f=n.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"#CFD8EF"},n.createElement("circle",{cx:63,cy:82,r:62.5}),n.createElement("circle",{cx:105,cy:41,r:40.5}))))}var k=n.forwardRef(w);c.p;var N=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)(k,{className:"circles"}),Object(j.jsx)("h1",{children:"Simple, traffic-based pricing"}),Object(j.jsxs)("div",{className:"p-container",children:[Object(j.jsx)("p",{children:"Sign-up for our 30-day trial."}),Object(j.jsx)("p",{children:"No credit card required."})]})]}),Object(j.jsx)(x,{})]})};l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.18ecc67a.chunk.js.map