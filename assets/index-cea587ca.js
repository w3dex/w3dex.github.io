import{x as q,k as L,j as o,B as _,C as A,v as b,l as s,n as v,w as B}from"./vendor-5ece6950.js";import{p as u,g as x,S as D,a as f,c as R,y as T,s as U,E as $}from"./index-3950234c.js";import{L as F}from"./loading-3c5d2442.js";const G="/assets/empty-8f18b8b1.svg";async function S(m){let t="0",a="+0%",d=!1;try{const r=await R(m),p=await T(m);if(r.length){const c=v(r[0].price);if(t=c,p.length){const i=v(p[0].price);if(d=Number(i)>Number(c),d){const l=Number(i)-Number(c);a=`-${f(l/Number(i)*100)}%`}else{const l=Number(c)-Number(i);a=`+${f(l/Number(i)*100)}%`}}}}catch{}return{price:t,quote:a,isDrop:d}}function J(){const m=q(),{t}=L(),[a,d]=o.useState(""),[r,p]=o.useState("USDT"),[c,i]=o.useState(0),[l,j]=o.useState([]),[g,N]=o.useState(!1);o.useEffect(()=>{a.length&&_(a)?k():j([])},[a,r]);async function k(){N(!0);const e=[];for(let n=0;n<u.length;n++){if(!(A(u[n].token.address,a)&&u[n].gold.symbol.toLowerCase()===r.toLowerCase()))continue;const h=await S(u[n].address);e.push({...u[n],...h});break}if(e.length===0){const h=await b($).read.getPair([a,x[c].address]);if(BigInt(h)>0){const y=b({abi:B,address:a}),I=await S(h),P=await y.read.symbol(),E=await y.read.decimals();e.push({...I,gold:x[c],token:{symbol:P,decimals:E,address:a,name:"",totalSupply:0n,balance:"0"},address:h})}}j(e),N(!1)}function C(e){d(e.target.value)}function w(e){sessionStorage.setItem("pair",U(e)),location.href=`${location.origin}/dex/#/`}return s.jsxs("div",{className:"search-token",children:[s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"search-input",children:[s.jsx("img",{src:D}),s.jsx("input",{type:"text",autoFocus:!0,value:a,onChange:C})]}),s.jsx("span",{onClick:()=>m(-1),children:t("cancel")})]}),s.jsxs("div",{className:"hot",children:[s.jsx("span",{className:"title",children:t("market")}),s.jsx("div",{className:"list",children:x.map((e,n)=>s.jsx("span",{className:e.symbol===r?"active":"",onClick:()=>{p(e.symbol),i(n)},children:e.symbol},e.address))})]}),s.jsxs("div",{className:"result",children:[a.length?s.jsx("h4",{className:"title",children:t("search_results")}):null,g?s.jsxs("div",{className:"loading",children:[s.jsx("img",{src:F}),s.jsx("span",{children:t("searching")})]}):null,!g&&a.length>0&&l.length===0?s.jsxs("div",{className:"empty",children:[s.jsx("img",{src:G}),s.jsx("span",{children:t("no_search_content_yet")})]}):null,!g&&l.length?s.jsxs("div",{className:"list",children:[s.jsxs("div",{className:"title",children:[s.jsx("span",{children:t("currency")}),s.jsx("span",{children:t("last_price")}),s.jsx("span",{children:t("quote_change")})]}),l.map(e=>s.jsxs("div",{className:"list-item",onClick:()=>w(e),children:[s.jsxs("div",{className:"token",children:[e.token.logoURI?s.jsx("img",{className:"logo",src:e.token.logoURI}):s.jsx("i",{className:"logo"}),s.jsxs("span",{children:[s.jsxs("span",{children:[e.token.symbol,"/"]}),e.gold.symbol]})]}),s.jsx("span",{className:"price",children:f(e.price,3)}),s.jsx("span",{className:e.isDrop?"quote drop":"quote",children:e.quote})]},e.address))]}):null]})]})}export{J as default};
