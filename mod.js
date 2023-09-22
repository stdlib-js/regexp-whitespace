// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var u=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":u(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):p.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,i,a,o,u,p,l,f;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",p=1,l=0;l<r.length;l++)if(s(i=r[l]))u+=i;else{if(e=void 0!==i.precision,!(i=F(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),u+=i.arg||"",p+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=V.exec(r);i;)(e=r.slice(n,V.lastIndex-i[0].length)).length&&t.push(e),t.push(A(i)),n=V.lastIndex,i=V.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function $(r){return"string"==typeof r}function I(r){var e,t,i;if(!$(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return _.apply(null,t)}var O,R=Object.prototype,C=R.toString,P=R.__defineGetter__,Z=R.__defineSetter__,G=R.__lookupGetter__,W=R.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var L=O;function U(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&M.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"";var H=B()?function(r){var e,t,i;if(null==r)return N.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return N.call(r)}return i=N.call(r),e?r[q]=t:delete r[q],i}:function(r){return N.call(r)};var J=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var K=/./;function Q(r){return"boolean"==typeof r}var Y=Boolean,rr=Boolean.prototype.toString;var er=B();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function ir(r){return Q(r)||tr(r)}function nr(r){return"number"==typeof r}function ar(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function or(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ar(n):ar(n)+r,i&&(r="-"+r)),r}U(ir,"isPrimitive",Q),U(ir,"isObject",tr);var cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase;function ur(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!nr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=or(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=or(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===sr.call(r.specifier)?sr.call(t):cr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pr(r){return"string"==typeof r}var lr=Math.abs,fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,br=/^(\d+)$/,vr=/^(\d+)e/,yr=/\.0$/,mr=/\.0*e/,Er=/(\..*[^0])0*e/;function xr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":lr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=dr.call(t,Er,"$1e"),t=dr.call(t,mr,"e"),t=dr.call(t,yr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dr.call(t,hr,"e+0$1"),t=dr.call(t,wr,"e-0$1"),r.alternate&&(t=dr.call(t,br,"$1."),t=dr.call(t,vr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gr.call(r.specifier)?gr.call(t):fr.call(t)}function kr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Sr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+kr(i):kr(i)+r}var jr=String.fromCharCode,Fr=isNaN,_r=Array.isArray;function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ar(r){var e,t,i,n,a,o,c,s,u;if(!_r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(pr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Vr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Fr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Fr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ur(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Fr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Fr(a)?String(i.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=xr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=or(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Sr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ir(r){var e,t,i,n;for(t=[],n=0,i=Tr.exec(r);i;)(e=r.slice(n,Tr.lastIndex-i[0].length)).length&&t.push(e),t.push($r(i)),n=Tr.lastIndex,i=Tr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function Rr(r){var e,t,i;if(!Or(r))throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ir(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Ar.apply(null,t)}function Cr(){return new Function("return this;")()}var Pr="object"==typeof self?self:null,Zr="object"==typeof window?window:null,Gr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wr="object"==typeof Gr?Gr:null,Lr="object"==typeof globalThis?globalThis:null;var Ur=function(r){if(arguments.length){if(!Q(r))throw new TypeError(Rr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Cr()}if(Lr)return Lr;if(Pr)return Pr;if(Zr)return Zr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Xr=Ur.document&&Ur.document.childNodes,Br=Int8Array;function Nr(){return/^\s*function\s*([^(]*)/i}var Mr=/^\s*function\s*([^(]*)/i;function zr(r){return"number"==typeof r}function Dr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function qr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Dr(n):Dr(n)+r,i&&(r="-"+r)),r}U(Nr,"REGEXP",Mr);var Hr=String.prototype.toLowerCase,Jr=String.prototype.toUpperCase;function Kr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!zr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=qr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=qr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Jr.call(r.specifier)?Jr.call(t):Hr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Qr(r){return"string"==typeof r}var Yr=Math.abs,re=String.prototype.toLowerCase,ee=String.prototype.toUpperCase,te=String.prototype.replace,ie=/e\+(\d)$/,ne=/e-(\d)$/,ae=/^(\d+)$/,oe=/^(\d+)e/,ce=/\.0$/,se=/\.0*e/,ue=/(\..*[^0])0*e/;function pe(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!zr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Yr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=te.call(t,ue,"$1e"),t=te.call(t,se,"e"),t=te.call(t,ce,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=te.call(t,ie,"e+0$1"),t=te.call(t,ne,"e-0$1"),r.alternate&&(t=te.call(t,ae,"$1."),t=te.call(t,oe,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ee.call(r.specifier)?ee.call(t):re.call(t)}function le(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function fe(r,e,t){var i=e-r.length;return i<0?r:r=t?r+le(i):le(i)+r}var ge=String.fromCharCode,de=isNaN,he=Array.isArray;function we(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function be(r){var e,t,i,n,a,o,c,s,u;if(!he(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Qr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=we(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,de(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,de(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Kr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!de(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=de(a)?String(i.arg):ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=pe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=qr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ye(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function me(r){var e,t,i,n;for(t=[],n=0,i=ve.exec(r);i;)(e=r.slice(n,ve.lastIndex-i[0].length)).length&&t.push(e),t.push(ye(i)),n=ve.lastIndex,i=ve.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Ee(r){return"string"==typeof r}function xe(r){var e,t,i;if(!Ee(r))throw new TypeError(xe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=me(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return be.apply(null,t)}function ke(r){return null!==r&&"object"==typeof r}function Se(r){var e,t,i,n;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Mr.exec(i.toString()))return e[1]}return ke(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(ke,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(xe("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!J(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(ke));var je="function"==typeof K||"object"==typeof Br||"function"==typeof Xr?function(r){return Se(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Se(r).toLowerCase():e};function Fe(r){return"function"===je(r)}var _e,Ve=Object,Ae=Object.getPrototypeOf;_e=Fe(Object.getPrototypeOf)?Ae:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Te=_e;var $e=Object.prototype;function Ie(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!J(r)}(r)&&(e=function(r){return null==r?null:(r=Ve(r),Te(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&Fe(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&Fe(e.isPrototypeOf)&&(e===$e||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Oe(r){return"string"==typeof r}var Re=String.prototype.valueOf;var Ce=B();function Pe(r){return"object"==typeof r&&(r instanceof String||(Ce?function(r){try{return Re.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function Ze(r){return Oe(r)||Pe(r)}function Ge(){var r,e=arguments,t=e[0],i="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)i+="&arg[]="+encodeURIComponent(e[r]);return i}function We(r,e){return Ie(e)?z(e,"flags")&&(r.flags=e.flags,!Oe(r.flags))?new TypeError(Ge("0sn2W,Gh","flags",r.flags)):z(e,"capture")&&(r.capture=e.capture,!Q(r.capture))?new TypeError(Ge("0sn2o,GE","capture",r.capture)):null:new TypeError(Ge("0sn2V,FD",e))}U(Ze,"isPrimitive",Oe),U(Ze,"isObject",Pe);var Le="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Ue(r){var e,t;if(arguments.length>0){if(t=We(e={},r))throw t;return e.capture?new RegExp("("+Le+")",e.flags):new RegExp(Le,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Xe=Ue({capture:!0}),Be=Ue();U(Ue,"REGEXP",Be),U(Ue,"REGEXP_CAPTURE",Xe);export{Be as REGEXP,Xe as REGEXP_CAPTURE,Ue as default};
//# sourceMappingURL=mod.js.map
