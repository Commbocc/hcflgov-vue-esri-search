import{aQ as fe,f as pe,bi as E,C as we,bj as Se,r as f,J as se,cQ as Z,E as s,F as o,H as u,Z as y,a$ as ue,Y as S,bZ as Ve,eq as ae,j as h,aS as q,b6 as Te,b7 as Re,b8 as je,eH as Le,b9 as Ee,eX as Ce,be as Ie,cS as qe,fJ as Me,cY as Pe,bb as $e,dm as Ae,d6 as We,s as re,eR as Fe,f5 as Ne,bd as ke}from"./index.32114bf6.js";import{A as ze,E as De}from"./RenderSlot.f9644924.js";import{o as Ue}from"./context-util.ba77401a.js";import{I as Be,N as X,O as N}from"./enums.8acce53f.js";import{A as Oe}from"./SceneService.86d4e43a.js";import"./originUtils.0f642d6d.js";import"./resourceUtils.97396316.js";var le,ee,G,de,F;(function(t){t[t.Binary=0]="Binary",t[t.JSON=1]="JSON"})(le||(le={})),function(t){t[t.TreeIndex=0]="TreeIndex",t[t.TreeStats=1]="TreeStats",t[t.TreeData=2]="TreeData",t[t.BrickBundles=3]="BrickBundles",t[t.Section=4]="Section",t[t.VariableStats=5]="VariableStats"}(ee||(ee={})),function(t){t[t.None=1]="None",t[t.Front=2]="Front",t[t.Back=3]="Back"}(G||(G={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(de||(de={})),function(t){t[t.None=0]="None",t[t.StaticSections=1]="StaticSections",t[t.Slices=2]="Slices",t[t.DynamicSections=4]="DynamicSections",t[t.GhostShell=8]="GhostShell",t[t.Isosurface=16]="Isosurface",t[t.Quality=32]="Quality",t[t.SunLocation=64]="SunLocation",t[t.StaticSectionSelection=128]="StaticSectionSelection",t[t.ExaggerationAndOffset=256]="ExaggerationAndOffset",t[t.CurrentTime=512]="CurrentTime",t[t.CurrentVariable=1024]="CurrentVariable",t[t.DeleteIsosurface=2048]="DeleteIsosurface",t[t.ContainerVisibility=4096]="ContainerVisibility",t[t.RenderMode=8192]="RenderMode",t[t.Optimization=16384]="Optimization"}(F||(F={}));function He(t){return new Promise(e=>import("./vxlLayer.26ce0764.js").then(i=>i.v).then(({default:i})=>{const r=i({locateFile:Je,preinitializedWebGLContext:t,onRuntimeInitialized:()=>e(r)})})).catch(e=>Promise.reject(e))}function Je(t){return fe(`esri/libs/vxl/${t}`)}const z=pe.getLogger("esri.layers.VoxelWasmPerScene");var d;(function(t){t[t.Lifetime=1]="Lifetime",t[t.RequestResponse=2]="RequestResponse",t[t.Rendering=3]="Rendering",t[t.Error=4]="Error"})(d||(d={}));class Ge{constructor(e){this._halfIntTexturesAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=ze.MATERIAL,this._renderSlot=De.VOXEL,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._view=e,this._initialize()}get canRender(){return!!this._vxl&&this._view.viewingMode==="local"}_dbg(e,i){this._dbgFlags.has(e)&&(e===d.Error?z.error(i):z.warn(i))}_removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this._dbg(d.Lifetime,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}_initialize(){this._dbg(d.Lifetime,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=E(()=>this._view.ready,e=>{e&&this._view.viewingMode==="local"?(this._dbg(d.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this._dbg(d.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())},{initial:!0}),this._qualityWatchHandle=E(()=>{var e;return(e=this._view)==null?void 0:e.qualityProfile},e=>{this._dbg(d.Rendering,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this._toWasmQuality(e))},{initial:!0}),this._timeExtentWatchHandle=E(()=>{var e;return(e=this._view)==null?void 0:e.timeExtent},()=>{if(this._vxl){var e;const i=this._getTimeArgs((e=this._view)==null?void 0:e.timeExtent);this._dbg(d.Rendering,"sceneView timeExtent changed to useTime="+i.useTime+" st="+i.startTime+" et="+i.endTime),this._vxl.set_scene_time_extent(i.startTime,i.endTime,i.useTime),this._renderPluginContext.requestRender()}},{initial:!0}),this._stationaryWatchHandle=E(()=>{var e;return(e=this._view)==null?void 0:e.stationary},e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})}initializeRenderContext(e){this._dbg(d.Lifetime,"--initializeRenderContext--");const i=e.renderContext.rctx;i.type===Ue.WEBGL2?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._initializeWasm(i.gl)):this._dbg(d.Error,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(d.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(d.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const i=this._renderTargetToRestore.viewport;this._rctx.setViewport(i.x,i.y,i.width,i.height)}_bindPreviousDepthToSlot(e,i){const r=!!this._rctx,n=!!this._renderTargetToRestore;if(!r||!n)return 0;const l=this._renderTargetToRestore.fbo.depthStencilTexture;return l?(i===0?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(l,e,!0),1):(this._dbg(d.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(e,i,r){if(!this._rctx)return void this._dbg(d.Error,"modifyAllocation callback has no rendering context!");const n=e;r===1?this._rctx.instanceCounter.increment(n,i):this._rctx.instanceCounter.decrement(n,i)}_setBlendState(e,i,r,n){this._rctx?(this._rctx.setBlendingEnabled(e===1),this._rctx.setBlendFunction(i,r),this._rctx.setBlendEquation(n)):this._dbg(d.Error,"setBlendState callback has no rendering context!")}_setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this._dbg(d.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(e,i,r){this._rctx?(this._rctx.setDepthFunction(r),this._rctx.setDepthTestEnabled(e===1),this._rctx.setDepthWriteEnabled(i===1),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(Be.ALWAYS,0,255),this._rctx.setStencilOpSeparate(X.FRONT,N.KEEP,N.INCR,N.KEEP),this._rctx.setStencilOpSeparate(X.BACK,N.KEEP,N.DECR,N.KEEP)):this._dbg(d.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(e){if(this._rctx)switch(e){case G.None:this._rctx.setFaceCullingEnabled(!1);break;case G.Back:this._rctx.setCullFace(X.BACK),this._rctx.setFaceCullingEnabled(!0);break;case G.Front:this._rctx.setCullFace(X.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(d.Error,"setRasterizerState callback has no rendering context!")}_setViewport(e,i,r,n){this._rctx?this._rctx.setViewport(e,i,r,n):this._dbg(d.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach((e,i)=>{if(e.needMemoryUsageUpdate){const r=this._vxl.estimate_memory_usage(i);r>=0&&(e.needMemoryUsageUpdate=!1,e.layerView.setUsedMemory(r))}})}_syncRequestsResponses(){this._layers.forEach((e,i)=>{const r=[];e.responses.forEach((p,_)=>{r.push(_),this._dbg(d.RequestResponse,"responding for requestID:"+_+" size:"+p.size),this._vxl.respond(i,_,p),p.requestType!==ee.TreeIndex&&p.requestType!==ee.Section||(e.needMemoryUsageUpdate=!0)});const n=e.responses;for(const p of r)n.delete(p);const l=this._vxl.get_new_requests(i),a=e.abortController.signal;for(const p in l){e.outstandingRequestCount+=1,e.outstandingRequestCount===1&&e.layerView.updatingFlagChanged();const _=l[p],k={responseType:"array-buffer",signal:a};this._dbg(d.RequestResponse,"making requestID:"+p+" url:"+_.url),we(_.url,k).then(v=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),this._dbg(d.RequestResponse,"have response for requestID:"+p);let T=0;if(v.data.byteLength>0){T=this._vxl._malloc(v.data.byteLength);const R=new Uint8Array(this._vxl.HEAPU8.buffer,T,v.data.byteLength),ie=new Uint8Array(v.data);for(let K=0;K<v.data.byteLength;++K)R[K]=ie[K]}n.set(+p,{responseType:_.responseType,ptr:T,size:v.data.byteLength,success:!0,requestType:_.requestType})}).catch(v=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),Se(v)||(this._dbg(d.Error,`requestID:${p} failed, error=${v.toString()}`),n.set(+p,{responseType:_.responseType,ptr:0,size:0,success:!1,requestType:_.requestType}))})}})}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0}setEnabled(e,i){this._layers.forEach((r,n)=>{r.layerView===e&&(this._vxl.set_enabled(n,i),this._renderPluginContext.requestRender())})}setSlices(e,i){const r={mask:F.Slices,slices:{planes:i,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,r,!0)}setDynamicSections(e,i){const r={mask:F.DynamicSections,dynamicSections:{planes:i,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,r,!0)}setStaticSections(e,i){const r={mask:F.StaticSections,staticSections:i};return this._doMaskedUIUpdate(e,r,!0)}setCurrentVariable(e,i){const r={mask:F.CurrentVariable,currentVariable:i};return this._doMaskedUIUpdate(e,r,!0)}setRenderMode(e,i){const r={mask:F.RenderMode,renderMode:i};return this._doMaskedUIUpdate(e,r,!0)}_doMaskedUIUpdate(e,i,r){if(!this._vxl)return!1;let n=!1;return this._layers.forEach((l,a)=>{if(l.layerView===e){const p={str:JSON.stringify(i),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(p)&&(n=this._vxl.handle_masked_ui_update(a,p.ptr,p.byteCount)===1,p.isReusable||this._vxl._free(p.ptr))}}),n&&r&&this._renderPluginContext.requestRender(),n}addVoxelLayer(e){if(!this._vxl){const r={layerView:e,resolveCallback:null,rejectCallback:null},n=new Promise((l,a)=>{r.resolveCallback=l,r.rejectCallback=a});return this._newLayers.push(r),n}const i=this._addVoxelLayer(e);return i<0?Promise.reject(-1):Promise.resolve(i)}removeVoxelLayer(e){if(!this._vxl){const n=this._newLayers.findIndex(a=>e===a.layerView);n>=0&&(this._newLayers[n].resolveCallback(-1),this._newLayers.splice(n,1));const l=this._newLayers.length;return l===0&&(this._dbg(d.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),l}let i=-1;this._layers.forEach((n,l)=>{n.layerView===e&&(i=l,n.abortController.abort(),this._vxl.remove_layer(i))}),i>=0&&this._layers.delete(i);const r=this._layers.size;return r===0&&(this._dbg(d.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),r}_getBlockSize(e){for(const i of this._wasmMemBlockSizes)if(e<i)return i;return-1}_allocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const i=this._getBlockSize(e.byteCount);return i<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(i),e.ptr===0&&(e.ptr=this._vxl._malloc(i),this._wasmMemBlocks.set(i,e.ptr))),e.ptr!==0&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let i=-Number.MAX_VALUE,r=Number.MAX_VALUE,n=!1;return f(e)&&(e.isAllTime?n=!0:(f(e.start)&&(n=!0,i=e.start.getTime()/1e3),f(e.end)&&(n=!0,r=e.end.getTime()/1e3))),{startTime:i,endTime:r,useTime:n}}_addVoxelLayer(e){var i;const r=e.layer;let n=-1;const l=r.getConfiguration();if(l.length<1)return-1;const a={str:l,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const p=this._getTimeArgs((i=this._view)==null?void 0:i.timeExtent),_=this._view.spatialReference.isWGS84&&r.spatialReference.isWGS84?111319.49079327357:1;if(n=this._vxl.add_layer(r.serviceRoot,a.ptr,a.byteCount,_,_,p.startTime,p.endTime,p.useTime,this._toWasmQuality(this._view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),n>=0){const k=new AbortController;if(this._layers.set(n,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:k,needMemoryUsageUpdate:!1}),!this._halfIntTexturesAvailable||se("mac")){const v=[];let T="";for(const R of e.layer.variables)R.renderingFormat.type!=="Int16"&&R.renderingFormat.type!=="UInt16"||(v.push(R.name),R.id===e.layer.style.currentVariableId&&(T=R.name));T!==""&&z.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${T}' in this browser`),v.length>0&&z.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${v.toString()}' in this browser`)}return se("esri-mobile")&&z.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),n}return-1}prepareRender(e){if(!this._vxl)return;const i=e.viewForward,r=e.eye;this._vxl.update_camera_pos_and_direction(r[0],r[1],r[2],i[0],i[1],i[2]);const n=this._vxl.cull();this._dbg(d.RequestResponse,"missingResourceCount="+n),this._moreToLoad=n>0,this._havePreparedWithAllLayers=this._newLayers.length===0,this._updateMemoryUsage()}render(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return;for(const r of this._newLayers){const n=this._addVoxelLayer(r.layerView);n===-1?r.rejectCallback(-1):r.resolveCallback(n)}if(this._newLayers=[],this._layers.size===0)return void this._dbg(d.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0),this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,e.scenelightingData.lightingMainDirection[0],e.scenelightingData.lightingMainDirection[1],e.scenelightingData.lightingMainDirection[2]);const i=this._renderTargetToRestore.viewport;i.width===this._viewportWidth&&i.height===this._viewportHeight||(this._viewportWidth=i.width,this._viewportHeight=i.height,this._vxl.set_viewport(i.width,i.height),this._layers.forEach(r=>{r.needMemoryUsageUpdate=!0})),i.x===0&&i.y===0||this._dbg(d.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(d.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._readyWatchHandle=Z(this._readyWatchHandle),this._qualityWatchHandle=Z(this._qualityWatchHandle),this._timeExtentWatchHandle=Z(this._timeExtentWatchHandle),this._stationaryWatchHandle=Z(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach(e=>{e.abortController.abort()}),this._wasmMemBlocks.forEach(e=>{e!==0&&this._vxl._free(e)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=He(e).then(i=>{var r;if(this._vxl=i,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(d.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const n=this._getTimeArgs((r=this._view)==null?void 0:r.timeExtent),l=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),p=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),_=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),k=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),v=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),T=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),R=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),ie=this._halfIntTexturesAvailable&&!se("mac");this._vxl.initialize_voxel_wasm(l,a,p,_,k,v,T,R,n.startTime,n.endTime,n.useTime,ie),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const i of this._newLayers)i.rejectCallback(-2);this._dbg(d.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(e,i,r){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const n=r.viewport[3]-i;if(e<0||e>r.viewport[2]||i<0||i>r.viewport[3])return this._dbg(d.Error,`pickDepth: outOfRange, screenXY=[${e}, ${n}], vp=[${r.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const l=r.viewForward,a=r.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],l[0],l[1],l[2]),this.updateWasmCamera(r),this._vxl.begin_frame();const p=this._vxl.pick_depth(e,n);return this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),p.success?p.distanceToCamera:null}_toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}}class V{constructor(){this.view2WASM=new Map}static getInstance(){return V.instance||(V.instance=new V),V.instance}getVoxelWasmPerSceneView(e){return this.view2WASM.has(e)?this.view2WASM.get(e):null}isUpdating(e,i){return!!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(i)}addLayer(e,i){return this.view2WASM.has(e)||this.view2WASM.set(e,new Ge(e)),this.view2WASM.get(e).addVoxelLayer(i)}removeLayer(e,i){this.view2WASM.has(e)&&this.view2WASM.get(e).removeVoxelLayer(i)<1&&this.view2WASM.delete(e)}setLayerEnabled(e,i,r){this.view2WASM.has(e)&&this.view2WASM.get(e).setEnabled(i,r)}setLayerSlices(e,i){let r=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(r=n.setSlices(a,i))})}),r}setLayerDynamicSections(e,i){let r=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(r=n.setDynamicSections(a,i))})}),r}setLayerCurrentVariable(e,i){let r=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(r=n.setCurrentVariable(a,i))})}),r}setLayerRenderMode(e,i){let r=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(r=n.setRenderMode(a,i))})}),r}setLayerStaticSections(e,i){let r=!1;return this.view2WASM.forEach((n,l)=>{l.allLayerViews.filter(a=>a.type==="voxel-3d").forEach(a=>{a.layer===e&&(r=n.setStaticSections(a,i))})}),r}}let M=class extends y{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};s([o({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),s([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),s([o({type:[Number],json:{write:!0}})],M.prototype,"normal",void 0),s([o({type:[Number],json:{write:!0}})],M.prototype,"point",void 0),M=s([u("esri.layers.support.VoxelDynamicSection")],M);const te=M;let P=class extends y{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};s([o({type:Boolean,json:{write:!0}})],P.prototype,"enabled",void 0),s([o({type:String,json:{write:!0}})],P.prototype,"label",void 0),s([o({type:[Number],json:{write:!0}})],P.prototype,"normal",void 0),s([o({type:[Number],json:{write:!0}})],P.prototype,"point",void 0),P=s([u("esri.layers.support.VoxelSlice")],P);const Q=P;let m=class extends y{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}readHref(t,e,i){return Ve(t,i)}};s([o({type:Boolean,json:{default:!0,write:!0}})],m.prototype,"enabled",void 0),s([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"href",void 0),s([ue(["service","web-scene"],"href")],m.prototype,"readHref",null),s([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),s([o({type:String,json:{write:!0}})],m.prototype,"label",void 0),s([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"normal",void 0),s([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"point",void 0),s([o({type:[S],json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"sizeInPixel",void 0),s([o({type:[Q],json:{write:!0}})],m.prototype,"slices",void 0),s([o({type:S,json:{default:0,write:!0}})],m.prototype,"timeId",void 0),s([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"variableId",void 0),m=s([u("esri.layers.support.VoxelSection")],m);const ce=m;let D=class extends y{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};s([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],D.prototype,"diffuseFactor",void 0),s([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],D.prototype,"specularFactor",void 0),D=s([u("esri.layers.support.VoxelSimpleShading")],D);const ye=D;let $=class extends y{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};s([o({type:ae,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],$.prototype,"color",void 0),s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"value",void 0),s([o({type:Boolean,json:{default:!0,write:!0}})],$.prototype,"enabled",void 0),s([o({type:String,json:{write:!0}})],$.prototype,"label",void 0),$=s([u("esri.layers.support.VoxelIsosurface")],$);const _e=$;let U=class extends y{constructor(){super(...arguments),this.alpha=0,this.position=0}};s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"alpha",void 0),s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"position",void 0),U=s([u("esri.layers.support.VoxelAlphaStop")],U);const ve=U;let B=class extends y{constructor(){super(...arguments),this.color=null,this.position=0}};s([o({type:ae,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],B.prototype,"color",void 0),s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"position",void 0),B=s([u("esri.layers.support.VoxelColorStop")],B);const me=B;let O=class extends y{constructor(){super(...arguments),this.enabled=!1,this.range=null}};s([o({type:Boolean,json:{default:!1,write:!0}})],O.prototype,"enabled",void 0),s([o({type:[Number],json:{write:!0}})],O.prototype,"range",void 0),O=s([u("esri.layers.support.VoxelRangeFilter")],O);const Qe=O;let C=class extends y{constructor(t){super(t),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new h,this.alphaStops=new h}set colorStops(t){this._set("colorStops",q(t,this._get("colorStops"),h.ofType(me)))}set alphaStops(t){this._set("alphaStops",q(t,this._get("alphaStops"),h.ofType(ve)))}};s([o({type:["linear","nearest"],json:{write:!0}})],C.prototype,"interpolation",void 0),s([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"stretchRange",void 0),s([o({type:h.ofType(me),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],C.prototype,"colorStops",null),s([o({type:h.ofType(ve),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],C.prototype,"alphaStops",null),s([o({type:Qe,json:{write:!0}})],C.prototype,"rangeFilter",void 0),C=s([u("esri.layers.support.VoxelTransferFunctionStyle")],C);const Ke=C;let A=class extends y{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null}};s([o({type:ae,json:{type:[S],write:{enabled:!0,isRequired:!0}}})],A.prototype,"color",void 0),s([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"value",void 0),s([o({type:Boolean,json:{default:!0,write:!0}})],A.prototype,"enabled",void 0),s([o({type:String,json:{write:!0}})],A.prototype,"label",void 0),A=s([u("esri.layers.support.VoxelUniqueValue")],A);const ge=A;let I=class extends y{constructor(t){super(t),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new h,this.isosurfaces=new h}set uniqueValues(t){this._set("uniqueValues",q(t,this._get("uniqueValues"),h.ofType(ge)))}set isosurfaces(t){this._set("isosurfaces",q(t,this._get("isosurfaces"),h.ofType(_e)))}};s([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],I.prototype,"variableId",void 0),s([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),s([o({type:Ke,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],I.prototype,"transferFunction",void 0),s([o({type:h.ofType(ge),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],I.prototype,"uniqueValues",null),s([o({type:h.ofType(_e),json:{write:{enabled:!0,overridePolicy(){const t=!this.uniqueValues||this.uniqueValues.length<1,e=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:t&&e}}}}})],I.prototype,"isosurfaces",null),I=s([u("esri.layers.support.VoxelVariableStyle")],I);const be=I;let j=class extends y{constructor(t){super(t),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new h,this.dynamicSections=new h}set slices(t){this._set("slices",q(t,this._get("slices"),h.ofType(Q)))}set dynamicSections(t){this._set("dynamicSections",q(t,this._get("dynamicSections"),h.ofType(te)))}};s([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"volumeId",void 0),s([o({type:Number,json:{default:1,write:!0}})],j.prototype,"verticalExaggeration",void 0),s([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],j.prototype,"exaggerationMode",void 0),s([o({type:Number,json:{default:0,write:!0}})],j.prototype,"verticalOffset",void 0),s([o({type:h.ofType(Q),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],j.prototype,"slices",null),s([o({type:h.ofType(te),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],j.prototype,"dynamicSections",null),j=s([u("esri.layers.support.VoxelVolumeStyle")],j);const xe=j;let b=class extends y{constructor(t){super(t),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new ye,this.volumeStyles=new h,this.variableStyles=new h}set volumeStyles(t){this._set("volumeStyles",q(t,this._get("volumeStyles"),h.ofType(xe)))}set variableStyles(t){this._set("variableStyles",q(t,this._get("variableStyles"),h.ofType(be)))}};s([o({type:h.ofType(xe),json:{write:!0}})],b.prototype,"volumeStyles",null),s([o({type:S,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"currentVariableId",void 0),s([o({type:["volume","surfaces"],json:{write:!0}})],b.prototype,"renderMode",void 0),s([o({type:h.ofType(be),json:{write:!0}})],b.prototype,"variableStyles",null),s([o({type:Boolean,json:{write:!0}})],b.prototype,"enableSlices",void 0),s([o({type:Boolean,json:{write:!0}})],b.prototype,"enableSections",void 0),s([o({type:Boolean,json:{write:!0}})],b.prototype,"enableDynamicSections",void 0),s([o({type:Boolean,json:{write:!0}})],b.prototype,"enableIsosurfaces",void 0),s([o({type:ye,json:{write:!0}})],b.prototype,"shading",void 0),b=s([u("esri.layers.support.VoxelStyle")],b);const Ze=b;let L=class extends y{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};s([o({type:["discrete","continuous"],json:{write:!0}})],L.prototype,"continuity",void 0),s([o({type:Boolean,json:{write:!0}})],L.prototype,"hasNoData",void 0),s([o({type:Number,json:{write:!0}})],L.prototype,"noData",void 0),s([o({type:Number,json:{write:!0}})],L.prototype,"offset",void 0),s([o({type:Number,json:{write:!0}})],L.prototype,"scale",void 0),s([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"type",void 0),L=s([u("esri.layers.support.VoxelFormat")],L);const he=L;let w=class extends y{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"id",void 0),s([o({type:String,json:{write:!0}})],w.prototype,"description",void 0),s([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"name",void 0),s([o({type:he,json:{write:!0}})],w.prototype,"originalFormat",void 0),s([o({type:he,json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"renderingFormat",void 0),s([o({type:String,json:{write:!0}})],w.prototype,"unit",void 0),s([o({type:Number,json:{write:!0}})],w.prototype,"volumeId",void 0),s([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],w.prototype,"type",void 0),w=s([u("esri.layers.support.VoxelVariable")],w);const Xe=w;let Y=class extends y{constructor(){super(...arguments),this.values=null}};s([o({type:[Number],json:{write:!0}})],Y.prototype,"values",void 0),Y=s([u("esri.layers.support.VoxelIrregularSpacing")],Y);const Ye=Y;let H=class extends y{constructor(){super(...arguments),this.scale=1,this.offset=0}};s([o({type:Number,json:{write:!0}})],H.prototype,"scale",void 0),s([o({type:Number,json:{write:!0}})],H.prototype,"offset",void 0),H=s([u("esri.layers.support.VoxelRegularSpacing")],H);const et=H;let x=class extends y{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};s([o({type:Ye,json:{write:!0}})],x.prototype,"irregularSpacing",void 0),s([o({type:Boolean,json:{write:!0}})],x.prototype,"isPositiveUp",void 0),s([o({type:Boolean,json:{write:!0}})],x.prototype,"isWrappedDateLine",void 0),s([o({type:String,json:{write:!0}})],x.prototype,"label",void 0),s([o({type:String,json:{write:!0}})],x.prototype,"name",void 0),s([o({type:String,json:{write:!0}})],x.prototype,"quantity",void 0),s([o({type:et,json:{write:!0}})],x.prototype,"regularSpacing",void 0),s([o({type:Number,json:{write:!0}})],x.prototype,"size",void 0),s([o({type:String,json:{write:!0}})],x.prototype,"unit",void 0),x=s([u("esri.layers.support.VoxelDimension")],x);const tt=x;let J=class extends y{constructor(){super(...arguments),this.id=0,this.dimensions=null}getZDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}isVolumeValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&this.getZDimension()!==-1}};s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"id",void 0),s([o({type:[tt],json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"dimensions",void 0),J=s([u("esri.layers.support.VoxelVolume")],J);const it=J;var ne;let W=ne=class extends y{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const t=new ne;return t.apronWidth===this.apronWidth&&t.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"apronWidth",void 0),s([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"brickSize",void 0),s([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"maxLodLevel",void 0),s([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"nodeSize",void 0),W=ne=s([u("esri.layers.support.VoxelVolumeIndex")],W);const st=W,oe=pe.getLogger(" esri.layers.VoxelLayer");var g;(function(t){t[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error"})(g||(g={}));let c=class extends Oe(Te(Re(je(Le(Ee(Ce(Ie))))))){constructor(t){super(t),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new h,this.style=null,this.opacity=1,this.variables=new h,this.volumes=new h,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new qe,this.version={major:Number.NaN,minor:Number.NaN,versionString:""}}set url(t){this._set("url",Me(t,oe))}destroy(){this._handles=Pe(this._handles)}_dbg(t,e){this._dbgFlags.has(t)&&(t===g.Error?oe.error(e):oe.warn(e))}load(t){const e=f(t)?t.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch($e).then(()=>this._fetchService(e)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(i),Promise.resolve(this)}getConfiguration(){this._handles.add([E(()=>this._getRenderMode(),e=>this._pushRenderModeToWasm(e)),E(()=>this._getCurrentVariableId(),e=>this._pushCurrentVariableIdToWasm(e)),E(()=>this._getDynamicSections(),e=>this._pushDynamicSectionsToWasm(e)),E(()=>this._getSlices(),e=>this._pushSlicesToWasm(e)),E(()=>this._getSections(),e=>this._pushSectionsToWasm(e))]);const t={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return t.index&&this.index.isValid()?JSON.stringify(t):""}readVersion(t,e){return super.parseVersionString(t)}_getSections(){const t=[];for(const e of this.sections)t.push(new ce({enabled:e.enabled,href:e.href,id:e.id,label:e.label,normal:e.normal,point:e.point,sizeInPixel:e.sizeInPixel,slices:e.slices,timeId:e.timeId,variableId:e.variableId}));return t}_pushSectionsToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushSectionsToWasm() called"),V.getInstance().setLayerStaticSections(this,t)||this._dbg(g.Error,"VoxelLayer._pushSectionsToWasm() failed!")}_isPlaneValid(t,e,i){if(!t.point||!Array.isArray(t.point)||t.point.length!==3||!t.normal||!Array.isArray(t.normal)||t.normal.length!==3)return!1;for(let l=0;l<3;++l){const a=t.point[l];if(a<0||a>=i[e[l]].size)return!1}const r=Ae(t.normal[0],t.normal[1],t.normal[2]);We(r,r);const n=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<n)&&(t.normal[0]=r[0],t.normal[1]=r[1],t.normal[2]=r[2],!0)}getVariableStyle(t){let e=-1;if(e=f(t)?t:this._getCurrentVariableId(),!(this!=null&&this.style.variableStyles)||e===-1)return null;const i=this.style.variableStyles.findIndex(r=>r.variableId===e);return i<0?null:this.style.variableStyles.getItemAt(i)}getVariable(t){let e=-1;if(e=f(t)?t:this._getCurrentVariableId(),!this.variables||e===-1)return null;const i=this.variables.findIndex(r=>r.id===e);return i<0?null:this.variables.getItemAt(i)}getVolume(t){const e=this.getVariable(t);return f(e)?this.volumes.find(({id:i})=>i===e.volumeId):null}validateLayer(t){if(t.layerType&&t.layerType!==this.operationalLayerType)throw new re("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new re("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new re("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}_getVolumeStyle(t){const e=this.getVariable(t);return f(e)?this.style.volumeStyles.find(({volumeId:i})=>i===e.volumeId):null}_getSlices(){const t=[],e=this.getVolume(null);if(!f(e)||!e.isVolumeValid())return t;const i=this._getVolumeStyle(null);if(!f(i))return t;for(const r of i.slices)this._isPlaneValid(r,[0,1,e.getZDimension()],e.dimensions)?t.push(new Q({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):t.push(new Q({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return t}_pushSlicesToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushSlicesToWasm() called!"),V.getInstance().setLayerSlices(this,t)||this._dbg(g.Error,"VoxelLayer._pushSlicesToWasm() failed!")}_getDynamicSections(){const t=[],e=this.getVolume(null);if(!f(e)||!e.isVolumeValid())return t;const i=this._getVolumeStyle(null);if(!f(i))return t;for(const r of i.dynamicSections)this._isPlaneValid(r,[0,1,e.getZDimension()],e.dimensions)?t.push(new te({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):t.push(new te({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return t}_pushDynamicSectionsToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushDynamicSectionsToWasm() called!"),V.getInstance().setLayerDynamicSections(this,t)||this._dbg(g.Error,"VoxelLayer._updateDynamicSections() failed!")}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushCurrentVariableIdToWasm() called!"),V.getInstance().setLayerCurrentVariable(this,t)||this._dbg(g.Error,"VoxelLayer._pushCurrentVariableIdToWasm() failed!")}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(t){this._dbg(g.VerboseAPI,"VoxelLayer._pushRenderModeToWasm() called!"),V.getInstance().setLayerRenderMode(this,t)||this._dbg(g.Error,"VoxelLayer.setLayerRenderMode() failed!")}};s([o(Fe)],c.prototype,"popupEnabled",void 0),s([o({type:["Voxel"]})],c.prototype,"operationalLayerType",void 0),s([o(Ne)],c.prototype,"legendEnabled",void 0),s([o({json:{write:!0}})],c.prototype,"title",void 0),s([o(ke)],c.prototype,"url",null),s([o({type:h.ofType(ce),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],c.prototype,"sections",void 0),s([o({type:Ze,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],c.prototype,"style",void 0),s([o({type:["show","hide"]})],c.prototype,"listMode",void 0),s([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],c.prototype,"opacity",void 0),s([o({type:h.ofType(Xe)})],c.prototype,"variables",void 0),s([o({type:h.ofType(it)})],c.prototype,"volumes",void 0),s([o({type:st})],c.prototype,"index",void 0),s([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],c.prototype,"minScale",void 0),s([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],c.prototype,"maxScale",void 0),s([o({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0),s([o({readOnly:!0,json:{name:"serviceVersion"}})],c.prototype,"version",void 0),s([ue("service","version")],c.prototype,"readVersion",null),c=s([u("esri.layers.VoxelLayer")],c);const pt=c;export{pt as default};
