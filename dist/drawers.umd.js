(function(p,g){typeof exports=="object"&&typeof module<"u"?g(exports):typeof define=="function"&&define.amd?define(["exports"],g):(p=typeof globalThis<"u"?globalThis:p||self,g(p.Drawers={}))})(this,function(p){"use strict";var le=(p,g,_)=>{if(!g.has(p))throw TypeError("Cannot "+_)};var t=(p,g,_)=>(le(p,g,"read from private field"),_?_.call(p):g.get(p)),m=(p,g,_)=>{if(g.has(p))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(p):g.set(p,_)},O=(p,g,_,V)=>(le(p,g,"write to private field"),V?V.call(p,_):g.set(p,_),_);var j,E,z,q,w,G,A,P,W,R,B,S,L,U,k,x,K,$;function g(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _={exports:{}};(function(r){var n=Object.prototype.hasOwnProperty,e="~";function u(){}Object.create&&(u.prototype=Object.create(null),new u().__proto__||(e=!1));function s(c,i,o){this.fn=c,this.context=i,this.once=o||!1}function f(c,i,o,a,C){if(typeof o!="function")throw new TypeError("The listener must be a function");var v=new s(o,a||c,C),y=e?e+i:i;return c._events[y]?c._events[y].fn?c._events[y]=[c._events[y],v]:c._events[y].push(v):(c._events[y]=v,c._eventsCount++),c}function d(c,i){--c._eventsCount===0?c._events=new u:delete c._events[i]}function h(){this._events=new u,this._eventsCount=0}h.prototype.eventNames=function(){var i=[],o,a;if(this._eventsCount===0)return i;for(a in o=this._events)n.call(o,a)&&i.push(e?a.slice(1):a);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(o)):i},h.prototype.listeners=function(i){var o=e?e+i:i,a=this._events[o];if(!a)return[];if(a.fn)return[a.fn];for(var C=0,v=a.length,y=new Array(v);C<v;C++)y[C]=a[C].fn;return y},h.prototype.listenerCount=function(i){var o=e?e+i:i,a=this._events[o];return a?a.fn?1:a.length:0},h.prototype.emit=function(i,o,a,C,v,y){var M=e?e+i:i;if(!this._events[M])return!1;var l=this._events[M],T=arguments.length,D,b;if(l.fn){switch(l.once&&this.removeListener(i,l.fn,void 0,!0),T){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,o),!0;case 3:return l.fn.call(l.context,o,a),!0;case 4:return l.fn.call(l.context,o,a,C),!0;case 5:return l.fn.call(l.context,o,a,C,v),!0;case 6:return l.fn.call(l.context,o,a,C,v,y),!0}for(b=1,D=new Array(T-1);b<T;b++)D[b-1]=arguments[b];l.fn.apply(l.context,D)}else{var Se=l.length,H;for(b=0;b<Se;b++)switch(l[b].once&&this.removeListener(i,l[b].fn,void 0,!0),T){case 1:l[b].fn.call(l[b].context);break;case 2:l[b].fn.call(l[b].context,o);break;case 3:l[b].fn.call(l[b].context,o,a);break;case 4:l[b].fn.call(l[b].context,o,a,C);break;default:if(!D)for(H=1,D=new Array(T-1);H<T;H++)D[H-1]=arguments[H];l[b].fn.apply(l[b].context,D)}}return!0},h.prototype.on=function(i,o,a){return f(this,i,o,a,!1)},h.prototype.once=function(i,o,a){return f(this,i,o,a,!0)},h.prototype.removeListener=function(i,o,a,C){var v=e?e+i:i;if(!this._events[v])return this;if(!o)return d(this,v),this;var y=this._events[v];if(y.fn)y.fn===o&&(!C||y.once)&&(!a||y.context===a)&&d(this,v);else{for(var M=0,l=[],T=y.length;M<T;M++)(y[M].fn!==o||C&&!y[M].once||a&&y[M].context!==a)&&l.push(y[M]);l.length?this._events[v]=l.length===1?l[0]:l:d(this,v)}return this},h.prototype.removeAllListeners=function(i){var o;return i?(o=e?e+i:i,this._events[o]&&d(this,o)):(this._events=new u,this._eventsCount=0),this},h.prototype.off=h.prototype.removeListener,h.prototype.addListener=h.prototype.on,h.prefixed=e,h.EventEmitter=h,r.exports=h})(_);var V=_.exports;const ae=g(V);var ce=function(n){return ue(n)&&!he(n)};function ue(r){return!!r&&typeof r=="object"}function he(r){var n=Object.prototype.toString.call(r);return n==="[object RegExp]"||n==="[object Date]"||pe(r)}var fe=typeof Symbol=="function"&&Symbol.for,de=fe?Symbol.for("react.element"):60103;function pe(r){return r.$$typeof===de}function we(r){return Array.isArray(r)?[]:{}}function N(r,n){return n.clone!==!1&&n.isMergeableObject(r)?I(we(r),r,n):r}function ye(r,n,e){return r.concat(n).map(function(u){return N(u,e)})}function be(r,n){if(!n.customMerge)return I;var e=n.customMerge(r);return typeof e=="function"?e:I}function ge(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter(function(n){return Object.propertyIsEnumerable.call(r,n)}):[]}function Z(r){return Object.keys(r).concat(ge(r))}function ee(r,n){try{return n in r}catch{return!1}}function me(r,n){return ee(r,n)&&!(Object.hasOwnProperty.call(r,n)&&Object.propertyIsEnumerable.call(r,n))}function Oe(r,n,e){var u={};return e.isMergeableObject(r)&&Z(r).forEach(function(s){u[s]=N(r[s],e)}),Z(n).forEach(function(s){me(r,s)||(ee(r,s)&&e.isMergeableObject(n[s])?u[s]=be(s,e)(r[s],n[s],e):u[s]=N(n[s],e))}),u}function I(r,n,e){e=e||{},e.arrayMerge=e.arrayMerge||ye,e.isMergeableObject=e.isMergeableObject||ce,e.cloneUnlessOtherwiseSpecified=N;var u=Array.isArray(n),s=Array.isArray(r),f=u===s;return f?u?e.arrayMerge(r,n,e):Oe(r,n,e):N(n,e)}I.all=function(n,e){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(u,s){return I(u,s,e)},{})};var ve=I,Ae=ve;const Ee=g(Ae);/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function te(r){return Object.prototype.toString.call(r)==="[object Object]"}function Ce(r){var n,e;return te(r)===!1?!1:(n=r.constructor,n===void 0?!0:(e=n.prototype,!(te(e)===!1||e.hasOwnProperty("isPrototypeOf")===!1)))}function X(r){return r instanceof Element?r:document.querySelector(r)}async function ne(r){return await new Promise(n=>setTimeout(n,r))}const _e='[data-elem="drawer.panel"]',Y="data-drawers-group",je=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],re={modal:!0,focusOnChild:!0,closeOnEsc:!0,closeOnOutsideClick:!0,closeOnUnderlayClick:!0,onCloseConfirm:()=>!0,onBeforeClose:null,onClose:null,onCloseAnimationEnd:null,onBeforeOpen:null,onOpen:null,onOpenAnimationEnd:null,openClass:"drawer_open",openAnimationDuration:0,closeAnimationDuration:0,lockPageScroll:!0};function se(r){return Ee.all(r,{isMergeableObject:Ce})}class J{constructor({target:n,type:e,owner:u}){m(this,j,void 0);m(this,E,void 0);m(this,z,void 0);m(this,q,!1);const s=X(n);if(!s)throw new Error("Trigger element cannot be found");O(this,j,s),O(this,E,u),O(this,z,e),this.init()}get isActive(){return t(this,q)}get owner(){return t(this,E)}init(){t(this,j).addEventListener("click",n=>this.clickHandler(n)),t(this,E).on("open",()=>this.setActive(!0)),t(this,E).on("close",()=>this.setActive(!1))}clickHandler(n){n.__drawerTrigger=this,t(this,z)==="open"?t(this,E).isOpen||t(this,E).open(t(this,j)):t(this,z)==="close"?t(this,E).isOpen&&t(this,E).close(t(this,j)):t(this,E).isOpen?t(this,E).close(t(this,j)):t(this,E).open(t(this,j))}setActive(n){O(this,q,n),n?t(this,j).classList.add("drawer-trigger_active"):t(this,j).classList.remove("drawer-trigger_active")}}j=new WeakMap,E=new WeakMap,z=new WeakMap,q=new WeakMap;class ie extends ae{constructor({target:e,options:u}){super();m(this,w,void 0);m(this,G,void 0);m(this,A,void 0);m(this,P,void 0);m(this,W,void 0);m(this,R,void 0);this.handleDocumentClick=async h=>{var o;if(((o=h.__drawerTrigger)==null?void 0:o.owner)===this)return;const c=h.target;if(h.composedPath(),t(this,A).panel.contains(c))return;const i=c==null?void 0:c.closest("[data-drawer]");i?i.getAttribute("data-drawer")===t(this,R)?this.handleUnderlayClick(h):this.handleOtherDrawerClick(h):this.handleOutsideClick(h)},this.handleKeydown=h=>{t(this,w).closeOnEsc&&h.key==="Escape"&&this.close()};const s=se(u?[re,u]:[re]),f=X(e);if(f===null)throw new Error("Drawer's root cannot be found");const d=f.querySelector(_e);if(d===null)throw new Error("Drawer's panel cannot be found");O(this,A,{root:f,panel:d}),O(this,R,f.getAttribute("data-drawer")),this.setOptions(s),t(this,A).panel.setAttribute("tabindex","-1"),t(this,A).root.classList.add("drawer_initialized")}addEventListeners(){t(this,A).root.addEventListener("keydown",this.handleKeydown),document.addEventListener("click",this.handleDocumentClick)}removeEventListeners(){t(this,A).root.removeEventListener("keydown",this.handleKeydown),document.removeEventListener("click",this.handleDocumentClick)}get isOpen(){return t(this,P)}get isModal(){return t(this,w).modal}set isModal(e){t(this,A).root.classList[e?"add":"remove"]("drawer_modal")}set zIndex(e){t(this,A).root.style.setProperty("--z-index",String(e)),O(this,G,e)}get zIndex(){return t(this,G)}async open(e){t(this,P)||(this.emit("beforeOpen",{drawer:this,trigger:e}),O(this,P,!0),t(this,A).root.classList.add(t(this,w).openClass),this.emit("open",{drawer:this,trigger:e}),typeof t(this,w).openAnimationDuration=="number"&&ne(t(this,w).openAnimationDuration),this.emit("openAnimationEnd",{drawer:this,trigger:e}),this.focus(),this.addEventListeners())}async close(e){t(this,w).onCloseConfirm&&!t(this,w).onCloseConfirm(this,e)||(this.emit("beforeClose",{drawer:this,trigger:e}),this.removeEventListeners(),O(this,P,!1),t(this,A).root.classList.remove(t(this,w).openClass),this.emit("close",{drawer:this,trigger:e}),typeof t(this,w).closeAnimationDuration=="number"&&ne(t(this,w).closeAnimationDuration),this.emit("closeAnimationEnd",{drawer:this,trigger:e}))}handleOtherDrawerClick(e){}handleOutsideClick(e){console.log(this,"handleOutsideClick"),t(this,w).closeOnOutsideClick&&(typeof t(this,w).closeOnOutsideClick=="object"&&t(this,w).closeOnOutsideClick.hasOwnProperty("checkTarget")?t(this,w).closeOnOutsideClick.checkTarget(e.target)&&this.close():this.close())}handleUnderlayClick(e){t(this,w).closeOnOutsideClick&&this.close()}focus(){t(this,w).focusOnChild&&this.focusChild()||this.focusSelf()}focusSelf(){t(this,A).panel.focus()}focusChild(){const e=t(this,A).panel.querySelector(je.join(","));return e?(e.focus(),!0):!1}setOptions(e){var u;e.hasOwnProperty("modal")&&((u=t(this,w))==null?void 0:u.modal)!==e.modal&&(this.isModal=e.modal),O(this,w,t(this,w)?se([t(this,w),e]):e)}assignGroup(e){O(this,W,e)}}w=new WeakMap,G=new WeakMap,A=new WeakMap,P=new WeakMap,W=new WeakMap,R=new WeakMap;class oe{constructor(n){m(this,B,void 0);m(this,S,void 0);m(this,L,void 0);m(this,U,void 0);m(this,k,void 0);m(this,x,void 0);O(this,S,[]),O(this,L,[]),O(this,k,new Set),O(this,x,new Map),this.onBeforeOpen=({drawer:s,trigger:f})=>{s.isModal?(t(this,x).set(s,t(this,S).length),t(this,S).push(s),s.zIndex=t(this,L).length+t(this,S).length):(t(this,x).set(s,t(this,L).length),t(this,L).push(s),s.zIndex=t(this,L).length,t(this,S).length>0&&t(this,S).forEach((d,h)=>d.zIndex=t(this,L).length+h+1)),this.lockScroll(s)},this.onCloseAnimationEnd=({drawer:s,trigger:f})=>{const d=s.isModal?t(this,S):t(this,L);for(delete d[t(this,x).get(s)];d.length&&!d.at(-1);)d.pop();t(this,x).delete(s),this.unlockScroll(s)};const e=X(n);if(e===null)throw new Error("Drawer's group root cannot be found");O(this,B,e);const u=t(this,B).closest("[data-scrollable], html");if(u===null)throw new Error("Scrollable container for group root cannot be found");O(this,U,u)}add(n){n.on("beforeOpen",this.onBeforeOpen),n.on("closeAnimationEnd",this.onCloseAnimationEnd),n.assignGroup(this)}lockScroll(n){t(this,k).size===0&&t(this,U).classList.add("scroll-lock-by-drawer"),t(this,k).add(n)}unlockScroll(n){t(this,k).delete(n),t(this,k).size===0&&t(this,U).classList.remove("scroll-lock-by-drawer")}}B=new WeakMap,S=new WeakMap,L=new WeakMap,U=new WeakMap,k=new WeakMap,x=new WeakMap;const F=class F{constructor(){m(this,K,new Map);m(this,$,new Map);if(F.instance)return F.instance;F.instance=this}init(n){document.querySelectorAll(`[${Y}]`).forEach(f=>{const d=f.getAttribute(Y);typeof d=="string"&&t(this,$).set(d,new oe(f))}),document.querySelectorAll("[data-drawer]").forEach(f=>{var o;const d=f.getAttribute("data-drawer");if(typeof d!="string")return;const h=new ie({target:f,options:n});t(this,K).set(d,h);const c=f.closest(`[${Y}]`),i=c==null?void 0:c.getAttribute(Y);if(typeof i!="string")throw new Error("Group doesn't have alias set correctly");(o=t(this,$).get(i))==null||o.add(h)}),document.querySelectorAll("[data-drawer-open], [data-drawer-close], [data-drawer-toggle]").forEach(f=>{if(f.hasAttribute("data-drawer-open")){const d=f.getAttribute("data-drawer-open");new J({target:f,type:"open",owner:this.get(d)})}else if(f.hasAttribute("data-drawer-close")){const d=f.getAttribute("data-drawer-close");new J({target:f,type:"close",owner:this.get(d)})}else{const d=f.getAttribute("data-drawer-toggle");new J({target:f,type:"toggle",owner:this.get(d)})}})}open(n,{trigger:e,options:u}={}){var s;(s=this.get(n))==null||s.open(e)}close(n,{trigger:e,options:u}={}){var s;(s=this.get(n))==null||s.close(e)}get(n){return typeof n=="string"&&t(this,K).get(n)||null}};K=new WeakMap,$=new WeakMap;let Q=F;typeof window<"u"&&(window.hasOwnProperty("app")||(window.app={}),window.app.drawers=new Q),p.Drawer=ie,p.DrawersGroup=oe,p.Trigger=J,p.default=Q,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
