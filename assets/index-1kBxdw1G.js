(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Um={exports:{}},Ol={},km={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),Xv=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),Kv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),Qv=Symbol.for("react.lazy"),Eh=Symbol.iterator;function Jv(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var Om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm=Object.assign,zm={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=zm,this.updater=n||Om}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vm(){}Vm.prototype=Ws.prototype;function Zd(t,e,n){this.props=t,this.context=e,this.refs=zm,this.updater=n||Om}var Qd=Zd.prototype=new Vm;Qd.constructor=Zd;Bm(Qd,Ws.prototype);Qd.isPureReactComponent=!0;var Th=Array.isArray,Hm=Object.prototype.hasOwnProperty,Jd={current:null},Gm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Hm.call(e,i)&&!Gm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:qa,type:t,key:s,ref:a,props:r,_owner:Jd.current}}function ex(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function tx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tx(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qa:case Gv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+sc(a,0):i,Th(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),Go(r,e,n,"",function(u){return u})):r!=null&&(ef(r)&&(r=ex(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+sc(s,o);a+=Go(s,e,n,l,r)}else if(l=Jv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+sc(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function io(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function nx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Wo={transition:null},ix={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Jd};function jm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ws;je.Fragment=Wv;je.Profiler=Xv;je.PureComponent=Zd;je.StrictMode=jv;je.Suspense=Kv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;je.act=jm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Hm.call(e,l)&&!Gm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:qa,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$v,_context:t},t.Consumer=t};je.createElement=Wm;je.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Yv,render:t}};je.isValidElement=ef;je.lazy=function(t){return{$$typeof:Qv,_payload:{_status:-1,_result:t},_init:nx}};je.memo=function(t,e){return{$$typeof:Zv,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};je.unstable_act=jm;je.useCallback=function(t,e){return fn.current.useCallback(t,e)};je.useContext=function(t){return fn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};je.useEffect=function(t,e){return fn.current.useEffect(t,e)};je.useId=function(){return fn.current.useId()};je.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return fn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};je.useRef=function(t){return fn.current.useRef(t)};je.useState=function(t){return fn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return fn.current.useTransition()};je.version="18.3.1";km.exports=je;var qe=km.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx=qe,sx=Symbol.for("react.element"),ax=Symbol.for("react.fragment"),ox=Object.prototype.hasOwnProperty,lx=rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cx={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)ox.call(e,i)&&!cx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sx,type:t,key:s,ref:a,props:r,_owner:lx.current}}Ol.Fragment=ax;Ol.jsx=Xm;Ol.jsxs=Xm;Um.exports=Ol;var c=Um.exports,$m={exports:{}},Rn={},qm={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,q){var te=k.length;k.push(q);e:for(;0<te;){var Y=te-1>>>1,ce=k[Y];if(0<r(ce,q))k[Y]=q,k[te]=ce,te=Y;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var q=k[0],te=k.pop();if(te!==q){k[0]=te;e:for(var Y=0,ce=k.length,Ue=ce>>>1;Y<Ue;){var Ie=2*(Y+1)-1,Ge=k[Ie],Z=Ie+1,oe=k[Z];if(0>r(Ge,te))Z<ce&&0>r(oe,Ge)?(k[Y]=oe,k[Z]=te,Y=Z):(k[Y]=Ge,k[Ie]=te,Y=Ie);else if(Z<ce&&0>r(oe,te))k[Y]=oe,k[Z]=te,Y=Z;else break e}}return q}function r(k,q){var te=k.sortIndex-q.sortIndex;return te!==0?te:k.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,p=null,d=3,m=!1,x=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(k){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=k)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function S(k){if(T=!1,M(k),!x)if(n(l)!==null)x=!0,K(b);else{var q=n(u);q!==null&&G(S,q.startTime-k)}}function b(k,q){x=!1,T&&(T=!1,f(_),_=-1),m=!0;var te=d;try{for(M(q),p=n(l);p!==null&&(!(p.expirationTime>q)||k&&!D());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,d=p.priorityLevel;var ce=Y(p.expirationTime<=q);q=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(l)&&i(l),M(q)}else i(l);p=n(l)}if(p!==null)var Ue=!0;else{var Ie=n(u);Ie!==null&&G(S,Ie.startTime-q),Ue=!1}return Ue}finally{p=null,d=te,m=!1}}var w=!1,R=null,_=-1,C=5,P=-1;function D(){return!(t.unstable_now()-P<C)}function I(){if(R!==null){var k=t.unstable_now();P=k;var q=!0;try{q=R(!0,k)}finally{q?X():(w=!1,R=null)}}else w=!1}var X;if(typeof y=="function")X=function(){y(I)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,B=Q.port2;Q.port1.onmessage=I,X=function(){B.postMessage(null)}}else X=function(){v(I,0)};function K(k){R=k,w||(w=!0,X())}function G(k,q){_=v(function(){k(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,K(b))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var te=d;d=q;try{return k()}finally{d=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var te=d;d=k;try{return q()}finally{d=te}},t.unstable_scheduleCallback=function(k,q,te){var Y=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Y+te:Y):te=Y,k){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=te+ce,k={id:h++,callback:q,priorityLevel:k,startTime:te,expirationTime:ce,sortIndex:-1},te>Y?(k.sortIndex=te,e(u,k),n(l)===null&&k===n(u)&&(T?(f(_),_=-1):T=!0,G(S,te-Y))):(k.sortIndex=ce,e(l,k),x||m||(x=!0,K(b))),k},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(k){var q=d;return function(){var te=d;d=q;try{return k.apply(this,arguments)}finally{d=te}}}})(Ym);qm.exports=Ym;var ux=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx=qe,Cn=ux;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Km=new Set,Ca={};function Wr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Ca[t]=e,t=0;t<e.length;t++)Km.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,fx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},bh={};function hx(t){return hu.call(bh,t)?!0:hu.call(Ah,t)?!1:fx.test(t)?bh[t]=!0:(Ah[t]=!0,!1)}function px(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mx(t,e,n,i){if(e===null||typeof e>"u"||px(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);Yt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);Yt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);Yt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mx(e,n,r,i)&&(n=null),i||r===null?hx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),us=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,ac;function fa(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var oc=!1;function lc(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function gx(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=lc(t.type,!1),t;case 11:return t=lc(t.type.render,!1),t;case 1:return t=lc(t.type,!0),t;default:return""}}function vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case us:return"Portal";case pu:return"Profiler";case sf:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qm:return(t.displayName||"Context")+".Consumer";case Zm:return(t._context.displayName||"Context")+".Provider";case af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case of:return e=t.displayName||null,e!==null?e:vu(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return vu(t(e))}catch{}}return null}function vx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function eg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xx(t){var e=eg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=xx(t))}function tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=eg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ng(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function _u(t,e){ng(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&yu(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yu(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ha(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function ig(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ao,sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_x=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){_x.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function ag(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ag(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yx=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(t,e){if(e){if(yx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Au=null,Es=null,Ts=null;function Lh(t){if(t=Za(t)){if(typeof Au!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Gl(e),Au(t.stateNode,t.type,e))}}function lg(t){Es?Ts?Ts.push(t):Ts=[t]:Es=t}function cg(){if(Es){var t=Es,e=Ts;if(Ts=Es=null,Lh(t),e)for(t=0;t<e.length;t++)Lh(e[t])}}function ug(t,e){return t(e)}function dg(){}var cc=!1;function fg(t,e,n){if(cc)return t(e,n);cc=!0;try{return ug(t,e,n)}finally{cc=!1,(Es!==null||Ts!==null)&&(dg(),cg())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var bu=!1;if(Li)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{bu=!1}function Sx(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ya=!1,ll=null,cl=!1,Cu=null,Mx={onError:function(t){ya=!0,ll=t}};function Ex(t,e,n,i,r,s,a,o,l){ya=!1,ll=null,Sx.apply(Mx,arguments)}function Tx(t,e,n,i,r,s,a,o,l){if(Ex.apply(this,arguments),ya){if(ya){var u=ll;ya=!1,ll=null}else throw Error(se(198));cl||(cl=!0,Cu=u)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(jr(t)!==t)throw Error(se(188))}function wx(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ih(r),t;if(s===i)return Ih(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function pg(t){return t=wx(t),t!==null?mg(t):null}function mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mg(t);if(e!==null)return e;t=t.sibling}return null}var gg=Cn.unstable_scheduleCallback,Fh=Cn.unstable_cancelCallback,Ax=Cn.unstable_shouldYield,bx=Cn.unstable_requestPaint,Dt=Cn.unstable_now,Cx=Cn.unstable_getCurrentPriorityLevel,cf=Cn.unstable_ImmediatePriority,vg=Cn.unstable_UserBlockingPriority,ul=Cn.unstable_NormalPriority,Rx=Cn.unstable_LowPriority,xg=Cn.unstable_IdlePriority,Bl=null,di=null;function Px(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Lx,Dx=Math.log,Nx=Math.LN2;function Lx(t){return t>>>=0,t===0?32:31-(Dx(t)/Nx|0)|0}var oo=64,lo=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=pa(o):(s&=a,s!==0&&(i=pa(s)))}else a=n&~r,a!==0?i=pa(a):s!==0&&(i=pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ix(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Ix(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _g(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function Ux(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function yg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sg,df,Mg,Eg,Tg,Pu=!1,co=[],rr=null,sr=null,ar=null,Da=new Map,Na=new Map,Qi=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ox(t,e,n,i,r){switch(e){case"focusin":return rr=Js(rr,t,e,n,i,r),!0;case"dragenter":return sr=Js(sr,t,e,n,i,r),!0;case"mouseover":return ar=Js(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,Js(Da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Js(Na.get(s)||null,t,e,n,i,r)),!0}return!1}function wg(t){var e=Rr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=hg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wu=i,n.target.dispatchEvent(i),wu=null}else return e=Za(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){jo(t)&&n.delete(e)}function Bx(){Pu=!1,rr!==null&&jo(rr)&&(rr=null),sr!==null&&jo(sr)&&(sr=null),ar!==null&&jo(ar)&&(ar=null),Da.forEach(kh),Na.forEach(kh)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Bx)))}function La(t){function e(r){return ea(r,t)}if(0<co.length){ea(co[0],t);for(var n=1;n<co.length;n++){var i=co[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&ea(rr,t),sr!==null&&ea(sr,t),ar!==null&&ea(ar,t),Da.forEach(e),Na.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&Qi.shift()}var ws=Bi.ReactCurrentBatchConfig,fl=!0;function zx(t,e,n,i){var r=it,s=ws.transition;ws.transition=null;try{it=1,ff(t,e,n,i)}finally{it=r,ws.transition=s}}function Vx(t,e,n,i){var r=it,s=ws.transition;ws.transition=null;try{it=4,ff(t,e,n,i)}finally{it=r,ws.transition=s}}function ff(t,e,n,i){if(fl){var r=Du(t,e,n,i);if(r===null)yc(t,e,i,hl,n),Uh(t,i);else if(Ox(r,t,e,n,i))i.stopPropagation();else if(Uh(t,i),e&4&&-1<kx.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&Sg(s),s=Du(t,e,n,i),s===null&&yc(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yc(t,e,i,null,n)}}var hl=null;function Du(t,e,n,i){if(hl=null,t=lf(i),t=Rr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cx()){case cf:return 1;case vg:return 4;case ul:case Rx:return 16;case xg:return 536870912;default:return 16}default:return 16}}var tr=null,hf=null,Xo=null;function bg(){if(Xo)return Xo;var t,e=hf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xo=r.slice(t,1<i?1-i:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Oh(){return!1}function Pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:Oh,this.isPropagationStopped=Oh,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=Pn(js),Ka=St({},js,{view:0,detail:0}),Hx=Pn(Ka),dc,fc,ta,zl=St({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(dc=t.screenX-ta.screenX,fc=t.screenY-ta.screenY):fc=dc=0,ta=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),Bh=Pn(zl),Gx=St({},zl,{dataTransfer:0}),Wx=Pn(Gx),jx=St({},Ka,{relatedTarget:0}),hc=Pn(jx),Xx=St({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=Pn(Xx),qx=St({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yx=Pn(qx),Kx=St({},js,{data:0}),zh=Pn(Kx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jx[t])?!!e[t]:!1}function mf(){return e_}var t_=St({},Ka,{key:function(t){if(t.key){var e=Zx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n_=Pn(t_),i_=St({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=Pn(i_),r_=St({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),s_=Pn(r_),a_=St({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),o_=Pn(a_),l_=St({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=Pn(l_),u_=[9,13,27,32],gf=Li&&"CompositionEvent"in window,Sa=null;Li&&"documentMode"in document&&(Sa=document.documentMode);var d_=Li&&"TextEvent"in window&&!Sa,Cg=Li&&(!gf||Sa&&8<Sa&&11>=Sa),Hh=" ",Gh=!1;function Rg(t,e){switch(t){case"keyup":return u_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function f_(t,e){switch(t){case"compositionend":return Pg(e);case"keypress":return e.which!==32?null:(Gh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Gh?null:t;default:return null}}function h_(t,e){if(fs)return t==="compositionend"||!gf&&Rg(t,e)?(t=bg(),Xo=hf=tr=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cg&&e.locale!=="ko"?null:e.data;default:return null}}var p_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!p_[t.type]:e==="textarea"}function Dg(t,e,n,i){lg(i),e=pl(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Ia=null;function m_(t){Hg(t,0)}function Vl(t){var e=ms(t);if(tg(e))return t}function g_(t,e){if(t==="change")return e}var Ng=!1;if(Li){var pc;if(Li){var mc="oninput"in document;if(!mc){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),mc=typeof jh.oninput=="function"}pc=mc}else pc=!1;Ng=pc&&(!document.documentMode||9<document.documentMode)}function Xh(){Ma&&(Ma.detachEvent("onpropertychange",Lg),Ia=Ma=null)}function Lg(t){if(t.propertyName==="value"&&Vl(Ia)){var e=[];Dg(e,Ia,t,lf(t)),fg(m_,e)}}function v_(t,e,n){t==="focusin"?(Xh(),Ma=e,Ia=n,Ma.attachEvent("onpropertychange",Lg)):t==="focusout"&&Xh()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Ia)}function __(t,e){if(t==="click")return Vl(e)}function y_(t,e){if(t==="input"||t==="change")return Vl(e)}function S_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:S_;function Fa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=$h(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function Ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M_(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(i!==null&&vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E_=Li&&"documentMode"in document&&11>=document.documentMode,hs=null,Nu=null,Ea=null,Lu=!1;function Yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||hs==null||hs!==ol(i)||(i=hs,"selectionStart"in i&&vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ea&&Fa(Ea,i)||(Ea=i,i=pl(Nu,"onSelect"),0<i.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},gc={},Ug={};Li&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Hl(t){if(gc[t])return gc[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ug)return gc[t]=e[n];return t}var kg=Hl("animationend"),Og=Hl("animationiteration"),Bg=Hl("animationstart"),zg=Hl("transitionend"),Vg=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Vg.set(t,e),Wr(e,[t])}for(var vc=0;vc<Kh.length;vc++){var xc=Kh[vc],T_=xc.toLowerCase(),w_=xc[0].toUpperCase()+xc.slice(1);gr(T_,"on"+w_)}gr(kg,"onAnimationEnd");gr(Og,"onAnimationIteration");gr(Bg,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(zg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Tx(i,e,void 0,t),t.currentTarget=null}function Hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,u),s=l}}}if(cl)throw t=Cu,cl=!1,Cu=null,t}function ht(t,e){var n=e[Ou];n===void 0&&(n=e[Ou]=new Set);var i=t+"__bubble";n.has(i)||(Gg(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),Gg(n,t,i,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[ho]){t[ho]=!0,Km.forEach(function(n){n!=="selectionchange"&&(A_.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,_c("selectionchange",!1,e))}}function Gg(t,e,n,i){switch(Ag(e)){case 1:var r=zx;break;case 4:r=Vx;break;default:r=ff}n=r.bind(null,e,n,t),r=void 0,!bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Rr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}fg(function(){var u=s,h=lf(n),p=[];e:{var d=Vg.get(t);if(d!==void 0){var m=pf,x=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":m=n_;break;case"focusin":x="focus",m=hc;break;case"focusout":x="blur",m=hc;break;case"beforeblur":case"afterblur":m=hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=s_;break;case kg:case Og:case Bg:m=$x;break;case zg:m=o_;break;case"scroll":m=Hx;break;case"wheel":m=c_;break;case"copy":case"cut":case"paste":m=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vh}var T=(e&4)!==0,v=!T&&t==="scroll",f=T?d!==null?d+"Capture":null:d;T=[];for(var y=u,M;y!==null;){M=y;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,f!==null&&(S=Pa(y,f),S!=null&&T.push(ka(y,S,M)))),v)break;y=y.return}0<T.length&&(d=new m(d,x,null,n,h),p.push({event:d,listeners:T}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==wu&&(x=n.relatedTarget||n.fromElement)&&(Rr(x)||x[Ii]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Rr(x):null,x!==null&&(v=jr(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(T=Bh,S="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(T=Vh,S="onPointerLeave",f="onPointerEnter",y="pointer"),v=m==null?d:ms(m),M=x==null?d:ms(x),d=new T(S,y+"leave",m,n,h),d.target=v,d.relatedTarget=M,S=null,Rr(h)===u&&(T=new T(f,y+"enter",x,n,h),T.target=M,T.relatedTarget=v,S=T),v=S,m&&x)t:{for(T=m,f=x,y=0,M=T;M;M=Yr(M))y++;for(M=0,S=f;S;S=Yr(S))M++;for(;0<y-M;)T=Yr(T),y--;for(;0<M-y;)f=Yr(f),M--;for(;y--;){if(T===f||f!==null&&T===f.alternate)break t;T=Yr(T),f=Yr(f)}T=null}else T=null;m!==null&&Qh(p,d,m,T,!1),x!==null&&v!==null&&Qh(p,v,x,T,!0)}}e:{if(d=u?ms(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=g_;else if(Wh(d))if(Ng)b=y_;else{b=x_;var w=v_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=__);if(b&&(b=b(t,u))){Dg(p,b,n,h);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&yu(d,"number",d.value)}switch(w=u?ms(u):window,t){case"focusin":(Wh(w)||w.contentEditable==="true")&&(hs=w,Nu=u,Ea=null);break;case"focusout":Ea=Nu=hs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Yh(p,n,h);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":Yh(p,n,h)}var R;if(gf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else fs?Rg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Cg&&n.locale!=="ko"&&(fs||_!=="onCompositionStart"?_==="onCompositionEnd"&&fs&&(R=bg()):(tr=h,hf="value"in tr?tr.value:tr.textContent,fs=!0)),w=pl(u,_),0<w.length&&(_=new zh(_,t,null,n,h),p.push({event:_,listeners:w}),R?_.data=R:(R=Pg(n),R!==null&&(_.data=R)))),(R=d_?f_(t,n):h_(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(h=new zh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=R))}Hg(p,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(ka(t,s,r)),s=Pa(t,e),s!=null&&i.push(ka(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Pa(n,s),l!=null&&a.unshift(ka(n,l,o))):r||(l=Pa(n,s),l!=null&&a.push(ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var b_=/\r\n?/g,C_=/\u0000|\uFFFD/g;function Jh(t){return(typeof t=="string"?t:""+t).replace(b_,`
`).replace(C_,"")}function po(t,e,n){if(e=Jh(e),Jh(t)!==e&&n)throw Error(se(425))}function ml(){}var Iu=null,Fu=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,P_=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(D_)}:ku;function D_(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),li="__reactFiber$"+Xs,Oa="__reactProps$"+Xs,Ii="__reactContainer$"+Xs,Ou="__reactEvents$"+Xs,N_="__reactListeners$"+Xs,L_="__reactHandles$"+Xs;function Rr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[li])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[li]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Gl(t){return t[Oa]||null}var Bu=[],gs=-1;function vr(t){return{current:t}}function pt(t){0>gs||(t.current=Bu[gs],Bu[gs]=null,gs--)}function ut(t,e){gs++,Bu[gs]=t.current,t.current=e}var hr={},an=vr(hr),vn=vr(!1),kr=hr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function gl(){pt(vn),pt(an)}function np(t,e,n){if(an.current!==hr)throw Error(se(168));ut(an,e),ut(vn,n)}function Wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,vx(t)||"Unknown",r));return St({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,kr=an.current,ut(an,t),ut(vn,vn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Wg(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,pt(vn),pt(an),ut(an,t)):pt(vn),ut(vn,n)}var wi=null,Wl=!1,Mc=!1;function jg(t){wi===null?wi=[t]:wi.push(t)}function I_(t){Wl=!0,jg(t)}function xr(){if(!Mc&&wi!==null){Mc=!0;var t=0,e=it;try{var n=wi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Wl=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),gg(cf,xr),r}finally{it=e,Mc=!1}}return null}var vs=[],xs=0,xl=null,_l=0,Ln=[],In=0,Or=null,bi=1,Ci="";function Tr(t,e){vs[xs++]=_l,vs[xs++]=xl,xl=t,_l=e}function Xg(t,e,n){Ln[In++]=bi,Ln[In++]=Ci,Ln[In++]=Or,Or=t;var i=bi;t=Ci;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,bi=1<<32-Kn(e)+r|n<<r|i,Ci=s+t}else bi=1<<s|n<<r|i,Ci=t}function xf(t){t.return!==null&&(Tr(t,1),Xg(t,1,0))}function _f(t){for(;t===xl;)xl=vs[--xs],vs[xs]=null,_l=vs[--xs],vs[xs]=null;for(;t===Or;)Or=Ln[--In],Ln[In]=null,Ci=Ln[--In],Ln[In]=null,bi=Ln[--In],Ln[In]=null}var bn=null,An=null,mt=!1,$n=null;function $g(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,An=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:bi,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,An=null,!0):!1;default:return!1}}function zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(mt){var e=An;if(e){var n=e;if(!rp(t,e)){if(zu(t))throw Error(se(418));e=or(n.nextSibling);var i=bn;e&&rp(t,e)?$g(i,n):(t.flags=t.flags&-4097|2,mt=!1,bn=t)}}else{if(zu(t))throw Error(se(418));t.flags=t.flags&-4097|2,mt=!1,bn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function mo(t){if(t!==bn)return!1;if(!mt)return sp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=An)){if(zu(t))throw qg(),Error(se(418));for(;e;)$g(t,e),e=or(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=bn?or(t.stateNode.nextSibling):null;return!0}function qg(){for(var t=An;t;)t=or(t.nextSibling)}function Ls(){An=bn=null,mt=!1}function yf(t){$n===null?$n=[t]:$n.push(t)}var F_=Bi.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function Yg(t){function e(f,y){if(t){var M=f.deletions;M===null?(f.deletions=[y],f.flags|=16):M.push(y)}}function n(f,y){if(!t)return null;for(;y!==null;)e(f,y),y=y.sibling;return null}function i(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function r(f,y){return f=dr(f,y),f.index=0,f.sibling=null,f}function s(f,y,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<y?(f.flags|=2,y):M):(f.flags|=2,y)):(f.flags|=1048576,y)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,y,M,S){return y===null||y.tag!==6?(y=Rc(M,f.mode,S),y.return=f,y):(y=r(y,M),y.return=f,y)}function l(f,y,M,S){var b=M.type;return b===ds?h(f,y,M.props.children,S,M.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ki&&ap(b)===y.type)?(S=r(y,M.props),S.ref=na(f,y,M),S.return=f,S):(S=el(M.type,M.key,M.props,null,f.mode,S),S.ref=na(f,y,M),S.return=f,S)}function u(f,y,M,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==M.containerInfo||y.stateNode.implementation!==M.implementation?(y=Pc(M,f.mode,S),y.return=f,y):(y=r(y,M.children||[]),y.return=f,y)}function h(f,y,M,S,b){return y===null||y.tag!==7?(y=Fr(M,f.mode,S,b),y.return=f,y):(y=r(y,M),y.return=f,y)}function p(f,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Rc(""+y,f.mode,M),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:return M=el(y.type,y.key,y.props,null,f.mode,M),M.ref=na(f,null,y),M.return=f,M;case us:return y=Pc(y,f.mode,M),y.return=f,y;case Ki:var S=y._init;return p(f,S(y._payload),M)}if(ha(y)||Zs(y))return y=Fr(y,f.mode,M,null),y.return=f,y;go(f,y)}return null}function d(f,y,M,S){var b=y!==null?y.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return b!==null?null:o(f,y,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ro:return M.key===b?l(f,y,M,S):null;case us:return M.key===b?u(f,y,M,S):null;case Ki:return b=M._init,d(f,y,b(M._payload),S)}if(ha(M)||Zs(M))return b!==null?null:h(f,y,M,S,null);go(f,M)}return null}function m(f,y,M,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(M)||null,o(y,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ro:return f=f.get(S.key===null?M:S.key)||null,l(y,f,S,b);case us:return f=f.get(S.key===null?M:S.key)||null,u(y,f,S,b);case Ki:var w=S._init;return m(f,y,M,w(S._payload),b)}if(ha(S)||Zs(S))return f=f.get(M)||null,h(y,f,S,b,null);go(y,S)}return null}function x(f,y,M,S){for(var b=null,w=null,R=y,_=y=0,C=null;R!==null&&_<M.length;_++){R.index>_?(C=R,R=null):C=R.sibling;var P=d(f,R,M[_],S);if(P===null){R===null&&(R=C);break}t&&R&&P.alternate===null&&e(f,R),y=s(P,y,_),w===null?b=P:w.sibling=P,w=P,R=C}if(_===M.length)return n(f,R),mt&&Tr(f,_),b;if(R===null){for(;_<M.length;_++)R=p(f,M[_],S),R!==null&&(y=s(R,y,_),w===null?b=R:w.sibling=R,w=R);return mt&&Tr(f,_),b}for(R=i(f,R);_<M.length;_++)C=m(R,f,_,M[_],S),C!==null&&(t&&C.alternate!==null&&R.delete(C.key===null?_:C.key),y=s(C,y,_),w===null?b=C:w.sibling=C,w=C);return t&&R.forEach(function(D){return e(f,D)}),mt&&Tr(f,_),b}function T(f,y,M,S){var b=Zs(M);if(typeof b!="function")throw Error(se(150));if(M=b.call(M),M==null)throw Error(se(151));for(var w=b=null,R=y,_=y=0,C=null,P=M.next();R!==null&&!P.done;_++,P=M.next()){R.index>_?(C=R,R=null):C=R.sibling;var D=d(f,R,P.value,S);if(D===null){R===null&&(R=C);break}t&&R&&D.alternate===null&&e(f,R),y=s(D,y,_),w===null?b=D:w.sibling=D,w=D,R=C}if(P.done)return n(f,R),mt&&Tr(f,_),b;if(R===null){for(;!P.done;_++,P=M.next())P=p(f,P.value,S),P!==null&&(y=s(P,y,_),w===null?b=P:w.sibling=P,w=P);return mt&&Tr(f,_),b}for(R=i(f,R);!P.done;_++,P=M.next())P=m(R,f,_,P.value,S),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?_:P.key),y=s(P,y,_),w===null?b=P:w.sibling=P,w=P);return t&&R.forEach(function(I){return e(f,I)}),mt&&Tr(f,_),b}function v(f,y,M,S){if(typeof M=="object"&&M!==null&&M.type===ds&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ro:e:{for(var b=M.key,w=y;w!==null;){if(w.key===b){if(b=M.type,b===ds){if(w.tag===7){n(f,w.sibling),y=r(w,M.props.children),y.return=f,f=y;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ki&&ap(b)===w.type){n(f,w.sibling),y=r(w,M.props),y.ref=na(f,w,M),y.return=f,f=y;break e}n(f,w);break}else e(f,w);w=w.sibling}M.type===ds?(y=Fr(M.props.children,f.mode,S,M.key),y.return=f,f=y):(S=el(M.type,M.key,M.props,null,f.mode,S),S.ref=na(f,y,M),S.return=f,f=S)}return a(f);case us:e:{for(w=M.key;y!==null;){if(y.key===w)if(y.tag===4&&y.stateNode.containerInfo===M.containerInfo&&y.stateNode.implementation===M.implementation){n(f,y.sibling),y=r(y,M.children||[]),y.return=f,f=y;break e}else{n(f,y);break}else e(f,y);y=y.sibling}y=Pc(M,f.mode,S),y.return=f,f=y}return a(f);case Ki:return w=M._init,v(f,y,w(M._payload),S)}if(ha(M))return x(f,y,M,S);if(Zs(M))return T(f,y,M,S);go(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,y!==null&&y.tag===6?(n(f,y.sibling),y=r(y,M),y.return=f,f=y):(n(f,y),y=Rc(M,f.mode,S),y.return=f,f=y),a(f)):n(f,y)}return v}var Is=Yg(!0),Kg=Yg(!1),yl=vr(null),Sl=null,_s=null,Sf=null;function Mf(){Sf=_s=Sl=null}function Ef(t){var e=yl.current;pt(yl),t._currentValue=e}function Hu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function As(t,e){Sl=t,Sf=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Sf!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(Sl===null)throw Error(se(308));_s=t,Sl.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var Pr=null;function Tf(t){Pr===null?Pr=[t]:Pr.push(t)}function Zg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,Tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uf(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=u=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,T=o;switch(d=e,m=n,T.tag){case 1:if(x=T.payload,typeof x=="function"){p=x.call(m,p,d);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=T.payload,d=typeof x=="function"?x.call(m,p,d):x,d==null)break e;p=St({},p,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=p}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Qa={},fi=vr(Qa),Ba=vr(Qa),za=vr(Qa);function Dr(t){if(t===Qa)throw Error(se(174));return t}function Af(t,e){switch(ut(za,e),ut(Ba,t),ut(fi,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mu(e,t)}pt(fi),ut(fi,e)}function Fs(){pt(fi),pt(Ba),pt(za)}function Jg(t){Dr(za.current);var e=Dr(fi.current),n=Mu(e,t.type);e!==n&&(ut(Ba,t),ut(fi,n))}function bf(t){Ba.current===t&&(pt(fi),pt(Ba))}var xt=vr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function Cf(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var Yo=Bi.ReactCurrentDispatcher,Tc=Bi.ReactCurrentBatchConfig,Br=0,yt=null,Ut=null,Ht=null,Tl=!1,Ta=!1,Va=0,U_=0;function Qt(){throw Error(se(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Pf(t,e,n,i,r,s){if(Br=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?z_:V_,t=n(i,r),Ta){s=0;do{if(Ta=!1,Va=0,25<=s)throw Error(se(301));s+=1,Ht=Ut=null,e.updateQueue=null,Yo.current=H_,t=n(i,r)}while(Ta)}if(Yo.current=wl,e=Ut!==null&&Ut.next!==null,Br=0,Ht=Ut=yt=null,Tl=!1,e)throw Error(se(300));return t}function Df(){var t=Va!==0;return Va=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?yt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Bn(){if(Ut===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Ht===null?yt.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=t;else{if(t===null)throw Error(se(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?yt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ha(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Br&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,yt.lanes|=h,zr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Qn(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=Bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Qn(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function e0(){}function t0(t,e){var n=yt,i=Bn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Nf(r0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Ga(9,i0.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(se(349));Br&30||n0(n,e,r)}return r}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i0(t,e,n,i){e.value=n,e.getSnapshot=i,s0(e)&&a0(t)}function r0(t,e,n){return n(function(){s0(e)&&a0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function a0(t){var e=Fi(t,1);e!==null&&Zn(e,t,1,-1)}function cp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=B_.bind(null,yt,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function o0(){return Bn().memoizedState}function Ko(t,e,n,i){var r=ai();yt.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Rf(i,a.deps)){r.memoizedState=Ga(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function up(t,e){return Ko(8390656,8,t,e)}function Nf(t,e){return jl(2048,8,t,e)}function l0(t,e){return jl(4,2,t,e)}function c0(t,e){return jl(4,4,t,e)}function u0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,u0.bind(null,e,t),n)}function Lf(){}function f0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function h0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function p0(t,e,n){return Br&21?(Qn(n,e)||(n=_g(),yt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function k_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Tc.transition;Tc.transition={};try{t(!1),e()}finally{it=n,Tc.transition=i}}function m0(){return Bn().memoizedState}function O_(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},g0(t))v0(e,n);else if(n=Zg(t,e,n,i),n!==null){var r=cn();Zn(n,t,i,r),x0(n,e,i)}}function B_(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(g0(t))v0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,a)){var l=e.interleaved;l===null?(r.next=r,Tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zg(t,e,r,i),n!==null&&(r=cn(),Zn(n,t,i,r),x0(n,e,i))}}function g0(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function v0(t,e){Ta=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uf(t,n)}}var wl={readContext:On,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},z_={readContext:On,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=O_.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Lf,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=k_.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=ai();if(mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Gt===null)throw Error(se(349));Br&30||n0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(r0.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,i0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Gt.identifierPrefix;if(mt){var n=Ci,i=bi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=U_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V_={readContext:On,useCallback:f0,useContext:On,useEffect:Nf,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:wc,useRef:o0,useState:function(){return wc(Ha)},useDebugValue:Lf,useDeferredValue:function(t){var e=Bn();return p0(e,Ut.memoizedState,t)},useTransition:function(){var t=wc(Ha)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},H_={readContext:On,useCallback:f0,useContext:On,useEffect:Nf,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:Ac,useRef:o0,useState:function(){return Ac(Ha)},useDebugValue:Lf,useDeferredValue:function(t){var e=Bn();return Ut===null?e.memoizedState=t:p0(e,Ut.memoizedState,t)},useTransition:function(){var t=Ac(Ha)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ur(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Zn(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ur(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Zn(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=ur(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Zn(e,t,i,n),qo(e,t,i))}};function dp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,s):!0}function _0(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=xn(e)?kr:an.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Wu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=xn(e)?kr:an.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=gx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function y0(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,td=i),ju(t,e)},n}function S0(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new G_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iy.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var W_=Bi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?Kg(e,null,n,i):Is(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return As(e,r),i=Pf(t,e,n,i,s,r),n=Df(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(mt&&n&&xf(e),e.flags|=1,ln(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M0(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fa(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Xu(t,e,n,i,r)}function E0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ss,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Ss,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Ss,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Ss,En),En|=i;return ln(t,e,r,n),e.child}function T0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,i,r){var s=xn(n)?kr:an.current;return s=Ns(e,s),As(e,r),n=Pf(t,e,n,i,s,r),i=Df(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(mt&&i&&xf(e),e.flags|=1,ln(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(xn(n)){var s=!0;vl(e)}else s=!1;if(As(e,r),e.stateNode===null)Zo(t,e),_0(e,n,i),Wu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=xn(n)?kr:an.current,u=Ns(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&fp(e,a,i,u),Zi=!1;var d=e.memoizedState;a.state=d,Ml(e,i,a,r),l=e.memoizedState,o!==i||d!==l||vn.current||Zi?(typeof h=="function"&&(Gu(e,n,h,i),l=e.memoizedState),(o=Zi||dp(e,n,o,i,d,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Qg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:jn(e.type,o),a.props=u,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=xn(n)?kr:an.current,l=Ns(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&fp(e,a,i,l),Zi=!1,d=e.memoizedState,a.state=d,Ml(e,i,a,r);var x=e.memoizedState;o!==p||d!==x||vn.current||Zi?(typeof m=="function"&&(Gu(e,n,m,i),x=e.memoizedState),(u=Zi||dp(e,n,u,i,d,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return $u(t,e,n,i,s,r)}function $u(t,e,n,i,r,s){T0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ip(e,n,!1),Ui(t,e,s);i=e.stateNode,W_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function w0(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Af(t,e.containerInfo)}function _p(t,e,n,i,r){return Ls(),yf(r),e.flags|=256,ln(t,e,n,i),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yl(a,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yu(n),e.memoizedState=qu,t):If(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return j_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Yu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=qu,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function If(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&yf(i),Is(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=bc(Error(se(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,a),e.child.memoizedState=Yu(a),e.memoizedState=qu,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=bc(s,i,void 0),vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),Zn(i,t,r,-1))}return zf(),i=bc(Error(se(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=or(r.nextSibling),bn=e,mt=!0,$n=null,t!==null&&(Ln[In++]=bi,Ln[In++]=Ci,Ln[In++]=Or,bi=t.id,Ci=t.overflow,Or=e),e=If(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Hu(t.return,e,n)}function Cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function b0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X_(t,e,n){switch(e.tag){case 3:w0(e),Ls();break;case 5:Jg(e);break;case 1:xn(e.type)&&vl(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(ut(xt,xt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return b0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,E0(t,e,n)}return Ui(t,e,n)}var C0,Ku,R0,P0;C0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};R0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(fi.current);var s=null;switch(n){case"input":r=xu(t,r),i=xu(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Su(t,r),i=Su(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Eu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};P0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ia(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $_(t,e,n){var i=e.pendingProps;switch(_f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return xn(e.type)&&gl(),Jt(e),null;case 3:return i=e.stateNode,Fs(),pt(vn),pt(an),Cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(rd($n),$n=null))),Ku(t,e),Jt(e),null;case 5:bf(e);var r=Dr(za.current);if(n=e.type,t!==null&&e.stateNode!=null)R0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Jt(e),null}if(t=Dr(fi.current),mo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ma.length;r++)ht(ma[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Rh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Dh(i,s),ht("invalid",i)}Eu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&po(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&po(i.textContent,o,t),r=["children",""+o]):Ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":so(i),Ph(i,s,!0);break;case"textarea":so(i),Nh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[Oa]=i,C0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Tu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ma.length;r++)ht(ma[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Rh(t,i),r=xu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Dh(t,i),r=Su(t,i),ht("invalid",t);break;default:r=i}Eu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ra(t,l):typeof l=="number"&&Ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&rf(t,s,l,a))}switch(n){case"input":so(t),Ph(t,i,!1);break;case"textarea":so(t),Nh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)P0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Dr(za.current),Dr(fi.current),mo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Jt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&An!==null&&e.mode&1&&!(e.flags&128))qg(),Ls(),e.flags|=98560,s=!1;else if(s=mo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[li]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else $n!==null&&(rd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Ot===0&&(Ot=3):zf())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Fs(),Ku(t,e),t===null&&Ua(e.stateNode.containerInfo),Jt(e),null;case 10:return Ef(e.type._context),Jt(e),null;case 17:return xn(e.type)&&gl(),Jt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ia(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>ks&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Jt(e),null}else 2*Dt()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Bf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function q_(t,e){switch(_f(e),e.tag){case 1:return xn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),pt(vn),pt(an),Cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return Fs(),null;case 10:return Ef(e.type._context),null;case 22:case 23:return Bf(),null;case 24:return null;default:return null}}var xo=!1,rn=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Zu(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Sp=!1;function K_(t,e){if(Iu=fl,t=Fg(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:t,selectionRange:n},fl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var T=x.memoizedProps,v=x.memoizedState,f=e.stateNode,y=f.getSnapshotBeforeUpdate(e.elementType===e.type?T:jn(e.type,T),v);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=Sp,Sp=!1,x}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,n,s)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Oa],delete e[Ou],delete e[N_],delete e[L_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N0(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(Ju(t,e,n),t=t.sibling;t!==null;)Ju(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var jt=null,Xn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:rn||ys(n,e);case 6:var i=jt,r=Xn;jt=null,Gi(t,e,n),jt=i,Xn=r,jt!==null&&(Xn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Xn?(t=jt,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),La(t)):Sc(jt,n.stateNode));break;case 4:i=jt,r=Xn,jt=n.stateNode.containerInfo,Xn=!0,Gi(t,e,n),jt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Zu(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!rn&&(ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Gi(t,e,n),rn=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Y_),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Xn=!1;break e;case 3:jt=o.stateNode.containerInfo,Xn=!0;break e;case 4:jt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(jt===null)throw Error(se(160));L0(s,a,r),jt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){bt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I0(e,t),e=e.sibling}function I0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ni(t),i&4){try{wa(3,t,t.return),$l(3,t)}catch(T){bt(t,t.return,T)}try{wa(5,t,t.return)}catch(T){bt(t,t.return,T)}}break;case 1:Vn(e,t),ni(t),i&512&&n!==null&&ys(n,n.return);break;case 5:if(Vn(e,t),ni(t),i&512&&n!==null&&ys(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(T){bt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ng(r,s),Tu(o,a);var u=Tu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?og(r,p):h==="dangerouslySetInnerHTML"?sg(r,p):h==="children"?Ra(r,p):rf(r,h,p,u)}switch(o){case"input":_u(r,s);break;case"textarea":ig(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ms(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oa]=s}catch(T){bt(t,t.return,T)}}break;case 6:if(Vn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){bt(t,t.return,T)}}break;case 3:if(Vn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(T){bt(t,t.return,T)}break;case 4:Vn(e,t),ni(t);break;case 13:Vn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kf=Dt())),i&4&&Ep(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||h,Vn(e,t),rn=u):Vn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(p=Se=h;Se!==null;){switch(d=Se,m=d.child,d.tag){case 0:case 11:case 14:case 15:wa(4,d,d.return);break;case 1:ys(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(T){bt(i,n,T)}}break;case 5:ys(d,d.return);break;case 22:if(d.memoizedState!==null){wp(p);continue}}m!==null?(m.return=d,Se=m):wp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ag("display",a))}catch(T){bt(t,t.return,T)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(T){bt(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vn(e,t),ni(t),i&4&&Ep(t);break;case 21:break;default:Vn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=Mp(t);ed(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mp(t);Ju(t,o,a);break;default:throw Error(se(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z_(t,e,n){Se=t,F0(t)}function F0(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=xo;var u=rn;if(xo=a,(rn=l)&&!u)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Ap(r):l!==null?(l.return=a,Se=l):Ap(r);for(;s!==null;)Se=s,F0(s),s=s.sibling;Se=r,xo=o,rn=u}Tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Tp(t)}}function Tp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&La(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}rn||e.flags&512&&Qu(e)}catch(d){bt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function wp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Ap(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Qu(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{Qu(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Q_=Math.ceil,Al=Bi.ReactCurrentDispatcher,Ff=Bi.ReactCurrentOwner,kn=Bi.ReactCurrentBatchConfig,Qe=0,Gt=null,Ft=null,$t=0,En=0,Ss=vr(0),Ot=0,Wa=null,zr=0,ql=0,Uf=0,Aa=null,mn=null,kf=0,ks=1/0,Ti=null,bl=!1,td=null,cr=null,_o=!1,nr=null,Cl=0,ba=0,nd=null,Qo=-1,Jo=0;function cn(){return Qe&6?Dt():Qo!==-1?Qo:Qo=Dt()}function ur(t){return t.mode&1?Qe&2&&$t!==0?$t&-$t:F_.transition!==null?(Jo===0&&(Jo=_g()),Jo):(t=it,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function Zn(t,e,n,i){if(50<ba)throw ba=0,nd=null,Error(se(185));Ya(t,n,i),(!(Qe&2)||t!==Gt)&&(t===Gt&&(!(Qe&2)&&(ql|=n),Ot===4&&Ji(t,$t)),_n(t,i),n===1&&Qe===0&&!(e.mode&1)&&(ks=Dt()+500,Wl&&xr()))}function _n(t,e){var n=t.callbackNode;Fx(t,e);var i=dl(t,t===Gt?$t:0);if(i===0)n!==null&&Fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Fh(n),e===1)t.tag===0?I_(bp.bind(null,t)):jg(bp.bind(null,t)),P_(function(){!(Qe&6)&&xr()}),n=null;else{switch(yg(i)){case 1:n=cf;break;case 4:n=vg;break;case 16:n=ul;break;case 536870912:n=xg;break;default:n=ul}n=G0(n,U0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U0(t,e){if(Qo=-1,Jo=0,Qe&6)throw Error(se(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=dl(t,t===Gt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rl(t,i);else{e=i;var r=Qe;Qe|=2;var s=O0();(Gt!==t||$t!==e)&&(Ti=null,ks=Dt()+500,Ir(t,e));do try{ty();break}catch(o){k0(t,o)}while(!0);Mf(),Al.current=s,Qe=r,Ft!==null?e=0:(Gt=null,$t=0,e=Ot)}if(e!==0){if(e===2&&(r=Ru(t),r!==0&&(i=r,e=id(t,r))),e===1)throw n=Wa,Ir(t,0),Ji(t,i),_n(t,Dt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!J_(r)&&(e=Rl(t,i),e===2&&(s=Ru(t),s!==0&&(i=s,e=id(t,s))),e===1))throw n=Wa,Ir(t,0),Ji(t,i),_n(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:wr(t,mn,Ti);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=kf+500-Dt(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(wr.bind(null,t,mn,Ti),e);break}wr(t,mn,Ti);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Q_(i/1960))-i,10<i){t.timeoutHandle=ku(wr.bind(null,t,mn,Ti),i);break}wr(t,mn,Ti);break;case 5:wr(t,mn,Ti);break;default:throw Error(se(329))}}}return _n(t,Dt()),t.callbackNode===n?U0.bind(null,t):null}function id(t,e){var n=Aa;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=mn,mn=n,e!==null&&rd(e)),t}function rd(t){mn===null?mn=t:mn.push.apply(mn,t)}function J_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Uf,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(Qe&6)throw Error(se(327));bs();var e=dl(t,0);if(!(e&1))return _n(t,Dt()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var i=Ru(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=Wa,Ir(t,0),Ji(t,e),_n(t,Dt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,mn,Ti),_n(t,Dt()),null}function Of(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(ks=Dt()+500,Wl&&xr())}}function Vr(t){nr!==null&&nr.tag===0&&!(Qe&6)&&bs();var e=Qe;Qe|=1;var n=kn.transition,i=it;try{if(kn.transition=null,it=1,t)return t()}finally{it=i,kn.transition=n,Qe=e,!(Qe&6)&&xr()}}function Bf(){En=Ss.current,pt(Ss)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R_(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(_f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Fs(),pt(vn),pt(an),Cf();break;case 5:bf(i);break;case 4:Fs();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Ef(i.type._context);break;case 22:case 23:Bf()}n=n.return}if(Gt=t,Ft=t=dr(t.current,null),$t=En=e,Ot=0,Wa=null,Uf=ql=zr=0,mn=Aa=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Pr=null}return t}function k0(t,e){do{var n=Ft;try{if(Mf(),Yo.current=wl,Tl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Br=0,Ht=Ut=yt=null,Ta=!1,Va=0,Ff.current=null,n===null||n.return===null){Ot=1,Wa=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=pp(a);if(m!==null){m.flags&=-257,mp(m,a,o,s,e),m.mode&1&&hp(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var T=new Set;T.add(l),e.updateQueue=T}else x.add(l);break e}else{if(!(e&1)){hp(s,u,e),zf();break e}l=Error(se(426))}}else if(mt&&o.mode&1){var v=pp(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),mp(v,a,o,s,e),yf(Us(l,o));break e}}s=l=Us(l,o),Ot!==4&&(Ot=2),Aa===null?Aa=[s]:Aa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=y0(s,l,e);op(s,f);break e;case 1:o=l;var y=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(cr===null||!cr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=S0(s,o,e);op(s,S);break e}}s=s.return}while(s!==null)}z0(n)}catch(b){e=b,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function O0(){var t=Al.current;return Al.current=wl,t===null?wl:t}function zf(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(zr&268435455)&&!(ql&268435455)||Ji(Gt,$t)}function Rl(t,e){var n=Qe;Qe|=2;var i=O0();(Gt!==t||$t!==e)&&(Ti=null,Ir(t,e));do try{ey();break}catch(r){k0(t,r)}while(!0);if(Mf(),Qe=n,Al.current=i,Ft!==null)throw Error(se(261));return Gt=null,$t=0,Ot}function ey(){for(;Ft!==null;)B0(Ft)}function ty(){for(;Ft!==null&&!Ax();)B0(Ft)}function B0(t){var e=H0(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?z0(t):Ft=e,Ff.current=null}function z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q_(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Ft=null;return}}else if(n=$_(n,e,En),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Ot===0&&(Ot=5)}function wr(t,e,n){var i=it,r=kn.transition;try{kn.transition=null,it=1,ny(t,e,n,i)}finally{kn.transition=r,it=i}return null}function ny(t,e,n,i){do bs();while(nr!==null);if(Qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ux(t,s),t===Gt&&(Ft=Gt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,G0(ul,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=it;it=1;var o=Qe;Qe|=4,Ff.current=null,K_(t,n),I0(n,t),M_(Fu),fl=!!Iu,Fu=Iu=null,t.current=n,Z_(n),bx(),Qe=o,it=a,kn.transition=s}else t.current=n;if(_o&&(_o=!1,nr=t,Cl=r),s=t.pendingLanes,s===0&&(cr=null),Px(n.stateNode),_n(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=td,td=null,t;return Cl&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===nd?ba++:(ba=0,nd=t):ba=0,xr(),null}function bs(){if(nr!==null){var t=yg(Cl),e=kn.transition,n=it;try{if(kn.transition=null,it=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Cl=0,Qe&6)throw Error(se(331));var r=Qe;for(Qe|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Se=u;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:wa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Se=p;else for(;Se!==null;){h=Se;var d=h.sibling,m=h.return;if(D0(h),h===u){Se=null;break}if(d!==null){d.return=m,Se=d;break}Se=m}}}var x=s.alternate;if(x!==null){var T=x.child;if(T!==null){x.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var y=t.current;for(Se=y;Se!==null;){a=Se;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Se=M;else e:for(a=y;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:$l(9,o)}}catch(b){bt(o,o.return,b)}if(o===a){Se=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Se=S;break e}Se=o.return}}if(Qe=r,xr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Bl,t)}catch{}i=!0}return i}finally{it=n,kn.transition=e}}return!1}function Cp(t,e,n){e=Us(n,e),e=y0(t,e,1),t=lr(t,e,1),e=cn(),t!==null&&(Ya(t,1,e),_n(t,e))}function bt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Us(n,t),t=S0(e,t,1),e=lr(e,t,1),t=cn(),e!==null&&(Ya(e,1,t),_n(e,t));break}}e=e.return}}function iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&($t&n)===n&&(Ot===4||Ot===3&&($t&130023424)===$t&&500>Dt()-kf?Ir(t,0):Uf|=n),_n(t,e)}function V0(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=cn();t=Fi(t,e),t!==null&&(Ya(t,e,n),_n(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V0(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),V0(t,n)}var H0;H0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,X_(t,e,n);gn=!!(t.flags&131072)}else gn=!1,mt&&e.flags&1048576&&Xg(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=Ns(e,an.current);As(e,n),r=Pf(null,e,i,t,r,n);var s=Df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wf(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Wu(e,i,t,n),e=$u(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&xf(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oy(i),t=jn(i,t),r){case 0:e=Xu(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=vp(null,e,i,jn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),xp(t,e,i,r,n);case 3:e:{if(w0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qg(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(se(423)),e),e=_p(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(se(424)),e),e=_p(t,e,i,n,r);break e}else for(An=or(e.stateNode.containerInfo.firstChild),bn=e,mt=!0,$n=null,n=Kg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=Ui(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Jg(e),t===null&&Vu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Uu(i,r)?a=null:s!==null&&Uu(i,s)&&(e.flags|=32),T0(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return A0(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),gp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(yl,i._currentValue),i._currentValue=a,s!==null)if(Qn(s.value,a)){if(s.children===r.children&&!vn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Hu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,n),r=On(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),vp(t,e,i,r,n);case 15:return M0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Zo(t,e),e.tag=1,xn(i)?(t=!0,vl(e)):t=!1,As(e,n),_0(e,i,r),Wu(e,i,r,n),$u(null,e,i,!0,t,n);case 19:return b0(t,e,n);case 22:return E0(t,e,n)}throw Error(se(156,e.tag))};function G0(t,e){return gg(t,e)}function ay(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new ay(t,e,n,i)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oy(t){if(typeof t=="function")return Vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===af)return 11;if(t===of)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Vf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ds:return Fr(n.children,r,s,e);case sf:a=8,r|=8;break;case pu:return t=Un(12,n,e,r|2),t.elementType=pu,t.lanes=s,t;case mu:return t=Un(13,n,e,r),t.elementType=mu,t.lanes=s,t;case gu:return t=Un(19,n,e,r),t.elementType=gu,t.lanes=s,t;case Jm:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zm:a=10;break e;case Qm:a=9;break e;case af:a=11;break e;case of:a=14;break e;case Ki:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Un(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,i,r,s,a,o,l){return t=new ly(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function cy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W0(t){if(!t)return hr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(xn(n))return Wg(t,n,e)}return e}function j0(t,e,n,i,r,s,a,o,l){return t=Hf(n,i,!0,t,r,s,a,o,l),t.context=W0(null),n=t.current,i=cn(),r=ur(n),s=Pi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,Ya(t,r,i),_n(t,i),t}function Kl(t,e,n,i){var r=e.current,s=cn(),a=ur(r);return n=W0(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Zn(t,r,a,s),qo(t,r,a)),a}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gf(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function uy(){return null}var X0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}Zl.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Kl(t,e,null,null)};Zl.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Kl(null,t,null,null)}),e[Ii]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&wg(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Pl(a);s.call(u)}}var a=j0(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=a,t[Ii]=a.current,Ua(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Pl(l);o.call(u)}}var l=Hf(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Ii]=l.current,Ua(t.nodeType===8?t.parentNode:t),Vr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pl(a);o.call(l)}}Kl(e,a,t,r)}else a=dy(n,e,t,r,i);return Pl(a)}Sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(uf(e,n|1),_n(e,Dt()),!(Qe&6)&&(ks=Dt()+500,xr()))}break;case 13:Vr(function(){var i=Fi(t,1);if(i!==null){var r=cn();Zn(i,t,1,r)}}),Gf(t,1)}};df=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=cn();Zn(e,t,134217728,n)}Gf(t,134217728)}};Mg=function(t){if(t.tag===13){var e=ur(t),n=Fi(t,e);if(n!==null){var i=cn();Zn(n,t,e,i)}Gf(t,e)}};Eg=function(){return it};Tg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Au=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(se(90));tg(i),_u(i,r)}}}break;case"textarea":ig(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};ug=Of;dg=Vr;var fy={usingClientEntryPoint:!1,Events:[Za,ms,Gl,lg,cg,Of]},ra={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pg(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Bl=yo.inject(hy),di=yo}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(se(200));return cy(t,e,null,n)};Rn.createRoot=function(t,e){if(!jf(t))throw Error(se(299));var n=!1,i="",r=X0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Ua(t.nodeType===8?t.parentNode:t),new Wf(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=pg(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Vr(t)};Rn.hydrate=function(t,e,n){if(!Ql(e))throw Error(se(200));return Jl(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=X0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=j0(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};Rn.render=function(t,e,n){if(!Ql(e))throw Error(se(200));return Jl(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(se(40));return t._reactRootContainer?(Vr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Rn.unstable_batchedUpdates=Of;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Jl(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(t){console.error(t)}}$0(),$m.exports=Rn;var py=$m.exports,q0,Dp=py;q0=Dp.createRoot,Dp.hydrateRoot;const my="2026-07-27T09:00:00Z",kt=(t={})=>({source:"human",createdBy:"N. Walker",createdAt:my,aiInvolved:!1,confidence:"n/a",approval:"Human Edited",critical:!1,...t}),tt=(t,e,n,i,r={})=>({id:t,section:e,label:n,value:i,...kt(r)}),gy=[tt("f-style-id","Cover","Style ID","DR-1041"),tt("f-name","Cover","Style name","Bias Panel Denim Dress"),tt("f-season","Cover","Season","Spring/Summer 2027"),tt("f-cat","Cover","Category","Dress — woven denim"),tt("f-base","Cover","Base size","",{approval:"Unresolved",critical:!0,note:"Not declared. Graded table cannot be read without it."}),tt("f-units","Cover","Pack units","cm",{critical:!0}),tt("f-designer","Cover","Designer","N. Walker"),tt("f-techd","Cover","Technical designer","Unassigned",{approval:"Unresolved"}),tt("f-factory","Cover","Factory","Partner A — sample room"),tt("f-fab-main","Fabric","Main fabric","100% cotton denim, 10.5 oz, 148 cm width",{critical:!0,source:"imported",createdBy:"Supplier sheet"}),tt("f-fab-finish","Fabric","Finish","Enzyme wash, medium indigo",{critical:!0}),tt("f-fab-shrink","Fabric","Shrinkage","",{approval:"Unresolved",critical:!0,note:"Not supplied. Bias panels make shrinkage behaviour decisive."}),tt("f-fab-stretch","Fabric","Stretch / recovery","None — rigid",{critical:!0}),tt("f-con-seam","Construction","Side seam","Felled seam, 1.2 cm SA, 2 rows topstitch",{critical:!0}),tt("f-con-spi","Construction","Stitch density","8 SPI topstitch, 10 SPI construction",{critical:!0}),tt("f-con-hem","Construction","Hem","Bias panel hem — 2 cm double turn",{critical:!0,source:"ai",aiInvolved:!0,confidence:"medium",approval:"Suggested",createdBy:"draft agent",note:"AI-drafted. Bias hang time not specified — see validation."}),tt("f-con-cuff","Construction","Sleeve placket closure","",{approval:"Unresolved",critical:!0,note:"Sketch shows a placket. Button vs. snap not determinable from the sketch."}),tt("f-con-press","Construction","Pressing","Press seams toward centre back",{source:"ai",aiInvolved:!0,confidence:"low",approval:"Suggested",createdBy:"draft agent",critical:!0}),tt("f-grain","Construction","Grain — front panel","True bias 45°",{critical:!0}),tt("f-grain-hang","Construction","Bias hang time","",{approval:"Unresolved",critical:!0,note:"Bias-cut piece with no hang-time instruction. Hem will drop after wear."}),tt("f-pkg-bag","Packaging","Individual bagging","",{approval:"Unresolved"}),tt("f-pkg-carton","Packaging","Carton spec","",{approval:"Unresolved"}),tt("f-lead","Lead time","Production lead time","90 days ex-factory"),tt("f-samples","Lead time","Samples required","Proto x1, Fit x2, PPS x1"),tt("f-cost","Costing","Target FOB","38.00 USD")],vy=[{code:"A",name:"Chest, 2.5 cm below armhole",method:"Garment flat, across, x2",tolerance:"± 1.0",unit:"cm",sizes:{XS:88,S:92,M:96,L:101,XL:106},...kt({critical:!0,approval:"Human Edited"})},{code:"B",name:"Waist at natural",method:"Garment flat, across, x2",tolerance:"± 1.0",unit:"cm",sizes:{XS:72,S:76,M:80,L:84,XL:88},...kt({critical:!0})},{code:"C",name:"Hip, 20 cm below waist",method:"Garment flat, across, x2",tolerance:"± 1.0",unit:"cm",sizes:{XS:94,S:98,M:102,L:101,XL:112},...kt({critical:!0,source:"ai",aiInvolved:!0,confidence:"medium",approval:"Suggested",createdBy:"draft agent"})},{code:"D",name:"Centre back length",method:"From CB neck to hem",tolerance:"± 1.5",unit:"cm",sizes:{XS:104,S:105.5,M:107,L:108.5,XL:110},...kt({critical:!0})},{code:"E",name:"Armhole depth",method:"Straight from shoulder point",tolerance:"± 0.6",unit:"cm",sizes:{XS:21,S:21.6,M:22.2,L:22.8,XL:23.4},...kt({critical:!0})},{code:"F",name:"Sleeve cap height",method:"Cap apex to biceps line",tolerance:"",unit:"in",sizes:{XS:5.5,S:5.6,M:5.7,L:5.8,XL:5.9},...kt({critical:!0,source:"ai",aiInvolved:!0,confidence:"low",approval:"Suggested",createdBy:"draft agent",note:"Unit differs from pack unit. Tolerance missing."})},{code:"A",name:"Chest — duplicate entry",method:"Garment flat, across",tolerance:"± 1.0",unit:"cm",sizes:{XS:88,S:92,M:96,L:101,XL:106},...kt({critical:!0,approval:"Suggested",source:"ai",aiInvolved:!0,confidence:"low",createdBy:"draft agent"})}],xy=[{id:"b1",material:"Main denim",composition:"100% cotton",weight:"10.5 oz",placement:"Body, sleeves",supplier:"Mill A",qty:"2.4 m",...kt({critical:!0})},{id:"b2",material:"Pocketing",composition:"100% cotton poplin",weight:"110 gsm",placement:"Side pockets",supplier:"Mill B",qty:"0.3 m",...kt({critical:!0})},{id:"b3",material:"Thread",composition:"Poly core spun, Tkt 40",weight:"—",placement:"All construction",supplier:"Coats equiv.",qty:"—",...kt({critical:!0})},{id:"b4",material:"Interlining",composition:"",weight:"",placement:"Collar stand",supplier:"",qty:"",...kt({critical:!0,approval:"Unresolved",note:"Row incomplete."})}],_y=[{id:"t1",item:"Shell button",spec:"18L, corozo, indigo",placement:"CF placket — 7 pcs, first at 4 cm below neckline, 9 cm apart",qty:"7",...kt({critical:!0})},{id:"t2",item:"Main label",spec:"Woven, 30 x 20 mm",placement:"Centre back neck, 1 cm below neckline seam",qty:"1",...kt({critical:!0})},{id:"t3",item:"Care label",spec:"Satin, 4-fold",placement:"Left side seam",qty:"1",...kt({critical:!0,approval:"Unresolved",note:"Placement not dimensioned — height from hem missing."})}],yy={id:"DR-1041",name:"Bias Panel Denim Dress",category:"Dress — woven denim",categoryKey:"woven-dress",status:"Draft",version:3,baseSize:null,units:"mixed",sizeRange:["XS","S","M","L","XL"],owner:"N. Walker",colorways:["Medium Indigo","Ecru Overdye"],assets:[{id:"a1",mode:"mood",title:"SS27 — Sun-bleached, unhurried",caption:"Atmosphere study. Light is single-source, late afternoon.",palette:["#C8B49A","#8FA3B0","#E4DCCF","#2F3A42"],synthetic:!0},{id:"a2",mode:"mood",title:"Textile behaviour — rigid denim, bias fall",caption:"Drape reference for the bias front panel.",palette:["#4A5A6B","#93A4AF","#D9CFC0"],synthetic:!0},{id:"a3",mode:"presentation",title:"Line-up figure 04 — DR-1041",caption:"Presentation sketch. Proportion and styling only.",palette:["#3A4654","#C8B49A"],synthetic:!0},{id:"a4",mode:"flat",title:"DR-1041 front — orthographic",caption:"Draft flat. 2 callouts unresolved.",palette:["#E8E8EA"],synthetic:!0},{id:"a5",mode:"flat",title:"DR-1041 back — orthographic",caption:"Draft flat. Awaiting technical review.",palette:["#E8E8EA"],synthetic:!0}],fields:gy,poms:vy,bom:xy,trims:_y,gates:[{key:"concept",label:"Concept green light",approver:"N. Walker",approved:!0,approvedAt:"2026-06-15T14:00:00Z"},{key:"design",label:"Design green light",approver:"N. Walker",approved:!0,approvedAt:"2026-07-06T11:30:00Z"},{key:"technical",label:"Technical package",approver:"Unassigned",approved:!1},{key:"handoff",label:"Production handoff",approver:"Unassigned",approved:!1}],thread:[{id:"m1",author:"Partner A — sample room",role:"factory",at:"2026-07-20T08:12:00Z",fieldRef:"f-con-cuff",body:"Placket shown on the flat but no closure specified. Button or snap? We have both in house but the placket width differs.",state:"Open"},{id:"m2",author:"Partner A — sample room",role:"factory",at:"2026-07-21T03:40:00Z",fieldRef:"C",body:"Hip measurement at L reads smaller than M. Please confirm which is correct before we cut.",state:"Open",proposedRule:"Blocker: non-monotonic measurement across size range"}],exports:[]},Sy={id:"TP-2010",name:"Cropped Poplin Shirt",category:"Top — woven cotton",categoryKey:"woven-top",status:"Needs Review",version:2,baseSize:"M",units:"cm",sizeRange:["XS","S","M","L","XL"],owner:"N. Walker",colorways:["Optic White"],assets:[{id:"b1",mode:"presentation",title:"Line-up figure 07 — TP-2010",caption:"Presentation sketch.",palette:["#E4DCCF","#8FA3B0"],synthetic:!0},{id:"b2",mode:"flat",title:"TP-2010 front — orthographic",caption:"Draft flat.",palette:["#E8E8EA"],synthetic:!0}],fields:[tt("g-style-id","Cover","Style ID","TP-2010"),tt("g-base","Cover","Base size","M",{critical:!0}),tt("g-units","Cover","Pack units","cm",{critical:!0}),tt("g-fab","Fabric","Main fabric","100% cotton poplin, 120 gsm, 145 cm",{critical:!0}),tt("g-con","Construction","Side seam","French seam, 1.0 cm SA",{critical:!0}),tt("g-pkg","Packaging","Individual bagging","Poly bag 25 x 35 cm, flat fold"),tt("g-pkg2","Packaging","Carton spec","60 x 40 x 40 cm, ratio 1-2-2-2-1")],poms:[{code:"A",name:"Chest, 2.5 cm below armhole",method:"Garment flat, across, x2",tolerance:"± 1.0",unit:"cm",sizes:{XS:96,S:100,M:104,L:109,XL:114},...kt({critical:!0,approval:"Approved"})},{code:"B",name:"Body length from HPS",method:"HPS to hem",tolerance:"± 1.0",unit:"cm",sizes:{XS:48,S:49,M:50,L:51,XL:52},...kt({critical:!0,approval:"Approved"})}],bom:[{id:"c1",material:"Main poplin",composition:"100% cotton",weight:"120 gsm",placement:"Body, sleeves",supplier:"Mill C",qty:"1.6 m",...kt({critical:!0})}],trims:[{id:"u1",item:"Button",spec:"16L, 4-hole, white",placement:"CF — 6 pcs, 8 cm apart",qty:"6",...kt({critical:!0})}],gates:[{key:"concept",label:"Concept green light",approver:"N. Walker",approved:!0,approvedAt:"2026-06-15T14:00:00Z"},{key:"design",label:"Design green light",approver:"N. Walker",approved:!0,approvedAt:"2026-07-06T11:30:00Z"},{key:"technical",label:"Technical package",approver:"Unassigned",approved:!1},{key:"handoff",label:"Production handoff",approver:"Unassigned",approved:!1}],thread:[],exports:[]},My=[{n:1,name:"Trend research and concept direction",weeks:"1–3",output:"Season, customer, colour, silhouette, fabric themes",status:"Complete"},{n:2,name:"Fabric procurement and sourcing review",weeks:"2–6",output:"Candidate fabrics, trims, suppliers, constraints",status:"Complete"},{n:3,name:"Mood sketches and presentation boards",weeks:"3–6",output:"Creative boards and early sketch directions",status:"Complete"},{n:4,name:"Concept green light",weeks:"6",output:"Approved collection direction",status:"Approved",gate:"concept"},{n:5,name:"Prototype presentation sketches",weeks:"6–10",output:"Selected concepts with details and styling",status:"Complete"},{n:6,name:"Design green light",weeks:"10",output:"Approved designs for technical development",status:"Approved",gate:"design"},{n:7,name:"Technical flats and specification draft",weeks:"10–14",output:"Front/back flats, POMs, BOM, construction draft",status:"In Progress"},{n:8,name:"First prototype",weeks:"14–20",output:"Proto sample and factory questions",status:"Blocked"},{n:9,name:"First fitting",weeks:"20–22",output:"Fit notes, corrections, decision record",status:"Not Started"},{n:10,name:"Second prototype",weeks:"22–26",output:"Revised sample",status:"Not Started"},{n:11,name:"Second fitting and final approval",weeks:"26–28",output:"Approved fit and construction",status:"Not Started"},{n:12,name:"Final technical package and handoff",weeks:"28–30",output:"Locked pack, grading inputs, factory notes",status:"Not Started",gate:"technical"},{n:13,name:"Production prep and costing",weeks:"30–34",output:"Materials, quantities, costing, capacity, schedule",status:"Not Started",gate:"handoff"},{n:14,name:"Bulk production",weeks:"34–44",output:"Production status and exceptions",status:"Not Started"},{n:15,name:"Quality control, packing, and delivery",weeks:"44–52",output:"QC results, issue closure, shipment readiness",status:"Not Started"}],Np={id:"SS27-CORE",brand:"Atelier Pilot",season:"Spring/Summer",year:2027,market:"US wholesale + DTC",customer:"28–40, urban, 3–4 elevated pieces per season",shipWindow:"Jan–Mar 2027",currency:"USD",owner:"N. Walker",stages:My,styles:[yy,Sy]},Ey=[{id:"i1",at:"2026-07-19T10:02:00Z",provider:"anthropic",model:"claude-opus-5",feature:"tech pack draft",latencyMs:4120,costUsd:.084,userAction:"pending"},{id:"i2",at:"2026-07-19T10:06:00Z",provider:"image-provider",model:"flat-mode-v2",feature:"technical flat",latencyMs:18400,costUsd:.19,userAction:"edited"},{id:"i3",at:"2026-07-18T16:44:00Z",provider:"image-provider",model:"board-v3",feature:"mood board",latencyMs:22100,costUsd:.24,userAction:"accepted"}],ft=(t,e,n=!0)=>({section:t,label:e,critical:n}),Ty=[{key:"woven-dress",label:"Dress — woven",signedOffBy:null,requiredFields:[ft("Cover","Style ID"),ft("Cover","Base size"),ft("Cover","Pack units"),ft("Cover","Technical designer"),ft("Cover","Factory",!1),ft("Fabric","Main fabric"),ft("Fabric","Finish",!1),ft("Fabric","Shrinkage"),ft("Fabric","Stretch / recovery"),ft("Construction","Side seam"),ft("Construction","Stitch density"),ft("Construction","Hem"),ft("Construction","Pressing",!1),ft("Packaging","Individual bagging",!1),ft("Packaging","Carton spec",!1),ft("Lead time","Production lead time",!1),ft("Lead time","Samples required",!1)],requiredPoms:[{code:"A",name:"Chest"},{code:"B",name:"Waist"},{code:"C",name:"Hip"},{code:"D",name:"Centre back length"},{code:"E",name:"Armhole depth"}]},{key:"woven-top",label:"Top — woven",signedOffBy:null,requiredFields:[ft("Cover","Style ID"),ft("Cover","Base size"),ft("Cover","Pack units"),ft("Fabric","Main fabric"),ft("Construction","Side seam"),ft("Packaging","Individual bagging",!1),ft("Packaging","Carton spec",!1),ft("Lead time","Production lead time",!1)],requiredPoms:[{code:"A",name:"Chest"},{code:"B",name:"Body length from HPS"}]}],wy=t=>Ty.find(e=>e.key===t)??null;let Y0=0;const Lt=(t,e,n,i,r)=>({id:`v${++Y0}`,severity:t,family:e,ref:n,message:i,detail:r,source:"deterministic"});function Ay(t,e={}){var p;Y0=0;const n=[],i=d=>t.fields.find(m=>m.label.toLowerCase()===d.toLowerCase()),r=e.template??wy(t.categoryKey);for(const d of t.fields)d.approval==="Unresolved"&&n.push(Lt(d.critical?"blocker":"warning","Completeness",`${d.section} · ${d.label}`,`${d.label} is unresolved`,d.note??"Field is required for this category and stage but has no value."));if(!r)n.push(Lt("blocker","Completeness","Category",`No category template for "${t.categoryKey||"unset"}"`,"A style cannot be preflighted until its category schema is defined and signed off."));else{for(const d of r.requiredFields){const m=t.fields.find(x=>x.section===d.section&&x.label===d.label);m?!m.value.trim()&&m.approval!=="Unresolved"&&n.push(Lt(d.critical?"blocker":"warning","Completeness",`${d.section} · ${d.label}`,`Required field "${d.label}" is empty`,`Required by the ${r.label} template.`)):n.push(Lt(d.critical?"blocker":"warning","Completeness",`${d.section} · ${d.label}`,`Required field "${d.label}" is absent from the pack`,`The ${r.label} template requires this field. Add it, or mark it not applicable with a reason.`))}for(const d of r.requiredPoms)t.poms.some(m=>m.code===d.code)||n.push(Lt("blocker","Completeness",`POM ${d.code}`,`Required point of measure "${d.name}" (${d.code}) is missing`,`The ${r.label} template requires this measurement.`));r.signedOffBy||n.push(Lt("warning","Approval integrity",`Template · ${r.key}`,"Category schema has not been signed off by a technical designer","PRD D-01 and the pilot acceptance checklist both require the category schema to be approved before real work runs against it."))}(!t.baseSize||!((p=i("Base size"))!=null&&p.value.trim()))&&n.push(Lt("blocker","Measurement integrity","Cover · Base size","Base size is not declared","A graded spec without a stated base size is unreadable — nobody can tell which column is drafted truth and which is derived."));const s=new Set(t.poms.map(d=>d.unit));s.size>1&&n.push(Lt("blocker","Measurement integrity","POM table",`Mixed units across the graded spec (${[...s].join(", ")})`,"Declare the unit once at pack level and never mix. Mixed units are the most direct route to a wrong garment."));const a=new Map;for(const d of t.poms)a.set(d.code,(a.get(d.code)??0)+1);for(const[d,m]of a)m>1&&n.push(Lt("blocker","Measurement integrity",`POM ${d}`,`Duplicate POM code "${d}" appears ${m} times`,"The factory cannot tell which row governs. Remove or re-code the duplicate."));for(const d of t.poms){d.tolerance.trim()||n.push(Lt("warning","Measurement integrity",`POM ${d.code}`,`No tolerance on "${d.name}"`,"Every POM carries a ± value. A POM with no tolerance is an argument waiting to happen.")),d.method.trim()||n.push(Lt("blocker","Measurement integrity",`POM ${d.code}`,`No measurement method on "${d.name}"`,"Two people measuring the same garment differently is the most common cause of a rejected sample."));const m=t.sizeRange.map(v=>d.sizes[v]).filter(v=>v!=null);for(let v=1;v<m.length;v++)if(m[v]<m[v-1]){n.push(Lt("blocker","Measurement integrity",`POM ${d.code}`,`Non-monotonic grade on "${d.name}"`,`${t.sizeRange[v]} (${m[v]}) is smaller than ${t.sizeRange[v-1]} (${m[v-1]}). A measurement cannot shrink as size grows.`));break}const x=m.slice(1).map((v,f)=>+(v-m[f]).toFixed(2));[...new Set(x)].length>1&&!x.some(v=>v<0)&&n.push(Lt("warning","Measurement integrity",`POM ${d.code}`,`Inconsistent grade increment on "${d.name}"`,`Increments ${x.join(", ")} vary across size breaks with no documented reason. Non-linear grading is legitimate for extended sizes but must be stated.`))}if(t.fields.find(d=>/grain/i.test(d.label)&&/bias/i.test(d.value))){const d=t.fields.find(m=>/hang time/i.test(m.label));(!d||!d.value.trim())&&n.push(Lt("blocker","Construction logic","Construction · Bias hang time","Bias-cut piece with no hang-time instruction","Bias elongates under its own weight. Without hang time before hemming, the hem drops unevenly after first wear."))}const l=t.fields.find(d=>/closure/i.test(d.label));l&&!l.value.trim()&&n.push(Lt("blocker","Construction logic","Construction · Closure","Closure referenced but not specified","The flat shows a placket. Button vs. snap changes placket width, trim BOM, and factory operation."));for(const d of t.bom)(!d.composition.trim()||!d.qty.trim())&&n.push(Lt("blocker","Completeness",`BOM · ${d.material||"unnamed row"}`,"Incomplete BOM row","Every BOM line needs composition, weight, placement, supplier, and quantity."));for(const d of t.trims)/\d/.test(d.placement)||n.push(Lt("warning","Completeness",`Trim · ${d.item}`,`Placement of "${d.item}" is not dimensioned`,'"Left side seam" is ambiguous. Give a measured position from a named reference point.'));const u=[...t.fields.filter(d=>d.critical&&d.aiInvolved&&d.approval==="Suggested"),...t.poms.filter(d=>d.critical&&d.aiInvolved&&d.approval==="Suggested")];u.length&&n.push(Lt("blocker","Approval integrity","Provenance",`${u.length} AI-drafted production-critical field(s) awaiting human approval`,"No AI-generated production-critical value is authoritative until a qualified human approves it."));const h=t.thread.filter(d=>d.state==="Open"||d.state==="Requires Revision");h.length&&n.push(Lt("warning","Version integrity","Factory thread",`${h.length} unresolved factory question(s)`,"Exporting while questions are open reproduces the ambiguity that caused them."));for(const d of e.corrections??[]){if(!d.accepted)continue;let m=!1;if(d.kind==="require_field"){const x=t.fields.find(T=>T.label.toLowerCase()===d.target.toLowerCase());m=!x||!x.value.trim()}else d.kind==="require_pom_tolerance"?m=t.poms.some(x=>x.code===d.target&&!x.tolerance.trim()):d.kind==="require_dimensioned_placement"&&(m=t.trims.some(x=>x.item.toLowerCase()===d.target.toLowerCase()&&!/\d/.test(x.placement)));m&&n.push(Lt(d.severity,"Learned from factory",d.target,d.message,`Promoted from a factory correction on ${d.styleId}. Accepted by ${d.acceptedBy??"unknown"}.`))}return n}const Os=t=>({blockers:t.filter(e=>e.severity==="blocker").length,warnings:t.filter(e=>e.severity==="warning").length}),Lp={user:null,collection:null,audit:[],invocations:[],corrections:[],templates:[],preflight:{}},K0=qe.createContext(null);async function ii(t,e,n){const i=await fetch(e,{method:t,headers:{"content-type":"application/json"},body:t==="GET"?void 0:JSON.stringify(n??{})}),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error((r==null?void 0:r.error)??`${i.status} ${i.statusText}`);return r}function by({children:t}){const[e,n]=qe.useState(Lp),[i,r]=qe.useState(!0),[s,a]=qe.useState(null),o=qe.useCallback(async()=>{try{const h=await ii("GET","/api/state");n({user:h.user,collection:h.collection,audit:h.audit,invocations:h.invocations,corrections:h.corrections,templates:h.templates,preflight:h.preflight})}catch{const h={};Np.styles.forEach(p=>{h[p.id]=Ay(p)}),n({user:{id:"u1",username:"natalie",name:"N. Walker",role:"technical"},collection:Np,audit:[],invocations:Ey,corrections:[],templates:[],preflight:h})}finally{r(!1)}},[]);qe.useEffect(()=>{o()},[o]);const l=qe.useCallback(async h=>{a(null);try{await h(),await o()}catch(p){a(p.message)}},[o]),u=qe.useMemo(()=>({...e,loading:i,error:s,clearError:()=>a(null),async login(h,p){a(null);try{await ii("POST","/api/login",{username:h,password:p}),await o()}catch{await o()}},async logout(){await ii("POST","/api/logout").catch(()=>{}),n(Lp)},resolveField:(h,p,d)=>l(()=>ii("POST",`/api/styles/${h}/fields/${p}`,{value:d})),approveField:(h,p)=>l(()=>ii("POST",`/api/styles/${h}/fields/${p}/approve`)),approveGate:(h,p)=>l(()=>ii("POST",`/api/styles/${h}/gates/${p}/approve`)),resolveThread:(h,p,d)=>l(()=>ii("POST",`/api/styles/${h}/thread/${p}/resolve`,d?{promote:d}:{})),createExport:h=>l(()=>ii("POST",`/api/styles/${h}/exports`)),async draftPack(h,p){a(null);try{const d=await ii("POST",`/api/styles/${h}/draft`,{confirm:p});return await o(),d.result}catch(d){return a(d.message),null}},signOffCategory:h=>l(()=>ii("POST",`/api/categories/${h}/signoff`))}),[e,i,s,l,o]);return c.jsx(K0.Provider,{value:u,children:t})}function xi(){const t=qe.useContext(K0);if(!t)throw new Error("useStore must be used inside StoreProvider");return t}function st({tone:t,children:e}){return c.jsx("span",{className:`badge ${t}`,children:e})}const Cy={Suggested:"ai",Unverified:"draft","Human Edited":"gold",Approved:"ok",Overridden:"warn",Unresolved:"blocker"},Ip=({v:t})=>c.jsx(st,{tone:Cy[t],children:t}),Ry={Draft:"draft","Needs Review":"warn","Changes Requested":"blocker","Approved for Factory":"ok",Superseded:"draft"},Z0=({v:t})=>c.jsx(st,{tone:Ry[t],children:t}),Py={"Not Started":"draft","In Progress":"gold",Blocked:"blocker","In Review":"warn",Approved:"ok",Complete:"ok"},Dy=({v:t})=>c.jsx(st,{tone:Py[t],children:t}),Ur=t=>t?new Date(t).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—";function Q0({palette:t}){const[e,n,i,r]=[t[0]??"#C8B49A",t[1]??"#8FA3B0",t[2]??"#E4DCCF",t[3]??"#2F3A42"];return c.jsxs("svg",{viewBox:"0 0 320 190",preserveAspectRatio:"xMidYMid slice",width:"100%",height:"100%",children:[c.jsxs("defs",{children:[c.jsxs("radialGradient",{id:"m1",cx:"30%",cy:"35%",children:[c.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:".95"}),c.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]}),c.jsxs("radialGradient",{id:"m2",cx:"72%",cy:"60%",children:[c.jsx("stop",{offset:"0%",stopColor:n,stopOpacity:".85"}),c.jsx("stop",{offset:"100%",stopColor:n,stopOpacity:"0"})]}),c.jsxs("linearGradient",{id:"m3",x1:"0",y1:"1",x2:"1",y2:"0",children:[c.jsx("stop",{offset:"0%",stopColor:r}),c.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:".35"})]})]}),c.jsx("rect",{width:"320",height:"190",fill:"url(#m3)"}),c.jsx("ellipse",{cx:"96",cy:"66",rx:"130",ry:"96",fill:"url(#m1)"}),c.jsx("ellipse",{cx:"230",cy:"114",rx:"118",ry:"86",fill:"url(#m2)"}),c.jsx("g",{opacity:".28",stroke:i,fill:"none",strokeWidth:".8",children:Array.from({length:9},(s,a)=>c.jsx("path",{d:`M ${-20+a*42} 190 Q ${10+a*42} 96 ${-6+a*42} 0`},a))})]})}function J0({palette:t}){const e=t[0]??"#3A4654",n=t[1]??"#C8B49A";return c.jsxs("svg",{viewBox:"0 0 320 190",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",children:[c.jsx("rect",{width:"320",height:"190",fill:"#f2efe9"}),c.jsxs("g",{transform:"translate(160 6) scale(.97)",fill:"none",strokeLinecap:"round",children:[c.jsxs("g",{stroke:e,strokeWidth:"1.5",children:[c.jsx("circle",{cx:"0",cy:"16",r:"9"}),c.jsx("path",{d:"M0 25 L0 40"}),c.jsx("path",{d:"M-17 44 L18 40"}),"           ",c.jsx("path",{d:"M-13 96 L15 99"}),"           ",c.jsx("path",{d:"M-1 40 L1 98"}),"             ",c.jsx("path",{d:"M-13 96 L-16 140 L-14 178"}),c.jsx("path",{d:"M15 99 L19 141 L17 178"}),c.jsx("path",{d:"M-17 44 L-26 78 L-24 92"}),c.jsx("path",{d:"M18 40 L27 76 L25 90"})]}),c.jsx("path",{d:"M-19 44 Q0 36 20 40 L27 74 Q30 108 24 150 Q0 160 -24 150 Q-30 106 -26 74 Z",fill:n,fillOpacity:".55",stroke:e,strokeWidth:"1.2"}),c.jsx("path",{d:"M-14 62 Q2 96 20 128",stroke:e,strokeWidth:".7",strokeDasharray:"3 3",opacity:".7"}),c.jsx("path",{d:"M-24 150 Q0 158 24 150",stroke:e,strokeWidth:"1"})]}),c.jsx("g",{opacity:".5",stroke:e,strokeWidth:".6",children:c.jsx("path",{d:"M20 178 L300 178",strokeDasharray:"2 5"})})]})}function ev({back:t=!1}){return c.jsxs("svg",{viewBox:"0 0 320 190",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",children:[c.jsx("rect",{width:"320",height:"190",fill:"#fbfbfa"}),c.jsxs("g",{transform:"translate(160 14)",fill:"none",stroke:"#1c1c1e",children:[c.jsx("path",{d:`M-30 12 L-46 26 L-38 46 L-33 38 L-36 132 Q0 141 36 132 L33 38 L38 46 L46 26 L30 12\r
                 Q18 3 0 3 Q-18 3 -30 12 Z`,strokeWidth:"2"}),c.jsx("path",{d:t?"M-13 5 Q0 12 13 5":"M-13 5 Q0 20 13 5",strokeWidth:"2"}),c.jsx("path",{d:"M-30 12 L-27 128",strokeWidth:"1.1"}),c.jsx("path",{d:"M30 12 L27 128",strokeWidth:"1.1"}),c.jsx("path",{d:"M-33 16 L-30 126",strokeWidth:".6",strokeDasharray:"3 2.5"}),c.jsx("path",{d:"M33 16 L30 126",strokeWidth:".6",strokeDasharray:"3 2.5"}),c.jsx("path",{d:"M-35 133 Q0 142 35 133",strokeWidth:".6",strokeDasharray:"3 2.5"}),t?c.jsx("path",{d:"M0 8 L0 128",strokeWidth:"1.1"}):c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M0 10 L0 128",strokeWidth:"1.1"}),[26,42,58,74,90,106].map(e=>c.jsx("circle",{cx:"6",cy:e,r:"2",strokeWidth:".9"},e))]}),!t&&c.jsx("path",{d:"M-24 54 L20 112",strokeWidth:".7",strokeDasharray:"6 3",opacity:".8"})]}),c.jsxs("g",{fontFamily:"monospace",fontSize:"7.5",fill:"#e5484d",children:[c.jsx("path",{d:"M196 60 L232 46",stroke:"#e5484d",strokeWidth:".7"}),c.jsx("circle",{cx:"196",cy:"60",r:"2.4",fill:"#e5484d"}),c.jsx("text",{x:"235",y:"45",children:"UNRESOLVED"}),c.jsx("text",{x:"235",y:"55",fill:"#8a8a86",children:"placket closure"})]}),c.jsxs("g",{fontFamily:"monospace",fontSize:"7.5",fill:"#8a8a86",children:[c.jsx("text",{x:"14",y:"176",children:t?"BACK — ORTHOGRAPHIC":"FRONT — ORTHOGRAPHIC"}),c.jsx("text",{x:"14",y:"166",children:"SCALE 1:8 · NOT DIMENSIONALLY VERIFIED"})]})]})}const Fp=[{id:"1",title:"Trend + concept",wks:"1-3",gate:!1,desc:"Season, customer, color, silhouette, fabric themes",status:"done"},{id:"2",title:"Fabric sourcing",wks:"2-6",gate:!1,desc:"Candidate fabrics, trims, suppliers, constraints",status:"done"},{id:"3",title:"Mood + boards",wks:"3-6",gate:!1,desc:"Creative boards and early sketch directions",status:"done"},{id:"4",title:"Concept green light",wks:"6",gate:!0,desc:"Approved collection direction signed off",status:"done"},{id:"5",title:"Presentation sketches",wks:"6-10",gate:!1,desc:"Selected concepts with details and styling",status:"now"},{id:"6",title:"Design green light",wks:"10",gate:!0,desc:"Approved designs for technical development",status:"now"},{id:"7",title:"Flats + spec draft",wks:"10-14",gate:!1,desc:"Front/back flats, POMs, BOM, construction draft",status:""},{id:"8",title:"First prototype",wks:"14-20",gate:!1,desc:"Proto sample and factory questions",status:""},{id:"9",title:"First fitting",wks:"20-22",gate:!1,desc:"Fit notes, corrections, decision record",status:""},{id:"10",title:"Second prototype",wks:"22-26",gate:!1,desc:"Revised sample",status:""},{id:"11",title:"Second fitting + final",wks:"26-28",gate:!1,desc:"Approved fit and construction",status:""},{id:"12",title:"Final pack + handoff",wks:"28-30",gate:!0,desc:"Locked pack, grading inputs, factory notes",status:""},{id:"13",title:"Production prep",wks:"30-34",gate:!1,desc:"Materials, quantities, costing, capacity",status:""},{id:"14",title:"Bulk production",wks:"34-44",gate:!1,desc:"Production status and exceptions",status:""},{id:"15",title:"QC + delivery",wks:"44-52",gate:!1,desc:"QC results, issue closure, shipment readiness",status:""}];function Ny(){const[t,e]=qe.useState(Fp[4]);return c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsx("h3",{children:"Season Calendar · 15-Stage Tape Measure Timeline"}),c.jsx("p",{className:"sub",children:"Deterministic timeline tracking collection progress from concept to bulk production delivery."}),c.jsx("div",{style:{overflowX:"auto",paddingBottom:10,margin:"16px 0"},children:c.jsx("div",{style:{display:"flex",minWidth:1040,border:"1.5px solid var(--ink)",background:"#fff"},children:Fp.map(n=>{const i=t.id===n.id;return c.jsxs("div",{onClick:()=>e(n),style:{flex:1,minWidth:64,borderRight:"1px dashed var(--line)",padding:"10px 8px 12px",position:"relative",cursor:"pointer",background:i?"#E7ECFA":n.status==="now"?"#FAFAFC":"#fff"},children:[n.gate&&c.jsx("span",{style:{position:"absolute",top:-9,left:6,fontFamily:"var(--mono)",fontSize:8,letterSpacing:".18em",background:"var(--ink)",color:"#fff",padding:"1px 5px"},children:"GATE"}),c.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--graphite)",letterSpacing:".08em"},children:["WK ",n.wks]}),c.jsxs("div",{style:{fontSize:10.5,fontWeight:600,lineHeight:1.35,marginTop:4},children:[n.id,". ",n.title]}),c.jsx("div",{style:{height:5,marginTop:8,background:n.status==="done"?"var(--ink)":n.status==="now"?"var(--chalk)":"#e6e6ea"}})]},n.id)})})}),t&&c.jsxs("div",{style:{background:"#FAF9F6",border:"1px solid var(--line)",padding:14,borderRadius:4,fontSize:12.5,lineHeight:1.8},children:[c.jsxs("div",{style:{display:"flex",gap:20},children:[c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:120,display:"inline-block"},children:"Stage:"}),c.jsxs("b",{children:[t.id," · ",t.title]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:80,display:"inline-block"},children:"Weeks:"}),t.wks]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:120,display:"inline-block"},children:"Primary output:"}),t.desc]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:120,display:"inline-block"},children:"Rule:"}),"Starts only when upstream approvals are satisfied or an authorized override is recorded."]})]})]})}function Ly({onOpen:t}){const{collection:e,preflight:n}=xi();if(!e)return null;const i=e.stages.filter(u=>u.status==="Complete"||u.status==="Approved").length,r=e.stages.filter(u=>u.status==="Blocked"),s=e.styles.flatMap(u=>u.thread).filter(u=>u.state==="Open").length,a=e.styles.flatMap(u=>n[u.id]??[]),{blockers:o,warnings:l}=Os(a);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsxs("h2",{children:[e.season," ",e.year]}),c.jsxs("p",{children:[e.brand," · ",e.market," · ship ",e.shipWindow," · owner ",e.owner,". Customer: ",e.customer,"."]})]}),c.jsx(Ny,{}),c.jsxs("div",{className:"grid c4",style:{marginBottom:22},children:[c.jsxs("div",{className:"card tight",children:[c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Stage progress"}),c.jsxs("span",{className:"v",children:[i,c.jsx("span",{style:{fontSize:17,color:"var(--text-3)"},children:"/15"})]}),c.jsx("span",{className:"n",children:"Currently at stage 7 — technical development"})]}),c.jsx("div",{className:"track",children:c.jsx("i",{style:{width:`${i/15*100}%`}})})]}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Export blockers"}),c.jsx("span",{className:`v ${o?"blocker":"ok"}`,children:o}),c.jsxs("span",{className:"n",children:["Critical failures across ",e.styles.length," styles"]})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Warnings"}),c.jsx("span",{className:`v ${l?"warn":"ok"}`,children:l}),c.jsx("span",{className:"n",children:"Non-blocking, reviewable"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Open factory questions"}),c.jsx("span",{className:`v ${s?"warn":"ok"}`,children:s}),c.jsx("span",{className:"n",children:"Awaiting brand response"})]})})]}),c.jsxs("div",{className:"grid split",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Season calendar"}),c.jsx("p",{className:"sub",children:"15 stages across a 52-week Spring/Summer template. Gold rows are approval gates — a stage cannot start until its upstream gate is satisfied or an override is recorded."}),c.jsx("div",{children:e.stages.map(u=>c.jsxs("div",{className:`stage-row ${u.gate?"gate":""}`,children:[c.jsx("div",{className:"stage-n",children:u.n}),c.jsxs("div",{children:[c.jsx("div",{className:"stage-name",children:u.name}),c.jsx("div",{className:"stage-out",children:u.output})]}),c.jsxs("div",{className:"stage-weeks",children:["wk ",u.weeks]}),c.jsx("div",{style:{textAlign:"right"},children:c.jsx(Dy,{v:u.status})})]},u.n))})]}),c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[r.length>0&&c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Blocked work"}),c.jsx("p",{className:"sub",children:"Downstream stages held by an unsatisfied gate."}),r.map(u=>c.jsxs("div",{style:{marginBottom:12},children:[c.jsxs("div",{style:{display:"flex",gap:9,alignItems:"center",marginBottom:4},children:[c.jsxs(st,{tone:"blocker",children:["Stage ",u.n]}),c.jsx("span",{style:{fontSize:13},children:u.name})]}),c.jsx("p",{className:"muted",style:{fontSize:12},children:"Held by stage 7 — the technical package has unresolved production-critical fields, so no prototype can be cut."})]},u.n))]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Collection record"}),c.jsx("p",{className:"sub",children:"Fields captured at collection creation (COL-001)."}),c.jsxs("div",{className:"manifest",children:[c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Collection ID"}),e.id]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Brand"}),e.brand]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Season"}),e.season," ",e.year]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Market"}),e.market]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Ship window"}),e.shipWindow]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Currency"}),e.currency]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Template"}),"52-week SS (configurable)"]})]})]})]})]}),c.jsx("h3",{style:{fontFamily:"var(--serif)",fontSize:23,fontWeight:400,margin:"34px 0 4px"},children:"Styles"}),c.jsx("p",{className:"muted",style:{fontSize:12.5,marginBottom:18},children:"One record per garment, carrying creative assets, technical package, approvals, and factory history through the whole lifecycle."}),c.jsx("div",{className:"grid c3",children:e.styles.map(u=>c.jsx(Iy,{style:u,findings:n[u.id]??[],onOpen:t},u.id))})]})}function Iy({style:t,findings:e,onOpen:n}){const{blockers:i,warnings:r}=Os(e),s=t.assets.find(a=>a.mode==="flat")??t.assets.find(a=>a.mode==="presentation")??t.assets[0];return c.jsxs("button",{className:"style-card",onClick:()=>n(t.id),children:[c.jsx("div",{className:"thumb",children:(s==null?void 0:s.mode)==="flat"?c.jsx(ev,{}):(s==null?void 0:s.mode)==="presentation"?c.jsx(J0,{palette:s.palette}):c.jsx(Q0,{palette:(s==null?void 0:s.palette)??[]})}),c.jsxs("div",{className:"body",children:[c.jsxs("div",{className:"id",children:[t.id," · v",t.version]}),c.jsx("h4",{children:t.name}),c.jsxs("div",{className:"row",children:[c.jsx(Z0,{v:t.status}),i>0&&c.jsxs(st,{tone:"blocker",children:[i," blockers"]}),r>0&&c.jsxs(st,{tone:"warn",children:[r," warnings"]}),i===0&&r===0&&c.jsx(st,{tone:"ok",children:"Preflight clean"})]}),c.jsxs("p",{className:"muted",style:{fontSize:11.5,marginTop:10},children:[t.category," · sizes ",t.sizeRange.join("/")," · base ",t.baseSize??"—"]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="185",Fy=0,Up=1,Uy=2,tl=1,tv=2,ga=3,pr=0,un=1,Ai=2,Di=0,Cs=1,kp=2,Op=3,Bp=4,ky=5,br=100,Oy=101,By=102,zy=103,Vy=104,Hy=200,Gy=201,Wy=202,jy=203,sd=204,ad=205,Xy=206,$y=207,qy=208,Yy=209,Ky=210,Zy=211,Qy=212,Jy=213,eS=214,od=0,ld=1,cd=2,Bs=3,ud=4,dd=5,fd=6,hd=7,nv=0,tS=1,nS=2,hi=0,iv=1,rv=2,sv=3,$f=4,av=5,ov=6,lv=7,cv=300,Hr=301,zs=302,Dc=303,Nc=304,ec=306,pd=1e3,Ri=1001,md=1002,Xt=1003,iS=1004,So=1005,sn=1006,Lc=1007,Nr=1008,wn=1009,uv=1010,dv=1011,ja=1012,qf=1013,gi=1014,ci=1015,ki=1016,Yf=1017,Kf=1018,Xa=1020,fv=35902,hv=35899,pv=1021,mv=1022,Yn=1023,Oi=1026,Lr=1027,gv=1028,Zf=1029,Gr=1030,Qf=1031,Jf=1033,nl=33776,il=33777,rl=33778,sl=33779,gd=35840,vd=35841,xd=35842,_d=35843,yd=36196,Sd=37492,Md=37496,Ed=37488,Td=37489,Dl=37490,wd=37491,Ad=37808,bd=37809,Cd=37810,Rd=37811,Pd=37812,Dd=37813,Nd=37814,Ld=37815,Id=37816,Fd=37817,Ud=37818,kd=37819,Od=37820,Bd=37821,zd=36492,Vd=36494,Hd=36495,Gd=36283,Wd=36284,Nl=36285,jd=36286,rS=3200,Xd=0,sS=1,er="",Tn="srgb",Ll="srgb-linear",Il="linear",nt="srgb",Kr=7680,zp=519,aS=512,oS=513,lS=514,eh=515,cS=516,uS=517,th=518,dS=519,Vp=35044,Hp="300 es",ui=2e3,$a=2001;function fS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){const t=Fl("canvas");return t.style.display="block",t}const Gp={};function Wp(...t){const e="THREE."+t.shift();console.log(e,...t)}function vv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=vv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=vv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Rs(...t){const e=t.join(" ");e in Gp||(Gp[e]=!0,De(...t))}function pS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const mS={[od]:ld,[cd]:fd,[ud]:hd,[Bs]:dd,[ld]:od,[fd]:cd,[hd]:ud,[dd]:Bs};class Xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=Math.PI/180,$d=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function gS(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ch=class ch{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;let Oe=ch;class $s{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],T=s[a+3];if(p!==T||l!==d||u!==m||h!==x){let v=l*d+u*m+h*x+p*T;v<0&&(d=-d,m=-m,x=-x,T=-T,v=-v);let f=1-o;if(v<.9995){const y=Math.acos(v),M=Math.sin(y);f=Math.sin(f*y)/M,o=Math.sin(o*y)/M,l=l*f+d*o,u=u*f+m*o,h=h*f+x*o,p=p*f+T*o}else{l=l*f+d*o,u=u*f+m*o,h=h*f+x*o,p=p*f+T*o;const y=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=y,u*=y,h*=y,p*=y}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+l*m-u*d,e[n+1]=l*x+h*d+u*p-o*m,e[n+2]=u*x+h*m+o*d-l*p,e[n+3]=h*x-o*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*p+u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p-d*m*x;break;case"YXZ":this._x=d*h*p+u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p+d*m*x;break;case"ZXY":this._x=d*h*p-u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p-d*m*x;break;case"ZYX":this._x=d*h*p-u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p+d*m*x;break;case"YZX":this._x=d*h*p+u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p-d*m*x;break;case"XZY":this._x=d*h*p-u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p+d*m*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uh=class uh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*h,this.y=i+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;let z=uh;const Uc=new z,jp=new $s,dh=class dh{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],x=i[8],T=r[0],v=r[3],f=r[6],y=r[1],M=r[4],S=r[7],b=r[2],w=r[5],R=r[8];return s[0]=a*T+o*y+l*b,s[3]=a*v+o*M+l*w,s[6]=a*f+o*S+l*R,s[1]=u*T+h*y+p*b,s[4]=u*v+h*M+p*w,s[7]=u*f+h*S+p*R,s[2]=d*T+m*y+x*b,s[5]=d*v+m*M+x*w,s[8]=d*f+m*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,d=o*l-h*s,m=u*s-a*l,x=n*p+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/x;return e[0]=p*T,e[1]=(r*u-h*i)*T,e[2]=(o*i-r*a)*T,e[3]=d*T,e[4]=(h*n-r*l)*T,e[5]=(r*s-o*n)*T,e[6]=m*T,e[7]=(i*l-u*n)*T,e[8]=(a*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(e,n)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-e)),this}translate(e,n){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;let Fe=dh;const kc=new Fe,Xp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const t={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Ps(r.r),r.g=Ps(r.g),r.b=Ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?Il:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ll]:{primaries:e,whitePoint:i,transfer:Il,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const $e=vS();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zr;class xS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zr===void 0&&(Zr=Fl("canvas")),Zr.width=e.width,Zr.height=e.height;const r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let yS=0;const Bc=new z;class dn extends Xr{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Ri,r=Ri,s=sn,a=Nr,o=Yn,l=wn,u=dn.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Ja(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=cv;dn.DEFAULT_ANISOTROPY=1;const fh=class fh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],m=l[5],x=l[9],T=l[2],v=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-T)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+T)<.1&&Math.abs(x+v)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(m+1)/2,b=(f+1)/2,w=(h+d)/4,R=(p+T)/4,_=(x+v)/4;return M>S&&M>b?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=R/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=_/s),this.set(i,r,s,n),this}let y=Math.sqrt((v-x)*(v-x)+(p-T)*(p-T)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(v-x)/y,this.y=(p-T)/y,this.z=(d-h)/y,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;let _t=fh;class SS extends Xr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends SS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xv extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MS extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kl=class kl{constructor(e,n,i,r,s,a,o,l,u,h,p,d,m,x,T,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,p,d,m,x,T,v)}set(e,n,i,r,s,a,o,l,u,h,p,d,m,x,T,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=x,f[11]=T,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,x=o*h,T=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+x*u,n[5]=d-T*u,n[9]=-o*l,n[2]=T-d*u,n[6]=x+m*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,x=u*h,T=u*p;n[0]=d+T*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=T+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,x=u*h,T=u*p;n[0]=d-T*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=T-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*p,x=o*h,T=o*p;n[0]=l*h,n[4]=x*u-m,n[8]=d*u+T,n[1]=l*p,n[5]=T*u+d,n[9]=m*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,x=o*l,T=o*u;n[0]=l*h,n[4]=T-d*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+x,n[10]=d-T*p}else if(e.order==="XZY"){const d=a*l,m=a*u,x=o*l,T=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=d*p+T,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=T*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,TS)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Wi.crossVectors(i,Sn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Wi.crossVectors(i,Sn)),Wi.normalize(),Mo.crossVectors(Sn,Wi),r[0]=Wi.x,r[4]=Mo.x,r[8]=Sn.x,r[1]=Wi.y,r[5]=Mo.y,r[9]=Sn.y,r[2]=Wi.z,r[6]=Mo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],x=i[2],T=i[6],v=i[10],f=i[14],y=i[3],M=i[7],S=i[11],b=i[15],w=r[0],R=r[4],_=r[8],C=r[12],P=r[1],D=r[5],I=r[9],X=r[13],Q=r[2],B=r[6],K=r[10],G=r[14],k=r[3],q=r[7],te=r[11],Y=r[15];return s[0]=a*w+o*P+l*Q+u*k,s[4]=a*R+o*D+l*B+u*q,s[8]=a*_+o*I+l*K+u*te,s[12]=a*C+o*X+l*G+u*Y,s[1]=h*w+p*P+d*Q+m*k,s[5]=h*R+p*D+d*B+m*q,s[9]=h*_+p*I+d*K+m*te,s[13]=h*C+p*X+d*G+m*Y,s[2]=x*w+T*P+v*Q+f*k,s[6]=x*R+T*D+v*B+f*q,s[10]=x*_+T*I+v*K+f*te,s[14]=x*C+T*X+v*G+f*Y,s[3]=y*w+M*P+S*Q+b*k,s[7]=y*R+M*D+S*B+b*q,s[11]=y*_+M*I+S*K+b*te,s[15]=y*C+M*X+S*G+b*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],x=e[3],T=e[7],v=e[11],f=e[15],y=l*m-u*d,M=o*m-u*p,S=o*d-l*p,b=a*m-u*h,w=a*d-l*h,R=a*p-o*h;return n*(T*y-v*M+f*S)-i*(x*y-v*b+f*w)+r*(x*M-T*b+f*R)-s*(x*S-T*w+v*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],x=e[12],T=e[13],v=e[14],f=e[15],y=n*o-i*a,M=n*l-r*a,S=n*u-s*a,b=i*l-r*o,w=i*u-s*o,R=r*u-s*l,_=h*T-p*x,C=h*v-d*x,P=h*f-m*x,D=p*v-d*T,I=p*f-m*T,X=d*f-m*v,Q=y*X-M*I+S*D+b*P-w*C+R*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Q;return e[0]=(o*X-l*I+u*D)*B,e[1]=(r*I-i*X-s*D)*B,e[2]=(T*R-v*w+f*b)*B,e[3]=(d*w-p*R-m*b)*B,e[4]=(l*P-a*X-u*C)*B,e[5]=(n*X-r*P+s*C)*B,e[6]=(v*S-x*R-f*M)*B,e[7]=(h*R-d*S+m*M)*B,e[8]=(a*I-o*P+u*_)*B,e[9]=(i*P-n*I-s*_)*B,e[10]=(x*w-T*S+f*y)*B,e[11]=(p*S-h*w-m*y)*B,e[12]=(o*C-a*D-l*_)*B,e[13]=(n*D-i*C+r*_)*B,e[14]=(T*M-x*b-v*y)*B,e[15]=(h*b-p*M+d*y)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,p=o+o,d=s*u,m=s*h,x=s*p,T=a*h,v=a*p,f=o*p,y=l*u,M=l*h,S=l*p,b=i.x,w=i.y,R=i.z;return r[0]=(1-(T+f))*b,r[1]=(m+S)*b,r[2]=(x-M)*b,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+f))*w,r[6]=(v+y)*w,r[7]=0,r[8]=(x+M)*R,r[9]=(v-y)*R,r[10]=(1-(d+T))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Hn.copy(this);const u=1/a,h=1/o,p=1/l;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=p,Hn.elements[9]*=p,Hn.elements[10]*=p,n.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ui,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let x,T;if(l)x=s/(a-s),T=a*s/(a-s);else if(o===ui)x=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===$a)x=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,T;if(l)x=1/(a-s),T=a/(a-s);else if(o===ui)x=-2/(a-s),T=-(a+s)/(a-s);else if(o===$a)x=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};kl.prototype.isMatrix4=!0;let Ct=kl;const Qr=new z,Hn=new Ct,ES=new z(0,0,0),TS=new z(1,1,1),Wi=new z,Mo=new z,Sn=new z,qp=new Ct,Yp=new $s;class mr{constructor(e=0,n=0,i=0,r=mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mr.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const Kp=new z,Jr=new $s,_i=new Ct,Eo=new z,aa=new z,AS=new z,bS=new $s,Zp=new z(1,0,0),Qp=new z(0,1,0),Jp=new z(0,0,1),em={type:"added"},CS={type:"removed"},es={type:"childadded",child:null},zc={type:"childremoved",child:null};class qt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new z,n=new mr,i=new $s,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Fe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Eo.copy(e):Eo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(aa,Eo,this.up):_i.lookAt(Eo,aa,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(_i),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),es.child=e,this.dispatchEvent(es),es.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CS),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,bS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class va extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,i),f=this._getHandJoint(u,T);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},To={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=gS(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hc(a,s,e+1/3),this.g=Hc(a,s,e),this.b=Hc(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=yv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return $e.workingToColorSpace(tn.copy(this),e),Math.round(We(tn.r*255,0,255))*65536+Math.round(We(tn.g*255,0,255))*256+Math.round(We(tn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Tn){$e.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(To);const i=Fc(ji.h,To.h,n),r=Fc(ji.s,To.s,n),s=Fc(ji.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ve;Ve.NAMES=yv;class tm extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new z,yi=new z,Gc=new z,Si=new z,ts=new z,ns=new z,nm=new z,Wc=new z,jc=new z,Xc=new z,$c=new _t,qc=new _t,Yc=new _t;class qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),yi.subVectors(i,n),Gc.subVectors(e,n);const a=Gn.dot(Gn),o=Gn.dot(yi),l=Gn.dot(Gc),u=yi.dot(yi),h=yi.dot(Gc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(u*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return $c.setScalar(0),qc.setScalar(0),Yc.setScalar(0),$c.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($c,s.x),a.addScaledVector(qc,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),yi.subVectors(e,n),Gn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ts.subVectors(r,i),ns.subVectors(s,i),Wc.subVectors(e,i);const l=ts.dot(Wc),u=ns.dot(Wc);if(l<=0&&u<=0)return n.copy(i);jc.subVectors(e,r);const h=ts.dot(jc),p=ns.dot(jc);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ts,a);Xc.subVectors(e,s);const m=ts.dot(Xc),x=ns.dot(Xc);if(x>=0&&m<=x)return n.copy(s);const T=m*u-l*x;if(T<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(ns,o);const v=h*x-m*p;if(v<=0&&p-h>=0&&m-x>=0)return nm.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(nm,o);const f=1/(v+T+d);return a=T*f,o=d*f,n.copy(i).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ao.subVectors(this.max,oa),is.subVectors(e.a,oa),rs.subVectors(e.b,oa),ss.subVectors(e.c,oa),Xi.subVectors(rs,is),$i.subVectors(ss,rs),yr.subVectors(is,ss);let n=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-yr.z,yr.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,yr.z,0,-yr.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-yr.y,yr.x,0];return!Kc(n,is,rs,ss,Ao)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,is,rs,ss,Ao))?!1:(bo.crossVectors(Xi,$i),n=[bo.x,bo.y,bo.z],Kc(n,is,rs,ss,Ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,wo=new eo,is=new z,rs=new z,ss=new z,Xi=new z,$i=new z,yr=new z,oa=new z,Ao=new z,bo=new z,Sr=new z;function Kc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Sr.fromArray(t,s);const o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),u=n.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const It=new z,Co=new Oe;let PS=0;class mi extends Xr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sv extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mv extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wt extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const DS=new eo,la=new z,Zc=new z;class ih{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const n=la.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Zc)),this.expandByPoint(la.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NS=0;const Nn=new Ct,Qc=new qt,as=new z,Mn=new eo,ca=new eo,Vt=new z;class zn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fS(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ih);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(Mn.min,ca.min),Mn.expandByPoint(Vt),Vt.addVectors(Mn.max,ca.max),Mn.expandByPoint(Vt)):(Mn.expandByPoint(ca.min),Mn.expandByPoint(ca.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Vt.fromBufferAttribute(o,u),l&&(as.fromBufferAttribute(e,u),Vt.add(as)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new z,l[_]=new z;const u=new z,h=new z,p=new z,d=new Oe,m=new Oe,x=new Oe,T=new z,v=new z;function f(_,C,P){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,P),d.fromBufferAttribute(s,_),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,P),h.sub(u),p.sub(u),m.sub(d),x.sub(d);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(T.copy(h).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(D),v.copy(p).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(D),o[_].add(T),o[C].add(T),o[P].add(T),l[_].add(v),l[C].add(v),l[P].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,C=y.length;_<C;++_){const P=y[_],D=P.start,I=P.count;for(let X=D,Q=D+I;X<Q;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new z,S=new z,b=new z,w=new z;function R(_){b.fromBufferAttribute(r,_),w.copy(b);const C=o[_];M.copy(C),M.sub(b.multiplyScalar(b.dot(C))).normalize(),S.crossVectors(w,C);const D=S.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,D)}for(let _=0,C=y.length;_<C;++_){const P=y[_],D=P.start,I=P.count;for(let X=D,Q=D+I;X<Q;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,h=new z,p=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),T=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,T),a.fromBufferAttribute(n,v),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,v),o.add(h),l.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,d=new u.constructor(l.length*h);let m=0,x=0;for(let T=0,v=l.length;T<v;T++){o.isInterleavedBufferAttribute?m=l[T]*o.data.stride+o.offset:m=l[T]*h;for(let f=0;f<h;f++)d[x++]=u[m++]}return new mi(d,h,p)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LS=0;class qs extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Cs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new z,Jc=new z,Ro=new z,qi=new z,eu=new z,Po=new z,tu=new z;class IS{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=qi.dot(this.direction),l=-qi.dot(Ro),u=qi.lengthSq(),h=Math.abs(1-a*a);let p,d,m,x;if(h>0)if(p=a*l-o,d=a*o-l,x=s*h,p>=0)if(d>=-x)if(d<=x){const T=1/h;p*=T,d*=T,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+u}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;else d<=-x?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u):d<=x?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Jc).addScaledVector(Ro,d),m}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Po.subVectors(i,e),tu.crossVectors(eu,Po);let a=this.direction.dot(tu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(Po.crossVectors(qi,Po));if(l<0)return null;const u=o*this.direction.dot(eu.cross(qi));if(u<0||l+u>a)return null;const h=-o*qi.dot(tu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rh extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const im=new Ct,Mr=new IS,Do=new ih,rm=new z,No=new z,Lo=new z,Io=new z,nu=new z,Fo=new z,sm=new z,Uo=new z;class nn extends qt{constructor(e=new zn,n=new rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(nu.fromBufferAttribute(p,e),a?Fo.addScaledVector(nu,h):Fo.addScaledVector(nu.sub(n),h))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Do.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Do,rm)===null||Mr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){const v=d[x],f=a[v.materialIndex],y=Math.max(v.start,m.start),M=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let S=y,b=M;S<b;S+=3){const w=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);r=ko(this,f,e,i,u,h,p,w,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let v=x,f=T;v<f;v+=3){const y=o.getX(v),M=o.getX(v+1),S=o.getX(v+2);r=ko(this,a,e,i,u,h,p,y,M,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,T=d.length;x<T;x++){const v=d[x],f=a[v.materialIndex],y=Math.max(v.start,m.start),M=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=y,b=M;S<b;S+=3){const w=S,R=S+1,_=S+2;r=ko(this,f,e,i,u,h,p,w,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let v=x,f=T;v<f;v+=3){const y=v,M=v+1,S=v+2;r=ko(this,a,e,i,u,h,p,y,M,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function FS(t,e,n,i,r,s,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pr,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Uo);return u<n.near||u>n.far?null:{distance:u,point:Uo.clone(),object:t}}function ko(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,No),t.getVertexPosition(l,Lo),t.getVertexPosition(u,Io);const h=FS(t,e,n,i,No,Lo,Io,sm);if(h){const p=new z;qn.getBarycoord(sm,No,Lo,Io,p),r&&(h.uv=qn.getInterpolatedAttribute(r,o,l,u,p,new Oe)),s&&(h.uv1=qn.getInterpolatedAttribute(s,o,l,u,p,new Oe)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,u,p,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new z,materialIndex:0};qn.getNormal(No,Lo,Io,d.normal),h.face=d,h.barycoord=p}return h}class US extends dn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Xt,h=Xt,p,d){super(null,a,o,l,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=new z,kS=new z,OS=new Fe;class Ar{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=iu.subVectors(i,n).cross(kS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(iu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OS.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new ih,BS=new Oe(.5,.5),Oo=new z;class sh{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,a=new Ar){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],p=s[5],d=s[6],m=s[7],x=s[8],T=s[9],v=s[10],f=s[11],y=s[12],M=s[13],S=s[14],b=s[15];if(r[0].setComponents(u-a,m-h,f-x,b-y).normalize(),r[1].setComponents(u+a,m+h,f+x,b+y).normalize(),r[2].setComponents(u+o,m+p,f+T,b+M).normalize(),r[3].setComponents(u-o,m-p,f-T,b-M).normalize(),i)r[4].setComponents(l,d,v,S).normalize(),r[5].setComponents(u-l,m-d,f-v,b-S).normalize();else if(r[4].setComponents(u-l,m-d,f-v,b-S).normalize(),n===ui)r[5].setComponents(u+l,m+d,f+v,b+S).normalize();else if(n===$a)r[5].setComponents(l,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=BS.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ev extends dn{constructor(e=[],n=Hr,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vs extends dn{constructor(e,n,i=gi,r,s,a,o=Xt,l=Xt,u,h=Oi,p=1){if(h!==Oi&&h!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zS extends Vs{constructor(e,n=gi,i=Hr,r,s,a=Xt,o=Xt,l,u=Oi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tv extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ys extends zn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(p,2));function x(T,v,f,y,M,S,b,w,R,_,C){const P=S/R,D=b/_,I=S/2,X=b/2,Q=w/2,B=R+1,K=_+1;let G=0,k=0;const q=new z;for(let te=0;te<K;te++){const Y=te*D-X;for(let ce=0;ce<B;ce++){const Ue=ce*P-I;q[T]=Ue*y,q[v]=Y*M,q[f]=Q,u.push(q.x,q.y,q.z),q[T]=0,q[v]=0,q[f]=w>0?1:-1,h.push(q.x,q.y,q.z),p.push(ce/R),p.push(1-te/_),G+=1}}for(let te=0;te<_;te++)for(let Y=0;Y<R;Y++){const ce=d+Y+B*te,Ue=d+Y+B*(te+1),Ie=d+(Y+1)+B*(te+1),Ge=d+(Y+1)+B*te;l.push(ce,Ue,Ge),l.push(Ue,Ie,Ge),k+=6}o.addGroup(m,k,C),m+=k,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ul extends zn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],m=[];let x=0;const T=[],v=i/2;let f=0;y(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(m,2));function y(){const S=new z,b=new z;let w=0;const R=(n-e)/i;for(let _=0;_<=s;_++){const C=[],P=_/s,D=P*(n-e)+e;for(let I=0;I<=r;I++){const X=I/r,Q=X*l+o,B=Math.sin(Q),K=Math.cos(Q);b.x=D*B,b.y=-P*i+v,b.z=D*K,p.push(b.x,b.y,b.z),S.set(B,R,K).normalize(),d.push(S.x,S.y,S.z),m.push(X,1-P),C.push(x++)}T.push(C)}for(let _=0;_<r;_++)for(let C=0;C<s;C++){const P=T[C][_],D=T[C+1][_],I=T[C+1][_+1],X=T[C][_+1];(e>0||C!==0)&&(h.push(P,D,X),w+=3),(n>0||C!==s-1)&&(h.push(D,I,X),w+=3)}u.addGroup(f,w,0),f+=w}function M(S){const b=x,w=new Oe,R=new z;let _=0;const C=S===!0?e:n,P=S===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,v*P,0),d.push(0,P,0),m.push(.5,.5),x++;const D=x;for(let I=0;I<=r;I++){const Q=I/r*l+o,B=Math.cos(Q),K=Math.sin(Q);R.x=C*K,R.y=v*P,R.z=C*B,p.push(R.x,R.y,R.z),d.push(0,P,0),w.x=B*.5+.5,w.y=K*.5*P+.5,m.push(w.x,w.y),x++}for(let I=0;I<r;I++){const X=b+I,Q=D+I;S===!0?h.push(Q,Q+1,X):h.push(Q+1,Q,X),_+=3}u.addGroup(f,_,S===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ah extends zn{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=We(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],u=[],h=1/n,p=new z,d=new Oe,m=new z,x=new z,T=new z;let v=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:v=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,m.x=f*1,m.y=-v,m.z=f*0,T.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(T.x,T.y,T.z);break;default:v=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,m.x=f*1,m.y=-v,m.z=f*0,x.copy(m),m.x+=T.x,m.y+=T.y,m.z+=T.z,m.normalize(),l.push(m.x,m.y,m.z),T.copy(x)}for(let y=0;y<=n;y++){const M=i+y*h*r,S=Math.sin(M),b=Math.cos(M);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*S,p.y=e[w].y,p.z=e[w].x*b,a.push(p.x,p.y,p.z),d.x=y/n,d.y=w/(e.length-1),o.push(d.x,d.y);const R=l[3*w+0]*S,_=l[3*w+1],C=l[3*w+0]*b;u.push(R,_,C)}}for(let y=0;y<n;y++)for(let M=0;M<e.length-1;M++){const S=M+y*e.length,b=S,w=S+e.length,R=S+e.length+1,_=S+1;s.push(b,w,_),s.push(R,_,w)}this.setIndex(s),this.setAttribute("position",new Wt(a,3)),this.setAttribute("uv",new Wt(o,2)),this.setAttribute("normal",new Wt(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.points,e.segments,e.phiStart,e.phiLength)}}class Hs extends zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,d=n/l,m=[],x=[],T=[],v=[];for(let f=0;f<h;f++){const y=f*d-a;for(let M=0;M<u;M++){const S=M*p-s;x.push(S,-y,0),T.push(0,0,1),v.push(M/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const M=y+u*f,S=y+u*(f+1),b=y+1+u*(f+1),w=y+1+u*f;m.push(M,S,w),m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(T,3)),this.setAttribute("uv",new Wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class oh extends zn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],p=new z,d=new z,m=[],x=[],T=[],v=[];for(let f=0;f<=i;f++){const y=[],M=f/i,S=a+M*o,b=e*Math.cos(S),w=Math.sqrt(e*e-b*b);let R=0;f===0&&a===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let _=0;_<=n;_++){const C=_/n,P=r+C*s;p.x=-w*Math.cos(P),p.y=b,p.z=w*Math.sin(P),x.push(p.x,p.y,p.z),d.copy(p).normalize(),T.push(d.x,d.y,d.z),v.push(C+R,1-M),y.push(u++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<n;y++){const M=h[f][y+1],S=h[f][y],b=h[f+1][y],w=h[f+1][y+1];(f!==0||a>0)&&m.push(M,S,w),(f!==i-1||l<Math.PI)&&m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(T,3)),this.setAttribute("uv",new Wt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class VS extends qs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(am(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(am(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function am(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function HS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const GS={clone:Gs,merge:on};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XS extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $S extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ru extends $S{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qS extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YS extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Av extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class KS extends Av{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const su=new Ct,om=new z,lm=new z;class ZS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;om.setFromMatrixPosition(e.matrixWorld),n.position.copy(om),lm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lm),n.updateMatrixWorld(),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===$a||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bo=new z,zo=new $s,ri=new z;class bv extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,zo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Bo,zo,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new z,cm=new Oe,um=new Oe;class Fn extends bv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,cm,um),n.subVectors(um,cm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ic*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class lh extends bv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class QS extends ZS{constructor(){super(new lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends Av{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new QS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const os=-90,ls=1;class JS extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(os,ls,e,n);r.layers=this.layers,this.add(r);const s=new Fn(os,ls,e,n);s.layers=this.layers,this.add(s);const a=new Fn(os,ls,e,n);a.layers=this.layers,this.add(a);const o=new Fn(os,ls,e,n);o.layers=this.layers,this.add(o);const l=new Fn(os,ls,e,n);l.layers=this.layers,this.add(l);const u=new Fn(os,ls,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class eM extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const hh=class hh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};hh.prototype.isMatrix2=!0;let dm=hh;function fm(t,e,n,i){const r=nM(i);switch(n){case pv:return t*e;case gv:return t*e/r.components*r.byteLength;case Zf:return t*e/r.components*r.byteLength;case Gr:return t*e*2/r.components*r.byteLength;case Qf:return t*e*2/r.components*r.byteLength;case mv:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Jf:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:case _d:return Math.max(t,16)*Math.max(e,8)/4;case gd:case xd:return Math.max(t,8)*Math.max(e,8)/2;case yd:case Sd:case Ed:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Md:case Dl:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zd:case Vd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Nl:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nM(t){switch(t){case wn:case uv:return{byteLength:1,components:1};case ja:case dv:case ki:return{byteLength:2,components:1};case Yf:case Kf:return{byteLength:2,components:4};case gi:case qf:case ci:return{byteLength:4,components:1};case fv:case hv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function iM(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<p.length;m++){const x=p[d],T=p[m];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++d,p[d]=T)}p.length=d+1;for(let m=0,x=p.length;m<x;m++){const T=p[m];t.bufferSubData(u,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",FM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,KM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:rM,alphahash_pars_fragment:sM,alphamap_fragment:aM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:dM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:vM,bumpmap_pars_fragment:xM,clipping_planes_fragment:_M,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:MM,color_fragment:EM,color_pars_fragment:TM,color_pars_vertex:wM,color_vertex:AM,common:bM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:RM,displacementmap_pars_vertex:PM,displacementmap_vertex:DM,emissivemap_fragment:NM,emissivemap_pars_fragment:LM,colorspace_fragment:IM,colorspace_pars_fragment:FM,envmap_fragment:UM,envmap_common_pars_fragment:kM,envmap_pars_fragment:OM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:KM,envmap_vertex:zM,fog_vertex:VM,fog_pars_vertex:HM,fog_fragment:GM,fog_pars_fragment:WM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:XM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:qM,lights_pars_begin:YM,lights_toon_fragment:ZM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:r1,lights_fragment_end:s1,lightprobes_pars_fragment:a1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:d1,map_pars_fragment:f1,map_particle_fragment:h1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:v1,morphcolor_vertex:x1,morphnormal_vertex:_1,morphtarget_pars_vertex:y1,morphtarget_vertex:S1,normal_fragment_begin:M1,normal_fragment_maps:E1,normal_pars_fragment:T1,normal_pars_vertex:w1,normal_vertex:A1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:D1,opaque_fragment:N1,packing:L1,premultiplied_alpha_fragment:I1,project_vertex:F1,dithering_fragment:U1,dithering_pars_fragment:k1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:V1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:W1,skinning_pars_vertex:j1,skinning_vertex:X1,skinnormal_vertex:$1,specularmap_fragment:q1,specularmap_pars_fragment:Y1,tonemapping_fragment:K1,tonemapping_pars_fragment:Z1,transmission_fragment:Q1,transmission_pars_fragment:J1,uv_pars_fragment:eE,uv_pars_vertex:tE,uv_vertex:nE,worldpos_vertex:iE,background_vert:rE,background_frag:sE,backgroundCube_vert:aE,backgroundCube_frag:oE,cube_vert:lE,cube_frag:cE,depth_vert:uE,depth_frag:dE,distance_vert:fE,distance_frag:hE,equirect_vert:pE,equirect_frag:mE,linedashed_vert:gE,linedashed_frag:vE,meshbasic_vert:xE,meshbasic_frag:_E,meshlambert_vert:yE,meshlambert_frag:SE,meshmatcap_vert:ME,meshmatcap_frag:EE,meshnormal_vert:TE,meshnormal_frag:wE,meshphong_vert:AE,meshphong_frag:bE,meshphysical_vert:CE,meshphysical_frag:RE,meshtoon_vert:PE,meshtoon_frag:DE,points_vert:NE,points_frag:LE,shadow_vert:IE,shadow_frag:FE,sprite_vert:UE,sprite_frag:kE},pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},oi={basic:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:on([pe.common,pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:on([pe.lights,pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};oi.physical={uniforms:on([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Vo={r:0,b:0,g:0},OE=new Ct,Rv=new Fe;Rv.set(-1,0,0,0,1,0,0,0,1);function BE(t,e,n,i,r,s){const a=new Ve(0);let o=r===!0?0:1,l,u,h=null,p=0,d=null;function m(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const S=y.backgroundBlurriness>0;M=e.get(M,S)}return M}function x(y){let M=!1;const S=m(y);S===null?v(a,o):S&&S.isColor&&(v(S,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function T(y,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===ec)?(u===void 0&&(u=new nn(new Ys(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Gs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Rv),u.material.toneMapped=$e.getTransfer(S.colorSpace)!==nt,(h!==S||p!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nn(new Hs(2,2),new vi({name:"BackgroundMaterial",uniforms:Gs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function v(y,M){y.getRGB(Vo,wv(t)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,M,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,v(a,o)},render:x,addToRenderList:T,dispose:f}}function zE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(D,I,X,Q,B){let K=!1;const G=p(D,Q,X,I);s!==G&&(s=G,u(s.object)),K=m(D,Q,X,B),K&&x(D,Q,X,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(D,I,X,Q),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function u(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function p(D,I,X,Q){const B=Q.wireframe===!0;let K=i[I.id];K===void 0&&(K={},i[I.id]=K);const G=D.isInstancedMesh===!0?D.id:0;let k=K[G];k===void 0&&(k={},K[G]=k);let q=k[X.id];q===void 0&&(q={},k[X.id]=q);let te=q[B];return te===void 0&&(te=d(l()),q[B]=te),te}function d(D){const I=[],X=[],Q=[];for(let B=0;B<n;B++)I[B]=0,X[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:Q,object:D,attributes:{},index:null}}function m(D,I,X,Q){const B=s.attributes,K=I.attributes;let G=0;const k=X.getAttributes();for(const q in k)if(k[q].location>=0){const Y=B[q];let ce=K[q];if(ce===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),Y===void 0||Y.attribute!==ce||ce&&Y.data!==ce.data)return!0;G++}return s.attributesNum!==G||s.index!==Q}function x(D,I,X,Q){const B={},K=I.attributes;let G=0;const k=X.getAttributes();for(const q in k)if(k[q].location>=0){let Y=K[q];Y===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const ce={};ce.attribute=Y,Y&&Y.data&&(ce.data=Y.data),B[q]=ce,G++}s.attributes=B,s.attributesNum=G,s.index=Q}function T(){const D=s.newAttributes;for(let I=0,X=D.length;I<X;I++)D[I]=0}function v(D){f(D,0)}function f(D,I){const X=s.newAttributes,Q=s.enabledAttributes,B=s.attributeDivisors;X[D]=1,Q[D]===0&&(t.enableVertexAttribArray(D),Q[D]=1),B[D]!==I&&(t.vertexAttribDivisor(D,I),B[D]=I)}function y(){const D=s.newAttributes,I=s.enabledAttributes;for(let X=0,Q=I.length;X<Q;X++)I[X]!==D[X]&&(t.disableVertexAttribArray(X),I[X]=0)}function M(D,I,X,Q,B,K,G){G===!0?t.vertexAttribIPointer(D,I,X,B,K):t.vertexAttribPointer(D,I,X,Q,B,K)}function S(D,I,X,Q){T();const B=Q.attributes,K=X.getAttributes(),G=I.defaultAttributeValues;for(const k in K){const q=K[k];if(q.location>=0){let te=B[k];if(te===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const Y=te.normalized,ce=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const Ie=Ue.buffer,Ge=Ue.type,Z=Ue.bytesPerElement,oe=Ge===t.INT||Ge===t.UNSIGNED_INT||te.gpuType===qf;if(te.isInterleavedBufferAttribute){const re=te.data,Pe=re.stride,Ne=te.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<q.locationSize;Re++)f(q.location+Re,re.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<q.locationSize;Re++)v(q.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Re=0;Re<q.locationSize;Re++)M(q.location+Re,ce/q.locationSize,Ge,Y,Pe*Z,(Ne+ce/q.locationSize*Re)*Z,oe)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)f(q.location+re,te.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<q.locationSize;re++)v(q.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let re=0;re<q.locationSize;re++)M(q.location+re,ce/q.locationSize,Ge,Y,ce*Z,ce/q.locationSize*re*Z,oe)}}else if(G!==void 0){const Y=G[k];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(q.location,Y);break;case 3:t.vertexAttrib3fv(q.location,Y);break;case 4:t.vertexAttrib4fv(q.location,Y);break;default:t.vertexAttrib1fv(q.location,Y)}}}}y()}function b(){C();for(const D in i){const I=i[D];for(const X in I){const Q=I[X];for(const B in Q){const K=Q[B];for(const G in K)h(K[G].object),delete K[G];delete Q[B]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const X in I){const Q=I[X];for(const B in Q){const K=Q[B];for(const G in K)h(K[G].object),delete K[G];delete Q[B]}}delete i[D.id]}function R(D){for(const I in i){const X=i[I];for(const Q in X){const B=X[Q];if(B[D.id]===void 0)continue;const K=B[D.id];for(const G in K)h(K[G].object),delete K[G];delete B[D.id]}}}function _(D){for(const I in i){const X=i[I],Q=D.isInstancedMesh===!0?D.id:0,B=X[Q];if(B!==void 0){for(const K in B){const G=B[K];for(const k in G)h(G[k].object),delete G[k];delete B[K]}delete X[Q],Object.keys(X).length===0&&delete i[I]}}}function C(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:v,disableUnusedAttributes:y}}function VE(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function HE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Yn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!_)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(De("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:b,samples:w}}function GE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ar,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const x=p.clippingPlanes,T=p.clipIntersection,v=p.clipShadows,f=t.get(p);if(!r||x===null||x.length===0||s&&!v)s?h(null):u();else{const y=s?0:i,M=y*4;let S=f.clippingState||null;l.value=S,S=h(x,d,M,m);for(let b=0;b!==M;++b)S[b]=n[b];f.clippingState=S,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,x){const T=p!==null?p.length:0;let v=null;if(T!==0){if(v=l.value,x!==!0||v===null){const f=m+T*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<f)&&(v=new Float32Array(f));for(let M=0,S=m;M!==T;++M,S+=4)a.copy(p[M]).applyMatrix4(y,o),a.normal.toArray(v,S),v[S+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}const ir=4,hm=[.125,.215,.35,.446,.526,.582],Cr=20,WE=256,ua=new lh,pm=new Ve;let ou=null,lu=0,cu=0,uu=!1;const jE=new z;class qd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=jE}=s;ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ki,format:Yn,colorSpace:Ll,depthBuffer:!1},r=mm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XE(s)),this._blurMaterial=qE(s,e,n),this._ggxMaterial=$E(s,e,n)}return r}_compileMaterial(e){const n=new nn(new zn,e);this._renderer.compile(n,ua)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(pm),p.toneMapping=hi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Ys,new rh({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,v=T.material;let f=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,f=!0):(v.color.copy(pm),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,u[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const b=this._cubeSize;cs(r,S*b,M>2?b:0,b,b),p.setRenderTarget(r),f&&p.render(T,l),p.render(e,l)}p.toneMapping=m,p.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;cs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ua)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),d=0+u*1.25,m=p*d,{_lodMax:x}=this,T=this._sizeLods[i],v=3*T*(i>x-ir?i-x+ir:0),f=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,cs(s,v,f,3*T,2*T),r.setRenderTarget(s),r.render(o,ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,cs(e,v,f,3*T,2*T),r.setRenderTarget(e),r.render(o,ua)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Cr-1),T=s/x,v=isFinite(s)?1+Math.floor(h*T):Cr;v>Cr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Cr}`);const f=[];let y=0;for(let R=0;R<Cr;++R){const _=R/T,C=Math.exp(-_*_/2);f.push(C),R===0?y+=C:R<v&&(y+=2*C)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-i;const S=this._sizeLods[r],b=3*S*(r>M-ir?r-M+ir:0),w=4*(this._cubeSize-S);cs(n,b,w,3*S,2*S),l.setRenderTarget(n),l.render(p,ua)}}function XE(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+hm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=hm[a-t+ir-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,T=3,v=2,f=1,y=new Float32Array(T*x*m),M=new Float32Array(v*x*m),S=new Float32Array(f*x*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,_=w>2?0:-1,C=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];y.set(C,T*x*w),M.set(d,v*x*w);const P=[w,w,w,w,w,w];S.set(P,f*x*w)}const b=new zn;b.setAttribute("position",new mi(y,T)),b.setAttribute("uv",new mi(M,v)),b.setAttribute("faceIndex",new mi(S,f)),i.push(new nn(b,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function mm(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $E(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function qE(t,e,n){const i=new Float32Array(Cr),r=new z(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function gm(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function vm(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pv extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ev(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ys(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Di});s.uniforms.tEquirect.value=n;const a=new nn(r,s),o=n.minFilter;return n.minFilter===Nr&&(n.minFilter=sn),new JS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function YE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Dc||m===Nc)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const T=new Pv(x.height);return T.fromEquirectangularTexture(t,d),e.set(d,T),d.addEventListener("dispose",u),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,x=m===Dc||m===Nc,T=m===Hr||m===zs;if(x||T){let v=n.get(d);const f=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new qd(t)),v=x?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return x&&y&&y.height>0||T&&y&&l(y)?(i===null&&(i=new qd(t)),v=x?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",h),v.texture):null}}}return d}function o(d,m){return m===Dc?d.mapping=Hr:m===Nc&&(d.mapping=zs),d}function l(d){let m=0;const x=6;for(let T=0;T<x;T++)d[T]!==void 0&&m++;return m===x}function u(d){const m=d.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function KE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Rs("WebGLRenderer: "+i+" extension not supported."),r}}}function ZE(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function u(p){const d=[],m=p.index,x=p.attributes.position;let T=0;if(x===void 0)return;if(m!==null){const y=m.array;T=m.version;for(let M=0,S=y.length;M<S;M+=3){const b=y[M+0],w=y[M+1],R=y[M+2];d.push(b,w,w,R,R,b)}}else{const y=x.array;T=x.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const b=M+0,w=M+1,R=M+2;d.push(b,w,w,R,R,b)}}const v=new(x.count>=65535?Mv:Sv)(d,1);v.version=T;const f=s.get(p);f&&e.remove(f),s.set(p,v)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function QE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function u(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*a,m),n.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let T=0;for(let v=0;v<m;v++)T+=d[v];n.update(T,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function JE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eT(t,e,n){const i=new WeakMap,r=new _t;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),T===!0&&(S=2),v===!0&&(S=3);let b=o.attributes.position.count*S,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*w*4*p),_=new xv(R,b,w,p);_.type=ci,_.needsUpdate=!0;const C=S*4;for(let D=0;D<p;D++){const I=f[D],X=y[D],Q=M[D],B=b*w*4*D;for(let K=0;K<I.count;K++){const G=K*C;x===!0&&(r.fromBufferAttribute(I,K),R[B+G+0]=r.x,R[B+G+1]=r.y,R[B+G+2]=r.z,R[B+G+3]=0),T===!0&&(r.fromBufferAttribute(X,K),R[B+G+4]=r.x,R[B+G+5]=r.y,R[B+G+6]=r.z,R[B+G+7]=0),v===!0&&(r.fromBufferAttribute(Q,K),R[B+G+8]=r.x,R[B+G+9]=r.y,R[B+G+10]=r.z,R[B+G+11]=Q.itemSize===4?r.w:1)}}d={count:p,texture:_,size:new Oe(b,w)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let v=0;v<u.length;v++)x+=u[v];const T=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",T),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function tT(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,d=e.get(u,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const nT={[iv]:"LINEAR_TONE_MAPPING",[rv]:"REINHARD_TONE_MAPPING",[sv]:"CINEON_TONE_MAPPING",[$f]:"ACES_FILMIC_TONE_MAPPING",[ov]:"AGX_TONE_MAPPING",[lv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function iT(t,e,n,i,r,s){const a=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Vs(e,n):void 0}),o=new pi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new zn;l.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const u=new XS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new nn(l,u),p=new lh(-1,1,1,-1,0,1);let d=null,m=null,x=!1,T,v=null,f=[],y=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let b=0;b<f.length;b++){const w=f[b];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){f=M,y=f.length>0&&f[0].isRenderPass===!0;const S=a.width,b=a.height;for(let w=0;w<f.length;w++){const R=f[w];R.setSize&&R.setSize(S,b)}},this.begin=function(M,S){if(x||M.toneMapping===hi&&f.length===0)return!1;if(v=S,S!==null){const b=S.width,w=S.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return y===!1&&M.setRenderTarget(a),T=M.toneMapping,M.toneMapping=hi,!0},this.hasRenderPass=function(){return y},this.end=function(M,S){M.toneMapping=T,x=!0;let b=a,w=o;for(let R=0;R<f.length;R++){const _=f[R];if(_.enabled!==!1&&(_.render(M,w,b,S),_.needsSwap!==!1)){const C=b;b=w,w=C}}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,u.defines={},$e.getTransfer(d)===nt&&(u.defines.SRGB_TRANSFER="");const R=nT[m];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(v),M.render(h,p),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const Dv=new dn,Yd=new Vs(1,1),Nv=new xv,Lv=new MS,Iv=new Ev,xm=[],_m=[],ym=new Float32Array(16),Sm=new Float32Array(9),Mm=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xm[r];if(s===void 0&&(s=new Float32Array(r),xm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nc(t,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Mm.set(i),t.uniformMatrix2fv(this.addr,!1,Mm),zt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Sm.set(i),t.uniformMatrix3fv(this.addr,!1,Sm),zt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;ym.set(i),t.uniformMatrix4fv(this.addr,!1,ym),zt(n,i)}}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yd.compareFunction=n.isReversedDepthBuffer()?th:eh,s=Yd):s=Dv,n.setTexture2D(e||s,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lv,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Iv,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Nv,r)}function ET(t){switch(t){case 5126:return rT;case 35664:return sT;case 35665:return aT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return dT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function TT(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function AT(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function bT(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PT(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DT(t,e){t.uniform1iv(this.addr,e)}function NT(t,e){t.uniform2iv(this.addr,e)}function LT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function FT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function kT(t,e){t.uniform3uiv(this.addr,e)}function OT(t,e){t.uniform4uiv(this.addr,e)}function BT(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Yd:a=Dv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Lv,s[a])}function VT(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Iv,s[a])}function HT(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Nv,s[a])}function GT(t){switch(t){case 5126:return TT;case 35664:return wT;case 35665:return AT;case 35666:return bT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return LT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return UT;case 36295:return kT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return HT}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ET(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Em(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Em(n,u===void 0?new WT(o,t,e):new jT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new XT(o),Em(n,p)),n=p}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);$T(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qT=37297;let YT=0;function KT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const wm=new Fe;function ZT(t){$e._getMatrix(wm,$e.workingColorSpace,t);const e=`mat3( ${wm.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Il:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+KT(t.getShaderSource(e),o)}else return s}function QT(t,e){const n=ZT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const JT={[iv]:"Linear",[rv]:"Reinhard",[sv]:"Cineon",[$f]:"ACESFilmic",[ov]:"AgX",[lv]:"Neutral",[av]:"Custom"};function ew(t,e){const n=JT[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ho=new z;function tw(){$e.getLuminanceCoefficients(Ho);const t=Ho.x.toFixed(4),e=Ho.y.toFixed(4),n=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function iw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xa(t){return t!==""}function bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(t){return t.replace(sw,ow)}const aw=new Map;function ow(t,e){let n=ze[e];if(n===void 0){const i=aw.get(e);if(i!==void 0)n=ze[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Kd(n)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(t){return t.replace(lw,cw)}function cw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uw={[tl]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function dw(t){return uw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fw={[Hr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function hw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":fw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const pw={[zs]:"ENVMAP_MODE_REFRACTION"};function mw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":pw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gw={[nv]:"ENVMAP_BLENDING_MULTIPLY",[tS]:"ENVMAP_BLENDING_MIX",[nS]:"ENVMAP_BLENDING_ADD"};function vw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":gw[t.combine]||"ENVMAP_BLENDING_NONE"}function xw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _w(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=dw(n),u=hw(n),h=mw(n),p=vw(n),d=xw(n),m=nw(n),x=iw(s),T=r.createProgram();let v,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xa).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xa).join(`
`),f.length>0&&(f+=`
`)):(v=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),f=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?ze.tonemapping_pars_fragment:"",n.toneMapping!==hi?ew("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,QT("linearToOutputTexel",n.outputColorSpace),tw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),a=Kd(a),a=bm(a,n),a=Cm(a,n),o=Kd(o),o=bm(o,n),o=Cm(o,n),a=Rm(a),o=Rm(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+v+a,S=y+f+o,b=Tm(r,r.VERTEX_SHADER,M),w=Tm(r,r.FRAGMENT_SHADER,S);r.attachShader(T,b),r.attachShader(T,w),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function R(D){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(T)||"",X=r.getShaderInfoLog(b)||"",Q=r.getShaderInfoLog(w)||"",B=I.trim(),K=X.trim(),G=Q.trim();let k=!0,q=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,b,w);else{const te=Am(r,b,"vertex"),Y=Am(r,w,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+te+`
`+Y)}else B!==""?De("WebGLProgram: Program Info Log:",B):(K===""||G==="")&&(q=!1);q&&(D.diagnostics={runnable:k,programLog:B,vertexShader:{log:K,prefix:v},fragmentShader:{log:G,prefix:f}})}r.deleteShader(b),r.deleteShader(w),_=new al(r,T),C=rw(r,T)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(T,qT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=w,this}let yw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Mw(e),n.set(e,i)),i}}class Mw{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}}function Ew(t){return t===Gr||t===Dl||t===Nl}function Tw(t,e,n,i,r,s){const a=new _v,o=new Sw,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function T(_,C,P,D,I,X){const Q=D.fog,B=I.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||K,G),q=k&&k.mapping===ec?k.image.height:null,te=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=Y!==void 0?Y.length:0;let Ue=0;B.morphAttributes.position!==void 0&&(Ue=1),B.morphAttributes.normal!==void 0&&(Ue=2),B.morphAttributes.color!==void 0&&(Ue=3);let Ie,Ge,Z,oe;if(te){const Me=oi[te];Ie=Me.vertexShader,Ge=Me.fragmentShader}else{Ie=_.vertexShader,Ge=_.fragmentShader;const Me=o.getVertexShaderStage(_),wt=o.getFragmentShaderStage(_);o.update(_,Me,wt),Z=Me.id,oe=wt.id}const re=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,Mt=!!_.map,Be=!!_.matcap,Je=!!k,Ye=!!_.aoMap,Xe=!!_.lightMap,Et=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,Tt=!!_.displacementMap,Nt=!!_.emissiveMap,dt=!!_.metalnessMap,vt=!!_.roughnessMap,L=_.anisotropy>0,Kt=_.clearcoat>0,et=_.dispersion>0,A=_.iridescence>0,g=_.sheen>0,U=_.transmission>0,O=L&&!!_.anisotropyMap,W=Kt&&!!_.clearcoatMap,ne=Kt&&!!_.clearcoatNormalMap,ae=Kt&&!!_.clearcoatRoughnessMap,$=A&&!!_.iridescenceMap,J=A&&!!_.iridescenceThicknessMap,le=g&&!!_.sheenColorMap,xe=g&&!!_.sheenRoughnessMap,ue=!!_.specularMap,de=!!_.specularColorMap,Ee=!!_.specularIntensityMap,Ce=U&&!!_.transmissionMap,Le=U&&!!_.thicknessMap,N=!!_.gradientMap,fe=!!_.alphaMap,ee=_.alphaTest>0,he=!!_.alphaHash,ve=!!_.extensions;let ie=hi;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ie=t.toneMapping);const we={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:Ge,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Mt,matcap:Be,envMap:Je,envMapMode:Je&&k.mapping,envMapCubeUVHeight:q,aoMap:Ye,lightMap:Xe,bumpMap:Et,normalMap:gt,displacementMap:Tt,emissiveMap:Nt,normalMapObjectSpace:gt&&_.normalMapType===sS,normalMapTangentSpace:gt&&_.normalMapType===Xd,packedNormalMap:gt&&_.normalMapType===Xd&&Ew(_.normalMap.format),metalnessMap:dt,roughnessMap:vt,anisotropy:L,anisotropyMap:O,clearcoat:Kt,clearcoatMap:W,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,dispersion:et,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:J,sheen:g,sheenColorMap:le,sheenRoughnessMap:xe,specularMap:ue,specularColorMap:de,specularIntensityMap:Ee,transmission:U,transmissionMap:Ce,thicknessMap:Le,gradientMap:N,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:fe,alphaTest:ee,alphaHash:he,combine:_.combine,mapUv:Mt&&x(_.map.channel),aoMapUv:Ye&&x(_.aoMap.channel),lightMapUv:Xe&&x(_.lightMap.channel),bumpMapUv:Et&&x(_.bumpMap.channel),normalMapUv:gt&&x(_.normalMap.channel),displacementMapUv:Tt&&x(_.displacementMap.channel),emissiveMapUv:Nt&&x(_.emissiveMap.channel),metalnessMapUv:dt&&x(_.metalnessMap.channel),roughnessMapUv:vt&&x(_.roughnessMap.channel),anisotropyMapUv:O&&x(_.anisotropyMap.channel),clearcoatMapUv:W&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(_.sheenRoughnessMap.channel),specularMapUv:ue&&x(_.specularMap.channel),specularColorMapUv:de&&x(_.specularColorMap.channel),specularIntensityMapUv:Ee&&x(_.specularIntensityMap.channel),transmissionMapUv:Ce&&x(_.transmissionMap.channel),thicknessMapUv:Le&&x(_.thicknessMap.channel),alphaMapUv:fe&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(gt||L),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Mt||fe),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:Mt&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ai,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function v(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(C,_),y(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function f(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function y(_,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const C=m[_.type];let P;if(C){const D=oi[C];P=GS.clone(D.uniforms)}else P=_.uniforms;return P}function S(_,C){let P=h.get(C);return P!==void 0?++P.usedTimes:(P=new _w(t,C,_,r),u.push(P),h.set(C,P)),P}function b(_){if(--_.usedTimes===0){const C=u.indexOf(_);u[C]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:T,getProgramCacheKey:v,getUniforms:M,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:R}}function ww(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Aw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,x,T,v,f){let y=t[e];return y===void 0?(y={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:v,group:f},t[e]=y):(y.id=d.id,y.object=d,y.geometry=m,y.material=x,y.materialVariant=a(d),y.groupOrder=T,y.renderOrder=d.renderOrder,y.z=v,y.group=f),e++,y}function l(d,m,x,T,v,f){const y=o(d,m,x,T,v,f);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):n.push(y)}function u(d,m,x,T,v,f){const y=o(d,m,x,T,v,f);x.transmission>0?i.unshift(y):x.transparent===!0?r.unshift(y):n.unshift(y)}function h(d,m,x){n.length>1&&n.sort(d||Aw),i.length>1&&i.sort(m||Dm),r.length>1&&r.sort(m||Dm),x&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let d=e,m=t.length;d<m;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function bw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Nm,t.set(i,[a])):r>=s.length?(a=new Nm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ve};break;case"SpotLight":n={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function Rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Pw=0;function Dw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Nw(t){const e=new Cw,n=Rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new Ct,a=new Ct;function o(u){let h=0,p=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,x=0,T=0,v=0,f=0,y=0,M=0,S=0,b=0,w=0,R=0;u.sort(Dw);for(let C=0,P=u.length;C<P;C++){const D=u[C],I=D.color,X=D.intensity,Q=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Gr?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=I.r*X,p+=I.g*X,d+=I.b*X;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],X);R++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=K,m++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(I).multiplyScalar(X),K.distance=Q,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[T]=K;const G=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,G.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[T]=G.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[T]=k,i.spotShadowMap[T]=B,S++}T++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(I).multiplyScalar(X),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=K,v++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const G=D.shadow,k=n.get(D);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[x]=k,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=D.shadow.matrix,M++}i.point[x]=K,x++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(X),K.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[f]=K,f++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==T||_.rectAreaLength!==v||_.hemiLength!==f||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==S||_.numSpotMaps!==b||_.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=T,i.rectArea.length=v,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,_.directionalLength=m,_.pointLength=x,_.spotLength=T,_.rectAreaLength=v,_.hemiLength=f,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=S,_.numSpotMaps=b,_.numLightProbes=R,i.version=Pw++)}function l(u,h){let p=0,d=0,m=0,x=0,T=0;const v=h.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const M=u[f];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),m++}else if(M.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),a.identity(),s.copy(M.matrixWorld),s.premultiply(v),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),d++}else if(M.isHemisphereLight){const S=i.hemi[T];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(v),T++}}}return{setup:o,setupView:l,state:i}}function Lm(t){const e=new Nw(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Lw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lm(t),e.set(r,[o])):s>=a.length?(o=new Lm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uw=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],kw=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Im=new Ct,da=new z,fu=new z;function Ow(t,e,n){let i=new sh;const r=new Oe,s=new Oe,a=new _t,o=new qS,l=new YS,u={},h=n.maxTextureSize,p={[pr]:un,[un]:pr,[Ai]:Ai},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Iw,fragmentShader:Fw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new zn;x.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new nn(x,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tl;let f=this.type;this.render=function(w,R,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===tv&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tl);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Di),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=f!==this.type;X&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=w.length;Q<B;Q++){const K=w[Q],G=K.shadow;if(G===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ga){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new pi(r.x,r.y,{format:Gr,type:ki,minFilter:sn,magFilter:sn,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Vs(r.x,r.y,ci),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Oi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt}else K.isPointLight?(G.map=new Pv(r.x),G.map.depthTexture=new zS(r.x,gi)):(G.map=new pi(r.x,r.y),G.map.depthTexture=new Vs(r.x,r.y,gi)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Oi,this.type===tl?(G.map.depthTexture.compareFunction=q?th:eh,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xt,G.map.depthTexture.magFilter=Xt);G.camera.updateProjectionMatrix()}const te=G.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<te;Y++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(G.map),t.clear());const ce=G.getViewport(Y);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(a)}if(K.isPointLight){const ce=G.camera,Ue=G.matrix,Ie=K.distance||ce.far;Ie!==ce.far&&(ce.far=Ie,ce.updateProjectionMatrix()),da.setFromMatrixPosition(K.matrixWorld),ce.position.copy(da),fu.copy(ce.position),fu.add(Uw[Y]),ce.up.copy(kw[Y]),ce.lookAt(fu),ce.updateMatrixWorld(),Ue.makeTranslation(-da.x,-da.y,-da.z),Im.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Im,ce.coordinateSystem,ce.reversedDepth)}else G.updateMatrices(K);i=G.getFrustum(),S(R,_,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===ga&&y(G,_),G.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(C,P,D)};function y(w,R){const _=e.update(T);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(r.x,r.y,{format:Gr,type:ki})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,_,d,T,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,_,m,T,null)}function M(w,R,_,C){let P=null;const D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=P.uuid,X=R.uuid;let Q=u[I];Q===void 0&&(Q={},u[I]=Q);let B=Q[X];B===void 0&&(B=P.clone(),Q[X]=B,R.addEventListener("dispose",b)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,C===ga?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:p[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=t.properties.get(P);I.light=_}return P}function S(w,R,_,C,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===ga)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const X=e.update(w),Q=w.material;if(Array.isArray(Q)){const B=X.groups;for(let K=0,G=B.length;K<G;K++){const k=B[K],q=Q[k.materialIndex];if(q&&q.visible){const te=M(w,q,C,P);w.onBeforeShadow(t,w,R,_,X,te,k),t.renderBufferDirect(_,null,X,te,w,k),w.onAfterShadow(t,w,R,_,X,te,k)}}}else if(Q.visible){const B=M(w,Q,C,P);w.onBeforeShadow(t,w,R,_,X,B,null),t.renderBufferDirect(_,null,X,B,w,null),w.onAfterShadow(t,w,R,_,X,B,null)}}const I=w.children;for(let X=0,Q=I.length;X<Q;X++)S(I[X],R,_,C,P)}function b(w){w.target.removeEventListener("dispose",b);for(const _ in u){const C=u[_],P=w.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function Bw(t,e){function n(){let N=!1;const fe=new _t;let ee=null;const he=new _t(0,0,0,0);return{setMask:function(ve){ee!==ve&&!N&&(t.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){N=ve},setClear:function(ve,ie,we,Me,wt){wt===!0&&(ve*=Me,ie*=Me,we*=Me),fe.set(ve,ie,we,Me),he.equals(fe)===!1&&(t.clearColor(ve,ie,we,Me),he.copy(fe))},reset:function(){N=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,ee=null,he=null,ve=null;return{setReversed:function(ie){if(fe!==ie){const we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const Me=ve;ve=null,this.setClear(Me)}},getReversed:function(){return fe},setTest:function(ie){ie?re(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!N&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(fe&&(ie=mS[ie]),he!==ie){switch(ie){case od:t.depthFunc(t.NEVER);break;case ld:t.depthFunc(t.ALWAYS);break;case cd:t.depthFunc(t.LESS);break;case Bs:t.depthFunc(t.LEQUAL);break;case ud:t.depthFunc(t.EQUAL);break;case dd:t.depthFunc(t.GEQUAL);break;case fd:t.depthFunc(t.GREATER);break;case hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){N=ie},setClear:function(ie){ve!==ie&&(ve=ie,fe&&(ie=1-ie),t.clearDepth(ie))},reset:function(){N=!1,ee=null,he=null,ve=null,fe=!1}}}function r(){let N=!1,fe=null,ee=null,he=null,ve=null,ie=null,we=null,Me=null,wt=null;return{setTest:function(lt){N||(lt?re(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!N&&(t.stencilMask(lt),fe=lt)},setFunc:function(lt,Jn,ei){(ee!==lt||he!==Jn||ve!==ei)&&(t.stencilFunc(lt,Jn,ei),ee=lt,he=Jn,ve=ei)},setOp:function(lt,Jn,ei){(ie!==lt||we!==Jn||Me!==ei)&&(t.stencilOp(lt,Jn,ei),ie=lt,we=Jn,Me=ei)},setLocked:function(lt){N=lt},setClear:function(lt){wt!==lt&&(t.clearStencil(lt),wt=lt)},reset:function(){N=!1,fe=null,ee=null,he=null,ve=null,ie=null,we=null,Me=null,wt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},p={},d={},m=new WeakMap,x=[],T=null,v=!1,f=null,y=null,M=null,S=null,b=null,w=null,R=null,_=new Ve(0,0,0),C=0,P=!1,D=null,I=null,X=null,Q=null,B=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=k>=2);let te=null,Y={};const ce=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Ie=new _t().fromArray(ce),Ge=new _t().fromArray(Ue);function Z(N,fe,ee,he){const ve=new Uint8Array(4),ie=t.createTexture();t.bindTexture(N,ie),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ee;we++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(fe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ie}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Bs),Et(!1),gt(Up),re(t.CULL_FACE),Ye(Di);function re(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Pe(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Ne(N,fe){return d[N]!==fe?(t.bindFramebuffer(N,fe),d[N]=fe,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Re(N,fe){let ee=x,he=!1;if(N){ee=m.get(fe),ee===void 0&&(ee=[],m.set(fe,ee));const ve=N.textures;if(ee.length!==ve.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,we=ve.length;ie<we;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=ve.length,he=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,he=!0);he&&t.drawBuffers(ee)}function Mt(N){return T!==N?(t.useProgram(N),T=N,!0):!1}const Be={[br]:t.FUNC_ADD,[Oy]:t.FUNC_SUBTRACT,[By]:t.FUNC_REVERSE_SUBTRACT};Be[zy]=t.MIN,Be[Vy]=t.MAX;const Je={[Hy]:t.ZERO,[Gy]:t.ONE,[Wy]:t.SRC_COLOR,[sd]:t.SRC_ALPHA,[Ky]:t.SRC_ALPHA_SATURATE,[qy]:t.DST_COLOR,[Xy]:t.DST_ALPHA,[jy]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[Yy]:t.ONE_MINUS_DST_COLOR,[$y]:t.ONE_MINUS_DST_ALPHA,[Zy]:t.CONSTANT_COLOR,[Qy]:t.ONE_MINUS_CONSTANT_COLOR,[Jy]:t.CONSTANT_ALPHA,[eS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(N,fe,ee,he,ve,ie,we,Me,wt,lt){if(N===Di){v===!0&&(Pe(t.BLEND),v=!1);return}if(v===!1&&(re(t.BLEND),v=!0),N!==ky){if(N!==f||lt!==P){if((y!==br||b!==br)&&(t.blendEquation(t.FUNC_ADD),y=br,b=br),lt)switch(N){case Cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.ONE,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case Cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Op:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bp:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}M=null,S=null,w=null,R=null,_.set(0,0,0),C=0,f=N,P=lt}return}ve=ve||fe,ie=ie||ee,we=we||he,(fe!==y||ve!==b)&&(t.blendEquationSeparate(Be[fe],Be[ve]),y=fe,b=ve),(ee!==M||he!==S||ie!==w||we!==R)&&(t.blendFuncSeparate(Je[ee],Je[he],Je[ie],Je[we]),M=ee,S=he,w=ie,R=we),(Me.equals(_)===!1||wt!==C)&&(t.blendColor(Me.r,Me.g,Me.b,wt),_.copy(Me),C=wt),f=N,P=!1}function Xe(N,fe){N.side===Ai?Pe(t.CULL_FACE):re(t.CULL_FACE);let ee=N.side===un;fe&&(ee=!ee),Et(ee),N.blending===Cs&&N.transparent===!1?Ye(Di):Ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Et(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function gt(N){N!==Fy?(re(t.CULL_FACE),N!==I&&(N===Up?t.cullFace(t.BACK):N===Uy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),I=N}function Tt(N){N!==X&&(G&&t.lineWidth(N),X=N)}function Nt(N,fe,ee){N?(re(t.POLYGON_OFFSET_FILL),(Q!==fe||B!==ee)&&(Q=fe,B=ee,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,ee))):Pe(t.POLYGON_OFFSET_FILL)}function dt(N){N?re(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function vt(N){N===void 0&&(N=t.TEXTURE0+K-1),te!==N&&(t.activeTexture(N),te=N)}function L(N,fe,ee){ee===void 0&&(te===null?ee=t.TEXTURE0+K-1:ee=te);let he=Y[ee];he===void 0&&(he={type:void 0,texture:void 0},Y[ee]=he),(he.type!==N||he.texture!==fe)&&(te!==ee&&(t.activeTexture(ee),te=ee),t.bindTexture(N,fe||oe[N]),he.type=N,he.texture=fe)}function Kt(){const N=Y[te];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function g(){try{t.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function U(){try{t.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function O(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ne(){try{t.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ae(){try{t.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function $(){try{t.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function J(){try{t.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function le(N){return p[N]!==void 0?p[N]:t.getParameter(N)}function xe(N,fe){p[N]!==fe&&(t.pixelStorei(N,fe),p[N]=fe)}function ue(N){Ie.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ie.copy(N))}function de(N){Ge.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function Ee(N,fe){let ee=u.get(fe);ee===void 0&&(ee=new WeakMap,u.set(fe,ee));let he=ee.get(N);he===void 0&&(he=t.getUniformBlockIndex(fe,N.name),ee.set(N,he))}function Ce(N,fe){const he=u.get(fe).get(N);l.get(fe)!==he&&(t.uniformBlockBinding(fe,he,N.__bindingPointIndex),l.set(fe,he))}function Le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},te=null,Y={},d={},m=new WeakMap,x=[],T=null,v=!1,f=null,y=null,M=null,S=null,b=null,w=null,R=null,_=new Ve(0,0,0),C=0,P=!1,D=null,I=null,X=null,Q=null,B=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Pe,bindFramebuffer:Ne,drawBuffers:Re,useProgram:Mt,setBlending:Ye,setMaterial:Xe,setFlipSided:Et,setCullFace:gt,setLineWidth:Tt,setPolygonOffset:Nt,setScissorTest:dt,activeTexture:vt,bindTexture:L,unbindTexture:Kt,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:xe,getParameter:le,updateUBOMapping:Ee,uniformBlockBinding:Ce,texStorage2D:ne,texStorage3D:ae,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:O,compressedTexSubImage3D:W,scissor:ue,viewport:de,reset:Le}}function zw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Oe,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(A,g){return x?new OffscreenCanvas(A,g):Fl("canvas")}function v(A,g,U){let O=1;const W=et(A);if((W.width>U||W.height>U)&&(O=U/Math.max(W.width,W.height)),O<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(O*W.width),ae=Math.floor(O*W.height);d===void 0&&(d=T(ne,ae));const $=g?T(ne,ae):d;return $.width=ne,$.height=ae,$.getContext("2d").drawImage(A,0,0,ne,ae),De("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ne+"x"+ae+")."),$}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function f(A){return A.generateMipmaps}function y(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,g,U,O,W,ne=!1){if(A!==null){if(t[A]!==void 0)return t[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;O&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===t.RED&&(U===t.FLOAT&&($=t.R32F),U===t.HALF_FLOAT&&($=t.R16F),U===t.UNSIGNED_BYTE&&($=t.R8),U===t.UNSIGNED_SHORT&&ae&&($=ae.R16_EXT),U===t.SHORT&&ae&&($=ae.R16_SNORM_EXT)),g===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.R8UI),U===t.UNSIGNED_SHORT&&($=t.R16UI),U===t.UNSIGNED_INT&&($=t.R32UI),U===t.BYTE&&($=t.R8I),U===t.SHORT&&($=t.R16I),U===t.INT&&($=t.R32I)),g===t.RG&&(U===t.FLOAT&&($=t.RG32F),U===t.HALF_FLOAT&&($=t.RG16F),U===t.UNSIGNED_BYTE&&($=t.RG8),U===t.UNSIGNED_SHORT&&ae&&($=ae.RG16_EXT),U===t.SHORT&&ae&&($=ae.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RG8UI),U===t.UNSIGNED_SHORT&&($=t.RG16UI),U===t.UNSIGNED_INT&&($=t.RG32UI),U===t.BYTE&&($=t.RG8I),U===t.SHORT&&($=t.RG16I),U===t.INT&&($=t.RG32I)),g===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGB8UI),U===t.UNSIGNED_SHORT&&($=t.RGB16UI),U===t.UNSIGNED_INT&&($=t.RGB32UI),U===t.BYTE&&($=t.RGB8I),U===t.SHORT&&($=t.RGB16I),U===t.INT&&($=t.RGB32I)),g===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGBA8UI),U===t.UNSIGNED_SHORT&&($=t.RGBA16UI),U===t.UNSIGNED_INT&&($=t.RGBA32UI),U===t.BYTE&&($=t.RGBA8I),U===t.SHORT&&($=t.RGBA16I),U===t.INT&&($=t.RGBA32I)),g===t.RGB&&(U===t.UNSIGNED_SHORT&&ae&&($=ae.RGB16_EXT),U===t.SHORT&&ae&&($=ae.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),g===t.RGBA){const J=ne?Il:$e.getTransfer(W);U===t.FLOAT&&($=t.RGBA32F),U===t.HALF_FLOAT&&($=t.RGBA16F),U===t.UNSIGNED_BYTE&&($=J===nt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&ae&&($=ae.RGBA16_EXT),U===t.SHORT&&ae&&($=ae.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(A,g){let U;return A?g===null||g===gi||g===Xa?U=t.DEPTH24_STENCIL8:g===ci?U=t.DEPTH32F_STENCIL8:g===ja&&(U=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gi||g===Xa?U=t.DEPTH_COMPONENT24:g===ci?U=t.DEPTH_COMPONENT32F:g===ja&&(U=t.DEPTH_COMPONENT16),U}function w(A,g){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==sn?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),C(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&p.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),D(g)}function C(A){const g=i.get(A);if(g.__webglInit===void 0)return;const U=A.source,O=m.get(U);if(O){const W=O[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(A),Object.keys(O).length===0&&m.delete(U)}i.remove(A)}function P(A){const g=i.get(A);t.deleteTexture(g.__webglTexture);const U=A.source,O=m.get(U);delete O[g.__cacheKey],a.memory.textures--}function D(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let W=0;W<g.__webglFramebuffer[O].length;W++)t.deleteFramebuffer(g.__webglFramebuffer[O][W]);else t.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)t.deleteFramebuffer(g.__webglFramebuffer[O]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=A.textures;for(let O=0,W=U.length;O<W;O++){const ne=i.get(U[O]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(U[O])}i.remove(A)}let I=0;function X(){I=0}function Q(){return I}function B(A){I=A}function K(){const A=I;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function G(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function k(A,g){const U=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const O=A.image;if(O===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(U,A,g);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+g)}function q(A,g){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Pe(U,A,g);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+g)}function te(A,g){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Pe(U,A,g);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+g)}function Y(A,g){const U=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Ne(U,A,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+g)}const ce={[pd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[md]:t.MIRRORED_REPEAT},Ue={[Xt]:t.NEAREST,[iS]:t.NEAREST_MIPMAP_NEAREST,[So]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},Ie={[aS]:t.NEVER,[dS]:t.ALWAYS,[oS]:t.LESS,[eh]:t.LEQUAL,[lS]:t.EQUAL,[th]:t.GEQUAL,[cS]:t.GREATER,[uS]:t.NOTEQUAL};function Ge(A,g){if(g.type===ci&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===sn||g.magFilter===Lc||g.magFilter===So||g.magFilter===Nr||g.minFilter===sn||g.minFilter===Lc||g.minFilter===So||g.minFilter===Nr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ce[g.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ce[g.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ce[g.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ue[g.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ue[g.minFilter]),g.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Xt||g.minFilter!==So&&g.minFilter!==Nr||g.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Z(A,g){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const O=g.source;let W=m.get(O);W===void 0&&(W={},m.set(O,W));const ne=G(g);if(ne!==A.__cacheKey){W[ne]===void 0&&(W[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[ne].usedTimes++;const ae=W[A.__cacheKey];ae!==void 0&&(W[A.__cacheKey].usedTimes--,ae.usedTimes===0&&P(g)),A.__cacheKey=ne,A.__webglTexture=W[ne].texture}return U}function oe(A,g,U){return Math.floor(Math.floor(A/U)/g)}function re(A,g,U,O){const ne=A.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,U,O,g.data);else{ne.sort((xe,ue)=>xe.start-ue.start);let ae=0;for(let xe=1;xe<ne.length;xe++){const ue=ne[ae],de=ne[xe],Ee=ue.start+ue.count,Ce=oe(de.start,g.width,4),Le=oe(ue.start,g.width,4);de.start<=Ee+1&&Ce===Le&&oe(de.start+de.count-1,g.width,4)===Ce?ue.count=Math.max(ue.count,de.start+de.count-ue.start):(++ae,ne[ae]=de)}ne.length=ae+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let xe=0,ue=ne.length;xe<ue;xe++){const de=ne[xe],Ee=Math.floor(de.start/4),Ce=Math.ceil(de.count/4),Le=Ee%g.width,N=Math.floor(Ee/g.width),fe=Ce,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Le,N,fe,ee,U,O,g.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function Pe(A,g,U){let O=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=t.TEXTURE_3D);const W=Z(A,g),ne=g.source;n.bindTexture(O,A.__webglTexture,t.TEXTURE0+U);const ae=i.get(ne);if(ne.version!==ae.__version||W===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ee=$e.getPrimaries($e.workingColorSpace),he=g.colorSpace===er?null:$e.getPrimaries(g.colorSpace),ve=g.colorSpace===er||ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let J=v(g.image,!1,r.maxTextureSize);J=Kt(g,J);const le=s.convert(g.format,g.colorSpace),xe=s.convert(g.type);let ue=S(g.internalFormat,le,xe,g.normalized,g.colorSpace,g.isVideoTexture);Ge(O,g);let de;const Ee=g.mipmaps,Ce=g.isVideoTexture!==!0,Le=ae.__version===void 0||W===!0,N=ne.dataReady,fe=w(g,J);if(g.isDepthTexture)ue=b(g.format===Lr,g.type),Le&&(Ce?n.texStorage2D(t.TEXTURE_2D,1,ue,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,le,xe,null));else if(g.isDataTexture)if(Ee.length>0){Ce&&Le&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)de=Ee[ee],Ce?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,le,xe,de.data):n.texImage2D(t.TEXTURE_2D,ee,ue,de.width,de.height,0,le,xe,de.data);g.generateMipmaps=!1}else Ce?(Le&&n.texStorage2D(t.TEXTURE_2D,fe,ue,J.width,J.height),N&&re(g,J,le,xe)):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,le,xe,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,Ee[0].width,Ee[0].height,J.depth);for(let ee=0,he=Ee.length;ee<he;ee++)if(de=Ee[ee],g.format!==Yn)if(le!==null)if(Ce){if(N)if(g.layerUpdates.size>0){const ve=fm(de.width,de.height,g.format,g.type);for(const ie of g.layerUpdates){const we=de.data.subarray(ie*ve/de.data.BYTES_PER_ELEMENT,(ie+1)*ve/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,de.width,de.height,1,le,we)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,le,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,ue,de.width,de.height,J.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,le,xe,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,ue,de.width,de.height,J.depth,0,le,xe,de.data)}else{Ce&&Le&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)de=Ee[ee],g.format!==Yn?le!==null?Ce?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,le,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,ue,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,le,xe,de.data):n.texImage2D(t.TEXTURE_2D,ee,ue,de.width,de.height,0,le,xe,de.data)}else if(g.isDataArrayTexture)if(Ce){if(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,J.width,J.height,J.depth),N)if(g.layerUpdates.size>0){const ee=fm(J.width,J.height,g.format,g.type);for(const he of g.layerUpdates){const ve=J.data.subarray(he*ee/J.data.BYTES_PER_ELEMENT,(he+1)*ee/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,xe,ve)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,xe,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,le,xe,J.data);else if(g.isData3DTexture)Ce?(Le&&n.texStorage3D(t.TEXTURE_3D,fe,ue,J.width,J.height,J.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,xe,J.data)):n.texImage3D(t.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,le,xe,J.data);else if(g.isFramebufferTexture){if(Le)if(Ce)n.texStorage2D(t.TEXTURE_2D,fe,ue,J.width,J.height);else{let ee=J.width,he=J.height;for(let ve=0;ve<fe;ve++)n.texImage2D(t.TEXTURE_2D,ve,ue,ee,he,0,le,xe,null),ee>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),p.add(g),ee.onpaint=he=>{const ve=he.changedElements;for(const ie of p)ve.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const ve=t.RGBA,ie=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,ie,we,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ce&&Le){const ee=et(Ee[0]);n.texStorage2D(t.TEXTURE_2D,fe,ue,ee.width,ee.height)}for(let ee=0,he=Ee.length;ee<he;ee++)de=Ee[ee],Ce?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,le,xe,de):n.texImage2D(t.TEXTURE_2D,ee,ue,le,xe,de);g.generateMipmaps=!1}else if(Ce){if(Le){const ee=et(J);n.texStorage2D(t.TEXTURE_2D,fe,ue,ee.width,ee.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,xe,J)}else n.texImage2D(t.TEXTURE_2D,0,ue,le,xe,J);f(g)&&y(O),ae.__version=ne.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ne(A,g,U){if(g.image.length!==6)return;const O=Z(A,g),W=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+U);const ne=i.get(W);if(W.version!==ne.__version||O===!0){n.activeTexture(t.TEXTURE0+U);const ae=$e.getPrimaries($e.workingColorSpace),$=g.colorSpace===er?null:$e.getPrimaries(g.colorSpace),J=g.colorSpace===er||ae===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!le&&!xe?ue[ie]=v(g.image[ie],!0,r.maxCubemapSize):ue[ie]=xe?g.image[ie].image:g.image[ie],ue[ie]=Kt(g,ue[ie]);const de=ue[0],Ee=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type),Le=S(g.internalFormat,Ee,Ce,g.normalized,g.colorSpace),N=g.isVideoTexture!==!0,fe=ne.__version===void 0||O===!0,ee=W.dataReady;let he=w(g,de);Ge(t.TEXTURE_CUBE_MAP,g);let ve;if(le){N&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Le,de.width,de.height);for(let ie=0;ie<6;ie++){ve=ue[ie].mipmaps;for(let we=0;we<ve.length;we++){const Me=ve[we];g.format!==Yn?Ee!==null?N?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Me.width,Me.height,Ee,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Le,Me.width,Me.height,0,Me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Me.width,Me.height,Ee,Ce,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,Le,Me.width,Me.height,0,Ee,Ce,Me.data)}}}else{if(ve=g.mipmaps,N&&fe){ve.length>0&&he++;const ie=et(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Le,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(xe){N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Ee,Ce,ue[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,ue[ie].width,ue[ie].height,0,Ee,Ce,ue[ie].data);for(let we=0;we<ve.length;we++){const wt=ve[we].image[ie].image;N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,wt.width,wt.height,Ee,Ce,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Le,wt.width,wt.height,0,Ee,Ce,wt.data)}}else{N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee,Ce,ue[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,Ee,Ce,ue[ie]);for(let we=0;we<ve.length;we++){const Me=ve[we];N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ee,Ce,Me.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,Le,Ee,Ce,Me.image[ie])}}}f(g)&&y(t.TEXTURE_CUBE_MAP),ne.__version=W.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Re(A,g,U,O,W,ne){const ae=s.convert(U.format,U.colorSpace),$=s.convert(U.type),J=S(U.internalFormat,ae,$,U.normalized,U.colorSpace),le=i.get(g),xe=i.get(U);if(xe.__renderTarget=g,!le.__hasExternalTextures){const ue=Math.max(1,g.width>>ne),de=Math.max(1,g.height>>ne);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,ne,J,ue,de,g.depth,0,ae,$,null):n.texImage2D(W,ne,J,ue,de,0,ae,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),vt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,W,xe.__webglTexture,0,dt(g)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,W,xe.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Mt(A,g,U){if(t.bindRenderbuffer(t.RENDERBUFFER,A),g.depthBuffer){const O=g.depthTexture,W=O&&O.isDepthTexture?O.type:null,ne=b(g.stencilBuffer,W),ae=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;vt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(g),ne,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(g),ne,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ne,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,A)}else{const O=g.textures;for(let W=0;W<O.length;W++){const ne=O[W],ae=s.convert(ne.format,ne.colorSpace),$=s.convert(ne.type),J=S(ne.internalFormat,ae,$,ne.normalized,ne.colorSpace);vt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(g),J,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(g),J,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,J,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(A,g,U){const O=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),O){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,g.depthTexture);const le=s.convert(g.depthTexture.format),xe=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===Oi?ue=t.DEPTH_COMPONENT24:g.depthTexture.format===Lr&&(ue=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ue,g.width,g.height,0,le,xe,null)}}else k(g.depthTexture,0);const ne=W.__webglTexture,ae=dt(g),$=O?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,J=g.depthTexture.format===Lr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Oi)vt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,ne,0);else if(g.depthTexture.format===Lr)vt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(A){const g=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const O=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){const W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",W)};O.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=O}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let O=0;O<6;O++)Be(g.__webglFramebuffer[O],A,O);else{const O=A.texture.mipmaps;O&&O.length>0?Be(g.__webglFramebuffer[0],A,0):Be(g.__webglFramebuffer,A,0)}else if(U){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=t.createRenderbuffer(),Mt(g.__webglDepthbuffer[O],A,!1);else{const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ne)}}else{const O=A.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Mt(g.__webglDepthbuffer,A,!1);else{const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(A,g,U){const O=i.get(A);g!==void 0&&Re(O.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Je(A)}function Xe(A){const g=A.texture,U=i.get(A),O=i.get(g);A.addEventListener("dispose",_);const W=A.textures,ne=A.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=g.version,a.memory.textures++),ne){U.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[$]=[];for(let J=0;J<g.mipmaps.length;J++)U.__webglFramebuffer[$][J]=t.createFramebuffer()}else U.__webglFramebuffer[$]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)U.__webglFramebuffer[$]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ae)for(let $=0,J=W.length;$<J;$++){const le=i.get(W[$]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){const J=W[$];U.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[$]);const le=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),ue=S(J.internalFormat,le,xe,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),de=dt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,U.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Mt(U.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)Re(U.__webglFramebuffer[$][J],A,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Re(U.__webglFramebuffer[$],A,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(g)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let $=0,J=W.length;$<J;$++){const le=W[$],xe=i.get(le);let ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,xe.__webglTexture),Ge(ue,le),Re(U.__webglFramebuffer,A,le,t.COLOR_ATTACHMENT0+$,ue,0),f(le)&&y(ue)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,O.__webglTexture),Ge($,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)Re(U.__webglFramebuffer[J],A,g,t.COLOR_ATTACHMENT0,$,J);else Re(U.__webglFramebuffer,A,g,t.COLOR_ATTACHMENT0,$,0);f(g)&&y($),n.unbindTexture()}A.depthBuffer&&Je(A)}function Et(A){const g=A.textures;for(let U=0,O=g.length;U<O;U++){const W=g[U];if(f(W)){const ne=M(A),ae=i.get(W).__webglTexture;n.bindTexture(ne,ae),y(ne),n.unbindTexture()}}}const gt=[],Tt=[];function Nt(A){if(A.samples>0){if(vt(A)===!1){const g=A.textures,U=A.width,O=A.height;let W=t.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(A),$=g.length>1;if($)for(let le=0;le<g.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<g.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,U,O,0,0,U,O,W,t.NEAREST),l===!0&&(gt.length=0,Tt.length=0,gt.push(t.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(gt.push(ne),Tt.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<g.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function dt(A){return Math.min(r.maxSamples,A.samples)}function vt(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(A){const g=a.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function Kt(A,g){const U=A.colorSpace,O=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Ll&&U!==er&&($e.getTransfer(U)===nt?(O!==Yn||W!==wn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",U)),g}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=X,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=Y,this.rebindTextures=Ye,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Vw(t,e){function n(i,r=er){let s;const a=$e.getTransfer(r);if(i===wn)return t.UNSIGNED_BYTE;if(i===Yf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===uv)return t.BYTE;if(i===dv)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===qf)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===pv)return t.ALPHA;if(i===mv)return t.RGB;if(i===Yn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Lr)return t.DEPTH_STENCIL;if(i===gv)return t.RED;if(i===Zf)return t.RED_INTEGER;if(i===Gr)return t.RG;if(i===Qf)return t.RG_INTEGER;if(i===Jf)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===vd||i===xd||i===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===Td||i===Dl||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===Sd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ed)return s.COMPRESSED_R11_EAC;if(i===Td)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dl)return s.COMPRESSED_RG11_EAC;if(i===wd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ad||i===bd||i===Cd||i===Rd||i===Pd||i===Dd||i===Nd||i===Ld||i===Id||i===Fd||i===Ud||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ad)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zd||i===Vd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zd)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===Wd||i===Nl||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ww{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:Hw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new Hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jw extends Xr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,d=null,m=null,x=null;const T=typeof XRWebGLBinding<"u",v=new Ww,f={},y=n.getContextAttributes();let M=null,S=null;const b=[],w=[],R=new Oe;let _=null;const C=new Fn;C.viewport=new _t;const P=new Fn;P.viewport=new _t;const D=[C,P],I=new eM;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=b[Z];return oe===void 0&&(oe=new Vc,b[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=b[Z];return oe===void 0&&(oe=new Vc,b[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=b[Z];return oe===void 0&&(oe=new Vc,b[Z]=oe),oe.getHandSpace()};function B(Z){const oe=w.indexOf(Z.inputSource);if(oe===-1)return;const re=b[oe];re!==void 0&&(re.update(Z.inputSource,Z.frame,u||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<b.length;Z++){const oe=w[Z];oe!==null&&(w[Z]=null,b[Z].disconnect(oe))}X=null,Q=null,v.reset();for(const Z in f)delete f[Z];e.setRenderTarget(M),m=null,d=null,p=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Pe=null,Ne=null;y.depth&&(Ne=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=y.stencil?Lr:Oi,Pe=y.stencil?Xa:gi);const Re={colorFormat:n.RGBA8,depthFormat:Ne,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new pi(d.textureWidth,d.textureHeight,{format:Yn,type:wn,depthTexture:new Vs(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new pi(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(Z){for(let oe=0;oe<Z.removed.length;oe++){const re=Z.removed[oe],Pe=w.indexOf(re);Pe>=0&&(w[Pe]=null,b[Pe].disconnect(re))}for(let oe=0;oe<Z.added.length;oe++){const re=Z.added[oe];let Pe=w.indexOf(re);if(Pe===-1){for(let Re=0;Re<b.length;Re++)if(Re>=w.length){w.push(re),Pe=Re;break}else if(w[Re]===null){w[Re]=re,Pe=Re;break}if(Pe===-1)break}const Ne=b[Pe];Ne&&Ne.connect(re)}}const k=new z,q=new z;function te(Z,oe,re){k.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);const Pe=k.distanceTo(q),Ne=oe.projectionMatrix.elements,Re=re.projectionMatrix.elements,Mt=Ne[14]/(Ne[10]-1),Be=Ne[14]/(Ne[10]+1),Je=(Ne[9]+1)/Ne[5],Ye=(Ne[9]-1)/Ne[5],Xe=(Ne[8]-1)/Ne[0],Et=(Re[8]+1)/Re[0],gt=Mt*Xe,Tt=Mt*Et,Nt=Pe/(-Xe+Et),dt=Nt*-Xe;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(dt),Z.translateZ(Nt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const vt=Mt+Nt,L=Be+Nt,Kt=gt-dt,et=Tt+(Pe-dt),A=Je*Be/L*vt,g=Ye*Be/L*vt;Z.projectionMatrix.makePerspective(Kt,et,A,g,vt,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Y(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,re=Z.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(re=v.depthFar)),I.near=P.near=C.near=oe,I.far=P.far=C.far=re,(X!==I.near||Q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,Q=I.far),I.layers.mask=Z.layers.mask|6,C.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Pe=Z.parent,Ne=I.cameras;Y(I,Pe);for(let Re=0;Re<Ne.length;Re++)Y(Ne[Re],Pe);Ne.length===2?te(I,C,P):I.projectionMatrix.copy(C.projectionMatrix),ce(Z,I,Pe)};function ce(Z,oe,re){re===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$d*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(I)},this.getCameraTexture=function(Z){return f[Z]};let Ue=null;function Ie(Z,oe){if(h=oe.getViewerPose(u||a),x=oe,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Pe=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Be=0;Be<re.length;Be++){const Je=re[Be];let Ye=null;if(m!==null)Ye=m.getViewport(Je);else{const Et=p.getViewSubImage(d,Je);Ye=Et.viewport,Be===0&&(e.setRenderTargetTextures(S,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(S))}let Xe=D[Be];Xe===void 0&&(Xe=new Fn,Xe.layers.enable(Be),Xe.viewport=new _t,D[Be]=Xe),Xe.matrix.fromArray(Je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Be===0&&(I.matrix.copy(Xe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(Xe)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=i.getBinding();const Be=p.getDepthInformation(re[0]);Be&&Be.isValid&&Be.texture&&v.init(Be,r.renderState)}if(Ne&&Ne.includes("camera-access")&&T){e.state.unbindTexture(),p=i.getBinding();for(let Be=0;Be<re.length;Be++){const Je=re[Be].camera;if(Je){let Ye=f[Je];Ye||(Ye=new Tv,f[Je]=Ye);const Xe=p.getCameraImage(Je);Ye.sourceTexture=Xe}}}}for(let re=0;re<b.length;re++){const Pe=w[re],Ne=b[re];Pe!==null&&Ne!==void 0&&Ne.update(Pe,oe,u||a)}Ue&&Ue(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),x=null}const Ge=new Cv;Ge.setAnimationLoop(Ie),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}}const Xw=new Ct,Fv=new Fe;Fv.set(-1,0,0,0,1,0,0,0,1);function $w(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,wv(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,y,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(v,f):f.isMeshLambertMaterial?(s(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(v,f),p(v,f)):f.isMeshPhongMaterial?(s(v,f),h(v,f),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&m(v,f,S)):f.isMeshMatcapMaterial?(s(v,f),x(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),T(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(a(v,f),f.isLineDashedMaterial&&o(v,f)):f.isPointsMaterial?l(v,f,y,M):f.isSpriteMaterial?u(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===un&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===un&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const y=e.get(f),M=y.envMap,S=y.envMapRotation;M&&(v.envMap.value=M,v.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Fv),v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function a(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function o(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,y,M){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*y,v.scale.value=M*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function p(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function m(v,f,y){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,f){f.matcap&&(v.matcap.value=f.matcap)}function T(v,f){const y=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const w=b.program;i.uniformBlockBinding(S,w)}function u(S,b){let w=r[S.id];w===void 0&&(v(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",y));const R=b.program;i.updateUBOMapping(S,R);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function h(S){const b=p();S.__bindingPointIndex=b;const w=t.createBuffer(),R=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,w),w}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=r[S.id],w=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let _=0,C=w.length;_<C;_++){const P=w[_];if(Array.isArray(P))for(let D=0,I=P.length;D<I;D++)m(P[D],_,D,R);else m(P,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,b,w,R){if(T(S,b,w,R)===!0){const _=S.__offset,C=S.value;if(Array.isArray(C)){let P=0;for(let D=0;D<C.length;D++){const I=C[D],X=f(I);x(I,S.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function x(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function T(S,b,w,R){const _=S.value,C=b+"_"+w;if(R[C]===void 0)return typeof _=="number"||typeof _=="boolean"?R[C]=_:ArrayBuffer.isView(_)?R[C]=_.slice():R[C]=_.clone(),!0;{const P=R[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function v(S){const b=S.uniforms;let w=0;const R=16;for(let C=0,P=b.length;C<P;C++){const D=Array.isArray(b[C])?b[C]:[b[C]];for(let I=0,X=D.length;I<X;I++){const Q=D[I],B=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,G=B.length;K<G;K++){const k=B[K],q=f(k),te=w%R,Y=te%q.boundary,ce=te+Y;w+=Y,ce!==0&&R-ce<q.storage&&(w+=R-ce),Q.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=q.storage}}}const _=w%R;return _>0&&(w+=R-_),S.__size=w,S.__cache={},this}function f(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),b}function y(S){const b=S.target;b.removeEventListener("dispose",y);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:M}}const Yw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Kw(){return si===null&&(si=new US(Yw,16,16,Gr,ki),si.name="DFG_LUT",si.minFilter=sn,si.magFilter=sn,si.wrapS=Ri,si.wrapT=Ri,si.generateMipmaps=!1,si.needsUpdate=!0),si}class Zw{constructor(e={}){const{canvas:n=hS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=wn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const T=m,v=new Set([Jf,Qf,Zf]),f=new Set([wn,gi,ja,Xa,Yf,Kf]),y=new Uint32Array(4),M=new Int32Array(4),S=new z;let b=null,w=null;const R=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,I=null,X=null,Q=null,B=null;this._outputColorSpace=Tn;let K=0,G=0,k=null,q=-1,te=null;const Y=new _t,ce=new _t;let Ue=null;const Ie=new Ve(0);let Ge=0,Z=n.width,oe=n.height,re=1,Pe=null,Ne=null;const Re=new _t(0,0,Z,oe),Mt=new _t(0,0,Z,oe);let Be=!1;const Je=new sh;let Ye=!1,Xe=!1;const Et=new Ct,gt=new z,Tt=new _t,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function vt(){return k===null?re:1}let L=i;function Kt(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xf}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",Jn,!1),L===null){const F="webgl2";if(L=Kt(F,E),L===null)throw Kt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let et,A,g,U,O,W,ne,ae,$,J,le,xe,ue,de,Ee,Ce,Le,N,fe,ee,he,ve,ie;function we(){et=new KE(L),et.init(),he=new Vw(L,et),A=new HE(L,et,e,he),g=new Bw(L,et),A.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),X=L.createFramebuffer(),Q=L.createFramebuffer(),B=L.createFramebuffer(),U=new JE(L),O=new ww,W=new zw(L,et,g,O,A,he,U),ne=new YE(P),ae=new iM(L),ve=new zE(L,ae),$=new ZE(L,ae,U,ve),J=new tT(L,$,ae,ve,U),N=new eT(L,A,W),Ee=new GE(O),le=new Tw(P,ne,et,A,ve,Ee),xe=new $w(P,O),ue=new bw,de=new Lw(et),Le=new BE(P,ne,g,J,x,l),Ce=new Ow(P,J,A),ie=new qw(L,U,A,g),fe=new VE(L,et,U),ee=new QE(L,et,U),U.programs=le.programs,P.capabilities=A,P.extensions=et,P.properties=O,P.renderLists=ue,P.shadowMap=Ce,P.state=g,P.info=U}we(),T!==wn&&(C=new iT(T,n.width,n.height,o,r,s));const Me=new jw(P,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(Z,oe,!1))},this.getSize=function(E){return E.set(Z,oe)},this.setSize=function(E,F,j=!0){if(Me.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,oe=F,n.width=Math.floor(E*re),n.height=Math.floor(F*re),j===!0&&(n.style.width=E+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Z*re,oe*re).floor()},this.setDrawingBufferSize=function(E,F,j){Z=E,oe=F,re=j,n.width=Math.floor(E*j),n.height=Math.floor(F*j),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(T===wn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,F,j,V){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,F,j,V),g.viewport(Y.copy(Re).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,F,j,V){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,F,j,V),g.scissor(ce.copy(Mt).multiplyScalar(re).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){g.setScissorTest(Be=E)},this.setOpaqueSort=function(E){Pe=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,j=!0){let V=0;if(E){let H=!1;if(k!==null){const ge=k.texture.format;H=v.has(ge)}if(H){const ge=k.texture.type,ye=f.has(ge),me=Le.getClearColor(),Te=Le.getClearAlpha(),Ae=me.r,ke=me.g,He=me.b;ye?(y[0]=Ae,y[1]=ke,y[2]=He,y[3]=Te,L.clearBufferuiv(L.COLOR,0,y)):(M[0]=Ae,M[1]=ke,M[2]=He,M[3]=Te,L.clearBufferiv(L.COLOR,0,M))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",Jn,!1),Le.dispose(),ue.dispose(),de.dispose(),O.dispose(),ne.dispose(),J.dispose(),ve.dispose(),ie.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",mh),Me.removeEventListener("sessionend",gh),_r.stop()};function wt(E){E.preventDefault(),Wp("WebGLRenderer: Context Lost."),D=!0}function lt(){Wp("WebGLRenderer: Context Restored."),D=!1;const E=U.autoReset,F=Ce.enabled,j=Ce.autoUpdate,V=Ce.needsUpdate,H=Ce.type;we(),U.autoReset=E,Ce.enabled=F,Ce.autoUpdate=j,Ce.needsUpdate=V,Ce.type=H}function Jn(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){const F=E.target;F.removeEventListener("dispose",ei),Uv(F)}function Uv(E){kv(E),O.remove(E)}function kv(E){const F=O.get(E).programs;F!==void 0&&(F.forEach(function(j){le.releaseProgram(j)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,j,V,H,ge){F===null&&(F=Nt);const ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=zv(E,F,j,V,H);g.setMaterial(V,ye);let Te=j.index,Ae=1;if(V.wireframe===!0){if(Te=$.getWireframeAttribute(j),Te===void 0)return;Ae=2}const ke=j.drawRange,He=j.attributes.position;let be=ke.start*Ae,rt=(ke.start+ke.count)*Ae;ge!==null&&(be=Math.max(be,ge.start*Ae),rt=Math.min(rt,(ge.start+ge.count)*Ae)),Te!==null?(be=Math.max(be,0),rt=Math.min(rt,Te.count)):He!=null&&(be=Math.max(be,0),rt=Math.min(rt,He.count));const Rt=rt-be;if(Rt<0||Rt===1/0)return;ve.setup(H,V,me,j,Te);let At,at=fe;if(Te!==null&&(At=ae.get(Te),at=ee,at.setIndex(At)),H.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*vt()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(H.isLine){let Zt=V.linewidth;Zt===void 0&&(Zt=1),g.setLineWidth(Zt*vt()),H.isLineSegments?at.setMode(L.LINES):H.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else H.isPoints?at.setMode(L.POINTS):H.isSprite&&at.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(et.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Zt=H._multiDrawStarts,_e=H._multiDrawCounts,yn=H._multiDrawCount,Ke=Te?ae.get(Te).bytesPerElement:1,Dn=O.get(V).currentProgram.getUniforms();for(let ti=0;ti<yn;ti++)Dn.setValue(L,"_gl_DrawID",ti),at.render(Zt[ti]/Ke,_e[ti])}else if(H.isInstancedMesh)at.renderInstances(be,Rt,H.count);else if(j.isInstancedBufferGeometry){const Zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_e=Math.min(j.instanceCount,Zt);at.renderInstances(be,Rt,_e)}else at.render(be,Rt)};function ph(E,F,j){E.transparent===!0&&E.side===Ai&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,no(E,F,j),E.side=pr,E.needsUpdate=!0,no(E,F,j),E.side=Ai):no(E,F,j)}this.compile=function(E,F,j=null){j===null&&(j=E),w=de.get(j),w.init(F),_.push(w),j.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==j&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];ph(me,j,H),V.add(me)}else ph(ge,j,H),V.add(ge)}),w=_.pop(),V},this.compileAsync=function(E,F,j=null){const V=this.compile(E,F,j);return new Promise(H=>{function ge(){if(V.forEach(function(ye){O.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){H(E);return}setTimeout(ge,10)}et.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ic=null;function Ov(E){ic&&ic(E)}function mh(){_r.stop()}function gh(){_r.start()}const _r=new Cv;_r.setAnimationLoop(Ov),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(E){ic=E,Me.setAnimationLoop(E),E===null?_r.stop():_r.start()},Me.addEventListener("sessionstart",mh),Me.addEventListener("sessionend",gh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,F);const j=Me.enabled===!0&&Me.isPresenting===!0,V=C!==null&&(k===null||j)&&C.begin(P,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(F),F=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,k),w=de.get(E,_.length),w.init(F),w.state.textureUnits=W.getTextureUnits(),_.push(w),Et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Je.setFromProjectionMatrix(Et,ui,F.reversedDepth),Xe=this.localClippingEnabled,Ye=Ee.init(this.clippingPlanes,Xe),b=ue.get(E,R.length),b.init(),R.push(b),Me.enabled===!0&&Me.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&rc(ye,F,-1/0,P.sortObjects)}rc(E,F,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(Pe,Ne,F.reversedDepth),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&Le.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ee.beginShadows();const H=w.state.shadowsArray;if(Ce.render(H,E,F),Ye===!0&&Ee.endShadows(),(V&&C.hasRenderPass())===!1){const ye=b.opaque,me=b.transmissive;if(w.setupLights(),F.isArrayCamera){const Te=F.cameras;if(me.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const He=Te[Ae];xh(ye,me,E,He)}dt&&Le.render(E);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const He=Te[Ae];vh(b,E,He,He.viewport)}}else me.length>0&&xh(ye,me,E,F),dt&&Le.render(E),vh(b,E,F)}k!==null&&G===0&&(W.updateMultisampleRenderTarget(k),W.updateRenderTargetMipmap(k)),V&&C.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),ve.resetDefaultState(),q=-1,te=null,_.pop(),_.length>0?(w=_[_.length-1],W.setTextureUnits(w.state.textureUnits),Ye===!0&&Ee.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,I!==null&&I.renderEnd()};function rc(E,F,j,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Je.intersectsSprite(E)){V&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);const ye=J.update(E),me=E.material;me.visible&&b.push(E,ye,me,j,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Je.intersectsObject(E))){const ye=J.update(E),me=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Tt.copy(ye.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(me)){const Te=ye.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const He=Te[Ae],be=me[He.materialIndex];be&&be.visible&&b.push(E,ye,be,j,Tt.z,He)}}else me.visible&&b.push(E,ye,me,j,Tt.z,null)}}const ge=E.children;for(let ye=0,me=ge.length;ye<me;ye++)rc(ge[ye],F,j,V)}function vh(E,F,j,V){const{opaque:H,transmissive:ge,transparent:ye}=E;w.setupLightsView(j),Ye===!0&&Ee.setGlobalState(P.clippingPlanes,j),V&&g.viewport(Y.copy(V)),H.length>0&&to(H,F,j),ge.length>0&&to(ge,F,j),ye.length>0&&to(ye,F,j),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function xh(E,F,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const be=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:be?ki:wn,minFilter:Nr,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ge=w.state.transmissionRenderTarget[V.id],ye=V.viewport||Y;ge.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(Ie),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),dt&&Le.render(j);const ke=P.toneMapping;P.toneMapping=hi;const He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Ye===!0&&Ee.setGlobalState(P.clippingPlanes,V),to(E,j,V),W.updateMultisampleRenderTarget(ge),W.updateRenderTargetMipmap(ge),et.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let rt=0,Rt=F.length;rt<Rt;rt++){const At=F[rt],{object:at,geometry:Zt,material:_e,group:yn}=At;if(_e.side===Ai&&at.layers.test(V.layers)){const Ke=_e.side;_e.side=un,_e.needsUpdate=!0,_h(at,j,V,Zt,_e,yn),_e.side=Ke,_e.needsUpdate=!0,be=!0}}be===!0&&(W.updateMultisampleRenderTarget(ge),W.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Te,Ae),P.setClearColor(Ie,Ge),He!==void 0&&(V.viewport=He),P.toneMapping=ke}function to(E,F,j){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ge=E.length;H<ge;H++){const ye=E[H],{object:me,geometry:Te,group:Ae}=ye;let ke=ye.material;ke.allowOverride===!0&&V!==null&&(ke=V),me.layers.test(j.layers)&&_h(me,F,j,Te,ke,Ae)}}function _h(E,F,j,V,H,ge){E.onBeforeRender(P,F,j,V,H,ge),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,F,j,V,E,ge),H.transparent===!0&&H.side===Ai&&H.forceSinglePass===!1?(H.side=un,H.needsUpdate=!0,P.renderBufferDirect(j,F,V,H,E,ge),H.side=pr,H.needsUpdate=!0,P.renderBufferDirect(j,F,V,H,E,ge),H.side=Ai):P.renderBufferDirect(j,F,V,H,E,ge),E.onAfterRender(P,F,j,V,H,ge)}function no(E,F,j){F.isScene!==!0&&(F=Nt);const V=O.get(E),H=w.state.lights,ge=w.state.shadowsArray,ye=H.state.version,me=le.getParameters(E,H.state,ge,F,j,w.state.lightProbeGridArray),Te=le.getProgramCacheKey(me);let Ae=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ne.get(E.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ei),Ae=new Map,V.programs=Ae);let He=Ae.get(Te);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===ye)return Sh(E,me),He}else me.uniforms=le.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,j,me),E.onBeforeCompile(me,P),He=le.acquireProgram(me,Te),Ae.set(Te,He),V.uniforms=me.uniforms;const be=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=Ee.uniform),Sh(E,me),V.needsLights=Hv(E),V.lightsStateVersion=ye,V.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=He,V.uniformsList=null,He}function yh(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=al.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Sh(E,F){const j=O.get(E);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Bv(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let j=0,V=E.length;j<V;j++){const H=E[j];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function zv(E,F,j,V,H){F.isScene!==!0&&(F=Nt),W.resetTextureUnits();const ge=F.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,me=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$e.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=ne.get(V.envMap||ye,Te),ke=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,He=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!j.morphAttributes.position,rt=!!j.morphAttributes.normal,Rt=!!j.morphAttributes.color;let At=hi;V.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(At=P.toneMapping);const at=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Zt=at!==void 0?at.length:0,_e=O.get(V),yn=w.state.lights;if(Ye===!0&&(Xe===!0||E!==te)){const ct=E===te&&V.id===q;Ee.setState(V,E,ct)}let Ke=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==yn.state.version||_e.outputColorSpace!==me||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==Ae||V.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ee.numPlanes||_e.numIntersection!==Ee.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==He||_e.morphTargets!==be||_e.morphNormals!==rt||_e.morphColors!==Rt||_e.toneMapping!==At||_e.morphTargetsCount!==Zt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,_e.__version=V.version);let Dn=_e.currentProgram;Ke===!0&&(Dn=no(V,F,H),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Dn,_e));let ti=!1,zi=!1,$r=!1;const ot=Dn.getUniforms(),Pt=_e.uniforms;if(g.useProgram(Dn.program)&&(ti=!0,zi=!0,$r=!0),V.id!==q&&(q=V.id,zi=!0),_e.needsLights){const ct=Bv(w.state.lightProbeGridArray,H);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,zi=!0)}if(ti||te!==E){g.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(L,"projectionMatrix",E.projectionMatrix),ot.setValue(L,"viewMatrix",E.matrixWorldInverse);const Hi=ot.map.cameraPosition;Hi!==void 0&&Hi.setValue(L,gt.setFromMatrixPosition(E.matrixWorld)),A.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,zi=!0,$r=!0)}if(_e.needsLights&&(yn.state.directionalShadowMap.length>0&&ot.setValue(L,"directionalShadowMap",yn.state.directionalShadowMap,W),yn.state.spotShadowMap.length>0&&ot.setValue(L,"spotShadowMap",yn.state.spotShadowMap,W),yn.state.pointShadowMap.length>0&&ot.setValue(L,"pointShadowMap",yn.state.pointShadowMap,W)),H.isSkinnedMesh){ot.setOptional(L,H,"bindMatrix"),ot.setOptional(L,H,"bindMatrixInverse");const ct=H.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(L,"boneTexture",ct.boneTexture,W))}H.isBatchedMesh&&(ot.setOptional(L,H,"batchingTexture"),ot.setValue(L,"batchingTexture",H._matricesTexture,W),ot.setOptional(L,H,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",H._indirectTexture,W),ot.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",H._colorsTexture,W));const Vi=j.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&N.update(H,j,Dn),(zi||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,ot.setValue(L,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Kw()),zi){if(ot.setValue(L,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&Vv(Pt,$r),ge&&V.fog===!0&&xe.refreshFogUniforms(Pt,ge),xe.refreshMaterialUniforms(Pt,V,re,oe,w.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const ct=_e.lightProbeGrid;Pt.probesSH.value=ct.texture,Pt.probesMin.value.copy(ct.boundingBox.min),Pt.probesMax.value.copy(ct.boundingBox.max),Pt.probesResolution.value.copy(ct.resolution)}al.upload(L,yh(_e),Pt,W)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(al.upload(L,yh(_e),Pt,W),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(L,"center",H.center),ot.setValue(L,"modelViewMatrix",H.modelViewMatrix),ot.setValue(L,"normalMatrix",H.normalMatrix),ot.setValue(L,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ct=V.uniformsGroups;for(let Hi=0,qr=ct.length;Hi<qr;Hi++){const Mh=ct[Hi];ie.update(Mh,Dn),ie.bind(Mh,Dn)}}return Dn}function Vv(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Hv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,F,j){const V=O.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),O.get(E.texture).__webglTexture=F,O.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const j=O.get(E);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,j=0){k=E,K=F,G=j;let V=null,H=!1,ge=!1;if(E){const me=O.get(E);if(me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),Y.copy(E.viewport),ce.copy(E.scissor),Ue=E.scissorTest,g.viewport(Y),g.scissor(ce),g.setScissorTest(Ue),q=-1;return}else if(me.__webglFramebuffer===void 0)W.setupRenderTarget(E);else if(me.__hasExternalTextures)W.rebindTextures(E,O.get(E.texture).__webglTexture,O.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&O.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Ae=O.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?V=Ae[F][j]:V=Ae[F],H=!0):E.samples>0&&W.useMultisampledRTT(E)===!1?V=O.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[j]:V=Ae,Y.copy(E.viewport),ce.copy(E.scissor),Ue=E.scissorTest}else Y.copy(Re).multiplyScalar(re).floor(),ce.copy(Mt).multiplyScalar(re).floor(),Ue=Be;if(j!==0&&(V=X),g.bindFramebuffer(L.FRAMEBUFFER,V)&&g.drawBuffers(E,V),g.viewport(Y),g.scissor(ce),g.setScissorTest(Ue),H){const me=O.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,j)}else if(ge){const me=F;for(let Te=0;Te<E.textures.length;Te++){const Ae=O.get(E.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,j,me)}}else if(E!==null&&j!==0){const me=O.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,j)}q=-1},this.readRenderTargetPixels=function(E,F,j,V,H,ge,ye,me=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=O.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){g.bindFramebuffer(L.FRAMEBUFFER,Te);try{const Ae=E.textures[me],ke=Ae.format,He=Ae.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(ke)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(He)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&j>=0&&j<=E.height-H&&L.readPixels(F,j,V,H,he.convert(ke),he.convert(He),ge)}finally{const Ae=k!==null?O.get(k).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,F,j,V,H,ge,ye,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=O.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(F>=0&&F<=E.width-V&&j>=0&&j<=E.height-H){g.bindFramebuffer(L.FRAMEBUFFER,Te);const Ae=E.textures[me],ke=Ae.format,He=Ae.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),L.readPixels(F,j,V,H,he.convert(ke),he.convert(He),0);const rt=k!==null?O.get(k).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,rt);const Rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pS(L,Rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.deleteBuffer(be),L.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,j=0){const V=Math.pow(2,-j),H=Math.floor(E.image.width*V),ge=Math.floor(E.image.height*V),ye=F!==null?F.x:0,me=F!==null?F.y:0;W.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,ye,me,H,ge),g.unbindTexture()},this.copyTextureToTexture=function(E,F,j=null,V=null,H=0,ge=0){let ye,me,Te,Ae,ke,He,be,rt,Rt;const At=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(j!==null)ye=j.max.x-j.min.x,me=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,ke=j.min.y,He=j.isBox3?j.min.z:0;else{const Pt=Math.pow(2,-H);ye=Math.floor(At.width*Pt),me=Math.floor(At.height*Pt),E.isDataArrayTexture?Te=At.depth:E.isData3DTexture?Te=Math.floor(At.depth*Pt):Te=1,Ae=0,ke=0,He=0}V!==null?(be=V.x,rt=V.y,Rt=V.z):(be=0,rt=0,Rt=0);const at=he.convert(F.format),Zt=he.convert(F.type);let _e;F.isData3DTexture?(W.setTexture3D(F,0),_e=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(W.setTexture2DArray(F,0),_e=L.TEXTURE_2D_ARRAY):(W.setTexture2D(F,0),_e=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const yn=g.getParameter(L.UNPACK_ROW_LENGTH),Ke=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Dn=g.getParameter(L.UNPACK_SKIP_PIXELS),ti=g.getParameter(L.UNPACK_SKIP_ROWS),zi=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),g.pixelStorei(L.UNPACK_SKIP_ROWS,ke),g.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const $r=E.isDataArrayTexture||E.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Pt=O.get(E),Vi=O.get(F),ct=O.get(Pt.__renderTarget),Hi=O.get(Vi.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,ct.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let qr=0;qr<Te;qr++)$r&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,O.get(E).__webglTexture,H,He+qr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,O.get(F).__webglTexture,ge,Rt+qr)),L.blitFramebuffer(Ae,ke,ye,me,be,rt,ye,me,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||O.has(E)){const Pt=O.get(E),Vi=O.get(F);g.bindFramebuffer(L.READ_FRAMEBUFFER,Q),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let ct=0;ct<Te;ct++)$r?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,H,He+ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,H),ot?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vi.__webglTexture,ge,Rt+ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vi.__webglTexture,ge),H!==0?L.blitFramebuffer(Ae,ke,ye,me,be,rt,ye,me,L.COLOR_BUFFER_BIT,L.NEAREST):ot?L.copyTexSubImage3D(_e,ge,be,rt,Rt+ct,Ae,ke,ye,me):L.copyTexSubImage2D(_e,ge,be,rt,Ae,ke,ye,me);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ot?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(_e,ge,be,rt,Rt,ye,me,Te,at,Zt,At.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,ge,be,rt,Rt,ye,me,Te,at,At.data):L.texSubImage3D(_e,ge,be,rt,Rt,ye,me,Te,at,Zt,At):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ge,be,rt,ye,me,at,Zt,At.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ge,be,rt,At.width,At.height,at,At.data):L.texSubImage2D(L.TEXTURE_2D,ge,be,rt,ye,me,at,Zt,At);g.pixelStorei(L.UNPACK_ROW_LENGTH,yn),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Dn),g.pixelStorei(L.UNPACK_SKIP_ROWS,ti),g.pixelStorei(L.UNPACK_SKIP_IMAGES,zi),ge===0&&F.generateMipmaps&&L.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(E){O.get(E).__webglFramebuffer===void 0&&W.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?W.setTextureCube(E,0):E.isData3DTexture?W.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?W.setTexture2DArray(E,0):W.setTexture2D(E,0),g.unbindTexture()},this.resetState=function(){K=0,G=0,k=null,g.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function Qw({viewMode:t="front"}){const e=qe.useRef(null);return qe.useEffect(()=>{const n=e.current;if(!n)return;const i=new Zw({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.outputColorSpace=Tn,i.toneMapping=$f,i.toneMappingExposure=1.15,i.shadowMap.enabled=!0,i.shadowMap.type=tv,n.appendChild(i.domElement);const r=new tm,s=new Fn(30,n.clientWidth/Math.max(n.clientHeight,1),.05,50);function a(){if(!n)return;const A=n.clientWidth,g=n.clientHeight;i.setSize(A,g,!1),s.aspect=A/Math.max(g,1),s.updateProjectionMatrix()}const o=new ResizeObserver(a);o.observe(n),a();const l=new qd(i);l.compileEquirectangularShader();const u=new tm,h=new Ys(10,10,10),p=new rh({color:16777215,side:un});u.add(new nn(h,p));const d=l.fromScene(u).texture;r.environment=d;const m=new au(16777215,2.2);m.position.set(-2.6,3.8,2.2),m.castShadow=!0,m.shadow.mapSize.width=1024,m.shadow.mapSize.height=1024,m.shadow.bias=-1e-4,r.add(m);const x=new au(16777215,1.05);x.position.set(1.2,-.4,3),r.add(x);const T=new au(16777215,1.9);T.position.set(2.9,2.2,-2.6),r.add(T),r.add(new KS(16777215,14211294,1.15));const v=new nn(new Hs(6,6),new VS({opacity:.16}));v.rotation.x=-Math.PI/2,v.position.y=-.312,v.receiveShadow=!0,r.add(v);const f=[[.052,.72],[.088,.69],[.15,.652],[.146,.6],[.153,.545],[.141,.485],[.121,.418],[.132,.36],[.158,.282],[.156,.21],[.14,.14],[.086,.108],[.03,.096]],y=f.map(([A,g])=>new Oe(A,g)),M=new ah(y,96);M.computeVertexNormals(),M.scale(1,1,.74);const S=new ru({color:14605269,envMap:d,envMapIntensity:.8,roughness:.62,metalness:0,clearcoat:.12});S.sheen=.25,S.sheenRoughness=.6,S.sheenColor=new Ve(16777215);const b=new va,w=new nn(M,S);w.castShadow=!0,w.receiveShadow=!0,b.add(w);const R=new nn(new oh(.052,32,16,0,Math.PI*2,0,Math.PI/2),S);R.position.y=.72,R.scale.z=.74,b.add(R);const _=new ru({color:2762532,envMap:d,envMapIntensity:.7,roughness:.42,metalness:.85}),C=new nn(new Ul(.017,.017,.42,24),_);C.position.y=-.09,C.castShadow=!0,b.add(C);const P=new nn(new Ul(.16,.185,.022,48),_);P.position.y=-.3,P.castShadow=!0,P.receiveShadow=!0,b.add(P),r.add(b);function D(A,g,U){let O=0;for(let le=0;le<f.length-1;le++){const[xe,ue]=f[le],[de,Ee]=f[le+1];if(g<=ue&&g>=Ee){const Ce=(ue-g)/Math.max(ue-Ee,1e-6);O=xe+(de-xe)*Ce;break}}if(O===0)return null;const W=.012,ne=O+W,ae=(O+W)*.74,$=Math.hypot(A/ne,U/ae);if($>=1)return null;const J=1/Math.max($,1e-6);return[A*J,g,U*J]}const I=56,X=40,Q=.62,B=.598,K=.74,G=.178,k=new Hs(1,1,I-1,X-1),q=k.attributes.position,te=q.count,Y=new Float32Array(te*3),ce=new Float32Array(te*3),Ue=new Uint8Array(te),Ie=(A,g)=>A*I+g,Ge=Math.PI*2-Q;for(let A=0;A<X;A++)for(let g=0;g<I;g++){const U=Ie(A,g),O=-Math.PI/2+Q/2+g/(I-1)*Ge,W=B-A/(X-1)*K,ne=Math.sin(g*2.3)*.006+Math.sin(g*.7)*.009,ae=G+A/(X-1)*.115+ne*(A/(X-1)),$=U*3;Y[$]=Math.cos(O)*ae,Y[$+1]=W,Y[$+2]=Math.sin(O)*ae*.8,ce[$]=Y[$],ce[$+1]=Y[$+1],ce[$+2]=Y[$+2],A===0&&(Ue[U]=1)}const Z=[],oe=(A,g,U=1)=>{const O=Math.hypot(Y[A*3]-Y[g*3],Y[A*3+1]-Y[g*3+1],Y[A*3+2]-Y[g*3+2]);Z.push([A,g,O,U])};for(let A=0;A<X;A++)for(let g=0;g<I;g++)g+1<I&&oe(Ie(A,g),Ie(A,g+1)),A+1<X&&oe(Ie(A,g),Ie(A+1,g)),g+1<I&&A+1<X&&oe(Ie(A,g),Ie(A+1,g+1),.7),g>0&&A+1<X&&oe(Ie(A,g),Ie(A+1,g-1),.7),A+2<X&&oe(Ie(A,g),Ie(A+2,g),.1),g+2<I&&oe(Ie(A,g),Ie(A,g+2),.08);function re(A){const g=Math.min(A,.016666666666666666),U=g*g;for(let O=0;O<te;O++){if(Ue[O])continue;const W=O*3;for(let ne=0;ne<3;ne++){const ae=(Y[W+ne]-ce[W+ne])*.965;ce[W+ne]=Y[W+ne],Y[W+ne]+=ae+(ne===1?-5.2*U:0)}}for(let O=0;O<6;O++){for(let W=0;W<Z.length;W++){const[ne,ae,$,J]=Z[W],le=ne*3,xe=ae*3,ue=Y[xe]-Y[le],de=Y[xe+1]-Y[le+1],Ee=Y[xe+2]-Y[le+2],Ce=Math.hypot(ue,de,Ee)||1e-6,Le=(Ce-$)/Ce*.5*J,N=ue*Le,fe=de*Le,ee=Ee*Le;Ue[ne]||(Y[le]+=N,Y[le+1]+=fe,Y[le+2]+=ee),Ue[ae]||(Y[xe]-=N,Y[xe+1]-=fe,Y[xe+2]-=ee)}for(let W=0;W<te;W++){if(Ue[W])continue;const ne=W*3,ae=D(Y[ne],Y[ne+1],Y[ne+2]);ae&&(Y[ne]=ae[0],Y[ne+2]=ae[2])}}for(let O=0;O<te;O++)q.setXYZ(O,Y[O*3],Y[O*3+1],Y[O*3+2]);q.needsUpdate=!0,k.computeVertexNormals()}const Pe=1/120;for(let A=0;A<4;A+=Pe)re(Pe);const Ne=new ru({color:12891290,envMap:d,envMapIntensity:.95,roughness:.68,metalness:0,clearcoat:.08});Ne.sheen=.6,Ne.sheenRoughness=.35,Ne.sheenColor=new Ve(14994862);const Re=new nn(k,Ne);Re.castShadow=!0,Re.receiveShadow=!0,r.add(Re);let Be={front:0,side:-Math.PI/2,back:Math.PI}[t]??0,Je=Be;const Ye=2.55,Xe=.4;function Et(){s.position.set(Math.sin(Je)*Ye,Xe,Math.cos(Je)*Ye),s.lookAt(0,.24,0)}let gt=!1,Tt=0;const Nt=A=>{gt=!0,Tt=A.clientX},dt=()=>{gt=!1},vt=A=>{gt&&(Be-=(A.clientX-Tt)*.007,Tt=A.clientX)};n.addEventListener("mousedown",Nt),window.addEventListener("mouseup",dt),window.addEventListener("mousemove",vt);let L;const Kt=new tM;function et(){L=requestAnimationFrame(et);const A=Math.min(Kt.getDelta(),1/30);Je+=(Be-Je)*.09,Et(),re(A),i.render(r,s)}return et(),()=>{cancelAnimationFrame(L),o.disconnect(),n.removeEventListener("mousedown",Nt),window.removeEventListener("mouseup",dt),window.removeEventListener("mousemove",vt),n.contains(i.domElement)&&n.removeChild(i.domElement)}},[t]),c.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}})}function Jw({styleId:t="ST-27-011"}){const[e,n]=qe.useState("front");return c.jsxs("div",{style:{fontFamily:"'Manrope', sans-serif",background:"#F5F5F7",color:"#0E0D0C",padding:"24px 28px 48px",borderRadius:6,margin:"16px 0 32px",border:"1px solid #DDDDE1",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:24,borderBottom:"2px solid #0E0D0C",paddingBottom:14,marginBottom:20},children:[c.jsxs("div",{style:{fontFamily:"'Bodoni Moda', serif",fontSize:26,letterSpacing:".01em"},children:["Two Rivers",c.jsx("small",{style:{display:"block",fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".18em",color:"#4A4844",textTransform:"uppercase",marginTop:2},children:"Fashion AI · collection development"})]}),c.jsx("div",{style:{flex:1}}),c.jsx("div",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"#4A4844"},children:"Style Sheet"}),c.jsxs("div",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:11,color:"#4A4844",lineHeight:1.9,textAlign:"right"},children:[c.jsxs("div",{children:["STYLE ",c.jsx("b",{style:{color:"#0E0D0C",fontWeight:500},children:t}),"   SEASON ",c.jsx("b",{style:{color:"#0E0D0C",fontWeight:500},children:"SS27"})]}),c.jsxs("div",{children:["BASE SIZE ",c.jsx("b",{style:{color:"#0E0D0C",fontWeight:500},children:"38"}),"   UNITS ",c.jsx("b",{style:{color:"#0E0D0C",fontWeight:500},children:"cm"}),"   V",c.jsx("b",{style:{color:"#0E0D0C",fontWeight:500},children:"4"})]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"250px minmax(0, 1fr) 300px",gap:20},children:[c.jsxs("div",{style:{display:"grid",gap:20,alignContent:"start"},children:[c.jsxs("div",{style:{background:"#FFFFFF",border:"1px solid #DDDDE1",borderRadius:4,padding:"16px 18px"},children:[c.jsx("h3",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"#4A4844",paddingBottom:9,marginBottom:11,borderBottom:"1px solid #DDDDE1"},children:"Fabric"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Shell"}),c.jsx("span",{style:{fontWeight:500},children:"Silk faille 19mm"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Lining"}),c.jsx("span",{style:{fontWeight:500},children:"Cupro twill"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Interlining"}),c.jsx("span",{style:{fontWeight:500},children:"Silk organza"})]}),c.jsx("p",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10.5,color:"#4A4844",lineHeight:1.6,marginTop:9},children:"Name only. Swatches are not carried on the sheet — gathering them and putting a physical sample in every hand is a person's job, recorded below."})]}),c.jsxs("div",{style:{background:"#FFFFFF",border:"1px solid #DDDDE1",borderRadius:4,padding:"16px 18px"},children:[c.jsx("h3",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"#4A4844",paddingBottom:9,marginBottom:11,borderBottom:"1px solid #DDDDE1"},children:"Swatch handling"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Gathered by"}),c.jsx("span",{style:{fontWeight:500},children:"N. Walker"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Samples issued"}),c.jsx("span",{style:{fontWeight:500},children:"4 of 4"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Embroidery sample"}),c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#E6F2EC",color:"#2E7D5B"},children:"In hand"})]})]})]}),c.jsxs("div",{style:{background:"#FFFFFF",border:"1px solid #DDDDE1",borderRadius:4,overflow:"hidden",display:"flex",flexDirection:"column",minHeight:640},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",borderBottom:"1px solid #DDDDE1"},children:[c.jsx("span",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"#4A4844",marginRight:"auto"},children:"Garment on form"}),["front","side","back"].map(i=>c.jsx("button",{onClick:()=>n(i),style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10.5,letterSpacing:".12em",textTransform:"uppercase",padding:"7px 14px",border:"1px solid #DDDDE1",borderRadius:3,cursor:"pointer",background:e===i?"#0E0D0C":"#FFFFFF",color:e===i?"#FFFFFF":"#4A4844",borderColor:e===i?"#0E0D0C":"#DDDDE1"},children:i.charAt(0).toUpperCase()+i.slice(1)},i))]}),c.jsx("div",{style:{flex:1,position:"relative",background:"linear-gradient(180deg, #FAFAFB, #EFEFF2)",minHeight:520},children:c.jsx(Qw,{viewMode:e})}),c.jsxs("div",{style:{padding:"9px 14px",borderTop:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",fontSize:10,color:"#4A4844",display:"flex",gap:16,flexWrap:"wrap"},children:[c.jsx("span",{children:"SIDE VIEW DISCLOSES CLOSURE PLACEMENT"}),c.jsx("span",{children:"CLOTH SIMULATED · NOT DIMENSIONALLY VERIFIED"})]})]}),c.jsxs("div",{style:{display:"grid",gap:20,alignContent:"start"},children:[c.jsxs("div",{style:{background:"#FFFFFF",border:"1px solid #DDDDE1",borderRadius:4,padding:"16px 18px"},children:[c.jsx("h3",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"#4A4844",paddingBottom:9,marginBottom:11,borderBottom:"1px solid #DDDDE1"},children:"Embroidery · external"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Placement"}),c.jsx("span",{style:{fontWeight:500},children:"CF panel, cuff"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Supplier"}),c.jsx("span",{style:{fontWeight:500},children:"Atelier Lesage"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Est. cost"}),c.jsx("span",{style:{fontWeight:500},children:"$42.00 / gmt"})]}),c.jsxs("p",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10.5,color:"#4A4844",lineHeight:1.6,marginTop:9},children:["Goes outside the organisation, so the supplier and an estimated cost sit on the style sheet itself."," ",c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#E7ECFA",color:"#3757B8"},children:"Typed by a person"})]})]}),c.jsxs("div",{style:{background:"#FFFFFF",border:"1px solid #DDDDE1",borderRadius:4,padding:"16px 18px"},children:[c.jsx("h3",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"#4A4844",paddingBottom:9,marginBottom:11,borderBottom:"1px solid #DDDDE1"},children:"Closure"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13,borderBottom:"1px dotted #DDDDE1"},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Type"}),c.jsx("span",{style:{fontWeight:500},children:"Invisible zip"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:10,padding:"7px 0",fontSize:13},children:[c.jsx("span",{style:{color:"#4A4844"},children:"Placement"}),c.jsx("span",{style:{fontWeight:500},children:"Left side seam"})]}),c.jsx("p",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10.5,color:"#4A4844",lineHeight:1.6,marginTop:9},children:"Not centre back. This is why the sheet has a side view."})]})]})]}),c.jsxs("div",{style:{background:"#FFFFFF",border:"1px solid #DDDDE1",borderRadius:4,padding:"16px 18px",marginTop:20},children:[c.jsx("h3",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"#4A4844",paddingBottom:9,marginBottom:11,borderBottom:"1px solid #DDDDE1"},children:"Trims · size, type and colour are specified, never implied"}),c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12.5},children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Item"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Type"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Size"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Colour"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Placement"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Supplier"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"right",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Est. cost"}),c.jsx("th",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".14em",textTransform:"uppercase",color:"#4A4844",textAlign:"left",padding:"8px 10px",borderBottom:"1px solid #DDDDE1"},children:"Source"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Sequin"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Cup"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"5 mm"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Gold"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"CF panel"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Atelier Lesage"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"—"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#E7ECFA",color:"#3757B8"},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Sequin"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Cup"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"4 mm"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Purple"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"CF panel, shadow"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Atelier Lesage"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"—"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#E7ECFA",color:"#3757B8"},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Sequin"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Cup"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"6 mm"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Gold"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Cuff border"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Atelier Lesage"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"—"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#E7ECFA",color:"#3757B8"},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Thread"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Silk, Tkt 50"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"—"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Bone"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"All construction"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:"Au Ver à Soie"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"—"}),c.jsx("td",{style:{padding:"9px 10px",borderBottom:"1px solid #DDDDE1"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#E7ECFA",color:"#3757B8"},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"9px 10px"},children:"Zip"}),c.jsx("td",{style:{padding:"9px 10px"},children:"Invisible"}),c.jsx("td",{style:{padding:"9px 10px",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:"56 cm"}),c.jsx("td",{style:{padding:"9px 10px"},children:"Bone"}),c.jsx("td",{style:{padding:"9px 10px"},children:"Left side seam"}),c.jsx("td",{style:{padding:"9px 10px"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#F8E9E9",color:"#B3272D"},children:"Missing"})}),c.jsx("td",{style:{padding:"9px 10px",fontFamily:"'IBM Plex Mono', monospace",textAlign:"right"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#F8E9E9",color:"#B3272D"},children:"Missing"})}),c.jsx("td",{style:{padding:"9px 10px"},children:c.jsx("span",{style:{display:"inline-block",fontFamily:"'IBM Plex Mono', monospace",fontSize:9.5,letterSpacing:".12em",textTransform:"uppercase",padding:"2px 7px",borderRadius:2,background:"#F8E9E9",color:"#B3272D"},children:"Required"})})]})]})]}),c.jsx("p",{style:{fontFamily:"'IBM Plex Mono', monospace",fontSize:10.5,color:"#4A4844",lineHeight:1.6,marginTop:9},children:"Sequin size, type and colour are separate fields. “Sequins” is not a spec — a 5 mm gold cup and a 4 mm purple cup are different orders from the same supplier. These are commercial facts and human decisions, so the drafting agent refuses them rather than inventing a plausible value."})]}),c.jsx("p",{style:{marginTop:22,fontFamily:"'IBM Plex Mono', monospace",fontSize:10,color:"#4A4844",lineHeight:1.8,borderTop:"1px solid #DDDDE1",paddingTop:12},children:"STYLE SHEET · INTERNAL. Not manufacturable on its own — the factory works from the SPEC SHEET (flat sketch, arrows, measurements) and makes its own paper pattern; the SCHEMATIC carries the true-to-size layout. Synthetic data. Nothing on this sheet has been validated by a factory."})]})}function eA(){const[t,e]=qe.useState("Callot Soeurs"),[n,i]=qe.useState(!1),[r,s]=qe.useState([{id:"met-48291",title:"Evening Dress by Callot Soeurs",artist:"Callot Soeurs (French couture house, active 1895–1937)",date:"ca. 1924–26",medium:"Silk faille, metallic gold thread, glass cup sequins",culture:"French, Paris",museum:"The Metropolitan Museum of Art (Open Access)"},{id:"met-48292",title:"Coat with Metallic Gold Embroidery",artist:"Callot Soeurs",date:"1922",medium:"Silk organza, gold lamé, couched silk thread",culture:"French, Paris",museum:"The Metropolitan Museum of Art (Open Access)"},{id:"va-T291",title:"Embroidered Silk Opera Coat",artist:"Attributed to Callot Soeurs",date:"1925",medium:"Silk satin, embroidered gold sequins, seed pearls",culture:"British / French Collection",museum:"Victoria and Albert Museum, London"}]),a=async o=>{if(o.preventDefault(),!!t.trim()){i(!0);try{const u=await(await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(t)}`)).json();if(u.objectIDs&&u.objectIDs.length>0){const h=u.objectIDs.slice(0,4),p=await Promise.all(h.map(async d=>{const x=await(await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${d}`)).json();return{id:`met-${d}`,title:x.title||"Historical Fashion Specimen",artist:x.artistDisplayName||x.culture||"Historical Archive",date:x.objectDate||"ca. 1920s",medium:x.medium||"Textile / Embroidery",culture:x.culture||"French / International",imageUrl:x.primaryImageSmall||void 0,museum:"The Metropolitan Museum of Art (Open Access)"}}));s(p.filter(d=>d.title))}}catch{}finally{i(!1)}}};return c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},children:c.jsxs("div",{children:[c.jsxs("h3",{children:["Museum Art History API Reference ",c.jsx("span",{className:"chip c-approved",style:{fontSize:9,marginLeft:8},children:"Rights Cleared D-06"})]}),c.jsxs("p",{className:"sub",children:["Querying open archives (The Met, Victoria & Albert, Bunka Tokyo). Captures the ",c.jsx("i",{children:"feeling and atmospheric reference"})," without creating an unverified copy."]})]})}),c.jsxs("form",{onSubmit:a,style:{display:"flex",gap:10,marginBottom:16},children:[c.jsx("input",{className:"field-input",style:{flex:1,padding:"9px 14px"},value:t,onChange:o=>e(o.target.value),placeholder:"e.g. Callot Soeurs, 1920s embroidery, silk faille..."}),c.jsx("button",{type:"submit",className:"btn gold sm",disabled:n,children:n?"Searching...":"Search Museum Archives"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:14},children:r.map(o=>c.jsxs("div",{style:{border:"1px solid var(--line)",borderRadius:4,padding:14,background:"#FAF9F6",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontFamily:"var(--mono)",color:"var(--chalk)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:4},children:o.museum}),c.jsx("h4",{style:{fontSize:14,fontFamily:"var(--display)",fontWeight:600,marginBottom:6},children:o.title}),c.jsxs("div",{style:{fontSize:12,color:"var(--graphite)",marginBottom:4},children:[c.jsx("b",{children:"Artist / House:"})," ",o.artist]}),c.jsxs("div",{style:{fontSize:12,color:"var(--graphite)",marginBottom:4},children:[c.jsx("b",{children:"Date:"})," ",o.date]}),c.jsxs("div",{style:{fontSize:12,color:"var(--graphite)"},children:[c.jsx("b",{children:"Medium:"})," ",o.medium]})]}),c.jsxs("div",{style:{marginTop:12,display:"flex",gap:6,alignItems:"center"},children:[c.jsx("span",{className:"chip c-approved",style:{fontSize:9},children:"Public Domain"}),c.jsx("span",{className:"chip c-draft",style:{fontSize:9},children:"Creative Reference Only"})]})]},o.id))})]})}function tA({styleId:t,onBack:e}){const{collection:n,preflight:i}=xi(),[r,s]=qe.useState("stylesheet"),a=n==null?void 0:n.styles.find(h=>h.id===t),o=i[t]??[],{blockers:l,warnings:u}=Os(o);return a?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn ghost sm",onClick:e,style:{marginBottom:18},children:"← All styles"}),c.jsxs("div",{className:"page-head",style:{display:"flex",alignItems:"flex-end",gap:20},children:[c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:12,color:"var(--gold-ink)",letterSpacing:".06em"},children:[a.id," · version ",a.version]}),c.jsx("h2",{children:a.name}),c.jsxs("p",{children:[a.category," · sizes ",a.sizeRange.join(" / ")," · base size"," ",a.baseSize??c.jsx("span",{style:{color:"var(--blocker)"},children:"not declared"})," · units ",a.units," · owner ",a.owner]})]}),c.jsx("div",{style:{display:"flex",gap:8},children:c.jsx(Z0,{v:a.status})})]}),c.jsx("div",{className:"tabs",children:[["stylesheet","3D Style sheet","LIVE"],["creative","Creative modes",a.assets.length],["pack","Tech pack",a.fields.length+a.poms.length],["preflight","Preflight",l||u],["approvals","Approvals",a.gates.filter(h=>h.approved).length+"/4"],["factory","Factory thread",a.thread.length],["export","Export",""]].map(([h,p,d])=>c.jsxs("button",{className:`tab ${r===h?"active":""}`,onClick:()=>s(h),children:[p,d!==""&&d!==0&&c.jsx("span",{className:`count ${h==="preflight"&&l?"blocker":h==="stylesheet"?"ai":""}`,children:d})]},h))}),r==="stylesheet"&&c.jsxs(c.Fragment,{children:[c.jsx(Jw,{styleId:a.id}),c.jsx(eA,{})]}),r==="creative"&&c.jsx(nA,{style:a}),r==="pack"&&c.jsx(iA,{style:a}),r==="preflight"&&c.jsx(sA,{findings:o}),r==="approvals"&&c.jsx(aA,{style:a,blockers:l}),r==="factory"&&c.jsx(oA,{style:a}),r==="export"&&c.jsx(lA,{style:a,blockers:l,findings:o})]}):null}const Fm={mood:{title:"Mood sketch",note:"Creative reference. Communicates atmosphere and direction, not construction. Output from this mode can attach to the style record and can never attach to a tech-pack field.",cls:"creative"},presentation:{title:"Presentation sketch",note:"Design communication. Proportion, flow, and styling. Never a technical flat, never dimensionally reliable, never a production input.",cls:"creative"},flat:{title:"Technical flat",note:"The only creative mode that may attach to a tech pack, and only as a Draft asset with provenance. Unresolved construction details are labelled, never inferred.",cls:"technical"}};function nA({style:t}){const[e,n]=qe.useState("mood"),i=t.assets.filter(s=>s.mode===e),r=Fm[e];return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{display:"flex",gap:8,marginBottom:18},children:["mood","presentation","flat"].map(s=>c.jsx("button",{className:`btn sm ${e===s?"gold":""}`,onClick:()=>n(s),children:Fm[s].title},s))}),c.jsxs("div",{className:`mode-note ${r.cls}`,children:[c.jsxs("b",{children:[r.title," mode."]})," ",r.note]}),c.jsxs("div",{className:"grid c3",children:[i.map((s,a)=>c.jsxs("div",{className:"asset",children:[c.jsxs("div",{className:"canvas",children:[c.jsx("div",{className:"label",children:c.jsx(st,{tone:s.mode==="flat"?"warn":"ai",children:s.mode==="flat"?"Draft flat":r.title})}),s.mode==="mood"?c.jsx(Q0,{palette:s.palette}):s.mode==="presentation"?c.jsx(J0,{palette:s.palette}):c.jsx(ev,{back:a%2===1})]}),c.jsxs("div",{className:"meta",children:[c.jsx("h5",{children:s.title}),c.jsx("p",{children:s.caption}),s.palette.length>1&&c.jsx("div",{className:"swatches",children:s.palette.map(o=>c.jsx("span",{className:"swatch",style:{background:o}},o))}),c.jsxs("div",{style:{display:"flex",gap:6,marginTop:11},children:[c.jsx(st,{tone:"draft",children:"Synthetic"}),s.mode!=="flat"&&c.jsx(st,{tone:"blocker",children:"Not production input"})]})]})]},s.id)),i.length===0&&c.jsx("div",{className:"empty-state",children:"No assets in this mode yet."})]})]})}function iA({style:t}){const{resolveField:e,approveField:n}=xi(),[i,r]=qe.useState(null),[s,a]=qe.useState(""),o=[...new Set(t.fields.map(h=>h.section))],l=h=>void n(t.id,h.id),u=async h=>{await e(t.id,h.id,s),r(null),a("")};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mode-note technical",style:{marginBottom:20},children:[c.jsx("b",{children:"Eleven required sections."})," Every production-critical field carries source, author, timestamp, AI involvement, confidence, and approval state. AI-drafted critical fields stay ",c.jsx("i",{children:"Suggested"})," until a named human approves them."]}),c.jsx(rA,{style:t}),c.jsx("div",{className:"card",style:{padding:0,marginBottom:20},children:o.map(h=>c.jsxs("div",{children:[c.jsx("div",{className:"section-head",children:h}),t.fields.filter(p=>p.section===h).map(p=>c.jsxs("div",{className:"field-row",children:[c.jsxs("div",{className:"fk",children:[p.label,p.critical&&c.jsx("span",{style:{color:"var(--blocker)",marginLeft:5},children:"*"})]}),c.jsx("div",{children:i===p.id?c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("input",{className:"field-input",autoFocus:!0,value:s,onChange:d=>a(d.target.value),placeholder:"Enter the confirmed value"}),c.jsx("button",{className:"btn gold sm",disabled:!s.trim(),onClick:()=>u(p),children:"Save"}),c.jsx("button",{className:"btn sm",onClick:()=>r(null),children:"Cancel"})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`fv ${p.value?"":"empty"}`,children:p.value||"unresolved — no value"}),p.note&&c.jsx("div",{className:"fnote",children:p.note})]})}),c.jsxs("div",{className:"fp",children:[p.aiInvolved&&c.jsxs(st,{tone:"ai",children:["AI · ",p.confidence]}),c.jsx(Ip,{v:p.approval}),p.approval==="Suggested"&&c.jsx("button",{className:"btn sm",onClick:()=>l(p),children:"Approve"}),p.approval==="Unresolved"&&i!==p.id&&c.jsx("button",{className:"btn sm",onClick:()=>{r(p.id),a(p.value)},children:"Resolve"})]})]},p.id))]},h))}),c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsx("h3",{children:"Measurements — points of measure"}),c.jsxs("p",{className:"sub",children:["Graded across ",t.sizeRange.join(" / "),". Cells flagged red failed a deterministic check. Measurement method is mandatory: two people measuring differently is the most common cause of a rejected sample."]}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Code"}),c.jsx("th",{children:"Point of measure"}),c.jsx("th",{children:"Method"}),c.jsx("th",{children:"Tol."}),c.jsx("th",{children:"Unit"}),t.sizeRange.map(h=>c.jsx("th",{style:{textAlign:"right"},children:h},h)),c.jsx("th",{children:"Provenance"})]})}),c.jsx("tbody",{children:t.poms.map((h,p)=>{const d=t.sizeRange.map(m=>h.sizes[m]);return c.jsxs("tr",{children:[c.jsx("td",{className:"mono",children:h.code}),c.jsx("td",{children:h.name}),c.jsx("td",{className:"muted",style:{fontSize:11.5},children:h.method||"—"}),c.jsx("td",{className:h.tolerance?"mono":"flag mono",children:h.tolerance||"missing"}),c.jsx("td",{className:h.unit===t.units?"mono":"flag mono",children:h.unit}),d.map((m,x)=>{const T=d[x-1],v=m!=null&&T!=null&&m<T;return c.jsx("td",{className:`num ${v?"flag":""}`,children:m??"—"},x)}),c.jsx("td",{children:h.aiInvolved?c.jsxs(st,{tone:"ai",children:["AI · ",h.confidence]}):c.jsx(Ip,{v:h.approval})})]},`${h.code}-${p}`)})})]})})]}),c.jsxs("div",{className:"grid c2",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Bill of materials"}),c.jsx("p",{className:"sub",children:"Every material with composition, weight, placement, supplier, quantity."}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Material"}),c.jsx("th",{children:"Composition"}),c.jsx("th",{children:"Weight"}),c.jsx("th",{children:"Placement"}),c.jsx("th",{children:"Qty"})]})}),c.jsx("tbody",{children:t.bom.map(h=>c.jsxs("tr",{children:[c.jsx("td",{children:h.material||c.jsx("span",{className:"muted",children:"unnamed"})}),c.jsx("td",{className:h.composition?"":"flag",children:h.composition||"missing"}),c.jsx("td",{className:"mono",children:h.weight||"—"}),c.jsx("td",{className:"muted",children:h.placement||"—"}),c.jsx("td",{className:h.qty?"mono":"flag mono",children:h.qty||"missing"})]},h.id))})]})})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Trims & labels"}),c.jsx("p",{className:"sub",children:"Placement must be dimensioned from a named reference point."}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Item"}),c.jsx("th",{children:"Spec"}),c.jsx("th",{children:"Placement"}),c.jsx("th",{children:"Qty"})]})}),c.jsx("tbody",{children:t.trims.map(h=>c.jsxs("tr",{children:[c.jsx("td",{children:h.item}),c.jsx("td",{className:"muted",children:h.spec}),c.jsx("td",{className:/\d/.test(h.placement)?"":"flag",children:h.placement}),c.jsx("td",{className:"mono",children:h.qty})]},h.id))})]})})]})]})]})}function rA({style:t}){const{draftPack:e,user:n,invocations:i}=xi(),[r,s]=qe.useState(!1),[a,o]=qe.useState(null),l=(n==null?void 0:n.role)==="technical"||(n==null?void 0:n.role)==="owner",u=i.filter(p=>p.styleId===t.id).reduce((p,d)=>p+d.costUsd,0),h=async p=>{s(!0),o(await e(t.id,p)),s(!1)};return c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16,flexWrap:"wrap"},children:[c.jsxs("div",{style:{flex:1,minWidth:280},children:[c.jsx("h3",{children:"Draft with AI"}),c.jsxs("p",{className:"sub",style:{marginBottom:0},children:["Fills fields the trade already agrees on. It will not invent a measurement, and it will not make a decision that belongs to a person — those come back as refusals with the reason. Nothing it writes is authoritative: every field lands as ",c.jsx("i",{children:"Suggested"})," and still needs your approval."]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[c.jsx("button",{className:"btn gold",disabled:!l||r,title:l?"":"Only a technical designer or owner may run drafting",onClick:()=>void h(),children:r?"Drafting…":"Draft missing fields"}),c.jsxs("span",{className:"muted mono",style:{fontSize:11},children:["$",u.toFixed(4)," spent on this style"]})]})]}),a&&c.jsxs("div",{style:{marginTop:18,display:"grid",gap:14},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[c.jsxs(st,{tone:"ai",children:[a.provider," / ",a.model]}),c.jsxs(st,{tone:"draft",children:[(a.latencyMs/1e3).toFixed(1),"s"]}),c.jsxs(st,{tone:"draft",children:["$",a.costUsd.toFixed(4)]}),c.jsx("button",{className:"btn sm ghost",onClick:()=>void h(!0),children:"Run again"})]}),a.suggestions.length>0&&c.jsxs("div",{children:[c.jsxs("div",{className:"section-head",style:{paddingLeft:0,borderBottom:"none"},children:["Drafted — ",a.suggestions.length," suggested"]}),a.suggestions.map(p=>c.jsxs("div",{className:"finding",style:{borderLeft:"3px solid var(--ai)"},children:[c.jsxs("div",{children:[c.jsxs(st,{tone:"ai",children:["AI · ",p.confidence]}),c.jsxs("div",{className:"ref",style:{marginTop:7},children:[p.section," · ",p.label]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"msg",children:p.value}),c.jsx("div",{className:"detail",children:p.rationale})]})]},p.label))]}),a.declined.length>0&&c.jsxs("div",{children:[c.jsxs("div",{className:"section-head",style:{paddingLeft:0,borderBottom:"none"},children:["Refused — ",a.declined.length,", and this is the point"]}),a.declined.map(p=>c.jsxs("div",{className:"finding blocker",children:[c.jsxs("div",{children:[c.jsx(st,{tone:"blocker",children:"Refused"}),c.jsx("div",{className:"ref",style:{marginTop:7},children:p.label})]}),c.jsx("div",{children:c.jsx("div",{className:"detail",style:{fontSize:12.5},children:p.reason})})]},p.label))]})]})]})}function sA({findings:t}){const{blockers:e,warnings:n}=Os(t),i=[...new Set(t.map(r=>r.family))];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"grid c3",style:{marginBottom:22},children:[c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Blockers"}),c.jsx("span",{className:`v ${e?"blocker":"ok"}`,children:e}),c.jsx("span",{className:"n",children:"Prevent Approved for Factory"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Warnings"}),c.jsx("span",{className:`v ${n?"warn":"ok"}`,children:n}),c.jsx("span",{className:"n",children:"Reviewable, non-blocking"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Rule source"}),c.jsx("span",{className:"v",style:{fontSize:21},children:"Deterministic"}),c.jsx("span",{className:"n",children:"Arithmetic and presence checks only — no model judgement"})]})})]}),c.jsxs("div",{className:"mode-note technical",children:[c.jsx("b",{children:"Model-based review may add warnings. It may never clear a blocker."})," Every finding below is reproducible from the pack itself, which is what makes it trustworthy enough to stop an export."]}),i.map(r=>c.jsxs("div",{style:{marginBottom:24},children:[c.jsx("div",{className:"section-head",style:{paddingLeft:0,borderBottom:"none"},children:r}),t.filter(s=>s.family===r).map(s=>c.jsxs("div",{className:`finding ${s.severity}`,children:[c.jsxs("div",{children:[c.jsx(st,{tone:s.severity==="blocker"?"blocker":"warn",children:s.severity}),c.jsx("div",{className:"ref",style:{marginTop:7},children:s.ref})]}),c.jsxs("div",{children:[c.jsx("div",{className:"msg",children:s.message}),c.jsx("div",{className:"detail",children:s.detail})]})]},s.id))]},r)),t.length===0&&c.jsx("div",{className:"empty-state",children:"Preflight clean. All deterministic checks passed."})]})}function aA({style:t,blockers:e}){const{approveGate:n}=xi(),i=r=>void n(t.id,r);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mode-note technical",children:[c.jsx("b",{children:"Approvals are immutable events, not toggles."})," Concept and design gates fire at stages 4 and 6, long before a tech pack exists. The technical gate cannot be satisfied while deterministic blockers remain."]}),t.gates.map(r=>c.jsxs("div",{className:`gate ${r.approved?"done":""}`,children:[c.jsx("div",{className:"g-mark",children:r.approved?"✓":"·"}),c.jsxs("div",{className:"g-body",children:[c.jsx("h5",{children:r.label}),c.jsx("p",{children:r.approved?`Approved by ${r.approver} · ${Ur(r.approvedAt)}`:r.approver==="Unassigned"?"No named approver assigned":`Awaiting ${r.approver}`})]}),r.approved?c.jsx(st,{tone:"ok",children:"Approved"}):c.jsx("button",{className:"btn gold sm",disabled:r.key==="technical"&&e>0,title:r.key==="technical"&&e>0?`${e} blockers must be cleared first`:"",onClick:()=>i(r.key),children:r.key==="technical"&&e>0?`Blocked — ${e} failures`:"Approve"})]},r.key))]})}function oA({style:t}){const{resolveThread:e}=xi(),n=(i,r)=>void e(t.id,i,r?{kind:"require_field",target:"Shrinkage",severity:"blocker",message:"Shrinkage must be stated — the factory cannot cut bias panels without it"}:void 0);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mode-note technical",children:[c.jsx("b",{children:"This loop is the product."})," A resolved factory correction is classified and proposed as a reusable validation rule, so the same ambiguity cannot reach a second style. Everything above this panel is table stakes; this is the part that compounds."]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Factory thread — Partner A sample room"}),c.jsx("p",{className:"sub",children:"Questions anchored to a specific field, page, asset, or measurement."}),t.thread.map(i=>c.jsxs("div",{className:`msg ${i.role}`,children:[c.jsx("div",{className:"av",children:i.role==="factory"?"FA":"NW"}),c.jsxs("div",{className:"m-body",children:[c.jsxs("div",{className:"m-head",children:[c.jsx("b",{children:i.author}),c.jsx("time",{children:Ur(i.at)}),i.fieldRef&&c.jsxs(st,{tone:"gold",children:["→ ",i.fieldRef]}),c.jsx(st,{tone:i.state==="Resolved"?"ok":"warn",children:i.state})]}),c.jsx("div",{className:"m-text",children:i.body}),i.proposedRule&&c.jsxs("div",{className:"m-rule",children:["Proposed reusable rule → ",c.jsx("b",{children:i.proposedRule}),c.jsx("span",{className:"muted",children:" · already active in the deterministic engine"})]}),i.state!=="Resolved"&&c.jsxs("div",{style:{display:"flex",gap:8,marginTop:11},children:[c.jsx("button",{className:"btn sm",onClick:()=>n(i.id),children:"Mark resolved"}),c.jsx("button",{className:"btn sm gold",onClick:()=>n(i.id,!0),children:"Resolve & promote to a rule"})]})]})]},i.id)),t.thread.length===0&&c.jsx("div",{className:"empty-state",children:"No factory questions yet."})]})]})}function lA({style:t,blockers:e,findings:n}){const{createExport:i}=xi(),r=t.gates.find(o=>o.key==="technical"),s=e===0&&r.approved,a=()=>void i(t.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`export-state ${s?"ready":"blocked"}`,style:{marginBottom:22},children:[c.jsx("h4",{children:s?"Cleared for factory handoff":"Export blocked"}),c.jsx("p",{children:s?"All deterministic checks pass and the technical gate carries a named approval. The export will be marked Production Authorized.":`${e} critical validation failure${e===1?"":"s"} and ${r.approved?"an approved":"an unapproved"} technical gate. Any export produced now is watermarked DRAFT and omits Production Authorized status.`}),c.jsx("button",{className:"btn gold",onClick:a,children:s?"Generate authorized package":"Generate DRAFT package anyway"})]}),c.jsxs("div",{className:"grid split",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Package preview"}),c.jsx("p",{className:"sub",children:"What the factory receives. Version identity travels with the document."}),c.jsxs("div",{className:"watermark",children:[c.jsx("h4",{children:t.name}),c.jsxs("div",{className:"wm-meta",children:[t.id," · v",t.version," · ",t.category," · generated ",Ur(new Date().toISOString())]}),c.jsxs("div",{className:"wm-grid",children:[c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Base size"}),c.jsx("span",{children:t.baseSize??"— not declared"})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Units"}),c.jsx("span",{children:t.units})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Sizes"}),c.jsx("span",{children:t.sizeRange.join(" / ")})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Approvers"}),c.jsx("span",{children:t.gates.filter(o=>o.approved).map(o=>o.approver).join(", ")||"none"})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Validation"}),c.jsxs("span",{children:[e," blockers · ",n.length-e," warnings"]})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Status"}),c.jsx("span",{children:s?"Production Authorized":"DRAFT"})]})]})]})]}),c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Export manifest"}),c.jsx("p",{className:"sub",children:"EXP-002 — what was included and who signed it."}),c.jsxs("div",{className:"manifest",children:[c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Style"}),t.id]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Version"}),"v",t.version]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Units"}),t.units]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Blockers"}),e]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Technical gate"}),r.approved?"approved":"not approved"]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Authorization"}),s?"Production Authorized":"DRAFT only"]})]})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Export history"}),c.jsx("p",{className:"sub",children:"Every package the factory has ever received."}),t.exports.length===0?c.jsx("div",{className:"empty-state",style:{padding:22},children:"Nothing exported yet."}):t.exports.map(o=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderBottom:"1px solid var(--line)"},children:[c.jsx(st,{tone:o.authorized?"ok":"warn",children:o.authorized?"Authorized":"Draft"}),c.jsxs("span",{className:"mono",children:["v",o.version]}),c.jsx("span",{className:"muted",style:{marginLeft:"auto",fontSize:11.5},children:Ur(o.at)})]},o.id))]})]})]})]})}function cA(){const{audit:t,invocations:e,corrections:n,templates:i,user:r,signOffCategory:s}=xi(),a=e.reduce((l,u)=>l+u.costUsd,0),o=n.filter(l=>l.accepted);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsx("h2",{children:"Governance"}),c.jsx("p",{children:"Audit trail, learned rules, category schemas, and the model-cost ledger. Every stage transition, field edit, approval, override, export, and model action is recorded server-side with an actor and a timestamp (AUD-001, AI-002)."})]}),c.jsxs("div",{className:"grid c4",style:{marginBottom:24},children:[c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Audit events"}),c.jsx("span",{className:"v",children:t.length}),c.jsx("span",{className:"n",children:"Append-only, server-side"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Learned rules"}),c.jsx("span",{className:`v ${o.length?"ok":""}`,children:o.length}),c.jsx("span",{className:"n",children:"Factory corrections now enforced everywhere"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Model cost"}),c.jsxs("span",{className:"v",children:["$",a.toFixed(3)]}),c.jsxs("span",{className:"n",children:["Across ",e.length," invocations"]})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Signed-off schemas"}),c.jsxs("span",{className:`v ${i.every(l=>l.signedOffBy)?"ok":"warn"}`,children:[i.filter(l=>l.signedOffBy).length,"/",i.length]}),c.jsx("span",{className:"n",children:"D-01 — category rule sets"})]})})]}),c.jsxs("div",{className:"grid split",children:[c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Learned from the factory"}),c.jsx("p",{className:"sub",children:"Corrections promoted to deterministic rules (FAC-002). These run against every style, including ones that never had the original problem. This is the only part of the system that gets harder to copy over time."}),o.length===0?c.jsx("div",{className:"empty-state",style:{padding:26},children:"No corrections promoted yet. Resolve a factory question with “Resolve & promote to a rule”."}):o.map(l=>c.jsxs("div",{style:{padding:"12px 0",borderBottom:"1px solid var(--line)"},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:5},children:[c.jsx(st,{tone:l.severity==="blocker"?"blocker":"warn",children:l.severity}),c.jsxs("span",{className:"mono",style:{fontSize:11.5},children:[l.kind," → ",l.target]})]}),c.jsx("div",{style:{fontSize:12.5},children:l.message}),c.jsxs("div",{className:"muted",style:{fontSize:11},children:["From ",l.styleId," · accepted by ",l.acceptedBy," · ",Ur(l.acceptedAt??void 0)]})]},l.id))]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Audit log"}),c.jsx("p",{className:"sub",children:"Written inside the same transaction as the change it records."}),t.map(l=>c.jsxs("div",{className:"audit-row",children:[c.jsx("time",{children:Ur(l.at)}),c.jsx("span",{className:"actor",children:l.actor}),c.jsxs("span",{children:[l.action,l.target&&c.jsxs("span",{className:"muted",children:[" · ",l.target]}),l.from&&l.to&&c.jsxs("span",{className:"muted",children:[" · ",l.from," → ",l.to]}),l.reason&&c.jsxs("span",{className:"muted",children:[" · “",l.reason,"”"]})]})]},l.id))]})]}),c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Category schemas"}),c.jsx("p",{className:"sub",children:"D-01. Required fields and POMs are data, not code — changing the pilot category is an entry in the template table. A schema governs real work only once a technical designer signs it off."}),i.map(l=>c.jsxs("div",{style:{padding:"13px 0",borderBottom:"1px solid var(--line)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:5},children:[c.jsx("b",{style:{fontSize:13,fontWeight:500},children:l.label}),c.jsx("span",{className:"mono muted",style:{fontSize:11},children:l.key}),l.signedOffBy?c.jsx(st,{tone:"ok",children:"Signed off"}):c.jsx(st,{tone:"warn",children:"Unsigned"})]}),c.jsxs("div",{className:"muted",style:{fontSize:11.5},children:[l.requiredFields.length," required fields · ",l.requiredPoms.length," required POMs",l.signedOffBy&&c.jsxs(c.Fragment,{children:[" · by ",l.signedOffBy]})]}),!l.signedOffBy&&c.jsx("button",{className:"btn sm",style:{marginTop:9},disabled:(r==null?void 0:r.role)!=="technical",title:(r==null?void 0:r.role)!=="technical"?"Only a technical designer may sign off a category schema":"",onClick:()=>void s(l.key),children:"Sign off schema"})]},l.key))]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Model invocations"}),c.jsx("p",{className:"sub",children:"Provider, model, latency, and cost recorded per artifact."}),e.map(l=>c.jsxs("div",{style:{padding:"11px 0",borderBottom:"1px solid var(--line)"},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:4},children:[c.jsx("span",{style:{fontSize:12.5},children:l.feature}),c.jsx(st,{tone:l.userAction==="pending"?"warn":"draft",children:l.userAction}),c.jsxs("span",{className:"mono",style:{marginLeft:"auto"},children:["$",l.costUsd.toFixed(3)]})]}),c.jsxs("div",{className:"muted mono",style:{fontSize:11},children:[l.provider," / ",l.model," · ",(l.latencyMs/1e3).toFixed(1),"s · ",Ur(l.at)]})]},l.id))]})]})]})]})}const uA=[{u:"natalie",role:"Technical designer — may edit and approve production-critical work"},{u:"mitra",role:"Owner — may edit and approve"},{u:"factory",role:"Factory reviewer — may comment, may not approve"},{u:"viewer",role:"Viewer — read only"}];function dA(){const{login:t,error:e}=xi(),[n,i]=qe.useState("natalie"),[r,s]=qe.useState(""),[a,o]=qe.useState(!1),l=async h=>{h.preventDefault(),o(!0),await t(n,r),o(!1)},u={width:"100%",marginTop:6,padding:"11px 14px"};return c.jsx("div",{className:"login-shell",children:c.jsxs("div",{style:{width:"100%",maxWidth:940,display:"grid",gap:22,gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)"},children:[c.jsxs("div",{className:"card",style:{padding:34},children:[c.jsxs("div",{className:"brand",style:{padding:0,marginBottom:26},children:[c.jsx("h1",{style:{fontSize:34},children:"Atelier"}),c.jsx("div",{className:"rule"}),c.jsx("p",{children:"Collection Development"})]}),c.jsxs("form",{onSubmit:l,children:[c.jsxs("label",{style:{fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"var(--text-3)"},children:["Username",c.jsx("input",{className:"field-input",style:u,value:n,onChange:h=>i(h.target.value),autoComplete:"username"})]}),c.jsxs("label",{style:{fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"var(--text-3)",display:"block",marginTop:16},children:["Password",c.jsx("input",{className:"field-input",style:u,type:"password",value:r,onChange:h=>s(h.target.value),autoComplete:"current-password"})]}),e&&c.jsx("div",{style:{marginTop:16,padding:"10px 13px",borderRadius:8,background:"var(--blocker-bg)",color:"var(--blocker)",fontSize:12.5},children:e}),c.jsx("button",{className:"btn gold block",style:{marginTop:22},disabled:a,children:a?"Signing in…":"Sign in"})]})]}),c.jsxs("div",{className:"card",style:{padding:30},children:[c.jsx("h3",{children:"Demonstrator accounts"}),c.jsx("p",{className:"sub",children:"Roles are enforced on the server, not in the interface. Sign in as the factory reviewer or the viewer and watch the approval actions get refused."}),uA.map(h=>c.jsxs("div",{style:{padding:"11px 0",borderBottom:"1px solid var(--line)"},children:[c.jsx("button",{className:"btn sm",onClick:()=>i(h.u),style:{marginBottom:6},children:h.u}),c.jsx("div",{className:"muted",style:{fontSize:11.5},children:h.role})]},h.u)),c.jsxs("p",{className:"muted",style:{fontSize:11.5,marginTop:16,lineHeight:1.6},children:["Password for every demonstrator account is ",c.jsx("b",{children:"pilot"}),". This workspace holds synthetic data only; real brand data is not loaded until the PRD §12 security checklist passes."]})]})]})})}function fA({onEnter:t}){const[e,n]=qe.useState(!1),[i,r]=qe.useState("https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-runway-41225-large.mp4"),[s,a]=qe.useState("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=fashion-show-chill-114421.mp3"),o=qe.useRef(null),l=qe.useRef(null),u=()=>{o.current&&(e?(o.current.pause(),n(!1)):(o.current.play().catch(console.error),n(!0)))},h=d=>{var x;const m=(x=d.target.files)==null?void 0:x[0];m&&r(URL.createObjectURL(m))},p=d=>{var x;const m=(x=d.target.files)==null?void 0:x[0];if(m){const T=URL.createObjectURL(m);a(T),o.current&&(o.current.src=T,o.current.play().catch(console.error),n(!0))}};return c.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"#0a0a0c",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",fontFamily:"var(--font-sans, system-ui)"},children:[c.jsx("video",{ref:l,src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.45,filter:"contrast(1.1) brightness(0.85)"}}),c.jsx("audio",{ref:o,src:s,loop:!0}),c.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle at center, rgba(10,10,12,0.35) 0%, rgba(10,10,12,0.85) 85%)",pointerEvents:"none"}}),c.jsxs("div",{style:{position:"absolute",top:24,right:30,display:"flex",gap:14,zIndex:10},children:[c.jsxs("label",{className:"btn sm ghost",style:{background:"rgba(255,255,255,0.12)",backdropFilter:"blur(10px)",color:"#fff",border:"1px solid rgba(255,255,255,0.25)",fontSize:11,cursor:"pointer",padding:"6px 12px"},children:["📹 Replace Video",c.jsx("input",{type:"file",accept:"video/*",onChange:h,style:{display:"none"}})]}),c.jsxs("label",{className:"btn sm ghost",style:{background:"rgba(255,255,255,0.12)",backdropFilter:"blur(10px)",color:"#fff",border:"1px solid rgba(255,255,255,0.25)",fontSize:11,cursor:"pointer",padding:"6px 12px"},children:["🎵 Replace Music",c.jsx("input",{type:"file",accept:"audio/*",onChange:p,style:{display:"none"}})]}),c.jsx("button",{onClick:u,className:"btn sm",style:{background:e?"var(--gold, #d4af37)":"rgba(255,255,255,0.15)",color:e?"#000":"#fff",border:"1px solid rgba(255,255,255,0.3)",fontSize:11,padding:"6px 14px",backdropFilter:"blur(10px)"},children:e?"🔊 Music Playing":"🔇 Play Music"})]}),c.jsxs("div",{style:{position:"relative",zIndex:5,textAlign:"center",maxWidth:640,padding:"0 24px",animation:"fadeIn 1.2s ease-out"},children:[c.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:".32em",color:"var(--gold, #d4af37)",textTransform:"uppercase",marginBottom:16},children:"Spring / Summer 2027 Runway Experience"}),c.jsx("h1",{style:{fontFamily:"var(--display, Georgia, serif)",fontSize:56,fontWeight:300,letterSpacing:".04em",margin:"0 0 16px 0",textShadow:"0 4px 20px rgba(0,0,0,0.8)"},children:"Atelier Pilot"}),c.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,color:"rgba(255,255,255,0.85)",lineHeight:1.6,marginBottom:36,fontWeight:300},children:"Collection Development · Interactive 3D Dress Form · Museum Rights Clearance · Tape Measure Calendar"}),c.jsx("button",{onClick:()=>{o.current&&!e&&o.current.play().catch(console.error),t()},className:"btn gold",style:{padding:"14px 42px",fontSize:13,letterSpacing:".18em",textTransform:"uppercase",background:"linear-gradient(135deg, #e6ca65 0%, #b8932b 100%)",color:"#0f0f12",border:"none",borderRadius:4,fontWeight:600,cursor:"pointer",boxShadow:"0 8px 30px rgba(212, 175, 55, 0.4)",transition:"all 0.3s ease"},children:"Enter Runway Platform →"})]})]})}function hA(){const{collection:t,user:e,preflight:n,loading:i,error:r,clearError:s,logout:a}=xi(),[o,l]=qe.useState({page:"collection"}),[u,h]=qe.useState(!0);if(i)return c.jsx("div",{className:"empty-state",style:{paddingTop:120},children:"Loading workspace…"});if(!e||!t)return c.jsx(dA,{});const p=Os(t.styles.flatMap(d=>n[d.id]??[]));return c.jsxs(c.Fragment,{children:[u&&c.jsx(fA,{onEnter:()=>h(!1)}),c.jsx("div",{className:"app-frame",children:c.jsxs("div",{className:"app",children:[c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"brand",children:[c.jsx("h1",{children:"Atelier"}),c.jsx("div",{className:"rule"}),c.jsx("p",{children:"Collection Development"})]}),c.jsxs("div",{className:"nav-group",children:[c.jsx("div",{className:"nav-label",children:"Collection"}),c.jsxs("button",{className:`nav-item ${o.page==="collection"?"active":""}`,onClick:()=>l({page:"collection"}),children:[c.jsx("span",{className:"dot"}),t.season," ",t.year,c.jsx("span",{className:"meta",children:t.styles.length})]})]}),c.jsxs("div",{className:"nav-group",children:[c.jsx("div",{className:"nav-label",children:"Styles"}),t.styles.map(d=>{const{blockers:m}=Os(n[d.id]??[]);return c.jsxs("button",{className:`nav-item ${o.page==="style"&&o.id===d.id?"active":""}`,onClick:()=>l({page:"style",id:d.id}),children:[c.jsx("span",{className:"dot"}),c.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.id}),c.jsx("span",{className:"meta",style:m?{color:"var(--blocker)"}:void 0,children:m?`${m}✕`:"✓"})]},d.id)})]}),c.jsxs("div",{className:"nav-group",children:[c.jsx("div",{className:"nav-label",children:"Workspace"}),c.jsxs("button",{className:`nav-item ${o.page==="governance"?"active":""}`,onClick:()=>l({page:"governance"}),children:[c.jsx("span",{className:"dot"}),"Governance"]})]}),c.jsx("div",{style:{marginTop:"auto",padding:"0 8px"},children:c.jsxs("div",{style:{paddingTop:16,borderTop:"1px solid var(--line)",display:"grid",gap:10},children:[c.jsxs("div",{style:{fontSize:12},children:[e.name,c.jsx("div",{style:{fontSize:10.5,color:"var(--text-3)",letterSpacing:".1em",textTransform:"uppercase"},children:e.role})]}),c.jsx("button",{className:"btn sm ghost",onClick:()=>void a(),children:"Sign out"}),c.jsxs("div",{style:{fontSize:10.5,color:"var(--text-3)",lineHeight:1.6},children:["One-week demonstrator · synthetic data",c.jsx("br",{}),"Not a production pilot"]})]})})]}),c.jsxs("main",{className:"main",children:[c.jsxs("div",{className:"synthetic-banner",children:[c.jsx("strong",{children:"SYNTHETIC"}),c.jsx("span",{children:"Every style, measurement, and factory message in this build is invented for demonstration. Nothing here has been validated by a technical designer or a factory."}),c.jsx("span",{style:{marginLeft:"auto",display:"flex",gap:8},children:p.blockers>0&&c.jsxs(st,{tone:"blocker",children:[p.blockers," export blockers"]})})]}),r&&c.jsxs("div",{className:"synthetic-banner",style:{background:"var(--blocker-bg)",borderColor:"rgba(229,72,77,.3)",color:"var(--blocker)"},children:[c.jsx("strong",{style:{color:"var(--blocker)"},children:"REFUSED"}),c.jsx("span",{children:r}),c.jsx("button",{className:"btn sm ghost",style:{marginLeft:"auto"},onClick:s,children:"Dismiss"})]}),c.jsxs("div",{className:"topbar",children:[c.jsxs("div",{className:"crumb",children:[c.jsx("b",{children:t.brand})," / ",t.season," ",t.year,o.page==="style"&&c.jsxs(c.Fragment,{children:[" / ",c.jsx("b",{children:o.id})]}),o.page==="governance"&&c.jsxs(c.Fragment,{children:[" / ",c.jsx("b",{children:"Governance"})]})]}),c.jsx("div",{className:"spacer"}),c.jsx(st,{tone:"gold",children:"Pilot workspace"})]}),c.jsxs("div",{className:"content",children:[o.page==="collection"&&c.jsx(Ly,{onOpen:d=>l({page:"style",id:d})}),o.page==="style"&&c.jsx(tA,{styleId:o.id,onBack:()=>l({page:"collection"})}),o.page==="governance"&&c.jsx(cA,{})]})]})]})})]})}function pA(){return c.jsx(by,{children:c.jsx(hA,{})})}q0(document.getElementById("root")).render(c.jsx(qe.StrictMode,{children:c.jsx(pA,{})}));
