// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var u=e,a=s,o=r.isPrimitive,p=i.isPrimitive,l=n;var m=function(t,e){return u(e)?a(e,"flags")&&(t.flags=e.flags,!p(t.flags))?new TypeError(l("invalid option. `%s` option must be a string. Option: `%s`.","flags",t.flags)):a(e,"capture")&&(t.capture=e.capture,!o(t.capture))?new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",t.capture)):null:new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",e))},d="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";var f=function(t){var e,s;if(arguments.length>0){if(s=m(e={},t))throw s;return e.capture?new RegExp("("+d+")",e.flags):new RegExp(d,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/},g=t,j=f,c=f({capture:!0}),v=f();g(j,"REGEXP",v),g(j,"REGEXP_CAPTURE",c);var h=j;export{v as REGEXP,c as REGEXP_CAPTURE,h as default};
//# sourceMappingURL=index.mjs.map
