var ve=Object.defineProperty,$e=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var Vt=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Xt=(t,e,n)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ct=(t,e)=>{for(var n in e||(e={}))be.call(e,n)&&Xt(t,n,e[n]);if(Vt)for(var n of Vt(e))Me.call(e,n)&&Xt(t,n,e[n]);return t},ut=(t,e)=>$e(t,Ae(e));import{E as u,F as d,ey as Fe,aX as Te,a$ as De,H as et,Z as At,ez as qt,eA as Rt,eq as ie,r as f,f as W,bm as z,m as C,aI as Re,cs as M,L as jt,aA as O,eB as Ce,bX as Ee,e9 as Oe,ah as Ie,aU as Le,t as at,s as Ct,d5 as Nt,dt as _t,dA as dt,d6 as Pe,da as ae,dg as yt,eC as le,eD as Se,ds as je,eE as ce,bg as Ne,O as _e,eF as ze,aF as Ue,bi as We,M as Et,i as ke,dm as Mt,A as He,g as Be}from"./index.32114bf6.js";import{r as bt,M as Ge,x as Ze,a as zt,j as Ut,k as Wt,O as kt,h as Ht,L as Bt,b as Ve,c as lt,q as Ot,l as It,d as Xe,e as gt,f as wt}from"./georeference.c22b8472.js";import{x as qe}from"./earcut.91e104de.js";import{n as Ye}from"./deduplicate.291d7c44.js";import{N as _,U as ue}from"./projection.ce609a7b.js";import{d as pe,e as he}from"./vec33.71503a33.js";import{a as Gt}from"./quat.3961c9af.js";function Je(t,e,n,r){if(!e||!n)throw new Error("Cannot construct image data without dimensions");if(Yt)try{return new ImageData(t,e,n)}catch{Yt=!1}const o=Ke(e,n,r);return o.data.set(t,0),o}function Ke(t,e,n){return n||(n=Qe()),n.getContext("2d").createImageData(t,e)}let nt=null,Yt=!0;function Qe(){return nt||(nt=document.createElement("canvas"),nt.width=1,nt.height=1),nt}var X;const Ft=new WeakMap;let tn=0,E=X=class extends At{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,n,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:qt(t.src,r),crossOrigin:t.crossOrigin};e[n]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(o)};e[n]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:qt(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[n]=o}else{const o={type:"image-data",imageData:this._encodeImageData(t)};e[n]=o}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const n=e.substr(e.length-4,4).toLowerCase(),r=e.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(n="")=>`d:${n},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(Ft.has(this.data)||Ft.set(this.data,++tn),e(Ft.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new X(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const n=this.clone();return t.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),n=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return Je(n,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new X({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new X({data:t}):Rt(X,t)}};u([d({type:String,json:{write:Fe}})],E.prototype,"url",null),u([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],E.prototype,"data",null),u([Te("data")],E.prototype,"writeData",null),u([De("data")],E.prototype,"readData",null),u([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],E.prototype,"transparent",null),u([d({json:{write:!0}})],E.prototype,"wrap",void 0),u([d({readOnly:!0})],E.prototype,"contentHash",null),E=X=u([et("esri.geometry.support.MeshTexture")],E);const it=E;var Lt;let I=Lt=class extends At{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Lt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:f(this.color)?this.color.clone():null,colorTexture:f(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:f(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};u([d({type:ie,json:{write:!0}})],I.prototype,"color",void 0),u([d({type:it,json:{write:!0}})],I.prototype,"colorTexture",void 0),u([d({type:it,json:{write:!0}})],I.prototype,"normalTexture",void 0),u([d({nonNullable:!0,json:{write:!0}})],I.prototype,"alphaMode",void 0),u([d({nonNullable:!0,json:{write:!0}})],I.prototype,"alphaCutoff",void 0),u([d({nonNullable:!0,json:{write:!0}})],I.prototype,"doubleSided",void 0),I=Lt=u([et("esri.geometry.support.MeshMaterial")],I);const Zt=I;var Pt;let L=Pt=class extends Zt{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Pt(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return ut(ct({},super.clonePropertiesWithDeduplication(t)),{emissiveColor:f(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:f(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:f(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:f(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null})}};u([d({type:ie,json:{write:!0}})],L.prototype,"emissiveColor",void 0),u([d({type:it,json:{write:!0}})],L.prototype,"emissiveTexture",void 0),u([d({type:it,json:{write:!0}})],L.prototype,"occlusionTexture",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],L.prototype,"metallic",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],L.prototype,"roughness",void 0),u([d({type:it,json:{write:!0}})],L.prototype,"metallicRoughnessTexture",void 0),L=Pt=u([et("esri.geometry.support.MeshMaterialMetallicRoughness")],L);const en=L;var mt;const H=W.getLogger("esri.geometry.support.MeshVertexAttributes");let b=mt=class extends At{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return q(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},H)}castPosition(t){return t&&t instanceof Float32Array&&H.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),q(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},H)}castUv(t){return q(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},H)}castNormal(t){return q(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},H)}castTangent(t){return q(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},H)}clone(){const t={position:C(this.position),uv:C(this.uv),normal:C(this.normal),tangent:C(this.tangent),color:C(this.color)};return new mt(t)}clonePositional(){const t={position:C(this.position),normal:C(this.normal),tangent:C(this.tangent),uv:this.uv,color:this.color};return new mt(t)}};function Tt(t,e,n,r){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function q(t,e,n,r,o){if(!t)return t;if(t instanceof e)return Tt(t,r,e,o);for(const s of n)if(t instanceof s)return Tt(new e(t),r,e,o);if(Array.isArray(t))return Tt(new e(t),r,e,o);{const s=n.map(i=>`'${i.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new e([])}}function rt(t,e,n){e[n]=nn(t)}function nn(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}u([d({json:{write:rt}})],b.prototype,"color",void 0),u([z("color")],b.prototype,"castColor",null),u([d({nonNullable:!0,json:{write:rt}})],b.prototype,"position",void 0),u([z("position")],b.prototype,"castPosition",null),u([d({json:{write:rt}})],b.prototype,"uv",void 0),u([z("uv")],b.prototype,"castUv",null),u([d({json:{write:rt}})],b.prototype,"normal",void 0),u([z("normal")],b.prototype,"castNormal",null),u([d({json:{write:rt}})],b.prototype,"tangent",void 0),u([z("tangent")],b.prototype,"castTangent",null),b=mt=u([et("esri.geometry.support.MeshVertexAttributes")],b);var st;const rn=W.getLogger("esri.geometry.support.MeshComponent");let P=st=class extends At{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return Rt(st,t)}castFaces(t){return q(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},rn)}castMaterial(t){return Rt(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?en:Zt,t)}clone(){return new st({faces:C(this.faces),shading:this.shading,material:C(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const n={faces:C(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new st(n)}};u([d({json:{write:!0}})],P.prototype,"faces",void 0),u([z("faces")],P.prototype,"castFaces",null),u([d({type:Zt,json:{write:!0}})],P.prototype,"material",void 0),u([z("material")],P.prototype,"castMaterial",null),u([d({type:String,json:{write:!0}})],P.prototype,"shading",void 0),u([d({type:Boolean})],P.prototype,"trustSourceNormals",void 0),P=st=u([et("esri.geometry.support.MeshComponent")],P);const Q=P;function on(t){const e=an(t.rings,t.hasZ,xt.CCW_IS_HOLE),n=[];let r=0,o=0;for(const a of e.polygons){const c=a.count,l=a.index,g=new Float64Array(e.position.buffer,3*l*e.position.BYTES_PER_ELEMENT,3*c),m=a.holeIndices.map(h=>h-l),p=new Uint32Array(qe(g,m,3));n.push({position:g,faces:p}),r+=g.length,o+=p.length}const s=sn(n,r,o),i=Ye(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function sn(t,e,n){if(t.length===1)return t[0];const r=new Float64Array(e),o=new Uint32Array(n);let s=0,i=0,a=0;for(const c of t){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(let l=0;l<c.faces.length;l++)o[i++]=c.faces[l]+a;a=s/3}return{position:r,faces:o}}function an(t,e,n){const r=t.length,o=new Array(r),s=new Array(r),i=new Array(r);let a=0,c=0,l=0,g=0;for(let h=0;h<r;++h)g+=t[h].length;const m=new Float64Array(3*g);let p=0;for(let h=r-1;h>=0;h--){const y=t[h],T=n===xt.CCW_IS_HOLE&&ln(y);if(T&&r!==1)o[a++]=y;else{let v=y.length;for(let w=0;w<a;++w)v+=o[w].length;const $={index:p,pathLengths:new Array(a+1),count:v,holeIndices:new Array(a)};$.pathLengths[0]=y.length,y.length>0&&(i[l++]={index:p,count:y.length}),p=T?pt(y,y.length-1,-1,m,p,y.length,e):pt(y,0,1,m,p,y.length,e);for(let w=0;w<a;++w){const A=o[w];$.holeIndices[w]=p,$.pathLengths[w+1]=A.length,A.length>0&&(i[l++]={index:p,count:A.length}),p=pt(A,0,1,m,p,A.length,e)}a=0,$.count>0&&(s[c++]=$)}}for(let h=0;h<a;++h){const y=o[h];y.length>0&&(i[l++]={index:p,count:y.length}),p=pt(y,0,1,m,p,y.length,e)}return c<r&&(s.length=c),l<r&&(i.length=l),{position:m,polygons:s,outlines:i}}function pt(t,e,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=t[e];r[o++]=c[0],r[o++]=c[1],r[o++]=i?c[2]:0,e+=n}return o/3}function ln(t){return!Re(t,!1,!1)}var xt;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(xt||(xt={}));const St=W.getLogger("esri.geometry.support.meshUtils.centerAt");function cn(t,e,n){var r;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const o=(r=n==null?void 0:n.origin)!=null?r:t.origin;f(t.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&St.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),un(t.transform,e,o)):bt(t.spatialReference,n)?pn(t,e,o):hn(t,e,o)}function un(t,e,n){const r=e.x-n.x,o=e.y-n.y,s=e.hasZ&&n.hasZ?e.z-n.z:0,i=t.origin;t.origin=[i[0]+r,i[1]+o,i[2]+s]}function pn(t,e,n){const r=Ge(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:i}=Ze(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}function hn(t,e,n){const r=mn,o=gn;if(_(e,o,t.spatialReference)){if(!_(n,r,t.spatialReference)){const s=t.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,St.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}fn(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else St.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function fn(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]}const gn=M(),mn=M();async function dn(t,e,n){const{loadGLTFMesh:r}=await jt(import("./loadGLTFMesh.4ad9fe58.js"),n),o=await fe(e,n),s=r(new O({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:yn(o),useTransform:!0,signal:f(n)?n.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}function yn(t){const e=Ee(t.url);return n=>{var r;const o=Ce(n,e,e),s=o?o.replace(/^ *\.\//,""):null;return(r=t.files.get(s))!=null?r:n}}async function fe(t,e){return t instanceof Blob?tt.fromBlob(t):typeof t=="string"?new tt(t):Array.isArray(t)?wn(t,e):xn(t,e)}async function wn(t,e){const n=new Map;let r=null;const o=await Oe(t.map(async i=>({name:i.name,source:await fe(i instanceof Blob?i:i.source,e)}))),s=[];for(const i of o)i&&(Ie(e)?i.source.dispose():s.push(i));Le(e);for(const{name:i,source:a}of s)(at(r)||/\.(gltf|glb)/i.test(i))&&(r=a.url),n.set(i,a.url),a.files&&a.files.forEach((c,l)=>n.set(l,c));if(at(r))throw new Ct("mesh-load-external:missing-files","Missing files to load external mesh source");return new tt(r,()=>s.forEach(({source:i})=>i.dispose()),n)}async function xn(t,e){const{default:n}=await jt(import("./index.32114bf6.js").then(function(o){return o.h6}),e),r=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):t.multipart;return tt.fromBlob(new Blob(r))}class tt{constructor(e,n=()=>{},r=new Map){this.url=e,this.dispose=n,this.files=r}static fromBlob(e){const n=URL.createObjectURL(e);return new tt(n,()=>URL.revokeObjectURL(n))}}const vn=W.getLogger("esri.geometry.support.meshUtils.offset");function $n(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&(f(t.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&vn.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),An(t.transform,e)):bt(t.spatialReference,n)?bn(t,e):Mn(t,e))}function An(t,e){const n=t.origin;t.origin=Nt(M(),n,e)}function bn(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=f(o)?new Float32Array(o.length):null,c=f(s)?new Float32Array(s.length):null,l=t.extent.center,g=Fn;ue(n,[l.x,l.y,l.z],Jt,_t(n)),pe(Kt,Jt),dt(g,e,Kt),zt(r,n,i),f(o)&&Ut(o,r,i,n,a),f(s)&&Wt(s,r,i,n,c),ge(i,g),kt(i,r,n),f(o)&&Ht(a,r,i,n,o),f(s)&&Bt(c,r,i,n,s),t.vertexAttributesChanged()}function Mn(t,e){ge(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function ge(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const Fn=M(),Jt=he(),Kt=Gt();function Tn(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=Pn,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let c=0,l=0,g=0,m=0;for(let p=0;p<t.length;p++){const h=t[p],y=c/3;for(const v of e)a[m++]=y+v;const T=h.corners;for(let v=0;v<4;v++){const $=T[v];let w=0;i[g++]=.25*n[v][0]+h.uvOrigin[0],i[g++]=h.uvOrigin[1]-.25*n[v][1];for(let A=0;A<3;A++)h.axis[A]!==0?(o[c++]=.5*h.axis[A],s[l++]=h.axis[A]):(o[c++]=.5*$[w++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function Dn(t,e){const n=t.components[0],r=n.faces,o=Sn[e],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let c=0,l=0;for(let g=0;g<r.length;g++)g>=s&&g<s+6?i[c++]=r[g]:a[l++]=r[g];if(f(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let h=0;h<p.length;h++)g[m+h]=p[h];t.vertexAttributes.uv=g}return t.components=[new Q({faces:i,material:n.material}),new Q({faces:a})],t}function Rn(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,g=0,m=0;for(let p=0;p<=e;p++){const h=p/e*Math.PI+.5*Math.PI,y=Math.cos(h),T=Math.sin(h);x[2]=T;const v=p===0||p===e,$=v?n-1:n;for(let w=0;w<=$;w++){const A=w/$*2*Math.PI;x[0]=-Math.sin(A)*y,x[1]=Math.cos(A)*y;for(let S=0;S<3;S++)o[c]=.5*x[S],s[c]=x[S],++c;i[l++]=(w+(v?.5:0))/n,i[l++]=p/e,p!==0&&w!==n&&(p!==e&&(a[g++]=m,a[g++]=m+1,a[g++]=m-n),p!==1&&(a[g++]=m,a[g++]=m-n,a[g++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function Cn(t=0){const n=Math.round(16*2**t),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let c=0,l=0,g=0,m=0,p=0;for(let h=0;h<=5;h++){const y=h===0||h===5,T=h<=1||h>=5-1,v=h===2||h===4,$=y?n-1:n;for(let w=0;w<=$;w++){const A=w/$*2*Math.PI,S=y?0:.5;x[0]=S*Math.sin(A),x[1]=S*-Math.cos(A),x[2]=h<=2?.5:-.5;for(let k=0;k<3;k++)o[c++]=x[k],s[l++]=T?k===2?h<=1?1:-1:0:k===2?0:x[k]/S;i[g++]=(w+(y?.5:0))/n,i[g++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,v||h===0||w===n||(h!==5&&(a[m++]=p,a[m++]=p+1,a[m++]=p-n),h!==1&&(a[m++]=p,a[m++]=p-n,a[m++]=p-n-1)),p++}}return{position:o,normal:s,uv:i,faces:a}}function En(t,e){const n=typeof e=="number"?e:e!=null?e.width:1,r=typeof e=="number"?e:e!=null?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function On(t){const e=ot.facingAxisOrderSwap[t],n=ot.position,r=ot.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const g=e[l],m=Math.abs(g)-1,p=g>=0?1:-1;o[i]=n[c+m]*p,s[i]=r[c+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(ot.uv),faces:new Uint32Array(ot.faces)}}const B=1,G=2,Z=3,ot={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[Z,B,G],west:[-Z,-B,G],north:[-B,Z,G],south:[B,-Z,G],up:[B,G,Z],down:[B,-G,-Z]}};function ht(t,e,n){In(t),Ln(t,n&&n.size);const{vertexAttributes:r,transform:o}=Ve(t,e,n);return{vertexAttributes:new b(ut(ct({},r),{uv:t.uv})),transform:o,components:[new Q({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function In(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function Ln(t,e){if(e==null)return;const n=typeof e=="number"?[e,e,e]:[e.width!=null?e.width:1,e.depth!=null?e.depth:1,e.height!=null?e.height:1];j[0]=n[0],j[4]=n[1],j[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)x[o]=t.position[r+o];dt(x,x,j);for(let o=0;o<3;o++)t.position[r+o]=x[o]}if(n[0]!==n[1]||n[1]!==n[2]){j[0]=1/n[0],j[4]=1/n[1],j[8]=1/n[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)x[o]=t.normal[r+o];dt(x,x,j),Pe(x,x);for(let o=0;o<3;o++)t.normal[r+o]=x[o]}}}const Pn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Sn={south:0,east:1,north:2,west:3,up:4,down:5},x=M(),j=Gt(),me=W.getLogger("esri.geometry.support.meshUtils.rotate");function jn(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||e[3]===0)return;const r=t.spatialReference;if(f(t.transform)){var o;(n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&me.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const i=(o=n==null?void 0:n.origin)!=null?o:t.transform.getOriginPoint(r);Nn(t.transform,e,i)}else{var s;const i=(s=n==null?void 0:n.origin)!=null?s:t.origin;bt(t.spatialReference,n)?_n(t,e,i):zn(t,e,i)}}function Nn(t,e,n){const r=ae(Y,n.x,n.y,n.z),o=yt(Y,r,t.origin);t.applyLocalInverse(o,Qt),t.rotation=Ot(t.rotation,e,lt()),t.applyLocalInverse(o,o),yt(o,o,Qt),t.translation=Nt(M(),t.translation,o)}function _n(t,e,n){const r=t.spatialReference,o=_t(r),s=de;_(n,s,o)||_(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;ue(o,s,vt,o),pe(ee,vt);const p=te;dt(It(te),It(e),ee),p[3]=e[3],zt(i,r,l),f(a)&&Ut(a,i,l,r,g),f(c)&&Wt(c,i,l,r,m),K(l,p,3,s),kt(l,i,r),f(a)&&(K(g,p,3),Ht(g,i,l,r,a)),f(c)&&(K(m,p,4),Bt(m,i,l,r,c)),t.vertexAttributesChanged()}function zn(t,e,n){const r=de;if(!_(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,me.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}K(t.vertexAttributes.position,e,3,r),K(t.vertexAttributes.normal,e,3),K(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function K(t,e,n,r=le){if(!at(t)){Se(vt,Xe(e),It(e));for(let o=0;o<t.length;o+=n){for(let s=0;s<3;s++)Y[s]=t[o+s]-r[s];je(Y,Y,vt);for(let s=0;s<3;s++)t[o+s]=Y[s]+r[s]}}}const Y=M(),Qt=M(),te=lt(),vt=he(),ee=Gt(),de=M(),ye=W.getLogger("esri.geometry.support.meshUtils.scale");function Un(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(f(t.transform)){var o;(n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&ye.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=(o=n==null?void 0:n.origin)!=null?o:t.transform.getOriginPoint(r);Wn(t.transform,e,s)}else{const s=bt(t.spatialReference,n),i=n&&n.origin||t.origin;s?kn(t,e,i):Hn(t,e,i)}}function Wn(t,e,n){const r=ae(J,n.x,n.y,n.z),o=yt(J,r,t.origin);t.applyLocalInverse(o,ne);const s=ce(M(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),yt(o,o,ne),t.translation=Nt(M(),t.translation,o)}function kn(t,e,n){const r=t.spatialReference,o=_t(r),s=xe;_(n,s,o)||_(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(c)?new Float32Array(c.length):null;zt(i,r,l),f(a)&&Ut(a,i,l,r,g),f(c)&&Wt(c,i,l,r,m),we(l,e,s),kt(l,i,r),f(a)&&Ht(g,i,l,r,a),f(c)&&Bt(m,i,l,r,c),t.vertexAttributesChanged()}function Hn(t,e,n){const r=xe;if(!_(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ye.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}we(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}function we(t,e,n=le){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)J[o]=t[r+o]-n[o];ce(J,J,e);for(let o=0;o<3;o++)t[r+o]=J[o]+n[o]}}const J=M(),ne=M(),xe=M();var R;const D=W.getLogger("esri.geometry.Mesh");let F=R=class extends Ne(_e.LoadableMixin(ze(Ue))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new b,this.type="mesh"}initialize(){(at(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(We(()=>{var t;return{vertexAttributes:this.vertexAttributes,components:(t=this.components)==null?void 0:t.map(e=>e.clone()),transform:f(this.transform)?this.transform.clone():null}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&f(this.external)&&f(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Et({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new O({x:0,y:0,z:0,spatialReference:e})};const n=f(this.transform)?this.transform.project(t,e):t;let r=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,c=-1/0,l=0,g=0,m=0;const p=n.length,h=1/(p/3);let y=0;for(;y<p;){const T=n[y++],v=n[y++],$=n[y++];r=Math.min(r,T),o=Math.min(o,v),s=Math.min(s,$),i=Math.max(i,T),a=Math.max(a,v),c=Math.max(c,$),l+=h*T,g+=h*v,m+=h*$}return{extent:new Et({xmin:r,ymin:o,zmin:s,xmax:i,ymax:a,zmax:c,spatialReference:e}),center:new O({x:l,y:g,z:m,spatialReference:e})}}get anchor(){if(f(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new O({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return f(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&f(this.external)&&f(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(Q.from(t)),this.notifyChange("components")):D.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(e!==-1)return this.components.splice(e,1),void this.notifyChange("components")}D.error("removeComponent()","Provided component is not part of the list of components")}else D.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return gt(Dt.x,t,V),gt(Dt.y,e,re),gt(Dt.z,n,oe),Ot(V,re,V),Ot(V,oe,V),jn(this,V,r),this}offset(t,e,n,r){return this.loaded?(ft[0]=t,ft[1]=e,ft[2]=n,$n(this,ft,r),this):(D.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(Un(this,t,e),this):(D.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(cn(this,t,e),this):(D.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return f(this.external)&&this.addResolvingPromise(dn(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map(r=>r.cloneWithDeduplication(t,e)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:f(this.transform)?this.transform.clone():null,external:f(this.external)?{source:this.external.source,extent:f(this.external.extent)?this.external.extent.clone():null}:null};return new R(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await import("./gltfexport.d837ae5f.js");return e(this,t)}static createBox(t,e){if(!(t instanceof O))return D.error(".createBox()","expected location to be a Point instance"),null;const n=new R(ht(Tn(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?Dn(n,e.imageFace):n}static createSphere(t,e){return t instanceof O?new R(ht(Rn(e&&e.densificationFactor||0),t,e)):(D.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof O?new R(ht(Cn(e&&e.densificationFactor||0),t,e)):(D.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){var n;if(!(t instanceof O))return D.error(".createPlane()","expected location to be a Point instance"),null;const r=(n=e==null?void 0:e.facing)!=null?n:"up",o=En(r,e==null?void 0:e.size);return new R(ht(On(r),t,ut(ct({},e),{size:o})))}static createFromPolygon(t,e){if(!(t instanceof ke))return D.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=on(t);return new R({vertexAttributes:new b({position:n.position}),components:[new Q({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof O))throw D.error(".createfromGLTF()","expected location to be a Point instance"),new Ct("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await jt(import("./loadGLTFMesh.4ad9fe58.js"),n);return new R(await r(t,e,n))}static createWithExternalSource(t,e,n){var r,o,s;const i=(r=n==null?void 0:n.extent)!=null?r:null,a=(o=n==null?void 0:n.transform.clone())!=null?o:new wt;a.origin=[t.x,t.y,(s=t.z)!=null?s:0];const c=t.spatialReference;return new R({external:{source:e,extent:i},transform:a,spatialReference:c})}static createIncomplete(t,e){var n,r;const o=(n=e==null?void 0:e.transform.clone())!=null?n:new wt;o.origin=[t.x,t.y,(r=t.z)!=null?r:0];const s=t.spatialReference,i=new R({transform:o,spatialReference:s});return i.addResolvingPromise(Promise.reject(new Ct("mesh-incomplete","Mesh resources are not complete"))),i}};u([d({type:[Q],json:{write:!0}})],F.prototype,"components",void 0),u([d({type:wt,json:{write:!0}})],F.prototype,"transform",void 0),u([d({constructOnly:!0})],F.prototype,"external",void 0),u([d({readOnly:!0})],F.prototype,"hasExtent",null),u([d({readOnly:!0})],F.prototype,"boundingInfo",null),u([d({readOnly:!0})],F.prototype,"anchor",null),u([d({readOnly:!0})],F.prototype,"origin",null),u([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),u([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),u([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),u([d({type:b,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=R=u([et("esri.geometry.Mesh")],F);const Dt={x:Mt(1,0,0),y:Mt(0,1,0),z:Mt(0,0,1)},V=lt(),re=lt(),oe=lt(),ft=M(),se=F;var U,$t;(function(t){t.featureGUID="featureGUID",t.assetName="assetName",t.hash="hash",t.type="type",t.conversionStatus="conversionStatus",t.flags="flags",t.complexity="complexity",t.size="size",t.seqNo="seqNo",t.sourceHash="sourceHash",t.assetURL="assetURL"})(U||(U={})),function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}($t||($t={}));function Bn(t,e,n){const r=n.features;n.features=[],delete n.geometryType;const o=He.fromJSON(n);o.geometryType="mesh";const s=o.spatialReference,i=at(t.outFields)||!t.outFields.length?()=>({}):Gn(t.outFields.includes("*")?null:new Set(t.outFields));for(const a of r){const c=Zn(a,s,e);f(c)&&o.features.push(new Be({geometry:c,attributes:i(a)}))}return o}function Gn(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}function Zn(t,e,n){const{status:r,source:o}=qn(t);if(r===N.FAILED)return null;const s=Vn(t,e,n),i=Et.fromJSON(t.geometry);i.spatialReference=e;const a=Xn(t,n);return r===N.PENDING?se.createIncomplete(s,{extent:i,transform:a}):se.createWithExternalSource(s,o,{extent:i,transform:a})}function Vn({attributes:t},e,{transformFieldRoles:n}){return new O({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function Xn({attributes:t,assetMappings:e},{transformFieldRoles:n}){var r;return new wt({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:gt([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!((r=e[U.flags])!=null&&r.includes("PROJECT_VERTICES"))})}function qn(t){if(!t.assetMappings)return{status:N.FAILED};const e=[],n=new Map;for(const r of t.assetMappings){const o=r[U.seqNo],s=r[U.assetName],i=r[U.assetURL],a=r[U.conversionStatus];if(a===$t.FAILED)return{status:N.FAILED};if(a!==$t.COMPLETED)return{status:N.PENDING};if(o==null)e.push({name:s,source:i});else{const c=n.get(s);let l;c?l=c.multipart:(l=[],e.push({name:s,source:{multipart:l}}),n.set(s,{multipart:l})),l[o]=i}}return{status:N.COMPLETED,source:e}}var N;(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(N||(N={}));var or=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Bn},Symbol.toStringTag,{value:"Module"}));export{or as a,en as c,Q as f,it as m,b as p};
