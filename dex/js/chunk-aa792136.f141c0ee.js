(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa792136"],{"8d55":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"sell-history"},[s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("market.text1")))]),s("span",[t._v(t._s(t.$t("history.text5")))]),s("span",[t._v(t._s(t.$t("market.text4")))]),s("span",[t._v(t._s(t.$t("LatestDeals.text1")))]),s("span",[t._v(t._s(t.$t("history.text7")))])]),s("div",{staticClass:"list"},[t._l(t.history,(function(i){return[s("div",{staticClass:"list-item"},[s("span",[t._v(t._s(t.pair.token.symbol)+"/"+t._s(t.pair.gold.symbol))]),s("span",[t._v(t._s(i.amount))]),s("span",[t._v(t._s(i.price))]),s("span",[t._v(t._s(i.time))]),s("span",[t._v(t._s(i.total))])])]}))],2)])},a=[],r=(i("14d9"),i("2f62")),o=i("044d"),n={data(){return{history:[]}},computed:{...Object(r["b"])(["address","pair"])},created(){this.address&&this.init()},methods:{async init(){try{const t=await Object(o["b"])(this.pair.address,this.address,"sell");if(t&&t.length>0){const s=[];t.forEach(t=>{const i=t.sellerAcquired.fromWei(this.pair.token.decimals).toBN().times("1e12".toBN().minus(t.chargeRate)).div(1e12).toFixed();s.push({amount:t.buyerAcquired.fromWei(this.pair.token.decimals).toFixed(2),price:t.price.fromWei(this.pair.gold.decimals).toFixed(2),time:t.time.format(),total:i.toFixed(2)})}),this.history=s}}catch(t){}}}},d=n,c=d,l=(i("9de2"),i("2877")),p=Object(l["a"])(c,e,a,!1,null,"4a6d42a6",null);s["default"]=p.exports},"9de2":function(t,s,i){"use strict";i("f4d6")},f4d6:function(t,s,i){}}]);