// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function i(e,t,r){var i=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=r?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var t,n,u;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!r(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(t),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var t,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((t=e.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function j(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function _(e,t,r){var n=t-e.length;return n<0?e:e=r?e+j(n):j(n)+e}var x=String.fromCharCode,S=isNaN,E=Array.isArray;function O(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function k(e){var t,r,n,o,a,l,f,s,p;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(c(n=e[s]))l+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function A(e){var t,r,n,i;for(r=[],i=0,n=I.exec(e);n;)(t=e.slice(i,I.lastIndex-n[0].length)).length&&r.push(t),r.push(T(n)),i=I.lastIndex,n=I.exec(e);return(t=e.slice(i)).length&&r.push(t),r}function V(e){return"string"==typeof e}function P(e){var t,r,n;if(!V(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=A(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return k.apply(null,r)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(L.call(e,t)||R.call(e,t)?(n=e.__proto__,e.__proto__=N,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,t,r.get),a&&B&&B.call(e,t,r.set),e};var G=F;function W(e,t,r){G(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var X={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Z(){var e;return 0===arguments.length?X.all.slice():(e=X[arguments[0]])?e.slice():[]}function M(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Y(e,t,r){G(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}function U(e){return Object.keys(Object(e))}var H=void 0!==Object.keys;var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return z&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(e,t){return null!=e&&J.call(e,t)}var Q="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof Q?Q.toStringTag:"";var te=D()?function(e){var t,r,n;if(null==e)return q.call(e);r=e[ee],t=K(e,ee);try{e[ee]=void 0}catch(t){return q.call(e)}return n=q.call(e),t?e[ee]=r:delete e[ee],n}:function(e){return q.call(e)};function re(e){return"[object Arguments]"===te(e)}var ne=function(){return re(arguments)}();function ie(e){return"string"==typeof e}var oe=String.prototype.valueOf;var ae=D();function ue(e){return"object"==typeof e&&(e instanceof String||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===te(e)))}function ce(e){return ie(e)||ue(e)}function le(e){return"number"==typeof e}W(ce,"isPrimitive",ie),W(ce,"isObject",ue);var fe=Number,se=fe.prototype.toString;var pe=D();function ge(e){return"object"==typeof e&&(e instanceof fe||(pe?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object Number]"===te(e)))}function de(e){return le(e)||ge(e)}function ye(e){return e!=e}function be(e){return le(e)&&ye(e)}function he(e){return ge(e)&&ye(e.valueOf())}function ve(e){return be(e)||he(e)}W(de,"isPrimitive",le),W(de,"isObject",ge),W(ve,"isPrimitive",be),W(ve,"isObject",he);var me=Number.POSITIVE_INFINITY,we=fe.NEGATIVE_INFINITY,je=Math.floor;function _e(e){return je(e)===e}function xe(e){return e<me&&e>we&&_e(e)}function Se(e){return le(e)&&xe(e)}function Ee(e){return ge(e)&&xe(e.valueOf())}function Oe(e){return Se(e)||Ee(e)}W(Oe,"isPrimitive",Se),W(Oe,"isObject",Ee);var ke=Object.prototype.propertyIsEnumerable;var Ie=!ke.call("beep","0");function Te(e,t){var r;return null!=e&&(!(r=ke.call(e,t))&&Ie&&ce(e)?!be(t=+t)&&Se(t)&&t>=0&&t<e.length:r)}var Ae=Array.isArray?Array.isArray:function(e){return"[object Array]"===te(e)};var Ve=ne?re:function(e){return null!==e&&"object"==typeof e&&!Ae(e)&&"number"==typeof e.length&&_e(e.length)&&e.length>=0&&e.length<=4294967295&&K(e,"callee")&&!Te(e,"callee")},Pe=Array.prototype.slice;function Fe(e){return null!==e&&"object"==typeof e}W(Fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!Ae(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(Fe));var Ne=Te((function(){}),"prototype"),$e=!Te({toString:null},"toString");function Ce(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&_e(e.length)&&e.length>=0&&e.length<=9007199254740991}function Be(e,t,r){var n,i;if(!Ce(e)&&!ie(e))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Se(r))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(ve(t)){for(;i<n;i++)if(ve(e[i]))return i}else for(;i<n;i++)if(e[i]===t)return i;return-1}var Le=/./;function Re(e){return"boolean"==typeof e}var Ge=Boolean,We=Boolean.prototype.toString;var Xe=D();function Ze(e){return"object"==typeof e&&(e instanceof Ge||(Xe?function(e){try{return We.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===te(e)))}function Me(e){return Re(e)||Ze(e)}function Ye(){return new Function("return this;")()}W(Me,"isPrimitive",Re),W(Me,"isObject",Ze);var Ue="object"==typeof self?self:null,He="object"==typeof window?window:null,ze="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},De="object"==typeof ze?ze:null,qe="object"==typeof globalThis?globalThis:null;var Je=function(e){if(arguments.length){if(!Re(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ye()}if(qe)return qe;if(Ue)return Ue;if(He)return He;if(De)return De;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array;function et(){return/^\s*function\s*([^(]*)/i}var tt=/^\s*function\s*([^(]*)/i;function rt(e){var t,r,n,i;if(("Object"===(r=te(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=tt.exec(n.toString()))return t[1]}return Fe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}W(et,"REGEXP",tt);var nt="function"==typeof Le||"object"==typeof Qe||"function"==typeof Ke?function(e){return rt(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?rt(e).toLowerCase():t};function it(e){return e.constructor&&e.constructor.prototype===e}var ot=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],at="undefined"==typeof window?void 0:window;var ut=function(){var e;if("undefined"===nt(at))return!1;for(e in at)try{-1===Be(ot,e)&&K(at,e)&&null!==at[e]&&"object"===nt(at[e])&&it(at[e])}catch(e){return!0}return!1}(),ct="undefined"!=typeof window;var lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ft=H?function(){return 2!==(U(arguments)||"").length}(1,2)?function(e){return Ve(e)?U(Pe.call(e)):U(e)}:U:function(e){var t,r,n,i,o,a,u;if(i=[],Ve(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!K(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Fe(e))return i;r=Ne&&n}for(o in e)r&&"prototype"===o||!K(e,o)||i.push(String(o));if($e)for(t=function(e){if(!1===ct&&!ut)return it(e);try{return it(e)}catch(e){return!1}}(e),u=0;u<lt.length;u++)a=lt[u],t&&"constructor"===a||!K(e,a)||i.push(String(a));return i};W(Z,"enum",M),function(e,t){var r,n,i;for(r=ft(t),i=0;i<r.length;i++)Y(e,n=r[i],t[n])}(Z,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var st={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function pt(e){var t=st[e];return"number"==typeof t?t:null}export{pt as default};
//# sourceMappingURL=mod.js.map