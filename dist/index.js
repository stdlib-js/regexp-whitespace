"use strict";var e=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var E=e(function(O,v){
var P=require('@stdlib/assert-is-plain-object/dist'),n=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/assert-is-boolean/dist').isPrimitive,m=require('@stdlib/assert-is-string/dist').isPrimitive,t=require('@stdlib/error-tools-fmtprodmsg/dist');function F(u,r){return P(r)?n(r,"flags")&&(u.flags=r.flags,!m(u.flags))?new TypeError(t('0sn2W',"flags",u.flags)):n(r,"capture")&&(u.capture=r.capture,!q(u.capture))?new TypeError(t('0sn2o',"capture",u.capture)):null:new TypeError(t('0sn2V',r));}v.exports=F
});var a=e(function(C,l){
var A=E(),c="[	\n\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]";function G(u){var r,i;if(arguments.length>0){if(r={},i=A(r,u),i)throw i;return r.capture?new RegExp("("+c+")",r.flags):new RegExp(c,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}l.exports=G
});var f=e(function(y,p){
var w=a(),x=w({capture:!0});p.exports=x
});var o=e(function(_,g){
var T=a(),X=T();g.exports=X
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=a(),b=f(),d=o();R(s,"REGEXP",d);R(s,"REGEXP_CAPTURE",b);module.exports=s;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
