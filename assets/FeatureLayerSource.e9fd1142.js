var z=Object.defineProperty,U=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var N=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&N(e,r,t[r]);if(A)for(var r of A(t))X.call(t,r)&&N(e,r,t[r]);return e},c=(e,t)=>U(e,L(t));import{S as Y,p as K,C as f,q as b,u as H,w as T,M as D,x as W,t as q,y as tt,z as w,A as $,r as m,G as et,v as rt,B as st,b as at,D as j,E as p,F,K as k,H as Q,I as nt,J as E,L as ot,s as x,N as it,O as ut,U as lt,P as dt,Q as ct,T as ht,k as yt,g as pt,d as mt,n as G}from"./index.32114bf6.js";import{n as ft}from"./clientSideDefaults.836210cb.js";import{t as C,x as gt,d as Ft}from"./query.18f36fe5.js";import{l as bt,a as Rt,n as Ot,s as St}from"./executeQueryJSON.fcb82987.js";import{m as It,n as qt}from"./featureConversionUtils.a0fa4a55.js";import{v as _t}from"./normalizeUtils.a3d136fe.js";import"./QueryEngineCapabilities.650d7541.js";import"./pbfQueryUtils.f1611ca0.js";import"./pbf.816330f2.js";import"./OptimizedGeometry.8b0eb5ae.js";import"./OptimizedFeatureSet.ec9a3456.js";function xt(e){const t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function M(e,t){const r={};for(const s of e){const{parentObjectId:a,parentGlobalId:n,attachmentInfos:o}=s;for(const l of o){const{id:u}=l,d=Y(K(`${t}/${a}/attachments/${u}`)),h=bt.fromJSON(l);h.set({url:d,parentObjectId:a,parentGlobalId:n}),r[a]?r[a].push(h):r[a]=[h]}}return r}function wt(e,t,r){let s={query:C(i(c(i({},e.query),{f:"json"}),xt(t)))};return r&&(s=c(i(i({},r),s),{query:i(i({},r.query),s.query)})),f(e.path+"/queryAttachments",s)}async function jt(e,t,r){const s=b(e);return wt(s,H.from(t),i({},r)).then(a=>M(a.data.attachmentGroups,s.path))}async function vt(e,t,r){const s=b(e);return gt(s,T.from(t),i({},r)).then(a=>({count:a.data.count,extent:D.fromJSON(a.data.extent)}))}function Et(e,t){return t}function P(e,t,r,s){switch(r){case 0:return _(e,t+s,0);case 1:return e.originPosition==="lowerLeft"?_(e,t+s,1):$t(e,t+s,1)}}function B(e,t,r,s){return r===2?_(e,t,2):P(e,t,r,s)}function Tt(e,t,r,s){return r===2?_(e,t,3):P(e,t,r,s)}function Dt(e,t,r,s){return r===3?_(e,t,3):B(e,t,r,s)}function _({translate:e,scale:t},r,s){return e[s]+r*t[s]}function $t({translate:e,scale:t},r,s){return e[s]-r*t[s]}class Ct{constructor(t){this.options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=Et,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const r=W(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!q(r))for(const s of t.features)r(s.geometry)}createSpatialReference(){return{}}addField(t,r){t.fields.push(r);const s=t.fields.map(a=>a.name);this._attributesConstructor=function(){for(const a of s)this[a]=null}}addFeature(t,r){t.features.push(r)}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this._deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(r,s,a)=>this.addCoordinatePoint(r,s,a),this.createGeometry=r=>this.createPointGeometry(r);break;case"esriGeometryPolygon":this.addCoordinate=(r,s,a)=>this._addCoordinatePolygon(r,s,a),this.createGeometry=r=>this._createPolygonGeometry(r);break;case"esriGeometryPolyline":this.addCoordinate=(r,s,a)=>this._addCoordinatePolyline(r,s,a),this.createGeometry=r=>this._createPolylineGeometry(r);break;case"esriGeometryMultipoint":this.addCoordinate=(r,s,a)=>this._addCoordinateMultipoint(r,s,a),this.createGeometry=r=>this._createMultipointGeometry(r);break;default:tt(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,r,s){this.lengths.length===0&&(this.toAddInCurrentPath=r),this.lengths.push(r)}addQueryGeometry(t,r){const{queryGeometry:s,queryGeometryType:a}=r,n=It(s.clone(),s,!1,!1,this.transform),o=qt(n,a,!1,!1);t.queryGeometryType=a,t.queryGeometry=i({},o)}createPointGeometry(t){const r={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(r.z=0),t.hasM&&(r.m=0),r}addCoordinatePoint(t,r,s){switch(r=this.applyTransform(this.transform,r,s,0),s){case 0:t.x=r;break;case 1:t.y=r;break;case 2:"z"in t?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,r){let s=0;return r<=1&&(s=this.previousCoordinate[r],this.previousCoordinate[r]+=t),this.applyTransform(this.transform,t,r,s)}_addCoordinatePolyline(t,r,s){this._dehydratedAddPointsCoordinate(t.paths,r,s)}_addCoordinatePolygon(t,r,s){this._dehydratedAddPointsCoordinate(t.rings,r,s)}_addCoordinateMultipoint(t,r,s){s===0&&t.points.push([]);const a=this._transformPathLikeValue(r,s);t.points[t.points.length-1].push(a)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,r,s){s===0&&this.toAddInCurrentPath--==0&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const a=this._transformPathLikeValue(r,s),n=t[t.length-1];s===0&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=a}_deriveApplyTransform(t){const{hasZ:r,hasM:s}=t;return r&&s?Dt:r?B:s?Tt:P}}async function Pt(e,t,r){const s=b(e),a=i({},r),n=T.from(t),o=!n.quantizationParameters,{data:l}=await Ft(s,n,new Ct({sourceSpatialReference:n.sourceSpatialReference,applyTransform:o}),a);return l}function At(e,t){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||t!=null&&t.returnCountOnly?delete r.outFields:r.outFields.indexOf("*")!==-1?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function Nt(e,t,r){const s=await V(e,t,r),a=s.data,n=a.geometryType,o=a.spatialReference,l={};for(const u of a.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:o,hasZ:!!a.hasZ,hasM:!!a.hasM,features:u.relatedRecords};if(u.objectId!=null)l[u.objectId]=d;else for(const h in u)u.hasOwnProperty(h)&&h!=="relatedRecords"&&(l[u[h]]=d)}return c(i({},s),{data:l})}async function Gt(e,t,r){const s=await V(e,t,r,{returnCountOnly:!0}),a=s.data,n={};for(const o of a.relatedRecordGroups)o.objectId!=null&&(n[o.objectId]=o.count);return c(i({},s),{data:n})}async function V(e,t,r={},s){const a=C(i(i(c(i({},e.query),{f:"json"}),s),At(t,s)));return f(e.path+"/queryRelatedRecords",c(i({},r),{query:i(i({},r.query),a)}))}async function Jt(e,t,r){t=w.from(t);const s=b(e);return Nt(s,t,r).then(a=>{const n=a.data,o={};return Object.keys(n).forEach(l=>o[l]=$.fromJSON(n[l])),o})}async function kt(e,t,r){t=w.from(t);const s=b(e);return Gt(s,t,i({},r)).then(a=>a.data)}const J="Layer does not support extent calculation.";function Qt(e,t){var r,s;const a=e.geometry,n=e.toJSON(),o=n;if(m(a)&&(o.geometry=JSON.stringify(a),o.geometryType=rt(a),o.inSR=a.spatialReference.wkid||JSON.stringify(a.spatialReference)),(r=n.topFilter)!=null&&r.groupByFields&&(o.topFilter.groupByFields=n.topFilter.groupByFields.join(",")),(s=n.topFilter)!=null&&s.orderByFields&&(o.topFilter.orderByFields=n.topFilter.orderByFields.join(",")),n.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),n.outFields&&!(t!=null&&t.returnCountOnly||t!=null&&t.returnExtentOnly||t!=null&&t.returnIdsOnly)?n.outFields.indexOf("*")!==-1?o.outFields="*":o.outFields=n.outFields.join(","):delete o.outFields,n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):a&&n.returnGeometry&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.timeExtent){const l=n.timeExtent,{start:u,end:d}=l;u==null&&d==null||(o.time=u===d?u:`${u==null?"null":u},${d==null?"null":d}`),delete n.timeExtent}return o}async function Mt(e,t,r,s){const a=await v(e,t,"json",s);return st(t,r,a.data),a}async function Bt(e,t,r){return m(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):v(e,t,"json",r,{returnIdsOnly:!0})}async function Vt(e,t,r){return m(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):v(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(s=>{const a=s.data;if(a.hasOwnProperty("extent"))return s;if(a.features)throw new Error(J);if(a.hasOwnProperty("count"))throw new Error(J);return s})}function zt(e,t,r){return m(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):v(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function v(e,t,r,s={},a={}){const n=typeof e=="string"?at(e):e,o=t.geometry?[t.geometry]:[];return s.responseType=r==="pbf"?"array-buffer":"json",_t(o,null,s).then(l=>{const u=l&&l[0];m(u)&&((t=t.clone()).geometry=u);const d=C(i(i(c(i({},n.query),{f:r}),a),Qt(t,a)));return f(et(n.path,"queryTopFeatures"),c(i({},s),{query:i(i({},d),s.query)}))})}async function Ut(e,t,r,s){const a=b(e),n=i({},s),{data:o}=await Mt(a,j.from(t),r,n);return $.fromJSON(o)}async function Lt(e,t,r){const s=b(e);return(await Bt(s,j.from(t),i({},r))).data.objectIds}async function Zt(e,t,r){const s=b(e),a=await Vt(s,j.from(t),i({},r));return{count:a.data.count,extent:D.fromJSON(a.data.extent)}}async function Xt(e,t,r){const s=b(e);return(await zt(s,j.from(t),i({},r))).data.count}let g=class extends nt{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(e,t){return this.executeJSON(e,t).then(r=>this.featureSetFromJSON(e,r,t))}async executeJSON(e,t){var r;const s=i(i({},this.requestOptions),t),a=this._normalizeQuery(e),n=((r=e.outStatistics)==null?void 0:r[0])!=null,o=E("featurelayer-pbf-statistics"),l=!n||o;let u;if(this.format==="pbf"&&l)try{u=await Pt(this.url,a,s)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.format="json"}return this.format!=="json"&&l||(u=await Rt(this.url,a,s)),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,r){if(!(this._queryIs3DObjectFormat(e)&&m(this.infoFor3D)&&t.features&&t.features.length))return $.fromJSON(t);const{meshFeatureSetFromJSON:s}=await ot(import("./meshFeatureSet.6275c6f2.js").then(function(a){return a.a}),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){const r=i(i({},this.requestOptions),t),s=this._normalizeQuery(e);return Ot(this.url,s,r)}executeForExtent(e,t){const r=i(i({},this.requestOptions),t),s=this._normalizeQuery(e);return vt(this.url,s,r)}executeForIds(e,t){const r=i(i({},this.requestOptions),t),s=this._normalizeQuery(e);return St(this.url,s,r)}executeRelationshipQuery(e,t){e=w.from(e);const r=i(i({},this.requestOptions),t);return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),Jt(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=w.from(e);const r=i(i({},this.requestOptions),t);return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),kt(this.url,e,r)}executeAttachmentQuery(e,t){const r=i(i({},this.requestOptions),t);return jt(this.url,e,r)}executeTopFeaturesQuery(e,t){const r=i(i({},this.requestOptions),t);return Ut(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r=i(i({},this.requestOptions),t);return Lt(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r=i(i({},this.requestOptions),t);return Zt(this.parsedUrl,e,r)}executeForTopCount(e,t){const r=i(i({},this.requestOptions),t);return Xt(this.parsedUrl,e,r)}_normalizeQuery(e){let t=T.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?k.from(e.dynamicDataSource):this.dynamicDataSource),m(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;for(const r of this.infoFor3D.queryFormats){if(r.id==="3D_glb"){t.formatOf3DObjects=r.id;break}r.id!=="3D_gltf"||t.formatOf3DObjects||(t.formatOf3DObjects=r.id)}if(!t.formatOf3DObjects)throw new x("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(q(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,q(t.outFields)&&(t.outFields=[]);const{originX:r,originY:s,originZ:a,translationX:n,translationY:o,translationZ:l,scaleX:u,scaleY:d,scaleZ:h,rotationX:O,rotationY:S,rotationZ:y,rotationDeg:R}=this.infoFor3D.transformFieldRoles;t.outFields.push(r,s,a,n,o,l,u,d,h,O,S,y,R)}}return t}_normalizeFields(e){if(m(this.fieldsIndex)&&m(e))for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return m(this.infoFor3D)&&e.returnGeometry&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};p([F({type:k})],g.prototype,"dynamicDataSource",void 0),p([F()],g.prototype,"fieldsIndex",void 0),p([F()],g.prototype,"format",void 0),p([F()],g.prototype,"gdbVersion",void 0),p([F()],g.prototype,"infoFor3D",void 0),p([F()],g.prototype,"sourceSpatialReference",void 0),g=p([Q("esri.tasks.QueryTask")],g);const Yt=g,Kt=new it({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function Ht(e){return typeof e=="string"?G(e)||{data:e}:new Promise((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(G(s.result)),s.onerror=a=>r(a)})}const Wt=new Set(["Feature Layer","Table"]);let I=class extends ut{constructor(){super(...arguments),this.type="feature-layer",this.refresh=lt(async()=>{var e,t;await this.load();const r=(e=this.sourceJSON.editingInfo)==null?void 0:e.lastEditDate;if(r==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=r!==((t=this.sourceJSON.editingInfo)==null?void 0:t.lastEditDate);return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(e){const t=m(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:n,fieldsIndex:o}=this.layer,l=E("featurelayer-pbf")&&e&&q(s)?"pbf":"json";return new Yt({url:t.path,format:l,fieldsIndex:o,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,a.query);try{const o=await f(s,{body:n});return this._createFeatureEditResult(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(e,t,r){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(r,n.query);try{const l=await f(a,{body:o});return this._createFeatureEditResult(l.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(s,l)}}async applyEdits(e,t){await this.load();const r=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),a=this._getFeatureIds(e.deleteFeatures,t==null?void 0:t.globalIdUsed);dt(r,s,this.layer.spatialReference);const n=[],o=[],l=[...e.deleteAttachments];for(const y of e.addAttachments)n.push(await this._serializeAttachment(y));for(const y of e.updateAttachments)o.push(await this._serializeAttachment(y));const u=n.length||o.length||l.length?{adds:n,updates:o,deletes:l}:null,d={gdbVersion:(t==null?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:t==null?void 0:t.rollbackOnFailureEnabled,useGlobalIds:t==null?void 0:t.globalIdUsed,returnEditMoment:t==null?void 0:t.returnEditMoment,usePreviousEditMoment:t==null?void 0:t.usePreviousEditMoment,sessionId:t==null?void 0:t.sessionId};t!=null&&t.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:s,deletes:a,attachments:u}]),d.returnServiceEditsOption=Kt.toJSON(t==null?void 0:t.returnServiceEditsOption),d.returnServiceEditsInSourceSR=t==null?void 0:t.returnServiceEditsInSourceSR):(d.adds=r.length?JSON.stringify(r):null,d.updates=s.length?JSON.stringify(s):null,d.deletes=a.length?t!=null&&t.globalIdUsed?JSON.stringify(a):a.join(","):null,d.attachments=u&&JSON.stringify(u));const h=this._getLayerRequestOptions({method:"post",query:d}),O=t!=null&&t.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,S=await f(O+"/applyEdits",h);return this._createEditsResult(S)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await f(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(r,a)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const r=this._getLayerRequestOptions(c(i({},e),{query:{returnUpdates:!0}})),{layerId:s,url:a}=this.layer,{data:n}=await f(`${a}/${s}`,r),{id:o,extent:l,fullExtent:u,timeExtent:d}=n,h=l||u;return{id:o,fullExtent:h&&D.fromJSON(h),timeExtent:d&&ct.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(e,t={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const a=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:n}=e,o=[];for(const l of n){const u=s+"/"+l+"/attachments";o.push(f(u,a))}return Promise.all(o).then(l=>n.map((u,d)=>({parentObjectId:u,attachmentInfos:l[d].data.attachmentInfos}))).then(l=>M(l,s))}return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,c(i({},t),{query:this._createRequestQueryOptions(t)}))}_createRequestQueryOptions(e){const t=i(c(i({},this.layer.customParameters),{token:this.layer.apiKey}),e==null?void 0:e.query);return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:E("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s}this.sourceJSON=this._patchServiceJSON(e);const r=e.type;if(!Wt.has(r))throw new x("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){var t;if(e.type!=="Table"&&e.geometryType&&(e==null||(t=e.drawingInfo)==null||!t.renderer)&&!e.defaultSymbol){const r=ft(e.geometryType).renderer;ht("drawingInfo.renderer",r,e)}return e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t,attributes:r}=e;return q(t)?{attributes:r}:t.type==="mesh"||t.type==="extent"?null:{geometry:t.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:n,data:o,uploadId:l}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),l)u.uploadId=l;else if(o){const d=await Ht(o);u.contentType=d.mediaType,u.data=d.data,o instanceof File&&(u.name=o.name)}return a&&(u.name=a),n&&(u.contentType=n),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map(r=>r.attributes&&r.attributes[t])}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map(t=>t.objectId)}_getGlobalIdsFromFeatureIdentifier(e){return e.map(t=>t.globalId)}_createEditsResult(e){var t;const r=e.data,{layerId:s}=this.layer,a=[];let n=null;if(Array.isArray(r))for(const u of r)a.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===s&&(n={addResults:u.addResults,updateResults:u.updateResults,deleteResults:u.deleteResults,attachments:u.attachments,editMoment:u.editMoment});else n=r;const o=(t=n)==null?void 0:t.attachments,l={addFeatureResults:n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(n.editMoment&&(l.editMoment=n.editMoment),a.length>0){l.editedFeatureResults=[];for(const u of a){const{adds:d,updates:h,deletes:O,spatialReference:S}=u.editedFeatures,y=S?new yt(S):null;l.editedFeatureResults.push({layerId:u.id,editedFeatures:{adds:(d==null?void 0:d.map(R=>this._createEditedFeature(R,y)))||[],updates:(h==null?void 0:h.map(R=>({original:this._createEditedFeature(R[0],y),current:this._createEditedFeature(R[1],y)})))||[],deletes:(O==null?void 0:O.map(R=>this._createEditedFeature(R,y)))||[],spatialReference:y}})}}return l}_createEditedFeature(e,t){return new pt({attributes:e.attributes,geometry:mt(c(i({},e.geometry),{spatialReference:t}))})}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new x("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new x("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const a=t[s];a!=null&&(r.set?r.set(s,a):r.append(s,a))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return c(i({},e),{query:i(c(i({gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0},t.query),{f:"json"}),this._createRequestQueryOptions(e)),responseType:"json"})}};p([F()],I.prototype,"type",void 0),p([F({constructOnly:!0})],I.prototype,"layer",void 0),p([F({readOnly:!0})],I.prototype,"queryTask",null),I=p([Q("esri.layers.graphics.sources.FeatureLayerSource")],I);const he=I;export{he as default};
