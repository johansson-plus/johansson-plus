(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{720:function(e,t,n){Promise.resolve().then(n.bind(n,9185))},9185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437);n(4332);var a=n(4080),l=n.n(a);let o=e=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push(e)},i={gtmId:"GTM-W7K2939",auth:"U_vpzY9li4EGOIxcHUPH0Q",preview:"env-3"};i.auth="G7DaCt68dZYo3M8G_aij-Q",i.preview="env-1";let u=i?"https://www.googletagmanager.com/gtm.js?id=".concat(i.gtmId,"&gtm_auth=").concat(i.auth,"&gtm_preview=").concat(i.preview,"&gtm_cookies_win=x"):void 0;function s(e){let{children:t}=e;return(0,r.jsx)("html",{lang:"en",children:(0,r.jsxs)("body",{children:[t,(0,r.jsx)(l(),{src:"https://cdn.usefathom.com/script.js","data-spa":"auto","data-site":"WKVAFXWQ",defer:!0}),(0,r.jsx)(l(),{defer:!0,src:"https://plausible.io/js/script.outbound-links.js","data-domain":"johansson.plus"}),(0,r.jsx)(l(),{"data-collect-dnt":"true",async:!0,defer:!0,src:"https://scripts.simpleanalyticscdn.com/latest.js"}),(0,r.jsx)(l(),{async:!0,src:u,onLoad:()=>{o({event:"gtm.js","gtm.start":new Date().getTime()})}})]})})}},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return o},isEqualNode:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?a[l]=!!n[e]:a.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:o}=n;return o?a.innerHTML=o.__html||"":l&&(a.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),a}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let s=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(l(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return b}});let r=n(9920),a=n(1452),l=n(7437),o=r._(n(4887)),i=a._(n(2265)),u=n(6590),s=n(905),c=n(9189),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:o="",strategy:i="afterInteractive",onError:u,stylesheets:c}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,u);return}let m=()=>{a&&a(),f.add(h)},b=document.createElement("script"),_=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(l?(b.innerHTML=l.__html||"",m()):o?(b.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",m()):t&&(b.src=t,d.set(t,_)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();b.setAttribute(e,r)}"worker"===i&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",i),c&&y(c),document.body.appendChild(b)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function b(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:d,stylesheets:p,...y}=e,{updateScripts:m,scripts:b,getIsSsr:_,appDir:g,nonce:v}=(0,i.useContext)(u.HeadManagerContext),w=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let j=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!j.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),j.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(b[s]=(b[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...y}]),m(b)):_&&_()?f.add(t||n):_&&!_()&&h(e)),g){if(p&&p.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v}:{as:"script",nonce:v}),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v}:{as:"script",nonce:v})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let g=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4332:function(){}},function(e){e.O(0,[228,971,23,744],function(){return e(e.s=720)}),_N_E=e.O()}]);