import{i as a}from"./index-f6d277f8.js";function d(o,t){const n=document.body,e=document.createElement("div"),i=document.createElement("div");e.className="toast-container",i.innerText=o,a()?(e.style.alignItems="flex-end",e.style.paddingBottom="10vh"):(e.style.alignItems="flex-start",e.style.paddingTop="10vh"),t&&(e.style.alignItems="flex-start",e.style.paddingTop=t),e.appendChild(i),n.appendChild(e);const s=setTimeout(()=>{clearTimeout(s),n.removeChild(e)},2e3)}export{d as T};
