import{u as I,l as A,j as O,n as t,F as B,G as k,C as G,q as s,J as P,K as q,O as F}from"./vendor-05c9a28e.js";import{C,g as u,T as c,c as v}from"./index-3ad86714.js";import{A as W,B as H}from"./arrow-6f814c3c.js";import"./loading-3c5d2442.js";function z(){const o=I(),{address:h}=A(),{t:a}=O(),[n,f]=t.useState(),[m,p]=t.useState(!1),[i,x]=t.useState(""),[y,g]=t.useState(!1),[j,l]=t.useState({}),[N,b]=t.useState(),{status:d}=B({hash:N});t.useEffect(()=>{o in C&&f(u[o][0])},[o]),t.useEffect(()=>{h&&k(i)?(async()=>{try{const{symbol:e,decimals:r}=await G({address:h,token:i});l({symbol:e,decimals:r}),g(!0)}catch(e){console.error(e),l({}),g(!1)}})():l({})},[o,i]),t.useEffect(()=>{d==="success"&&(x(""),c(a("tips.successful_listing")))},[d]);function w(e){f(u[o][e]),p(!1)}function T(e){x(e.target.value)}async function _(e,r){const E=await F({...v[o].ControllerConfig,functionName:"getPair",args:[e,r]});return BigInt(E)>0}async function S(){if(n){if(i.length===0)return c(a("tips.enter_token"));if(k(i))if(y){if(await _(n.address,i))return c(a("tips.has_market"),"25vh")}else return c(a("tips.not_token"));else return c(a("tips.invalid_token"));const e=await P({...v[o].ControllerConfig,functionName:"createPair",args:[n.address,i]}),{hash:r}=await q(e);b(r)}}return s.jsx("div",{className:"add-token-pc",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"title",children:a("quick_listing")}),s.jsxs("div",{className:"form",children:[s.jsx("span",{className:"label",children:a("trading_pair")}),s.jsxs("div",{className:"input",children:[s.jsxs("div",{className:"prefix",children:[s.jsxs("div",{className:"selected",onClick:()=>p(!m),children:[s.jsx("span",{children:n?n.symbol:""}),s.jsx("img",{src:W})]}),m?s.jsx("div",{className:"options",children:(u[C.PEGO]??[]).map((e,r)=>s.jsx("span",{className:e.symbol===(n?n.symbol:"")?"active":"",onClick:()=>w(r),children:e.symbol},e.address))}):null]}),s.jsx("input",{type:"text",readOnly:!0,value:n?n.address:""})]}),s.jsx("span",{className:"label",children:a("token_address")}),s.jsx("input",{type:"text",value:i,onChange:T}),s.jsxs("div",{className:"token-info",children:[s.jsxs("span",{children:[a("token_symbol"),j.symbol??a("unknown")]}),s.jsxs("span",{children:[a("decimals"),j.decimals??0]})]}),s.jsx(H,{isLoading:d==="loading",onClick:S,children:a("confirm")})]})]})})}export{z as default};
