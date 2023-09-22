// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function i(s,i){return e(i)?r(i,"flags")&&(s.flags=i.flags,!u(s.flags))?new TypeError(n("0sn2W,Gh","flags",s.flags)):r(i,"capture")&&(s.capture=i.capture,!t(s.capture))?new TypeError(n("0sn2o,GE","capture",s.capture)):null:new TypeError(n("0sn2V,FD",i))}var o="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function p(s){var e,r;if(arguments.length>0){if(r=i(e={},s))throw r;return e.capture?new RegExp("("+o+")",e.flags):new RegExp(o,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var a=p({capture:!0}),l=p();s(p,"REGEXP",l),s(p,"REGEXP_CAPTURE",a);export{l as REGEXP,a as REGEXP_CAPTURE,p as default};
//# sourceMappingURL=index.mjs.map
