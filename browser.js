// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):u.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,F=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,i,t,a,o,p,u,l,f;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",u=1,l=0;l<e.length;l++)if(c(t=e[l]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,S(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",u+=1}return p}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,n;for(i=[],n=0,t=j.exec(e);t;)(r=e.slice(n,j.lastIndex-t[0].length)).length&&i.push(r),i.push(T(t)),n=j.lastIndex,t=j.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function _(e){return"string"==typeof e}function I(e){var r,i;if(!_(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $.apply(null,r)}var R,C=Object.prototype,O=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,W=C.__lookupGetter__,L=C.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,i.get),o&&P&&P.call(e,r,i.set),e};var G=R;function X(e,r,i){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return U&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&M.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"",H=N()?function(e){var r,i,t;if(null==e)return B.call(e);i=e[q],r=z(e,q);try{e[q]=void 0}catch(r){return B.call(e)}return t=B.call(e),r?e[q]=i:delete e[q],t}:function(e){return B.call(e)},J=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)},K=/./;function Q(e){return"boolean"==typeof e}var Y=Boolean,ee=Boolean.prototype.toString,re=N();function ie(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return Q(e)||ie(e)}function ne(e){return"number"==typeof e}function ae(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function oe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ae(n):ae(n)+e,t&&(e="-"+e)),e}X(te,"isPrimitive",Q),X(te,"isObject",ie);var se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function pe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ne(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=oe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=oe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ue(e){return"string"==typeof e}var le=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":le(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=de.call(i,Ee,"$1e"),i=de.call(i,me,"e"),i=de.call(i,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=de.call(i,he,"e+0$1"),i=de.call(i,we,"e-0$1"),e.alternate&&(i=de.call(i,be,"$1."),i=de.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ge.call(e.specifier)?ge.call(i):fe.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Se(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Fe=String.fromCharCode,Ve=isNaN,$e=Array.isArray;function je(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Te(e){var r,i,t,n,a,o,s,c,p;if(!$e(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ue(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=je(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ve(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ve(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=pe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ve(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ve(a)?String(t.arg):Fe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=xe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Se(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ie(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(_e(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Re(e){return"string"==typeof e}function Ce(e){var r,i;if(!Re(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ie(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Te.apply(null,r)}function Oe(){return new Function("return this;")()}var Ze="object"==typeof self?self:null,Pe="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Le=function(e){if(arguments.length){if(!Q(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Oe()}if(We)return We;if(Ze)return Ze;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=Le.document&&Le.document.childNodes,Xe=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Ne=/^\s*function\s*([^(]*)/i;function Be(e){return"number"==typeof e}function Me(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ze(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Me(n):Me(n)+e,t&&(e="-"+e)),e}X(Ue,"REGEXP",Ne);var De=String.prototype.toLowerCase,qe=String.prototype.toUpperCase;function He(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Be(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ze(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ze(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===qe.call(e.specifier)?qe.call(i):De.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Je(e){return"string"==typeof e}var Ke=Math.abs,Qe=String.prototype.toLowerCase,Ye=String.prototype.toUpperCase,er=String.prototype.replace,rr=/e\+(\d)$/,ir=/e-(\d)$/,tr=/^(\d+)$/,nr=/^(\d+)e/,ar=/\.0$/,or=/\.0*e/,sr=/(\..*[^0])0*e/;function cr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Be(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ke(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=er.call(i,sr,"$1e"),i=er.call(i,or,"e"),i=er.call(i,ar,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=er.call(i,rr,"e+0$1"),i=er.call(i,ir,"e-0$1"),e.alternate&&(i=er.call(i,tr,"$1."),i=er.call(i,nr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ye.call(e.specifier)?Ye.call(i):Qe.call(i)}function pr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ur(e,r,i){var t=r-e.length;return t<0?e:e=i?e+pr(t):pr(t)+e}var lr=String.fromCharCode,fr=isNaN,gr=Array.isArray;function dr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function hr(e){var r,i,t,n,a,o,s,c,p;if(!gr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Je(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=dr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,fr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,fr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=He(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!fr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=fr(a)?String(t.arg):lr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=cr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ze(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ur(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function br(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vr(e){var r,i,t,n;for(i=[],n=0,t=wr.exec(e);t;)(r=e.slice(n,wr.lastIndex-t[0].length)).length&&i.push(r),i.push(br(t)),n=wr.lastIndex,t=wr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function yr(e){return"string"==typeof e}function mr(e){var r,i;if(!yr(e))throw new TypeError(mr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return hr.apply(null,r)}function Er(e){return null!==e&&"object"==typeof e}function xr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Ne.exec(t.toString()))return r[1]}return Er(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}X(Er,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(mr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!J(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Er));var kr="function"==typeof K||"object"==typeof Xe||"function"==typeof Ge?function(e){return xr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?xr(e).toLowerCase():r};function Sr(e){return"function"===kr(e)}var Fr,Vr=Object,$r=Object.getPrototypeOf;Fr=Sr(Object.getPrototypeOf)?$r:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var jr=Fr,Tr=Object.prototype;function Ar(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!J(e)}(e)&&(r=function(e){return null==e?null:(e=Vr(e),jr(e))}(e),!r||!z(e,"constructor")&&z(r,"constructor")&&Sr(r.constructor)&&"[object Function]"===H(r.constructor)&&z(r,"isPrototypeOf")&&Sr(r.isPrototypeOf)&&(r===Tr||function(e){var r;for(r in e)if(!z(e,r))return!1;return!0}(e)))}function _r(e){return"string"==typeof e}var Ir=String.prototype.valueOf,Rr=N();function Cr(e){return"object"==typeof e&&(e instanceof String||(Rr?function(e){try{return Ir.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function Or(e){return _r(e)||Cr(e)}function Zr(e){return"number"==typeof e}function Pr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Wr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Pr(n):Pr(n)+e,t&&(e="-"+e)),e}X(Or,"isPrimitive",_r),X(Or,"isObject",Cr);var Lr=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase;function Xr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Zr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Wr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Wr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Gr.call(e.specifier)?Gr.call(i):Lr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ur(e){return"string"==typeof e}var Nr=Math.abs,Br=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase,zr=String.prototype.replace,Dr=/e\+(\d)$/,qr=/e-(\d)$/,Hr=/^(\d+)$/,Jr=/^(\d+)e/,Kr=/\.0$/,Qr=/\.0*e/,Yr=/(\..*[^0])0*e/;function ei(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Zr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Nr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=zr.call(i,Yr,"$1e"),i=zr.call(i,Qr,"e"),i=zr.call(i,Kr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=zr.call(i,Dr,"e+0$1"),i=zr.call(i,qr,"e-0$1"),e.alternate&&(i=zr.call(i,Hr,"$1."),i=zr.call(i,Jr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Mr.call(e.specifier)?Mr.call(i):Br.call(i)}function ri(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ii(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ri(t):ri(t)+e}var ti=String.fromCharCode,ni=isNaN,ai=Array.isArray;function oi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function si(e){var r,i,t,n,a,o,s,c,p;if(!ai(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ur(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=oi(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ni(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ni(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Xr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ni(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ni(a)?String(t.arg):ti(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ei(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Wr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ii(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ci=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function pi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ui(e){var r,i,t,n;for(i=[],n=0,t=ci.exec(e);t;)(r=e.slice(n,ci.lastIndex-t[0].length)).length&&i.push(r),i.push(pi(t)),n=ci.lastIndex,t=ci.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function li(e){return"string"==typeof e}function fi(e){var r,i,t;if(!li(e))throw new TypeError(fi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ui(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return si.apply(null,i)}function gi(e,r){return Ar(r)?z(r,"flags")&&(e.flags=r.flags,!_r(e.flags))?new TypeError(fi("invalid option. `%s` option must be a string. Option: `%s`.","flags",e.flags)):z(r,"capture")&&(e.capture=r.capture,!Q(e.capture))?new TypeError(fi("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",e.capture)):null:new TypeError(fi("invalid argument. Options argument must be an object. Value: `%s`.",r))}var di="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function hi(e){var r,i;if(arguments.length>0){if(i=gi(r={},e))throw i;return r.capture?new RegExp("("+di+")",r.flags):new RegExp(di,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var wi=hi({capture:!0}),bi=hi();return X(hi,"REGEXP",bi),X(hi,"REGEXP_CAPTURE",wi),hi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reWhitespace=r();
//# sourceMappingURL=browser.js.map
