// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o,e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";o=n&&"symbol"==typeof Symbol.toStringTag?function(n){var o,e,f,u,i;if(null==n)return t.call(n);e=n[a],i=a,o=null!=(u=n)&&r.call(u,i);try{n[a]=void 0}catch(r){return t.call(n)}return f=t.call(n),o?n[a]=e:delete n[a],f}:function(n){return t.call(n)};var f=o,u="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null;var y="function"==typeof Float32Array?Float32Array:void 0;var l=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c([1,3.14,-3.14,5e40]),r=t,n=(u&&r instanceof Float32Array||"[object Float32Array]"===f(r))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===i}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")},v="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var b="function"==typeof Uint32Array?Uint32Array:void 0;var w=function(){var n,t,r;if("function"!=typeof p)return!1;try{t=new p(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(v&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")},A=new l(1),m=new w(A.buffer);function d(n){return A[0]=n,m[0]}var S=new w(1),h=new l(S.buffer);var F=new l(1);new w(F.buffer)[0]=4286578688;var U=F[0],s=2139095040,g=127,I=8388607,N="function"==typeof Math.fround?Math.fround:null,j=new l(1);var O="function"==typeof N?N:function(n){return j[0]=n,j[0]};var T=.69313812256,E=90580006145e-16,M=33554432,P=.3333333333333333;function x(n){var t,r,o,e,a,f,u,i,c,y,l,v,p;return 0===n?U:function(n){return n!=n}(n)||n<0?NaN:(a=0,(r=d(n=O(n)))<8388608&&(a-=25,r=d(n=O(n*M))),r>=s?O(n+n):(a=O(a+O((r>>23)-g)),p=(r&=I)|1065353216^(i=r+4913952&8388608),S[0]=p,n=h[0],a=O(a+(i>>23)),u=O(n-1),(I&O(32768+r))<49152?0===u?0===a?0:O(O(a*T)+O(a*E)):(f=O(O(u*u)*O(.5-O(P*u))),O(0===a?u-f:O(a*T)-O(O(f-O(a*E))-u))):(y=O(u/O(2+u)),v=O(y*y),i=r-3187664,l=O(v*v),c=3523208-r,e=O(l*O(function(n){return 0===n?.40000972152:.40000972152+.24279078841*n}(l))),o=O(v*O(function(n){return 0===n?.66666662693:.66666662693+.28498786688*n}(l))),i|=c,f=O(o+e),i>0?(t=O(.5*O(u*u)),O(0===a?u-O(t-O(y*O(t+f))):O(a*T)-O(O(t-O(y*O(t+f)+O(a*E)))-u))):O(0===a?u-O(y*O(u-f)):O(a*T)-O(O(O(y*O(u-f))-O(a*E))-u)))))}function V(n,t){return O(x(O(n))/x(O(t)))}export{V as default};
//# sourceMappingURL=mod.js.map