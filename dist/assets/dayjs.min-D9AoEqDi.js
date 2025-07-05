import{m as R,h as X,c as F}from"./index-BhbeHkZ8.js";const it=R("blog",()=>{const $=X([{id:1,title:"Vue3 组合式API入门指南",excerpt:"Vue3的组合式API为我们提供了更灵活的逻辑复用方式，本文将详细介绍其使用方法...",content:`# Vue3 组合式API入门指南

Vue3的组合式API为我们提供了更灵活的逻辑复用方式，本文将详细介绍其使用方法。

## 什么是组合式API？

组合式API是Vue3中新增的一种编写组件逻辑的方式，它允许我们使用导入的API函数来编写组件逻辑。

## 基本用法

\`\`\`javascript
import { ref, reactive, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}
\`\`\`

## 优势

1. 更好的逻辑复用
2. 更好的类型推导
3. 更小的打包体积

希望这篇文章对你有所帮助！`,author:"张三",date:"2024-01-15",tags:["Vue3","前端","教程"],readTime:5},{id:2,title:"Vite构建工具详解",excerpt:"Vite是一个现代化的前端构建工具，它提供了极快的开发服务器启动和热更新...",content:`# Vite构建工具详解

Vite是一个现代化的前端构建工具，它提供了极快的开发服务器启动和热更新。

## 为什么选择Vite？

Vite具有以下优势：

- 极快的冷启动
- 即时的热模块替换
- 真正的按需加载
- 丰富的功能

## 基本配置

\`\`\`javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  }
})
\`\`\`

## 插件系统

Vite拥有丰富的插件生态系统，可以满足各种开发需求。`,author:"李四",date:"2024-01-10",tags:["Vite","构建工具","前端"],readTime:8},{id:3,title:"Pinia状态管理最佳实践",excerpt:"Pinia是Vue3官方推荐的状态管理库，它提供了简单直观的API...",content:`# Pinia状态管理最佳实践

Pinia是Vue3官方推荐的状态管理库，它提供了简单直观的API。

## 安装和配置

\`\`\`bash
npm install pinia
\`\`\`

## 创建Store

\`\`\`javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
\`\`\`

## 在组件中使用

\`\`\`javascript
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()
    return { counter }
  }
}
\`\`\``,author:"王五",date:"2024-01-05",tags:["Pinia","状态管理","Vue3"],readTime:6}]),N=F(()=>g=>$.value.find(v=>v.id===parseInt(g))),P=F(()=>g=>$.value.filter(v=>v.tags.includes(g))),w=F(()=>{const g=new Set;return $.value.forEach(v=>{v.tags.forEach(y=>g.add(y))}),Array.from(g)});return{posts:$,getPostById:N,getPostsByTag:P,getAllTags:w}});var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et($){return $&&$.__esModule&&Object.prototype.hasOwnProperty.call($,"default")?$.default:$}var z={exports:{}};(function($,N){(function(P,w){$.exports=w()})(tt,function(){var P=1e3,w=6e4,g=36e5,v="millisecond",y="second",V="minute",T="hour",M="day",k="week",p="month",U="quarter",S="year",x="date",B="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},W=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},K={s:W,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+W(r,2,"0")+":"+W(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,p),s=t-e<0,u=n.clone().add(r+(s?-1:1),p);return+(-(r+(t-e)/(s?e-u:u-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:p,y:S,w:k,d:M,D:x,h:T,m:V,s:y,ms:v,Q:U}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},C="en",b={};b[C]=Q;var J="$isDayjsObject",E=function(i){return i instanceof H||!(!i||!i[J])},Y=function i(n,t,r){var e;if(!n)return C;if(typeof n=="string"){var s=n.toLowerCase();b[s]&&(e=s),t&&(b[s]=t,e=s);var u=n.split("-");if(!e&&u.length>1)return i(u[0])}else{var o=n.name;b[o]=n,e=o}return!r&&e&&(C=e),e||!r&&C},f=function(i,n){if(E(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new H(t)},a=K;a.l=Y,a.i=E,a.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var H=function(){function i(t){this.$L=Y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[J]=!0}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(q);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return s?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==B},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!a.u(r)||r,u=a.p(t),o=function(_,h){var D=a.w(e.$u?Date.UTC(e.$y,h,_):new Date(e.$y,h,_),e);return s?D:D.endOf(M)},c=function(_,h){return a.w(e.toDate()[_].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(h)),e)},d=this.$W,l=this.$M,m=this.$D,A="set"+(this.$u?"UTC":"");switch(u){case S:return s?o(1,0):o(31,11);case p:return s?o(1,l):o(0,l+1);case k:var O=this.$locale().weekStart||0,I=(d<O?d+7:d)-O;return o(s?m-I:m+(6-I),l);case M:case x:return c(A+"Hours",0);case T:return c(A+"Minutes",1);case V:return c(A+"Seconds",2);case y:return c(A+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[M]=u+"Date",e[x]=u+"Date",e[p]=u+"Month",e[S]=u+"FullYear",e[T]=u+"Hours",e[V]=u+"Minutes",e[y]=u+"Seconds",e[v]=u+"Milliseconds",e)[s],c=s===M?this.$D+(r-this.$W):r;if(s===p||s===S){var d=this.clone().set(x,1);d.$d[o](c),d.init(),this.$d=d.set(x,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var u=a.p(r),o=function(l){var m=f(s);return a.w(m.date(m.date()+Math.round(l*t)),s)};if(u===p)return this.set(p,this.$M+t);if(u===S)return this.set(S,this.$y+t);if(u===M)return o(1);if(u===k)return o(7);var c=(e={},e[V]=w,e[T]=g,e[y]=P,e)[u]||1,d=this.$d.getTime()+t*c;return a.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||B;var s=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,d=this.$M,l=e.weekdays,m=e.months,A=e.meridiem,O=function(h,D,j,L){return h&&(h[D]||h(r,s))||j[D].slice(0,L)},I=function(h){return a.s(o%12||12,h,"0")},_=A||function(h,D,j){var L=h<12?"AM":"PM";return j?L.toLowerCase():L};return s.replace(G,function(h,D){return D||function(j){switch(j){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return d+1;case"MM":return a.s(d+1,2,"0");case"MMM":return O(e.monthsShort,d,m,3);case"MMMM":return O(m,d);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return O(e.weekdaysMin,r.$W,l,2);case"ddd":return O(e.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return _(o,c,!0);case"A":return _(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}(h)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,u=this,o=a.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*w,l=this-c,m=function(){return a.m(u,c)};switch(o){case S:s=m()/12;break;case p:s=m();break;case U:s=m()/3;break;case k:s=(l-d)/6048e5;break;case M:s=(l-d)/864e5;break;case T:s=l/g;break;case V:s=l/w;break;case y:s=l/P;break;default:s=l}return e?s:a.a(s)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return b[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=Y(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),Z=H.prototype;return f.prototype=Z,[["$ms",v],["$s",y],["$m",V],["$H",T],["$W",M],["$M",p],["$y",S],["$D",x]].forEach(function(i){Z[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,H,f),i.$i=!0),f},f.locale=Y,f.isDayjs=E,f.unix=function(i){return f(1e3*i)},f.en=b[C],f.Ls=b,f.p={},f})})(z);var nt=z.exports;const st=et(nt);export{st as d,it as u};
