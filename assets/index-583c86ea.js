import{D as _,u as A,j as E,l as B,n as m,F as U,O as F,K as R,B as $,q as s,t as S}from"./vendor-2def24a5.js";import{c as G,g as j,S as O,t as N,b as T,y as V,s as J}from"./index-cfb48765.js";import{L as K}from"./loading-3c5d2442.js";const z="/assets/empty-8f18b8b1.svg";async function k(o,r){let t="0",h="+0%",d=!1;try{const c=await T(o.address,r),a=await V(o.address,r),p=o.gold.decimals+18-o.token.decimals;if(c.length){const i=S(c[0].price,p);if(t=i,a.length){const l=S(a[0].price,p);if(d=Number(l)>Number(i),d){const u=Number(l)-Number(i);h=`-${N(u/Number(l)*100)}%`}else{const u=Number(i)-Number(l);h=`+${N(u/Number(l)*100)}%`}}}}catch{}return{price:t,quote:h,isDrop:d}}function W(){const o=_(),r=A(),{t}=E(),{address:h}=B(),d=sessionStorage.getItem("pairList"),c=d?JSON.parse(d):[],[a,p]=m.useState(""),[i,l]=m.useState("USDT"),[u,I]=m.useState(0),[g,y]=m.useState([]),[x,b]=m.useState(!1);m.useEffect(()=>{a.length&&U(a)?C():y([])},[a,i]);async function C(){b(!0);const e=[];for(let n=0;n<c.length;n++){if(!(F(c[n].token.address,a)&&c[n].gold.symbol.toLowerCase()===i.toLowerCase()))continue;const f=await k(c[n],r);e.push({...c[n],...f});break}if(e.length===0){const n=await R({...G[r].ControllerConfig,functionName:"getPair",args:[a,j[r][u].address]});if(BigInt(n)>0){const{symbol:f,decimals:L,formatted:P}=await $({address:h??"0x",token:a}),v={gold:j[r][u],token:{symbol:f,decimals:L,address:a,name:"",totalSupply:0,balance:P},address:n,volume:"0",marketValue:"0",price:"",quote:"",isDrop:!1},D=await k(v,r);e.push({...v,...D})}}y(e),b(!1)}function w(e){p(e.target.value)}function q(e){sessionStorage.setItem("pair",J(e)),location.href=`${location.origin}/dex/#/`}return s.jsxs("div",{className:"search-token",children:[s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"search-input",children:[s.jsx("img",{src:O}),s.jsx("input",{type:"text",autoFocus:!0,value:a,onChange:w})]}),s.jsx("span",{onClick:()=>o(-1),children:t("cancel")})]}),s.jsxs("div",{className:"hot",children:[s.jsx("span",{className:"title",children:t("market")}),s.jsx("div",{className:"list",children:(j[r]??[]).map((e,n)=>s.jsx("span",{className:e.symbol===i?"active":"",onClick:()=>{l(e.symbol),I(n)},children:e.symbol},e.address))})]}),s.jsxs("div",{className:"result",children:[a.length?s.jsx("h4",{className:"title",children:t("search_results")}):null,x?s.jsxs("div",{className:"loading",children:[s.jsx("img",{src:K}),s.jsx("span",{children:t("searching")})]}):null,!x&&a.length>0&&g.length===0?s.jsxs("div",{className:"empty",children:[s.jsx("img",{src:z}),s.jsx("span",{children:t("no_search_content_yet")})]}):null,!x&&g.length?s.jsxs("div",{className:"list",children:[s.jsxs("div",{className:"title",children:[s.jsx("span",{children:t("currency")}),s.jsx("span",{children:t("last_price")}),s.jsx("span",{children:t("quote_change")})]}),g.map(e=>s.jsxs("div",{className:"list-item",onClick:()=>q(e),children:[s.jsxs("div",{className:"token",children:[e.logoURI?s.jsx("img",{className:"logo",src:e.logoURI}):s.jsx("i",{className:"logo"}),s.jsxs("span",{children:[s.jsxs("span",{children:[e.token.symbol,"/"]}),e.gold.symbol]})]}),s.jsx("span",{className:"price",children:N(e.price,3)}),s.jsx("span",{className:e.isDrop?"quote drop":"quote",children:e.quote})]},e.address))]}):null]})]})}export{W as default};
