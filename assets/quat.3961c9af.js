import{dk as b,dF as F,dj as L,dG as T,dH as Y,dI as D,dJ as N,dK as k,dL as v,dM as G,dN as H,dO as J,dc as K,dd as I,dP as W,d6 as X,cs as Z,dm as x,dl as A}from"./index.32114bf6.js";function y(){return[1,0,0,0,1,0,0,0,1]}function B(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]}function C(n,r,e,o,t,c,a,u,i){return[n,r,e,o,t,c,a,u,i]}function Q(n,r){return new Float64Array(n,r,9)}Object.freeze({__proto__:null,create:y,clone:B,fromValues:C,createView:Q});function p(){return[0,0,0,1]}function R(n){return[n[0],n[1],n[2],n[3]]}function S(n,r,e,o){return[n,r,e,o]}function U(n,r){return new Float64Array(n,r,4)}const nn=p();Object.freeze({__proto__:null,create:p,clone:R,fromValues:S,createView:U,IDENTITY:nn});function rn(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function z(n,r,e){e*=.5;const o=Math.sin(e);return n[0]=o*r[0],n[1]=o*r[1],n[2]=o*r[2],n[3]=Math.cos(e),n}function on(n,r){const e=2*Math.acos(r[3]),o=Math.sin(e/2);return o>b?(n[0]=r[0]/o,n[1]=r[1]/o,n[2]=r[2]/o):(n[0]=1,n[1]=0,n[2]=0),e}function w(n,r,e){const o=r[0],t=r[1],c=r[2],a=r[3],u=e[0],i=e[1],h=e[2],s=e[3];return n[0]=o*s+a*u+t*h-c*i,n[1]=t*s+a*i+c*u-o*h,n[2]=c*s+a*h+o*i-t*u,n[3]=a*s-o*u-t*i-c*h,n}function tn(n,r,e){e*=.5;const o=r[0],t=r[1],c=r[2],a=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+a*u,n[1]=t*i+c*u,n[2]=c*i-t*u,n[3]=a*i-o*u,n}function en(n,r,e){e*=.5;const o=r[0],t=r[1],c=r[2],a=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i-c*u,n[1]=t*i+a*u,n[2]=c*i+o*u,n[3]=a*i-t*u,n}function cn(n,r,e){e*=.5;const o=r[0],t=r[1],c=r[2],a=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+t*u,n[1]=t*i-o*u,n[2]=c*i+a*u,n[3]=a*i-c*u,n}function an(n,r){const e=r[0],o=r[1],t=r[2];return n[0]=e,n[1]=o,n[2]=t,n[3]=Math.sqrt(Math.abs(1-e*e-o*o-t*t)),n}function m(n,r,e,o){const t=r[0],c=r[1],a=r[2],u=r[3];let i,h,s,f,l,d=e[0],$=e[1],_=e[2],q=e[3];return h=t*d+c*$+a*_+u*q,h<0&&(h=-h,d=-d,$=-$,_=-_,q=-q),1-h>b?(i=Math.acos(h),s=Math.sin(i),f=Math.sin((1-o)*i)/s,l=Math.sin(o*i)/s):(f=1-o,l=o),n[0]=f*t+l*d,n[1]=f*c+l*$,n[2]=f*a+l*_,n[3]=f*u+l*q,n}function un(n){const r=A(),e=A(),o=A(),t=Math.sqrt(1-r),c=Math.sqrt(r);return n[0]=t*Math.sin(2*Math.PI*e),n[1]=t*Math.cos(2*Math.PI*e),n[2]=c*Math.sin(2*Math.PI*o),n[3]=c*Math.cos(2*Math.PI*o),n}function hn(n,r){const e=r[0],o=r[1],t=r[2],c=r[3],a=e*e+o*o+t*t+c*c,u=a?1/a:0;return n[0]=-e*u,n[1]=-o*u,n[2]=-t*u,n[3]=c*u,n}function sn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=r[3],n}function E(n,r){const e=r[0]+r[4]+r[8];let o;if(e>0)o=Math.sqrt(e+1),n[3]=.5*o,o=.5/o,n[0]=(r[5]-r[7])*o,n[1]=(r[6]-r[2])*o,n[2]=(r[1]-r[3])*o;else{let t=0;r[4]>r[0]&&(t=1),r[8]>r[3*t+t]&&(t=2);const c=(t+1)%3,a=(t+2)%3;o=Math.sqrt(r[3*t+t]-r[3*c+c]-r[3*a+a]+1),n[t]=.5*o,o=.5/o,n[3]=(r[3*c+a]-r[3*a+c])*o,n[c]=(r[3*c+t]+r[3*t+c])*o,n[a]=(r[3*a+t]+r[3*t+a])*o}return n}function Mn(n,r,e,o){const t=.5*Math.PI/180;r*=t,e*=t,o*=t;const c=Math.sin(r),a=Math.cos(r),u=Math.sin(e),i=Math.cos(e),h=Math.sin(o),s=Math.cos(o);return n[0]=c*i*s-a*u*h,n[1]=a*u*s+c*i*h,n[2]=a*i*h-c*u*s,n[3]=a*i*s+c*u*h,n}function fn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const ln=F,dn=L,$n=T,_n=w,qn=Y,mn=D,pn=N,O=k,In=O,V=v,An=V,P=G,Pn=H,gn=J;function jn(n,r,e){const o=K(r,e);return o<-.999999?(I(M,bn,r),W(M)<1e-6&&I(M,xn,r),X(M,M),z(n,M,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(I(M,r,e),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+o,P(n,n))}const M=Z(),bn=x(1,0,0),xn=x(0,1,0);function yn(n,r,e,o,t,c){return m(g,r,t,c),m(j,e,o,c),m(n,g,j,2*c*(1-c)),n}const g=p(),j=p();function zn(n,r,e,o){const t=wn;return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],P(n,E(n,t))}const wn=y();Object.freeze({__proto__:null,identity:rn,setAxisAngle:z,getAxisAngle:on,multiply:w,rotateX:tn,rotateY:en,rotateZ:cn,calculateW:an,slerp:m,random:un,invert:hn,conjugate:sn,fromMat3:E,fromEuler:Mn,str:fn,copy:ln,set:dn,add:$n,mul:_n,scale:qn,dot:mn,lerp:pn,length:O,len:In,squaredLength:V,sqrLen:An,normalize:P,exactEquals:Pn,equals:gn,rotationTo:jn,sqlerp:yn,setAxes:zn});export{Mn as C,z as I,Pn as N,on as P,y as a,nn as b,U as c,p as e,R as n,Q as t,w as v,sn as w};
