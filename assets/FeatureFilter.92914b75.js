import{f as m,s as p,w as u,d1 as c,r as _}from"./index.6518a001.js";import{u as y}from"./aaBoundingRect.18bcc5e0.js";import{Z as f,a as w,n as I}from"./QueryEngine.e821ccdc.js";import{u as b}from"./Pipeline.1c52dca6.js";import"./normalizeUtils.8bc89086.js";import"./ItemCache.64b60134.js";import"./WhereClause.bcf023ba.js";import"./projection.e8ab4518.js";import"./json.da51edc4.js";import"./QueryEngineCapabilities.650d7541.js";import"./featureConversionUtils.f41435b4.js";import"./OptimizedGeometry.caece4b3.js";import"./OptimizedFeatureSet.ec9a3456.js";import"./utils.a8efa1eb.js";import"./ClassBreaksDefinition.e5dafc13.js";import"./TileInfo.62dd0bed.js";import"./quickselect.02d2bace.js";import"./ogcFeatureUtils.f5780b75.js";import"./geojson.47c8536a.js";import"./clientSideDefaults.a8f605e0.js";import"./query.880e8a75.js";import"./pbfQueryUtils.231edae0.js";import"./pbf.e4c33ef6.js";import"./enums.94a84b2b.js";import"./enums.8acce53f.js";import"./Texture.f22f3452.js";import"./context-util.277a52bf.js";import"./TileKey.d9486464.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,t)=>r.field(t)};async function T(r,t){const e=await import("./WhereClause.bcf023ba.js");try{const i=e.WhereClause.create(r,t);if(!i.isStandardized){const s=new p("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const h=s.readArcadeFeature();return i.testFeature(h,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const v=m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),a=1,x=2;class Y{constructor(t){this._geometryBounds=y(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach((t,e)=>{this._idToVisibility.set(e,0)})}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,a)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach((h,o)=>{const l=!!(this._idToVisibility.get(o)&a),n=s.has(o);!l&&n?e.push(o):l&&!n&&i.push(o),this._idToVisibility.set(o,n?a|x:0)}),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:h}=this;return u.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:h})}async update(t,e){this._hash=JSON.stringify(t);const i=await f(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await T(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await w(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,t.timeExtent,b);else{const e=new p("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);v.error(e)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return!_(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach((e,i)=>{e&a||(this._idToVisibility.set(i,a),t.push(i))}),t}}export{Y as default};