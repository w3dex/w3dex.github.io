import{E as I,u as A,l as B,j as O,n as t,F as G,G as k,C as P,q as s,J as q,K as F,O as W}from"./vendor-45951bb6.js";import{C as H,g as u,c as v}from"./index-f6d277f8.js";import{A as J,B as K}from"./arrow-fb71c236.js";import{T as r}from"./index-08a66383.js";import"./loading-3c5d2442.js";const L="/assets/back-b87274f6.svg";function U(){const C=I(),i=A(),{address:h}=B(),{t:a}=O(),[n,f]=t.useState(),[m,p]=t.useState(!1),[o,x]=t.useState(""),[N,g]=t.useState(!1),[j,l]=t.useState({}),[y,b]=t.useState(),{status:d}=G({hash:y});t.useEffect(()=>{i in H&&f(u[i][0])},[i]),t.useEffect(()=>{h&&k(o)?(async()=>{try{const{symbol:e,decimals:c}=await P({address:h,token:o});l({symbol:e,decimals:c}),g(!0)}catch(e){console.error(e),g(!1),l({})}})():l({})},[i,o]),t.useEffect(()=>{d==="success"&&(x(""),r(a("tips.successful_listing")))},[d]);function w(e){f(u[i][e]),p(!1)}function T(e){x(e.target.value)}async function _(e,c){const E=await W({...v[i].ControllerConfig,functionName:"getPair",args:[e,c]});return BigInt(E)>0}async function S(){if(n){if(o.length===0)return r(a("tips.enter_token"),"25vh");if(k(o))if(N){if(await _(n.address,o))return r(a("tips.has_market"),"25vh")}else return r(a("tips.not_token"),"25vh");else return r(a("tips.invalid_token"),"25vh");const e=await q({...v[i].ControllerConfig,functionName:"createPair",args:[n.address,o]}),{hash:c}=await F(e);b(c)}}return s.jsxs("div",{className:"add-token",children:[s.jsxs("div",{className:"navbar",children:[s.jsx("img",{src:L,onClick:()=>C(-1)}),s.jsx("span",{children:a("quick_listing")})]}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"form",children:[s.jsx("span",{className:"label",children:a("trading_pair")}),s.jsxs("div",{className:"input",children:[s.jsxs("div",{className:"prefix",children:[s.jsxs("div",{className:"selected",onClick:()=>p(!m),children:[s.jsx("span",{children:n?n.symbol:""}),s.jsx("img",{src:J})]}),m?s.jsx("div",{className:"options",children:(u[i]??[]).map((e,c)=>s.jsx("span",{className:e.symbol===(n?n.symbol:"")?"active":"",onClick:()=>w(c),children:e.symbol},e.address))}):null]}),s.jsx("input",{type:"text",readOnly:!0,value:n?n.address:""})]}),s.jsx("span",{className:"label",children:a("token_address")}),s.jsx("input",{type:"text",value:o,onChange:T}),s.jsxs("div",{className:"token-info",children:[s.jsxs("span",{children:[a("token_symbol"),j.symbol??a("unknown")]}),s.jsxs("span",{children:[a("decimals"),j.decimals??0]})]})]}),s.jsx(K,{isLoading:d==="loading",onClick:S,children:a("confirm")})]})]})}export{U as default};
