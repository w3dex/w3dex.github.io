import{l as o}from"./vendor-7a5ef3cb.js";import{L as l}from"./loading-3c5d2442.js";import{i as r}from"./index-77106ada.js";function p({children:n,isLoading:t,onClick:s}){return o.jsxs("button",{className:t?"loading":"",disabled:t,onClick:s,children:[t?o.jsx("img",{src:l}):null,o.jsx("span",{children:n})]})}function u(n,t){const s=document.body,e=document.createElement("div"),a=document.createElement("div");e.className="toast-container",a.innerText=n,r()?(e.style.alignItems="flex-end",e.style.paddingBottom="10vh"):(e.style.alignItems="flex-start",e.style.paddingTop="10vh"),t&&(e.style.alignItems="flex-start",e.style.paddingTop=t),e.appendChild(a),s.appendChild(e);const i=setTimeout(()=>{clearTimeout(i),s.removeChild(e)},2e3)}const x="/assets/arrow-a7218bf5.svg";export{x as A,p as B,u as T};
