(this["webpackJsonpinteractive-pricing-component"]=this["webpackJsonpinteractive-pricing-component"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n,r=c(1),i=c.n(r),s=c(4),l=c.n(s),a=(c(9),c(10),c(2)),j=c(0),o=function(e){var t=e.handleCheck;return Object(j.jsxs)("div",{className:"billing",children:[Object(j.jsx)("p",{children:"Monthly Billing"}),Object(j.jsx)("input",{type:"checkbox",className:"checkbox",onChange:function(e){var c=e.target.checked;t(c)}}),Object(j.jsxs)("p",{children:["Yearly Billing",Object(j.jsx)("span",{className:"discount d-std",children:"25% discount"}),Object(j.jsx)("span",{className:"discount d-alt",children:"-25%"})]})]})},d=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){setTimeout((function(){var e=setInterval((function(){n((function(t){return t<100?t+4:(clearInterval(e),100)}))}),20)}),1e3)}),[]),Object(j.jsx)("div",{className:"pageviews",children:Object(j.jsxs)("p",{children:[c,"k Pageviews"]})})},b=function(e){var t=e.money,c=e.checked;return Object(j.jsxs)("div",{className:"price",children:[Object(j.jsxs)("strong",{children:["$",t]}),Object(j.jsxs)("p",{children:["/ ",c?"year":"month"]})]})},u=["title","titleId"];function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function p(e,t){var c=e.title,i=e.titleId,s=h(e,u);return r.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:9,height:8,ref:t,"aria-labelledby":i},s),c?r.createElement("title",{id:i},c):null,n||(n=r.createElement("path",{fill:"none",stroke:"#10D8C4",strokeWidth:2,d:"M1 4.134l1.907 1.908L7.949 1"})))}var f,x=r.forwardRef(p),v=(c.p,function(){var e=Object(r.useState)(16..toFixed(2)),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(0),s=Object(a.a)(i,2),l=s[0],u=s[1],O=Object(r.useState)(!1),h=Object(a.a)(O,2),p=h[0],f=h[1],v=Object(r.useState)(50),m=Object(a.a)(v,2),g=m[0],y=m[1],w=function(e){0!==l&&(e=12*(e-e*(l/100)));n((e/100*32).toFixed(2))};return Object(r.useEffect)((function(){w(g)}),[l]),Object(r.useEffect)((function(){u(p?25:0)}),[p]),Object(j.jsxs)("div",{className:"pricing",children:[Object(j.jsxs)("div",{className:"primary",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)(d,{}),Object(j.jsx)(b,{money:c,checked:p})]}),Object(j.jsx)("input",{className:"slider",step:"10",type:"range",onChange:function(e){var t=e.target.valueAsNumber;y(t),w(t)}}),Object(j.jsx)(o,{handleCheck:f})]}),Object(j.jsxs)("div",{className:"secondary",children:[Object(j.jsxs)("div",{className:"checklist",children:[Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)(x,{}),Object(j.jsx)("p",{children:"Unlimited websites"})]}),Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)(x,{}),Object(j.jsx)("p",{children:"100% data ownership"})]}),Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)(x,{}),Object(j.jsx)("p",{children:"Email reports"})]})]}),Object(j.jsx)("button",{children:"Start my trial"})]})]})}),m=["title","titleId"];function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)c=i[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function w(e,t){var c=e.title,n=e.titleId,i=y(e,m);return r.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:146,height:145,ref:t,"aria-labelledby":n},i),c?r.createElement("title",{id:n},c):null,f||(f=r.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"#CFD8EF"},r.createElement("circle",{cx:63,cy:82,r:62.5}),r.createElement("circle",{cx:105,cy:41,r:40.5}))))}var N=r.forwardRef(w);c.p;var k=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)(N,{className:"circles"}),Object(j.jsx)("h1",{children:"Simple, traffic-based pricing"}),Object(j.jsxs)("div",{className:"p-container",children:[Object(j.jsx)("p",{children:"Sign-up for our 30-day trial."}),Object(j.jsx)("p",{children:"No credit card required."})]})]}),Object(j.jsx)(v,{})]})};l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.417b726c.chunk.js.map