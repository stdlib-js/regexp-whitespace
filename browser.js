// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,h,"e"),n=l.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),e.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,y,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,E=isNaN,_=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,a,u,s,f,l,p,g,d,y;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",s+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,o;for(t=[],o=0,n=O.exec(e);n;)(r=e.slice(o,O.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),o=O.lastIndex,n=O.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var F,P=Object.prototype,V=P.toString,R=P.__defineGetter__,C=P.__defineSetter__,I=P.__lookupGetter__,$=P.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(I.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var B=F;function G(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return L&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Z(e,r){return null!=e&&X.call(e,r)}var M="function"==typeof Symbol?Symbol:void 0,N="function"==typeof M?M.toStringTag:"",z=W()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[N],r=Z(e,N);try{e[N]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[N]=t:delete e[N],n}:function(e){return U.call(e)},D=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)},q=/./;function H(e){return"boolean"==typeof e}var J=Boolean,K=Boolean.prototype.toString,Q=W();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function ee(e){return H(e)||Y(e)}G(ee,"isPrimitive",H),G(ee,"isObject",Y);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!H(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=oe.document&&oe.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function se(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,o;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return se(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(ce,"REGEXP",ue),G(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!D(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var le="function"==typeof q||"object"==typeof ae||"function"==typeof ie?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?fe(e).toLowerCase():r};function pe(e){return"function"===le(e)}var ge,de=Object,ye=Object.getPrototypeOf;ge=pe(Object.getPrototypeOf)?ye:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===z(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var be=ge,he=Object.prototype;function ve(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!D(e)}(e)&&(r=function(e){return null==e?null:(e=de(e),be(e))}(e),!r||!Z(e,"constructor")&&Z(r,"constructor")&&pe(r.constructor)&&"[object Function]"===z(r.constructor)&&Z(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===he||function(e){var r;for(r in e)if(!Z(e,r))return!1;return!0}(e)))}function we(e){return"string"==typeof e}var me=String.prototype.valueOf,je=W();function Ee(e){return"object"==typeof e&&(e instanceof String||(je?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object String]"===z(e)))}function _e(e){return we(e)||Ee(e)}function Se(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}G(_e,"isPrimitive",we),G(_e,"isObject",Ee);var xe="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Oe(e){var r,t;if(arguments.length>0){if(t=function(e,r){return ve(r)?Z(r,"flags")&&(e.flags=r.flags,!we(e.flags))?new TypeError(Se("0sn2W","flags",e.flags)):Z(r,"capture")&&(e.capture=r.capture,!H(e.capture))?new TypeError(Se("0sn2o","capture",e.capture)):null:new TypeError(Se("0sn2V",r))}(r={},e),t)throw t;return r.capture?new RegExp("("+xe+")",r.flags):new RegExp(xe,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Te=Oe({capture:!0}),ke=Oe();return G(Oe,"REGEXP",ke),G(Oe,"REGEXP_CAPTURE",Te),Oe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reWhitespace=r();
//# sourceMappingURL=browser.js.map
