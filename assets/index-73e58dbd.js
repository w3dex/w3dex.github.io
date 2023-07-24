import{p as ue,b as pe,i as me,a as ye,g as F,r as P,c as H,d as W,e as ge,f as he,M as be,I as Z,h as xe,j as fe,u as D,k as J,l as I,m as K,n as m,o as e,S as je,A as ve,q as j,L as q,s as T,t as Q,N as w,v as X,R as ke,w as N,_ as M,x as Ne,H as Te,W as Ce}from"./vendor-4f1f40a6.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();window.global=window;window.process=ue;window.Buffer=pe.Buffer;function U(){const n=navigator.userAgent.toLowerCase();return/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(n)}function $(n,a=3,l=1e3){return new Promise((d,i)=>{const s=async(r,u)=>{try{const o=await n();d(o)}catch(o){if(r===a)i(o);else{const t=u*2;setTimeout(()=>s(r+1,t),u)}}};s(1,l)})}const _=(n,a,l)=>JSON.stringify(n,(d,i)=>{const s=typeof i=="bigint"?i.toString():i;return typeof a=="function"?a(d,s):s},l);function v(n,a=2,l){const d=Number(n)>=1e6,i=Number(n)>=1e3,s=l&&d?`${Number(n)/1e6}`:l&&i?`${Number(n)/1e3}`:`${n}`,r=s.indexOf(".");if(l&&(d||i)){const u=d?"M":"K";if(r>0){if(s.slice(r+1).length<=a)return`${s}${u}`;if(a>0){const o=`${s.slice(0,r)}${s.slice(r,r+1+a)}`;return`${Number(o)}${u}`}return`${s.slice(0,r)}${u}`}return`${s}${u}`}if(r>0){if(s.slice(r+1).length<=a)return s;if(a>0){const u=`${s.slice(0,r)}${s.slice(r,r+1+a)}`;if(Number(u)>0)return Number(s.slice(r+1,r+1+a))>0?u:s.slice(0,r);let o=-1;for(let t=r+1;t<s.length;t++)if(Number(s[t])>0){o=t+1;break}return o>=0?s.slice(r+1,o).length>4?`${s.slice(0,r+1)}0...${s[o-1]}`:s.slice(0,o):"0"}return`${s.slice(0,r)}`}return s}const we={translation:{quick_listing:"Quick Listing",latest_news:"Latest News",market:"Market",currency:"Coin",last_price:"Latest price",quote_change:"Quote change",trade:"Trade",my:"My",assets:"Assets",cancel:"Cancel",search_results:"Search results",connect_wallet:"Connect wallet",market_overview:"Market Overview",name:"Name",price:"Price({{symbol}})","change(24h)":"Change (24h)","trading_volume(24h)":"Trading volume (24h)",market_value:"Market Cap({{symbol}})",quotes:"Quotes",unknown:"Unknown",trading_pair:"Trading pair",token_address:"Token contract address",token_symbol:"Token symbol: ",decimals:"Decimals: ",confirm:"Confirm",searching:"Searching...",no_search_content_yet:"No search content yet",market_place:"Market place: ",tips:{successful_listing:"Successful listing",enter_token:"Please enter the token contract address",invalid_token:"Token contract address is incorrect",has_market:"This market already exists, please do not add it again",not_token:"Not a token contract address"}}},Se={translation:{quick_listing:"快速上币",latest_news:"最新资讯",market:"市场",currency:"币种",last_price:"最新价",quote_change:"今日涨跌",trade:"交易",my:"我的",assets:"资产",cancel:"取消",search_results:"搜索结果",connect_wallet:"连接钱包",market_overview:"市场概览",name:"名称",price:"价格({{symbol}})","change(24h)":"涨跌(24h)","trading_volume(24h)":"成交量(24h)",market_value:"市值({{symbol}})",quotes:"行情",unknown:"未知",trading_pair:"交易对",token_address:"代币合约地址",token_symbol:"代币名称：",decimals:"精度：",confirm:"确认",searching:"正在搜索...",no_search_content_yet:"暂无搜索内容",market_place:"交易市场：",tips:{successful_listing:"上币成功",enter_token:"请输入代币合约地址",invalid_token:"代币合约地址不正确",has_market:"该市场已存在，请勿重复添加",not_token:"不是一个代币合约地址"}}};me.use(ye).init({lng:localStorage.getItem("language")??"zh",debug:!0,resources:{en:we,zh:Se}});async function Y(n){const a=F`query bargains{
    bargains(
      first: 1
      orderBy: time
      orderDirection: desc
      where: { pair: "${n}" }
    ) {
      price
    }
  }`;return(await P(L,a)).bargains}async function ee(n){H();const a=Math.floor(new Date().getTime()/1e3),l=Math.floor(Number(a)/86400)*86400,d=F`query bargains{
    bargains(
      first: 1
      orderBy: time
      orderDirection: desc
      where: { pair: "${n}" time_lte: "${l}" }
    ) {
      price
    }
  }`;return(await P(L,d)).bargains}async function _e(n){H();const a=Math.floor(new Date().getTime()/1e3),l=Number(a)-86400,d=F`query bargains{
    bargains(
      first: 1000
      orderBy: time
      orderDirection: desc
      where: { pair: "${n}" time_gte: "${l}" time_lte: "${a}" }
    ) {
      amount
      price
    }
  }`;return(await P(L,d)).bargains}const L="https://graph.w3dex.cc/subgraphs/name/exchange",Be=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"pair",type:"address"},{indexed:!1,internalType:"address",name:"token0",type:"address"},{indexed:!1,internalType:"address",name:"token1",type:"address"}],name:"CreatePair",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"DELEGATE_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"MANAGER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"basicReserveFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"",type:"address"}],name:"pairConfigs",outputs:[{internalType:"bool",name:"isOpen",type:"bool"},{internalType:"uint256",name:"reserveFee",type:"uint256"},{internalType:"uint256",name:"chargeRate",type:"uint256"},{internalType:"address",name:"chargeReceiver",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"pairTemplate",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"pairs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"weth",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{stateMutability:"payable",type:"receive",payable:!0},{inputs:[{internalType:"address",name:"_pairTemplate",type:"address"},{internalType:"uint256",name:"_reserveFee",type:"uint256"},{internalType:"address",name:"_weth",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"pair",type:"address"},{internalType:"bool",name:"isOpen",type:"bool"},{internalType:"uint256",name:"chargeRate",type:"uint256"},{internalType:"address",name:"chargeReceiver",type:"address"}],name:"setPairConfig",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"gold",type:"address"},{internalType:"address",name:"token",type:"address"}],name:"createPair",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"}],name:"getPair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"pair",type:"address"}],name:"pairInfo",outputs:[{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}],Ee="0xe665A4Fdd36cBD79e2FFB9E7DbaC881652555a3C",G={abi:Be,address:Ee},Ae=[{inputs:[{internalType:"contract ITokenController",name:"_controller",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"controller",outputs:[{internalType:"contract ITokenController",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{stateMutability:"payable",type:"receive",payable:!0},{inputs:[{internalType:"address[2]",name:"path",type:"address[2]"}],name:"getReserveFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[2]",name:"path",type:"address[2]"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"address[2]",name:"path",type:"address[2]"},{internalType:"uint8",name:"length",type:"uint8"}],name:"priceAmount",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[2]",name:"path",type:"address[2]"},{internalType:"uint256[]",name:"orderIndexs",type:"uint256[]"}],name:"userOnOrderInfo",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[2]",name:"path",type:"address[2]"},{internalType:"uint256",name:"orderIndex",type:"uint256"}],name:"cancelOrder",outputs:[],stateMutability:"nonpayable",type:"function"}],De="0x89a88F641DE2B962B715321bf966AE7969f1613b",V={abi:Ae,address:De},Ps={address:W(G.address),abi:G.abi};W(V.address),V.abi;const C={symbol:"USDT",decimals:18,address:"0xCA2CdD2717Bc4bbAF2084AF5Acedd514D1Ae19A9"},se={symbol:"Matic",decimals:18,address:"0xE1879AA7FE4a13fac44dAac5238C924acC6a74d5"},te={symbol:"WBNB",decimals:18,address:"0x3A02Ca54815De10F71B88E0F0e313E7312423DF8"},ne=[C,se,te],ae={symbol:"Matic",name:"MaticToken",decimals:18,address:"0xE1879AA7FE4a13fac44dAac5238C924acC6a74d5",totalSupply:10000000n,logoURI:`${location.origin}/tokens/oskdao.png`,balance:"0"},R={symbol:"MAV",name:"MAV",decimals:18,address:"0x91D0536982aA9aE10Df111EF9FA6C461Abb9F383",totalSupply:10000000n,logoURI:`${location.origin}/tokens/pet.png`,balance:"0"},ie={symbol:"POT",name:"POT",decimals:18,address:"0x091B718d182a93537DbbF9DF3944738b198F2a70",totalSupply:10000000n,logoURI:`${location.origin}/tokens/pot.svg`,balance:"0"},Me={symbol:"UIN",name:"UIN",decimals:18,address:"0x0f9B56434aAD1D901122757CCFA71F8C0E681C84",totalSupply:10000000n,logoURI:`${location.origin}/tokens/w3.png`,balance:"0"},$e={symbol:"USDC",name:"USDC",decimals:18,address:"0xDAD1ea437b9727379336Cc2Fd1B94c2AfB1E8eb5",totalSupply:10000000n,logoURI:`${location.origin}/tokens/w3b.png`,balance:"0"},Fe={symbol:"WBNB",name:"Wrapped BNB",decimals:18,address:"0x3A02Ca54815De10F71B88E0F0e313E7312423DF8",totalSupply:0n,logoURI:`${location.origin}/tokens/w3w.png`,balance:"0"},O={symbol:"BCH",name:"BCH",decimals:18,address:"0x89BFD6AffF7D0c05E025b65cBC6281f63fee1649",totalSupply:10000000n,logoURI:`${location.origin}/tokens/oskdao.png`,balance:"0"},re={symbol:"BTC",name:"Bit Coin Token",decimals:18,address:"0xf2305c5e64BAEB32Aa6cf576183358a19f3C2907",totalSupply:10000000n,logoURI:`${location.origin}/tokens/pet.png`,balance:"0"},Pe={symbol:"BUSD",name:"BUSD",decimals:18,address:"0xe6d785728c8ccBE1fd9DdDCf0d47Aef489B9FE7A",totalSupply:10000000n,logoURI:`${location.origin}/tokens/pot.svg`,balance:"0"},Ie={symbol:"USDT",name:"USDT",decimals:18,address:"0xCA2CdD2717Bc4bbAF2084AF5Acedd514D1Ae19A9",totalSupply:10000000n,logoURI:`${location.origin}/tokens/w3.png`,balance:"0"},Is=Object.freeze(Object.defineProperty({__proto__:null,BCH:O,BTC:re,BUSD:Pe,MAV:R,Matic:ae,POT:ie,UIN:Me,USDC:$e,USDT:Ie,WBNB:Fe},Symbol.toStringTag,{value:"Module"})),Le={gold:C,token:ae,address:"0xb00864FA0f4403BcEEe602F1140F51b3c056a1BC",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},Re={gold:C,token:R,address:"0x843702afAceCe6789D7ee7129A6d2C5c81Eb60Fd",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},Oe={gold:te,token:R,address:"0xbF3C80A7Cd505C7d8AFF8B28242D4778f461200f",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},qe={gold:C,token:ie,address:"0x375C7FDF2f9420482529dC2fB330b297935D76c5",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},Ue={gold:C,token:O,address:"0x4eb5B6C237350a160AedF4fb001968652A504169",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},Ge={gold:se,token:O,address:"0xe2fdcE0e3460fF9225de588d340B59AB54D7C3fF",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},Ve={gold:C,token:re,address:"0x9958fb9d70f96d96713cb277b49a374C52762eAb",price:"0",quote:"+0%",isDrop:!1,volume:"0",marketValue:"0"},k=[Le,qe,Ve,Ue,Re,Oe,Ge];var x=(n=>(n[n.BSC=56]="BSC",n[n.PEGO=20201022]="PEGO",n))(x||{});const ze={id:20201022,name:"PEGO Network",network:"pg",nativeCurrency:{decimals:18,name:"PG",symbol:"PG"},rpcUrls:{default:{http:["https://pegorpc.com"]},public:{http:["https://pegorpc.com"]}},blockExplorers:{etherscan:{name:"PEGO Mainnet Explorer",url:"https://scan.pego.network"},default:{name:"PEGO Mainnet Explorer",url:"https://scan.pego.network"}}},{chains:z,publicClient:He,webSocketPublicClient:We}=ge([ze,fe],[xe()]),Ze=he({autoConnect:!0,connectors:[new be({chains:z}),new Z({chains:z,options:{name:"Injected",shimDisconnect:!0}})],publicClient:He,webSocketPublicClient:We}),oe=[{code:"zh",native:"中文"},{code:"en",native:"English"}];const Je="/assets/logo-pure-bc459ed5.svg",ce="/assets/language-4b3a6772.svg",Ke="/assets/submit-token-83512d36.svg",Qe="/assets/news-c9434adf.svg",Xe="/assets/search-b75d12a8.svg",Ye="/assets/banner1-zh-a5fde55d.png",es="/assets/banner2-zh-1affd70b.png",ss="/assets/banner3-zh-726dfc52.png",ts="/assets/banner4-zh-61c27f0c.png",ns="/assets/banner1-en-d6e6013c.png",as="/assets/banner2-en-fc4eacb2.png",is="/assets/banner3-en-e28019ef.png",rs="/assets/banner4-en-020d3fa2.png",B="/assets/bsc-5f751f76.svg",E="/assets/pego-9cc1afc6.svg",A="/assets/arrow-e9bb01fd.svg";function os({goldSymbol:n}){const a=sessionStorage.getItem("pairList"),[l,d]=m.useState(a?JSON.parse(a):k),[i,s]=m.useState([]);m.useEffect(()=>{u()},[]),m.useEffect(()=>{s(n==="all"?l:l.filter(o=>o.gold.symbol===n))},[l,n]);function r(o){sessionStorage.setItem("pair",_(o)),location.href=`${location.origin}/dex/#/`}async function u(){const o=k;for(let t=0;t<k.length;t++){try{const c=await Y(k[t].address),g=await ee(k[t].address);if(c.length){const b=T(c[0].price);if(o[t].price=b,g.length){const h=T(g[0].price);if(o[t].isDrop=Number(h)>Number(b),o[t].isDrop){const p=Number(h)-Number(b);o[t].quote=`-${v(p/Number(h)*100)}%`}else{const p=Number(b)-Number(h);o[t].quote=`+${v(p/Number(h)*100)}%`}}}}catch{}d([...o])}sessionStorage.setItem("pairList",_([...o]))}return e.jsx(e.Fragment,{children:i.map(o=>e.jsxs("div",{className:"list-item",onClick:()=>r(o),children:[e.jsxs("div",{className:"token",children:[e.jsx("img",{className:"logo",src:o.token.logoURI}),e.jsxs("span",{children:[e.jsxs("span",{children:[o.token.symbol,"/"]}),o.gold.symbol]})]}),e.jsx("span",{className:"price",children:v(o.price,3)}),e.jsx("span",{className:o.isDrop?"quote drop":"quote",children:o.quote})]},o.address))})}function cs(){const{t:n,i18n:a}=D(),l=J(),{isConnected:d,address:i}=I(),{switchNetwork:s}=K(),[r,u]=m.useState("USDT"),[o,t]=m.useState(!1),[c,g]=m.useState(!1);m.useEffect(()=>{document.getElementsByTagName("html")[0].setAttribute("lang",a.language)},[a.language]);const b=p=>{a.changeLanguage(p),localStorage.setItem("language",p),g(!1)},h=p=>{s==null||s(p),t(!1)};return e.jsxs("div",{className:"market",children:[e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"container",children:[e.jsx("img",{className:"logo",src:Je}),e.jsxs("div",{className:"menus",children:[e.jsxs("div",{className:"language",children:[e.jsx("img",{src:ce,onClick:()=>g(!c)}),c?e.jsx("div",{className:"options",children:oe.map(p=>{const{code:y,native:f}=p;return e.jsx("span",{className:a.language===y?"active":"",onClick:()=>b(y),children:f},y)})}):null]}),e.jsxs("div",{className:"chains",children:[l===x.BSC?e.jsxs("div",{className:"current",onClick:()=>t(!o),children:[e.jsx("img",{src:B}),e.jsx("i",{}),e.jsx("span",{children:"BSC"}),e.jsx("img",{src:A})]}):e.jsxs("div",{className:"current",onClick:()=>t(!o),children:[e.jsx("img",{src:E}),e.jsx("i",{}),e.jsx("span",{children:"PEGO"}),e.jsx("img",{src:A})]}),o?e.jsxs("div",{className:"options",children:[e.jsx("span",{className:"title",children:"选择网络"}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:l===x.BSC?"option-item active":"option-item",onClick:()=>h(x.BSC),children:[e.jsx("img",{src:B}),e.jsx("span",{children:"BSC"})]}),e.jsxs("div",{className:l===x.PEGO?"option-item active":"option-item",onClick:()=>h(x.PEGO),children:[e.jsx("img",{src:E}),e.jsx("span",{children:"PEGO"})]})]})]}):null]}),d?e.jsx("div",{className:"account",children:e.jsx("span",{children:`0x...${i==null?void 0:i.slice(-4)}`})}):null]})]}),e.jsx("div",{className:"banner",children:e.jsx(je,{modules:[ve],loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},children:a.language==="zh"?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("img",{src:Ye})}),e.jsx(j,{children:e.jsx("img",{src:es})}),e.jsx(j,{children:e.jsx("img",{src:ss})}),e.jsx(j,{children:e.jsx("img",{src:ts})})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("img",{src:ns})}),e.jsx(j,{children:e.jsx("img",{src:as})}),e.jsx(j,{children:e.jsx("img",{src:is})}),e.jsx(j,{children:e.jsx("img",{src:rs})})]})})}),e.jsxs("div",{className:"info",children:[e.jsxs(q,{to:"/add-token",children:[e.jsx("img",{src:Ke}),e.jsx("span",{children:n("quick_listing")})]}),e.jsxs("div",{children:[e.jsx("img",{src:Qe}),e.jsx("span",{children:n("latest_news")})]})]})]}),e.jsxs("div",{className:"content",children:[e.jsx("h4",{className:"title",children:n("market")}),e.jsxs("div",{className:"tokens",children:[e.jsx("div",{className:"tags",children:ne.map(p=>e.jsx("span",{className:r===p.symbol?"option active":"option",onClick:()=>u(p.symbol),children:p.symbol},p.address))}),e.jsx(q,{to:"/search",className:"search",children:e.jsx("img",{src:Xe})})]}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{className:"title",children:[e.jsx("span",{children:n("currency")}),e.jsx("span",{children:n("last_price")}),e.jsx("span",{children:n("quote_change")})]}),e.jsx(os,{goldSymbol:r})]})]})]})}const ls="/assets/market-31f8a604.svg",ds="/assets/market-light-bbac15f2.svg",us="/assets/trade-4be15640.svg",ps="/assets/my-32af97d0.svg",ms="/assets/my-light-729a64d2.svg";function ys(){const n=Q(),{t:a}=D();return e.jsxs("div",{className:"tabbar",children:[e.jsxs(w,{className:"item",to:"/",children:[e.jsx("img",{src:n.pathname==="/"?ds:ls}),e.jsx("span",{children:a("market")})]}),e.jsxs("a",{className:"item",href:`${window.location.origin}/dex/#/`,children:[e.jsx("img",{src:us}),e.jsx("span",{children:a("trade")})]}),e.jsxs(w,{className:"item",to:"/my",children:[e.jsx("img",{src:n.pathname==="/my"?ms:ps}),e.jsx("span",{children:a("my")})]})]})}const gs="/assets/banner1-zh-5fb2d33b.png",hs="/assets/banner2-zh-ef9fcde7.png",bs="/assets/banner3-zh-5b5f2092.png",xs="/assets/banner4-zh-32bee471.png",fs="/assets/banner1-en-3de784dc.png",js="/assets/banner2-en-f86e5bff.png",vs="/assets/banner3-en-518a5473.png",ks="/assets/banner4-en-7fe499ca.png",S="/assets/sort-34450dbd.svg",le="/assets/logo-18199922.svg",Ns="/assets/twitter-bafaab20.svg",Ts="/assets/telegraph-d2f06c02.svg",Cs="/assets/medium-c527ecf9.svg",ws="/assets/email-a5f90c1c.svg";function Ss({goldSymbol:n,sortType:a}){const l=sessionStorage.getItem("pairList"),[d,i]=m.useState(l?JSON.parse(l):k),[s,r]=m.useState(d);m.useEffect(()=>{o()},[]),m.useEffect(()=>{r(n==="all"?d:d.filter(t=>t.gold.symbol===n))},[d,n]),m.useEffect(()=>{switch(a){case 0:r(s.sort((t,c)=>Number(c.price)-Number(t.price)));break;case 1:r(s.sort((t,c)=>Number(t.price)-Number(c.price)));break;case 2:r(s.sort((t,c)=>Number(c.quote.slice(0,-1))-Number(t.quote.slice(0,-1))));break;case 3:r(s.sort((t,c)=>Number(t.quote.slice(0,-1))-Number(c.quote.slice(0,-1))));break;case 4:r(s.sort((t,c)=>Number(c.volume)-Number(t.volume)));break;case 5:r(s.sort((t,c)=>Number(t.volume)-Number(c.volume)));break;case 6:r(s.sort((t,c)=>Number(c.marketValue)-Number(t.marketValue)));break;case 7:r(s.sort((t,c)=>Number(t.marketValue)-Number(c.marketValue)));break}},[a]);function u(t){sessionStorage.setItem("pair",_(t)),location.href=`${location.origin}/dex/#/pc-home`}async function o(){const t=k;for(let c=0;c<t.length;c++){try{const g=await _e(t[c].address),b=await Y(t[c].address),h=await ee(t[c].address);if(b.length){const p=T(b[0].price);if(t[c].price=p,t[c].marketValue=T(BigInt(b[0].price)*t[c].token.totalSupply),h.length){const y=T(h[0].price);if(t[c].isDrop=Number(y)>Number(p),t[c].isDrop){const f=Number(y)-Number(p);t[c].quote=`-${v(f/Number(y)*100)}%`}else{const f=Number(p)-Number(y);t[c].quote=`+${v(f/Number(y)*100)}%`}}}if(g.length){let p=0n;for(let y=0;y<g.length;y++)p+=BigInt(g[y].amount);t[c].volume=T(p)}}catch{}i([...t])}sessionStorage.setItem("pairList",_([...t]))}return e.jsx("div",{className:"list",children:s.map(t=>e.jsxs("div",{className:"list-item",onClick:()=>u(t),children:[e.jsxs("div",{className:"token",children:[e.jsx("img",{className:"logo",src:t.token.logoURI}),e.jsxs("div",{className:"info",children:[e.jsx("span",{className:"symbol",children:t.token.symbol}),e.jsx("span",{className:"name",children:t.token.name})]})]}),e.jsx("span",{className:"price",children:v(t.price,3)}),e.jsx("span",{className:t.isDrop?"quote drop":"quote rise",children:t.quote}),e.jsx("span",{className:"volume",children:v(t.volume)}),e.jsx("span",{className:"marketValue",children:v(t.marketValue,0,!0)})]},t.address))})}function _s(){const{t:n,i18n:a}=D(),[l,d]=m.useState("USDT"),[i,s]=m.useState(),r=u=>{switch(u){case"price":s(i===void 0||i===0?1:0);break;case"quote":s(i===void 0||i===2?3:2);break;case"volume":s(i===void 0||i===4?5:4);break;case"market":s(i===void 0||i===6?7:6);break}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"market-pc",children:[e.jsx("div",{className:"header",children:a.language==="zh"?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:gs}),e.jsx("img",{src:hs}),e.jsx("img",{src:bs}),e.jsx("img",{src:xs})]}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:fs}),e.jsx("img",{src:js}),e.jsx("img",{src:vs}),e.jsx("img",{src:ks})]})}),e.jsxs("div",{className:"content",children:[e.jsx("h3",{className:"title",children:n("market_overview")}),e.jsxs("div",{className:"select-token",children:[e.jsx("span",{children:n("market_place")}),ne.map(u=>e.jsx("span",{className:l===u.symbol?"option active":"option",onClick:()=>d(u.symbol),children:u.symbol},u.address))]}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{children:n("currency")}),e.jsxs("div",{className:"sort",onClick:()=>r("price"),children:[e.jsx("span",{children:n("price",{symbol:l})}),e.jsx("img",{src:S})]}),e.jsxs("div",{className:"sort",onClick:()=>r("quote"),children:[e.jsx("span",{children:n("change(24h)")}),e.jsx("img",{src:S})]}),e.jsxs("div",{className:"sort",onClick:()=>r("volume"),children:[e.jsx("span",{children:n("trading_volume(24h)")}),e.jsx("img",{src:S})]}),e.jsxs("div",{className:"sort",onClick:()=>r("market"),children:[e.jsx("span",{children:n("market_value",{symbol:l})}),e.jsx("img",{src:S})]})]}),e.jsx(Ss,{goldSymbol:l,sortType:i})]}),e.jsxs("div",{className:"footer",children:[e.jsxs("div",{className:"chat",children:[e.jsx("img",{src:le}),e.jsx("i",{}),e.jsx("a",{href:"#",children:e.jsx("img",{src:Ns})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:Ts})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:Cs})}),e.jsx("a",{href:"#",children:e.jsx("img",{src:ws})})]}),e.jsx("span",{children:"W3Dex © 2023. All right reserved."})]})]})})}function Bs(){const{t:n,i18n:a}=D(),{connect:l,connectors:d}=X(),{isConnected:i,address:s}=I(),r=J(),{switchNetwork:u}=K(),[o,t]=m.useState(!1),[c,g]=m.useState(!1);m.useEffect(()=>{document.getElementsByTagName("html")[0].setAttribute("lang",a.language)},[a.language]);function b(){i||l({connector:d[0]})}const h=y=>{a.changeLanguage(y),localStorage.setItem("language",y),g(!1)},p=y=>{u==null||u(y),t(!1)};return e.jsxs("div",{className:"navbar",children:[e.jsxs("div",{className:"left",children:[e.jsx(w,{className:"logo",to:"/",children:e.jsx("img",{src:le})}),e.jsxs("div",{className:"menus",children:[e.jsx(w,{to:"/",children:n("quotes")}),e.jsx("a",{href:`${location.origin}/dex/#/pc-home`,children:n("trade")}),e.jsx(w,{to:"/add-token",children:n("quick_listing")})]})]}),e.jsxs("div",{className:"setting",children:[e.jsxs("div",{className:"language",children:[e.jsx("img",{src:ce,onClick:()=>g(!c)}),c?e.jsx("div",{className:"list",children:oe.map(y=>{const{code:f,native:de}=y;return e.jsx("span",{className:a.language===f?"active":"",onClick:()=>h(f),children:de},f)})}):null]}),e.jsxs("div",{className:"chains",children:[r===x.BSC?e.jsxs("div",{className:"current",onClick:()=>t(!o),children:[e.jsx("img",{src:B}),e.jsx("i",{}),e.jsx("span",{children:"BSC"}),e.jsx("img",{src:A})]}):e.jsxs("div",{className:"current",onClick:()=>t(!o),children:[e.jsx("img",{src:E}),e.jsx("i",{}),e.jsx("span",{children:"PEGO"}),e.jsx("img",{src:A})]}),o?e.jsxs("div",{className:"options",children:[e.jsx("span",{className:"title",children:"选择网络"}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:r===x.BSC?"option-item active":"option-item",onClick:()=>p(x.BSC),children:[e.jsx("img",{src:B}),e.jsx("span",{children:"BSC"})]}),e.jsxs("div",{className:r===x.PEGO?"option-item active":"option-item",onClick:()=>p(x.PEGO),children:[e.jsx("img",{src:E}),e.jsx("span",{children:"PEGO"})]})]})]}):null]}),e.jsx("span",{onClick:b,className:i?"account connected":"account",children:i?`${s==null?void 0:s.slice(0,5)}...${s==null?void 0:s.slice(-7)}`:n("connect_wallet")})]})]})}const Es=m.lazy(()=>$(()=>M(()=>import("./index-e5821576.js"),["assets/index-e5821576.js","assets/vendor-4f1f40a6.js","assets/vendor-3ce027f3.css","assets/index-7d1998a2.css"]))),As=m.lazy(()=>$(()=>M(()=>import("./index-27ffe908.js"),["assets/index-27ffe908.js","assets/vendor-4f1f40a6.js","assets/vendor-3ce027f3.css","assets/arrow-f3f68efa.js","assets/loading-3c5d2442.js","assets/arrow-06ecd699.css","assets/index-f1ad5dc7.css"]))),Ds=m.lazy(()=>$(()=>M(()=>import("./index-f527cb4c.js"),["assets/index-f527cb4c.js","assets/vendor-4f1f40a6.js","assets/vendor-3ce027f3.css","assets/loading-3c5d2442.js","assets/index-3e804a48.css"]))),Ms=m.lazy(()=>$(()=>M(()=>import("./index-3b727ffc.js"),["assets/index-3b727ffc.js","assets/vendor-4f1f40a6.js","assets/vendor-3ce027f3.css","assets/arrow-f3f68efa.js","assets/loading-3c5d2442.js","assets/arrow-06ecd699.css","assets/index-075bed89.css"])));function $s(){const n=Q(),[a,l]=m.useState(U()),{connect:d}=X({connector:new Z}),{address:i}=I();return window.addEventListener("resize",()=>{const s=setTimeout(()=>{l(U()),clearTimeout(s)})}),m.useEffect(()=>{a&&!i&&d(),i&&sessionStorage.setItem("address",i)},[a,i]),e.jsx(e.Fragment,{children:e.jsxs(m.Suspense,{fallback:null,children:[a?null:e.jsx(Bs,{}),e.jsx(ke,{children:a?e.jsxs(e.Fragment,{children:[e.jsx(N,{path:"/",element:e.jsx(cs,{})}),e.jsx(N,{path:"/my",element:e.jsx(Es,{})}),e.jsx(N,{path:"/add-token",element:e.jsx(As,{})}),e.jsx(N,{path:"/search",element:e.jsx(Ds,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{path:"/",element:e.jsx(_s,{})}),e.jsx(N,{path:"/add-token",element:e.jsx(Ms,{})})]})}),a&&["/","/my"].includes(n.pathname)?e.jsx(ys,{}):null]})})}Ne(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(Te,{children:e.jsx(Ce,{config:Ze,children:e.jsx($s,{})})})}));export{Ps as E,Xe as S,C as U,v as a,Y as c,ne as g,U as i,k as p,_ as s,Is as t,ee as y};
