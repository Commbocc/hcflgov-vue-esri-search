import{di as L}from"./index.32114bf6.js";function B(a,n,o){var r;const l=a.byteLength/(4*n),d=new Uint32Array(a,0,l*n);let h=new Uint32Array(l);const g=(r=o==null?void 0:o.minReduction)!=null?r:0,c=(o==null?void 0:o.originalIndices)||null,p=c?c.length:0,i=(o==null?void 0:o.componentOffsets)||null;let U=0;if(i)for(let t=0;t<i.length-1;t++){const f=i[t+1]-i[t];f>U&&(U=f)}else U=l;const w=Math.floor(1.1*U)+1;(s==null||s.length<2*w)&&(s=new Uint32Array(L(2*w)));for(let t=0;t<2*w;t++)s[t]=0;let u=0;const A=!!i&&!!c,b=A?p:l,m=A?new Uint32Array(p):null,M=1.96;let j=g!==0?Math.ceil(4*M*M/(g*g)*g*(1-g)):b,v=1,x=i?i[1]:b;for(let t=0;t<b;t++){if(t===j){const e=1-u/t;if(e+M*Math.sqrt(e*(1-e)/t)<g)return null;j*=2}if(t===x){for(let e=0;e<2*w;e++)s[e]=0;if(c)for(let e=i[v-1];e<i[v];e++)m[e]=h[c[e]];x=i[++v]}const f=A?c[t]:t,I=f*n,q=$(d,I,n);let y=q%w,k=u;for(;s[2*y+1]!==0;){if(s[2*y]===q){const e=s[2*y+1]-1;if(O(d,I,e*n,n)){k=h[e];break}}y++,y>=w&&(y-=w)}k===u&&(s[2*y]=q,s[2*y+1]=f+1,u++),h[f]=k}if(g!==0&&1-u/l<g)return null;if(A){for(let t=i[v-1];t<m.length;t++)m[t]=h[c[t]];h=m}const C=new Uint32Array(n*u);u=0;for(let t=0;t<b;t++)h[t]===u&&(R(d,(A?c[t]:t)*n,C,u*n,n),u++);if(c&&!A){const t=new Uint32Array(p);for(let f=0;f<t.length;f++)t[f]=h[c[f]];h=t}return{buffer:C.buffer,indices:h,uniqueCount:u}}function O(a,n,o,r){for(let l=0;l<r;l++)if(a[n+l]!==a[o+l])return!1;return!0}function R(a,n,o,r,l){for(let d=0;d<l;d++)o[r+d]=a[n+d]}function $(a,n,o){let r=0;for(let l=0;l<o;l++)r=a[n+l]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let s=null;export{B as n};
