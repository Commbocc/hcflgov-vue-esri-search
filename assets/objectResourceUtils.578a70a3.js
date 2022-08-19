var yo=Object.defineProperty,Mo=Object.defineProperties;var Oo=Object.getOwnPropertyDescriptors;var wi=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable;var Pi=(t,e,i)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,q=(t,e)=>{for(var i in e||(e={}))wo.call(e,i)&&Pi(t,i,e[i]);if(wi)for(var i of wi(e))Po.call(e,i)&&Pi(t,i,e[i]);return t},vt=(t,e)=>Mo(t,Oo(e));import{a as No}from"./devEnvironmentUtils.f51567b1.js";import{C as hr,bl as mr,cs as H,dm as vi,dy as Do,gR as si,gS as Fo,e2 as Lo,t as j,aQ as Io,f as Ue,en as Ut,r as g,gM as Ni,gT as Di,gU as Bo,gV as li,ab as $o,fP as Fi,gE as zo,eo as gt,gN as xt,aU as Li,gW as Uo,ag as Go,bp as Ho,di as Ii,y as fr,s as pr,cQ as Vo,ba as qe,aK as ko,gX as Wo,cW as qo,ct as Xo,da as ct,gY as jo,gZ as Yo,dd as ci,d6 as qt,d5 as dt,eE as et,dc as gi,dg as ne,de as vr,gL as Me,dF as Ko,db as Et,eD as Zo,ds as ot,dh as Qo,g_ as Jo,g$ as Bi,h0 as gr,dq as xr,eC as Jt,J as ea,h1 as ta,E as P,dA as ia,h2 as Gt,aZ as _r,a4 as ra,bb as br,h3 as $i,h4 as Tr,c3 as oa,dr as aa,h5 as zi}from"./index.6518a001.js";import{e as Ar,a as na,j as Ui,f as sa,r as Gi,c as la}from"./vec33.1f2758cf.js";import{a as Er}from"./quat.487a46ad.js";import{c as di,x as Ot,u as Cr,i as at,L as ca,O as Hi,E as da}from"./BufferView.1cfc0321.js";import{l as Vi,u as ua,m as ha,s as ma,p as tt,q as fa,c as pa,n as va,o as rt,r as Ke,a as ga,b as xa,f as ki,e as _a,t as ba,i as Ta,h as Aa,j as Ea}from"./DefaultMaterial_COLOR_GAMMA.25b70e59.js";import{r as Sr}from"./Version.3fb1acf7.js";import"./vec2.e6551521.js";import{n as Ca,r as Xt}from"./vec4f64.a3e91e77.js";import{O as p}from"./VertexAttribute.ebaf629c.js";import{A as Q,t as k,U as b,B as re,P as W,L as ye,C as J,f as $e,F as Ht,u as _e,V as Y,G as wt,o as Wi,n as Xe,M as oe,Y as At,D as Ie,E as Ct,N as Rr,S as yr,T as ui,R as Be,I as be,O as le}from"./enums.8acce53f.js";import{u as ee,s as Ft,a as hi,c as Mr,n as Sa}from"./Texture.f22f3452.js";import{t as pe}from"./VertexElementDescriptor.0406f2d4.js";import{o as De}from"./context-util.277a52bf.js";import{T as Or}from"./InterleavedLayout.413c8733.js";import{A as ei,E as Lt}from"./RenderSlot.f9644924.js";import{t as Ra}from"./vec3f32.8179e08f.js";async function wr(t,e){const{data:i}=await hr(t,q({responseType:"image"},e));return i}var ue,it,qi,ce,Xi,Pt,Te,ji,Yi,nt,St,Ki,X,Zi;(function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"})(ue||(ue={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(it||(it={})),function(t){t[t.NONE=0]="NONE",t[t.SMAA=1]="SMAA"}(qi||(qi={})),function(t){t[t.Color=0]="Color",t[t.Alpha=1]="Alpha",t[t.FrontFace=2]="FrontFace",t[t.NONE=3]="NONE",t[t.COUNT=4]="COUNT"}(ce||(ce={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(Xi||(Xi={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(Pt||(Pt={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(Te||(Te={})),function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"}(ji||(ji={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(Yi||(Yi={})),function(t){t[t.Triangle=0]="Triangle",t[t.Point=1]="Point",t[t.Line=2]="Line"}(nt||(nt={})),function(t){t[t.STRETCH=1]="STRETCH",t[t.PAD=2]="PAD"}(St||(St={})),function(t){t[t.CHANGED=0]="CHANGED",t[t.UNCHANGED=1]="UNCHANGED"}(Ki||(Ki={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(X||(X={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(Zi||(Zi={}));class ya{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function ae(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new ya(e)}class xi{constructor(e,i,r,o){this.primitiveIndices=e,this._numIndexPerPrimitive=i,this.indices=r,this.position=o,this.center=H(),ae(e.length>=1),ae(r.length%this._numIndexPerPrimitive==0),ae(r.length>=e.length*this._numIndexPerPrimitive),ae(o.size===3||o.size===4);const{data:a,size:n}=o,s=e.length;let c=n*r[this._numIndexPerPrimitive*e[0]];je.clear(),je.push(c),this.bbMin=vi(a[c],a[c+1],a[c+2]),this.bbMax=Do(this.bbMin);for(let u=0;u<s;++u){const f=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){c=n*r[f+m],je.push(c);let x=a[c];this.bbMin[0]=Math.min(x,this.bbMin[0]),this.bbMax[0]=Math.max(x,this.bbMax[0]),x=a[c+1],this.bbMin[1]=Math.min(x,this.bbMin[1]),this.bbMax[1]=Math.max(x,this.bbMax[1]),x=a[c+2],this.bbMin[2]=Math.min(x,this.bbMin[2]),this.bbMax[2]=Math.max(x,this.bbMax[2])}}si(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let u=0;u<je.length;++u){c=je.getItemAt(u);const f=a[c]-this.center[0],m=a[c+1]-this.center[1],x=a[c+2]-this.center[2],h=f*f+m*m+x*x;if(h<=l)continue;const T=Math.sqrt(h),E=.5*(T-this.radius);this.radius=this.radius+E,l=this.radius*this.radius;const A=E/T;this.center[0]+=f*A,this.center[1]+=m*A,this.center[2]+=x*A}je.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Fo(this.bbMin,this.bbMax)>1){const e=si(H(),this.bbMin,this.bbMax,.5),i=this.primitiveIndices.length,r=new Uint8Array(i),o=new Array(8);for(let l=0;l<8;++l)o[l]=0;const{data:a,size:n}=this.position;for(let l=0;l<i;++l){let u=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[l];let m=n*this.indices[f],x=a[m],h=a[m+1],T=a[m+2];for(let E=1;E<this._numIndexPerPrimitive;++E){m=n*this.indices[f+E];const A=a[m],G=a[m+1],M=a[m+2];A<x&&(x=A),G<h&&(h=G),M<T&&(T=M)}x<e[0]&&(u|=1),h<e[1]&&(u|=2),T<e[2]&&(u|=4),r[l]=u,++o[u]}let s=0;for(let l=0;l<8;++l)o[l]>0&&++s;if(s<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=o[l]>0?new Uint32Array(o[l]):void 0;for(let l=0;l<8;++l)o[l]=0;for(let l=0;l<i;++l){const u=r[l];c[u][o[u]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)c[l]!==void 0&&(this._children[l]=new xi(c[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){je.prune()}}const je=new mr({deallocator:null});class _i{constructor(){this.id=Lo()}unload(){}}var Nt;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(Nt||(Nt={}));class jt extends _i{constructor(e,i=[],r=nt.Triangle,o=-1){super(),this._primitiveType=r,this.edgeIndicesLength=o,this.type=Nt.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[a,n]of e)n&&this._vertexAttributes.set(a,q({},n));if(i==null||i.length===0){const a=Ma(this._vertexAttributes),n=Vi(a);this.edgeIndicesLength=this.edgeIndicesLength<0?a:this.edgeIndicesLength;for(const s of this._vertexAttributes.keys())this._indices.set(s,n)}else for(const[a,n]of i)n&&(this._indices.set(a,Oa(n)),a===p.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(a).length:this.edgeIndicesLength))}cloneShallow(){const e=new jt([],void 0,this._primitiveType,void 0),{_vertexAttributes:i,_indices:r}=e;return this._vertexAttributes.forEach((o,a)=>{i.set(a,o)}),this._indices.forEach((o,a)=>{r.set(a,o)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const i=this._vertexAttributes.get(e);return i&&!i.exclusive&&(i.data=Array.from(i.data),i.exclusive=!0),i}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return j(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===nt.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const i=this.indices.get(p.POSITION),r=this.vertexAttributes.get(p.POSITION);return ua(r,i,e)}_computeAttachmentOriginPoints(e){const i=this.indices.get(p.POSITION),r=this.vertexAttributes.get(p.POSITION);return ha(r,i,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(p.POSITION);if(e.length===0)return null;const i=this.primitiveType===nt.Triangle?3:1;ae(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const r=Vi(e.length/i),o=this.vertexAttributes.get(p.POSITION);return new xi(r,i,e,o)}}function Ma(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function Oa(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function wa(){if(j(ti)){const t=e=>Io(`esri/libs/basisu/${e}`);ti=import("./basis_transcoder.7c1fff7f.js").then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(i=>(i.initializeBasis(),delete i.then,i)))}return ti}let ti;var Ze;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ze||(Ze={}));function Pa(t,e){return t.vertexBuffers[e].size/Na(t.layout[e])}function Na(t){return t[0].stride}function Da(t,e,i,r,o=0){const a=t.gl,n=t.capabilities.instancing;t.bindBuffer(i);for(const s of r){const c=e.get(s.name);c===void 0&&console.error(`There is no location for vertex attribute '${s.name}' defined.`);const l=o*s.stride;if(s.count<=4)a.vertexAttribPointer(c,s.count,s.type,s.normalized,s.stride,s.offset+l),a.enableVertexAttribArray(c),s.divisor>0&&n&&n.vertexAttribDivisor(c,s.divisor);else if(s.count===9)for(let u=0;u<3;u++)a.vertexAttribPointer(c+u,3,s.type,s.normalized,s.stride,s.offset+12*u+l),a.enableVertexAttribArray(c+u),s.divisor>0&&n&&n.vertexAttribDivisor(c+u,s.divisor);else if(s.count===16)for(let u=0;u<4;u++)a.vertexAttribPointer(c+u,4,s.type,s.normalized,s.stride,s.offset+16*u+l),a.enableVertexAttribArray(c+u),s.divisor>0&&n&&n.vertexAttribDivisor(c+u,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count)}}function Fa(t,e,i,r){const o=t.gl,a=t.capabilities.instancing;t.bindBuffer(i);for(const n of r){const s=e.get(n.name);if(n.count<=4)o.disableVertexAttribArray(s),n.divisor&&n.divisor>0&&a&&a.vertexAttribDivisor(s,0);else if(n.count===9)for(let c=0;c<3;c++)o.disableVertexAttribArray(s+c),n.divisor&&n.divisor>0&&a&&a.vertexAttribDivisor(s+c,0);else if(n.count===16)for(let c=0;c<4;c++)o.disableVertexAttribArray(s+c),n.divisor&&n.divisor>0&&a&&a.vertexAttribDivisor(s+c,0);else console.error("Unsupported vertex attribute element count: "+n.count)}t.unbindBuffer(Q.ARRAY_BUFFER)}function Pr(t){switch(t){case W.ALPHA:case W.LUMINANCE:case W.RED:case W.RED_INTEGER:case b.R8:case b.R8I:case b.R8UI:case b.R8_SNORM:case re.STENCIL_INDEX8:return 1;case W.LUMINANCE_ALPHA:case W.RG:case W.RG_INTEGER:case b.RGBA4:case b.R16F:case b.R16I:case b.R16UI:case b.RG8:case b.RG8I:case b.RG8UI:case b.RG8_SNORM:case b.RGB565:case b.RGB5_A1:case re.DEPTH_COMPONENT16:return 2;case W.DEPTH_COMPONENT:case W.RGB:case W.RGB_INTEGER:case b.RGB8:case b.RGB8I:case b.RGB8UI:case b.RGB8_SNORM:case b.SRGB8:case re.DEPTH_COMPONENT24:return 3;case W.DEPTH_STENCIL:case W.RGBA:case W.RGBA_INTEGER:case b.RGBA8:case b.R32F:case b.R11F_G11F_B10F:case b.RG16F:case b.R32I:case b.R32UI:case b.RG16I:case b.RG16UI:case b.RGBA8I:case b.RGBA8UI:case b.RGBA8_SNORM:case b.SRGB8_ALPHA8:case b.RGB9_E5:case b.RGB10_A2UI:case b.RGB10_A2:case re.DEPTH_STENCIL:case re.DEPTH_COMPONENT32F:case re.DEPTH24_STENCIL8:return 4;case re.DEPTH32F_STENCIL8:return 5;case b.RGB16F:case b.RGB16I:case b.RGB16UI:return 6;case b.RG32F:case b.RG32I:case b.RG32UI:case b.RGBA16F:case b.RGBA16I:case b.RGBA16UI:return 8;case b.RGB32F:case b.RGB32I:case b.RGB32UI:return 12;case b.RGBA32F:case b.RGBA32I:case b.RGBA32UI:return 16;case k.COMPRESSED_RGB_S3TC_DXT1_EXT:case k.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case k.COMPRESSED_RGBA_S3TC_DXT3_EXT:case k.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case k.COMPRESSED_R11_EAC:case k.COMPRESSED_SIGNED_R11_EAC:case k.COMPRESSED_RGB8_ETC2:case k.COMPRESSED_SRGB8_ETC2:case k.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case k.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case k.COMPRESSED_RG11_EAC:case k.COMPRESSED_SIGNED_RG11_EAC:case k.COMPRESSED_RGBA8_ETC2_EAC:case k.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function mi(t){if(j(t))return 0;if("descriptor"in t)return t.glName?mi(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const i="hasMipmap"in t&&t.hasMipmap?1.3:1,r=t.width*t.height;return Pr(e)*r*i}let ve=null,It=null;async function Nr(){return j(It)&&(It=wa(),ve=await It),It}function La(t,e){if(j(ve))return t.byteLength;const i=new ve.BasisFile(new Uint8Array(t)),r=Fr(i)?Dr(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),e):0;return i.close(),i.delete(),r}function Ia(t,e){if(j(ve))return t.byteLength;const i=new ve.KTX2File(new Uint8Array(t)),r=Lr(i)?Dr(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),e):0;return i.close(),i.delete(),r}function Dr(t,e,i,r,o){const a=Pr(e?k.COMPRESSED_RGBA8_ETC2_EAC:k.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(i*r*a*n)}function Fr(t){return t.getNumImages()>=1&&!t.isUASTC()}function Lr(t){return t.getFaces()>=1&&t.isETC1S()}async function Ba(t,e,i){j(ve)&&(ve=await Nr());const r=new ve.BasisFile(new Uint8Array(i));if(!Fr(r))return null;r.startTranscoding();const o=Ir(t,e,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),(a,n)=>r.getImageTranscodedSizeInBytes(0,a,n),(a,n,s)=>r.transcodeImage(s,0,a,n,0,0));return r.close(),r.delete(),o}async function $a(t,e,i){j(ve)&&(ve=await Nr());const r=new ve.KTX2File(new Uint8Array(i));if(!Lr(r))return null;r.startTranscoding();const o=Ir(t,e,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),(a,n)=>r.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,s)=>r.transcodeImage(s,a,0,0,n,0,-1,-1));return r.close(),r.delete(),o}function Ir(t,e,i,r,o,a,n,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[u,f]=c?r?[Ze.ETC2_RGBA,k.COMPRESSED_RGBA8_ETC2_EAC]:[Ze.ETC1_RGB,k.COMPRESSED_RGB8_ETC2]:l?r?[Ze.BC3_RGBA,k.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ze.BC1_RGB,k.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ze.RGBA32,W.RGBA],m=e.hasMipmap?i:Math.min(1,i),x=[];for(let A=0;A<m;A++)x.push(new Uint8Array(n(A,u))),s(A,u,x[A]);const h=x.length>1,T=h?ye.LINEAR_MIPMAP_LINEAR:ye.LINEAR,E=vt(q({},e),{samplingMode:T,hasMipmap:h,internalFormat:f,width:o,height:a});return new ee(t,E,{type:"compressed",levels:x})}const _t=Ue.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),za=542327876,Ua=131072,Ga=4;function bi(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Ha(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const Va=bi("DXT1"),ka=bi("DXT3"),Wa=bi("DXT5"),qa=31,Xa=0,ja=1,Ya=2,Ka=3,Za=4,Qa=7,Ja=20,en=21;function tn(t,e,i){const{textureData:r,internalFormat:o,width:a,height:n}=rn(i,e.hasMipmap);return e.samplingMode=r.levels.length>1?ye.LINEAR_MIPMAP_LINEAR:ye.LINEAR,e.hasMipmap=r.levels.length>1,e.internalFormat=o,e.width=a,e.height=n,new ee(t,e,r)}function rn(t,e){const i=new Int32Array(t,0,qa);if(i[Xa]!==za)return _t.error("Invalid magic number in DDS header"),null;if(!(i[Ja]&Ga))return _t.error("Unsupported format, must contain a FourCC code"),null;const r=i[en];let o,a;switch(r){case Va:o=8,a=k.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ka:o=16,a=k.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Wa:o=16,a=k.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return _t.error("Unsupported FourCC code:",Ha(r)),null}let n=1,s=i[Za],c=i[Ka];(3&s)==0&&(3&c)==0||(_t.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let f,m;i[Ya]&Ua&&e!==!1&&(n=Math.max(1,i[Qa])),n===1||Ut(s)&&Ut(c)||(_t.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let x=i[ja]+4;const h=[];for(let T=0;T<n;++T)m=(s+3>>2)*(c+3>>2)*o,f=new Uint8Array(t,x,m),h.push(f),x+=m,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:l,height:u}}const Yt=new Map([[p.POSITION,0],[p.NORMAL,1],[p.UV0,2],[p.COLOR,3],[p.SIZE,4],[p.TANGENT,4],[p.AUXPOS1,5],[p.SYMBOLCOLOR,5],[p.AUXPOS2,6],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.MODEL,8],[p.MODELNORMAL,12],[p.MODELORIGINHI,11],[p.MODELORIGINLO,15]]);new pe(p.POSITION,3,J.FLOAT,0,12);new pe(p.POSITION,3,J.FLOAT,0,20),new pe(p.UV0,2,J.FLOAT,12,20);new pe(p.POSITION,3,J.FLOAT,0,32),new pe(p.NORMAL,3,J.FLOAT,12,32),new pe(p.UV0,2,J.FLOAT,24,32);new pe(p.POSITION,3,J.FLOAT,0,16),new pe(p.COLOR,4,J.UNSIGNED_BYTE,12,16);const on=[new pe(p.POSITION,2,J.FLOAT,0,8)],an=[new pe(p.POSITION,2,J.FLOAT,0,16),new pe(p.UV0,2,J.FLOAT,8,16)],ie=Ue.getLogger("esri.views.webgl.BufferObject");function nn(t){return Bo(t)}class Fe{constructor(e,i,r,o){this._context=e,this.bufferType=i,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment($e.Buffer,this),this._glName=this._context.gl.createBuffer(),Ft(this._context.gl),o&&this.setData(o)}static createIndex(e,i,r){return new Fe(e,Q.ELEMENT_ARRAY_BUFFER,i,r)}static createVertex(e,i,r){return new Fe(e,Q.ARRAY_BUFFER,i,r)}static createUniform(e,i,r){if(e.type!==De.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new Fe(e,Q.UNIFORM_BUFFER,i,r)}static createPixelPack(e,i=Ht.STREAM_READ,r){if(e.type!==De.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const o=new Fe(e,Q.PIXEL_PACK_BUFFER,i);return r&&o.setSize(r),o}static createPixelUnpack(e,i=Ht.STREAM_DRAW,r){if(e.type!==De.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new Fe(e,Q.PIXEL_UNPACK_BUFFER,i,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===Q.ELEMENT_ARRAY_BUFFER?this._indexType===J.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===Q.ELEMENT_ARRAY_BUFFER||this.bufferType===Q.ARRAY_BUFFER}dispose(){var e;(e=this._context)!=null&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement($e.Buffer,this),this._context=null):this._glName&&ie.warn("Leaked WebGL buffer object")}setSize(e,i=null){if(e<=0&&ie.error("Buffer size needs to be positive!"),this.bufferType===Q.ELEMENT_ARRAY_BUFFER&&g(i))switch(this._indexType=i,i){case J.UNSIGNED_SHORT:e*=2;break;case J.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let i=e.byteLength;this.bufferType===Q.ELEMENT_ARRAY_BUFFER&&(Ni(e)&&(i/=2,this._indexType=J.UNSIGNED_SHORT),Di(e)&&(i/=4,this._indexType=J.UNSIGNED_INT)),this._setBufferData(i,e)}_setBufferData(e,i=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const o=this._context.gl;g(i)?o.bufferData(this.bufferType,i,this.usage):o.bufferData(this.bufferType,e,this.usage),Ft(o),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,i=0,r=0,o=e.byteLength){if(!e)return;(i<0||i>=this._size)&&ie.error("offset is out of range!");let a=i,n=r,s=o,c=e.byteLength;this.bufferType===Q.ELEMENT_ARRAY_BUFFER&&(Ni(e)?(c/=2,a*=2,n*=2,s*=2):Di(e)&&(c/=4,a*=4,n*=4,s*=4)),o===void 0&&(o=c-1),r>=o&&ie.error("end must be bigger than start!"),i+r-o>this._size&&ie.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,f=ArrayBuffer.isView(e)?e.buffer:e,m=n===0&&s===e.byteLength?f:f.slice(n,s);u.bufferSubData(this.bufferType,a,m),Ft(u),this._isVAOAware&&this._context.bindVAO(l)}setSubDataFromView(e,i,r,o){if(!e)return;(i<0||i>=this._size)&&ie.error("offset is out of range!"),r>=o&&ie.error("end must be bigger than start!"),i+r-o>this._size&&ie.error("An attempt to write beyond the end of the buffer!");const a=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===De.WEBGL2)n.bufferSubData(this.bufferType,i*e.BYTES_PER_ELEMENT,e,r,o-r);else{const s=r===0&&o===e.length?e:e.subarray(r,o);n.bufferSubData(this.bufferType,i*e.BYTES_PER_ELEMENT,s)}Ft(n),this._isVAOAware&&this._context.bindVAO(a)}getSubData(e,i=0,r,o){if(this._context.type!==De.WEBGL2)return void ie.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||o<0)return void ie.error("Problem getting subdata: offset and length were less than zero!");const a=nn(e)?e.BYTES_PER_ELEMENT:1;if(a*((r!=null?r:0)+(o!=null?o:0))>e.byteLength)return void ie.error("Problem getting subdata: offset and length exceeded destination size!");i+a*(o!=null?o:0)>this.byteSize&&ie.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,Q.COPY_READ_BUFFER),n.getBufferSubData(Q.COPY_READ_BUFFER,i,e,r,o),this._context.unbindBuffer(Q.COPY_READ_BUFFER)}async getSubDataAsync(e,i=0,r,o){this._context.type===De.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,i,r,o)):ie.error("Get buffer subdata is supported in WebGL2 only!")}}const Ye=Ue.getLogger("esri.views.webgl.VertexArrayObject");class sn{constructor(e,i,r,o,a=null){this._context=e,this._locations=i,this._layout=r,this._buffers=o,this._indexBuffer=a,this._glName=null,this._initialized=!1,e.instanceCounter.increment($e.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,i)=>e+this._buffers[i].size,g(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return void((this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&Ye.warn("Leaked WebGL VAO"));if(this._glName){var i,r;const o=(i=this._context)==null||(r=i.capabilities)==null?void 0:r.vao;o?(o.deleteVertexArray(this._glName),this._glName=null):Ye.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const o in this._buffers)this._buffers[o].dispose(),delete this._buffers[o];this._indexBuffer=li(this._indexBuffer)}this._context.instanceCounter.decrement($e.VAO,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const i=e.createVertexArray();e.bindVertexArray(i),this._bindLayout(),e.bindVertexArray(null),this._glName=i}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:i,_indexBuffer:r}=this;e||Ye.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const a in e){const n=e[a];n||Ye.error("Vertex buffer is uninitialized!");const s=i[a];s||Ye.error("Vertex element descriptor is empty!"),Da(this._context,this._locations,n,s)}g(r)&&(this._context.capabilities.vao?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:i}=this;e||Ye.error("Vertex buffer dictionary is empty!");for(const r in e){const o=e[r];o||Ye.error("Vertex buffer is uninitialized!");const a=i[r];Fa(this._context,this._locations,o,a)}g(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}function ln(t,e=on,i=Yt,r=-1,o=1){let a=null;return e===an?a=new Float32Array([r,r,0,0,o,r,1,0,r,o,0,1,o,o,1,1]):a=new Float32Array([r,r,o,r,r,o,o,o]),new sn(t,i,{geometry:e},{geometry:Fe.createVertex(t,Ht.STATIC_DRAW,a)})}class bt{constructor(e,i){this._context=e,this._desc=i,this.type="renderbuffer",this._context.instanceCounter.increment($e.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:a,internalFormat:n,multisampled:s}=i;if(s){if(this._context.type!==De.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n,o,a)}else r.renderbufferStorage(r.RENDERBUFFER,n,o,a)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,i=this._context.parameters.maxSamples;return e?Math.min(e,i):i}resize(e,i){const r=this._desc;if(r.width===e&&r.height===i)return;r.width=e,r.height=i;const o=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?o.renderbufferStorageMultisample(o.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):o.renderbufferStorage(o.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement($e.Renderbuffer,this),this._context=null)}}const cn=Ue.getLogger("esri.views.webgl.FrameBufferObject");class Le{constructor(e,i,r=null,o=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=q({},i),e.instanceCounter.increment($e.Framebuffer,this),g(r)){Array.isArray(r)||(r=[r]);for(let n=0;n<r.length;++n){const s=r[n],c=_e.COLOR_ATTACHMENT0+n;let l;Ji(s)?(Se(s)?(l=s.descriptor,this._colorAttachments.set(c,s)):(l=s,this._colorAttachments.set(c,new ee(this._context,l))),Bt(l,this._desc)):(Qi(s)?(l=s.descriptor,this._colorAttachments.set(c,s)):(l=s,this._colorAttachments.set(c,new bt(this._context,l))),ii(l,this._desc)),this._validateColorAttachmentPoint(c)}}if(g(o)){let n,s;if(Ji(o))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),Se(o)?(s=o.descriptor,this._depthStencilTexture=o):(s=o,this._depthStencilTexture=new ee(this._context,s)),Bt(s,this._desc);else{var a;Qi(o)?(s=o.descriptor,n=o):(s=o,n=new bt(this._context,s));const c=(a=this._desc.depthStencilTarget)!=null?a:Y.DEPTH_STENCIL_RENDER_BUFFER;c===Y.STENCIL_RENDER_BUFFER?this._stencilAttachment=n:c===Y.DEPTH_RENDER_BUFFER||c===Y.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=n:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),ii(s,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement($e.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(_e.COLOR_ATTACHMENT0);return e&&Se(e)?e:null}get colorAttachment(){return this._colorAttachments.get(_e.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((e,[i,r])=>e+mi(r),0)+mi(this.depthStencilAttachment)}getColorTexture(e){const i=this._colorAttachments.get(e);return i&&Se(i)?i:null}attachColorTexture(e,i=_e.COLOR_ATTACHMENT0){!e||(this._validateColorAttachmentPoint(i),Bt(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,i)),this._colorAttachments.set(i,e))}detachColorTexture(e=_e.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);if(Se(i)){const r=i;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),r}}setColorTextureTarget(e,i=_e.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(i);Se(r)&&this._framebufferTexture2D(r.glName,i,e)}attachDepthStencilTexture(e){if(j(e))return;const i=e.descriptor;i.pixelFormat!==W.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),i.dataType!==wt.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),Bt(i,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==Y.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=Y.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,Wi)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,Wi)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(j(e))return;const i=e.descriptor;if(i.internalFormat!==re.DEPTH_STENCIL&&i.internalFormat!==re.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),ii(i,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=i.internalFormat===re.DEPTH_STENCIL?Y.DEPTH_STENCIL_RENDER_BUFFER:Y.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,o=this._desc.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?r.DEPTH_ATTACHMENT:r.DEPTH_STENCIL_ATTACHMENT;r.framebufferRenderbuffer(Xe.FRAMEBUFFER,o,r.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,i=this._depthAttachment;if(i&&this._initialized){this._context.bindFramebuffer(this);const r=this._desc.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Xe.FRAMEBUFFER,r,e.RENDERBUFFER,null)}return this._depthAttachment=null,i}detachAll(){this._colorAttachments.forEach((e,i)=>this._detachColorAttachment(i)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,i,r,o,a,n,s){(e<0||i<0||a<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||o<=0)&&console.error("Copy width and height must be greater than zero!");const c=this._desc,l=s.descriptor;s.descriptor.target!==oe.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(e+r>c.width||i+o>c.height||a+r>l.width||n+o>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,f=u.bindTexture(s,ee.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(ee.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(oe.TEXTURE_2D,0,a,n,e,i,r,o),u.bindTexture(f,ee.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,i,r,o,a,n,s){(r<=0||o<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,i,r,o,a,n,s)}async readPixelsAsync(e,i,r,o,a,n,s){if(this._context.type!==De.WEBGL2)return hi()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,i,r,o,a,n,s);const c=this._context.gl,l=Fe.createPixelPack(this._context,Ht.STREAM_READ,s.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),c.readPixels(e,i,r,o,a,n,0),this._context.unbindBuffer(Q.PIXEL_PACK_BUFFER),await l.getSubDataAsync(s),l.dispose()}resize(e,i){const r=this._desc;if(r.width!==e||r.height!==i){if(!this._initialized)return r.width=e,r.height=i,this._colorAttachments.forEach(o=>{o&&o.resize(e,i)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,i));r.width=e,r.height=i,this._colorAttachments.forEach(o=>{o&&o.resize(e,i)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(e,i):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,i),this._stencilAttachment&&this._stencilAttachment.resize(e,i)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=Xe.FRAMEBUFFER){var i,r,o,a;const n=this._context.gl;if(this._initialized)return void n.bindFramebuffer(e,this.glName);this._glName&&n.deleteFramebuffer(this._glName);const s=this._context,c=n.createFramebuffer(),l=this._desc,u=(i=l.colorTarget)!=null?i:At.RENDER_BUFFER,f=(r=l.width)!=null?r:1,m=(o=l.height)!=null?o:1;if(n.bindFramebuffer(e,c),this._colorAttachments.size===0)if(u===At.TEXTURE||u===At.CUBEMAP)this._colorAttachments.set(_e.COLOR_ATTACHMENT0,dn(s,l,this.descriptor.colorTarget===At.CUBEMAP?oe.TEXTURE_CUBE_MAP:oe.TEXTURE_2D));else{const h=new bt(s,{internalFormat:b.RGBA4,width:f,height:m});this._colorAttachments.set(_e.COLOR_ATTACHMENT0,h)}this._colorAttachments.forEach((h,T)=>{h&&(Se(h)?this._framebufferTexture2D(h.glName,T,er(h),e):n.framebufferRenderbuffer(e,T,n.RENDERBUFFER,h.glName))});const x=(a=l.depthStencilTarget)!=null?a:Y.NONE;switch(x){case Y.DEPTH_RENDER_BUFFER:case Y.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new bt(s,{internalFormat:l.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?re.DEPTH_COMPONENT16:re.DEPTH_STENCIL,width:f,height:m}));const h=x===Y.DEPTH_RENDER_BUFFER?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT;n.framebufferRenderbuffer(e,h,n.RENDERBUFFER,this._depthAttachment.glName);break}case Y.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new bt(s,{internalFormat:re.STENCIL_INDEX8,width:f,height:m})),n.framebufferRenderbuffer(e,n.STENCIL_ATTACHMENT,n.RENDERBUFFER,this._stencilAttachment.glName);break;case Y.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){s.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const h={target:oe.TEXTURE_2D,pixelFormat:W.DEPTH_STENCIL,dataType:wt.UNSIGNED_INT_24_8,samplingMode:ye.NEAREST,wrapMode:Ie.CLAMP_TO_EDGE,width:f,height:m};this._depthStencilTexture=new ee(s,h)}this._framebufferTexture2D(this._depthStencilTexture.glName,n.DEPTH_STENCIL_ATTACHMENT,er(this._depthStencilTexture),e)}Mr()&&n.checkFramebufferStatus(e)!==n.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=c,this._initialized=!0}_framebufferTexture2D(e,i=_e.COLOR_ATTACHMENT0,r=oe.TEXTURE_2D,o=Xe.FRAMEBUFFER,a=0){this._context.gl.framebufferTexture2D(o,i,r,e,a)}_detachColorAttachment(e){hi()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const i=this._context.gl,r=this._colorAttachments.get(e);return Se(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(Xe.FRAMEBUFFER,e,i.RENDERBUFFER,null)),this._colorAttachments.delete(e),r}_disposeColorAttachments(){this._colorAttachments.forEach((e,i)=>{this._detachColorAttachment(i),e.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===Y.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Xe.FRAMEBUFFER,i,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(Xe.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(Le._MAX_COLOR_ATTACHMENTS===-1){const r=this._context.capabilities.drawBuffers;if(r){const o=this._context.gl;Le._MAX_COLOR_ATTACHMENTS=o.getParameter(r.MAX_COLOR_ATTACHMENTS)}else Le._MAX_COLOR_ATTACHMENTS=1}const i=e-_e.COLOR_ATTACHMENT0;i+1>Le._MAX_COLOR_ATTACHMENTS&&cn.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${Le._MAX_COLOR_ATTACHMENTS} color attachments`)}}function Se(t){return"type"in t&&t.type==="texture"}function Qi(t){return"type"in t&&t.type==="renderbuffer"}function Ji(t){return Se(t)||"pixelFormat"in t}function dn(t,e,i){return new ee(t,{target:i,pixelFormat:W.RGBA,dataType:wt.UNSIGNED_BYTE,samplingMode:ye.NEAREST,wrapMode:Ie.CLAMP_TO_EDGE,width:e.width,height:e.height})}function Bt(t,e){t.target!==oe.TEXTURE_2D&&t.target!==oe.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function ii(t,e){e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function er(t){return t.descriptor.target===oe.TEXTURE_CUBE_MAP?oe.TEXTURE_CUBE_MAP_POSITIVE_X:oe.TEXTURE_2D}Le._MAX_COLOR_ATTACHMENTS=-1;class K extends _i{constructor(e,i){super(),this.data=e,this.type=Nt.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new $o,this.params=i||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ie.REPEAT,t:Ie.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||St.STRETCH,this.estimatedTexMemRequired=K._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;j(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){Fi(e.src)||e.preload==="auto"&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){zo(e.src)||Fi(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,i){if(j(e))return 0;if(gt(e)||xt(e))return i.encoding===K.KTX2_ENCODING?Ia(e,i.mipmap):i.encoding===K.BASIS_ENCODING?La(e,i.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?K._getDataDimensions(e):i;return(i.mipmap?4/3:1)*r*o*(i.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var i;return{target:oe.TEXTURE_2D,pixelFormat:W.RGBA,dataType:wt.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?ye.LINEAR_MIPMAP_LINEAR:ye.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(i=this.params.maxAnisotropy)!=null?i:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,i){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const r=this.data;return j(r)?(this._glTexture=new ee(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,i,r):r instanceof Image?this._loadFromImageElement(e,i,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,i,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,i):(gt(r)||xt(r))&&this.params.encoding===K.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):(gt(r)||xt(r))&&this.params.encoding===K.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):(gt(r)||xt(r))&&this.params.encoding===K.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):xt(r)?this._loadFromPixelData(e,r):gt(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,i,r){if(!(this.data instanceof HTMLVideoElement)||j(this._glTexture)||this.data.readyState<Rt.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this._drawStretchedTexture(e,i,o,a,n,this._glTexture)}else{const{width:o,height:a}=this.data,{width:n,height:s}=this._glTexture.descriptor;o!==n||a!==s?this._glTexture.updateData(0,0,0,Math.min(o,n),Math.min(a,s),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,i){return this._glTexture=tn(e,this._createDescriptor(e),i),this._glTexture}_loadFromKTX2(e,i){return this._loadAsync(()=>$a(e,this._createDescriptor(e),i).then(r=>(this._glTexture=r,r)))}_loadFromBasis(e,i){return this._loadAsync(()=>Ba(e,this._createDescriptor(e),i).then(r=>(this._glTexture=r,r)))}_loadFromPixelData(e,i){ae(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=this.params.components===1?W.LUMINANCE:this.params.components===3?W.RGB:W.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new ee(e,r,i),this._glTexture}_loadFromURL(e,i,r){return this._loadAsync(async o=>{const a=await wr(r,{signal:o});return Li(o),this._loadFromImage(e,a,i)})}_loadFromImageElement(e,i,r){return r.complete?this._loadFromImage(e,r,i):this._loadAsync(async o=>{const a=await Uo(r,r.src,!1,o);return Li(o),this._loadFromImage(e,a,i)})}_loadFromVideoElement(e,i,r){return r.readyState>=Rt.HAVE_CURRENT_DATA?this._loadFromImage(e,r,i):this._loadFromVideoElementAsync(e,i,r)}_loadFromVideoElementAsync(e,i,r){return this._loadAsync(o=>new Promise((a,n)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),Vo(u)},c=()=>{r.readyState>=Rt.HAVE_CURRENT_DATA&&(s(),a(this._loadFromImage(e,r,i)))},l=f=>{s(),n(f||new pr("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=Go(o,()=>l(Ho()))}))}_loadFromImage(e,i,r){const o=K._getDataDimensions(i);this.params.width=o.width,this.params.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?W.RGB:W.RGBA,!this._requiresPowerOfTwo(e,a)||Ut(o.width)&&Ut(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new ee(e,a,i),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,i,o,a,r),this._glTexture)}_loadAsync(e){const i=new AbortController;this._loadingController=i;const r=e(i.signal);this._loadingPromise=r;const o=()=>{this._loadingController===i&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}_requiresPowerOfTwo(e,i){const r=Ie.CLAMP_TO_EDGE,o=typeof i.wrapMode=="number"?i.wrapMode===r:i.wrapMode.s===r&&i.wrapMode.t===r;return!Sa(e.gl)&&(i.hasMipmap||!o)}_makePowerOfTwoTexture(e,i,r,o,a){const{width:n,height:s}=r,c=Ii(n),l=Ii(s);let u;switch(o.width=c,o.height=l,this.params.powerOfTwoResizeMode){case St.PAD:o.textureCoordinateScaleFactor=[n/c,s/l],u=new ee(e,o),u.updateData(0,0,0,n,s,i);break;case St.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,i,o,a());break;default:fr(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,i,r,o){const a=new ee(e,r),n=new Le(e,{colorTarget:At.TEXTURE,depthStencilTarget:Y.NONE},a),s=new ee(e,{target:oe.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:wt.UNSIGNED_BYTE,wrapMode:Ie.CLAMP_TO_EDGE,samplingMode:ye.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},i),c=ln(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,o,n,c,s,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:s,framebuffer:n}:(c.dispose(!0),s.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),a}_drawStretchedTexture(e,i,r,o,a,n){e.bindFramebuffer(r);const s=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const c=e.useTechnique(i);c.setUniform4f("uColor",1,1,1,1),c.bindTexture(a,"tex"),e.bindVAO(o),e.drawArrays(Ct.TRIANGLE_STRIP,0,Pa(o,"geometry")),e.bindFramebuffer(null),e.setViewport(s.x,s.y,s.width,s.height)}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:i,sourceTexture:r}=this._powerOfTwoStretchInfo;i.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var Rt;K.DDS_ENCODING="image/vnd-ms.dds",K.KTX2_ENCODING="image/ktx2",K.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Rt||(Rt={}));var ge;(function(t){t[t.Global=1]="Global",t[t.Local=2]="Local"})(ge||(ge={}));var _;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.Highlight=4]="Highlight",t[t.Draped=5]="Draped",t[t.Occlusion=6]="Occlusion",t[t.Alpha=7]="Alpha",t[t.COUNT=8]="COUNT"})(_||(_={}));function d(t,...e){let i="";for(let r=0;r<e.length;r++)i+=t[r]+e[r];return i+=t[t.length-1],i}(function(t){function e(r){return Math.round(r).toString()}function i(r){return r.toPrecision(8)}t.int=e,t.float=i})(d||(d={}));function un(t,e){const i=t.fragment;switch(i.code.add(d`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case te.None:i.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case te.View:i.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case te.WindingOrder:i.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:fr(e.doubleSidedMode);case te.COUNT:}}var te;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(te||(te={}));const hn=.1,Ti=.001;function Qe(t,e){const i=t.fragment;switch(e.alphaDiscardMode){case X.Blend:i.code.add(d`
        #define discardOrAdjustAlpha(color) { if (color.a < ${d.float(Ti)}) { discard; } }
      `);break;case X.Opaque:i.code.add(d`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case X.Mask:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case X.MaskBlend:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}class mn{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,i,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,i),this._technique),this._technique}ensureResources(e){return Pt.LOADED}}class fn extends mn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,i=>this._texture=i),this._acquire(e.normalTextureId,i=>this._textureNormal=i),this._acquire(e.emissiveTextureId,i=>this._textureEmissive=i),this._acquire(e.occlusionTextureId,i=>this._textureOcclusion=i),this._acquire(e.metallicRoughnessTextureId,i=>this._textureMetallicRoughness=i)}dispose(){this._texture=qe(this._texture),this._textureNormal=qe(this._textureNormal),this._textureEmissive=qe(this._textureEmissive),this._textureOcclusion=qe(this._textureOcclusion),this._textureMetallicRoughness=qe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Pt.LOADED:Pt.LOADING}updateTexture(e){(j(this._texture)||e!==this._texture.id)&&(this._texture=qe(this._texture),this._textureId=e,this._acquire(this._textureId,i=>this._texture=i))}bindTextures(e){g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const i=g(this._texture)?this._texture.glTexture:null;g(i)&&i.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",i.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,i){if(j(e))return void i(null);const r=this._textureRepository.acquire(e);if(ko(r))return++this._numLoading,void r.then(o=>{if(this._disposed)return qe(o),void i(null);i(o)}).finally(()=>--this._numLoading);i(r)}}function pn(t){return Math.abs(t*t*t)}function vn(t,e,i){const r=i.parameters,o=i.paddingPixelsOverride;return Tt.scale=Math.min(r.divisor/(e-r.offset),1),Tt.factor=pn(t),Tt.minPixelSize=r.minPixelSize,Tt.paddingPixels=o,Tt}function gn(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function xn(t,e){return Math.max(Wo(t*e.scale,t,e.factor),gn(t,e))}function _n(t,e,i,r){return xn(t,vn(e,i,r))}const Tt={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function bn(t,e,i){for(let r=0;r<i;++r)e[2*r]=t[r],e[2*r+1]=t[r]-e[2*r]}function Tn(t,e,i,r){for(let o=0;o<r;++o)tr[0]=t[o],bn(tr,ri,1),e[o]=ri[0],i[o]=ri[1]}const tr=new Float64Array(1),ri=new Float32Array(2);function An(t){return!!g(t)&&!t.visible}const $t=qo();function En(t,e,i,r,o,a,n){if(!An(e))if(t.boundingInfo){ae(t.primitiveType===nt.Triangle);const s=i.tolerance;Br(t.boundingInfo,r,o,s,a,n)}else{const s=t.indices.get(p.POSITION),c=t.vertexAttributes.get(p.POSITION);zr(r,o,0,s.length/3,s,c,void 0,a,n)}}const Cn=H();function Br(t,e,i,r,o,a){if(j(t))return;const n=Rn(e,i,Cn);if(jo($t,t.getBBMin()),Yo($t,t.getBBMax()),g(o)&&o.applyToAabb($t),yn($t,e,n,r)){const{primitiveIndices:s,indices:c,position:l}=t,u=s?s.length:c.length/3;if(u>Dn){const f=t.getChildren();if(f!==void 0){for(let m=0;m<8;++m)f[m]!==void 0&&Br(f[m],e,i,r,o,a);return}}zr(e,i,0,u,c,l,s,o,a)}}const $r=H();function zr(t,e,i,r,o,a,n,s,c){if(n)return Sn(t,e,i,r,o,a,n,s,c);const l=a.data,u=a.stride||a.size,f=t[0],m=t[1],x=t[2],h=e[0]-f,T=e[1]-m,E=e[2]-x;for(let A=i,G=3*i;A<r;++A){let M=u*o[G++],y=l[M++],F=l[M++],C=l[M];M=u*o[G++];let S=l[M++],w=l[M++],v=l[M];M=u*o[G++];let R=l[M++],I=l[M++],B=l[M];g(s)&&([y,F,C]=s.applyToVertex(y,F,C,A),[S,w,v]=s.applyToVertex(S,w,v,A),[R,I,B]=s.applyToVertex(R,I,B,A));const D=S-y,z=w-F,$=v-C,U=R-y,he=I-F,Ae=B-C,Ge=T*Ae-he*E,ht=E*U-Ae*h,mt=h*he-U*T,me=D*Ge+z*ht+$*mt;if(Math.abs(me)<=Number.EPSILON)continue;const se=f-y,He=m-F,Ve=x-C,xe=se*Ge+He*ht+Ve*mt;if(me>0){if(xe<0||xe>me)continue}else if(xe>0||xe<me)continue;const Ee=He*$-z*Ve,ft=Ve*D-$*se,pt=se*z-D*He,ke=h*Ee+T*ft+E*pt;if(me>0){if(ke<0||xe+ke>me)continue}else if(ke>0||xe+ke<me)continue;const We=(U*Ee+he*ft+Ae*pt)/me;We>=0&&c(We,Ur(D,z,$,U,he,Ae,$r),A,!1)}}function Sn(t,e,i,r,o,a,n,s,c){const l=a.data,u=a.stride||a.size,f=t[0],m=t[1],x=t[2],h=e[0]-f,T=e[1]-m,E=e[2]-x;for(let A=i;A<r;++A){const G=n[A];let M=3*G,y=u*o[M++],F=l[y++],C=l[y++],S=l[y];y=u*o[M++];let w=l[y++],v=l[y++],R=l[y];y=u*o[M];let I=l[y++],B=l[y++],D=l[y];g(s)&&([F,C,S]=s.applyToVertex(F,C,S,A),[w,v,R]=s.applyToVertex(w,v,R,A),[I,B,D]=s.applyToVertex(I,B,D,A));const z=w-F,$=v-C,U=R-S,he=I-F,Ae=B-C,Ge=D-S,ht=T*Ge-Ae*E,mt=E*he-Ge*h,me=h*Ae-he*T,se=z*ht+$*mt+U*me;if(Math.abs(se)<=Number.EPSILON)continue;const He=f-F,Ve=m-C,xe=x-S,Ee=He*ht+Ve*mt+xe*me;if(se>0){if(Ee<0||Ee>se)continue}else if(Ee>0||Ee<se)continue;const ft=Ve*U-$*xe,pt=xe*z-U*He,ke=He*$-z*Ve,We=h*ft+T*pt+E*ke;if(se>0){if(We<0||Ee+We>se)continue}else if(We>0||Ee+We<se)continue;const Oi=(he*ft+Ae*pt+Ge*ke)/se;Oi>=0&&c(Oi,Ur(z,$,U,he,Ae,Ge,$r),G,!1)}}const ir=H(),rr=H();function Ur(t,e,i,r,o,a,n){return ct(ir,t,e,i),ct(rr,r,o,a),ci(n,ir,rr),qt(n,n),n}function Rn(t,e,i){return ct(i,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function yn(t,e,i,r){return Mn(t,e,i,r,1/0)}function Mn(t,e,i,r,o){const a=(t[0]-r-e[0])*i[0],n=(t[3]+r-e[0])*i[0];let s=Math.min(a,n),c=Math.max(a,n);const l=(t[1]-r-e[1])*i[1],u=(t[4]+r-e[1])*i[1];if(c=Math.min(c,Math.max(l,u)),c<0||(s=Math.max(s,Math.min(l,u)),s>c))return!1;const f=(t[2]-r-e[2])*i[2],m=(t[5]+r-e[2])*i[2];return c=Math.min(c,Math.max(f,m)),!(c<0)&&(s=Math.max(s,Math.min(f,m)),!(s>c)&&s<o)}function On(t,e,i,r,o){let a=(i.screenLength||0)*t.pixelRatio;o&&(a=_n(a,r,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Xo(n*e,i.minWorldLength||0,i.maxWorldLength!=null?i.maxWorldLength:1/0)}function wn(t,e,i){if(!t)return;const r=t.parameters,o=t.paddingPixelsOverride;e.setUniform4f(i,r.divisor,r.offset,r.minPixelSize,o)}function Gr(t,e){const i=e?Gr(e):{};for(const r in t){let o=t[r];o&&o.forEach&&(o=Nn(o)),o==null&&r in i||(i[r]=o)}return i}function Pn(t,e){let i=!1;for(const r in e){const o=e[r];o!==void 0&&(i=!0,Array.isArray(o)?t[r]=o.slice():t[r]=o)}return i}function Nn(t){const e=[];return t.forEach(i=>e.push(i)),e}const or={multiply:1,ignore:2,replace:3,tint:4},Dn=1e3;class Fn extends _i{constructor(e,i){super(),this.type=Nt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Yt,this._parameters=Gr(e,i),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Pn(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}var fi;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(fi||(fi={}));const Ln={renderOccluded:fi.Occlude};function Hr(t,e,i=ui.ADD,r=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function In(t,e,i,r,o=ui.ADD,a=ui.ADD,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:r,opRgb:o,opAlpha:a,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}const Bn={face:Rr.BACK,mode:yr.CCW},$n={face:Rr.FRONT,mode:yr.CCW},zn=t=>t===ue.Back?Bn:t===ue.Front?$n:null,Un={zNear:0,zFar:1},Gn={r:!0,g:!0,b:!0,a:!0};function Hn(t){return Zn.intern(t)}function Vn(t){return Qn.intern(t)}function kn(t){return Jn.intern(t)}function Wn(t){return es.intern(t)}function qn(t){return ts.intern(t)}function Xn(t){return is.intern(t)}function jn(t){return rs.intern(t)}function Yn(t){return os.intern(t)}function Kn(t){return as.intern(t)}class Oe{constructor(e,i){this.makeKey=e,this.makeRef=i,this.interns=new Map}intern(e){if(!e)return null;const i=this.makeKey(e),r=this.interns;return r.has(i)||r.set(i,this.makeRef(e)),r.get(i)}}function we(t){return"["+t.join(",")+"]"}const Zn=new Oe(Vr,t=>q({__tag:"Blending"},t));function Vr(t){return t?we([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const Qn=new Oe(kr,t=>q({__tag:"Culling"},t));function kr(t){return t?we([t.face,t.mode]):null}const Jn=new Oe(Wr,t=>q({__tag:"PolygonOffset"},t));function Wr(t){return t?we([t.factor,t.units]):null}const es=new Oe(qr,t=>q({__tag:"DepthTest"},t));function qr(t){return t?we([t.func]):null}const ts=new Oe(Xr,t=>q({__tag:"StencilTest"},t));function Xr(t){return t?we([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const is=new Oe(jr,t=>q({__tag:"DepthWrite"},t));function jr(t){return t?we([t.zNear,t.zFar]):null}const rs=new Oe(Yr,t=>q({__tag:"ColorWrite"},t));function Yr(t){return t?we([t.r,t.g,t.b,t.a]):null}const os=new Oe(Kr,t=>q({__tag:"StencilWrite"},t));function Kr(t){return t?we([t.mask]):null}const as=new Oe(ns,t=>({blending:Hn(t.blending),culling:Vn(t.culling),polygonOffset:kn(t.polygonOffset),depthTest:Wn(t.depthTest),stencilTest:qn(t.stencilTest),depthWrite:Xn(t.depthWrite),colorWrite:jn(t.colorWrite),stencilWrite:Yn(t.stencilWrite)}));function ns(t){return t?we([Vr(t.blending),kr(t.culling),Wr(t.polygonOffset),qr(t.depthTest),Xr(t.stencilTest),jr(t.depthWrite),Yr(t.colorWrite),Kr(t.stencilWrite)]):null}const ss=In(Be.SRC_ALPHA,Be.ONE,Be.ONE_MINUS_SRC_ALPHA,Be.ONE_MINUS_SRC_ALPHA),ls=Hr(Be.ONE,Be.ONE),cs=Hr(Be.ZERO,Be.ONE_MINUS_SRC_ALPHA);function ds(t){return t===ce.FrontFace?null:t===ce.Alpha?cs:ls}const us=5e5,hs={factor:-1,units:-2};function ms(t){return t?hs:null}function fs(t,e=be.LESS){return t===ce.NONE||t===ce.FrontFace?e:be.LEQUAL}var st;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(st||(st={}));function ps(t,e,i){const r=gi(t.direction,ne(i,e,t.origin));return dt(i,t.origin,et(i,t.direction,r)),i}function vs(){return{origin:null,direction:null}}new ma(vs);function gs(t,e){const i=gi(t,e)/(Me(t)*Me(e));return-vr(i)}const xs=Ue.getLogger("esri.geometry.support.sphere");function Ai(){return Ca()}function Zr(t,e=Ai()){return Ko(e,t)}function _s(t,e){return Xt(t[0],t[1],t[2],e)}function bs(t){return t}function Ts(t){t[0]=t[1]=t[2]=t[3]=0}function As(t){return t}function Ei(t){return Array.isArray(t)?t[3]:t}function ze(t){return Array.isArray(t)?t:Ns}function Es(t,e,i,r){return Xt(t,e,i,r)}function Cs(t,e,i){return t!==i&&Et(i,t),i[3]=t[3]+e,i}function Ss(t,e,i){return xs.error("sphere.setExtent is not yet supported"),t===i?i:Zr(t,i)}function Kt(t,e,i){if(j(e))return!1;const{origin:r,direction:o}=e,a=Rs;a[0]=r[0]-t[0],a[1]=r[1]-t[1],a[2]=r[2]-t[2];const n=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],s=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),c=s*s-4*n*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-t[3]*t[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*n);const f=(-s+l)/(2*n);return(u<0||f<u&&f>0)&&(u=f),!(u<0)&&(i&&(i[0]=r[0]+o[0]*u,i[1]=r[1]+o[1]*u,i[2]=r[2]+o[2]*u),!0)}const Rs=H();function ys(t,e){return Kt(t,e,null)}function Ms(t,e,i){if(Kt(t,e,i))return i;const r=Qr(t,e,tt.get());return dt(i,e.origin,et(tt.get(),e.direction,Qo(e.origin,r)/Me(e.direction))),i}function Qr(t,e,i){const r=tt.get(),o=fa.get();ci(r,e.origin,e.direction);const a=Ei(t);ci(i,r,e.origin),et(i,i,1/Me(i)*a);const n=eo(t,e.origin),s=gs(e.origin,i);return Zo(o,s+n,r),ot(i,i,o),i}function Os(t,e,i){return Kt(t,e,i)?i:(ps(e,ze(t),i),Jr(t,i,i))}function Jr(t,e,i){const r=ne(tt.get(),e,ze(t)),o=et(tt.get(),r,t[3]/Me(r));return dt(i,o,ze(t))}function ws(t,e){const i=ne(tt.get(),e,ze(t)),r=Jo(i),o=t[3]*t[3];return Math.sqrt(Math.abs(r-o))}function eo(t,e){const i=ne(tt.get(),e,ze(t)),r=Me(i),o=Ei(t),a=o+Math.abs(o-r);return vr(o/a)}const oi=H();function to(t,e,i,r){const o=ne(oi,e,ze(t));switch(i){case st.X:{const a=Bi(o,oi)[2];return ct(r,-Math.sin(a),Math.cos(a),0)}case st.Y:{const a=Bi(o,oi),n=a[1],s=a[2],c=Math.sin(n);return ct(r,-c*Math.cos(s),-c*Math.sin(s),Math.cos(n))}case st.Z:return qt(r,o);default:return}}function io(t,e){const i=ne(pi,e,ze(t));return Me(i)-t[3]}function Ps(t,e,i,r){const o=io(t,e),a=to(t,e,st.Z,pi),n=et(pi,a,i-o);return dt(r,e,n)}const Ns=H(),pi=H();Object.freeze({__proto__:null,create:Ai,copy:Zr,fromCenterAndRadius:_s,wrap:bs,clear:Ts,fromRadius:As,getRadius:Ei,getCenter:ze,fromValues:Es,elevate:Cs,setExtent:Ss,intersectRay:Kt,intersectsRay:ys,intersectRayClosestSilhouette:Ms,closestPointOnSilhouette:Qr,closestPoint:Os,projectPoint:Jr,distanceToSilhouette:ws,angleToSilhouette:eo,axisAt:to,altitudeAt:io,setAltitudeAt:Ps});class Ds{constructor(e=0){this.offset=e,this.sphere=Ai(),this.tmpVertex=H()}applyToVertex(e,i,r){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*i+o[8]*r+o[12],n=o[1]*e+o[5]*i+o[9]*r+o[13],s=o[2]*e+o[6]*i+o[10]*r+o[14];const c=this.offset/Math.sqrt(a*a+n*n+s*s);a+=a*c,n+=n*c,s+=s*c;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*a+l[4]*n+l[8]*s+l[12],this.tmpVertex[1]=l[1]*a+l[5]*n+l[9]*s+l[13],this.tmpVertex[2]=l[2]*a+l[6]*n+l[10]*s+l[14],this.tmpVertex}applyToMinMax(e,i){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]+=i[0]*o,i[1]+=i[1]*o,i[2]+=i[2]*o}applyToAabb(e){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/i;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/i,this.sphere}}const ar=new Ds;function Fs(t){return g(t)?(ar.offset=t,ar):null}function Ls(t,e,i,r){const o=i.typedBuffer,a=i.typedBufferStride,n=t.length;r*=a;for(let s=0;s<n;++s){const c=2*t[s];o[r]=e[c],o[r+1]=e[c+1],r+=a}}function ro(t,e,i,r,o){const a=i.typedBuffer,n=i.typedBufferStride,s=t.length;if(r*=n,o==null||o===1)for(let c=0;c<s;++c){const l=3*t[c];a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],r+=n}else for(let c=0;c<s;++c){const l=3*t[c];for(let u=0;u<o;++u)a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],r+=n}}function Is(t,e,i,r,o=1){const a=i.typedBuffer,n=i.typedBufferStride,s=t.length;if(r*=n,o===1)for(let c=0;c<s;++c){const l=4*t[c];a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],a[r+3]=e[l+3],r+=n}else for(let c=0;c<s;++c){const l=4*t[c];for(let u=0;u<o;++u)a[r]=e[l],a[r+1]=e[l+1],a[r+2]=e[l+2],a[r+3]=e[l+3],r+=n}}function Bs(t,e,i,r,o,a=1){if(!i)return void ro(t,e,r,o,a);const n=r.typedBuffer,s=r.typedBufferStride,c=t.length,l=i[0],u=i[1],f=i[2],m=i[4],x=i[5],h=i[6],T=i[8],E=i[9],A=i[10],G=i[12],M=i[13],y=i[14];if(o*=s,a===1)for(let F=0;F<c;++F){const C=3*t[F],S=e[C],w=e[C+1],v=e[C+2];n[o]=l*S+m*w+T*v+G,n[o+1]=u*S+x*w+E*v+M,n[o+2]=f*S+h*w+A*v+y,o+=s}else for(let F=0;F<c;++F){const C=3*t[F],S=e[C],w=e[C+1],v=e[C+2],R=l*S+m*w+T*v+G,I=u*S+x*w+E*v+M,B=f*S+h*w+A*v+y;for(let D=0;D<a;++D)n[o]=R,n[o+1]=I,n[o+2]=B,o+=s}}function $s(t,e,i,r,o,a=1){if(!i)return void ro(t,e,r,o,a);const n=i,s=r.typedBuffer,c=r.typedBufferStride,l=t.length,u=n[0],f=n[1],m=n[2],x=n[4],h=n[5],T=n[6],E=n[8],A=n[9],G=n[10],M=!gr(n),y=1e-6,F=1-y;if(o*=c,a===1)for(let C=0;C<l;++C){const S=3*t[C],w=e[S],v=e[S+1],R=e[S+2];let I=u*w+x*v+E*R,B=f*w+h*v+A*R,D=m*w+T*v+G*R;if(M){const z=I*I+B*B+D*D;if(z<F&&z>y){const $=1/Math.sqrt(z);I*=$,B*=$,D*=$}}s[o+0]=I,s[o+1]=B,s[o+2]=D,o+=c}else for(let C=0;C<l;++C){const S=3*t[C],w=e[S],v=e[S+1],R=e[S+2];let I=u*w+x*v+E*R,B=f*w+h*v+A*R,D=m*w+T*v+G*R;if(M){const z=I*I+B*B+D*D;if(z<F&&z>y){const $=1/Math.sqrt(z);I*=$,B*=$,D*=$}}for(let z=0;z<a;++z)s[o+0]=I,s[o+1]=B,s[o+2]=D,o+=c}}function zs(t,e,i,r,o,a=1){if(!i)return void Is(t,e,r,o,a);const n=i,s=r.typedBuffer,c=r.typedBufferStride,l=t.length,u=n[0],f=n[1],m=n[2],x=n[4],h=n[5],T=n[6],E=n[8],A=n[9],G=n[10],M=!gr(n),y=1e-6,F=1-y;if(o*=c,a===1)for(let C=0;C<l;++C){const S=4*t[C],w=e[S],v=e[S+1],R=e[S+2],I=e[S+3];let B=u*w+x*v+E*R,D=f*w+h*v+A*R,z=m*w+T*v+G*R;if(M){const $=B*B+D*D+z*z;if($<F&&$>y){const U=1/Math.sqrt($);B*=U,D*=U,z*=U}}s[o+0]=B,s[o+1]=D,s[o+2]=z,s[o+3]=I,o+=c}else for(let C=0;C<l;++C){const S=4*t[C],w=e[S],v=e[S+1],R=e[S+2],I=e[S+3];let B=u*w+x*v+E*R,D=f*w+h*v+A*R,z=m*w+T*v+G*R;if(M){const $=B*B+D*D+z*z;if($<F&&$>y){const U=1/Math.sqrt($);B*=U,D*=U,z*=U}}for(let $=0;$<a;++$)s[o+0]=B,s[o+1]=D,s[o+2]=z,s[o+3]=I,o+=c}}function nr(t,e,i,r,o,a=1){const n=r.typedBuffer,s=r.typedBufferStride,c=t.length;if(o*=s,a===1){if(i===4)for(let l=0;l<c;++l){const u=4*t[l];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=s}else if(i===3)for(let l=0;l<c;++l){const u=3*t[l];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=s}}else if(i===4)for(let l=0;l<c;++l){const u=4*t[l];for(let f=0;f<a;++f)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=s}else if(i===3)for(let l=0;l<c;++l){const u=3*t[l];for(let f=0;f<a;++f)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=s}}function Us(t,e,i,r,o,a){for(const n of e.fieldNames){const s=t.vertexAttributes.get(n),c=t.indices.get(n);if(s&&c)switch(n){case p.POSITION:{ae(s.size===3);const l=o.getField(n,at);l&&Bs(c,s.data,i,l,a);break}case p.NORMAL:{ae(s.size===3);const l=o.getField(n,at);l&&$s(c,s.data,r,l,a);break}case p.UV0:{ae(s.size===2);const l=o.getField(n,Cr);l&&Ls(c,s.data,l,a);break}case p.COLOR:{ae(s.size===3||s.size===4);const l=o.getField(n,Ot);l&&nr(c,s.data,s.size,l,a);break}case p.SYMBOLCOLOR:{ae(s.size===3||s.size===4);const l=o.getField(n,Ot);l&&nr(c,s.data,s.size,l,a);break}case p.TANGENT:{ae(s.size===4);const l=o.getField(n,di);l&&zs(c,s.data,r,l,a);break}}}}function Je(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,r=d`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.sliceHighlightDisabled?d`#define highlightSlice(_color_, _pos_) (_color_)`:d`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(o)}else{const i=d`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(i),t.fragment.code.add(i)}}function Gs(t,e,i,r){if(e.slicePlaneEnabled)if(g(i)){if(Et(Ce,i.origin),Et(Pe,i.basis1),Et(Ne,i.basis2),g(r)&&g(r.origin)&&ne(Ce,i.origin,r.origin),g(r)&&g(r.view)){const o=g(r.origin)?xr(Hs,r.view,r.origin):r.view;dt(Pe,Pe,Ce),dt(Ne,Ne,Ce),ot(Ce,Ce,o),ot(Pe,Pe,o),ot(Ne,Ne,o),ne(Pe,Pe,Ce),ne(Ne,Ne,Ce)}t.setUniform3fv("slicePlaneOrigin",Ce),t.setUniform3fv("slicePlaneBasis1",Pe),t.setUniform3fv("slicePlaneBasis2",Ne)}else t.setUniform3fv("slicePlaneBasis1",Jt),t.setUniform3fv("slicePlaneBasis2",Jt),t.setUniform3fv("slicePlaneOrigin",Jt)}const Ce=H(),Pe=H(),Ne=H(),Hs=Ar();function oo({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function ao(t){return!!ea("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}function no(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(p.MODELORIGINHI,"vec3"),t.attributes.add(p.MODELORIGINLO,"vec3"),t.attributes.add(p.MODEL,"mat3"),t.attributes.add(p.MODELNORMAL,"mat3")),e.instancedDoublePrecision&&(t.vertex.include(oo,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const i=[d`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,d`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?d`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,d`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,d`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangents?d`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:d``];t.vertex.code.add(i[0]),t.vertex.code.add(i[1]),t.vertex.code.add(i[2]),e.output===_.Normal&&t.vertex.code.add(i[3]),t.vertex.code.add(i[4])}function Vs(t,e){Tn(e,sr,lr,3),t.setUniform3fv("viewOriginHi",sr),t.setUniform3fv("viewOriginLo",lr)}const sr=H(),lr=H();function ks(t){const e=d`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function Zt(t,e){e.normalType===Z.Attribute&&(t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`)),e.normalType===Z.CompressedAttribute&&(t.include(ks),t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(d`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===Z.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Z;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(Z||(Z={}));function lt(t,e){e.attributeTextureCoordinates===de.Default&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),e.attributeTextureCoordinates===de.Atlas&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),e.attributeTextureCoordinates===de.None&&t.vertex.code.add(d`void forwardTextureCoordinates() {}`)}var de;(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.COUNT=3]="COUNT"})(de||(de={}));function Ws(t){t.vertex.code.add(d`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function so(t,e){const i=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(Ws),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(d`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode===ge.Global?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?d`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function qs(t,e,i){if(!e.verticalOffset)return;const r=Xs(e.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),o=i.camera.pixelRatio||1;t.setUniform4f("verticalOffset",r.screenLength*o,r.perDistance,r.minWorldLength,r.maxWorldLength)}function Xs(t,e,i,r=js){return r.screenLength=t.screenLength,r.perDistance=Math.tan(.5*e)/(.5*i),r.minWorldLength=t.minWorldLength,r.maxWorldLength=t.maxWorldLength,r}const js={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},Ys=Xt(1,1,0,1),Ks=Xt(1,0,1,1);function Zs(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",Ys).add("unoccludedHighlightFlag","vec4",Ks),t.fragment.code.add(d`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function Qs(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function Vt(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("nearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(d`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function Js(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}function el(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function lo(t,e){t.include(lt,e),t.fragment.code.add(d`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.attributeTextureCoordinates===de.Default&&t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),e.attributeTextureCoordinates===de.Atlas&&(t.include(el),t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}Ra(0,.6,.2);var L;function co(t,e){const i=t.fragment,r=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;e.pbrMode===L.Normal&&r&&t.include(lo,e),e.pbrMode!==L.Schematic?(e.pbrMode===L.Disabled&&i.code.add(d`float getBakedOcclusion() { return 1.0; }`),e.pbrMode===L.Normal&&(i.uniforms.add("emissionFactor","vec3"),i.uniforms.add("mrrFactors","vec3"),i.code.add(d`vec3 mrr;
vec3 emission;
float occlusion;`),e.hasMetalnessAndRoughnessTexture&&(i.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&i.uniforms.add("texMetallicRoughnessSize","vec2"),i.code.add(d`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(i.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&i.uniforms.add("texEmissionSize","vec2"),i.code.add(d`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(i.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&i.uniforms.add("texOcclusionSize","vec2"),i.code.add(d`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(d`float getBakedOcclusion() { return 1.0; }`),i.code.add(d`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):i.code.add(d`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function tl(t,e,i=!1){i||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))}(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(L||(L={}));function Ci(t){t.code.add(d`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Si(t){t.fragment.include(Ci),t.fragment.uniforms.add("shadowMapTex","sampler2D"),t.fragment.uniforms.add("numCascades","int"),t.fragment.uniforms.add("cascadeDistances","vec4"),t.fragment.uniforms.add("shadowMapMatrix","mat4",4),t.fragment.uniforms.add("depthHalfPixelSz","float"),t.fragment.code.add(d`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function il(t,e,i){e.shadowMappingEnabled&&e.shadowMap.bindView(t,i)}function yt(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(d`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(d`vec4 vvColor() { return vec4(1.0); }`)}function rl(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function ol(t,e){rl(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}function al(t,e,i){t.setUniform3f("cameraPosition",i[3]-e[0],i[7]-e[1],i[11]-e[2])}function nl(t,e){t.setUniformMatrix4fv("proj",e)}function sl(t,e,i){xr(cr,i,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",cr)}const cr=ta();class uo{constructor(e,i){this._module=e,this._loadModule=i}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class ll{constructor(e,i,r){this.release=r,i&&(this._config=i.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=li(this._program),this._pipeline=this._config=null}reload(e){li(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,i){}bindMaterial(e,i){}bindDraw(e){}bindPipelineState(e,i=null,r){e.setPipelineState(this.getPipelineState(i,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Ct.TRIANGLES}getPipelineState(e,i){return this._pipeline}}class cl{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,i={key:this.key};for(const r of e)i[r]=this[r];return i}}function N(t={}){return(e,i)=>{var r,o;e._parameterNames=(r=e._parameterNames)!=null?r:[],e._parameterNames.push(i);const a=e._parameterNames.length-1,n=t.count||2,s=Math.ceil(Math.log2(n)),c=(o=e._parameterBits)!=null?o:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);e._parameterBits=c;const u=c[l],f=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(e,i,{get(){return this[a]},set(m){if(this[a]!==m&&(this[a]=m,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~f|+m<<u&f,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+i+" must be boolean or number, got "+typeof m}})}}class ho{constructor(e,i,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new mr({deallocator:null}),this._glProgram=e.programCache.acquire(i.generateSource("vertex"),i.generateSource("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=hi()?i.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,i){this._glProgram.setUniform1i(e,i?1:0)}setUniform1i(e,i){this._glProgram.setUniform1i(e,i)}setUniform1f(e,i){this._glProgram.setUniform1f(e,i)}setUniform1fv(e,i){this._glProgram.setUniform1fv(e,i)}setUniform1iv(e,i){this._glProgram.setUniform1iv(e,i)}setUniform2f(e,i,r){this._glProgram.setUniform2f(e,i,r)}setUniform2fv(e,i){this._glProgram.setUniform2fv(e,i)}setUniform2iv(e,i){this._glProgram.setUniform2iv(e,i)}setUniform3f(e,i,r,o){this._glProgram.setUniform3f(e,i,r,o)}setUniform3fv(e,i){this._glProgram.setUniform3fv(e,i)}setUniform3iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform4f(e,i,r,o,a){this._glProgram.setUniform4f(e,i,r,o,a)}setUniform4fv(e,i){this._glProgram.setUniform4fv(e,i)}setUniform4iv(e,i){this._glProgram.setUniform4iv(e,i)}setUniformMatrix3fv(e,i){this._glProgram.setUniformMatrix3fv(e,i)}setUniformMatrix4fv(e,i){this._glProgram.setUniformMatrix4fv(e,i)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,i){if(j(e)||e.glName==null){const o=this._textures.get(i);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(i)),null}let r=this._textures.get(i);return r==null?(r=this._allocTextureUnit(e),this._textures.set(i,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(i,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,i)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(i,e.unit)}),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if((e.type==="sampler2D"||e.type==="samplerCube")&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}be.LESS;be.ALWAYS;const dl={mask:255},ul={function:{func:be.ALWAYS,ref:Te.OutlineVisualElementMask,mask:Te.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.ZERO}},hl={function:{func:be.ALWAYS,ref:Te.OutlineVisualElementMask,mask:Te.OutlineVisualElementMask},operation:{fail:le.KEEP,zFail:le.KEEP,zPass:le.REPLACE}};be.EQUAL,Te.OutlineVisualElementMask,Te.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;be.NOTEQUAL,Te.OutlineVisualElementMask,Te.OutlineVisualElementMask,le.KEEP,le.KEEP,le.KEEP;function mo(t,e){e.output===_.Color&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(d`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===_.Depth||e.output===_.Shadow?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("nearFar","vec2"),t.vertex.code.add(d`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(d`void forwardLinearDepth() {}`)}function fo(t){t.vertex.code.add(d`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Mt(t,e){const i=q({hasModelTransformation:!1},e);if(i.hasModelTransformation)return i.linearDepth?void t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);i.linearDepth?t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Ri(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(d`vec3 positionModel() { return position; }`)}var fe;(function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"})(fe||(fe={}));function ml(t){t.vertex.code.add(d`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${d.int(fe.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${d.int(fe.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${d.int(fe.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${d.int(fe.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function po(t,e){e.symbolColor?(t.include(ml),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?t.vertex.code.add(d`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):t.vertex.code.add(d`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function vo(t,e){e.attributeColor?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function fl(t,e){t.include(Ri),t.vertex.include(oo,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("transformWorldFromModelRS","mat3"),t.vertex.uniforms.add("transformWorldFromModelTH","vec3"),t.vertex.uniforms.add("transformWorldFromModelTL","vec3"),t.vertex.uniforms.add("transformWorldFromViewTH","vec3"),t.vertex.uniforms.add("transformWorldFromViewTL","vec3"),t.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),t.vertex.uniforms.add("transformProjFromView","mat4"),t.vertex.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.uniforms.add("transformWorldFromViewTL","vec3"),t.fragment.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function go(t,e){e.normalType===Z.Attribute||e.normalType===Z.CompressedAttribute?(t.include(Zt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),t.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),t.vertex.code.add(d`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===Z.Ground?(t.include(fl,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(d`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode===ge.Global?d`normalize(vPositionWorldCameraRelative);`:d`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(d`void forwardNormal() {}`)}function pl(t,e){t.fragment.include(Ci),e.output===_.Shadow?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===_.Depth&&t.fragment.code.add(d`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function xo(t,e){const i=t.vertex.code,r=t.fragment.code,o=e.hasModelTransformation;e.output!==_.Depth&&e.output!==_.Shadow||(t.include(Mt,{linearDepth:!0,hasModelTransformation:o}),t.include(lt,e),t.include(yt,e),t.include(pl,e),t.include(Je,e),t.vertex.uniforms.add("nearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),i.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),t.include(Qe,e),r.add(d`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===_.Normal&&(t.include(Mt,{linearDepth:!1,hasModelTransformation:o}),t.include(Zt,e),t.include(go,e),t.include(lt,e),t.include(yt,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),i.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===Z.Attribute?d`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Je,e),t.include(Qe,e),r.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===Z.ScreenDerivative?d`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===_.Highlight&&(t.include(Mt,{linearDepth:!1,hasModelTransformation:o}),t.include(lt,e),t.include(yt,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),i.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Je,e),t.include(Qe,e),t.include(Zs),r.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function kt(t){t.include(Ci),t.code.add(d`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function vl(t,e){const i=t.fragment;e.vertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===te.WindingOrder?i.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),i.code.add(d`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.attributeTextureCoordinates!==de.None&&(t.include(lo,e),i.uniforms.add("normalTexture","sampler2D"),i.uniforms.add("normalTextureSize","vec2"),i.code.add(d`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function yi(t,e){const i=t.fragment;e.receiveAmbientOcclusion?(i.uniforms.add("ssaoTex","sampler2D"),i.uniforms.add("viewportPixelSz","vec4"),i.code.add(d`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):i.code.add(d`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function gl(t,e){const i=t.fragment,r=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;r===0?(i.uniforms.add("lightingAmbientSH0","vec3"),i.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(i.uniforms.add("lightingAmbientSH_R","vec4"),i.uniforms.add("lightingAmbientSH_G","vec4"),i.uniforms.add("lightingAmbientSH_B","vec4"),i.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===2&&(i.uniforms.add("lightingAmbientSH0","vec3"),i.uniforms.add("lightingAmbientSH_R1","vec4"),i.uniforms.add("lightingAmbientSH_G1","vec4"),i.uniforms.add("lightingAmbientSH_B1","vec4"),i.uniforms.add("lightingAmbientSH_R2","vec4"),i.uniforms.add("lightingAmbientSH_G2","vec4"),i.uniforms.add("lightingAmbientSH_B2","vec4"),i.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||i.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function xl(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.uniforms.add("lightingSpecularStrength","float"),e.uniforms.add("lightingEnvironmentStrength","float"),e.code.add(d`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function _l(t){const e=t.fragment.code;e.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(d`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function _o(t){t.vertex.code.add(d`const float PI = 3.141592653589793;`),t.fragment.code.add(d`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Mi(t,e){const i=t.fragment.code;t.include(_o),e.pbrMode===L.Water||e.pbrMode===L.WaterOnIntegratedMesh?(i.add(d`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(d`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(d`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(d`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(d`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(t.include(_l),i.add(d`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(d`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(d`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function bo(t,e){const i=t.fragment;t.include(xl),t.include(yi,e),e.pbrMode!==L.Disabled&&t.include(Mi,e),t.include(gl,e),e.receiveShadows&&t.include(Si,e),i.uniforms.add("lightingGlobalFactor","float"),i.uniforms.add("ambientBoostFactor","float"),i.uniforms.add("hasFillLights","bool"),t.include(_o),i.code.add(d`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===L.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.code.add(d`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode===ge.Global?d`normalize(vPosWorld)`:d`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.code.add(d`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===L.Disabled||e.pbrMode===L.WaterOnIntegratedMesh?i.code.add(d`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(i.code.add(d`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(d`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),i.code.add(d`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.code.add(d`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(d`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===L.Schematic?d`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function bl(t,e){const i=d`
  /*
  *  ${e.name}
  *  ${e.output===_.Color?"RenderOutput: Color":e.output===_.Depth?"RenderOutput: Depth":e.output===_.Shadow?"RenderOutput: Shadow":e.output===_.Normal?"RenderOutput: Normal":e.output===_.Highlight?"RenderOutput: Highlight":""}
  */
  `;Mr()&&(t.fragment.code.add(i),t.vertex.code.add(i))}function Tl(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Wt(t){t.include(Tl),t.code.add(d`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${d.int(fe.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${d.int(fe.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(fe.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${d.int(fe.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(fe.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const Al=Ue.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class To{constructor(){this.includedModules=new Map}include(e,i){this.includedModules.has(e)?this.includedModules.get(e)!==i&&Al.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,i),e(this.builder,i))}}class Ao extends To{constructor(){super(...arguments),this.vertex=new dr,this.fragment=new dr,this.attributes=new Sl,this.varyings=new Rl,this.extensions=new ut,this.constants=new V}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const i=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),s=a.code.generateSource(),c=e==="vertex"?Ml:yl,l=this.constants.generateSource().concat(a.constants.generateSource());return`
${i.join(`
`)}

${c}

${l.join(`
`)}

${n.join(`
`)}

${r.join(`
`)}

${o.join(`
`)}

${s.join(`
`)}`}}class El{constructor(){this._entries=new Map}add(e,i,r){const o=`${e}_${i}_${r}`;return this._entries.set(o,{name:e,type:i,arraySize:r}),this}generateSource(){const e=i=>i?`[${i}]`:"";return Array.from(this._entries.values()).map(i=>`uniform ${i.type} ${i.name}${e(i.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class Cl{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class dr extends To{constructor(){super(...arguments),this.uniforms=new El,this.code=new Cl,this.constants=new V}get builder(){return this}}class Sl{constructor(){this._entries=new Array}add(e,i){this._entries.push([e,i])}generateSource(e){return e==="fragment"?[]:this._entries.map(i=>`attribute ${i[1]} ${i[0]};`)}}class Rl{constructor(){this._entries=new Array}add(e,i){this._entries.push([e,i])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class ut{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const i=e==="vertex"?ut.ALLOWLIST_VERTEX:ut.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(r=>i.includes(r)).map(r=>`#extension ${r} : enable`)}}ut.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ut.ALLOWLIST_VERTEX=[];class V{constructor(){this._entries=[]}add(e,i,r){let o="ERROR_CONSTRUCTOR_STRING";switch(i){case"float":o=V._numberToFloatStr(r);break;case"int":o=V._numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${V._numberToFloatStr(r[0])},                            ${V._numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${V._numberToFloatStr(r[0])},                            ${V._numberToFloatStr(r[1])},                            ${V._numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${V._numberToFloatStr(r[0])},                            ${V._numberToFloatStr(r[1])},                            ${V._numberToFloatStr(r[2])},                            ${V._numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${V._numberToIntStr(r[0])},                             ${V._numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${V._numberToIntStr(r[0])},                             ${V._numberToIntStr(r[1])},                             ${V._numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${V._numberToIntStr(r[0])},                             ${V._numberToIntStr(r[1])},                             ${V._numberToIntStr(r[2])},                             ${V._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${i}(${Array.prototype.map.call(r,a=>V._numberToFloatStr(a)).join(", ")})`}return this._entries.push(`const ${i} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const yl=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Ml=`precision highp float;
precision highp sampler2D;`;function Ol(t){const e=new Ao,i=e.vertex.code,r=e.fragment.code;e.include(bl,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const o=t.hasModelTransformation;return o&&e.vertex.uniforms.add("model","mat4"),e.include(Ri),e.varyings.add("vpos","vec3"),e.include(yt,t),e.include(no,t),e.include(so,t),t.output!==_.Color&&t.output!==_.Alpha||(e.include(Zt,t),e.include(Mt,{linearDepth:!1,hasModelTransformation:o}),t.normalType===Z.Attribute&&t.offsetBackfaces&&e.include(fo),e.include(vl,t),e.include(go,t),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("localvpos","vec3"),e.include(lt,t),e.include(mo,t),e.include(po,t),e.include(vo,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),i.add(d`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${d.float(Ti)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===Z.Attribute?d`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
          ${t.normalType===Z.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===_.Alpha&&(e.include(Je,t),e.include(Qe,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Wt),r.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===_.Color&&(e.include(Je,t),e.include(bo,t),e.include(yi,t),e.include(Qe,t),t.receiveShadows&&e.include(Si,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(co,t),e.include(Mi,t),e.fragment.include(Wt),e.include(un,t),r.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===Z.ScreenDerivative?d`
        vec3 normal = screenDerivativeNormal(localvpos);`:d`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===ge.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?d`
              mat3 tangentSpace = ${t.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===ge.Global?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(xo,t),e}const wl=Object.freeze({__proto__:null,build:Ol}),Pl=Ue.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Dt extends ll{initializeProgram(e){const i=Dt.shader.get(),r=this.configuration,o=i.build({oitEnabled:r.transparencyPassType===ce.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?L.Schematic:L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,hasModelTransformation:r.hasModelTransformation,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?Z.ScreenDerivative:Z.Attribute,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?de.Default:de.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:ao(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ho(e.rctx,o,Yt)}bindPass(e,i){var r,o;nl(this.program,i.camera.projectionMatrix);const a=this.configuration.output;this.configuration.hasModelTransformation&&(g(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):Pl.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===_.Depth||i.multipassTerrainEnabled||a===_.Shadow)&&this.program.setUniform2fv("nearFar",i.camera.nearFar),i.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",i.inverseViewport),Js(this.program,i)),a===_.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",or[e.colorMixMode])),a===_.Color?(i.lighting.setUniforms(this.program,!1,i.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",or[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&tl(this.program,e,this.configuration.isSchematic)):a===_.Highlight&&Qs(this.program,i),ol(this.program,e),qs(this.program,e,i),wn(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==X.Mask&&e.textureAlphaMode!==X.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),(r=i.shadowMap)==null||r.bind(this.program),(o=i.ssaoHelper)==null||o.bind(this.program,i.camera)}bindDraw(e){const i=this.configuration.instancedDoublePrecision?vi(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;sl(this.program,i,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===_.Color||this.configuration.output===_.Alpha||this.configuration.output===_.Depth&&this.configuration.screenSizePerspective||this.configuration.output===_.Normal&&this.configuration.screenSizePerspective||this.configuration.output===_.Highlight&&this.configuration.screenSizePerspective)&&al(this.program,i,e.camera.viewInverseTransposeMatrix),this.configuration.output===_.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Vs(this.program,i),Gs(this.program,this.configuration,e.slicePlane,{origin:i}),this.configuration.output===_.Color&&il(this.program,e,i)}_convertDepthTestFunction(e){return e===it.Lequal?be.LEQUAL:be.LESS}_setPipeline(e,i){const r=this.configuration,o=e===ce.NONE,a=e===ce.FrontFace;return Kn({blending:r.output!==_.Color&&r.output!==_.Alpha||!r.transparent?null:o?ss:ds(e),culling:Nl(r)&&zn(r.cullFace),depthTest:{func:fs(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:o||a?r.writeDepth&&Un:null,colorWrite:Gn,stencilWrite:r.sceneHasOcludees?dl:null,stencilTest:r.sceneHasOcludees?i?hl:ul:null,polygonOffset:o||a?null:ms(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,i){return i?this._occludeePipelineState:super.getPipelineState(e,i)}}function Nl(t){return t.cullFace?t.cullFace!==ue.None:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}Dt.shader=new uo(wl,()=>import("./DefaultMaterial.glsl.ef83128c.js"));class O extends cl{constructor(){super(...arguments),this.output=_.Color,this.alphaDiscardMode=X.Opaque,this.doubleSidedMode=te.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=ue.None,this.transparencyPassType=ce.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=it.Less}}P([N({count:_.COUNT})],O.prototype,"output",void 0),P([N({count:X.COUNT})],O.prototype,"alphaDiscardMode",void 0),P([N({count:te.COUNT})],O.prototype,"doubleSidedMode",void 0),P([N()],O.prototype,"isSchematic",void 0),P([N()],O.prototype,"vertexColors",void 0),P([N()],O.prototype,"offsetBackfaces",void 0),P([N()],O.prototype,"symbolColors",void 0),P([N()],O.prototype,"vvSize",void 0),P([N()],O.prototype,"vvColor",void 0),P([N()],O.prototype,"verticalOffset",void 0),P([N()],O.prototype,"receiveShadows",void 0),P([N()],O.prototype,"slicePlaneEnabled",void 0),P([N()],O.prototype,"sliceHighlightDisabled",void 0),P([N()],O.prototype,"receiveAmbientOcclusion",void 0),P([N()],O.prototype,"screenSizePerspective",void 0),P([N()],O.prototype,"textureAlphaPremultiplied",void 0),P([N()],O.prototype,"hasColorTexture",void 0),P([N()],O.prototype,"usePBR",void 0),P([N()],O.prototype,"hasMetalnessAndRoughnessTexture",void 0),P([N()],O.prototype,"hasEmissionTexture",void 0),P([N()],O.prototype,"hasOcclusionTexture",void 0),P([N()],O.prototype,"hasNormalTexture",void 0),P([N()],O.prototype,"instanced",void 0),P([N()],O.prototype,"instancedColor",void 0),P([N()],O.prototype,"instancedDoublePrecision",void 0),P([N()],O.prototype,"vertexTangents",void 0),P([N()],O.prototype,"normalsTypeDerivate",void 0),P([N()],O.prototype,"writeDepth",void 0),P([N()],O.prototype,"sceneHasOcludees",void 0),P([N()],O.prototype,"transparent",void 0),P([N()],O.prototype,"enableOffset",void 0),P([N({count:ue.COUNT})],O.prototype,"cullFace",void 0),P([N({count:ce.COUNT})],O.prototype,"transparencyPassType",void 0),P([N()],O.prototype,"multipassTerrainEnabled",void 0),P([N()],O.prototype,"cullAboveGround",void 0),P([N()],O.prototype,"hasModelTransformation",void 0),P([N({count:it.COUNT})],O.prototype,"customDepthTest",void 0);function Dl(t){const e=new Ao,i=e.vertex.code,r=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),e.include(Ri),e.varyings.add("vpos","vec3"),e.include(yt,t),e.include(no,t),e.include(so,t),t.output!==_.Color&&t.output!==_.Alpha||(e.include(Zt,t),e.include(Mt,{linearDepth:!1}),t.offsetBackfaces&&e.include(fo),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.include(lt,t),e.include(mo,t),e.include(po,t),e.include(vo,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),i.add(d`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${d.float(Ti)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassTerrainEnabled?d`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===_.Alpha&&(e.include(Je,t),e.include(Qe,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(Wt),r.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===_.Color&&(e.include(Je,t),e.include(bo,t),e.include(yi,t),e.include(Qe,t),t.receiveShadows&&e.include(Si,t),t.multipassTerrainEnabled&&(e.fragment.include(kt),e.include(Vt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(co,t),e.include(Mi,t),e.fragment.include(Wt),r.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===ge.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${d`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===ge.Global?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(xo,t),e}const Fl=Object.freeze({__proto__:null,build:Dl});class Qt extends Dt{initializeProgram(e){const i=Qt.shader.get(),r=this.configuration,o=i.build({oitEnabled:r.transparencyPassType===ce.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Z.Attribute,doubleSidedMode:te.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?de.Default:de.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:ao(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ho(e.rctx,o,Yt)}}Qt.shader=new uo(Fl,()=>import("./RealisticTree.glsl.88c899fb.js"));class Eo extends Fn{constructor(e){super(e,Il),this.supportsEdges=!0,this.techniqueConfig=new O,this.vertexBufferLayout=$l(this.parameters),this.instanceBufferLayout=e.instanced?zl(this.parameters):null}isVisibleInPass(e){return e!==ei.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==ei.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==ei.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const i=e.instanced,r=e.vertexColors,o=e.symbolColors,a=!!i&&i.indexOf("color")>-1,n=e.vvColorEnabled,s=e.colorMixMode==="replace",c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(a||n||o)?!!s||c:r?s?l:c:a||n||o?!!s||c:s?l:c}getTechniqueConfig(e,i){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=this.parameters.verticalOffset!==null,this.techniqueConfig.screenSizePerspective=this.parameters.screenSizePerspective!==null,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate=this.parameters.normals==="screenDerivative",this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,g(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?ue.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=i.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=i.cullAboveGround,this.techniqueConfig.hasModelTransformation=g(this.parameters.modelTransformation),e!==_.Color&&e!==_.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=te.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?te.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?te.WindingOrder:te.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!i.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=i.transparencyPassType,this.techniqueConfig.enableOffset=i.camera.relativeElevation<us),this.techniqueConfig}intersect(e,i,r,o,a,n,s){if(this.parameters.verticalOffset!==null){const c=o.camera;ct(ni,r[12],r[13],r[14]);let l=null;switch(o.viewingMode){case ge.Global:l=qt(ur,ni);break;case ge.Local:l=Et(ur,Hl)}let u=0;if(this.parameters.verticalOffset!==null){const f=ne(Vl,ni,c.eye),m=Me(f),x=et(f,f,1/m);let h=null;this.parameters.screenSizePerspective&&(h=gi(l,x)),u+=On(c,m,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective)}et(l,l,u),ia(ai,l,o.transform.inverseRotation),a=ne(Ul,a,ai),n=ne(Gl,n,ai)}En(e,i,o,a,n,Fs(o.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Lt.TRANSPARENT_MATERIAL:Lt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Lt.OPAQUE_MATERIAL)||e===Lt.DRAPED_MATERIAL}createGLMaterial(e){return e.output===_.Color||e.output===_.Alpha||e.output===_.Depth||e.output===_.Normal||e.output===_.Shadow||e.output===_.Highlight?new Ll(e):null}createBufferWriter(){return new Bl(this.vertexBufferLayout,this.instanceBufferLayout)}}class Ll extends fn{constructor(e){super(q(q({},e),e.material.parameters))}updateParameters(e){const i=this._material.parameters;return this.updateTexture(i.textureId),this.ensureTechnique(i.treeRendering?Qt:Dt,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==_.Color&&this._output!==_.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,i){i.bindPass(this._material.parameters,e),this.bindTextures(i.program)}}const Il=q({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:ue.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Er(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:it.Less,textureAlphaMode:X.Blend,textureAlphaCutoff:hn,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},Ln);class Bl{constructor(e,i){this.vertexBufferLayout=e,this.instanceBufferLayout=i}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,i,r,o){Us(i,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}function $l(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,i=Or().vec3f(p.POSITION).vec3f(p.NORMAL);return t.vertexTangents&&i.vec4f(p.TANGENT),e&&i.vec2f(p.UV0),t.vertexColors&&i.vec4u8(p.COLOR),t.symbolColors&&i.vec4u8(p.SYMBOLCOLOR),i}function zl(t){let e=Or();return e=t.instancedDoublePrecision?e.vec3f(p.MODELORIGINHI).vec3f(p.MODELORIGINLO).mat3f(p.MODEL).mat3f(p.MODELNORMAL):e.mat4f(p.MODEL).mat4f(p.MODELNORMAL),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f(p.INSTANCECOLOR)),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f(p.INSTANCEFEATUREATTRIBUTE)),e}const Ul=H(),Gl=H(),Hl=vi(0,0,1),ur=H(),ai=H(),ni=H(),Vl=H(),Re=Ue.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function kl(t,e){const i=await Wl(t,e);return{resource:i,textures:await Kl(i.textureDefinitions,e)}}async function Wl(t,e){const i=g(e)&&e.streamDataRequester;if(i)return ql(t,i,e);const r=await _r(hr(t,ra(e)));if(r.ok===!0)return r.value.data;br(r.error),Co(r.error)}async function ql(t,e,i){const r=await _r(e.request(t,"json",i));if(r.ok===!0)return r.value;br(r.error),Co(r.error.details.url)}function Co(t){throw new pr("",`Request for object resource failed: ${t}`)}function Xl(t){const e=t.params,i=e.topology;let r=!0;switch(e.vertexAttributes||(Re.warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const s=a[n];s&&s.values?(s.valueType!=null&&s.valueType!=="UInt32"&&(Re.warn(`Unsupported indexed geometry indices type '${s.valueType}', only UInt32 is currently supported`),r=!1),s.valuesPerElement!=null&&s.valuesPerElement!==1&&(Re.warn(`Unsupported indexed geometry values per element '${s.valuesPerElement}', only 1 is currently supported`),r=!1)):(Re.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),r=!1)}}else Re.warn("Indexed geometries must specify faces"),r=!1;break}default:Re.warn(`Unsupported topology '${i}'`),r=!1}t.params.material||(Re.warn("Geometry requires material"),r=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(Re.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function jl(t,e){const i=[],r=[],o=[],a=[],n=t.resource,s=Sr.parse(n.version||"1.0","wosr");Ql.validate(s);const c=n.model.name,l=n.model.geometries,u=n.materialDefinitions,f=t.textures;let m=0;const x=new Map;for(let h=0;h<l.length;h++){const T=l[h];if(!Xl(T))continue;const E=Zl(T),A=T.params.vertexAttributes,G=[];for(const v in A){const R=A[v],I=R.values;G.push([v,{data:I,size:R.valuesPerElement,exclusive:!0}])}const M=[];if(T.params.topology!=="PerAttributeArray"){const v=T.params.faces;for(const R in v)M.push([R,new Uint32Array(v[R].values)])}const y=f&&f[E.texture];if(y&&!x.has(E.texture)){const{image:v,params:R}=y,I=new K(v,R);a.push(I),x.set(E.texture,I)}const F=x.get(E.texture),C=F?F.id:void 0;let S=o[E.material]?o[E.material][E.texture]:null;if(!S){const v=u[E.material.substring(E.material.lastIndexOf("/")+1)].params;v.transparency===1&&(v.transparency=0);const R=y&&y.alphaChannelUsage,I=v.transparency>0||R==="transparency"||R==="maskAndTransparency",B=y?So(y.alphaChannelUsage):void 0,D={ambient:$i(v.diffuse),diffuse:$i(v.diffuse),opacity:1-(v.transparency||0),transparent:I,textureAlphaMode:B,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:ue.None,colorMixMode:v.externalColorMixMode||"tint",textureAlphaPremultiplied:!!y&&!!y.params.preMultiplyAlpha};g(e)&&e.materialParamsMixin&&Object.assign(D,e.materialParamsMixin),S=new Eo(D),o[E.material]||(o[E.material]={}),o[E.material][E.texture]=S}r.push(S);const w=new jt(G,M);m+=M.position?M.position.length:0,i.push(w)}return{name:c,stageResources:{textures:a,materials:r,geometries:i},pivotOffset:n.model.pivotOffset,boundingBox:Yl(i),numberOfVertices:m,lodThreshold:null}}function Yl(t){const e=Tr();return t.forEach(i=>{const r=i.boundingInfo;g(r)&&(Gt(e,r.getBBMin()),Gt(e,r.getBBMax()))}),e}async function Kl(t,e){const i=[];for(const a in t){const n=t[a],s=n.images[0].data;if(!s){Re.warn("Externally referenced texture data is not yet supported");continue}const c=n.encoding+";base64,"+s,l="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Ie.REPEAT,t:Ie.REPEAT},preMultiplyAlpha:So(u)!==X.Opaque},m=g(e)&&e.disableTextures?Promise.resolve(null):wr(c,e);i.push(m.then(x=>({refId:l,image:x,params:f,alphaChannelUsage:u})))}const r=await Promise.all(i),o={};for(const a of r)o[a.refId]=a;return o}function So(t){switch(t){case"mask":return X.Mask;case"maskAndTransparency":return X.MaskBlend;case"none":return X.Opaque;default:return X.Blend}}function Zl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Ql=new Sr(1,2,"wosr");async function Jl(t,e){const i=Ro(No(t));if(i.fileType==="wosr"){const c=await(e.cache?e.cache.loadWOSR(i.url,e):kl(i.url,e)),l=jl(c,e);return{lods:[l],referenceBoundingBox:l.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:c.remove}}const r=await(e.cache?e.cache.loadGLTF(i.url,e,e.usePBR):pa(new va(e.streamDataRequester),i.url,e,e.usePBR)),o=oa(r.model.meta,"ESRI_proxyEllipsoid");r.meta.isEsriSymbolResource&&g(o)&&r.meta.uri.indexOf("/RealisticTrees/")!==-1&&ic(r,o);const a=r.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:r.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},n=vt(q({},e.materialParamsMixin),{treeRendering:r.customMeta.esriTreeRendering});if(i.specifiedLodIndex!=null){const c=zt(r,a,n,i.specifiedLodIndex);let l=c[0].boundingBox;return i.specifiedLodIndex!==0&&(l=zt(r,a,n,0)[0].boundingBox),{lods:c,referenceBoundingBox:l,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1,remove:r.remove}}const s=zt(r,a,n);return{lods:s,referenceBoundingBox:s[0].boundingBox,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1,remove:r.remove}}function Ro(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function zt(t,e,i,r){const o=t.model,a=Er(),n=new Array,s=new Map,c=new Map;return o.lods.forEach((l,u)=>{if(r!==void 0&&u!==r)return;const f={name:l.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:g(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Tr()};n.push(f),l.parts.forEach(m=>{const x=m.material+(m.attributes.normal?"_normal":"")+(m.attributes.color?"_color":"")+(m.attributes.texCoord0?"_texCoord0":"")+(m.attributes.tangent?"_tangent":""),h=o.materials.get(m.material),T=g(m.attributes.texCoord0),E=g(m.attributes.normal),A=ec(h.alphaMode);if(!s.has(x)){if(T){if(g(h.textureColor)&&!c.has(h.textureColor)){const U=o.textures.get(h.textureColor),he=vt(q({},U.parameters),{preMultiplyAlpha:A!==X.Opaque});c.set(h.textureColor,new K(U.data,he))}if(g(h.textureNormal)&&!c.has(h.textureNormal)){const U=o.textures.get(h.textureNormal);c.set(h.textureNormal,new K(U.data,U.parameters))}if(g(h.textureOcclusion)&&!c.has(h.textureOcclusion)){const U=o.textures.get(h.textureOcclusion);c.set(h.textureOcclusion,new K(U.data,U.parameters))}if(g(h.textureEmissive)&&!c.has(h.textureEmissive)){const U=o.textures.get(h.textureEmissive);c.set(h.textureEmissive,new K(U.data,U.parameters))}if(g(h.textureMetallicRoughness)&&!c.has(h.textureMetallicRoughness)){const U=o.textures.get(h.textureMetallicRoughness);c.set(h.textureMetallicRoughness,new K(U.data,U.parameters))}}const v=h.color[0]**(1/rt),R=h.color[1]**(1/rt),I=h.color[2]**(1/rt),B=h.emissiveFactor[0]**(1/rt),D=h.emissiveFactor[1]**(1/rt),z=h.emissiveFactor[2]**(1/rt),$=g(h.textureColor)&&T?c.get(h.textureColor):null;s.set(x,new Eo(q(vt(q({},e),{transparent:A===X.Blend,customDepthTest:it.Lequal,textureAlphaMode:A,textureAlphaCutoff:h.alphaCutoff,diffuse:[v,R,I],ambient:[v,R,I],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?ue.None:ue.Back,vertexColors:!!m.attributes.color,vertexTangents:!!m.attributes.tangent,normals:E?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:g($)?$.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:g(h.textureNormal)&&T?c.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:g($)&&!!$.params.preMultiplyAlpha,occlusionTextureId:g(h.textureOcclusion)&&T?c.get(h.textureOcclusion).id:void 0,emissiveTextureId:g(h.textureEmissive)&&T?c.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:g(h.textureMetallicRoughness)&&T?c.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[B,D,z],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1}),i)))}const G=tc(m.indices||m.attributes.position.count,m.primitiveType),M=m.attributes.position.count,y=Ke(at,M);na(y,m.attributes.position,m.transform);const F=[[p.POSITION,{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],C=[[p.POSITION,G]];if(g(m.attributes.normal)){const v=Ke(at,M);Ui(a,m.transform),sa(v,m.attributes.normal,a),F.push([p.NORMAL,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.NORMAL,G])}if(g(m.attributes.tangent)){const v=Ke(di,M);Ui(a,m.transform),ga(v,m.attributes.tangent,a),F.push([p.TANGENT,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.TANGENT,G])}if(g(m.attributes.texCoord0)){const v=Ke(Cr,M);xa(v,m.attributes.texCoord0),F.push([p.UV0,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.UV0,G])}if(g(m.attributes.color)){const v=Ke(Ot,M);if(m.attributes.color.elementCount===4)m.attributes.color instanceof di?ki(v,m.attributes.color,255):m.attributes.color instanceof Ot?_a(v,m.attributes.color):m.attributes.color instanceof ca&&ki(v,m.attributes.color,1/256);else{ba(v,255,255,255,255);const R=new Hi(v.buffer,0,4);m.attributes.color instanceof at?Gi(R,m.attributes.color,255):m.attributes.color instanceof Hi?la(R,m.attributes.color):m.attributes.color instanceof da&&Gi(R,m.attributes.color,1/256)}F.push([p.COLOR,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.COLOR,G])}const S=new jt(F,C);f.stageResources.geometries.push(S),f.stageResources.materials.push(s.get(x)),T&&(g(h.textureColor)&&f.stageResources.textures.push(c.get(h.textureColor)),g(h.textureNormal)&&f.stageResources.textures.push(c.get(h.textureNormal)),g(h.textureOcclusion)&&f.stageResources.textures.push(c.get(h.textureOcclusion)),g(h.textureEmissive)&&f.stageResources.textures.push(c.get(h.textureEmissive)),g(h.textureMetallicRoughness)&&f.stageResources.textures.push(c.get(h.textureMetallicRoughness))),f.numberOfVertices+=M;const w=S.boundingInfo;g(w)&&(Gt(f.boundingBox,w.getBBMin()),Gt(f.boundingBox,w.getBBMax()))})}),n}function ec(t){switch(t){case"BLEND":return X.Blend;case"MASK":return X.Mask;case"OPAQUE":case null:case void 0:return X.Opaque}}function tc(t,e){switch(e){case Ct.TRIANGLES:return Ea(t);case Ct.TRIANGLE_STRIP:return Aa(t);case Ct.TRIANGLE_FAN:return Ta(t)}}function ic(t,e){for(let i=0;i<t.model.lods.length;++i){const r=t.model.lods[i];t.customMeta.esriTreeRendering=!0;for(const o of r.parts){const a=o.attributes.normal;if(j(a))return;const n=o.attributes.position,s=n.count,c=H(),l=H(),u=H(),f=Ke(Ot,s),m=Ke(at,s),x=aa(Ar(),o.transform);for(let h=0;h<s;h++){n.getVec(h,l),a.getVec(h,c),ot(l,l,o.transform),ne(u,l,e.center),zi(u,u,e.radius);const T=u[2],E=Me(u),A=Math.min(.45+.55*E*E,1);zi(u,u,e.radius),ot(u,u,x),qt(u,u),i+1!==t.model.lods.length&&t.model.lods.length>1&&si(u,u,c,T>-1?.2:Math.min(-4*T-3.8,1)),m.setVec(h,u),f.set(h,0,255*A),f.set(h,1,255*A),f.set(h,2,255*A),f.set(h,3,255)}o.attributes.normal=m,o.attributes.color=f}}}var Tc=Object.freeze(Object.defineProperty({__proto__:null,fetch:Jl,gltfToEngineResources:zt,parseUrl:Ro},Symbol.toStringTag,{value:"Module"}));export{Ol as $,Dl as _,Tc as o};
