import{M as m,t as c}from"./index.32114bf6.js";function t(r=e){return[r[0],r[1],r[2],r[3]]}function y(r,u,n,o,i=t()){return i[0]=r,i[1]=u,i[2]=n,i[3]=o,i}function M(r,u=t()){return u[0]=r.xmin,u[1]=r.ymin,u[2]=r.xmax,u[3]=r.ymax,u}function h(r,u){return new m({xmin:r[0],ymin:r[1],xmax:r[2],ymax:r[3],spatialReference:u})}function f(r){return c(r)||r[0]>=r[2]?0:r[2]-r[0]}function a(r){return r[1]>=r[3]?0:r[3]-r[1]}function p(r){return f(r)*a(r)}function s(r,u){return Math.max(u[0],r[0])<=Math.min(u[2],r[2])&&Math.max(u[1],r[1])<=Math.min(u[3],r[3])}function l(r,u){return u[0]>=r[0]&&u[2]<=r[2]&&u[1]>=r[1]&&u[3]<=r[3]}const q=[1/0,1/0,-1/0,-1/0],e=[0,0,0,0];export{l as E,q as J,M as c,h as f,y as o,s as q,t as u,p as y};
