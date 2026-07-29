(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Nm={exports:{}},Il={},Lm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),kv=Symbol.for("react.fragment"),Bv=Symbol.for("react.strict_mode"),zv=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Gv=Symbol.for("react.forward_ref"),Wv=Symbol.for("react.suspense"),jv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),yh=Symbol.iterator;function Yv(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,Um={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Dm}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=zs.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Dm}var qd=$d.prototype=new Fm;qd.constructor=$d;Im(qd,zs.prototype);qd.isPureReactComponent=!0;var Sh=Array.isArray,Om=Object.prototype.hasOwnProperty,Kd={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Om.call(e,i)&&!km.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Wa,type:t,key:s,ref:a,props:r,_owner:Kd.current}}function $v(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qv(""+t.key):e.toString(36)}function Bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Wa:case Ov:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+tc(a,0):i,Sh(r)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),Bo(r,e,n,"",function(u){return u})):r!=null&&(Zd(r)&&(r=$v(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Mh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+tc(s,o);a+=Bo(s,e,n,l,r)}else if(l=Yv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,o++),a+=Bo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},zo={transition:null},Zv={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:zo,ReactCurrentOwner:Kd};function zm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=zs;je.Fragment=kv;je.Profiler=zv;je.PureComponent=$d;je.StrictMode=Bv;je.Suspense=Wv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;je.act=zm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Im({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Om.call(e,l)&&!km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Wa,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:Hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vv,_context:t},t.Consumer=t};je.createElement=Bm;je.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Gv,render:t}};je.isValidElement=Zd;je.lazy=function(t){return{$$typeof:Xv,_payload:{_status:-1,_result:t},_init:Kv}};je.memo=function(t,e){return{$$typeof:jv,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};je.unstable_act=zm;je.useCallback=function(t,e){return ln.current.useCallback(t,e)};je.useContext=function(t){return ln.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};je.useEffect=function(t,e){return ln.current.useEffect(t,e)};je.useId=function(){return ln.current.useId()};je.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return ln.current.useMemo(t,e)};je.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};je.useRef=function(t){return ln.current.useRef(t)};je.useState=function(t){return ln.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return ln.current.useTransition()};je.version="18.3.1";Lm.exports=je;var tt=Lm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=tt,Jv=Symbol.for("react.element"),ex=Symbol.for("react.fragment"),tx=Object.prototype.hasOwnProperty,nx=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ix={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)tx.call(e,i)&&!ix.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jv,type:t,key:s,ref:a,props:r,_owner:nx.current}}Il.Fragment=ex;Il.jsx=Vm;Il.jsxs=Vm;Nm.exports=Il;var c=Nm.exports,Hm={exports:{}},wn={},Gm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var te=O.length;O.push($);e:for(;0<te;){var q=te-1>>>1,ce=O[q];if(0<r(ce,$))O[q]=$,O[te]=ce,te=q;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var $=O[0],te=O.pop();if(te!==$){O[0]=te;e:for(var q=0,ce=O.length,Fe=ce>>>1;q<Fe;){var Ie=2*(q+1)-1,Ge=O[Ie],Z=Ie+1,oe=O[Z];if(0>r(Ge,te))Z<ce&&0>r(oe,Ge)?(O[q]=oe,O[Z]=te,q=Z):(O[q]=Ge,O[Ie]=te,q=Ie);else if(Z<ce&&0>r(oe,te))O[q]=oe,O[Z]=te,q=Z;else break e}}return $}function r(O,$){var te=O.sortIndex-$.sortIndex;return te!==0?te:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,p=null,f=3,m=!1,y=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(O){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=O)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function S(O){if(T=!1,M(O),!y)if(n(l)!==null)y=!0,K(C);else{var $=n(u);$!==null&&G(S,$.startTime-O)}}function C(O,$){y=!1,T&&(T=!1,h(x),x=-1),m=!0;var te=f;try{for(M($),p=n(l);p!==null&&(!(p.expirationTime>$)||O&&!N());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var ce=q(p.expirationTime<=$);$=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(l)&&i(l),M($)}else i(l);p=n(l)}if(p!==null)var Fe=!0;else{var Ie=n(u);Ie!==null&&G(S,Ie.startTime-$),Fe=!1}return Fe}finally{p=null,f=te,m=!1}}var w=!1,b=null,x=-1,R=5,P=-1;function N(){return!(t.unstable_now()-P<R)}function I(){if(b!==null){var O=t.unstable_now();P=O;var $=!0;try{$=b(!0,O)}finally{$?X():(w=!1,b=null)}}else w=!1}var X;if(typeof _=="function")X=function(){_(I)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,B=Q.port2;Q.port1.onmessage=I,X=function(){B.postMessage(null)}}else X=function(){v(I,0)};function K(O){b=O,w||(w=!0,X())}function G(O,$){x=v(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,K(C))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var te=f;f=$;try{return O()}finally{f=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=f;f=O;try{return $()}finally{f=te}},t.unstable_scheduleCallback=function(O,$,te){var q=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?q+te:q):te=q,O){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=te+ce,O={id:d++,callback:$,priorityLevel:O,startTime:te,expirationTime:ce,sortIndex:-1},te>q?(O.sortIndex=te,e(u,O),n(l)===null&&O===n(u)&&(T?(h(x),x=-1):T=!0,G(S,te-q))):(O.sortIndex=ce,e(l,O),y||m||(y=!0,K(C))),O},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(O){var $=f;return function(){var te=f;f=$;try{return O.apply(this,arguments)}finally{f=te}}}})(Wm);Gm.exports=Wm;var rx=Gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx=tt,Tn=rx;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,Ta={};function zr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Ta[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eh={},Th={};function ox(t){return uu.call(Th,t)?!0:uu.call(Eh,t)?!1:ax.test(t)?Th[t]=!0:(Eh[t]=!0,!1)}function lx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cx(t,e,n,i){if(e===null||typeof e>"u"||lx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);jt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Jd);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cx(e,n,r,i)&&(n=null),i||r===null?ox(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),as=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),wh=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=wh&&t[wh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,nc;function la(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function ux(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case as:return"Portal";case du:return"Profiler";case tf:return"StrictMode";case fu:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ym:return(t.displayName||"Context")+".Consumer";case Xm:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:pu(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return pu(t(e))}catch{}}return null}function dx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pu(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fx(t){var e=qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=fx(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function gu(t,e){Zm(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ch(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ca(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function Qm(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hx=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){hx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var px=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(px[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,_s=null,ys=null;function Ph(t){if(t=Ya(t)){if(typeof Eu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Bl(e),Eu(t.stateNode,t.type,e))}}function ig(t){_s?ys?ys.push(t):ys=[t]:_s=t}function rg(){if(_s){var t=_s,e=ys;if(ys=_s=null,Ph(t),e)for(t=0;t<e.length;t++)Ph(e[t])}}function sg(t,e){return t(e)}function ag(){}var sc=!1;function og(t,e,n){if(sc)return t(e,n);sc=!0;try{return sg(t,e,n)}finally{sc=!1,(_s!==null||ys!==null)&&(ag(),rg())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Tu=!1;if(bi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Tu=!1}function mx(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ga=!1,rl=null,sl=!1,wu=null,gx={onError:function(t){ga=!0,rl=t}};function vx(t,e,n,i,r,s,a,o,l){ga=!1,rl=null,mx.apply(gx,arguments)}function xx(t,e,n,i,r,s,a,o,l){if(vx.apply(this,arguments),ga){if(ga){var u=rl;ga=!1,rl=null}else throw Error(se(198));sl||(sl=!0,wu=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nh(t){if(Vr(t)!==t)throw Error(se(188))}function _x(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nh(r),t;if(s===i)return Nh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function cg(t){return t=_x(t),t!==null?ug(t):null}function ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ug(t);if(e!==null)return e;t=t.sibling}return null}var dg=Tn.unstable_scheduleCallback,Lh=Tn.unstable_cancelCallback,yx=Tn.unstable_shouldYield,Sx=Tn.unstable_requestPaint,bt=Tn.unstable_now,Mx=Tn.unstable_getCurrentPriorityLevel,af=Tn.unstable_ImmediatePriority,fg=Tn.unstable_UserBlockingPriority,al=Tn.unstable_NormalPriority,Ex=Tn.unstable_LowPriority,hg=Tn.unstable_IdlePriority,Ul=null,oi=null;function Tx(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Cx,wx=Math.log,Ax=Math.LN2;function Cx(t){return t>>>=0,t===0?32:31-(wx(t)/Ax|0)|0}var io=64,ro=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ua(o):(s&=a,s!==0&&(i=ua(s)))}else a=n&~r,a!==0?i=ua(a):s!==0&&(i=ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Rx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Rx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Px(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,lf,vg,xg,_g,Cu=!1,so=[],er=null,tr=null,nr=null,Ca=new Map,Ra=new Map,$i=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ya(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Lx(t,e,n,i,r){switch(e){case"focusin":return er=qs(er,t,e,n,i,r),!0;case"dragenter":return tr=qs(tr,t,e,n,i,r),!0;case"mouseover":return nr=qs(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,qs(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,qs(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function yg(t){var e=wr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,_g(t.priority,function(){vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mu=i,n.target.dispatchEvent(i),Mu=null}else return e=Ya(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ih(t,e,n){Vo(t)&&n.delete(e)}function Dx(){Cu=!1,er!==null&&Vo(er)&&(er=null),tr!==null&&Vo(tr)&&(tr=null),nr!==null&&Vo(nr)&&(nr=null),Ca.forEach(Ih),Ra.forEach(Ih)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Dx)))}function ba(t){function e(r){return Ks(r,t)}if(0<so.length){Ks(so[0],t);for(var n=1;n<so.length;n++){var i=so[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&Ks(er,t),tr!==null&&Ks(tr,t),nr!==null&&Ks(nr,t),Ca.forEach(e),Ra.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)yg(n),n.blockedOn===null&&$i.shift()}var Ss=Ui.ReactCurrentBatchConfig,ll=!0;function Ix(t,e,n,i){var r=nt,s=Ss.transition;Ss.transition=null;try{nt=1,cf(t,e,n,i)}finally{nt=r,Ss.transition=s}}function Ux(t,e,n,i){var r=nt,s=Ss.transition;Ss.transition=null;try{nt=4,cf(t,e,n,i)}finally{nt=r,Ss.transition=s}}function cf(t,e,n,i){if(ll){var r=Ru(t,e,n,i);if(r===null)gc(t,e,i,cl,n),Dh(t,i);else if(Lx(r,t,e,n,i))i.stopPropagation();else if(Dh(t,i),e&4&&-1<Nx.indexOf(t)){for(;r!==null;){var s=Ya(r);if(s!==null&&gg(s),s=Ru(t,e,n,i),s===null&&gc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var cl=null;function Ru(t,e,n,i){if(cl=null,t=sf(i),t=wr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mx()){case af:return 1;case fg:return 4;case al:case Ex:return 16;case hg:return 536870912;default:return 16}default:return 16}}var Zi=null,uf=null,Ho=null;function Mg(){if(Ho)return Ho;var t,e=uf,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ho=r.slice(t,1<i?1-i:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function Uh(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ao:Uh,this.isPropagationStopped=Uh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=An(Vs),Xa=_t({},Vs,{view:0,detail:0}),Fx=An(Xa),oc,lc,Zs,Fl=_t({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(oc=t.screenX-Zs.screenX,lc=t.screenY-Zs.screenY):lc=oc=0,Zs=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Fh=An(Fl),Ox=_t({},Fl,{dataTransfer:0}),kx=An(Ox),Bx=_t({},Xa,{relatedTarget:0}),cc=An(Bx),zx=_t({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=An(zx),Hx=_t({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gx=An(Hx),Wx=_t({},Vs,{data:0}),Oh=An(Wx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yx[t])?!!e[t]:!1}function ff(){return $x}var qx=_t({},Xa,{key:function(t){if(t.key){var e=jx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kx=An(qx),Zx=_t({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=An(Zx),Qx=_t({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),Jx=An(Qx),e_=_t({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),t_=An(e_),n_=_t({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i_=An(n_),r_=[9,13,27,32],hf=bi&&"CompositionEvent"in window,va=null;bi&&"documentMode"in document&&(va=document.documentMode);var s_=bi&&"TextEvent"in window&&!va,Eg=bi&&(!hf||va&&8<va&&11>=va),Bh=" ",zh=!1;function Tg(t,e){switch(t){case"keyup":return r_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function a_(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(zh=!0,Bh);case"textInput":return t=e.data,t===Bh&&zh?null:t;default:return null}}function o_(t,e){if(ls)return t==="compositionend"||!hf&&Tg(t,e)?(t=Mg(),Ho=uf=Zi=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var l_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l_[t.type]:e==="textarea"}function Ag(t,e,n,i){ig(i),e=ul(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Pa=null;function c_(t){Og(t,0)}function Ol(t){var e=ds(t);if(Km(e))return t}function u_(t,e){if(t==="change")return e}var Cg=!1;if(bi){var uc;if(bi){var dc="oninput"in document;if(!dc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),dc=typeof Hh.oninput=="function"}uc=dc}else uc=!1;Cg=uc&&(!document.documentMode||9<document.documentMode)}function Gh(){xa&&(xa.detachEvent("onpropertychange",Rg),Pa=xa=null)}function Rg(t){if(t.propertyName==="value"&&Ol(Pa)){var e=[];Ag(e,Pa,t,sf(t)),og(c_,e)}}function d_(t,e,n){t==="focusin"?(Gh(),xa=e,Pa=n,xa.attachEvent("onpropertychange",Rg)):t==="focusout"&&Gh()}function f_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(Pa)}function h_(t,e){if(t==="click")return Ol(e)}function p_(t,e){if(t==="input"||t==="change")return Ol(e)}function m_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:m_;function Na(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jh(t,e){var n=Wh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function g_(t){var e=Pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jh(n,s);var a=jh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v_=bi&&"documentMode"in document&&11>=document.documentMode,cs=null,bu=null,_a=null,Pu=!1;function Xh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||cs==null||cs!==il(i)||(i=cs,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Na(_a,i)||(_a=i,i=ul(bu,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=cs)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},fc={},Ng={};bi&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function kl(t){if(fc[t])return fc[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ng)return fc[t]=e[n];return t}var Lg=kl("animationend"),Dg=kl("animationiteration"),Ig=kl("animationstart"),Ug=kl("transitionend"),Fg=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Fg.set(t,e),zr(e,[t])}for(var hc=0;hc<Yh.length;hc++){var pc=Yh[hc],x_=pc.toLowerCase(),__=pc[0].toUpperCase()+pc.slice(1);fr(x_,"on"+__)}fr(Lg,"onAnimationEnd");fr(Dg,"onAnimationIteration");fr(Ig,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Ug,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function $h(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xx(i,e,void 0,t),t.currentTarget=null}function Og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;$h(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;$h(r,o,u),s=l}}}if(sl)throw t=wu,sl=!1,wu=null,t}function dt(t,e){var n=e[Uu];n===void 0&&(n=e[Uu]=new Set);var i=t+"__bubble";n.has(i)||(kg(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),kg(n,t,i,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[lo]){t[lo]=!0,jm.forEach(function(n){n!=="selectionchange"&&(y_.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,mc("selectionchange",!1,e))}}function kg(t,e,n,i){switch(Sg(e)){case 1:var r=Ix;break;case 4:r=Ux;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=wr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}og(function(){var u=s,d=sf(n),p=[];e:{var f=Fg.get(t);if(f!==void 0){var m=df,y=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":m=Kx;break;case"focusin":y="focus",m=cc;break;case"focusout":y="blur",m=cc;break;case"beforeblur":case"afterblur":m=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Jx;break;case Lg:case Dg:case Ig:m=Vx;break;case Ug:m=t_;break;case"scroll":m=Fx;break;case"wheel":m=i_;break;case"copy":case"cut":case"paste":m=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kh}var T=(e&4)!==0,v=!T&&t==="scroll",h=T?f!==null?f+"Capture":null:f;T=[];for(var _=u,M;_!==null;){M=_;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,h!==null&&(S=Aa(_,h),S!=null&&T.push(Da(_,S,M)))),v)break;_=_.return}0<T.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:T}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Mu&&(y=n.relatedTarget||n.fromElement)&&(wr(y)||y[Pi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?wr(y):null,y!==null&&(v=Vr(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(T=Fh,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(T=kh,S="onPointerLeave",h="onPointerEnter",_="pointer"),v=m==null?f:ds(m),M=y==null?f:ds(y),f=new T(S,_+"leave",m,n,d),f.target=v,f.relatedTarget=M,S=null,wr(d)===u&&(T=new T(h,_+"enter",y,n,d),T.target=M,T.relatedTarget=v,S=T),v=S,m&&y)t:{for(T=m,h=y,_=0,M=T;M;M=jr(M))_++;for(M=0,S=h;S;S=jr(S))M++;for(;0<_-M;)T=jr(T),_--;for(;0<M-_;)h=jr(h),M--;for(;_--;){if(T===h||h!==null&&T===h.alternate)break t;T=jr(T),h=jr(h)}T=null}else T=null;m!==null&&qh(p,f,m,T,!1),y!==null&&v!==null&&qh(p,v,y,T,!0)}}e:{if(f=u?ds(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=u_;else if(Vh(f))if(Cg)C=p_;else{C=f_;var w=d_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=h_);if(C&&(C=C(t,u))){Ag(p,C,n,d);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&vu(f,"number",f.value)}switch(w=u?ds(u):window,t){case"focusin":(Vh(w)||w.contentEditable==="true")&&(cs=w,bu=u,_a=null);break;case"focusout":_a=bu=cs=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Xh(p,n,d);break;case"selectionchange":if(v_)break;case"keydown":case"keyup":Xh(p,n,d)}var b;if(hf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ls?Tg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Eg&&n.locale!=="ko"&&(ls||x!=="onCompositionStart"?x==="onCompositionEnd"&&ls&&(b=Mg()):(Zi=d,uf="value"in Zi?Zi.value:Zi.textContent,ls=!0)),w=ul(u,x),0<w.length&&(x=new Oh(x,t,null,n,d),p.push({event:x,listeners:w}),b?x.data=b:(b=wg(n),b!==null&&(x.data=b)))),(b=s_?a_(t,n):o_(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(d=new Oh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=b))}Og(p,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Aa(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Aa(n,s),l!=null&&a.unshift(Da(n,l,o))):r||(l=Aa(n,s),l!=null&&a.push(Da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var S_=/\r\n?/g,M_=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(S_,`
`).replace(M_,"")}function co(t,e,n){if(e=Kh(e),Kh(t)!==e&&n)throw Error(se(425))}function dl(){}var Nu=null,Lu=null;function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,Zh=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof Zh<"u"?function(t){return Zh.resolve(null).then(t).catch(w_)}:Iu;function w_(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),ri="__reactFiber$"+Hs,Ia="__reactProps$"+Hs,Pi="__reactContainer$"+Hs,Uu="__reactEvents$"+Hs,A_="__reactListeners$"+Hs,C_="__reactHandles$"+Hs;function wr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qh(t);t!==null;){if(n=t[ri])return n;t=Qh(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[ri]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Bl(t){return t[Ia]||null}var Fu=[],fs=-1;function hr(t){return{current:t}}function ft(t){0>fs||(t.current=Fu[fs],Fu[fs]=null,fs--)}function ct(t,e){fs++,Fu[fs]=t.current,t.current=e}var cr={},tn=hr(cr),hn=hr(!1),Dr=cr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function fl(){ft(hn),ft(tn)}function Jh(t,e,n){if(tn.current!==cr)throw Error(se(168));ct(tn,e),ct(hn,n)}function Bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,dx(t)||"Unknown",r));return _t({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Dr=tn.current,ct(tn,t),ct(hn,hn.current),!0}function ep(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Bg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ft(hn),ft(tn),ct(tn,t)):ft(hn),ct(hn,n)}var Si=null,zl=!1,xc=!1;function zg(t){Si===null?Si=[t]:Si.push(t)}function R_(t){zl=!0,zg(t)}function pr(){if(!xc&&Si!==null){xc=!0;var t=0,e=nt;try{var n=Si;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,zl=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),dg(af,pr),r}finally{nt=e,xc=!1}}return null}var hs=[],ps=0,pl=null,ml=0,bn=[],Pn=0,Ir=null,Ei=1,Ti="";function yr(t,e){hs[ps++]=ml,hs[ps++]=pl,pl=t,ml=e}function Vg(t,e,n){bn[Pn++]=Ei,bn[Pn++]=Ti,bn[Pn++]=Ir,Ir=t;var i=Ei;t=Ti;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-Xn(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function mf(t){t.return!==null&&(yr(t,1),Vg(t,1,0))}function gf(t){for(;t===pl;)pl=hs[--ps],hs[ps]=null,ml=hs[--ps],hs[ps]=null;for(;t===Ir;)Ir=bn[--Pn],bn[Pn]=null,Ti=bn[--Pn],bn[Pn]=null,Ei=bn[--Pn],bn[Pn]=null}var En=null,Mn=null,ht=!1,Gn=null;function Hg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ku(t){if(ht){var e=Mn;if(e){var n=e;if(!tp(t,e)){if(Ou(t))throw Error(se(418));e=ir(n.nextSibling);var i=En;e&&tp(t,e)?Hg(i,n):(t.flags=t.flags&-4097|2,ht=!1,En=t)}}else{if(Ou(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,En=t}}}function np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function uo(t){if(t!==En)return!1;if(!ht)return np(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Du(t.type,t.memoizedProps)),e&&(e=Mn)){if(Ou(t))throw Gg(),Error(se(418));for(;e;)Hg(t,e),e=ir(e.nextSibling)}if(np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?ir(t.stateNode.nextSibling):null;return!0}function Gg(){for(var t=Mn;t;)t=ir(t.nextSibling)}function bs(){Mn=En=null,ht=!1}function vf(t){Gn===null?Gn=[t]:Gn.push(t)}var b_=Ui.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ip(t){var e=t._init;return e(t._payload)}function Wg(t){function e(h,_){if(t){var M=h.deletions;M===null?(h.deletions=[_],h.flags|=16):M.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=or(h,_),h.index=0,h.sibling=null,h}function s(h,_,M){return h.index=M,t?(M=h.alternate,M!==null?(M=M.index,M<_?(h.flags|=2,_):M):(h.flags|=2,_)):(h.flags|=1048576,_)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,_,M,S){return _===null||_.tag!==6?(_=wc(M,h.mode,S),_.return=h,_):(_=r(_,M),_.return=h,_)}function l(h,_,M,S){var C=M.type;return C===os?d(h,_,M.props.children,S,M.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&ip(C)===_.type)?(S=r(_,M.props),S.ref=Qs(h,_,M),S.return=h,S):(S=Ko(M.type,M.key,M.props,null,h.mode,S),S.ref=Qs(h,_,M),S.return=h,S)}function u(h,_,M,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=Ac(M,h.mode,S),_.return=h,_):(_=r(_,M.children||[]),_.return=h,_)}function d(h,_,M,S,C){return _===null||_.tag!==7?(_=Nr(M,h.mode,S,C),_.return=h,_):(_=r(_,M),_.return=h,_)}function p(h,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return _=wc(""+_,h.mode,M),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case eo:return M=Ko(_.type,_.key,_.props,null,h.mode,M),M.ref=Qs(h,null,_),M.return=h,M;case as:return _=Ac(_,h.mode,M),_.return=h,_;case Xi:var S=_._init;return p(h,S(_._payload),M)}if(ca(_)||Ys(_))return _=Nr(_,h.mode,M,null),_.return=h,_;fo(h,_)}return null}function f(h,_,M,S){var C=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return C!==null?null:o(h,_,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case eo:return M.key===C?l(h,_,M,S):null;case as:return M.key===C?u(h,_,M,S):null;case Xi:return C=M._init,f(h,_,C(M._payload),S)}if(ca(M)||Ys(M))return C!==null?null:d(h,_,M,S,null);fo(h,M)}return null}function m(h,_,M,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(M)||null,o(_,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case eo:return h=h.get(S.key===null?M:S.key)||null,l(_,h,S,C);case as:return h=h.get(S.key===null?M:S.key)||null,u(_,h,S,C);case Xi:var w=S._init;return m(h,_,M,w(S._payload),C)}if(ca(S)||Ys(S))return h=h.get(M)||null,d(_,h,S,C,null);fo(_,S)}return null}function y(h,_,M,S){for(var C=null,w=null,b=_,x=_=0,R=null;b!==null&&x<M.length;x++){b.index>x?(R=b,b=null):R=b.sibling;var P=f(h,b,M[x],S);if(P===null){b===null&&(b=R);break}t&&b&&P.alternate===null&&e(h,b),_=s(P,_,x),w===null?C=P:w.sibling=P,w=P,b=R}if(x===M.length)return n(h,b),ht&&yr(h,x),C;if(b===null){for(;x<M.length;x++)b=p(h,M[x],S),b!==null&&(_=s(b,_,x),w===null?C=b:w.sibling=b,w=b);return ht&&yr(h,x),C}for(b=i(h,b);x<M.length;x++)R=m(b,h,x,M[x],S),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?x:R.key),_=s(R,_,x),w===null?C=R:w.sibling=R,w=R);return t&&b.forEach(function(N){return e(h,N)}),ht&&yr(h,x),C}function T(h,_,M,S){var C=Ys(M);if(typeof C!="function")throw Error(se(150));if(M=C.call(M),M==null)throw Error(se(151));for(var w=C=null,b=_,x=_=0,R=null,P=M.next();b!==null&&!P.done;x++,P=M.next()){b.index>x?(R=b,b=null):R=b.sibling;var N=f(h,b,P.value,S);if(N===null){b===null&&(b=R);break}t&&b&&N.alternate===null&&e(h,b),_=s(N,_,x),w===null?C=N:w.sibling=N,w=N,b=R}if(P.done)return n(h,b),ht&&yr(h,x),C;if(b===null){for(;!P.done;x++,P=M.next())P=p(h,P.value,S),P!==null&&(_=s(P,_,x),w===null?C=P:w.sibling=P,w=P);return ht&&yr(h,x),C}for(b=i(h,b);!P.done;x++,P=M.next())P=m(b,h,x,P.value,S),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?x:P.key),_=s(P,_,x),w===null?C=P:w.sibling=P,w=P);return t&&b.forEach(function(I){return e(h,I)}),ht&&yr(h,x),C}function v(h,_,M,S){if(typeof M=="object"&&M!==null&&M.type===os&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case eo:e:{for(var C=M.key,w=_;w!==null;){if(w.key===C){if(C=M.type,C===os){if(w.tag===7){n(h,w.sibling),_=r(w,M.props.children),_.return=h,h=_;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&ip(C)===w.type){n(h,w.sibling),_=r(w,M.props),_.ref=Qs(h,w,M),_.return=h,h=_;break e}n(h,w);break}else e(h,w);w=w.sibling}M.type===os?(_=Nr(M.props.children,h.mode,S,M.key),_.return=h,h=_):(S=Ko(M.type,M.key,M.props,null,h.mode,S),S.ref=Qs(h,_,M),S.return=h,h=S)}return a(h);case as:e:{for(w=M.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){n(h,_.sibling),_=r(_,M.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Ac(M,h.mode,S),_.return=h,h=_}return a(h);case Xi:return w=M._init,v(h,_,w(M._payload),S)}if(ca(M))return y(h,_,M,S);if(Ys(M))return T(h,_,M,S);fo(h,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,M),_.return=h,h=_):(n(h,_),_=wc(M,h.mode,S),_.return=h,h=_),a(h)):n(h,_)}return v}var Ps=Wg(!0),jg=Wg(!1),gl=hr(null),vl=null,ms=null,xf=null;function _f(){xf=ms=vl=null}function yf(t){var e=gl.current;ft(gl),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){vl=t,xf=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(vl===null)throw Error(se(308));ms=t,vl.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var Ar=null;function Sf(t){Ar===null?Ar=[t]:Ar.push(t)}function Xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}function rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,T=o;switch(f=e,m=n,T.tag){case 1:if(y=T.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=T.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=_t({},p,f);break e;case 2:Yi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=m,l=p):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=a,t.lanes=a,t.memoizedState=p}}function sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var $a={},li=hr($a),Ua=hr($a),Fa=hr($a);function Cr(t){if(t===$a)throw Error(se(174));return t}function Ef(t,e){switch(ct(Fa,e),ct(Ua,t),ct(li,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_u(e,t)}ft(li),ct(li,e)}function Ns(){ft(li),ft(Ua),ft(Fa)}function $g(t){Cr(Fa.current);var e=Cr(li.current),n=_u(e,t.type);e!==n&&(ct(Ua,t),ct(li,n))}function Tf(t){Ua.current===t&&(ft(li),ft(Ua))}var gt=hr(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function wf(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var jo=Ui.ReactCurrentDispatcher,yc=Ui.ReactCurrentBatchConfig,Ur=0,xt=null,Dt=null,kt=null,yl=!1,ya=!1,Oa=0,P_=0;function $t(){throw Error(se(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Cf(t,e,n,i,r,s){if(Ur=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?I_:U_,t=n(i,r),ya){s=0;do{if(ya=!1,Oa=0,25<=s)throw Error(se(301));s+=1,kt=Dt=null,e.updateQueue=null,jo.current=F_,t=n(i,r)}while(ya)}if(jo.current=Sl,e=Dt!==null&&Dt.next!==null,Ur=0,kt=Dt=xt=null,yl=!1,e)throw Error(se(300));return t}function Rf(){var t=Oa!==0;return Oa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?xt.memoizedState=kt=t:kt=kt.next=t,kt}function Un(){if(Dt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=kt===null?xt.memoizedState:kt.next;if(e!==null)kt=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?xt.memoizedState=kt=t:kt=kt.next=t}return kt}function ka(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Un(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Ur&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,xt.lanes|=d,Fr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,$n(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Un(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);$n(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function qg(){}function Kg(t,e){var n=xt,i=Un(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,bf(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,Qg.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(se(349));Ur&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,e0(e)&&t0(t)}function Jg(t,e,n){return n(function(){e0(e)&&t0(t)})}function e0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function t0(t){var e=Ni(t,1);e!==null&&Yn(e,t,1,-1)}function ap(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=D_.bind(null,xt,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n0(){return Un().memoizedState}function Xo(t,e,n,i){var r=ni();xt.flags|=t,r.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function Vl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Af(i,a.deps)){r.memoizedState=Ba(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Ba(1|e,n,s,i)}function op(t,e){return Xo(8390656,8,t,e)}function bf(t,e){return Vl(2048,8,t,e)}function i0(t,e){return Vl(4,2,t,e)}function r0(t,e){return Vl(4,4,t,e)}function s0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,s0.bind(null,e,t),n)}function Pf(){}function o0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return Ur&21?($n(n,e)||(n=pg(),xt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function N_(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{nt=n,yc.transition=i}}function u0(){return Un().memoizedState}function L_(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},d0(t))f0(e,n);else if(n=Xg(t,e,n,i),n!==null){var r=sn();Yn(n,t,i,r),h0(n,e,i)}}function D_(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(t))f0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,$n(o,a)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Xg(t,e,r,i),n!==null&&(r=sn(),Yn(n,t,i,r),h0(n,e,i))}}function d0(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function f0(t,e){ya=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}var Sl={readContext:In,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},I_={readContext:In,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,s0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L_.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:Pf,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=N_.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ni();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Bt===null)throw Error(se(349));Ur&30||Zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,op(Jg.bind(null,i,s,t),[t]),i.flags|=2048,Ba(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Bt.identifierPrefix;if(ht){var n=Ti,i=Ei;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U_={readContext:In,useCallback:o0,useContext:In,useEffect:bf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Sc,useRef:n0,useState:function(){return Sc(ka)},useDebugValue:Pf,useDeferredValue:function(t){var e=Un();return c0(e,Dt.memoizedState,t)},useTransition:function(){var t=Sc(ka)[0],e=Un().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:Kg,useId:u0,unstable_isNewReconciler:!1},F_={readContext:In,useCallback:o0,useContext:In,useEffect:bf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Mc,useRef:n0,useState:function(){return Mc(ka)},useDebugValue:Pf,useDeferredValue:function(t){var e=Un();return Dt===null?e.memoizedState=t:c0(e,Dt.memoizedState,t)},useTransition:function(){var t=Mc(ka)[0],e=Un().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:Kg,useId:u0,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ar(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Yn(e,t,r,i),Wo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ar(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Yn(e,t,r,i),Wo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=ar(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Yn(e,t,i,n),Wo(e,t,i))}};function lp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function p0(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=pn(e)?Dr:tn.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=pn(e)?Dr:tn.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=ux(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function m0(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,Qu=i),Hu(t,e)},n}function g0(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hu(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new O_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Z_.bind(null,t,e,n),e.then(t,t))}function dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var k_=Ui.ReactCurrentOwner,fn=!1;function rn(t,e,n,i){e.child=t===null?jg(e,null,n,i):Ps(e,t.child,n,i)}function hp(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Cf(t,e,n,i,s,r),n=Rf(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&n&&mf(e),e.flags|=1,rn(t,e,i,r),e.child)}function pp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v0(t,e,s,i,r)):(t=Ko(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function v0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return Gu(t,e,n,i,r)}function x0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(vs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(vs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(vs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(vs,_n),_n|=i;return rn(t,e,r,n),e.child}function _0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gu(t,e,n,i,r){var s=pn(n)?Dr:tn.current;return s=Rs(e,s),Ms(e,r),n=Cf(t,e,n,i,s,r),i=Rf(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&i&&mf(e),e.flags|=1,rn(t,e,n,r),e.child)}function mp(t,e,n,i,r){if(pn(n)){var s=!0;hl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Yo(t,e),p0(e,n,i),Vu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=pn(n)?Dr:tn.current,u=Rs(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&cp(e,a,i,u),Yi=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||hn.current||Yi?(typeof d=="function"&&(zu(e,n,d,i),l=e.memoizedState),(o=Yi||lp(e,n,o,i,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Yg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Vn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=pn(n)?Dr:tn.current,l=Rs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&cp(e,a,i,l),Yi=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var y=e.memoizedState;o!==p||f!==y||hn.current||Yi?(typeof m=="function"&&(zu(e,n,m,i),y=e.memoizedState),(u=Yi||lp(e,n,u,i,f,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wu(t,e,n,i,s,r)}function Wu(t,e,n,i,r,s){_0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ep(e,n,!1),Li(t,e,s);i=e.stateNode,k_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&ep(e,n,!0),e.child}function y0(t){var e=t.stateNode;e.pendingContext?Jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jh(t,e.context,!1),Ef(t,e.containerInfo)}function gp(t,e,n,i,r){return bs(),vf(r),e.flags|=256,rn(t,e,n,i),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function S0(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(gt,r&1),t===null)return ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=jl(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xu(n),e.memoizedState=ju,t):Nf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return B_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=or(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Xu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ju,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,i){return i!==null&&vf(i),Ps(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(se(422))),ho(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,a),e.child.memoizedState=Xu(a),e.memoizedState=ju,s);if(!(e.mode&1))return ho(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Ec(s,i,void 0),ho(t,e,a,i)}if(o=(a&t.childLanes)!==0,fn||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),Yn(i,t,r,-1))}return Of(),i=Ec(Error(se(421))),ho(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Q_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=ir(r.nextSibling),En=e,ht=!0,Gn=null,t!==null&&(bn[Pn++]=Ei,bn[Pn++]=Ti,bn[Pn++]=Ir,Ei=t.id,Ti=t.overflow,Ir=e),e=Nf(e,i.children),e.flags|=4096,e)}function vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bu(t.return,e,n)}function Tc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,n,e);else if(t.tag===19)vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&_l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&_l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tc(e,!0,n,null,s);break;case"together":Tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z_(t,e,n){switch(e.tag){case 3:y0(e),bs();break;case 5:$g(e);break;case 1:pn(e.type)&&hl(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?S0(t,e,n):(ct(gt,gt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);ct(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,x0(t,e,n)}return Li(t,e,n)}var E0,Yu,T0,w0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};T0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(li.current);var s=null;switch(n){case"input":r=mu(t,r),i=mu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}yu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};w0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V_(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return pn(e.type)&&fl(),qt(e),null;case 3:return i=e.stateNode,Ns(),ft(hn),ft(tn),wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(td(Gn),Gn=null))),Yu(t,e),qt(e),null;case 5:Tf(e);var r=Cr(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)T0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return qt(e),null}if(t=Cr(li.current),uo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)dt(da[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Ah(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Rh(i,s),dt("invalid",i)}yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",""+o]):Ta.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":to(i),Ch(i,s,!0);break;case"textarea":to(i),bh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Ia]=i,E0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Su(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)dt(da[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Ah(t,i),r=mu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Rh(t,i),r=xu(t,i),dt("invalid",t);break;default:r=i}yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&ef(t,s,l,a))}switch(n){case"input":to(t),Ch(t,i,!1);break;case"textarea":to(t),bh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)w0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Cr(Fa.current),Cr(li.current),uo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:co(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Mn!==null&&e.mode&1&&!(e.flags&128))Gg(),bs(),e.flags|=98560,s=!1;else if(s=uo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ri]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Gn!==null&&(td(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?It===0&&(It=3):Of())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ns(),Yu(t,e),t===null&&La(e.stateNode.containerInfo),qt(e),null;case 10:return yf(e.type._context),qt(e),null;case 17:return pn(e.type)&&fl(),qt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Js(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=_l(t),a!==null){for(e.flags|=128,Js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Ds&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=_l(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return qt(e),null}else 2*bt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=gt.current,ct(gt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function H_(t,e){switch(gf(e),e.tag){case 1:return pn(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ft(hn),ft(tn),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return Ns(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var po=!1,Jt=!1,G_=typeof WeakSet=="function"?WeakSet:Set,Se=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function $u(t,e,n){try{n()}catch(i){wt(t,e,i)}}var xp=!1;function W_(t,e){if(Nu=ll,t=Pg(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},ll=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var T=y.memoizedProps,v=y.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?T:Vn(e.type,T),v);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){wt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return y=xp,xp=!1,y}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$u(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Ia],delete e[Uu],delete e[A_],delete e[C_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var Vt=null,Hn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Jt||gs(n,e);case 6:var i=Vt,r=Hn;Vt=null,Bi(t,e,n),Vt=i,Hn=r,Vt!==null&&(Hn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Hn?(t=Vt,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),ba(t)):vc(Vt,n.stateNode));break;case 4:i=Vt,r=Hn,Vt=n.stateNode.containerInfo,Hn=!0,Bi(t,e,n),Vt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$u(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Jt&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){wt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Bi(t,e,n),Jt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G_),e.forEach(function(i){var r=J_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Vt=o.stateNode,Hn=!1;break e;case 3:Vt=o.stateNode.containerInfo,Hn=!0;break e;case 4:Vt=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Vt===null)throw Error(se(160));R0(s,a,r),Vt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Qn(t),i&4){try{Sa(3,t,t.return),Gl(3,t)}catch(T){wt(t,t.return,T)}try{Sa(5,t,t.return)}catch(T){wt(t,t.return,T)}}break;case 1:On(e,t),Qn(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(On(e,t),Qn(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(T){wt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Zm(r,s),Su(o,a);var u=Su(o,s);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?ng(r,p):d==="dangerouslySetInnerHTML"?eg(r,p):d==="children"?wa(r,p):ef(r,d,p,u)}switch(o){case"input":gu(r,s);break;case"textarea":Qm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?xs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(T){wt(t,t.return,T)}}break;case 6:if(On(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){wt(t,t.return,T)}}break;case 3:if(On(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(T){wt(t,t.return,T)}break;case 4:On(e,t),Qn(t);break;case 13:On(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(If=bt())),i&4&&yp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(u=Jt)||d,On(e,t),Jt=u):On(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(p=Se=d;Se!==null;){switch(f=Se,m=f.child,f.tag){case 0:case 11:case 14:case 15:Sa(4,f,f.return);break;case 1:gs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(T){wt(i,n,T)}}break;case 5:gs(f,f.return);break;case 22:if(f.memoizedState!==null){Mp(p);continue}}m!==null?(m.return=f,Se=m):Mp(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tg("display",a))}catch(T){wt(t,t.return,T)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(T){wt(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:On(e,t),Qn(t),i&4&&yp(t);break;case 21:break;default:On(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=_p(t);Zu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=_p(t);Ku(t,o,a);break;default:throw Error(se(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function j_(t,e,n){Se=t,P0(t)}function P0(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=po;var u=Jt;if(po=a,(Jt=l)&&!u)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Ep(r):l!==null?(l.return=a,Se=l):Ep(r);for(;s!==null;)Se=s,P0(s),s=s.sibling;Se=r,po=o,Jt=u}Sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Sp(t)}}function Sp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ba(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Jt||e.flags&512&&qu(e)}catch(f){wt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Mp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Ep(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{qu(e)}catch(l){wt(e,s,l)}break;case 5:var a=e.return;try{qu(e)}catch(l){wt(e,a,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var X_=Math.ceil,Ml=Ui.ReactCurrentDispatcher,Lf=Ui.ReactCurrentOwner,Dn=Ui.ReactCurrentBatchConfig,Ze=0,Bt=null,Lt=null,Gt=0,_n=0,vs=hr(0),It=0,za=null,Fr=0,Wl=0,Df=0,Ma=null,dn=null,If=0,Ds=1/0,yi=null,El=!1,Qu=null,sr=null,mo=!1,Qi=null,Tl=0,Ea=0,Ju=null,$o=-1,qo=0;function sn(){return Ze&6?bt():$o!==-1?$o:$o=bt()}function ar(t){return t.mode&1?Ze&2&&Gt!==0?Gt&-Gt:b_.transition!==null?(qo===0&&(qo=pg()),qo):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function Yn(t,e,n,i){if(50<Ea)throw Ea=0,Ju=null,Error(se(185));ja(t,n,i),(!(Ze&2)||t!==Bt)&&(t===Bt&&(!(Ze&2)&&(Wl|=n),It===4&&qi(t,Gt)),mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ds=bt()+500,zl&&pr()))}function mn(t,e){var n=t.callbackNode;bx(t,e);var i=ol(t,t===Bt?Gt:0);if(i===0)n!==null&&Lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lh(n),e===1)t.tag===0?R_(Tp.bind(null,t)):zg(Tp.bind(null,t)),T_(function(){!(Ze&6)&&pr()}),n=null;else{switch(mg(i)){case 1:n=af;break;case 4:n=fg;break;case 16:n=al;break;case 536870912:n=hg;break;default:n=al}n=k0(n,N0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N0(t,e){if($o=-1,qo=0,Ze&6)throw Error(se(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=ol(t,t===Bt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Ze;Ze|=2;var s=D0();(Bt!==t||Gt!==e)&&(yi=null,Ds=bt()+500,Pr(t,e));do try{q_();break}catch(o){L0(t,o)}while(!0);_f(),Ml.current=s,Ze=r,Lt!==null?e=0:(Bt=null,Gt=0,e=It)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=ed(t,r))),e===1)throw n=za,Pr(t,0),qi(t,i),mn(t,bt()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y_(r)&&(e=wl(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=ed(t,s))),e===1))throw n=za,Pr(t,0),qi(t,i),mn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Sr(t,dn,yi);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=If+500-bt(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Iu(Sr.bind(null,t,dn,yi),e);break}Sr(t,dn,yi);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X_(i/1960))-i,10<i){t.timeoutHandle=Iu(Sr.bind(null,t,dn,yi),i);break}Sr(t,dn,yi);break;case 5:Sr(t,dn,yi);break;default:throw Error(se(329))}}}return mn(t,bt()),t.callbackNode===n?N0.bind(null,t):null}function ed(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=dn,dn=n,e!==null&&td(e)),t}function td(t){dn===null?dn=t:dn.push.apply(dn,t)}function Y_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Df,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Tp(t){if(Ze&6)throw Error(se(327));Es();var e=ol(t,0);if(!(e&1))return mn(t,bt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=ed(t,i))}if(n===1)throw n=za,Pr(t,0),qi(t,e),mn(t,bt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,dn,yi),mn(t,bt()),null}function Uf(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ds=bt()+500,zl&&pr())}}function Or(t){Qi!==null&&Qi.tag===0&&!(Ze&6)&&Es();var e=Ze;Ze|=1;var n=Dn.transition,i=nt;try{if(Dn.transition=null,nt=1,t)return t()}finally{nt=i,Dn.transition=n,Ze=e,!(Ze&6)&&pr()}}function Ff(){_n=vs.current,ft(vs)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E_(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Ns(),ft(hn),ft(tn),wf();break;case 5:Tf(i);break;case 4:Ns();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:yf(i.type._context);break;case 22:case 23:Ff()}n=n.return}if(Bt=t,Lt=t=or(t.current,null),Gt=_n=e,It=0,za=null,Df=Wl=Fr=0,dn=Ma=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ar=null}return t}function L0(t,e){do{var n=Lt;try{if(_f(),jo.current=Sl,yl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Ur=0,kt=Dt=xt=null,ya=!1,Oa=0,Lf.current=null,n===null||n.return===null){It=1,za=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Gt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=dp(a);if(m!==null){m.flags&=-257,fp(m,a,o,s,e),m.mode&1&&up(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var T=new Set;T.add(l),e.updateQueue=T}else y.add(l);break e}else{if(!(e&1)){up(s,u,e),Of();break e}l=Error(se(426))}}else if(ht&&o.mode&1){var v=dp(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),fp(v,a,o,s,e),vf(Ls(l,o));break e}}s=l=Ls(l,o),It!==4&&(It=2),Ma===null?Ma=[s]:Ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=m0(s,l,e);rp(s,h);break e;case 1:o=l;var _=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(sr===null||!sr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=g0(s,o,e);rp(s,S);break e}}s=s.return}while(s!==null)}U0(n)}catch(C){e=C,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function D0(){var t=Ml.current;return Ml.current=Sl,t===null?Sl:t}function Of(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(Fr&268435455)&&!(Wl&268435455)||qi(Bt,Gt)}function wl(t,e){var n=Ze;Ze|=2;var i=D0();(Bt!==t||Gt!==e)&&(yi=null,Pr(t,e));do try{$_();break}catch(r){L0(t,r)}while(!0);if(_f(),Ze=n,Ml.current=i,Lt!==null)throw Error(se(261));return Bt=null,Gt=0,It}function $_(){for(;Lt!==null;)I0(Lt)}function q_(){for(;Lt!==null&&!yx();)I0(Lt)}function I0(t){var e=O0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?U0(t):Lt=e,Lf.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H_(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Lt=null;return}}else if(n=V_(n,e,_n),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);It===0&&(It=5)}function Sr(t,e,n){var i=nt,r=Dn.transition;try{Dn.transition=null,nt=1,K_(t,e,n,i)}finally{Dn.transition=r,nt=i}return null}function K_(t,e,n,i){do Es();while(Qi!==null);if(Ze&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Px(t,s),t===Bt&&(Lt=Bt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,k0(al,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=nt;nt=1;var o=Ze;Ze|=4,Lf.current=null,W_(t,n),b0(n,t),g_(Lu),ll=!!Nu,Lu=Nu=null,t.current=n,j_(n),Sx(),Ze=o,nt=a,Dn.transition=s}else t.current=n;if(mo&&(mo=!1,Qi=t,Tl=r),s=t.pendingLanes,s===0&&(sr=null),Tx(n.stateNode),mn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=Qu,Qu=null,t;return Tl&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===Ju?Ea++:(Ea=0,Ju=t):Ea=0,pr(),null}function Es(){if(Qi!==null){var t=mg(Tl),e=Dn.transition,n=nt;try{if(Dn.transition=null,nt=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Tl=0,Ze&6)throw Error(se(331));var r=Ze;for(Ze|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Se=u;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:Sa(8,d,s)}var p=d.child;if(p!==null)p.return=d,Se=p;else for(;Se!==null;){d=Se;var f=d.sibling,m=d.return;if(A0(d),d===u){Se=null;break}if(f!==null){f.return=m,Se=f;break}Se=m}}}var y=s.alternate;if(y!==null){var T=y.child;if(T!==null){y.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){a=Se;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Se=M;else e:for(a=_;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gl(9,o)}}catch(C){wt(o,o.return,C)}if(o===a){Se=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Se=S;break e}Se=o.return}}if(Ze=r,pr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{nt=n,Dn.transition=e}}return!1}function wp(t,e,n){e=Ls(n,e),e=m0(t,e,1),t=rr(t,e,1),e=sn(),t!==null&&(ja(t,1,e),mn(t,e))}function wt(t,e,n){if(t.tag===3)wp(t,t,n);else for(;e!==null;){if(e.tag===3){wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Ls(n,t),t=g0(e,t,1),e=rr(e,t,1),t=sn(),e!==null&&(ja(e,1,t),mn(e,t));break}}e=e.return}}function Z_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Gt&n)===n&&(It===4||It===3&&(Gt&130023424)===Gt&&500>bt()-If?Pr(t,0):Df|=n),mn(t,e)}function F0(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=sn();t=Ni(t,e),t!==null&&(ja(t,e,n),mn(t,n))}function Q_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F0(t,n)}function J_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),F0(t,n)}var O0;O0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,z_(t,e,n);fn=!!(t.flags&131072)}else fn=!1,ht&&e.flags&1048576&&Vg(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yo(t,e),t=e.pendingProps;var r=Rs(e,tn.current);Ms(e,n),r=Cf(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=Hl,e.stateNode=r,r._reactInternals=e,Vu(e,i,t,n),e=Wu(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&mf(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ty(i),t=Vn(i,t),r){case 0:e=Gu(null,e,i,t,n);break e;case 1:e=mp(null,e,i,t,n);break e;case 11:e=hp(null,e,i,t,n);break e;case 14:e=pp(null,e,i,Vn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Gu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),mp(t,e,i,r,n);case 3:e:{if(y0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yg(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(se(423)),e),e=gp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(se(424)),e),e=gp(t,e,i,n,r);break e}else for(Mn=ir(e.stateNode.containerInfo.firstChild),En=e,ht=!0,Gn=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Li(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Du(i,r)?a=null:s!==null&&Du(i,s)&&(e.flags|=32),_0(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&ku(e),null;case 13:return S0(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),hp(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(gl,i._currentValue),i._currentValue=a,s!==null)if($n(s.value,a)){if(s.children===r.children&&!hn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=In(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),pp(t,e,i,r,n);case 15:return v0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Yo(t,e),e.tag=1,pn(i)?(t=!0,hl(e)):t=!1,Ms(e,n),p0(e,i,r),Vu(e,i,r,n),Wu(null,e,i,!0,t,n);case 19:return M0(t,e,n);case 22:return x0(t,e,n)}throw Error(se(156,e.tag))};function k0(t,e){return dg(t,e)}function ey(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new ey(t,e,n,i)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ty(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ko(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")kf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case os:return Nr(n.children,r,s,e);case tf:a=8,r|=8;break;case du:return t=Ln(12,n,e,r|2),t.elementType=du,t.lanes=s,t;case fu:return t=Ln(13,n,e,r),t.elementType=fu,t.lanes=s,t;case hu:return t=Ln(19,n,e,r),t.elementType=hu,t.lanes=s,t;case $m:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xm:a=10;break e;case Ym:a=9;break e;case nf:a=11;break e;case rf:a=14;break e;case Xi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function wc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ny(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,i,r,s,a,o,l){return t=new ny(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function iy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function B0(t){if(!t)return cr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(pn(n))return Bg(t,n,e)}return e}function z0(t,e,n,i,r,s,a,o,l){return t=Bf(n,i,!0,t,r,s,a,o,l),t.context=B0(null),n=t.current,i=sn(),r=ar(n),s=Ai(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,ja(t,r,i),mn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=sn(),a=ar(r);return n=B0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,a),t!==null&&(Yn(t,r,a,s),Wo(t,r,a)),a}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ap(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){Ap(t,e),(t=t.alternate)&&Ap(t,e)}function ry(){return null}var V0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Yl.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Xl(t,e,null,null)};Yl.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Xl(null,t,null,null)}),e[Pi]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&yg(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function sy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Al(a);s.call(u)}}var a=z0(e,i,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=a,t[Pi]=a.current,La(t.nodeType===8?t.parentNode:t),Or(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Al(l);o.call(u)}}var l=Bf(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=l,t[Pi]=l.current,La(t.nodeType===8?t.parentNode:t),Or(function(){Xl(e,l,n,i)}),l}function ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Al(a);o.call(l)}}Xl(e,a,t,r)}else a=sy(n,e,t,r,i);return Al(a)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(of(e,n|1),mn(e,bt()),!(Ze&6)&&(Ds=bt()+500,pr()))}break;case 13:Or(function(){var i=Ni(t,1);if(i!==null){var r=sn();Yn(i,t,1,r)}}),zf(t,1)}};lf=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=sn();Yn(e,t,134217728,n)}zf(t,134217728)}};vg=function(t){if(t.tag===13){var e=ar(t),n=Ni(t,e);if(n!==null){var i=sn();Yn(n,t,e,i)}zf(t,e)}};xg=function(){return nt};_g=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Eu=function(t,e,n){switch(e){case"input":if(gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(se(90));Km(i),gu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};sg=Uf;ag=Or;var ay={usingClientEntryPoint:!1,Events:[Ya,ds,Bl,ig,rg,Uf]},ea={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oy={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cg(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ul=go.inject(oy),oi=go}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(se(200));return iy(t,e,null,n)};wn.createRoot=function(t,e){if(!Hf(t))throw Error(se(299));var n=!1,i="",r=V0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,La(t.nodeType===8?t.parentNode:t),new Vf(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=cg(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Or(t)};wn.hydrate=function(t,e,n){if(!$l(e))throw Error(se(200));return ql(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=V0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=z0(e,null,t,1,n??null,r,!1,s,a),t[Pi]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yl(e)};wn.render=function(t,e,n){if(!$l(e))throw Error(se(200));return ql(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!$l(t))throw Error(se(40));return t._reactRootContainer?(Or(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};wn.unstable_batchedUpdates=Uf;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$l(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return ql(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),Hm.exports=wn;var ly=Hm.exports,G0,Rp=ly;G0=Rp.createRoot,Rp.hydrateRoot;const Cc={user:null,collection:null,audit:[],invocations:[],corrections:[],templates:[],preflight:{}},W0=tt.createContext(null);async function Jn(t,e,n){const i=await fetch(e,{method:t,headers:{"content-type":"application/json"},body:t==="GET"?void 0:JSON.stringify(n??{})}),r=await i.json().catch(()=>({}));if(!i.ok)throw new Error((r==null?void 0:r.error)??`${i.status} ${i.statusText}`);return r}function cy({children:t}){const[e,n]=tt.useState(Cc),[i,r]=tt.useState(!0),[s,a]=tt.useState(null),o=tt.useCallback(async()=>{try{const d=await Jn("GET","/api/state");n({user:d.user,collection:d.collection,audit:d.audit,invocations:d.invocations,corrections:d.corrections,templates:d.templates,preflight:d.preflight})}catch(d){/Authentication required/.test(d.message)||a(d.message),n(Cc)}finally{r(!1)}},[]);tt.useEffect(()=>{o()},[o]);const l=tt.useCallback(async d=>{a(null);try{await d(),await o()}catch(p){a(p.message)}},[o]),u=tt.useMemo(()=>({...e,loading:i,error:s,clearError:()=>a(null),async login(d,p){a(null);try{await Jn("POST","/api/login",{username:d,password:p}),await o()}catch(f){a(f.message)}},async logout(){await Jn("POST","/api/logout").catch(()=>{}),n(Cc)},resolveField:(d,p,f)=>l(()=>Jn("POST",`/api/styles/${d}/fields/${p}`,{value:f})),approveField:(d,p)=>l(()=>Jn("POST",`/api/styles/${d}/fields/${p}/approve`)),approveGate:(d,p)=>l(()=>Jn("POST",`/api/styles/${d}/gates/${p}/approve`)),resolveThread:(d,p,f)=>l(()=>Jn("POST",`/api/styles/${d}/thread/${p}/resolve`,f?{promote:f}:{})),createExport:d=>l(()=>Jn("POST",`/api/styles/${d}/exports`)),async draftPack(d,p){a(null);try{const f=await Jn("POST",`/api/styles/${d}/draft`,{confirm:p});return await o(),f.result}catch(f){return a(f.message),null}},signOffCategory:d=>l(()=>Jn("POST",`/api/categories/${d}/signoff`))}),[e,i,s,l,o]);return c.jsx(W0.Provider,{value:u,children:t})}function pi(){const t=tt.useContext(W0);if(!t)throw new Error("useStore must be used inside StoreProvider");return t}const Is=t=>({blockers:t.filter(e=>e.severity==="blocker").length,warnings:t.filter(e=>e.severity==="warning").length});function rt({tone:t,children:e}){return c.jsx("span",{className:`badge ${t}`,children:e})}const uy={Suggested:"ai",Unverified:"draft","Human Edited":"gold",Approved:"ok",Overridden:"warn",Unresolved:"blocker"},bp=({v:t})=>c.jsx(rt,{tone:uy[t],children:t}),dy={Draft:"draft","Needs Review":"warn","Changes Requested":"blocker","Approved for Factory":"ok",Superseded:"draft"},j0=({v:t})=>c.jsx(rt,{tone:dy[t],children:t}),fy={"Not Started":"draft","In Progress":"gold",Blocked:"blocker","In Review":"warn",Approved:"ok",Complete:"ok"},hy=({v:t})=>c.jsx(rt,{tone:fy[t],children:t}),Lr=t=>t?new Date(t).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—";function X0({palette:t}){const[e,n,i,r]=[t[0]??"#C8B49A",t[1]??"#8FA3B0",t[2]??"#E4DCCF",t[3]??"#2F3A42"];return c.jsxs("svg",{viewBox:"0 0 320 190",preserveAspectRatio:"xMidYMid slice",width:"100%",height:"100%",children:[c.jsxs("defs",{children:[c.jsxs("radialGradient",{id:"m1",cx:"30%",cy:"35%",children:[c.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:".95"}),c.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]}),c.jsxs("radialGradient",{id:"m2",cx:"72%",cy:"60%",children:[c.jsx("stop",{offset:"0%",stopColor:n,stopOpacity:".85"}),c.jsx("stop",{offset:"100%",stopColor:n,stopOpacity:"0"})]}),c.jsxs("linearGradient",{id:"m3",x1:"0",y1:"1",x2:"1",y2:"0",children:[c.jsx("stop",{offset:"0%",stopColor:r}),c.jsx("stop",{offset:"100%",stopColor:i,stopOpacity:".35"})]})]}),c.jsx("rect",{width:"320",height:"190",fill:"url(#m3)"}),c.jsx("ellipse",{cx:"96",cy:"66",rx:"130",ry:"96",fill:"url(#m1)"}),c.jsx("ellipse",{cx:"230",cy:"114",rx:"118",ry:"86",fill:"url(#m2)"}),c.jsx("g",{opacity:".28",stroke:i,fill:"none",strokeWidth:".8",children:Array.from({length:9},(s,a)=>c.jsx("path",{d:`M ${-20+a*42} 190 Q ${10+a*42} 96 ${-6+a*42} 0`},a))})]})}function Y0({palette:t}){const e=t[0]??"#3A4654",n=t[1]??"#C8B49A";return c.jsxs("svg",{viewBox:"0 0 320 190",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",children:[c.jsx("rect",{width:"320",height:"190",fill:"#f2efe9"}),c.jsxs("g",{transform:"translate(160 6) scale(.97)",fill:"none",strokeLinecap:"round",children:[c.jsxs("g",{stroke:e,strokeWidth:"1.5",children:[c.jsx("circle",{cx:"0",cy:"16",r:"9"}),c.jsx("path",{d:"M0 25 L0 40"}),c.jsx("path",{d:"M-17 44 L18 40"}),"           ",c.jsx("path",{d:"M-13 96 L15 99"}),"           ",c.jsx("path",{d:"M-1 40 L1 98"}),"             ",c.jsx("path",{d:"M-13 96 L-16 140 L-14 178"}),c.jsx("path",{d:"M15 99 L19 141 L17 178"}),c.jsx("path",{d:"M-17 44 L-26 78 L-24 92"}),c.jsx("path",{d:"M18 40 L27 76 L25 90"})]}),c.jsx("path",{d:"M-19 44 Q0 36 20 40 L27 74 Q30 108 24 150 Q0 160 -24 150 Q-30 106 -26 74 Z",fill:n,fillOpacity:".55",stroke:e,strokeWidth:"1.2"}),c.jsx("path",{d:"M-14 62 Q2 96 20 128",stroke:e,strokeWidth:".7",strokeDasharray:"3 3",opacity:".7"}),c.jsx("path",{d:"M-24 150 Q0 158 24 150",stroke:e,strokeWidth:"1"})]}),c.jsx("g",{opacity:".5",stroke:e,strokeWidth:".6",children:c.jsx("path",{d:"M20 178 L300 178",strokeDasharray:"2 5"})})]})}function $0({back:t=!1}){return c.jsxs("svg",{viewBox:"0 0 320 190",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",children:[c.jsx("rect",{width:"320",height:"190",fill:"#fbfbfa"}),c.jsxs("g",{transform:"translate(160 14)",fill:"none",stroke:"#1c1c1e",children:[c.jsx("path",{d:`M-30 12 L-46 26 L-38 46 L-33 38 L-36 132 Q0 141 36 132 L33 38 L38 46 L46 26 L30 12\r
                 Q18 3 0 3 Q-18 3 -30 12 Z`,strokeWidth:"2"}),c.jsx("path",{d:t?"M-13 5 Q0 12 13 5":"M-13 5 Q0 20 13 5",strokeWidth:"2"}),c.jsx("path",{d:"M-30 12 L-27 128",strokeWidth:"1.1"}),c.jsx("path",{d:"M30 12 L27 128",strokeWidth:"1.1"}),c.jsx("path",{d:"M-33 16 L-30 126",strokeWidth:".6",strokeDasharray:"3 2.5"}),c.jsx("path",{d:"M33 16 L30 126",strokeWidth:".6",strokeDasharray:"3 2.5"}),c.jsx("path",{d:"M-35 133 Q0 142 35 133",strokeWidth:".6",strokeDasharray:"3 2.5"}),t?c.jsx("path",{d:"M0 8 L0 128",strokeWidth:"1.1"}):c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M0 10 L0 128",strokeWidth:"1.1"}),[26,42,58,74,90,106].map(e=>c.jsx("circle",{cx:"6",cy:e,r:"2",strokeWidth:".9"},e))]}),!t&&c.jsx("path",{d:"M-24 54 L20 112",strokeWidth:".7",strokeDasharray:"6 3",opacity:".8"})]}),c.jsxs("g",{fontFamily:"monospace",fontSize:"7.5",fill:"#e5484d",children:[c.jsx("path",{d:"M196 60 L232 46",stroke:"#e5484d",strokeWidth:".7"}),c.jsx("circle",{cx:"196",cy:"60",r:"2.4",fill:"#e5484d"}),c.jsx("text",{x:"235",y:"45",children:"UNRESOLVED"}),c.jsx("text",{x:"235",y:"55",fill:"#8a8a86",children:"placket closure"})]}),c.jsxs("g",{fontFamily:"monospace",fontSize:"7.5",fill:"#8a8a86",children:[c.jsx("text",{x:"14",y:"176",children:t?"BACK — ORTHOGRAPHIC":"FRONT — ORTHOGRAPHIC"}),c.jsx("text",{x:"14",y:"166",children:"SCALE 1:8 · NOT DIMENSIONALLY VERIFIED"})]})]})}const Pp=[{id:"1",title:"Trend + concept",wks:"1-3",gate:!1,desc:"Season, customer, color, silhouette, fabric themes",status:"done"},{id:"2",title:"Fabric sourcing",wks:"2-6",gate:!1,desc:"Candidate fabrics, trims, suppliers, constraints",status:"done"},{id:"3",title:"Mood + boards",wks:"3-6",gate:!1,desc:"Creative boards and early sketch directions",status:"done"},{id:"4",title:"Concept green light",wks:"6",gate:!0,desc:"Approved collection direction signed off",status:"done"},{id:"5",title:"Presentation sketches",wks:"6-10",gate:!1,desc:"Selected concepts with details and styling",status:"now"},{id:"6",title:"Design green light",wks:"10",gate:!0,desc:"Approved designs for technical development",status:"now"},{id:"7",title:"Flats + spec draft",wks:"10-14",gate:!1,desc:"Front/back flats, POMs, BOM, construction draft",status:""},{id:"8",title:"First prototype",wks:"14-20",gate:!1,desc:"Proto sample and factory questions",status:""},{id:"9",title:"First fitting",wks:"20-22",gate:!1,desc:"Fit notes, corrections, decision record",status:""},{id:"10",title:"Second prototype",wks:"22-26",gate:!1,desc:"Revised sample",status:""},{id:"11",title:"Second fitting + final",wks:"26-28",gate:!1,desc:"Approved fit and construction",status:""},{id:"12",title:"Final pack + handoff",wks:"28-30",gate:!0,desc:"Locked pack, grading inputs, factory notes",status:""},{id:"13",title:"Production prep",wks:"30-34",gate:!1,desc:"Materials, quantities, costing, capacity",status:""},{id:"14",title:"Bulk production",wks:"34-44",gate:!1,desc:"Production status and exceptions",status:""},{id:"15",title:"QC + delivery",wks:"44-52",gate:!1,desc:"QC results, issue closure, shipment readiness",status:""}];function py(){const[t,e]=tt.useState(Pp[4]);return c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsx("h3",{children:"Season Calendar · 15-Stage Tape Measure Timeline"}),c.jsx("p",{className:"sub",children:"Deterministic timeline tracking collection progress from concept to bulk production delivery."}),c.jsx("div",{style:{overflowX:"auto",paddingBottom:10,margin:"16px 0"},children:c.jsx("div",{style:{display:"flex",minWidth:1040,border:"1.5px solid var(--ink)",background:"#fff"},children:Pp.map(n=>{const i=t.id===n.id;return c.jsxs("div",{onClick:()=>e(n),style:{flex:1,minWidth:64,borderRight:"1px dashed var(--line)",padding:"10px 8px 12px",position:"relative",cursor:"pointer",background:i?"#E7ECFA":n.status==="now"?"#FAFAFC":"#fff"},children:[n.gate&&c.jsx("span",{style:{position:"absolute",top:-9,left:6,fontFamily:"var(--mono)",fontSize:8,letterSpacing:".18em",background:"var(--ink)",color:"#fff",padding:"1px 5px"},children:"GATE"}),c.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:9,color:"var(--graphite)",letterSpacing:".08em"},children:["WK ",n.wks]}),c.jsxs("div",{style:{fontSize:10.5,fontWeight:600,lineHeight:1.35,marginTop:4},children:[n.id,". ",n.title]}),c.jsx("div",{style:{height:5,marginTop:8,background:n.status==="done"?"var(--ink)":n.status==="now"?"var(--chalk)":"#e6e6ea"}})]},n.id)})})}),t&&c.jsxs("div",{style:{background:"#FAF9F6",border:"1px solid var(--line)",padding:14,borderRadius:4,fontSize:12.5,lineHeight:1.8},children:[c.jsxs("div",{style:{display:"flex",gap:20},children:[c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:120,display:"inline-block"},children:"Stage:"}),c.jsxs("b",{children:[t.id," · ",t.title]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:80,display:"inline-block"},children:"Weeks:"}),t.wks]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:120,display:"inline-block"},children:"Primary output:"}),t.desc]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontFamily:"var(--mono)",color:"var(--graphite)",width:120,display:"inline-block"},children:"Rule:"}),"Starts only when upstream approvals are satisfied or an authorized override is recorded."]})]})]})}function my({onOpen:t}){const{collection:e,preflight:n}=pi();if(!e)return null;const i=e.stages.filter(u=>u.status==="Complete"||u.status==="Approved").length,r=e.stages.filter(u=>u.status==="Blocked"),s=e.styles.flatMap(u=>u.thread).filter(u=>u.state==="Open").length,a=e.styles.flatMap(u=>n[u.id]??[]),{blockers:o,warnings:l}=Is(a);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsxs("h2",{children:[e.season," ",e.year]}),c.jsxs("p",{children:[e.brand," · ",e.market," · ship ",e.shipWindow," · owner ",e.owner,". Customer: ",e.customer,"."]})]}),c.jsx(py,{}),c.jsxs("div",{className:"grid c4",style:{marginBottom:22},children:[c.jsxs("div",{className:"card tight",children:[c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Stage progress"}),c.jsxs("span",{className:"v",children:[i,c.jsx("span",{style:{fontSize:17,color:"var(--text-3)"},children:"/15"})]}),c.jsx("span",{className:"n",children:"Currently at stage 7 — technical development"})]}),c.jsx("div",{className:"track",children:c.jsx("i",{style:{width:`${i/15*100}%`}})})]}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Export blockers"}),c.jsx("span",{className:`v ${o?"blocker":"ok"}`,children:o}),c.jsxs("span",{className:"n",children:["Critical failures across ",e.styles.length," styles"]})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Warnings"}),c.jsx("span",{className:`v ${l?"warn":"ok"}`,children:l}),c.jsx("span",{className:"n",children:"Non-blocking, reviewable"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Open factory questions"}),c.jsx("span",{className:`v ${s?"warn":"ok"}`,children:s}),c.jsx("span",{className:"n",children:"Awaiting brand response"})]})})]}),c.jsxs("div",{className:"grid split",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Season calendar"}),c.jsx("p",{className:"sub",children:"15 stages across a 52-week Spring/Summer template. Gold rows are approval gates — a stage cannot start until its upstream gate is satisfied or an override is recorded."}),c.jsx("div",{children:e.stages.map(u=>c.jsxs("div",{className:`stage-row ${u.gate?"gate":""}`,children:[c.jsx("div",{className:"stage-n",children:u.n}),c.jsxs("div",{children:[c.jsx("div",{className:"stage-name",children:u.name}),c.jsx("div",{className:"stage-out",children:u.output})]}),c.jsxs("div",{className:"stage-weeks",children:["wk ",u.weeks]}),c.jsx("div",{style:{textAlign:"right"},children:c.jsx(hy,{v:u.status})})]},u.n))})]}),c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[r.length>0&&c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Blocked work"}),c.jsx("p",{className:"sub",children:"Downstream stages held by an unsatisfied gate."}),r.map(u=>c.jsxs("div",{style:{marginBottom:12},children:[c.jsxs("div",{style:{display:"flex",gap:9,alignItems:"center",marginBottom:4},children:[c.jsxs(rt,{tone:"blocker",children:["Stage ",u.n]}),c.jsx("span",{style:{fontSize:13},children:u.name})]}),c.jsx("p",{className:"muted",style:{fontSize:12},children:"Held by stage 7 — the technical package has unresolved production-critical fields, so no prototype can be cut."})]},u.n))]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Collection record"}),c.jsx("p",{className:"sub",children:"Fields captured at collection creation (COL-001)."}),c.jsxs("div",{className:"manifest",children:[c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Collection ID"}),e.id]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Brand"}),e.brand]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Season"}),e.season," ",e.year]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Market"}),e.market]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Ship window"}),e.shipWindow]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Currency"}),e.currency]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Template"}),"52-week SS (configurable)"]})]})]})]})]}),c.jsx("h3",{style:{fontFamily:"var(--serif)",fontSize:23,fontWeight:400,margin:"34px 0 4px"},children:"Styles"}),c.jsx("p",{className:"muted",style:{fontSize:12.5,marginBottom:18},children:"One record per garment, carrying creative assets, technical package, approvals, and factory history through the whole lifecycle."}),c.jsx("div",{className:"grid c3",children:e.styles.map(u=>c.jsx(gy,{style:u,findings:n[u.id]??[],onOpen:t},u.id))})]})}function gy({style:t,findings:e,onOpen:n}){const{blockers:i,warnings:r}=Is(e),s=t.assets.find(a=>a.mode==="flat")??t.assets.find(a=>a.mode==="presentation")??t.assets[0];return c.jsxs("button",{className:"style-card",onClick:()=>n(t.id),children:[c.jsx("div",{className:"thumb",children:(s==null?void 0:s.mode)==="flat"?c.jsx($0,{}):(s==null?void 0:s.mode)==="presentation"?c.jsx(Y0,{palette:s.palette}):c.jsx(X0,{palette:(s==null?void 0:s.palette)??[]})}),c.jsxs("div",{className:"body",children:[c.jsxs("div",{className:"id",children:[t.id," · v",t.version]}),c.jsx("h4",{children:t.name}),c.jsxs("div",{className:"row",children:[c.jsx(j0,{v:t.status}),i>0&&c.jsxs(rt,{tone:"blocker",children:[i," blockers"]}),r>0&&c.jsxs(rt,{tone:"warn",children:[r," warnings"]}),i===0&&r===0&&c.jsx(rt,{tone:"ok",children:"Preflight clean"})]}),c.jsxs("p",{className:"muted",style:{fontSize:11.5,marginTop:10},children:[t.category," · sizes ",t.sizeRange.join("/")," · base ",t.baseSize??"—"]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="185",vy=0,Np=1,xy=2,Zo=1,q0=2,fa=3,ur=0,an=1,Mi=2,Ci=0,Ts=1,Lp=2,Dp=3,Ip=4,_y=5,Er=100,yy=101,Sy=102,My=103,Ey=104,Ty=200,wy=201,Ay=202,Cy=203,nd=204,id=205,Ry=206,by=207,Py=208,Ny=209,Ly=210,Dy=211,Iy=212,Uy=213,Fy=214,rd=0,sd=1,ad=2,Us=3,od=4,ld=5,cd=6,ud=7,K0=0,Oy=1,ky=2,ci=0,Z0=1,Q0=2,J0=3,Wf=4,ev=5,tv=6,nv=7,iv=300,kr=301,Fs=302,Rc=303,bc=304,Kl=306,dd=1e3,wi=1001,fd=1002,Ht=1003,By=1004,vo=1005,en=1006,Pc=1007,Rr=1008,Sn=1009,rv=1010,sv=1011,Va=1012,jf=1013,fi=1014,si=1015,Di=1016,Xf=1017,Yf=1018,Ha=1020,av=35902,ov=35899,lv=1021,cv=1022,jn=1023,Ii=1026,br=1027,uv=1028,$f=1029,Br=1030,qf=1031,Kf=1033,Qo=33776,Jo=33777,el=33778,tl=33779,hd=35840,pd=35841,md=35842,gd=35843,vd=36196,xd=37492,_d=37496,yd=37488,Sd=37489,Cl=37490,Md=37491,Ed=37808,Td=37809,wd=37810,Ad=37811,Cd=37812,Rd=37813,bd=37814,Pd=37815,Nd=37816,Ld=37817,Dd=37818,Id=37819,Ud=37820,Fd=37821,Od=36492,kd=36494,Bd=36495,zd=36283,Vd=36284,Rl=36285,Hd=36286,zy=3200,Gd=0,Vy=1,Ki="",yn="srgb",bl="srgb-linear",Pl="linear",et="srgb",Xr=7680,Up=519,Hy=512,Gy=513,Wy=514,Zf=515,jy=516,Xy=517,Qf=518,Yy=519,Fp=35044,Op="300 es",ai=2e3,Ga=2001;function $y(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qy(){const t=Nl("canvas");return t.style.display="block",t}const kp={};function Bp(...t){const e="THREE."+t.shift();console.log(e,...t)}function dv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=dv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=dv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ws(...t){const e=t.join(" ");e in kp||(kp[e]=!0,Ne(...t))}function Ky(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Zy={[rd]:sd,[ad]:cd,[od]:ud,[Us]:ld,[sd]:rd,[cd]:ad,[ud]:od,[ld]:Us};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Wd=180/Math.PI;function qa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function Qy(t,e){return(t%e+e)%e}function Lc(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ah=class ah{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;let ke=ah;class Gs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],y=s[a+2],T=s[a+3];if(p!==T||l!==f||u!==m||d!==y){let v=l*f+u*m+d*y+p*T;v<0&&(f=-f,m=-m,y=-y,T=-T,v=-v);let h=1-o;if(v<.9995){const _=Math.acos(v),M=Math.sin(_);h=Math.sin(h*_)/M,o=Math.sin(o*_)/M,l=l*h+f*o,u=u*h+m*o,d=d*h+y*o,p=p*h+T*o}else{l=l*h+f*o,u=u*h+m*o,d=d*h+y*o,p=p*h+T*o;const _=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=_,u*=_,d*=_,p*=_}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],p=s[a],f=s[a+1],m=s[a+2],y=s[a+3];return e[n]=o*y+d*p+l*m-u*f,e[n+1]=l*y+d*f+u*p-o*m,e[n+2]=u*y+d*m+o*f-l*p,e[n+3]=d*y-o*p-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=f*d*p+u*m*y,this._y=u*m*p-f*d*y,this._z=u*d*y+f*m*p,this._w=u*d*p-f*m*y;break;case"YXZ":this._x=f*d*p+u*m*y,this._y=u*m*p-f*d*y,this._z=u*d*y-f*m*p,this._w=u*d*p+f*m*y;break;case"ZXY":this._x=f*d*p-u*m*y,this._y=u*m*p+f*d*y,this._z=u*d*y+f*m*p,this._w=u*d*p-f*m*y;break;case"ZYX":this._x=f*d*p-u*m*y,this._y=u*m*p+f*d*y,this._z=u*d*y-f*m*p,this._w=u*d*p+f*m*y;break;case"YZX":this._x=f*d*p+u*m*y,this._y=u*m*p+f*d*y,this._z=u*d*y-f*m*p,this._w=u*d*p-f*m*y;break;case"XZY":this._x=f*d*p-u*m*y,this._y=u*m*p-f*d*y,this._z=u*d*y+f*m*p,this._w=u*d*p+f*m*y;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const oh=class oh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*d,this.y=i+l*d+o*u-s*p,this.z=r+l*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;let z=oh;const Dc=new z,zp=new Gs,lh=class lh{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],p=i[7],f=i[2],m=i[5],y=i[8],T=r[0],v=r[3],h=r[6],_=r[1],M=r[4],S=r[7],C=r[2],w=r[5],b=r[8];return s[0]=a*T+o*_+l*C,s[3]=a*v+o*M+l*w,s[6]=a*h+o*S+l*b,s[1]=u*T+d*_+p*C,s[4]=u*v+d*M+p*w,s[7]=u*h+d*S+p*b,s[2]=f*T+m*_+y*C,s[5]=f*v+m*M+y*w,s[8]=f*h+m*S+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*a-o*u,f=o*l-d*s,m=u*s-a*l,y=n*p+i*f+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return e[0]=p*T,e[1]=(r*u-d*i)*T,e[2]=(o*i-r*a)*T,e[3]=f*T,e[4]=(d*n-r*l)*T,e[5]=(r*s-o*n)*T,e[6]=m*T,e[7]=(i*l-u*n)*T,e[8]=(a*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(e,n)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-e)),this}translate(e,n){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;let Ue=lh;const Ic=new Ue,Vp=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jy(){const t={enabled:!0,workingColorSpace:bl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=As(r.r),r.g=As(r.g),r.b=As(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Pl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bl]:{primaries:e,whitePoint:i,transfer:Pl,toXYZ:Vp,fromXYZ:Hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Vp,fromXYZ:Hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),t}const Ye=Jy();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function As(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Yr;class eS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yr===void 0&&(Yr=Nl("canvas")),Yr.width=e.width,Yr.height=e.height;const r=Yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let nS=0;const Fc=new z;class on extends Hr{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=wi,r=wi,s=en,a=Rr,o=jn,l=Sn,u=on.DEFAULT_ANISOTROPY,d=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=qa(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=iv;on.DEFAULT_ANISOTROPY=1;const ch=class ch{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],m=l[5],y=l[9],T=l[2],v=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-T)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+T)<.1&&Math.abs(y+v)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(m+1)/2,C=(h+1)/2,w=(d+f)/4,b=(p+T)/4,x=(y+v)/4;return M>S&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=b/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=x/s),this.set(i,r,s,n),this}let _=Math.sqrt((v-y)*(v-y)+(p-T)*(p-T)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(v-y)/_,this.y=(p-T)/_,this.z=(f-d)/_,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;let vt=ch;class iS extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Jf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fv extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=class Dl{constructor(e,n,i,r,s,a,o,l,u,d,p,f,m,y,T,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,p,f,m,y,T,v)}set(e,n,i,r,s,a,o,l,u,d,p,f,m,y,T,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=p,h[14]=f,h[3]=m,h[7]=y,h[11]=T,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*p,y=o*d,T=o*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=m+y*u,n[5]=f-T*u,n[9]=-o*l,n[2]=T-f*u,n[6]=y+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,y=u*d,T=u*p;n[0]=f+T*o,n[4]=y*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*d,n[9]=-o,n[2]=m*o-y,n[6]=T+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,y=u*d,T=u*p;n[0]=f-T*o,n[4]=-a*p,n[8]=y+m*o,n[1]=m+y*o,n[5]=a*d,n[9]=T-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*p,y=o*d,T=o*p;n[0]=l*d,n[4]=y*u-m,n[8]=f*u+T,n[1]=l*p,n[5]=T*u+f,n[9]=m*u-y,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,y=o*l,T=o*u;n[0]=l*d,n[4]=T-f*p,n[8]=y*p+m,n[1]=p,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=m*p+y,n[10]=f-T*p}else if(e.order==="XZY"){const f=a*l,m=a*u,y=o*l,T=o*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=f*p+T,n[5]=a*d,n[9]=m*p-y,n[2]=y*p-m,n[6]=o*d,n[10]=T*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,aS)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),zi.crossVectors(i,vn),zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),zi.crossVectors(i,vn)),zi.normalize(),xo.crossVectors(vn,zi),r[0]=zi.x,r[4]=xo.x,r[8]=vn.x,r[1]=zi.y,r[5]=xo.y,r[9]=vn.y,r[2]=zi.z,r[6]=xo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],p=i[5],f=i[9],m=i[13],y=i[2],T=i[6],v=i[10],h=i[14],_=i[3],M=i[7],S=i[11],C=i[15],w=r[0],b=r[4],x=r[8],R=r[12],P=r[1],N=r[5],I=r[9],X=r[13],Q=r[2],B=r[6],K=r[10],G=r[14],O=r[3],$=r[7],te=r[11],q=r[15];return s[0]=a*w+o*P+l*Q+u*O,s[4]=a*b+o*N+l*B+u*$,s[8]=a*x+o*I+l*K+u*te,s[12]=a*R+o*X+l*G+u*q,s[1]=d*w+p*P+f*Q+m*O,s[5]=d*b+p*N+f*B+m*$,s[9]=d*x+p*I+f*K+m*te,s[13]=d*R+p*X+f*G+m*q,s[2]=y*w+T*P+v*Q+h*O,s[6]=y*b+T*N+v*B+h*$,s[10]=y*x+T*I+v*K+h*te,s[14]=y*R+T*X+v*G+h*q,s[3]=_*w+M*P+S*Q+C*O,s[7]=_*b+M*N+S*B+C*$,s[11]=_*x+M*I+S*K+C*te,s[15]=_*R+M*X+S*G+C*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],m=e[14],y=e[3],T=e[7],v=e[11],h=e[15],_=l*m-u*f,M=o*m-u*p,S=o*f-l*p,C=a*m-u*d,w=a*f-l*d,b=a*p-o*d;return n*(T*_-v*M+h*S)-i*(y*_-v*C+h*w)+r*(y*M-T*C+h*b)-s*(y*S-T*w+v*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return n*(a*d-o*u)-i*(s*d-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],m=e[11],y=e[12],T=e[13],v=e[14],h=e[15],_=n*o-i*a,M=n*l-r*a,S=n*u-s*a,C=i*l-r*o,w=i*u-s*o,b=r*u-s*l,x=d*T-p*y,R=d*v-f*y,P=d*h-m*y,N=p*v-f*T,I=p*h-m*T,X=f*h-m*v,Q=_*X-M*I+S*N+C*P-w*R+b*x;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Q;return e[0]=(o*X-l*I+u*N)*B,e[1]=(r*I-i*X-s*N)*B,e[2]=(T*b-v*w+h*C)*B,e[3]=(f*w-p*b-m*C)*B,e[4]=(l*P-a*X-u*R)*B,e[5]=(n*X-r*P+s*R)*B,e[6]=(v*S-y*b-h*M)*B,e[7]=(d*b-f*S+m*M)*B,e[8]=(a*I-o*P+u*x)*B,e[9]=(i*P-n*I-s*x)*B,e[10]=(y*w-T*S+h*_)*B,e[11]=(p*S-d*w-m*_)*B,e[12]=(o*R-a*N-l*x)*B,e[13]=(n*N-i*R+r*x)*B,e[14]=(T*M-y*C-v*_)*B,e[15]=(d*C-p*M+f*_)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,p=o+o,f=s*u,m=s*d,y=s*p,T=a*d,v=a*p,h=o*p,_=l*u,M=l*d,S=l*p,C=i.x,w=i.y,b=i.z;return r[0]=(1-(T+h))*C,r[1]=(m+S)*C,r[2]=(y-M)*C,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(f+h))*w,r[6]=(v+_)*w,r[7]=0,r[8]=(y+M)*b,r[9]=(v-_)*b,r[10]=(1-(f+T))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),l=$r.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const u=1/a,d=1/o,p=1/l;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=p,kn.elements[9]*=p,kn.elements[10]*=p,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ai,l=!1){const u=this.elements,d=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let y,T;if(l)y=s/(a-s),T=a*s/(a-s);else if(o===ai)y=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===Ga)y=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ai,l=!1){const u=this.elements,d=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let y,T;if(l)y=1/(a-s),T=a/(a-s);else if(o===ai)y=-2/(a-s),T=-(a+s)/(a-s);else if(o===Ga)y=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Dl.prototype.isMatrix4=!0;let At=Dl;const $r=new z,kn=new At,sS=new z(0,0,0),aS=new z(1,1,1),zi=new z,xo=new z,vn=new z,Gp=new At,Wp=new Gs;class dr{constructor(e=0,n=0,i=0,r=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oS=0;const jp=new z,qr=new Gs,mi=new At,_o=new z,na=new z,lS=new z,cS=new Gs,Xp=new z(1,0,0),Yp=new z(0,1,0),$p=new z(0,0,1),qp={type:"added"},uS={type:"removed"},Kr={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Wt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new z,n=new dr,i=new Gs,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ue}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(na,_o,this.up):mi.lookAt(_o,na,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(mi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uS),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,lS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ha extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dS={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,i),h=this._getHandJoint(u,T);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,y=.005;u.inputState.pinching&&f>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Qy(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ye.workingToColorSpace(Zt.copy(this),e),Math.round(We(Zt.r*255,0,255))*65536+Math.round(We(Zt.g*255,0,255))*256+Math.round(We(Zt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=yn){Ye.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(yo);const i=Lc(Vi.h,yo.h,n),r=Lc(Vi.s,yo.s,n),s=Lc(Vi.l,yo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ve;Ve.NAMES=pv;class Kp extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bn=new z,gi=new z,zc=new z,vi=new z,Zr=new z,Qr=new z,Zp=new z,Vc=new z,Hc=new z,Gc=new z,Wc=new vt,jc=new vt,Xc=new vt;class Wn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),gi.subVectors(i,n),zc.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(gi),l=Bn.dot(zc),u=gi.dot(gi),d=gi.dot(zc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*l-o*d)*f,y=(a*d-o*l)*f;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Wc.setScalar(0),jc.setScalar(0),Xc.setScalar(0),Wc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wc,s.x),a.addScaledVector(jc,s.y),a.addScaledVector(Xc,s.z),a}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),gi.subVectors(e,n),Bn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),Qr.subVectors(s,i),Vc.subVectors(e,i);const l=Zr.dot(Vc),u=Qr.dot(Vc);if(l<=0&&u<=0)return n.copy(i);Hc.subVectors(e,r);const d=Zr.dot(Hc),p=Qr.dot(Hc);if(d>=0&&p<=d)return n.copy(r);const f=l*p-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Zr,a);Gc.subVectors(e,s);const m=Zr.dot(Gc),y=Qr.dot(Gc);if(y>=0&&m<=y)return n.copy(s);const T=m*u-l*y;if(T<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(Qr,o);const v=d*y-m*p;if(v<=0&&p-d>=0&&m-y>=0)return Zp.subVectors(s,r),o=(p-d)/(p-d+(m-y)),n.copy(r).addScaledVector(Zp,o);const h=1/(v+T+f);return a=T*h,o=f*h,n.copy(i).addScaledVector(Zr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ka{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Mo.subVectors(this.max,ia),Jr.subVectors(e.a,ia),es.subVectors(e.b,ia),ts.subVectors(e.c,ia),Hi.subVectors(es,Jr),Gi.subVectors(ts,es),gr.subVectors(Jr,ts);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-gr.z,gr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,gr.z,0,-gr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-gr.y,gr.x,0];return!Yc(n,Jr,es,ts,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,Jr,es,ts,Mo))?!1:(Eo.crossVectors(Hi,Gi),n=[Eo.x,Eo.y,Eo.z],Yc(n,Jr,es,ts,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new z,new z,new z,new z,new z,new z,new z,new z],zn=new z,So=new Ka,Jr=new z,es=new z,ts=new z,Hi=new z,Gi=new z,gr=new z,ia=new z,Mo=new z,Eo=new z,vr=new z;function Yc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),u=n.dot(vr),d=i.dot(vr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Nt=new z,To=new ke;let fS=0;class di extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fp,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class mv extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gv extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hS=new Ka,ra=new z,$c=new z;class eh{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add($c)),this.expandByPoint(ra.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pS=0;const Rn=new At,qc=new Wt,ns=new z,xn=new Ka,sa=new Ka,Ot=new z;class Fn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(xn.min,sa.min),xn.expandByPoint(Ot),Ot.addVectors(xn.max,sa.max),xn.expandByPoint(Ot)):(xn.expandByPoint(sa.min),xn.expandByPoint(sa.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ot.fromBufferAttribute(o,u),l&&(ns.fromBufferAttribute(e,u),Ot.add(ns)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new z,l[x]=new z;const u=new z,d=new z,p=new z,f=new ke,m=new ke,y=new ke,T=new z,v=new z;function h(x,R,P){u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,R),p.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,R),y.fromBufferAttribute(s,P),d.sub(u),p.sub(u),m.sub(f),y.sub(f);const N=1/(m.x*y.y-y.x*m.y);isFinite(N)&&(T.copy(d).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(N),v.copy(p).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(N),o[x].add(T),o[R].add(T),o[P].add(T),l[x].add(v),l[R].add(v),l[P].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,R=_.length;x<R;++x){const P=_[x],N=P.start,I=P.count;for(let X=N,Q=N+I;X<Q;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new z,S=new z,C=new z,w=new z;function b(x){C.fromBufferAttribute(r,x),w.copy(C);const R=o[x];M.copy(R),M.sub(C.multiplyScalar(C.dot(R))).normalize(),S.crossVectors(w,R);const N=S.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,N)}for(let x=0,R=_.length;x<R;++x){const P=_[x],N=P.start,I=P.count;for(let X=N,Q=N+I;X<Q;X+=3)b(e.getX(X+0)),b(e.getX(X+1)),b(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,d=new z,p=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),T=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,T),a.fromBufferAttribute(n,v),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,v),o.add(d),l.add(d),u.add(d),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d);let m=0,y=0;for(let T=0,v=l.length;T<v;T++){o.isInterleavedBufferAttribute?m=l[T]*o.data.stride+o.offset:m=l[T]*d;for(let h=0;h<d;h++)f[y++]=u[m++]}return new di(f,d,p)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){const f=u[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mS=0;class Ws extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ts,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nd&&(i.blendSrc=this.blendSrc),this.blendDst!==id&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new z,Kc=new z,wo=new z,Wi=new z,Zc=new z,Ao=new z,Qc=new z;class gS{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kc.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Kc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=Wi.dot(this.direction),l=-Wi.dot(wo),u=Wi.lengthSq(),d=Math.abs(1-a*a);let p,f,m,y;if(d>0)if(p=a*l-o,f=a*o-l,y=s*d,p>=0)if(f>=-y)if(f<=y){const T=1/d;p*=T,f*=T,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f<=-y?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u):f<=y?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Kc).addScaledVector(wo,f),m}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){Zc.subVectors(n,e),Ao.subVectors(i,e),Qc.crossVectors(Zc,Ao);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Ao.crossVectors(Wi,Ao));if(l<0)return null;const u=o*this.direction.dot(Zc.cross(Wi));if(u<0||l+u>a)return null;const d=-o*Wi.dot(Qc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class th extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qp=new At,xr=new gS,Co=new eh,Jp=new z,Ro=new z,bo=new z,Po=new z,Jc=new z,No=new z,em=new z,Lo=new z;class Qt extends Wt{constructor(e=new Fn,n=new th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],p=s[l];d!==0&&(Jc.fromBufferAttribute(p,e),a?No.addScaledVector(Jc,d):No.addScaledVector(Jc.sub(n),d))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Co.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Co,Jp)===null||xr.origin.distanceToSquared(Jp)>(e.far-e.near)**2))&&(Qp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Qp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,T=f.length;y<T;y++){const v=f[y],h=a[v.materialIndex],_=Math.max(v.start,m.start),M=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let S=_,C=M;S<C;S+=3){const w=o.getX(S),b=o.getX(S+1),x=o.getX(S+2);r=Do(this,h,e,i,u,d,p,w,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let v=y,h=T;v<h;v+=3){const _=o.getX(v),M=o.getX(v+1),S=o.getX(v+2);r=Do(this,a,e,i,u,d,p,_,M,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,T=f.length;y<T;y++){const v=f[y],h=a[v.materialIndex],_=Math.max(v.start,m.start),M=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=_,C=M;S<C;S+=3){const w=S,b=S+1,x=S+2;r=Do(this,h,e,i,u,d,p,w,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let v=y,h=T;v<h;v+=3){const _=v,M=v+1,S=v+2;r=Do(this,a,e,i,u,d,p,_,M,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function vS(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ur,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Lo);return u<n.near||u>n.far?null:{distance:u,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Ro),t.getVertexPosition(l,bo),t.getVertexPosition(u,Po);const d=vS(t,e,n,i,Ro,bo,Po,em);if(d){const p=new z;Wn.getBarycoord(em,Ro,bo,Po,p),r&&(d.uv=Wn.getInterpolatedAttribute(r,o,l,u,p,new ke)),s&&(d.uv1=Wn.getInterpolatedAttribute(s,o,l,u,p,new ke)),a&&(d.normal=Wn.getInterpolatedAttribute(a,o,l,u,p,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new z,materialIndex:0};Wn.getNormal(Ro,bo,Po,f.normal),d.face=f,d.barycoord=p}return d}class xS extends on{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Ht,d=Ht,p,f){super(null,a,o,l,u,d,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new z,_S=new z,yS=new Ue;class Mr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=eu.subVectors(i,n).cross(_S.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(eu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yS.getNormalMatrix(e),r=this.coplanarPoint(eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new eh,SS=new ke(.5,.5),Io=new z;class nh{constructor(e=new Mr,n=new Mr,i=new Mr,r=new Mr,s=new Mr,a=new Mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],p=s[5],f=s[6],m=s[7],y=s[8],T=s[9],v=s[10],h=s[11],_=s[12],M=s[13],S=s[14],C=s[15];if(r[0].setComponents(u-a,m-d,h-y,C-_).normalize(),r[1].setComponents(u+a,m+d,h+y,C+_).normalize(),r[2].setComponents(u+o,m+p,h+T,C+M).normalize(),r[3].setComponents(u-o,m-p,h-T,C-M).normalize(),i)r[4].setComponents(l,f,v,S).normalize(),r[5].setComponents(u-l,m-f,h-v,C-S).normalize();else if(r[4].setComponents(u-l,m-f,h-v,C-S).normalize(),n===ai)r[5].setComponents(u+l,m+f,h+v,C+S).normalize();else if(n===Ga)r[5].setComponents(l,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const n=SS.distanceTo(e.center);return _r.radius=.7071067811865476+n,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends on{constructor(e=[],n=kr,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Os extends on{constructor(e,n,i=fi,r,s,a,o=Ht,l=Ht,u,d=Ii,p=1){if(d!==Ii&&d!==br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class MS extends Os{constructor(e,n=fi,i=kr,r,s,a=Ht,o=Ht,l,u=Ii){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xv extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class js extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],p=[];let f=0,m=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(p,2));function y(T,v,h,_,M,S,C,w,b,x,R){const P=S/b,N=C/x,I=S/2,X=C/2,Q=w/2,B=b+1,K=x+1;let G=0,O=0;const $=new z;for(let te=0;te<K;te++){const q=te*N-X;for(let ce=0;ce<B;ce++){const Fe=ce*P-I;$[T]=Fe*_,$[v]=q*M,$[h]=Q,u.push($.x,$.y,$.z),$[T]=0,$[v]=0,$[h]=w>0?1:-1,d.push($.x,$.y,$.z),p.push(ce/b),p.push(1-te/x),G+=1}}for(let te=0;te<x;te++)for(let q=0;q<b;q++){const ce=f+q+B*te,Fe=f+q+B*(te+1),Ie=f+(q+1)+B*(te+1),Ge=f+(q+1)+B*te;l.push(ce,Fe,Ge),l.push(Fe,Ie,Ge),O+=6}o.addGroup(m,O,R),m+=O,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ll extends Fn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],f=[],m=[];let y=0;const T=[],v=i/2;let h=0;_(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(m,2));function _(){const S=new z,C=new z;let w=0;const b=(n-e)/i;for(let x=0;x<=s;x++){const R=[],P=x/s,N=P*(n-e)+e;for(let I=0;I<=r;I++){const X=I/r,Q=X*l+o,B=Math.sin(Q),K=Math.cos(Q);C.x=N*B,C.y=-P*i+v,C.z=N*K,p.push(C.x,C.y,C.z),S.set(B,b,K).normalize(),f.push(S.x,S.y,S.z),m.push(X,1-P),R.push(y++)}T.push(R)}for(let x=0;x<r;x++)for(let R=0;R<s;R++){const P=T[R][x],N=T[R+1][x],I=T[R+1][x+1],X=T[R][x+1];(e>0||R!==0)&&(d.push(P,N,X),w+=3),(n>0||R!==s-1)&&(d.push(N,I,X),w+=3)}u.addGroup(h,w,0),h+=w}function M(S){const C=y,w=new ke,b=new z;let x=0;const R=S===!0?e:n,P=S===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,v*P,0),f.push(0,P,0),m.push(.5,.5),y++;const N=y;for(let I=0;I<=r;I++){const Q=I/r*l+o,B=Math.cos(Q),K=Math.sin(Q);b.x=R*K,b.y=v*P,b.z=R*B,p.push(b.x,b.y,b.z),f.push(0,P,0),w.x=B*.5+.5,w.y=K*.5*P+.5,m.push(w.x,w.y),y++}for(let I=0;I<r;I++){const X=C+I,Q=N+I;S===!0?d.push(Q,Q+1,X):d.push(Q+1,Q,X),x+=3}u.addGroup(h,x,S===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ih extends Fn{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=We(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],u=[],d=1/n,p=new z,f=new ke,m=new z,y=new z,T=new z;let v=0,h=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,h=e[_+1].y-e[_].y,m.x=h*1,m.y=-v,m.z=h*0,T.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(T.x,T.y,T.z);break;default:v=e[_+1].x-e[_].x,h=e[_+1].y-e[_].y,m.x=h*1,m.y=-v,m.z=h*0,y.copy(m),m.x+=T.x,m.y+=T.y,m.z+=T.z,m.normalize(),l.push(m.x,m.y,m.z),T.copy(y)}for(let _=0;_<=n;_++){const M=i+_*d*r,S=Math.sin(M),C=Math.cos(M);for(let w=0;w<=e.length-1;w++){p.x=e[w].x*S,p.y=e[w].y,p.z=e[w].x*C,a.push(p.x,p.y,p.z),f.x=_/n,f.y=w/(e.length-1),o.push(f.x,f.y);const b=l[3*w+0]*S,x=l[3*w+1],R=l[3*w+0]*C;u.push(b,x,R)}}for(let _=0;_<n;_++)for(let M=0;M<e.length-1;M++){const S=M+_*e.length,C=S,w=S+e.length,b=S+e.length+1,x=S+1;s.push(C,w,x),s.push(b,x,w)}this.setIndex(s),this.setAttribute("position",new zt(a,3)),this.setAttribute("uv",new zt(o,2)),this.setAttribute("normal",new zt(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.points,e.segments,e.phiStart,e.phiLength)}}class ks extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,p=e/o,f=n/l,m=[],y=[],T=[],v=[];for(let h=0;h<d;h++){const _=h*f-a;for(let M=0;M<u;M++){const S=M*p-s;y.push(S,-_,0),T.push(0,0,1),v.push(M/o),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){const M=_+u*h,S=_+u*(h+1),C=_+1+u*(h+1),w=_+1+u*h;m.push(M,S,w),m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(T,3)),this.setAttribute("uv",new zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class rh extends Fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const d=[],p=new z,f=new z,m=[],y=[],T=[],v=[];for(let h=0;h<=i;h++){const _=[],M=h/i,S=a+M*o,C=e*Math.cos(S),w=Math.sqrt(e*e-C*C);let b=0;h===0&&a===0?b=.5/n:h===i&&l===Math.PI&&(b=-.5/n);for(let x=0;x<=n;x++){const R=x/n,P=r+R*s;p.x=-w*Math.cos(P),p.y=C,p.z=w*Math.sin(P),y.push(p.x,p.y,p.z),f.copy(p).normalize(),T.push(f.x,f.y,f.z),v.push(R+b,1-M),_.push(u++)}d.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const M=d[h][_+1],S=d[h][_],C=d[h+1][_],w=d[h+1][_+1];(h!==0||a>0)&&m.push(M,S,w),(h!==i-1||l<Math.PI)&&m.push(S,C,w)}this.setIndex(m),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(T,3)),this.setAttribute("uv",new zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ES extends Ws{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(tm(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(tm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Bs(t[n]);for(const r in i)e[r]=i[r]}return e}function tm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function TS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _v(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const wS={clone:Bs,merge:nn};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RS extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bS extends Ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tu extends bS{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class PS extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NS extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yv extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class LS extends yv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const nu=new At,nm=new z,im=new z;class DS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(im),n.updateMatrixWorld(),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ga||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uo=new z,Fo=new Gs,ei=new z;class Sv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Fo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Uo,Fo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new z,rm=new ke,sm=new ke;class Nn extends Sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,rm,sm),n.subVectors(sm,rm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class sh extends Sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IS extends DS{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iu extends yv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new IS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const is=-90,rs=1;class US extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new Nn(is,rs,e,n);s.layers=this.layers,this.add(s);const a=new Nn(is,rs,e,n);a.layers=this.layers,this.add(a);const o=new Nn(is,rs,e,n);o.layers=this.layers,this.add(o);const l=new Nn(is,rs,e,n);l.layers=this.layers,this.add(l);const u=new Nn(is,rs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,f,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class FS extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class OS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const uh=class uh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};uh.prototype.isMatrix2=!0;let am=uh;function om(t,e,n,i){const r=kS(i);switch(n){case lv:return t*e;case uv:return t*e/r.components*r.byteLength;case $f:return t*e/r.components*r.byteLength;case Br:return t*e*2/r.components*r.byteLength;case qf:return t*e*2/r.components*r.byteLength;case cv:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Kf:return t*e*4/r.components*r.byteLength;case Qo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(t,16)*Math.max(e,8)/4;case hd:case md:return Math.max(t,8)*Math.max(e,8)/2;case vd:case xd:case yd:case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _d:case Cl:case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Od:case kd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rl:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kS(t){switch(t){case Sn:case rv:return{byteLength:1,components:1};case Va:case sv:case Di:return{byteLength:2,components:1};case Xf:case Yf:return{byteLength:2,components:4};case fi:case jf:case si:return{byteLength:4,components:1};case av:case ov:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BS(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((m,y)=>m.start-y.start);let f=0;for(let m=1;m<p.length;m++){const y=p[f],T=p[m];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++f,p[f]=T)}p.length=f+1;for(let m=0,y=p.length;m<y;m++){const T=p[m];t.bufferSubData(u,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var zS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$S=`#ifdef USE_BATCHING
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
#endif`,qS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cM=`#define PI 3.141592653589793
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,LM=`#ifdef USE_ENVMAP
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
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,kM=`uniform sampler2D dfgLUT;
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
}`,BM=`
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
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
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
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
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
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
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
}`,$E=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
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
}`,JE=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,o1=`#define NORMAL
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
}`,l1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,u1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,f1=`#define TOON
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
}`,h1=`#define TOON
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
}`,p1=`uniform float size;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,v1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:zS,alphahash_pars_fragment:VS,alphamap_fragment:HS,alphamap_pars_fragment:GS,alphatest_fragment:WS,alphatest_pars_fragment:jS,aomap_fragment:XS,aomap_pars_fragment:YS,batching_pars_vertex:$S,batching_vertex:qS,begin_vertex:KS,beginnormal_vertex:ZS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:aM,color_pars_vertex:oM,color_vertex:lM,common:cM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:_M,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:LM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:TM,fog_fragment:wM,fog_pars_fragment:AM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:RM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:PM,lights_pars_begin:NM,lights_toon_fragment:DM,lights_toon_pars_fragment:IM,lights_phong_fragment:UM,lights_phong_pars_fragment:FM,lights_physical_fragment:OM,lights_physical_pars_fragment:kM,lights_fragment_begin:BM,lights_fragment_maps:zM,lights_fragment_end:VM,lightprobes_pars_fragment:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:XM,map_fragment:YM,map_pars_fragment:$M,map_particle_fragment:qM,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:QM,morphinstance_vertex:JM,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:aE,normal_pars_vertex:oE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:hE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:_E,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:wE,skinbase_vertex:AE,skinning_pars_vertex:CE,skinning_vertex:RE,skinnormal_vertex:bE,specularmap_fragment:PE,specularmap_pars_fragment:NE,tonemapping_fragment:LE,tonemapping_pars_fragment:DE,transmission_fragment:IE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:kE,worldpos_vertex:BE,background_vert:zE,background_frag:VE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:WE,cube_frag:jE,depth_vert:XE,depth_frag:YE,distance_vert:$E,distance_frag:qE,equirect_vert:KE,equirect_frag:ZE,linedashed_vert:QE,linedashed_frag:JE,meshbasic_vert:e1,meshbasic_frag:t1,meshlambert_vert:n1,meshlambert_frag:i1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:a1,meshnormal_frag:o1,meshphong_vert:l1,meshphong_frag:c1,meshphysical_vert:u1,meshphysical_frag:d1,meshtoon_vert:f1,meshtoon_frag:h1,points_vert:p1,points_frag:m1,shadow_vert:g1,shadow_frag:v1,sprite_vert:x1,sprite_frag:_1},pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ii={basic:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:nn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:nn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:nn([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:nn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:nn([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:nn([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:nn([pe.common,pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:nn([pe.lights,pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Oo={r:0,b:0,g:0},y1=new At,Ev=new Ue;Ev.set(-1,0,0,0,1,0,0,0,1);function S1(t,e,n,i,r,s){const a=new Ve(0);let o=r===!0?0:1,l,u,d=null,p=0,f=null;function m(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const S=_.backgroundBlurriness>0;M=e.get(M,S)}return M}function y(_){let M=!1;const S=m(_);S===null?v(a,o):S&&S.isColor&&(v(S,1),M=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function T(_,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===Kl)?(u===void 0&&(u=new Qt(new js(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Bs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ev),u.material.toneMapped=Ye.getTransfer(S.colorSpace)!==et,(d!==S||p!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,p=S.version,f=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qt(new ks(2,2),new hi({name:"BackgroundMaterial",uniforms:Bs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,f=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,M){_.getRGB(Oo,_v(t)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,M,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,v(a,o)},render:y,addToRenderList:T,dispose:h}}function M1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,I,X,Q,B){let K=!1;const G=p(N,Q,X,I);s!==G&&(s=G,u(s.object)),K=m(N,Q,X,B),K&&y(N,Q,X,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(N,I,X,Q),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function u(N){return t.bindVertexArray(N)}function d(N){return t.deleteVertexArray(N)}function p(N,I,X,Q){const B=Q.wireframe===!0;let K=i[I.id];K===void 0&&(K={},i[I.id]=K);const G=N.isInstancedMesh===!0?N.id:0;let O=K[G];O===void 0&&(O={},K[G]=O);let $=O[X.id];$===void 0&&($={},O[X.id]=$);let te=$[B];return te===void 0&&(te=f(l()),$[B]=te),te}function f(N){const I=[],X=[],Q=[];for(let B=0;B<n;B++)I[B]=0,X[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:Q,object:N,attributes:{},index:null}}function m(N,I,X,Q){const B=s.attributes,K=I.attributes;let G=0;const O=X.getAttributes();for(const $ in O)if(O[$].location>=0){const q=B[$];let ce=K[$];if(ce===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),q===void 0||q.attribute!==ce||ce&&q.data!==ce.data)return!0;G++}return s.attributesNum!==G||s.index!==Q}function y(N,I,X,Q){const B={},K=I.attributes;let G=0;const O=X.getAttributes();for(const $ in O)if(O[$].location>=0){let q=K[$];q===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));const ce={};ce.attribute=q,q&&q.data&&(ce.data=q.data),B[$]=ce,G++}s.attributes=B,s.attributesNum=G,s.index=Q}function T(){const N=s.newAttributes;for(let I=0,X=N.length;I<X;I++)N[I]=0}function v(N){h(N,0)}function h(N,I){const X=s.newAttributes,Q=s.enabledAttributes,B=s.attributeDivisors;X[N]=1,Q[N]===0&&(t.enableVertexAttribArray(N),Q[N]=1),B[N]!==I&&(t.vertexAttribDivisor(N,I),B[N]=I)}function _(){const N=s.newAttributes,I=s.enabledAttributes;for(let X=0,Q=I.length;X<Q;X++)I[X]!==N[X]&&(t.disableVertexAttribArray(X),I[X]=0)}function M(N,I,X,Q,B,K,G){G===!0?t.vertexAttribIPointer(N,I,X,B,K):t.vertexAttribPointer(N,I,X,Q,B,K)}function S(N,I,X,Q){T();const B=Q.attributes,K=X.getAttributes(),G=I.defaultAttributeValues;for(const O in K){const $=K[O];if($.location>=0){let te=B[O];if(te===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const q=te.normalized,ce=te.itemSize,Fe=e.get(te);if(Fe===void 0)continue;const Ie=Fe.buffer,Ge=Fe.type,Z=Fe.bytesPerElement,oe=Ge===t.INT||Ge===t.UNSIGNED_INT||te.gpuType===jf;if(te.isInterleavedBufferAttribute){const re=te.data,Pe=re.stride,Le=te.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)h($.location+be,re.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<$.locationSize;be++)v($.location+be);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let be=0;be<$.locationSize;be++)M($.location+be,ce/$.locationSize,Ge,q,Pe*Z,(Le+ce/$.locationSize*be)*Z,oe)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<$.locationSize;re++)h($.location+re,te.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<$.locationSize;re++)v($.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let re=0;re<$.locationSize;re++)M($.location+re,ce/$.locationSize,Ge,q,ce*Z,ce/$.locationSize*re*Z,oe)}}else if(G!==void 0){const q=G[O];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv($.location,q);break;case 3:t.vertexAttrib3fv($.location,q);break;case 4:t.vertexAttrib4fv($.location,q);break;default:t.vertexAttrib1fv($.location,q)}}}}_()}function C(){R();for(const N in i){const I=i[N];for(const X in I){const Q=I[X];for(const B in Q){const K=Q[B];for(const G in K)d(K[G].object),delete K[G];delete Q[B]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const I=i[N.id];for(const X in I){const Q=I[X];for(const B in Q){const K=Q[B];for(const G in K)d(K[G].object),delete K[G];delete Q[B]}}delete i[N.id]}function b(N){for(const I in i){const X=i[I];for(const Q in X){const B=X[Q];if(B[N.id]===void 0)continue;const K=B[N.id];for(const G in K)d(K[G].object),delete K[G];delete B[N.id]}}}function x(N){for(const I in i){const X=i[I],Q=N.isInstancedMesh===!0?N.id:0,B=X[Q];if(B!==void 0){for(const K in B){const G=B[K];for(const O in G)d(G[O].object),delete G[O];delete B[K]}delete X[Q],Object.keys(X).length===0&&delete i[I]}}}function R(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:v,disableUnusedAttributes:_}}function E1(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function T1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==jn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const x=b===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Sn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==si&&!x)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(Ne("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:S,maxSamples:C,samples:w}}function w1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Mr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,m){const y=p.clippingPlanes,T=p.clipIntersection,v=p.clipShadows,h=t.get(p);if(!r||y===null||y.length===0||s&&!v)s?d(null):u();else{const _=s?0:i,M=_*4;let S=h.clippingState||null;l.value=S,S=d(y,f,M,m);for(let C=0;C!==M;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,y){const T=p!==null?p.length:0;let v=null;if(T!==0){if(v=l.value,y!==!0||v===null){const h=m+T*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<h)&&(v=new Float32Array(h));for(let M=0,S=m;M!==T;++M,S+=4)a.copy(p[M]).applyMatrix4(_,o),a.normal.toArray(v,S),v[S+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}const Ji=4,lm=[.125,.215,.35,.446,.526,.582],Tr=20,A1=256,aa=new sh,cm=new Ve;let ru=null,su=0,au=0,ou=!1;const C1=new z;class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=C1}=s;ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),this._renderer.xr.enabled=ou,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Di,format:jn,colorSpace:bl,depthBuffer:!1},r=um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=R1(s)),this._blurMaterial=P1(s,e,n),this._ggxMaterial=b1(s,e,n)}return r}_compileMaterial(e){const n=new Qt(new Fn,e);this._renderer.compile(n,aa)}_sceneToCubeUV(e,n,i,r,s){const l=new Nn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(cm),p.toneMapping=ci,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new js,new th({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,v=T.material;let h=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,h=!0):(v.color.copy(cm),h=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):S===1?(l.up.set(0,0,u[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const C=this._cubeSize;ss(r,S*C,M>2?C:0,C,C),p.setRenderTarget(r),h&&p.render(T,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===kr||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,aa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),f=0+u*1.25,m=p*f,{_lodMax:y}=this,T=this._sizeLods[i],v=3*T*(i>y-Ji?i-y+Ji:0),h=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-n,ss(s,v,h,3*T,2*T),r.setRenderTarget(s),r.render(o,aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,ss(e,v,h,3*T,2*T),r.setRenderTarget(e),r.render(o,aa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tr-1),T=s/y,v=isFinite(s)?1+Math.floor(d*T):Tr;v>Tr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Tr}`);const h=[];let _=0;for(let b=0;b<Tr;++b){const x=b/T,R=Math.exp(-x*x/2);h.push(R),b===0?_+=R:b<v&&(_+=2*R)}for(let b=0;b<h.length;b++)h[b]=h[b]/_;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=y,f.mipInt.value=M-i;const S=this._sizeLods[r],C=3*S*(r>M-Ji?r-M+Ji:0),w=4*(this._cubeSize-S);ss(n,C,w,3*S,2*S),l.setRenderTarget(n),l.render(p,aa)}}function R1(t){const e=[],n=[],i=[];let r=t;const s=t-Ji+1+lm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ji?l=lm[a-t+Ji-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,y=6,T=3,v=2,h=1,_=new Float32Array(T*y*m),M=new Float32Array(v*y*m),S=new Float32Array(h*y*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,x=w>2?0:-1,R=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];_.set(R,T*y*w),M.set(f,v*y*w);const P=[w,w,w,w,w,w];S.set(P,h*y*w)}const C=new Fn;C.setAttribute("position",new di(_,T)),C.setAttribute("uv",new di(M,v)),C.setAttribute("faceIndex",new di(S,h)),i.push(new Qt(C,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function um(t,e,n){const i=new ui(t,e,n);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function b1(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function P1(t,e,n){const i=new Float32Array(Tr),r=new z(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function dm(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fm(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}class Tv extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new js(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ci});s.uniforms.tEquirect.value=n;const a=new Qt(r,s),o=n.minFilter;return n.minFilter===Rr&&(n.minFilter=en),new US(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function N1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Rc||m===bc)if(e.has(f)){const y=e.get(f).texture;return o(y,f.mapping)}else{const y=f.image;if(y&&y.height>0){const T=new Tv(y.height);return T.fromEquirectangularTexture(t,f),e.set(f,T),f.addEventListener("dispose",u),o(T.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,y=m===Rc||m===bc,T=m===kr||m===Fs;if(y||T){let v=n.get(f);const h=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new jd(t)),v=y?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const _=f.image;return y&&_&&_.height>0||T&&_&&l(_)?(i===null&&(i=new jd(t)),v=y?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",d),v.texture):null}}}return f}function o(f,m){return m===Rc?f.mapping=kr:m===bc&&(f.mapping=Fs),f}function l(f){let m=0;const y=6;for(let T=0;T<y;T++)f[T]!==void 0&&m++;return m===y}function u(f){const m=f.target;m.removeEventListener("dispose",u);const y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function d(f){const m=f.target;m.removeEventListener("dispose",d);const y=n.get(m);y!==void 0&&(n.delete(m),y.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function L1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ws("WebGLRenderer: "+i+" extension not supported."),r}}}function D1(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,y=p.attributes.position;let T=0;if(y===void 0)return;if(m!==null){const _=m.array;T=m.version;for(let M=0,S=_.length;M<S;M+=3){const C=_[M+0],w=_[M+1],b=_[M+2];f.push(C,w,w,b,b,C)}}else{const _=y.array;T=y.version;for(let M=0,S=_.length/3-1;M<S;M+=3){const C=M+0,w=M+1,b=M+2;f.push(C,w,w,b,b,C)}}const v=new(y.count>=65535?gv:mv)(f,1);v.version=T;const h=s.get(p);h&&e.remove(h),s.set(p,v)}function d(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function I1(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function d(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let T=0;for(let v=0;v<m;v++)T+=f[v];n.update(T,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function U1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function F1(t,e,n){const i=new WeakMap,r=new vt;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;f!==void 0&&f.texture.dispose();const y=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;y===!0&&(S=1),T===!0&&(S=2),v===!0&&(S=3);let C=o.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*w*4*p),x=new fv(b,C,w,p);x.type=si,x.needsUpdate=!0;const R=S*4;for(let N=0;N<p;N++){const I=h[N],X=_[N],Q=M[N],B=C*w*4*N;for(let K=0;K<I.count;K++){const G=K*R;y===!0&&(r.fromBufferAttribute(I,K),b[B+G+0]=r.x,b[B+G+1]=r.y,b[B+G+2]=r.z,b[B+G+3]=0),T===!0&&(r.fromBufferAttribute(X,K),b[B+G+4]=r.x,b[B+G+5]=r.y,b[B+G+6]=r.z,b[B+G+7]=0),v===!0&&(r.fromBufferAttribute(Q,K),b[B+G+8]=r.x,b[B+G+9]=r.y,b[B+G+10]=r.z,b[B+G+11]=Q.itemSize===4?r.w:1)}}f={count:p,texture:x,size:new ke(C,w)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let v=0;v<u.length;v++)y+=u[v];const T=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",T),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function O1(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return f}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const k1={[Z0]:"LINEAR_TONE_MAPPING",[Q0]:"REINHARD_TONE_MAPPING",[J0]:"CINEON_TONE_MAPPING",[Wf]:"ACES_FILMIC_TONE_MAPPING",[tv]:"AGX_TONE_MAPPING",[nv]:"NEUTRAL_TONE_MAPPING",[ev]:"CUSTOM_TONE_MAPPING"};function B1(t,e,n,i,r,s){const a=new ui(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Os(e,n):void 0}),o=new ui(e,n,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new Fn;l.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new zt([0,2,0,0,2,0],2));const u=new RS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Qt(l,u),p=new sh(-1,1,1,-1,0,1);let f=null,m=null,y=!1,T,v=null,h=[],_=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let C=0;C<h.length;C++){const w=h[C];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){h=M,_=h.length>0&&h[0].isRenderPass===!0;const S=a.width,C=a.height;for(let w=0;w<h.length;w++){const b=h[w];b.setSize&&b.setSize(S,C)}},this.begin=function(M,S){if(y||M.toneMapping===ci&&h.length===0)return!1;if(v=S,S!==null){const C=S.width,w=S.height;(a.width!==C||a.height!==w)&&this.setSize(C,w)}return _===!1&&M.setRenderTarget(a),T=M.toneMapping,M.toneMapping=ci,!0},this.hasRenderPass=function(){return _},this.end=function(M,S){M.toneMapping=T,y=!0;let C=a,w=o;for(let b=0;b<h.length;b++){const x=h[b];if(x.enabled!==!1&&(x.render(M,w,C,S),x.needsSwap!==!1)){const R=C;C=w,w=R}}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,u.defines={},Ye.getTransfer(f)===et&&(u.defines.SRGB_TRANSFER="");const b=k1[m];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,M.setRenderTarget(v),M.render(d,p),v=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const wv=new on,Xd=new Os(1,1),Av=new fv,Cv=new rS,Rv=new vv,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),vm=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hm[r];if(s===void 0&&(s=new Float32Array(r),hm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),Ft(n,i)}}function j1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),Ft(n,i)}}function X1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),Ft(n,i)}}function Y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xd.compareFunction=n.isReversedDepthBuffer()?Qf:Zf,s=Xd):s=wv,n.setTexture2D(e||s,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cv,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rv,r)}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Av,r)}function sT(t){switch(t){case 5126:return z1;case 35664:return V1;case 35665:return H1;case 35666:return G1;case 35674:return W1;case 35675:return j1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return q1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return Q1;case 36295:return J1;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function aT(t,e){t.uniform1fv(this.addr,e)}function oT(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function lT(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function cT(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function uT(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dT(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fT(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hT(t,e){t.uniform1iv(this.addr,e)}function pT(t,e){t.uniform2iv(this.addr,e)}function mT(t,e){t.uniform3iv(this.addr,e)}function gT(t,e){t.uniform4iv(this.addr,e)}function vT(t,e){t.uniform1uiv(this.addr,e)}function xT(t,e){t.uniform2uiv(this.addr,e)}function _T(t,e){t.uniform3uiv(this.addr,e)}function yT(t,e){t.uniform4uiv(this.addr,e)}function ST(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Xd:a=wv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function MT(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Cv,s[a])}function ET(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Rv,s[a])}function TT(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Av,s[a])}function wT(t){switch(t){case 5126:return aT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return xT;case 36295:return _T;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}class AT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sT(n.type)}}class CT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wT(n.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const lu=/(\w+)(\])?(\[|\.)?/g;function xm(t,e){t.seq.push(e),t.map[e.id]=e}function bT(t,e,n){const i=t.name,r=i.length;for(lu.lastIndex=0;;){const s=lu.exec(i),a=lu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){xm(n,u===void 0?new AT(o,t,e):new CT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new RT(o),xm(n,p)),n=p}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);bT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const PT=37297;let NT=0;function LT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ym=new Ue;function DT(t){Ye._getMatrix(ym,Ye.workingColorSpace,t);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Pl:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+LT(t.getShaderSource(e),o)}else return s}function IT(t,e){const n=DT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const UT={[Z0]:"Linear",[Q0]:"Reinhard",[J0]:"Cineon",[Wf]:"ACESFilmic",[tv]:"AgX",[nv]:"Neutral",[ev]:"Custom"};function FT(t,e){const n=UT[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new z;function OT(){Ye.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function BT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function pa(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(VT,GT)}const HT=new Map;function GT(t,e){let n=ze[e];if(n===void 0){const i=HT.get(e);if(i!==void 0)n=ze[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yd(n)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(t){return t.replace(WT,jT)}function jT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const XT={[Zo]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function YT(t){return XT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $T={[kr]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function qT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":$T[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const KT={[Fs]:"ENVMAP_MODE_REFRACTION"};function ZT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":KT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QT={[K0]:"ENVMAP_BLENDING_MULTIPLY",[Oy]:"ENVMAP_BLENDING_MIX",[ky]:"ENVMAP_BLENDING_ADD"};function JT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":QT[t.combine]||"ENVMAP_BLENDING_NONE"}function ew(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=YT(n),u=qT(n),d=ZT(n),p=JT(n),f=ew(n),m=kT(n),y=BT(s),T=r.createProgram();let v,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(pa).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(pa).join(`
`),h.length>0&&(h+=`
`)):(v=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),h=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?ze.tonemapping_pars_fragment:"",n.toneMapping!==ci?FT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,IT("linearToOutputTexel",n.outputColorSpace),OT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),a=Yd(a),a=Mm(a,n),a=Em(a,n),o=Yd(o),o=Mm(o,n),o=Em(o,n),a=Tm(a),o=Tm(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=_+v+a,S=_+h+o,C=_m(r,r.VERTEX_SHADER,M),w=_m(r,r.FRAGMENT_SHADER,S);r.attachShader(T,C),r.attachShader(T,w),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function b(N){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(T)||"",X=r.getShaderInfoLog(C)||"",Q=r.getShaderInfoLog(w)||"",B=I.trim(),K=X.trim(),G=Q.trim();let O=!0,$=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,C,w);else{const te=Sm(r,C,"vertex"),q=Sm(r,w,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+te+`
`+q)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(K===""||G==="")&&($=!1);$&&(N.diagnostics={runnable:O,programLog:B,vertexShader:{log:K,prefix:v},fragmentShader:{log:G,prefix:h}})}r.deleteShader(C),r.deleteShader(w),x=new nl(r,T),R=zT(r,T)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let R;this.getAttributes=function(){return R===void 0&&b(this),R};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(T,PT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=C,this.fragmentShader=w,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rw(e),n.set(e,i)),i}}class rw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function sw(t){return t===Br||t===Cl||t===Rl}function aw(t,e,n,i,r,s){const a=new hv,o=new iw,l=new Set,u=[],d=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function T(x,R,P,N,I,X){const Q=N.fog,B=I.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||K,G),$=O&&O.mapping===Kl?O.image.height:null,te=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=q!==void 0?q.length:0;let Fe=0;B.morphAttributes.position!==void 0&&(Fe=1),B.morphAttributes.normal!==void 0&&(Fe=2),B.morphAttributes.color!==void 0&&(Fe=3);let Ie,Ge,Z,oe;if(te){const Me=ii[te];Ie=Me.vertexShader,Ge=Me.fragmentShader}else{Ie=x.vertexShader,Ge=x.fragmentShader;const Me=o.getVertexShaderStage(x),Et=o.getFragmentShaderStage(x);o.update(x,Me,Et),Z=Me.id,oe=Et.id}const re=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,yt=!!x.map,Be=!!x.matcap,Qe=!!O,$e=!!x.aoMap,Xe=!!x.lightMap,St=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,Mt=!!x.displacementMap,Pt=!!x.emissiveMap,ut=!!x.metalnessMap,mt=!!x.roughnessMap,D=x.anisotropy>0,Xt=x.clearcoat>0,Je=x.dispersion>0,A=x.iridescence>0,g=x.sheen>0,F=x.transmission>0,k=D&&!!x.anisotropyMap,W=Xt&&!!x.clearcoatMap,ne=Xt&&!!x.clearcoatNormalMap,ae=Xt&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,le=g&&!!x.sheenColorMap,xe=g&&!!x.sheenRoughnessMap,ue=!!x.specularMap,de=!!x.specularColorMap,Ee=!!x.specularIntensityMap,Re=F&&!!x.transmissionMap,De=F&&!!x.thicknessMap,L=!!x.gradientMap,fe=!!x.alphaMap,ee=x.alphaTest>0,he=!!x.alphaHash,ve=!!x.extensions;let ie=ci;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ie=t.toneMapping);const we={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Ge,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:be,batchingColor:be&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:yt,matcap:Be,envMap:Qe,envMapMode:Qe&&O.mapping,envMapCubeUVHeight:$,aoMap:$e,lightMap:Xe,bumpMap:St,normalMap:pt,displacementMap:Mt,emissiveMap:Pt,normalMapObjectSpace:pt&&x.normalMapType===Vy,normalMapTangentSpace:pt&&x.normalMapType===Gd,packedNormalMap:pt&&x.normalMapType===Gd&&sw(x.normalMap.format),metalnessMap:ut,roughnessMap:mt,anisotropy:D,anisotropyMap:k,clearcoat:Xt,clearcoatMap:W,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,dispersion:Je,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:g,sheenColorMap:le,sheenRoughnessMap:xe,specularMap:ue,specularColorMap:de,specularIntensityMap:Ee,transmission:F,transmissionMap:Re,thicknessMap:De,gradientMap:L,opaque:x.transparent===!1&&x.blending===Ts&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:ee,alphaHash:he,combine:x.combine,mapUv:yt&&y(x.map.channel),aoMapUv:$e&&y(x.aoMap.channel),lightMapUv:Xe&&y(x.lightMap.channel),bumpMapUv:St&&y(x.bumpMap.channel),normalMapUv:pt&&y(x.normalMap.channel),displacementMapUv:Mt&&y(x.displacementMap.channel),emissiveMapUv:Pt&&y(x.emissiveMap.channel),metalnessMapUv:ut&&y(x.metalnessMap.channel),roughnessMapUv:mt&&y(x.roughnessMap.channel),anisotropyMapUv:k&&y(x.anisotropyMap.channel),clearcoatMapUv:W&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(x.sheenRoughnessMap.channel),specularMapUv:ue&&y(x.specularMap.channel),specularColorMapUv:de&&y(x.specularColorMap.channel),specularIntensityMapUv:Ee&&y(x.specularIntensityMap.channel),transmissionMapUv:Re&&y(x.transmissionMap.channel),thicknessMapUv:De&&y(x.thicknessMap.channel),alphaMapUv:fe&&y(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||D),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(yt||fe),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:yt&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:Pt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function v(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)R.push(P),R.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(R,x),_(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function h(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function _(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){const R=m[x.type];let P;if(R){const N=ii[R];P=wS.clone(N.uniforms)}else P=x.uniforms;return P}function S(x,R){let P=d.get(R);return P!==void 0?++P.usedTimes:(P=new tw(t,R,x,r),u.push(P),d.set(R,P)),P}function C(x){if(--x.usedTimes===0){const R=u.indexOf(x);u[R]=u[u.length-1],u.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function b(){o.dispose()}return{getParameters:T,getProgramCacheKey:v,getUniforms:M,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:b}}function ow(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,y,T,v,h){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:m,material:y,materialVariant:a(f),groupOrder:T,renderOrder:f.renderOrder,z:v,group:h},t[e]=_):(_.id=f.id,_.object=f,_.geometry=m,_.material=y,_.materialVariant=a(f),_.groupOrder=T,_.renderOrder=f.renderOrder,_.z=v,_.group=h),e++,_}function l(f,m,y,T,v,h){const _=o(f,m,y,T,v,h);y.transmission>0?i.push(_):y.transparent===!0?r.push(_):n.push(_)}function u(f,m,y,T,v,h){const _=o(f,m,y,T,v,h);y.transmission>0?i.unshift(_):y.transparent===!0?r.unshift(_):n.unshift(_)}function d(f,m,y){n.length>1&&n.sort(f||lw),i.length>1&&i.sort(m||Am),r.length>1&&r.sort(m||Am),y&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let f=e,m=t.length;f<m;f++){const y=t[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:d}}function cw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Cm,t.set(i,[a])):r>=s.length?(a=new Cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ve};break;case"SpotLight":n={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function dw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fw=0;function hw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pw(t){const e=new uw,n=dw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new At,a=new At;function o(u){let d=0,p=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,y=0,T=0,v=0,h=0,_=0,M=0,S=0,C=0,w=0,b=0;u.sort(hw);for(let R=0,P=u.length;R<P;R++){const N=u[R],I=N.color,X=N.intensity,Q=N.distance;let B=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Br?B=N.shadow.map.texture:B=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=I.r*X,p+=I.g*X,f+=I.b*X;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],X);b++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,O=n.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=N.shadow.matrix,_++}i.directional[m]=K,m++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(I).multiplyScalar(X),K.distance=Q,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[T]=K;const G=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,G.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[T]=G.matrix,N.castShadow){const O=n.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,i.spotShadow[T]=O,i.spotShadowMap[T]=B,S++}T++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(I).multiplyScalar(X),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=K,v++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const G=N.shadow,O=n.get(N);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,i.pointShadow[y]=O,i.pointShadowMap[y]=B,i.pointShadowMatrix[y]=N.shadow.matrix,M++}i.point[y]=K,y++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(X),K.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[h]=K,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==m||x.pointLength!==y||x.spotLength!==T||x.rectAreaLength!==v||x.hemiLength!==h||x.numDirectionalShadows!==_||x.numPointShadows!==M||x.numSpotShadows!==S||x.numSpotMaps!==C||x.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=T,i.rectArea.length=v,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,x.directionalLength=m,x.pointLength=y,x.spotLength=T,x.rectAreaLength=v,x.hemiLength=h,x.numDirectionalShadows=_,x.numPointShadows=M,x.numSpotShadows=S,x.numSpotMaps=C,x.numLightProbes=b,i.version=fw++)}function l(u,d){let p=0,f=0,m=0,y=0,T=0;const v=d.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const M=u[h];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),m++}else if(M.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),a.identity(),s.copy(M.matrixWorld),s.premultiply(v),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(v),f++}else if(M.isHemisphereLight){const S=i.hemi[T];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(v),T++}}}return{setup:o,setupView:l,state:i}}function Rm(t){const e=new pw(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function d(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rm(t),e.set(r,[o])):s>=a.length?(o=new Rm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vw=`uniform sampler2D shadow_pass;
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
}`,xw=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],_w=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],bm=new At,oa=new z,cu=new z;function yw(t,e,n){let i=new nh;const r=new ke,s=new ke,a=new vt,o=new PS,l=new NS,u={},d=n.maxTextureSize,p={[ur]:an,[an]:ur,[Mi]:Mi},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:gw,fragmentShader:vw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const y=new Fn;y.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Qt(y,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let h=this.type;this.render=function(w,b,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===q0&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zo);const R=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ci),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=h!==this.type;X&&b.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=w.length;Q<B;Q++){const K=w[Q],G=K.shadow;if(G===void 0){Ne("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const O=G.getFrameExtents();r.multiply(O),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,G.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=$,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===fa){if(K.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ui(r.x,r.y,{format:Br,type:Di,minFilter:en,magFilter:en,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Os(r.x,r.y,si),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht}else K.isPointLight?(G.map=new Tv(r.x),G.map.depthTexture=new MS(r.x,fi)):(G.map=new ui(r.x,r.y),G.map.depthTexture=new Os(r.x,r.y,fi)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Ii,this.type===Zo?(G.map.depthTexture.compareFunction=$?Qf:Zf,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht);G.camera.updateProjectionMatrix()}const te=G.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<te;q++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,q),t.clear();else{q===0&&(t.setRenderTarget(G.map),t.clear());const ce=G.getViewport(q);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(a)}if(K.isPointLight){const ce=G.camera,Fe=G.matrix,Ie=K.distance||ce.far;Ie!==ce.far&&(ce.far=Ie,ce.updateProjectionMatrix()),oa.setFromMatrixPosition(K.matrixWorld),ce.position.copy(oa),cu.copy(ce.position),cu.add(xw[q]),ce.up.copy(_w[q]),ce.lookAt(cu),ce.updateMatrixWorld(),Fe.makeTranslation(-oa.x,-oa.y,-oa.z),bm.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bm,ce.coordinateSystem,ce.reversedDepth)}else G.updateMatrices(K);i=G.getFrustum(),S(b,x,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===fa&&_(G,x),G.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(R,P,N)};function _(w,b){const x=e.update(T);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ui(r.x,r.y,{format:Br,type:Di})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,x,f,T,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,x,m,T,null)}function M(w,b,x,R){let P=null;const N=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=P.uuid,X=b.uuid;let Q=u[I];Q===void 0&&(Q={},u[I]=Q);let B=Q[X];B===void 0&&(B=P.clone(),Q[X]=B,b.addEventListener("dispose",C)),P=B}if(P.visible=b.visible,P.wireframe=b.wireframe,R===fa?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:p[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=t.properties.get(P);I.light=x}return P}function S(w,b,x,R,P){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===fa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const X=e.update(w),Q=w.material;if(Array.isArray(Q)){const B=X.groups;for(let K=0,G=B.length;K<G;K++){const O=B[K],$=Q[O.materialIndex];if($&&$.visible){const te=M(w,$,R,P);w.onBeforeShadow(t,w,b,x,X,te,O),t.renderBufferDirect(x,null,X,te,w,O),w.onAfterShadow(t,w,b,x,X,te,O)}}}else if(Q.visible){const B=M(w,Q,R,P);w.onBeforeShadow(t,w,b,x,X,B,null),t.renderBufferDirect(x,null,X,B,w,null),w.onAfterShadow(t,w,b,x,X,B,null)}}const I=w.children;for(let X=0,Q=I.length;X<Q;X++)S(I[X],b,x,R,P)}function C(w){w.target.removeEventListener("dispose",C);for(const x in u){const R=u[x],P=w.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function Sw(t,e){function n(){let L=!1;const fe=new vt;let ee=null;const he=new vt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){L=ve},setClear:function(ve,ie,we,Me,Et){Et===!0&&(ve*=Me,ie*=Me,we*=Me),fe.set(ve,ie,we,Me),he.equals(fe)===!1&&(t.clearColor(ve,ie,we,Me),he.copy(fe))},reset:function(){L=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,ee=null,he=null,ve=null;return{setReversed:function(ie){if(fe!==ie){const we=e.get("EXT_clip_control");ie?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const Me=ve;ve=null,this.setClear(Me)}},getReversed:function(){return fe},setTest:function(ie){ie?re(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!L&&(t.depthMask(ie),ee=ie)},setFunc:function(ie){if(fe&&(ie=Zy[ie]),he!==ie){switch(ie){case rd:t.depthFunc(t.NEVER);break;case sd:t.depthFunc(t.ALWAYS);break;case ad:t.depthFunc(t.LESS);break;case Us:t.depthFunc(t.LEQUAL);break;case od:t.depthFunc(t.EQUAL);break;case ld:t.depthFunc(t.GEQUAL);break;case cd:t.depthFunc(t.GREATER);break;case ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){L=ie},setClear:function(ie){ve!==ie&&(ve=ie,fe&&(ie=1-ie),t.clearDepth(ie))},reset:function(){L=!1,ee=null,he=null,ve=null,fe=!1}}}function r(){let L=!1,fe=null,ee=null,he=null,ve=null,ie=null,we=null,Me=null,Et=null;return{setTest:function(ot){L||(ot?re(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(ot){fe!==ot&&!L&&(t.stencilMask(ot),fe=ot)},setFunc:function(ot,qn,Kn){(ee!==ot||he!==qn||ve!==Kn)&&(t.stencilFunc(ot,qn,Kn),ee=ot,he=qn,ve=Kn)},setOp:function(ot,qn,Kn){(ie!==ot||we!==qn||Me!==Kn)&&(t.stencilOp(ot,qn,Kn),ie=ot,we=qn,Me=Kn)},setLocked:function(ot){L=ot},setClear:function(ot){Et!==ot&&(t.clearStencil(ot),Et=ot)},reset:function(){L=!1,fe=null,ee=null,he=null,ve=null,ie=null,we=null,Me=null,Et=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},p={},f={},m=new WeakMap,y=[],T=null,v=!1,h=null,_=null,M=null,S=null,C=null,w=null,b=null,x=new Ve(0,0,0),R=0,P=!1,N=null,I=null,X=null,Q=null,B=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),G=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=O>=2);let te=null,q={};const ce=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Ie=new vt().fromArray(ce),Ge=new vt().fromArray(Fe);function Z(L,fe,ee,he){const ve=new Uint8Array(4),ie=t.createTexture();t.bindTexture(L,ie),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ee;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(fe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ie}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Us),St(!1),pt(Np),re(t.CULL_FACE),$e(Ci);function re(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Pe(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Le(L,fe){return f[L]!==fe?(t.bindFramebuffer(L,fe),f[L]=fe,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function be(L,fe){let ee=y,he=!1;if(L){ee=m.get(fe),ee===void 0&&(ee=[],m.set(fe,ee));const ve=L.textures;if(ee.length!==ve.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,we=ve.length;ie<we;ie++)ee[ie]=t.COLOR_ATTACHMENT0+ie;ee.length=ve.length,he=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,he=!0);he&&t.drawBuffers(ee)}function yt(L){return T!==L?(t.useProgram(L),T=L,!0):!1}const Be={[Er]:t.FUNC_ADD,[yy]:t.FUNC_SUBTRACT,[Sy]:t.FUNC_REVERSE_SUBTRACT};Be[My]=t.MIN,Be[Ey]=t.MAX;const Qe={[Ty]:t.ZERO,[wy]:t.ONE,[Ay]:t.SRC_COLOR,[nd]:t.SRC_ALPHA,[Ly]:t.SRC_ALPHA_SATURATE,[Py]:t.DST_COLOR,[Ry]:t.DST_ALPHA,[Cy]:t.ONE_MINUS_SRC_COLOR,[id]:t.ONE_MINUS_SRC_ALPHA,[Ny]:t.ONE_MINUS_DST_COLOR,[by]:t.ONE_MINUS_DST_ALPHA,[Dy]:t.CONSTANT_COLOR,[Iy]:t.ONE_MINUS_CONSTANT_COLOR,[Uy]:t.CONSTANT_ALPHA,[Fy]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(L,fe,ee,he,ve,ie,we,Me,Et,ot){if(L===Ci){v===!0&&(Pe(t.BLEND),v=!1);return}if(v===!1&&(re(t.BLEND),v=!0),L!==_y){if(L!==h||ot!==P){if((_!==Er||C!==Er)&&(t.blendEquation(t.FUNC_ADD),_=Er,C=Er),ot)switch(L){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Dp:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ip:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}M=null,S=null,w=null,b=null,x.set(0,0,0),R=0,h=L,P=ot}return}ve=ve||fe,ie=ie||ee,we=we||he,(fe!==_||ve!==C)&&(t.blendEquationSeparate(Be[fe],Be[ve]),_=fe,C=ve),(ee!==M||he!==S||ie!==w||we!==b)&&(t.blendFuncSeparate(Qe[ee],Qe[he],Qe[ie],Qe[we]),M=ee,S=he,w=ie,b=we),(Me.equals(x)===!1||Et!==R)&&(t.blendColor(Me.r,Me.g,Me.b,Et),x.copy(Me),R=Et),h=L,P=!1}function Xe(L,fe){L.side===Mi?Pe(t.CULL_FACE):re(t.CULL_FACE);let ee=L.side===an;fe&&(ee=!ee),St(ee),L.blending===Ts&&L.transparent===!1?$e(Ci):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function St(L){N!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),N=L)}function pt(L){L!==vy?(re(t.CULL_FACE),L!==I&&(L===Np?t.cullFace(t.BACK):L===xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),I=L}function Mt(L){L!==X&&(G&&t.lineWidth(L),X=L)}function Pt(L,fe,ee){L?(re(t.POLYGON_OFFSET_FILL),(Q!==fe||B!==ee)&&(Q=fe,B=ee,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,ee))):Pe(t.POLYGON_OFFSET_FILL)}function ut(L){L?re(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function mt(L){L===void 0&&(L=t.TEXTURE0+K-1),te!==L&&(t.activeTexture(L),te=L)}function D(L,fe,ee){ee===void 0&&(te===null?ee=t.TEXTURE0+K-1:ee=te);let he=q[ee];he===void 0&&(he={type:void 0,texture:void 0},q[ee]=he),(he.type!==L||he.texture!==fe)&&(te!==ee&&(t.activeTexture(ee),te=ee),t.bindTexture(L,fe||oe[L]),he.type=L,he.texture=fe)}function Xt(){const L=q[te];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Je(){try{t.compressedTexImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function g(){try{t.texSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function F(){try{t.texSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ne(){try{t.texStorage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ae(){try{t.texStorage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function Y(){try{t.texImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function le(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function xe(L,fe){p[L]!==fe&&(t.pixelStorei(L,fe),p[L]=fe)}function ue(L){Ie.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ie.copy(L))}function de(L){Ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Ee(L,fe){let ee=u.get(fe);ee===void 0&&(ee=new WeakMap,u.set(fe,ee));let he=ee.get(L);he===void 0&&(he=t.getUniformBlockIndex(fe,L.name),ee.set(L,he))}function Re(L,fe){const he=u.get(fe).get(L);l.get(fe)!==he&&(t.uniformBlockBinding(fe,he,L.__bindingPointIndex),l.set(fe,he))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},te=null,q={},f={},m=new WeakMap,y=[],T=null,v=!1,h=null,_=null,M=null,S=null,C=null,w=null,b=null,x=new Ve(0,0,0),R=0,P=!1,N=null,I=null,X=null,Q=null,B=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Pe,bindFramebuffer:Le,drawBuffers:be,useProgram:yt,setBlending:$e,setMaterial:Xe,setFlipSided:St,setCullFace:pt,setLineWidth:Mt,setPolygonOffset:Pt,setScissorTest:ut,activeTexture:mt,bindTexture:D,unbindTexture:Xt,compressedTexImage2D:Je,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:xe,getParameter:le,updateUBOMapping:Ee,uniformBlockBinding:Re,texStorage2D:ne,texStorage3D:ae,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:ue,viewport:de,reset:De}}function Mw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,d=new WeakMap,p=new Set;let f;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(A,g){return y?new OffscreenCanvas(A,g):Nl("canvas")}function v(A,g,F){let k=1;const W=Je(A);if((W.width>F||W.height>F)&&(k=F/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(k*W.width),ae=Math.floor(k*W.height);f===void 0&&(f=T(ne,ae));const Y=g?T(ne,ae):f;return Y.width=ne,Y.height=ae,Y.getContext("2d").drawImage(A,0,0,ne,ae),Ne("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ne+"x"+ae+")."),Y}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),A;return A}function h(A){return A.generateMipmaps}function _(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,g,F,k,W,ne=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;k&&(ae=e.get("EXT_texture_norm16"),ae||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8),F===t.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),F===t.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),g===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),g===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8),F===t.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),F===t.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),g===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),F===t.UNSIGNED_INT&&(Y=t.RGB32UI),F===t.BYTE&&(Y=t.RGB8I),F===t.SHORT&&(Y=t.RGB16I),F===t.INT&&(Y=t.RGB32I)),g===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),F===t.UNSIGNED_INT&&(Y=t.RGBA32UI),F===t.BYTE&&(Y=t.RGBA8I),F===t.SHORT&&(Y=t.RGBA16I),F===t.INT&&(Y=t.RGBA32I)),g===t.RGB&&(F===t.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),F===t.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),g===t.RGBA){const J=ne?Pl:Ye.getTransfer(W);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=J===et?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),F===t.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function C(A,g){let F;return A?g===null||g===fi||g===Ha?F=t.DEPTH24_STENCIL8:g===si?F=t.DEPTH32F_STENCIL8:g===Va&&(F=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fi||g===Ha?F=t.DEPTH_COMPONENT24:g===si?F=t.DEPTH_COMPONENT32F:g===Va&&(F=t.DEPTH_COMPONENT16),F}function w(A,g){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function b(A){const g=A.target;g.removeEventListener("dispose",b),R(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function x(A){const g=A.target;g.removeEventListener("dispose",x),N(g)}function R(A){const g=i.get(A);if(g.__webglInit===void 0)return;const F=A.source,k=m.get(F);if(k){const W=k[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(A),Object.keys(k).length===0&&m.delete(F)}i.remove(A)}function P(A){const g=i.get(A);t.deleteTexture(g.__webglTexture);const F=A.source,k=m.get(F);delete k[g.__cacheKey],a.memory.textures--}function N(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let W=0;W<g.__webglFramebuffer[k].length;W++)t.deleteFramebuffer(g.__webglFramebuffer[k][W]);else t.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)t.deleteFramebuffer(g.__webglFramebuffer[k]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=A.textures;for(let k=0,W=F.length;k<W;k++){const ne=i.get(F[k]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(F[k])}i.remove(A)}let I=0;function X(){I=0}function Q(){return I}function B(A){I=A}function K(){const A=I;return A>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function G(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function O(A,g){const F=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const k=A.image;if(k===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(F,A,g);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+g)}function $(A,g){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Pe(F,A,g);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+g)}function te(A,g){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Pe(F,A,g);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+g)}function q(A,g){const F=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Le(F,A,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+g)}const ce={[dd]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[fd]:t.MIRRORED_REPEAT},Fe={[Ht]:t.NEAREST,[By]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[Pc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},Ie={[Hy]:t.NEVER,[Yy]:t.ALWAYS,[Gy]:t.LESS,[Zf]:t.LEQUAL,[Wy]:t.EQUAL,[Qf]:t.GEQUAL,[jy]:t.GREATER,[Xy]:t.NOTEQUAL};function Ge(A,g){if(g.type===si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===Pc||g.magFilter===vo||g.magFilter===Rr||g.minFilter===en||g.minFilter===Pc||g.minFilter===vo||g.minFilter===Rr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ce[g.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ce[g.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ce[g.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Fe[g.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Fe[g.minFilter]),g.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ht||g.minFilter!==vo&&g.minFilter!==Rr||g.type===si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Z(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",b));const k=g.source;let W=m.get(k);W===void 0&&(W={},m.set(k,W));const ne=G(g);if(ne!==A.__cacheKey){W[ne]===void 0&&(W[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[ne].usedTimes++;const ae=W[A.__cacheKey];ae!==void 0&&(W[A.__cacheKey].usedTimes--,ae.usedTimes===0&&P(g)),A.__cacheKey=ne,A.__webglTexture=W[ne].texture}return F}function oe(A,g,F){return Math.floor(Math.floor(A/F)/g)}function re(A,g,F,k){const ne=A.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{ne.sort((xe,ue)=>xe.start-ue.start);let ae=0;for(let xe=1;xe<ne.length;xe++){const ue=ne[ae],de=ne[xe],Ee=ue.start+ue.count,Re=oe(de.start,g.width,4),De=oe(ue.start,g.width,4);de.start<=Ee+1&&Re===De&&oe(de.start+de.count-1,g.width,4)===Re?ue.count=Math.max(ue.count,de.start+de.count-ue.start):(++ae,ne[ae]=de)}ne.length=ae+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let xe=0,ue=ne.length;xe<ue;xe++){const de=ne[xe],Ee=Math.floor(de.start/4),Re=Math.ceil(de.count/4),De=Ee%g.width,L=Math.floor(Ee/g.width),fe=Re,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,De),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,De,L,fe,ee,F,k,g.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function Pe(A,g,F){let k=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=t.TEXTURE_3D);const W=Z(A,g),ne=g.source;n.bindTexture(k,A.__webglTexture,t.TEXTURE0+F);const ae=i.get(ne);if(ne.version!==ae.__version||W===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ee=Ye.getPrimaries(Ye.workingColorSpace),he=g.colorSpace===Ki?null:Ye.getPrimaries(g.colorSpace),ve=g.colorSpace===Ki||ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let J=v(g.image,!1,r.maxTextureSize);J=Xt(g,J);const le=s.convert(g.format,g.colorSpace),xe=s.convert(g.type);let ue=S(g.internalFormat,le,xe,g.normalized,g.colorSpace,g.isVideoTexture);Ge(k,g);let de;const Ee=g.mipmaps,Re=g.isVideoTexture!==!0,De=ae.__version===void 0||W===!0,L=ne.dataReady,fe=w(g,J);if(g.isDepthTexture)ue=C(g.format===br,g.type),De&&(Re?n.texStorage2D(t.TEXTURE_2D,1,ue,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,le,xe,null));else if(g.isDataTexture)if(Ee.length>0){Re&&De&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)de=Ee[ee],Re?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,le,xe,de.data):n.texImage2D(t.TEXTURE_2D,ee,ue,de.width,de.height,0,le,xe,de.data);g.generateMipmaps=!1}else Re?(De&&n.texStorage2D(t.TEXTURE_2D,fe,ue,J.width,J.height),L&&re(g,J,le,xe)):n.texImage2D(t.TEXTURE_2D,0,ue,J.width,J.height,0,le,xe,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Re&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,Ee[0].width,Ee[0].height,J.depth);for(let ee=0,he=Ee.length;ee<he;ee++)if(de=Ee[ee],g.format!==jn)if(le!==null)if(Re){if(L)if(g.layerUpdates.size>0){const ve=om(de.width,de.height,g.format,g.type);for(const ie of g.layerUpdates){const we=de.data.subarray(ie*ve/de.data.BYTES_PER_ELEMENT,(ie+1)*ve/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ie,de.width,de.height,1,le,we)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,le,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,ue,de.width,de.height,J.depth,0,de.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,J.depth,le,xe,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,ue,de.width,de.height,J.depth,0,le,xe,de.data)}else{Re&&De&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Ee[0].width,Ee[0].height);for(let ee=0,he=Ee.length;ee<he;ee++)de=Ee[ee],g.format!==jn?le!==null?Re?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,le,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,ue,de.width,de.height,0,de.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de.width,de.height,le,xe,de.data):n.texImage2D(t.TEXTURE_2D,ee,ue,de.width,de.height,0,le,xe,de.data)}else if(g.isDataArrayTexture)if(Re){if(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,J.width,J.height,J.depth),L)if(g.layerUpdates.size>0){const ee=om(J.width,J.height,g.format,g.type);for(const he of g.layerUpdates){const ve=J.data.subarray(he*ee/J.data.BYTES_PER_ELEMENT,(he+1)*ee/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,xe,ve)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,xe,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,le,xe,J.data);else if(g.isData3DTexture)Re?(De&&n.texStorage3D(t.TEXTURE_3D,fe,ue,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,xe,J.data)):n.texImage3D(t.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,le,xe,J.data);else if(g.isFramebufferTexture){if(De)if(Re)n.texStorage2D(t.TEXTURE_2D,fe,ue,J.width,J.height);else{let ee=J.width,he=J.height;for(let ve=0;ve<fe;ve++)n.texImage2D(t.TEXTURE_2D,ve,ue,ee,he,0,le,xe,null),ee>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),J.parentNode!==ee){ee.appendChild(J),p.add(g),ee.onpaint=he=>{const ve=he.changedElements;for(const ie of p)ve.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const ve=t.RGBA,ie=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,ie,we,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Re&&De){const ee=Je(Ee[0]);n.texStorage2D(t.TEXTURE_2D,fe,ue,ee.width,ee.height)}for(let ee=0,he=Ee.length;ee<he;ee++)de=Ee[ee],Re?L&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,le,xe,de):n.texImage2D(t.TEXTURE_2D,ee,ue,le,xe,de);g.generateMipmaps=!1}else if(Re){if(De){const ee=Je(J);n.texStorage2D(t.TEXTURE_2D,fe,ue,ee.width,ee.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,xe,J)}else n.texImage2D(t.TEXTURE_2D,0,ue,le,xe,J);h(g)&&_(k),ae.__version=ne.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Le(A,g,F){if(g.image.length!==6)return;const k=Z(A,g),W=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const ne=i.get(W);if(W.version!==ne.__version||k===!0){n.activeTexture(t.TEXTURE0+F);const ae=Ye.getPrimaries(Ye.workingColorSpace),Y=g.colorSpace===Ki?null:Ye.getPrimaries(g.colorSpace),J=g.colorSpace===Ki||ae===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!le&&!xe?ue[ie]=v(g.image[ie],!0,r.maxCubemapSize):ue[ie]=xe?g.image[ie].image:g.image[ie],ue[ie]=Xt(g,ue[ie]);const de=ue[0],Ee=s.convert(g.format,g.colorSpace),Re=s.convert(g.type),De=S(g.internalFormat,Ee,Re,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,fe=ne.__version===void 0||k===!0,ee=W.dataReady;let he=w(g,de);Ge(t.TEXTURE_CUBE_MAP,g);let ve;if(le){L&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,De,de.width,de.height);for(let ie=0;ie<6;ie++){ve=ue[ie].mipmaps;for(let we=0;we<ve.length;we++){const Me=ve[we];g.format!==jn?Ee!==null?L?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Me.width,Me.height,Ee,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,De,Me.width,Me.height,0,Me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,0,0,Me.width,Me.height,Ee,Re,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we,De,Me.width,Me.height,0,Ee,Re,Me.data)}}}else{if(ve=g.mipmaps,L&&fe){ve.length>0&&he++;const ie=Je(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,De,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(xe){L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Ee,Re,ue[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,De,ue[ie].width,ue[ie].height,0,Ee,Re,ue[ie].data);for(let we=0;we<ve.length;we++){const Et=ve[we].image[ie].image;L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Et.width,Et.height,Ee,Re,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,De,Et.width,Et.height,0,Ee,Re,Et.data)}}else{L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee,Re,ue[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,De,Ee,Re,ue[ie]);for(let we=0;we<ve.length;we++){const Me=ve[we];L?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,0,0,Ee,Re,Me.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we+1,De,Ee,Re,Me.image[ie])}}}h(g)&&_(t.TEXTURE_CUBE_MAP),ne.__version=W.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function be(A,g,F,k,W,ne){const ae=s.convert(F.format,F.colorSpace),Y=s.convert(F.type),J=S(F.internalFormat,ae,Y,F.normalized,F.colorSpace),le=i.get(g),xe=i.get(F);if(xe.__renderTarget=g,!le.__hasExternalTextures){const ue=Math.max(1,g.width>>ne),de=Math.max(1,g.height>>ne);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,ne,J,ue,de,g.depth,0,ae,Y,null):n.texImage2D(W,ne,J,ue,de,0,ae,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),mt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,W,xe.__webglTexture,0,ut(g)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,W,xe.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(A,g,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),g.depthBuffer){const k=g.depthTexture,W=k&&k.isDepthTexture?k.type:null,ne=C(g.stencilBuffer,W),ae=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;mt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ut(g),ne,g.width,g.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ut(g),ne,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ne,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,A)}else{const k=g.textures;for(let W=0;W<k.length;W++){const ne=k[W],ae=s.convert(ne.format,ne.colorSpace),Y=s.convert(ne.type),J=S(ne.internalFormat,ae,Y,ne.normalized,ne.colorSpace);mt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ut(g),J,g.width,g.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ut(g),J,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,J,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(A,g,F){const k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",b)),W.__webglTexture===void 0){W.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,g.depthTexture);const le=s.convert(g.depthTexture.format),xe=s.convert(g.depthTexture.type);let ue;g.depthTexture.format===Ii?ue=t.DEPTH_COMPONENT24:g.depthTexture.format===br&&(ue=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ue,g.width,g.height,0,le,xe,null)}}else O(g.depthTexture,0);const ne=W.__webglTexture,ae=ut(g),Y=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,J=g.depthTexture.format===br?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ii)mt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ne,0);else if(g.depthTexture.format===br)mt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(A){const g=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const k=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=k}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Be(g.__webglFramebuffer[k],A,k);else{const k=A.texture.mipmaps;k&&k.length>0?Be(g.__webglFramebuffer[0],A,0):Be(g.__webglFramebuffer,A,0)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),yt(g.__webglDepthbuffer[k],A,!1);else{const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ne)}}else{const k=A.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),yt(g.__webglDepthbuffer,A,!1);else{const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(A,g,F){const k=i.get(A);g!==void 0&&be(k.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Qe(A)}function Xe(A){const g=A.texture,F=i.get(A),k=i.get(g);A.addEventListener("dispose",x);const W=A.textures,ne=A.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=g.version,a.memory.textures++),ne){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[Y][J]=t.createFramebuffer()}else F.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)F.__webglFramebuffer[Y]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ae)for(let Y=0,J=W.length;Y<J;Y++){const le=i.get(W[Y]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){const J=W[Y];F.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const le=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),ue=S(J.internalFormat,le,xe,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),de=ut(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),yt(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)be(F.__webglFramebuffer[Y][J],A,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else be(F.__webglFramebuffer[Y],A,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(g)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let Y=0,J=W.length;Y<J;Y++){const le=W[Y],xe=i.get(le);let ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,xe.__webglTexture),Ge(ue,le),be(F.__webglFramebuffer,A,le,t.COLOR_ATTACHMENT0+Y,ue,0),h(le)&&_(ue)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,k.__webglTexture),Ge(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)be(F.__webglFramebuffer[J],A,g,t.COLOR_ATTACHMENT0,Y,J);else be(F.__webglFramebuffer,A,g,t.COLOR_ATTACHMENT0,Y,0);h(g)&&_(Y),n.unbindTexture()}A.depthBuffer&&Qe(A)}function St(A){const g=A.textures;for(let F=0,k=g.length;F<k;F++){const W=g[F];if(h(W)){const ne=M(A),ae=i.get(W).__webglTexture;n.bindTexture(ne,ae),_(ne),n.unbindTexture()}}}const pt=[],Mt=[];function Pt(A){if(A.samples>0){if(mt(A)===!1){const g=A.textures,F=A.width,k=A.height;let W=t.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(A),Y=g.length>1;if(Y)for(let le=0;le<g.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<g.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,F,k,0,0,F,k,W,t.NEAREST),l===!0&&(pt.length=0,Mt.length=0,pt.push(t.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(pt.push(ne),Mt.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<g.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);const xe=i.get(g[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function ut(A){return Math.min(r.maxSamples,A.samples)}function mt(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(A){const g=a.render.frame;d.get(A)!==g&&(d.set(A,g),A.update())}function Xt(A,g){const F=A.colorSpace,k=A.format,W=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==bl&&F!==Ki&&(Ye.getTransfer(F)===et?(k!==jn||W!==Sn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",F)),g}function Je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=X,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=$e,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ew(t,e){function n(i,r=Ki){let s;const a=Ye.getTransfer(r);if(i===Sn)return t.UNSIGNED_BYTE;if(i===Xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===av)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ov)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===rv)return t.BYTE;if(i===sv)return t.SHORT;if(i===Va)return t.UNSIGNED_SHORT;if(i===jf)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Di)return t.HALF_FLOAT;if(i===lv)return t.ALPHA;if(i===cv)return t.RGB;if(i===jn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===br)return t.DEPTH_STENCIL;if(i===uv)return t.RED;if(i===$f)return t.RED_INTEGER;if(i===Br)return t.RG;if(i===qf)return t.RG_INTEGER;if(i===Kf)return t.RGBA_INTEGER;if(i===Qo||i===Jo||i===el||i===tl)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===xd||i===_d||i===yd||i===Sd||i===Cl||i===Md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vd||i===xd)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===yd)return s.COMPRESSED_R11_EAC;if(i===Sd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Cl)return s.COMPRESSED_RG11_EAC;if(i===Md)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Nd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ed)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Od||i===kd||i===Bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Od)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zd||i===Vd||i===Rl||i===Hd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ha?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
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

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:Tw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qt(new ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cw extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,m=null,y=null;const T=typeof XRWebGLBinding<"u",v=new Aw,h={},_=n.getContextAttributes();let M=null,S=null;const C=[],w=[],b=new ke;let x=null;const R=new Nn;R.viewport=new vt;const P=new Nn;P.viewport=new vt;const N=[R,P],I=new FS;let X=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=C[Z];return oe===void 0&&(oe=new kc,C[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=C[Z];return oe===void 0&&(oe=new kc,C[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=C[Z];return oe===void 0&&(oe=new kc,C[Z]=oe),oe.getHandSpace()};function B(Z){const oe=w.indexOf(Z.inputSource);if(oe===-1)return;const re=C[oe];re!==void 0&&(re.update(Z.inputSource,Z.frame,u||a),re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<C.length;Z++){const oe=w[Z];oe!==null&&(w[Z]=null,C[Z].disconnect(oe))}X=null,Q=null,v.reset();for(const Z in h)delete h[Z];e.setRenderTarget(M),m=null,f=null,p=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Pe=null,Le=null;_.depth&&(Le=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=_.stencil?br:Ii,Pe=_.stencil?Ha:fi);const be={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ui(f.textureWidth,f.textureHeight,{format:jn,type:Sn,depthTexture:new Os(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ui(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(Z){for(let oe=0;oe<Z.removed.length;oe++){const re=Z.removed[oe],Pe=w.indexOf(re);Pe>=0&&(w[Pe]=null,C[Pe].disconnect(re))}for(let oe=0;oe<Z.added.length;oe++){const re=Z.added[oe];let Pe=w.indexOf(re);if(Pe===-1){for(let be=0;be<C.length;be++)if(be>=w.length){w.push(re),Pe=be;break}else if(w[be]===null){w[be]=re,Pe=be;break}if(Pe===-1)break}const Le=C[Pe];Le&&Le.connect(re)}}const O=new z,$=new z;function te(Z,oe,re){O.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Pe=O.distanceTo($),Le=oe.projectionMatrix.elements,be=re.projectionMatrix.elements,yt=Le[14]/(Le[10]-1),Be=Le[14]/(Le[10]+1),Qe=(Le[9]+1)/Le[5],$e=(Le[9]-1)/Le[5],Xe=(Le[8]-1)/Le[0],St=(be[8]+1)/be[0],pt=yt*Xe,Mt=yt*St,Pt=Pe/(-Xe+St),ut=Pt*-Xe;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ut),Z.translateZ(Pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const mt=yt+Pt,D=Be+Pt,Xt=pt-ut,Je=Mt+(Pe-ut),A=Qe*Be/D*mt,g=$e*Be/D*mt;Z.projectionMatrix.makePerspective(Xt,Je,A,g,mt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function q(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,re=Z.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(re=v.depthFar)),I.near=P.near=R.near=oe,I.far=P.far=R.far=re,(X!==I.near||Q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,Q=I.far),I.layers.mask=Z.layers.mask|6,R.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Pe=Z.parent,Le=I.cameras;q(I,Pe);for(let be=0;be<Le.length;be++)q(Le[be],Pe);Le.length===2?te(I,R,P):I.projectionMatrix.copy(R.projectionMatrix),ce(Z,I,Pe)};function ce(Z,oe,re){re===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(I)},this.getCameraTexture=function(Z){return h[Z]};let Fe=null;function Ie(Z,oe){if(d=oe.getViewerPose(u||a),y=oe,d!==null){const re=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Pe=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Be=0;Be<re.length;Be++){const Qe=re[Be];let $e=null;if(m!==null)$e=m.getViewport(Qe);else{const St=p.getViewSubImage(f,Qe);$e=St.viewport,Be===0&&(e.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(S))}let Xe=N[Be];Xe===void 0&&(Xe=new Nn,Xe.layers.enable(Be),Xe.viewport=new vt,N[Be]=Xe),Xe.matrix.fromArray(Qe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Qe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set($e.x,$e.y,$e.width,$e.height),Be===0&&(I.matrix.copy(Xe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(Xe)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=i.getBinding();const Be=p.getDepthInformation(re[0]);Be&&Be.isValid&&Be.texture&&v.init(Be,r.renderState)}if(Le&&Le.includes("camera-access")&&T){e.state.unbindTexture(),p=i.getBinding();for(let Be=0;Be<re.length;Be++){const Qe=re[Be].camera;if(Qe){let $e=h[Qe];$e||($e=new xv,h[Qe]=$e);const Xe=p.getCameraImage(Qe);$e.sourceTexture=Xe}}}}for(let re=0;re<C.length;re++){const Pe=w[re],Le=C[re];Pe!==null&&Le!==void 0&&Le.update(Pe,oe,u||a)}Fe&&Fe(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),y=null}const Ge=new Mv;Ge.setAnimationLoop(Ie),this.setAnimationLoop=function(Z){Fe=Z},this.dispose=function(){}}}const Rw=new At,bv=new Ue;bv.set(-1,0,0,0,1,0,0,0,1);function bw(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,_v(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,_,M,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),p(v,h)):h.isMeshPhongMaterial?(s(v,h),d(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),f(v,h),h.isMeshPhysicalMaterial&&m(v,h,S)):h.isMeshMatcapMaterial?(s(v,h),y(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),T(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(a(v,h),h.isLineDashedMaterial&&o(v,h)):h.isPointsMaterial?l(v,h,_,M):h.isSpriteMaterial?u(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===an&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===an&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const _=e.get(h),M=_.envMap,S=_.envMapRotation;M&&(v.envMap.value=M,v.envMapRotation.value.setFromMatrix4(Rw.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(bv),v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function a(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function o(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,_,M){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*_,v.scale.value=M*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function d(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function p(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function f(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function m(v,h,_){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,h){h.matcap&&(v.matcap.value=h.matcap)}function T(v,h){const _=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Pw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){const w=C.program;i.uniformBlockBinding(S,w)}function u(S,C){let w=r[S.id];w===void 0&&(v(S),w=d(S),r[S.id]=w,S.addEventListener("dispose",_));const b=C.program;i.updateUBOMapping(S,b);const x=e.render.frame;s[S.id]!==x&&(f(S),s[S.id]=x)}function d(S){const C=p();S.__bindingPointIndex=C;const w=t.createBuffer(),b=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,w),w}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const C=r[S.id],w=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let x=0,R=w.length;x<R;x++){const P=w[x];if(Array.isArray(P))for(let N=0,I=P.length;N<I;N++)m(P[N],x,N,b);else m(P,x,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,C,w,b){if(T(S,C,w,b)===!0){const x=S.__offset,R=S.value;if(Array.isArray(R)){let P=0;for(let N=0;N<R.length;N++){const I=R[N],X=h(I);y(I,S.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function y(S,C,w){typeof S=="number"||typeof S=="boolean"?C[0]=S:S.isMatrix3?(C[0]=S.elements[0],C[1]=S.elements[1],C[2]=S.elements[2],C[3]=0,C[4]=S.elements[3],C[5]=S.elements[4],C[6]=S.elements[5],C[7]=0,C[8]=S.elements[6],C[9]=S.elements[7],C[10]=S.elements[8],C[11]=0):ArrayBuffer.isView(S)?C.set(new S.constructor(S.buffer,S.byteOffset,C.length)):S.toArray(C,w)}function T(S,C,w,b){const x=S.value,R=C+"_"+w;if(b[R]===void 0)return typeof x=="number"||typeof x=="boolean"?b[R]=x:ArrayBuffer.isView(x)?b[R]=x.slice():b[R]=x.clone(),!0;{const P=b[R];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return b[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function v(S){const C=S.uniforms;let w=0;const b=16;for(let R=0,P=C.length;R<P;R++){const N=Array.isArray(C[R])?C[R]:[C[R]];for(let I=0,X=N.length;I<X;I++){const Q=N[I],B=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,G=B.length;K<G;K++){const O=B[K],$=h(O),te=w%b,q=te%$.boundary,ce=te+q;w+=q,ce!==0&&b-ce<$.storage&&(w+=b-ce),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=$.storage}}}const x=w%b;return x>0&&(w+=b-x),S.__size=w,S.__cache={},this}function h(S){const C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(C.boundary=16,C.storage=S.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",S),C}function _(S){const C=S.target;C.removeEventListener("dispose",_);const w=a.indexOf(C.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:M}}const Nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function Lw(){return ti===null&&(ti=new xS(Nw,16,16,Br,Di),ti.name="DFG_LUT",ti.minFilter=en,ti.magFilter=en,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Dw{constructor(e={}){const{canvas:n=qy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Sn}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const T=m,v=new Set([Kf,qf,$f]),h=new Set([Sn,fi,Va,Ha,Xf,Yf]),_=new Uint32Array(4),M=new Int32Array(4),S=new z;let C=null,w=null;const b=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,I=null,X=null,Q=null,B=null;this._outputColorSpace=yn;let K=0,G=0,O=null,$=-1,te=null;const q=new vt,ce=new vt;let Fe=null;const Ie=new Ve(0);let Ge=0,Z=n.width,oe=n.height,re=1,Pe=null,Le=null;const be=new vt(0,0,Z,oe),yt=new vt(0,0,Z,oe);let Be=!1;const Qe=new nh;let $e=!1,Xe=!1;const St=new At,pt=new z,Mt=new vt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function mt(){return O===null?re:1}let D=i;function Xt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",qn,!1),D===null){const U="webgl2";if(D=Xt(U,E),D===null)throw Xt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ke("WebGLRenderer: "+E.message),E}let Je,A,g,F,k,W,ne,ae,Y,J,le,xe,ue,de,Ee,Re,De,L,fe,ee,he,ve,ie;function we(){Je=new L1(D),Je.init(),he=new Ew(D,Je),A=new T1(D,Je,e,he),g=new Sw(D,Je),A.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),X=D.createFramebuffer(),Q=D.createFramebuffer(),B=D.createFramebuffer(),F=new U1(D),k=new ow,W=new Mw(D,Je,g,k,A,he,F),ne=new N1(P),ae=new BS(D),ve=new M1(D,ae),Y=new D1(D,ae,F,ve),J=new O1(D,Y,ae,ve,F),L=new F1(D,A,W),Ee=new w1(k),le=new aw(P,ne,Je,A,ve,Ee),xe=new bw(P,k),ue=new cw,de=new mw(Je),De=new S1(P,ne,g,J,y,l),Re=new yw(P,J,A),ie=new Pw(D,F,A,g),fe=new E1(D,Je,F),ee=new I1(D,Je,F),F.programs=le.programs,P.capabilities=A,P.extensions=Je,P.properties=k,P.renderLists=ue,P.shadowMap=Re,P.state=g,P.info=F}we(),T!==Sn&&(R=new B1(T,n.width,n.height,o,r,s));const Me=new Cw(P,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(Z,oe,!1))},this.getSize=function(E){return E.set(Z,oe)},this.setSize=function(E,U,j=!0){if(Me.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,oe=U,n.width=Math.floor(E*re),n.height=Math.floor(U*re),j===!0&&(n.style.width=E+"px",n.style.height=U+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Z*re,oe*re).floor()},this.setDrawingBufferSize=function(E,U,j){Z=E,oe=U,re=j,n.width=Math.floor(E*j),n.height=Math.floor(U*j),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(T===Sn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,U,j,V){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,U,j,V),g.viewport(q.copy(be).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(yt)},this.setScissor=function(E,U,j,V){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,U,j,V),g.scissor(ce.copy(yt).multiplyScalar(re).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){g.setScissorTest(Be=E)},this.setOpaqueSort=function(E){Pe=E},this.setTransparentSort=function(E){Le=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,j=!0){let V=0;if(E){let H=!1;if(O!==null){const ge=O.texture.format;H=v.has(ge)}if(H){const ge=O.texture.type,ye=h.has(ge),me=De.getClearColor(),Te=De.getClearAlpha(),Ae=me.r,Oe=me.g,He=me.b;ye?(_[0]=Ae,_[1]=Oe,_[2]=He,_[3]=Te,D.clearBufferuiv(D.COLOR,0,_)):(M[0]=Ae,M[1]=Oe,M[2]=He,M[3]=Te,D.clearBufferiv(D.COLOR,0,M))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",qn,!1),De.dispose(),ue.dispose(),de.dispose(),k.dispose(),ne.dispose(),J.dispose(),ve.dispose(),ie.dispose(),le.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",fh),Me.removeEventListener("sessionend",hh),mr.stop()};function Et(E){E.preventDefault(),Bp("WebGLRenderer: Context Lost."),N=!0}function ot(){Bp("WebGLRenderer: Context Restored."),N=!1;const E=F.autoReset,U=Re.enabled,j=Re.autoUpdate,V=Re.needsUpdate,H=Re.type;we(),F.autoReset=E,Re.enabled=U,Re.autoUpdate=j,Re.needsUpdate=V,Re.type=H}function qn(E){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Kn(E){const U=E.target;U.removeEventListener("dispose",Kn),Pv(U)}function Pv(E){Nv(E),k.remove(E)}function Nv(E){const U=k.get(E).programs;U!==void 0&&(U.forEach(function(j){le.releaseProgram(j)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,j,V,H,ge){U===null&&(U=Pt);const ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=Iv(E,U,j,V,H);g.setMaterial(V,ye);let Te=j.index,Ae=1;if(V.wireframe===!0){if(Te=Y.getWireframeAttribute(j),Te===void 0)return;Ae=2}const Oe=j.drawRange,He=j.attributes.position;let Ce=Oe.start*Ae,it=(Oe.start+Oe.count)*Ae;ge!==null&&(Ce=Math.max(Ce,ge.start*Ae),it=Math.min(it,(ge.start+ge.count)*Ae)),Te!==null?(Ce=Math.max(Ce,0),it=Math.min(it,Te.count)):He!=null&&(Ce=Math.max(Ce,0),it=Math.min(it,He.count));const Ct=it-Ce;if(Ct<0||Ct===1/0)return;ve.setup(H,V,me,j,Te);let Tt,st=fe;if(Te!==null&&(Tt=ae.get(Te),st=ee,st.setIndex(Tt)),H.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*mt()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(H.isLine){let Yt=V.linewidth;Yt===void 0&&(Yt=1),g.setLineWidth(Yt*mt()),H.isLineSegments?st.setMode(D.LINES):H.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else H.isPoints?st.setMode(D.POINTS):H.isSprite&&st.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Yt=H._multiDrawStarts,_e=H._multiDrawCounts,gn=H._multiDrawCount,qe=Te?ae.get(Te).bytesPerElement:1,Cn=k.get(V).currentProgram.getUniforms();for(let Zn=0;Zn<gn;Zn++)Cn.setValue(D,"_gl_DrawID",Zn),st.render(Yt[Zn]/qe,_e[Zn])}else if(H.isInstancedMesh)st.renderInstances(Ce,Ct,H.count);else if(j.isInstancedBufferGeometry){const Yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_e=Math.min(j.instanceCount,Yt);st.renderInstances(Ce,Ct,_e)}else st.render(Ce,Ct)};function dh(E,U,j){E.transparent===!0&&E.side===Mi&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,Qa(E,U,j),E.side=ur,E.needsUpdate=!0,Qa(E,U,j),E.side=Mi):Qa(E,U,j)}this.compile=function(E,U,j=null){j===null&&(j=E),w=de.get(j),w.init(U),x.push(w),j.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==j&&E.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];dh(me,j,H),V.add(me)}else dh(ge,j,H),V.add(ge)}),w=x.pop(),V},this.compileAsync=function(E,U,j=null){const V=this.compile(E,U,j);return new Promise(H=>{function ge(){if(V.forEach(function(ye){k.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){H(E);return}setTimeout(ge,10)}Je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Jl=null;function Lv(E){Jl&&Jl(E)}function fh(){mr.stop()}function hh(){mr.start()}const mr=new Mv;mr.setAnimationLoop(Lv),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(E){Jl=E,Me.setAnimationLoop(E),E===null?mr.stop():mr.start()},Me.addEventListener("sessionstart",fh),Me.addEventListener("sessionend",hh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(E,U);const j=Me.enabled===!0&&Me.isPresenting===!0,V=R!==null&&(O===null||j)&&R.begin(P,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(U),U=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,U,O),w=de.get(E,x.length),w.init(U),w.state.textureUnits=W.getTextureUnits(),x.push(w),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qe.setFromProjectionMatrix(St,ai,U.reversedDepth),Xe=this.localClippingEnabled,$e=Ee.init(this.clippingPlanes,Xe),C=ue.get(E,b.length),C.init(),b.push(C),Me.enabled===!0&&Me.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&ec(ye,U,-1/0,P.sortObjects)}ec(E,U,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(Pe,Le,U.reversedDepth),ut=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ut&&De.addToRenderList(C,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&Ee.beginShadows();const H=w.state.shadowsArray;if(Re.render(H,E,U),$e===!0&&Ee.endShadows(),(V&&R.hasRenderPass())===!1){const ye=C.opaque,me=C.transmissive;if(w.setupLights(),U.isArrayCamera){const Te=U.cameras;if(me.length>0)for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const He=Te[Ae];mh(ye,me,E,He)}ut&&De.render(E);for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const He=Te[Ae];ph(C,E,He,He.viewport)}}else me.length>0&&mh(ye,me,E,U),ut&&De.render(E),ph(C,E,U)}O!==null&&G===0&&(W.updateMultisampleRenderTarget(O),W.updateRenderTargetMipmap(O)),V&&R.end(P),E.isScene===!0&&E.onAfterRender(P,E,U),ve.resetDefaultState(),$=-1,te=null,x.pop(),x.length>0?(w=x[x.length-1],W.setTextureUnits(w.state.textureUnits),$e===!0&&Ee.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?C=b[b.length-1]:C=null,I!==null&&I.renderEnd()};function ec(E,U,j,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Qe.intersectsSprite(E)){V&&Mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const ye=J.update(E),me=E.material;me.visible&&C.push(E,ye,me,j,Mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Qe.intersectsObject(E))){const ye=J.update(E),me=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Mt.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Mt.copy(ye.boundingSphere.center)),Mt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(me)){const Te=ye.groups;for(let Ae=0,Oe=Te.length;Ae<Oe;Ae++){const He=Te[Ae],Ce=me[He.materialIndex];Ce&&Ce.visible&&C.push(E,ye,Ce,j,Mt.z,He)}}else me.visible&&C.push(E,ye,me,j,Mt.z,null)}}const ge=E.children;for(let ye=0,me=ge.length;ye<me;ye++)ec(ge[ye],U,j,V)}function ph(E,U,j,V){const{opaque:H,transmissive:ge,transparent:ye}=E;w.setupLightsView(j),$e===!0&&Ee.setGlobalState(P.clippingPlanes,j),V&&g.viewport(q.copy(V)),H.length>0&&Za(H,U,j),ge.length>0&&Za(ge,U,j),ye.length>0&&Za(ye,U,j),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function mh(E,U,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Ce=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:Ce?Di:Sn,minFilter:Rr,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ge=w.state.transmissionRenderTarget[V.id],ye=V.viewport||q;ge.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(Ie),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),ut&&De.render(j);const Oe=P.toneMapping;P.toneMapping=ci;const He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),$e===!0&&Ee.setGlobalState(P.clippingPlanes,V),Za(E,j,V),W.updateMultisampleRenderTarget(ge),W.updateRenderTargetMipmap(ge),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let it=0,Ct=U.length;it<Ct;it++){const Tt=U[it],{object:st,geometry:Yt,material:_e,group:gn}=Tt;if(_e.side===Mi&&st.layers.test(V.layers)){const qe=_e.side;_e.side=an,_e.needsUpdate=!0,gh(st,j,V,Yt,_e,gn),_e.side=qe,_e.needsUpdate=!0,Ce=!0}}Ce===!0&&(W.updateMultisampleRenderTarget(ge),W.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Te,Ae),P.setClearColor(Ie,Ge),He!==void 0&&(V.viewport=He),P.toneMapping=Oe}function Za(E,U,j){const V=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ge=E.length;H<ge;H++){const ye=E[H],{object:me,geometry:Te,group:Ae}=ye;let Oe=ye.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),me.layers.test(j.layers)&&gh(me,U,j,Te,Oe,Ae)}}function gh(E,U,j,V,H,ge){E.onBeforeRender(P,U,j,V,H,ge),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,U,j,V,E,ge),H.transparent===!0&&H.side===Mi&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,P.renderBufferDirect(j,U,V,H,E,ge),H.side=ur,H.needsUpdate=!0,P.renderBufferDirect(j,U,V,H,E,ge),H.side=Mi):P.renderBufferDirect(j,U,V,H,E,ge),E.onAfterRender(P,U,j,V,H,ge)}function Qa(E,U,j){U.isScene!==!0&&(U=Pt);const V=k.get(E),H=w.state.lights,ge=w.state.shadowsArray,ye=H.state.version,me=le.getParameters(E,H.state,ge,U,j,w.state.lightProbeGridArray),Te=le.getProgramCacheKey(me);let Ae=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ne.get(E.envMap||V.environment,Oe),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Kn),Ae=new Map,V.programs=Ae);let He=Ae.get(Te);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===ye)return xh(E,me),He}else me.uniforms=le.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,j,me),E.onBeforeCompile(me,P),He=le.acquireProgram(me,Te),Ae.set(Te,He),V.uniforms=me.uniforms;const Ce=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Ee.uniform),xh(E,me),V.needsLights=Fv(E),V.lightsStateVersion=ye,V.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=He,V.uniformsList=null,He}function vh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=nl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function xh(E,U){const j=k.get(E);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function Dv(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let j=0,V=E.length;j<V;j++){const H=E[j];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Iv(E,U,j,V,H){U.isScene!==!0&&(U=Pt),W.resetTextureUnits();const ge=U.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,me=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ye.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=ne.get(V.envMap||ye,Te),Oe=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,He=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,Ct=!!j.morphAttributes.color;let Tt=ci;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const st=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Yt=st!==void 0?st.length:0,_e=k.get(V),gn=w.state.lights;if($e===!0&&(Xe===!0||E!==te)){const lt=E===te&&V.id===$;Ee.setState(V,E,lt)}let qe=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==gn.state.version||_e.outputColorSpace!==me||H.isBatchedMesh&&_e.batching===!1||!H.isBatchedMesh&&_e.batching===!0||H.isBatchedMesh&&_e.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&_e.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&_e.instancing===!1||!H.isInstancedMesh&&_e.instancing===!0||H.isSkinnedMesh&&_e.skinning===!1||!H.isSkinnedMesh&&_e.skinning===!0||H.isInstancedMesh&&_e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_e.instancingMorph===!1&&H.morphTexture!==null||_e.envMap!==Ae||V.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ee.numPlanes||_e.numIntersection!==Ee.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==He||_e.morphTargets!==Ce||_e.morphNormals!==it||_e.morphColors!==Ct||_e.toneMapping!==Tt||_e.morphTargetsCount!==Yt||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,_e.__version=V.version);let Cn=_e.currentProgram;qe===!0&&(Cn=Qa(V,U,H),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Cn,_e));let Zn=!1,Fi=!1,Gr=!1;const at=Cn.getUniforms(),Rt=_e.uniforms;if(g.useProgram(Cn.program)&&(Zn=!0,Fi=!0,Gr=!0),V.id!==$&&($=V.id,Fi=!0),_e.needsLights){const lt=Dv(w.state.lightProbeGridArray,H);_e.lightProbeGrid!==lt&&(_e.lightProbeGrid=lt,Fi=!0)}if(Zn||te!==E){g.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",E.projectionMatrix),at.setValue(D,"viewMatrix",E.matrixWorldInverse);const ki=at.map.cameraPosition;ki!==void 0&&ki.setValue(D,pt.setFromMatrixPosition(E.matrixWorld)),A.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,Fi=!0,Gr=!0)}if(_e.needsLights&&(gn.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",gn.state.directionalShadowMap,W),gn.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",gn.state.spotShadowMap,W),gn.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",gn.state.pointShadowMap,W)),H.isSkinnedMesh){at.setOptional(D,H,"bindMatrix"),at.setOptional(D,H,"bindMatrixInverse");const lt=H.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(D,"boneTexture",lt.boneTexture,W))}H.isBatchedMesh&&(at.setOptional(D,H,"batchingTexture"),at.setValue(D,"batchingTexture",H._matricesTexture,W),at.setOptional(D,H,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",H._indirectTexture,W),at.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",H._colorsTexture,W));const Oi=j.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&L.update(H,j,Cn),(Fi||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,at.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Rt.envMapIntensity.value=U.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Lw()),Fi){if(at.setValue(D,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&Uv(Rt,Gr),ge&&V.fog===!0&&xe.refreshFogUniforms(Rt,ge),xe.refreshMaterialUniforms(Rt,V,re,oe,w.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const lt=_e.lightProbeGrid;Rt.probesSH.value=lt.texture,Rt.probesMin.value.copy(lt.boundingBox.min),Rt.probesMax.value.copy(lt.boundingBox.max),Rt.probesResolution.value.copy(lt.resolution)}nl.upload(D,vh(_e),Rt,W)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(nl.upload(D,vh(_e),Rt,W),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(D,"center",H.center),at.setValue(D,"modelViewMatrix",H.modelViewMatrix),at.setValue(D,"normalMatrix",H.normalMatrix),at.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const lt=V.uniformsGroups;for(let ki=0,Wr=lt.length;ki<Wr;ki++){const _h=lt[ki];ie.update(_h,Cn),ie.bind(_h,Cn)}}return Cn}function Uv(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Fv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,U,j){const V=k.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(E.texture).__webglTexture=U,k.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const j=k.get(E);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,j=0){O=E,K=U,G=j;let V=null,H=!1,ge=!1;if(E){const me=k.get(E);if(me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),q.copy(E.viewport),ce.copy(E.scissor),Fe=E.scissorTest,g.viewport(q),g.scissor(ce),g.setScissorTest(Fe),$=-1;return}else if(me.__webglFramebuffer===void 0)W.setupRenderTarget(E);else if(me.__hasExternalTextures)W.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(me.__boundDepthTexture!==Oe){if(Oe!==null&&k.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Ae=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?V=Ae[U][j]:V=Ae[U],H=!0):E.samples>0&&W.useMultisampledRTT(E)===!1?V=k.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[j]:V=Ae,q.copy(E.viewport),ce.copy(E.scissor),Fe=E.scissorTest}else q.copy(be).multiplyScalar(re).floor(),ce.copy(yt).multiplyScalar(re).floor(),Fe=Be;if(j!==0&&(V=X),g.bindFramebuffer(D.FRAMEBUFFER,V)&&g.drawBuffers(E,V),g.viewport(q),g.scissor(ce),g.setScissorTest(Fe),H){const me=k.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,j)}else if(ge){const me=U;for(let Te=0;Te<E.textures.length;Te++){const Ae=k.get(E.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,j,me)}}else if(E!==null&&j!==0){const me=k.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,j)}$=-1},this.readRenderTargetPixels=function(E,U,j,V,H,ge,ye,me=0){if(!(E&&E.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){g.bindFramebuffer(D.FRAMEBUFFER,Te);try{const Ae=E.textures[me],Oe=Ae.format,He=Ae.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(Oe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(He)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&j>=0&&j<=E.height-H&&D.readPixels(U,j,V,H,he.convert(Oe),he.convert(He),ge)}finally{const Ae=O!==null?k.get(O).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,j,V,H,ge,ye,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(U>=0&&U<=E.width-V&&j>=0&&j<=E.height-H){g.bindFramebuffer(D.FRAMEBUFFER,Te);const Ae=E.textures[me],Oe=Ae.format,He=Ae.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(U,j,V,H,he.convert(Oe),he.convert(He),0);const it=O!==null?k.get(O).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,it);const Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ky(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ce),D.deleteSync(Ct),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,j=0){const V=Math.pow(2,-j),H=Math.floor(E.image.width*V),ge=Math.floor(E.image.height*V),ye=U!==null?U.x:0,me=U!==null?U.y:0;W.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,ye,me,H,ge),g.unbindTexture()},this.copyTextureToTexture=function(E,U,j=null,V=null,H=0,ge=0){let ye,me,Te,Ae,Oe,He,Ce,it,Ct;const Tt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(j!==null)ye=j.max.x-j.min.x,me=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,Oe=j.min.y,He=j.isBox3?j.min.z:0;else{const Rt=Math.pow(2,-H);ye=Math.floor(Tt.width*Rt),me=Math.floor(Tt.height*Rt),E.isDataArrayTexture?Te=Tt.depth:E.isData3DTexture?Te=Math.floor(Tt.depth*Rt):Te=1,Ae=0,Oe=0,He=0}V!==null?(Ce=V.x,it=V.y,Ct=V.z):(Ce=0,it=0,Ct=0);const st=he.convert(U.format),Yt=he.convert(U.type);let _e;U.isData3DTexture?(W.setTexture3D(U,0),_e=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(W.setTexture2DArray(U,0),_e=D.TEXTURE_2D_ARRAY):(W.setTexture2D(U,0),_e=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const gn=g.getParameter(D.UNPACK_ROW_LENGTH),qe=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Cn=g.getParameter(D.UNPACK_SKIP_PIXELS),Zn=g.getParameter(D.UNPACK_SKIP_ROWS),Fi=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),g.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),g.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const Gr=E.isDataArrayTexture||E.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Rt=k.get(E),Oi=k.get(U),lt=k.get(Rt.__renderTarget),ki=k.get(Oi.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Wr=0;Wr<Te;Wr++)Gr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(E).__webglTexture,H,He+Wr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(U).__webglTexture,ge,Ct+Wr)),D.blitFramebuffer(Ae,Oe,ye,me,Ce,it,ye,me,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||k.has(E)){const Rt=k.get(E),Oi=k.get(U);g.bindFramebuffer(D.READ_FRAMEBUFFER,Q),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let lt=0;lt<Te;lt++)Gr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,H,He+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,H),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oi.__webglTexture,ge,Ct+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Oi.__webglTexture,ge),H!==0?D.blitFramebuffer(Ae,Oe,ye,me,Ce,it,ye,me,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(_e,ge,Ce,it,Ct+lt,Ae,Oe,ye,me):D.copyTexSubImage2D(_e,ge,Ce,it,Ae,Oe,ye,me);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(_e,ge,Ce,it,Ct,ye,me,Te,st,Yt,Tt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,ge,Ce,it,Ct,ye,me,Te,st,Tt.data):D.texSubImage3D(_e,ge,Ce,it,Ct,ye,me,Te,st,Yt,Tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ce,it,ye,me,st,Yt,Tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ce,it,Tt.width,Tt.height,st,Tt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ce,it,ye,me,st,Yt,Tt);g.pixelStorei(D.UNPACK_ROW_LENGTH,gn),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Cn),g.pixelStorei(D.UNPACK_SKIP_ROWS,Zn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Fi),ge===0&&U.generateMipmaps&&D.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(E){k.get(E).__webglFramebuffer===void 0&&W.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?W.setTextureCube(E,0):E.isData3DTexture?W.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?W.setTexture2DArray(E,0):W.setTexture2D(E,0),g.unbindTexture()},this.resetState=function(){K=0,G=0,O=null,g.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function Iw({viewMode:t="front"}){const e=tt.useRef(null);return tt.useEffect(()=>{const n=e.current;if(!n)return;const i=new Dw({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.outputColorSpace=yn,i.toneMapping=Wf,i.toneMappingExposure=1.15,i.shadowMap.enabled=!0,i.shadowMap.type=q0,n.appendChild(i.domElement);const r=new Kp,s=new Nn(30,n.clientWidth/Math.max(n.clientHeight,1),.05,50);function a(){if(!n)return;const A=n.clientWidth,g=n.clientHeight;i.setSize(A,g,!1),s.aspect=A/Math.max(g,1),s.updateProjectionMatrix()}const o=new ResizeObserver(a);o.observe(n),a();const l=new jd(i);l.compileEquirectangularShader();const u=new Kp,d=new js(10,10,10),p=new th({color:16777215,side:an});u.add(new Qt(d,p));const f=l.fromScene(u).texture;r.environment=f;const m=new iu(16777215,2.2);m.position.set(-2.6,3.8,2.2),m.castShadow=!0,m.shadow.mapSize.width=1024,m.shadow.mapSize.height=1024,m.shadow.bias=-1e-4,r.add(m);const y=new iu(16777215,1.05);y.position.set(1.2,-.4,3),r.add(y);const T=new iu(16777215,1.9);T.position.set(2.9,2.2,-2.6),r.add(T),r.add(new LS(16777215,14211294,1.15));const v=new Qt(new ks(6,6),new ES({opacity:.16}));v.rotation.x=-Math.PI/2,v.position.y=-.312,v.receiveShadow=!0,r.add(v);const h=[[.052,.72],[.088,.69],[.15,.652],[.146,.6],[.153,.545],[.141,.485],[.121,.418],[.132,.36],[.158,.282],[.156,.21],[.14,.14],[.086,.108],[.03,.096]],_=h.map(([A,g])=>new ke(A,g)),M=new ih(_,96);M.computeVertexNormals(),M.scale(1,1,.74);const S=new tu({color:14605269,envMap:f,envMapIntensity:.8,roughness:.62,metalness:0,clearcoat:.12});S.sheen=.25,S.sheenRoughness=.6,S.sheenColor=new Ve(16777215);const C=new ha,w=new Qt(M,S);w.castShadow=!0,w.receiveShadow=!0,C.add(w);const b=new Qt(new rh(.052,32,16,0,Math.PI*2,0,Math.PI/2),S);b.position.y=.72,b.scale.z=.74,C.add(b);const x=new tu({color:2762532,envMap:f,envMapIntensity:.7,roughness:.42,metalness:.85}),R=new Qt(new Ll(.017,.017,.42,24),x);R.position.y=-.09,R.castShadow=!0,C.add(R);const P=new Qt(new Ll(.16,.185,.022,48),x);P.position.y=-.3,P.castShadow=!0,P.receiveShadow=!0,C.add(P),r.add(C);function N(A,g,F){let k=0;for(let le=0;le<h.length-1;le++){const[xe,ue]=h[le],[de,Ee]=h[le+1];if(g<=ue&&g>=Ee){const Re=(ue-g)/Math.max(ue-Ee,1e-6);k=xe+(de-xe)*Re;break}}if(k===0)return null;const W=.012,ne=k+W,ae=(k+W)*.74,Y=Math.hypot(A/ne,F/ae);if(Y>=1)return null;const J=1/Math.max(Y,1e-6);return[A*J,g,F*J]}const I=56,X=40,Q=.62,B=.598,K=.74,G=.178,O=new ks(1,1,I-1,X-1),$=O.attributes.position,te=$.count,q=new Float32Array(te*3),ce=new Float32Array(te*3),Fe=new Uint8Array(te),Ie=(A,g)=>A*I+g,Ge=Math.PI*2-Q;for(let A=0;A<X;A++)for(let g=0;g<I;g++){const F=Ie(A,g),k=-Math.PI/2+Q/2+g/(I-1)*Ge,W=B-A/(X-1)*K,ne=Math.sin(g*2.3)*.006+Math.sin(g*.7)*.009,ae=G+A/(X-1)*.115+ne*(A/(X-1)),Y=F*3;q[Y]=Math.cos(k)*ae,q[Y+1]=W,q[Y+2]=Math.sin(k)*ae*.8,ce[Y]=q[Y],ce[Y+1]=q[Y+1],ce[Y+2]=q[Y+2],A===0&&(Fe[F]=1)}const Z=[],oe=(A,g,F=1)=>{const k=Math.hypot(q[A*3]-q[g*3],q[A*3+1]-q[g*3+1],q[A*3+2]-q[g*3+2]);Z.push([A,g,k,F])};for(let A=0;A<X;A++)for(let g=0;g<I;g++)g+1<I&&oe(Ie(A,g),Ie(A,g+1)),A+1<X&&oe(Ie(A,g),Ie(A+1,g)),g+1<I&&A+1<X&&oe(Ie(A,g),Ie(A+1,g+1),.7),g>0&&A+1<X&&oe(Ie(A,g),Ie(A+1,g-1),.7),A+2<X&&oe(Ie(A,g),Ie(A+2,g),.1),g+2<I&&oe(Ie(A,g),Ie(A,g+2),.08);function re(A){const g=Math.min(A,.016666666666666666),F=g*g;for(let k=0;k<te;k++){if(Fe[k])continue;const W=k*3;for(let ne=0;ne<3;ne++){const ae=(q[W+ne]-ce[W+ne])*.965;ce[W+ne]=q[W+ne],q[W+ne]+=ae+(ne===1?-5.2*F:0)}}for(let k=0;k<6;k++){for(let W=0;W<Z.length;W++){const[ne,ae,Y,J]=Z[W],le=ne*3,xe=ae*3,ue=q[xe]-q[le],de=q[xe+1]-q[le+1],Ee=q[xe+2]-q[le+2],Re=Math.hypot(ue,de,Ee)||1e-6,De=(Re-Y)/Re*.5*J,L=ue*De,fe=de*De,ee=Ee*De;Fe[ne]||(q[le]+=L,q[le+1]+=fe,q[le+2]+=ee),Fe[ae]||(q[xe]-=L,q[xe+1]-=fe,q[xe+2]-=ee)}for(let W=0;W<te;W++){if(Fe[W])continue;const ne=W*3,ae=N(q[ne],q[ne+1],q[ne+2]);ae&&(q[ne]=ae[0],q[ne+2]=ae[2])}}for(let k=0;k<te;k++)$.setXYZ(k,q[k*3],q[k*3+1],q[k*3+2]);$.needsUpdate=!0,O.computeVertexNormals()}const Pe=1/120;for(let A=0;A<4;A+=Pe)re(Pe);const Le=new tu({color:12891290,envMap:f,envMapIntensity:.95,roughness:.68,metalness:0,clearcoat:.08});Le.sheen=.6,Le.sheenRoughness=.35,Le.sheenColor=new Ve(14994862);const be=new Qt(O,Le);be.castShadow=!0,be.receiveShadow=!0,r.add(be);let Be={front:0,side:-Math.PI/2,back:Math.PI}[t]??0,Qe=Be;const $e=2.55,Xe=.4;function St(){s.position.set(Math.sin(Qe)*$e,Xe,Math.cos(Qe)*$e),s.lookAt(0,.24,0)}let pt=!1,Mt=0;const Pt=A=>{pt=!0,Mt=A.clientX},ut=()=>{pt=!1},mt=A=>{pt&&(Be-=(A.clientX-Mt)*.007,Mt=A.clientX)};n.addEventListener("mousedown",Pt),window.addEventListener("mouseup",ut),window.addEventListener("mousemove",mt);let D;const Xt=new OS;function Je(){D=requestAnimationFrame(Je);const A=Math.min(Xt.getDelta(),1/30);Qe+=(Be-Qe)*.09,St(),re(A),i.render(r,s)}return Je(),()=>{cancelAnimationFrame(D),o.disconnect(),n.removeEventListener("mousedown",Pt),window.removeEventListener("mouseup",ut),window.removeEventListener("mousemove",mt),n.contains(i.domElement)&&n.removeChild(i.domElement)}},[t]),c.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}})}function Uw({styleId:t="ST-27-011"}){const[e,n]=tt.useState("front"),i=r=>{n(r)};return c.jsx("div",{className:"stylesheet-container",style:{margin:"10px 0 30px"},children:c.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--ink)",borderRadius:6,padding:"24px 28px",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",borderBottom:"2px solid var(--ink)",paddingBottom:12,marginBottom:20},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{fontFamily:"var(--display)",fontSize:24,letterSpacing:".01em"},children:["Two Rivers ",c.jsx("span",{style:{fontSize:13,fontFamily:"var(--mono)",color:"var(--text-3)"},children:"Style Sheet"})]}),c.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".18em",color:"var(--graphite)",textTransform:"uppercase",marginTop:2},children:"Fashion AI · Collection Development"})]}),c.jsxs("div",{style:{textAlign:"right",fontFamily:"var(--mono)",fontSize:11,color:"var(--graphite)",lineHeight:1.8},children:[c.jsxs("div",{children:["STYLE ",c.jsx("b",{style:{color:"var(--ink)"},children:t}),"   SEASON ",c.jsx("b",{style:{color:"var(--ink)"},children:"SS27"})]}),c.jsxs("div",{children:["BASE SIZE ",c.jsx("b",{style:{color:"var(--ink)"},children:"38"}),"   UNITS ",c.jsx("b",{style:{color:"var(--ink)"},children:"cm"}),"   V",c.jsx("b",{style:{color:"var(--ink)"},children:"4"})]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"260px minmax(0, 1fr) 280px",gap:20,alignItems:"start"},children:[c.jsxs("div",{style:{display:"grid",gap:16},children:[c.jsxs("div",{className:"card",style:{background:"#FAF9F6",border:"1px solid var(--line)",padding:16,borderRadius:4},children:[c.jsx("h3",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"var(--graphite)",paddingBottom:8,borderBottom:"1px solid var(--line)",marginBottom:10},children:"Fabric"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Shell"}),c.jsx("span",{style:{fontWeight:600},children:"Silk faille 19mm"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Lining"}),c.jsx("span",{style:{fontWeight:600},children:"Cupro twill"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Interlining"}),c.jsx("span",{style:{fontWeight:600},children:"Silk organza"})]}),c.jsx("p",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--graphite)",lineHeight:1.5,marginTop:10},children:"Name only. Swatches are gathered by hand and recorded below."})]}),c.jsxs("div",{className:"card",style:{background:"#FAF9F6",border:"1px solid var(--line)",padding:16,borderRadius:4},children:[c.jsx("h3",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"var(--graphite)",paddingBottom:8,borderBottom:"1px solid var(--line)",marginBottom:10},children:"Swatch Handling"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Gathered by"}),c.jsx("span",{style:{fontWeight:600},children:"N. Walker"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Samples issued"}),c.jsx("span",{style:{fontWeight:600},children:"4 of 4"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Embroidery sample"}),c.jsx("span",{className:"chip c-approved",style:{fontSize:10,padding:"2px 6px"},children:"In Hand"})]})]})]}),c.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--ink)",borderRadius:4,overflow:"hidden",display:"flex",flexDirection:"column",minHeight:520},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid var(--line)",background:"#F5F5F7"},children:[c.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"var(--graphite)",fontWeight:600},children:"Garment on Form · Live 3D Simulation"}),c.jsx("div",{style:{display:"flex",gap:6},children:["front","side","back"].map(r=>c.jsx("button",{className:`btn sm ${e===r?"gold":"ghost"}`,onClick:()=>i(r),style:{fontSize:10,padding:"4px 10px",textTransform:"uppercase",letterSpacing:".1em"},children:r},r))})]}),c.jsx("div",{style:{flex:1,position:"relative",background:"#FAFAFB",height:440},children:c.jsx(Iw,{viewMode:e})}),c.jsxs("div",{style:{padding:"8px 14px",borderTop:"1px solid var(--line)",fontFamily:"var(--mono)",fontSize:9.5,color:"var(--graphite)",display:"flex",justifyContent:"space-between",background:"#F5F5F7"},children:[c.jsx("span",{children:"SIDE VIEW DISCLOSES CLOSURE PLACEMENT"}),c.jsx("span",{children:"CLOTH SIMULATED · LIVE PHYSICS"})]})]}),c.jsxs("div",{style:{display:"grid",gap:16},children:[c.jsxs("div",{className:"card",style:{background:"#FAF9F6",border:"1px solid var(--line)",padding:16,borderRadius:4},children:[c.jsx("h3",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"var(--graphite)",paddingBottom:8,borderBottom:"1px solid var(--line)",marginBottom:10},children:"Embroidery · External"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Placement"}),c.jsx("span",{style:{fontWeight:600},children:"CF panel, cuff"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Supplier"}),c.jsx("span",{style:{fontWeight:600},children:"Atelier Lesage"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Est. cost"}),c.jsx("span",{style:{fontWeight:600,color:"var(--gold-ink)"},children:"$42.00 / gmt"})]}),c.jsxs("p",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--graphite)",lineHeight:1.5,marginTop:10},children:["External spend requirement. ",c.jsx("span",{className:"chip c-human",style:{fontSize:9,padding:"1px 5px"},children:"Typed by Person"})]})]}),c.jsxs("div",{className:"card",style:{background:"#FAF9F6",border:"1px solid var(--line)",padding:16,borderRadius:4},children:[c.jsx("h3",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"var(--graphite)",paddingBottom:8,borderBottom:"1px solid var(--line)",marginBottom:10},children:"Closure"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px dotted var(--line)"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Type"}),c.jsx("span",{style:{fontWeight:600},children:"Invisible zip"})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0"},children:[c.jsx("span",{style:{color:"var(--graphite)"},children:"Placement"}),c.jsx("span",{style:{fontWeight:600},children:"Left side seam"})]}),c.jsx("p",{style:{fontFamily:"var(--mono)",fontSize:10,color:"var(--graphite)",lineHeight:1.5,marginTop:10},children:"Not centre back. Side view discloses zip location."})]})]})]}),c.jsxs("div",{style:{marginTop:22,paddingTop:18,borderTop:"1.5px solid var(--line)"},children:[c.jsx("h3",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:".14em",textTransform:"uppercase",marginBottom:12},children:"Trims · Size, Type & Colour Specified (Never Implied)"}),c.jsxs("table",{style:{width:"100%",fontSize:12.5},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{background:"#F5F5F7"},children:[c.jsx("th",{style:{padding:"8px 10px",textAlign:"left",fontFamily:"var(--mono)",fontSize:10},children:"Item"}),c.jsx("th",{style:{padding:"8px 10px",textAlign:"left",fontFamily:"var(--mono)",fontSize:10},children:"Type"}),c.jsx("th",{style:{padding:"8px 10px",textAlign:"left",fontFamily:"var(--mono)",fontSize:10},children:"Size"}),c.jsx("th",{style:{padding:"8px 10px",textAlign:"left",fontFamily:"var(--mono)",fontSize:10},children:"Colour"}),c.jsx("th",{style:{padding:"8px 10px",textAlign:"left",fontFamily:"var(--mono)",fontSize:10},children:"Placement"}),c.jsx("th",{style:{padding:"8px 10px",textAlign:"left",fontFamily:"var(--mono)",fontSize:10},children:"Supplier"}),c.jsx("th",{style:{padding:"8px 10px",textAlign:"right",fontFamily:"var(--mono)",fontSize:10},children:"Source"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("td",{style:{padding:10,fontWeight:600},children:"Sequin"}),c.jsx("td",{style:{padding:10},children:"Cup"}),c.jsx("td",{style:{padding:10,fontFamily:"var(--mono)"},children:"5 mm"}),c.jsx("td",{style:{padding:10},children:"Gold"}),c.jsx("td",{style:{padding:10},children:"CF panel"}),c.jsx("td",{style:{padding:10},children:"Atelier Lesage"}),c.jsx("td",{style:{padding:10,textAlign:"right"},children:c.jsx("span",{className:"chip c-human",style:{fontSize:9},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:10,fontWeight:600},children:"Sequin"}),c.jsx("td",{style:{padding:10},children:"Cup"}),c.jsx("td",{style:{padding:10,fontFamily:"var(--mono)"},children:"4 mm"}),c.jsx("td",{style:{padding:10},children:"Purple"}),c.jsx("td",{style:{padding:10},children:"CF panel, shadow"}),c.jsx("td",{style:{padding:10},children:"Atelier Lesage"}),c.jsx("td",{style:{padding:10,textAlign:"right"},children:c.jsx("span",{className:"chip c-human",style:{fontSize:9},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:10,fontWeight:600},children:"Sequin"}),c.jsx("td",{style:{padding:10},children:"Cup"}),c.jsx("td",{style:{padding:10,fontFamily:"var(--mono)"},children:"6 mm"}),c.jsx("td",{style:{padding:10},children:"Gold"}),c.jsx("td",{style:{padding:10},children:"Cuff border"}),c.jsx("td",{style:{padding:10},children:"Atelier Lesage"}),c.jsx("td",{style:{padding:10,textAlign:"right"},children:c.jsx("span",{className:"chip c-human",style:{fontSize:9},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:10,fontWeight:600},children:"Thread"}),c.jsx("td",{style:{padding:10},children:"Silk, Tkt 50"}),c.jsx("td",{style:{padding:10,fontFamily:"var(--mono)"},children:"—"}),c.jsx("td",{style:{padding:10},children:"Bone"}),c.jsx("td",{style:{padding:10},children:"All construction"}),c.jsx("td",{style:{padding:10},children:"Au Ver à Soie"}),c.jsx("td",{style:{padding:10,textAlign:"right"},children:c.jsx("span",{className:"chip c-human",style:{fontSize:9},children:"Typed"})})]}),c.jsxs("tr",{children:[c.jsx("td",{style:{padding:10,fontWeight:600},children:"Zip"}),c.jsx("td",{style:{padding:10},children:"Invisible"}),c.jsx("td",{style:{padding:10,fontFamily:"var(--mono)"},children:"56 cm"}),c.jsx("td",{style:{padding:10},children:"Bone"}),c.jsx("td",{style:{padding:10},children:"Left side seam"}),c.jsx("td",{style:{padding:10},children:c.jsx("span",{className:"chip c-blocker",style:{fontSize:9},children:"Missing"})}),c.jsx("td",{style:{padding:10,textAlign:"right"},children:c.jsx("span",{className:"chip c-blocker",style:{fontSize:9},children:"Required"})})]})]})]})]})]})})}function Fw(){const[t,e]=tt.useState("Callot Soeurs"),[n,i]=tt.useState(!1),[r,s]=tt.useState([{id:"met-48291",title:"Evening Dress by Callot Soeurs",artist:"Callot Soeurs (French couture house, active 1895–1937)",date:"ca. 1924–26",medium:"Silk faille, metallic gold thread, glass cup sequins",culture:"French, Paris",museum:"The Metropolitan Museum of Art (Open Access)"},{id:"met-48292",title:"Coat with Metallic Gold Embroidery",artist:"Callot Soeurs",date:"1922",medium:"Silk organza, gold lamé, couched silk thread",culture:"French, Paris",museum:"The Metropolitan Museum of Art (Open Access)"},{id:"va-T291",title:"Embroidered Silk Opera Coat",artist:"Attributed to Callot Soeurs",date:"1925",medium:"Silk satin, embroidered gold sequins, seed pearls",culture:"British / French Collection",museum:"Victoria and Albert Museum, London"}]),a=async o=>{if(o.preventDefault(),!!t.trim()){i(!0);try{const u=await(await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(t)}`)).json();if(u.objectIDs&&u.objectIDs.length>0){const d=u.objectIDs.slice(0,4),p=await Promise.all(d.map(async f=>{const y=await(await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${f}`)).json();return{id:`met-${f}`,title:y.title||"Historical Fashion Specimen",artist:y.artistDisplayName||y.culture||"Historical Archive",date:y.objectDate||"ca. 1920s",medium:y.medium||"Textile / Embroidery",culture:y.culture||"French / International",imageUrl:y.primaryImageSmall||void 0,museum:"The Metropolitan Museum of Art (Open Access)"}}));s(p.filter(f=>f.title))}}catch{}finally{i(!1)}}};return c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14},children:c.jsxs("div",{children:[c.jsxs("h3",{children:["Museum Art History API Reference ",c.jsx("span",{className:"chip c-approved",style:{fontSize:9,marginLeft:8},children:"Rights Cleared D-06"})]}),c.jsxs("p",{className:"sub",children:["Querying open archives (The Met, Victoria & Albert, Bunka Tokyo). Captures the ",c.jsx("i",{children:"feeling and atmospheric reference"})," without creating an unverified copy."]})]})}),c.jsxs("form",{onSubmit:a,style:{display:"flex",gap:10,marginBottom:16},children:[c.jsx("input",{className:"field-input",style:{flex:1,padding:"9px 14px"},value:t,onChange:o=>e(o.target.value),placeholder:"e.g. Callot Soeurs, 1920s embroidery, silk faille..."}),c.jsx("button",{type:"submit",className:"btn gold sm",disabled:n,children:n?"Searching...":"Search Museum Archives"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:14},children:r.map(o=>c.jsxs("div",{style:{border:"1px solid var(--line)",borderRadius:4,padding:14,background:"#FAF9F6",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontFamily:"var(--mono)",color:"var(--chalk)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:4},children:o.museum}),c.jsx("h4",{style:{fontSize:14,fontFamily:"var(--display)",fontWeight:600,marginBottom:6},children:o.title}),c.jsxs("div",{style:{fontSize:12,color:"var(--graphite)",marginBottom:4},children:[c.jsx("b",{children:"Artist / House:"})," ",o.artist]}),c.jsxs("div",{style:{fontSize:12,color:"var(--graphite)",marginBottom:4},children:[c.jsx("b",{children:"Date:"})," ",o.date]}),c.jsxs("div",{style:{fontSize:12,color:"var(--graphite)"},children:[c.jsx("b",{children:"Medium:"})," ",o.medium]})]}),c.jsxs("div",{style:{marginTop:12,display:"flex",gap:6,alignItems:"center"},children:[c.jsx("span",{className:"chip c-approved",style:{fontSize:9},children:"Public Domain"}),c.jsx("span",{className:"chip c-draft",style:{fontSize:9},children:"Creative Reference Only"})]})]},o.id))})]})}function Ow({styleId:t,onBack:e}){const{collection:n,preflight:i}=pi(),[r,s]=tt.useState("stylesheet"),a=n==null?void 0:n.styles.find(d=>d.id===t),o=i[t]??[],{blockers:l,warnings:u}=Is(o);return a?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn ghost sm",onClick:e,style:{marginBottom:18},children:"← All styles"}),c.jsxs("div",{className:"page-head",style:{display:"flex",alignItems:"flex-end",gap:20},children:[c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{fontFamily:"var(--mono)",fontSize:12,color:"var(--gold-ink)",letterSpacing:".06em"},children:[a.id," · version ",a.version]}),c.jsx("h2",{children:a.name}),c.jsxs("p",{children:[a.category," · sizes ",a.sizeRange.join(" / ")," · base size"," ",a.baseSize??c.jsx("span",{style:{color:"var(--blocker)"},children:"not declared"})," · units ",a.units," · owner ",a.owner]})]}),c.jsx("div",{style:{display:"flex",gap:8},children:c.jsx(j0,{v:a.status})})]}),c.jsx("div",{className:"tabs",children:[["stylesheet","3D Style sheet","LIVE"],["creative","Creative modes",a.assets.length],["pack","Tech pack",a.fields.length+a.poms.length],["preflight","Preflight",l||u],["approvals","Approvals",a.gates.filter(d=>d.approved).length+"/4"],["factory","Factory thread",a.thread.length],["export","Export",""]].map(([d,p,f])=>c.jsxs("button",{className:`tab ${r===d?"active":""}`,onClick:()=>s(d),children:[p,f!==""&&f!==0&&c.jsx("span",{className:`count ${d==="preflight"&&l?"blocker":d==="stylesheet"?"ai":""}`,children:f})]},d))}),r==="stylesheet"&&c.jsxs(c.Fragment,{children:[c.jsx(Uw,{styleId:a.id}),c.jsx(Fw,{})]}),r==="creative"&&c.jsx(kw,{style:a}),r==="pack"&&c.jsx(Bw,{style:a}),r==="preflight"&&c.jsx(Vw,{findings:o}),r==="approvals"&&c.jsx(Hw,{style:a,blockers:l}),r==="factory"&&c.jsx(Gw,{style:a}),r==="export"&&c.jsx(Ww,{style:a,blockers:l,findings:o})]}):null}const Pm={mood:{title:"Mood sketch",note:"Creative reference. Communicates atmosphere and direction, not construction. Output from this mode can attach to the style record and can never attach to a tech-pack field.",cls:"creative"},presentation:{title:"Presentation sketch",note:"Design communication. Proportion, flow, and styling. Never a technical flat, never dimensionally reliable, never a production input.",cls:"creative"},flat:{title:"Technical flat",note:"The only creative mode that may attach to a tech pack, and only as a Draft asset with provenance. Unresolved construction details are labelled, never inferred.",cls:"technical"}};function kw({style:t}){const[e,n]=tt.useState("mood"),i=t.assets.filter(s=>s.mode===e),r=Pm[e];return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{display:"flex",gap:8,marginBottom:18},children:["mood","presentation","flat"].map(s=>c.jsx("button",{className:`btn sm ${e===s?"gold":""}`,onClick:()=>n(s),children:Pm[s].title},s))}),c.jsxs("div",{className:`mode-note ${r.cls}`,children:[c.jsxs("b",{children:[r.title," mode."]})," ",r.note]}),c.jsxs("div",{className:"grid c3",children:[i.map((s,a)=>c.jsxs("div",{className:"asset",children:[c.jsxs("div",{className:"canvas",children:[c.jsx("div",{className:"label",children:c.jsx(rt,{tone:s.mode==="flat"?"warn":"ai",children:s.mode==="flat"?"Draft flat":r.title})}),s.mode==="mood"?c.jsx(X0,{palette:s.palette}):s.mode==="presentation"?c.jsx(Y0,{palette:s.palette}):c.jsx($0,{back:a%2===1})]}),c.jsxs("div",{className:"meta",children:[c.jsx("h5",{children:s.title}),c.jsx("p",{children:s.caption}),s.palette.length>1&&c.jsx("div",{className:"swatches",children:s.palette.map(o=>c.jsx("span",{className:"swatch",style:{background:o}},o))}),c.jsxs("div",{style:{display:"flex",gap:6,marginTop:11},children:[c.jsx(rt,{tone:"draft",children:"Synthetic"}),s.mode!=="flat"&&c.jsx(rt,{tone:"blocker",children:"Not production input"})]})]})]},s.id)),i.length===0&&c.jsx("div",{className:"empty-state",children:"No assets in this mode yet."})]})]})}function Bw({style:t}){const{resolveField:e,approveField:n}=pi(),[i,r]=tt.useState(null),[s,a]=tt.useState(""),o=[...new Set(t.fields.map(d=>d.section))],l=d=>void n(t.id,d.id),u=async d=>{await e(t.id,d.id,s),r(null),a("")};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mode-note technical",style:{marginBottom:20},children:[c.jsx("b",{children:"Eleven required sections."})," Every production-critical field carries source, author, timestamp, AI involvement, confidence, and approval state. AI-drafted critical fields stay ",c.jsx("i",{children:"Suggested"})," until a named human approves them."]}),c.jsx(zw,{style:t}),c.jsx("div",{className:"card",style:{padding:0,marginBottom:20},children:o.map(d=>c.jsxs("div",{children:[c.jsx("div",{className:"section-head",children:d}),t.fields.filter(p=>p.section===d).map(p=>c.jsxs("div",{className:"field-row",children:[c.jsxs("div",{className:"fk",children:[p.label,p.critical&&c.jsx("span",{style:{color:"var(--blocker)",marginLeft:5},children:"*"})]}),c.jsx("div",{children:i===p.id?c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("input",{className:"field-input",autoFocus:!0,value:s,onChange:f=>a(f.target.value),placeholder:"Enter the confirmed value"}),c.jsx("button",{className:"btn gold sm",disabled:!s.trim(),onClick:()=>u(p),children:"Save"}),c.jsx("button",{className:"btn sm",onClick:()=>r(null),children:"Cancel"})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`fv ${p.value?"":"empty"}`,children:p.value||"unresolved — no value"}),p.note&&c.jsx("div",{className:"fnote",children:p.note})]})}),c.jsxs("div",{className:"fp",children:[p.aiInvolved&&c.jsxs(rt,{tone:"ai",children:["AI · ",p.confidence]}),c.jsx(bp,{v:p.approval}),p.approval==="Suggested"&&c.jsx("button",{className:"btn sm",onClick:()=>l(p),children:"Approve"}),p.approval==="Unresolved"&&i!==p.id&&c.jsx("button",{className:"btn sm",onClick:()=>{r(p.id),a(p.value)},children:"Resolve"})]})]},p.id))]},d))}),c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsx("h3",{children:"Measurements — points of measure"}),c.jsxs("p",{className:"sub",children:["Graded across ",t.sizeRange.join(" / "),". Cells flagged red failed a deterministic check. Measurement method is mandatory: two people measuring differently is the most common cause of a rejected sample."]}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Code"}),c.jsx("th",{children:"Point of measure"}),c.jsx("th",{children:"Method"}),c.jsx("th",{children:"Tol."}),c.jsx("th",{children:"Unit"}),t.sizeRange.map(d=>c.jsx("th",{style:{textAlign:"right"},children:d},d)),c.jsx("th",{children:"Provenance"})]})}),c.jsx("tbody",{children:t.poms.map((d,p)=>{const f=t.sizeRange.map(m=>d.sizes[m]);return c.jsxs("tr",{children:[c.jsx("td",{className:"mono",children:d.code}),c.jsx("td",{children:d.name}),c.jsx("td",{className:"muted",style:{fontSize:11.5},children:d.method||"—"}),c.jsx("td",{className:d.tolerance?"mono":"flag mono",children:d.tolerance||"missing"}),c.jsx("td",{className:d.unit===t.units?"mono":"flag mono",children:d.unit}),f.map((m,y)=>{const T=f[y-1],v=m!=null&&T!=null&&m<T;return c.jsx("td",{className:`num ${v?"flag":""}`,children:m??"—"},y)}),c.jsx("td",{children:d.aiInvolved?c.jsxs(rt,{tone:"ai",children:["AI · ",d.confidence]}):c.jsx(bp,{v:d.approval})})]},`${d.code}-${p}`)})})]})})]}),c.jsxs("div",{className:"grid c2",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Bill of materials"}),c.jsx("p",{className:"sub",children:"Every material with composition, weight, placement, supplier, quantity."}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Material"}),c.jsx("th",{children:"Composition"}),c.jsx("th",{children:"Weight"}),c.jsx("th",{children:"Placement"}),c.jsx("th",{children:"Qty"})]})}),c.jsx("tbody",{children:t.bom.map(d=>c.jsxs("tr",{children:[c.jsx("td",{children:d.material||c.jsx("span",{className:"muted",children:"unnamed"})}),c.jsx("td",{className:d.composition?"":"flag",children:d.composition||"missing"}),c.jsx("td",{className:"mono",children:d.weight||"—"}),c.jsx("td",{className:"muted",children:d.placement||"—"}),c.jsx("td",{className:d.qty?"mono":"flag mono",children:d.qty||"missing"})]},d.id))})]})})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Trims & labels"}),c.jsx("p",{className:"sub",children:"Placement must be dimensioned from a named reference point."}),c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Item"}),c.jsx("th",{children:"Spec"}),c.jsx("th",{children:"Placement"}),c.jsx("th",{children:"Qty"})]})}),c.jsx("tbody",{children:t.trims.map(d=>c.jsxs("tr",{children:[c.jsx("td",{children:d.item}),c.jsx("td",{className:"muted",children:d.spec}),c.jsx("td",{className:/\d/.test(d.placement)?"":"flag",children:d.placement}),c.jsx("td",{className:"mono",children:d.qty})]},d.id))})]})})]})]})]})}function zw({style:t}){const{draftPack:e,user:n,invocations:i}=pi(),[r,s]=tt.useState(!1),[a,o]=tt.useState(null),l=(n==null?void 0:n.role)==="technical"||(n==null?void 0:n.role)==="owner",u=i.filter(p=>p.styleId===t.id).reduce((p,f)=>p+f.costUsd,0),d=async p=>{s(!0),o(await e(t.id,p)),s(!1)};return c.jsxs("div",{className:"card",style:{marginBottom:20},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:16,flexWrap:"wrap"},children:[c.jsxs("div",{style:{flex:1,minWidth:280},children:[c.jsx("h3",{children:"Draft with AI"}),c.jsxs("p",{className:"sub",style:{marginBottom:0},children:["Fills fields the trade already agrees on. It will not invent a measurement, and it will not make a decision that belongs to a person — those come back as refusals with the reason. Nothing it writes is authoritative: every field lands as ",c.jsx("i",{children:"Suggested"})," and still needs your approval."]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"},children:[c.jsx("button",{className:"btn gold",disabled:!l||r,title:l?"":"Only a technical designer or owner may run drafting",onClick:()=>void d(),children:r?"Drafting…":"Draft missing fields"}),c.jsxs("span",{className:"muted mono",style:{fontSize:11},children:["$",u.toFixed(4)," spent on this style"]})]})]}),a&&c.jsxs("div",{style:{marginTop:18,display:"grid",gap:14},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[c.jsxs(rt,{tone:"ai",children:[a.provider," / ",a.model]}),c.jsxs(rt,{tone:"draft",children:[(a.latencyMs/1e3).toFixed(1),"s"]}),c.jsxs(rt,{tone:"draft",children:["$",a.costUsd.toFixed(4)]}),c.jsx("button",{className:"btn sm ghost",onClick:()=>void d(!0),children:"Run again"})]}),a.suggestions.length>0&&c.jsxs("div",{children:[c.jsxs("div",{className:"section-head",style:{paddingLeft:0,borderBottom:"none"},children:["Drafted — ",a.suggestions.length," suggested"]}),a.suggestions.map(p=>c.jsxs("div",{className:"finding",style:{borderLeft:"3px solid var(--ai)"},children:[c.jsxs("div",{children:[c.jsxs(rt,{tone:"ai",children:["AI · ",p.confidence]}),c.jsxs("div",{className:"ref",style:{marginTop:7},children:[p.section," · ",p.label]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"msg",children:p.value}),c.jsx("div",{className:"detail",children:p.rationale})]})]},p.label))]}),a.declined.length>0&&c.jsxs("div",{children:[c.jsxs("div",{className:"section-head",style:{paddingLeft:0,borderBottom:"none"},children:["Refused — ",a.declined.length,", and this is the point"]}),a.declined.map(p=>c.jsxs("div",{className:"finding blocker",children:[c.jsxs("div",{children:[c.jsx(rt,{tone:"blocker",children:"Refused"}),c.jsx("div",{className:"ref",style:{marginTop:7},children:p.label})]}),c.jsx("div",{children:c.jsx("div",{className:"detail",style:{fontSize:12.5},children:p.reason})})]},p.label))]})]})]})}function Vw({findings:t}){const{blockers:e,warnings:n}=Is(t),i=[...new Set(t.map(r=>r.family))];return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"grid c3",style:{marginBottom:22},children:[c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Blockers"}),c.jsx("span",{className:`v ${e?"blocker":"ok"}`,children:e}),c.jsx("span",{className:"n",children:"Prevent Approved for Factory"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Warnings"}),c.jsx("span",{className:`v ${n?"warn":"ok"}`,children:n}),c.jsx("span",{className:"n",children:"Reviewable, non-blocking"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Rule source"}),c.jsx("span",{className:"v",style:{fontSize:21},children:"Deterministic"}),c.jsx("span",{className:"n",children:"Arithmetic and presence checks only — no model judgement"})]})})]}),c.jsxs("div",{className:"mode-note technical",children:[c.jsx("b",{children:"Model-based review may add warnings. It may never clear a blocker."})," Every finding below is reproducible from the pack itself, which is what makes it trustworthy enough to stop an export."]}),i.map(r=>c.jsxs("div",{style:{marginBottom:24},children:[c.jsx("div",{className:"section-head",style:{paddingLeft:0,borderBottom:"none"},children:r}),t.filter(s=>s.family===r).map(s=>c.jsxs("div",{className:`finding ${s.severity}`,children:[c.jsxs("div",{children:[c.jsx(rt,{tone:s.severity==="blocker"?"blocker":"warn",children:s.severity}),c.jsx("div",{className:"ref",style:{marginTop:7},children:s.ref})]}),c.jsxs("div",{children:[c.jsx("div",{className:"msg",children:s.message}),c.jsx("div",{className:"detail",children:s.detail})]})]},s.id))]},r)),t.length===0&&c.jsx("div",{className:"empty-state",children:"Preflight clean. All deterministic checks passed."})]})}function Hw({style:t,blockers:e}){const{approveGate:n}=pi(),i=r=>void n(t.id,r);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mode-note technical",children:[c.jsx("b",{children:"Approvals are immutable events, not toggles."})," Concept and design gates fire at stages 4 and 6, long before a tech pack exists. The technical gate cannot be satisfied while deterministic blockers remain."]}),t.gates.map(r=>c.jsxs("div",{className:`gate ${r.approved?"done":""}`,children:[c.jsx("div",{className:"g-mark",children:r.approved?"✓":"·"}),c.jsxs("div",{className:"g-body",children:[c.jsx("h5",{children:r.label}),c.jsx("p",{children:r.approved?`Approved by ${r.approver} · ${Lr(r.approvedAt)}`:r.approver==="Unassigned"?"No named approver assigned":`Awaiting ${r.approver}`})]}),r.approved?c.jsx(rt,{tone:"ok",children:"Approved"}):c.jsx("button",{className:"btn gold sm",disabled:r.key==="technical"&&e>0,title:r.key==="technical"&&e>0?`${e} blockers must be cleared first`:"",onClick:()=>i(r.key),children:r.key==="technical"&&e>0?`Blocked — ${e} failures`:"Approve"})]},r.key))]})}function Gw({style:t}){const{resolveThread:e}=pi(),n=(i,r)=>void e(t.id,i,r?{kind:"require_field",target:"Shrinkage",severity:"blocker",message:"Shrinkage must be stated — the factory cannot cut bias panels without it"}:void 0);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mode-note technical",children:[c.jsx("b",{children:"This loop is the product."})," A resolved factory correction is classified and proposed as a reusable validation rule, so the same ambiguity cannot reach a second style. Everything above this panel is table stakes; this is the part that compounds."]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Factory thread — Partner A sample room"}),c.jsx("p",{className:"sub",children:"Questions anchored to a specific field, page, asset, or measurement."}),t.thread.map(i=>c.jsxs("div",{className:`msg ${i.role}`,children:[c.jsx("div",{className:"av",children:i.role==="factory"?"FA":"NW"}),c.jsxs("div",{className:"m-body",children:[c.jsxs("div",{className:"m-head",children:[c.jsx("b",{children:i.author}),c.jsx("time",{children:Lr(i.at)}),i.fieldRef&&c.jsxs(rt,{tone:"gold",children:["→ ",i.fieldRef]}),c.jsx(rt,{tone:i.state==="Resolved"?"ok":"warn",children:i.state})]}),c.jsx("div",{className:"m-text",children:i.body}),i.proposedRule&&c.jsxs("div",{className:"m-rule",children:["Proposed reusable rule → ",c.jsx("b",{children:i.proposedRule}),c.jsx("span",{className:"muted",children:" · already active in the deterministic engine"})]}),i.state!=="Resolved"&&c.jsxs("div",{style:{display:"flex",gap:8,marginTop:11},children:[c.jsx("button",{className:"btn sm",onClick:()=>n(i.id),children:"Mark resolved"}),c.jsx("button",{className:"btn sm gold",onClick:()=>n(i.id,!0),children:"Resolve & promote to a rule"})]})]})]},i.id)),t.thread.length===0&&c.jsx("div",{className:"empty-state",children:"No factory questions yet."})]})]})}function Ww({style:t,blockers:e,findings:n}){const{createExport:i}=pi(),r=t.gates.find(o=>o.key==="technical"),s=e===0&&r.approved,a=()=>void i(t.id);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`export-state ${s?"ready":"blocked"}`,style:{marginBottom:22},children:[c.jsx("h4",{children:s?"Cleared for factory handoff":"Export blocked"}),c.jsx("p",{children:s?"All deterministic checks pass and the technical gate carries a named approval. The export will be marked Production Authorized.":`${e} critical validation failure${e===1?"":"s"} and ${r.approved?"an approved":"an unapproved"} technical gate. Any export produced now is watermarked DRAFT and omits Production Authorized status.`}),c.jsx("button",{className:"btn gold",onClick:a,children:s?"Generate authorized package":"Generate DRAFT package anyway"})]}),c.jsxs("div",{className:"grid split",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Package preview"}),c.jsx("p",{className:"sub",children:"What the factory receives. Version identity travels with the document."}),c.jsxs("div",{className:"watermark",children:[c.jsx("h4",{children:t.name}),c.jsxs("div",{className:"wm-meta",children:[t.id," · v",t.version," · ",t.category," · generated ",Lr(new Date().toISOString())]}),c.jsxs("div",{className:"wm-grid",children:[c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Base size"}),c.jsx("span",{children:t.baseSize??"— not declared"})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Units"}),c.jsx("span",{children:t.units})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Sizes"}),c.jsx("span",{children:t.sizeRange.join(" / ")})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Approvers"}),c.jsx("span",{children:t.gates.filter(o=>o.approved).map(o=>o.approver).join(", ")||"none"})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Validation"}),c.jsxs("span",{children:[e," blockers · ",n.length-e," warnings"]})]}),c.jsxs("div",{className:"wm-cell",children:[c.jsx("b",{children:"Status"}),c.jsx("span",{children:s?"Production Authorized":"DRAFT"})]})]})]})]}),c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Export manifest"}),c.jsx("p",{className:"sub",children:"EXP-002 — what was included and who signed it."}),c.jsxs("div",{className:"manifest",children:[c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Style"}),t.id]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Version"}),"v",t.version]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Units"}),t.units]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Blockers"}),e]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Technical gate"}),r.approved?"approved":"not approved"]}),c.jsxs("div",{children:[c.jsx("span",{className:"k",children:"Authorization"}),s?"Production Authorized":"DRAFT only"]})]})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Export history"}),c.jsx("p",{className:"sub",children:"Every package the factory has ever received."}),t.exports.length===0?c.jsx("div",{className:"empty-state",style:{padding:22},children:"Nothing exported yet."}):t.exports.map(o=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"9px 0",borderBottom:"1px solid var(--line)"},children:[c.jsx(rt,{tone:o.authorized?"ok":"warn",children:o.authorized?"Authorized":"Draft"}),c.jsxs("span",{className:"mono",children:["v",o.version]}),c.jsx("span",{className:"muted",style:{marginLeft:"auto",fontSize:11.5},children:Lr(o.at)})]},o.id))]})]})]})]})}function jw(){const{audit:t,invocations:e,corrections:n,templates:i,user:r,signOffCategory:s}=pi(),a=e.reduce((l,u)=>l+u.costUsd,0),o=n.filter(l=>l.accepted);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"page-head",children:[c.jsx("h2",{children:"Governance"}),c.jsx("p",{children:"Audit trail, learned rules, category schemas, and the model-cost ledger. Every stage transition, field edit, approval, override, export, and model action is recorded server-side with an actor and a timestamp (AUD-001, AI-002)."})]}),c.jsxs("div",{className:"grid c4",style:{marginBottom:24},children:[c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Audit events"}),c.jsx("span",{className:"v",children:t.length}),c.jsx("span",{className:"n",children:"Append-only, server-side"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Learned rules"}),c.jsx("span",{className:`v ${o.length?"ok":""}`,children:o.length}),c.jsx("span",{className:"n",children:"Factory corrections now enforced everywhere"})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Model cost"}),c.jsxs("span",{className:"v",children:["$",a.toFixed(3)]}),c.jsxs("span",{className:"n",children:["Across ",e.length," invocations"]})]})}),c.jsx("div",{className:"card tight",children:c.jsxs("div",{className:"stat",children:[c.jsx("span",{className:"k",children:"Signed-off schemas"}),c.jsxs("span",{className:`v ${i.every(l=>l.signedOffBy)?"ok":"warn"}`,children:[i.filter(l=>l.signedOffBy).length,"/",i.length]}),c.jsx("span",{className:"n",children:"D-01 — category rule sets"})]})})]}),c.jsxs("div",{className:"grid split",children:[c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Learned from the factory"}),c.jsx("p",{className:"sub",children:"Corrections promoted to deterministic rules (FAC-002). These run against every style, including ones that never had the original problem. This is the only part of the system that gets harder to copy over time."}),o.length===0?c.jsx("div",{className:"empty-state",style:{padding:26},children:"No corrections promoted yet. Resolve a factory question with “Resolve & promote to a rule”."}):o.map(l=>c.jsxs("div",{style:{padding:"12px 0",borderBottom:"1px solid var(--line)"},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:5},children:[c.jsx(rt,{tone:l.severity==="blocker"?"blocker":"warn",children:l.severity}),c.jsxs("span",{className:"mono",style:{fontSize:11.5},children:[l.kind," → ",l.target]})]}),c.jsx("div",{style:{fontSize:12.5},children:l.message}),c.jsxs("div",{className:"muted",style:{fontSize:11},children:["From ",l.styleId," · accepted by ",l.acceptedBy," · ",Lr(l.acceptedAt??void 0)]})]},l.id))]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Audit log"}),c.jsx("p",{className:"sub",children:"Written inside the same transaction as the change it records."}),t.map(l=>c.jsxs("div",{className:"audit-row",children:[c.jsx("time",{children:Lr(l.at)}),c.jsx("span",{className:"actor",children:l.actor}),c.jsxs("span",{children:[l.action,l.target&&c.jsxs("span",{className:"muted",children:[" · ",l.target]}),l.from&&l.to&&c.jsxs("span",{className:"muted",children:[" · ",l.from," → ",l.to]}),l.reason&&c.jsxs("span",{className:"muted",children:[" · “",l.reason,"”"]})]})]},l.id))]})]}),c.jsxs("div",{style:{display:"grid",gap:18,alignContent:"start"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Category schemas"}),c.jsx("p",{className:"sub",children:"D-01. Required fields and POMs are data, not code — changing the pilot category is an entry in the template table. A schema governs real work only once a technical designer signs it off."}),i.map(l=>c.jsxs("div",{style:{padding:"13px 0",borderBottom:"1px solid var(--line)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:5},children:[c.jsx("b",{style:{fontSize:13,fontWeight:500},children:l.label}),c.jsx("span",{className:"mono muted",style:{fontSize:11},children:l.key}),l.signedOffBy?c.jsx(rt,{tone:"ok",children:"Signed off"}):c.jsx(rt,{tone:"warn",children:"Unsigned"})]}),c.jsxs("div",{className:"muted",style:{fontSize:11.5},children:[l.requiredFields.length," required fields · ",l.requiredPoms.length," required POMs",l.signedOffBy&&c.jsxs(c.Fragment,{children:[" · by ",l.signedOffBy]})]}),!l.signedOffBy&&c.jsx("button",{className:"btn sm",style:{marginTop:9},disabled:(r==null?void 0:r.role)!=="technical",title:(r==null?void 0:r.role)!=="technical"?"Only a technical designer may sign off a category schema":"",onClick:()=>void s(l.key),children:"Sign off schema"})]},l.key))]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Model invocations"}),c.jsx("p",{className:"sub",children:"Provider, model, latency, and cost recorded per artifact."}),e.map(l=>c.jsxs("div",{style:{padding:"11px 0",borderBottom:"1px solid var(--line)"},children:[c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:4},children:[c.jsx("span",{style:{fontSize:12.5},children:l.feature}),c.jsx(rt,{tone:l.userAction==="pending"?"warn":"draft",children:l.userAction}),c.jsxs("span",{className:"mono",style:{marginLeft:"auto"},children:["$",l.costUsd.toFixed(3)]})]}),c.jsxs("div",{className:"muted mono",style:{fontSize:11},children:[l.provider," / ",l.model," · ",(l.latencyMs/1e3).toFixed(1),"s · ",Lr(l.at)]})]},l.id))]})]})]})]})}const Xw=[{u:"natalie",role:"Technical designer — may edit and approve production-critical work"},{u:"mitra",role:"Owner — may edit and approve"},{u:"factory",role:"Factory reviewer — may comment, may not approve"},{u:"viewer",role:"Viewer — read only"}];function Yw(){const{login:t,error:e}=pi(),[n,i]=tt.useState("natalie"),[r,s]=tt.useState(""),[a,o]=tt.useState(!1),l=async d=>{d.preventDefault(),o(!0),await t(n,r),o(!1)},u={width:"100%",marginTop:6,padding:"11px 14px"};return c.jsx("div",{className:"login-shell",children:c.jsxs("div",{style:{width:"100%",maxWidth:940,display:"grid",gap:22,gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)"},children:[c.jsxs("div",{className:"card",style:{padding:34},children:[c.jsxs("div",{className:"brand",style:{padding:0,marginBottom:26},children:[c.jsx("h1",{style:{fontSize:34},children:"Atelier"}),c.jsx("div",{className:"rule"}),c.jsx("p",{children:"Collection Development"})]}),c.jsxs("form",{onSubmit:l,children:[c.jsxs("label",{style:{fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"var(--text-3)"},children:["Username",c.jsx("input",{className:"field-input",style:u,value:n,onChange:d=>i(d.target.value),autoComplete:"username"})]}),c.jsxs("label",{style:{fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"var(--text-3)",display:"block",marginTop:16},children:["Password",c.jsx("input",{className:"field-input",style:u,type:"password",value:r,onChange:d=>s(d.target.value),autoComplete:"current-password"})]}),e&&c.jsx("div",{style:{marginTop:16,padding:"10px 13px",borderRadius:8,background:"var(--blocker-bg)",color:"var(--blocker)",fontSize:12.5},children:e}),c.jsx("button",{className:"btn gold block",style:{marginTop:22},disabled:a,children:a?"Signing in…":"Sign in"})]})]}),c.jsxs("div",{className:"card",style:{padding:30},children:[c.jsx("h3",{children:"Demonstrator accounts"}),c.jsx("p",{className:"sub",children:"Roles are enforced on the server, not in the interface. Sign in as the factory reviewer or the viewer and watch the approval actions get refused."}),Xw.map(d=>c.jsxs("div",{style:{padding:"11px 0",borderBottom:"1px solid var(--line)"},children:[c.jsx("button",{className:"btn sm",onClick:()=>i(d.u),style:{marginBottom:6},children:d.u}),c.jsx("div",{className:"muted",style:{fontSize:11.5},children:d.role})]},d.u)),c.jsxs("p",{className:"muted",style:{fontSize:11.5,marginTop:16,lineHeight:1.6},children:["Password for every demonstrator account is ",c.jsx("b",{children:"pilot"}),". This workspace holds synthetic data only; real brand data is not loaded until the PRD §12 security checklist passes."]})]})]})})}function $w(){const{collection:t,user:e,preflight:n,loading:i,error:r,clearError:s,logout:a}=pi(),[o,l]=tt.useState({page:"collection"});if(i)return c.jsx("div",{className:"empty-state",style:{paddingTop:120},children:"Loading workspace…"});if(!e||!t)return c.jsx(Yw,{});const u=Is(t.styles.flatMap(d=>n[d.id]??[]));return c.jsx("div",{className:"app-frame",children:c.jsxs("div",{className:"app",children:[c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"brand",children:[c.jsx("h1",{children:"Atelier"}),c.jsx("div",{className:"rule"}),c.jsx("p",{children:"Collection Development"})]}),c.jsxs("div",{className:"nav-group",children:[c.jsx("div",{className:"nav-label",children:"Collection"}),c.jsxs("button",{className:`nav-item ${o.page==="collection"?"active":""}`,onClick:()=>l({page:"collection"}),children:[c.jsx("span",{className:"dot"}),t.season," ",t.year,c.jsx("span",{className:"meta",children:t.styles.length})]})]}),c.jsxs("div",{className:"nav-group",children:[c.jsx("div",{className:"nav-label",children:"Styles"}),t.styles.map(d=>{const{blockers:p}=Is(n[d.id]??[]);return c.jsxs("button",{className:`nav-item ${o.page==="style"&&o.id===d.id?"active":""}`,onClick:()=>l({page:"style",id:d.id}),children:[c.jsx("span",{className:"dot"}),c.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.id}),c.jsx("span",{className:"meta",style:p?{color:"var(--blocker)"}:void 0,children:p?`${p}✕`:"✓"})]},d.id)})]}),c.jsxs("div",{className:"nav-group",children:[c.jsx("div",{className:"nav-label",children:"Workspace"}),c.jsxs("button",{className:`nav-item ${o.page==="governance"?"active":""}`,onClick:()=>l({page:"governance"}),children:[c.jsx("span",{className:"dot"}),"Governance"]})]}),c.jsx("div",{style:{marginTop:"auto",padding:"0 8px"},children:c.jsxs("div",{style:{paddingTop:16,borderTop:"1px solid var(--line)",display:"grid",gap:10},children:[c.jsxs("div",{style:{fontSize:12},children:[e.name,c.jsx("div",{style:{fontSize:10.5,color:"var(--text-3)",letterSpacing:".1em",textTransform:"uppercase"},children:e.role})]}),c.jsx("button",{className:"btn sm ghost",onClick:()=>void a(),children:"Sign out"}),c.jsxs("div",{style:{fontSize:10.5,color:"var(--text-3)",lineHeight:1.6},children:["One-week demonstrator · synthetic data",c.jsx("br",{}),"Not a production pilot"]})]})})]}),c.jsxs("main",{className:"main",children:[c.jsxs("div",{className:"synthetic-banner",children:[c.jsx("strong",{children:"SYNTHETIC"}),c.jsx("span",{children:"Every style, measurement, and factory message in this build is invented for demonstration. Nothing here has been validated by a technical designer or a factory."}),c.jsx("span",{style:{marginLeft:"auto",display:"flex",gap:8},children:u.blockers>0&&c.jsxs(rt,{tone:"blocker",children:[u.blockers," export blockers"]})})]}),r&&c.jsxs("div",{className:"synthetic-banner",style:{background:"var(--blocker-bg)",borderColor:"rgba(229,72,77,.3)",color:"var(--blocker)"},children:[c.jsx("strong",{style:{color:"var(--blocker)"},children:"REFUSED"}),c.jsx("span",{children:r}),c.jsx("button",{className:"btn sm ghost",style:{marginLeft:"auto"},onClick:s,children:"Dismiss"})]}),c.jsxs("div",{className:"topbar",children:[c.jsxs("div",{className:"crumb",children:[c.jsx("b",{children:t.brand})," / ",t.season," ",t.year,o.page==="style"&&c.jsxs(c.Fragment,{children:[" / ",c.jsx("b",{children:o.id})]}),o.page==="governance"&&c.jsxs(c.Fragment,{children:[" / ",c.jsx("b",{children:"Governance"})]})]}),c.jsx("div",{className:"spacer"}),c.jsx(rt,{tone:"gold",children:"Pilot workspace"})]}),c.jsxs("div",{className:"content",children:[o.page==="collection"&&c.jsx(my,{onOpen:d=>l({page:"style",id:d})}),o.page==="style"&&c.jsx(Ow,{styleId:o.id,onBack:()=>l({page:"collection"})}),o.page==="governance"&&c.jsx(jw,{})]})]})]})})}function qw(){return c.jsx(cy,{children:c.jsx($w,{})})}G0(document.getElementById("root")).render(c.jsx(tt.StrictMode,{children:c.jsx(qw,{})}));
