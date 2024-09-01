// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"";n=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,e,u,i,a;if(null==n)return r.call(n);e=n[f],a=f,t=null!=(i=n)&&o.call(i,a);try{n[f]=void 0}catch(t){return r.call(n)}return u=r.call(n),t?n[f]=e:delete n[f],u}:function(n){return r.call(n)};var u=n,i="function"==typeof Float32Array,a=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,l=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c([1,3.14,-3.14,5e40]),r=t,n=(i&&r instanceof Float32Array||"[object Float32Array]"===u(r))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===a}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")},p="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(p&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")},w=new l(1),A=new m(w.buffer);function s(n){return w[0]=n,A[0]}var v=new m(1),h=new l(v.buffer),S=new l(1);new m(S.buffer)[0]=4286578688;var g=S[0],F=2139095040,U=127,T=8388607,j="function"==typeof Math.fround?Math.fround:null,I=new l(1),N="function"==typeof j?j:function(n){return I[0]=n,I[0]},O=.69313812256,E=90580006145e-16,x=33554432,M=.3333333333333333;function P(n){var t,r,o,e,f,u,i,a,c,y,l,p,d;return 0===n?g:function(n){return n!=n}(n)||n<0?NaN:(f=0,(r=s(n=N(n)))<8388608&&(f-=25,r=s(n=N(n*x))),r>=F?N(n+n):(f=N(f+N((r>>23)-U)),d=(r&=T)|1065353216^(a=r+4913952&8388608),v[0]=d,n=h[0],f=N(f+(a>>23)),i=N(n-1),(T&N(32768+r))<49152?0===i?0===f?0:N(N(f*O)+N(f*E)):(u=N(N(i*i)*N(.5-N(M*i))),N(0===f?i-u:N(f*O)-N(N(u-N(f*E))-i))):(y=N(i/N(2+i)),p=N(y*y),a=r-3187664,l=N(p*p),c=3523208-r,e=N(l*N(function(n){return 0===n?.40000972152:.40000972152+.24279078841*n}(l))),o=N(p*N(function(n){return 0===n?.66666662693:.66666662693+.28498786688*n}(l))),a|=c,u=N(o+e),a>0?(t=N(.5*N(i*i)),N(0===f?i-N(t-N(y*N(t+u))):N(f*O)-N(N(t-N(y*N(t+u)+N(f*E)))-i))):N(0===f?i-N(y*N(i-u)):N(f*O)-N(N(N(y*N(i-u))-N(f*E))-i)))))}return function(n,t){return N(P(N(n))/P(N(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).logf=t();
//# sourceMappingURL=index.js.map
