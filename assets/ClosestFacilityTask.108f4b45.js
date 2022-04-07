var j=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var A=(r,e,s)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,m=(r,e)=>{for(var s in e||(e={}))x.call(e,s)&&A(r,s,e[s]);if(b)for(var s of b(e))J.call(e,s)&&A(r,s,e[s]);return r},g=(r,e)=>k(r,w(e));import{E as i,F as o,aA as v,a$ as p,a as O,i as q,g as R,H as P,Z as I,A as T,k as E,r as Z,q as H,C as K,I as M}from"./index.32114bf6.js";import{a as Q,i as c,u as V,f as z,d as D,o as G}from"./NAMessage.b59946a2.js";import{v as L}from"./normalizeUtils.a3d136fe.js";import{c as U}from"./DirectionsFeatureSet.07585550.js";import"./GPMessage.300f04a1.js";function W(r){return r.features.map(e=>{const s=E.fromJSON(r.spatialReference),n=R.fromJSON(e);return Z(n.geometry)&&(n.geometry.spatialReference=s),n})}function f(r){return T.fromJSON(r).features.map(e=>e.geometry)}let t=class extends I{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return W(r)}};i([o({type:[U]})],t.prototype,"directions",void 0),i([o({type:[v]})],t.prototype,"facilities",void 0),i([p("facilities")],t.prototype,"readFacilities",null),i([o({type:[v]})],t.prototype,"incidents",void 0),i([p("incidents")],t.prototype,"readIncidents",null),i([o({type:[Q]})],t.prototype,"messages",void 0),i([o({type:[v]})],t.prototype,"pointBarriers",void 0),i([p("pointBarriers",["barriers"])],t.prototype,"readPointBarriers",null),i([o({type:[O]})],t.prototype,"polylineBarriers",void 0),i([p("polylineBarriers")],t.prototype,"readPolylineBarriers",null),i([o({type:[q]})],t.prototype,"polygonBarriers",void 0),i([p("polygonBarriers")],t.prototype,"readPolygonBarriers",null),i([o({type:[R]})],t.prototype,"routes",void 0),i([p("routes")],t.prototype,"readRoutes",null),t=i([P("esri.rest.support.ClosestFacilitySolveResult")],t);const X=t,Y=G({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function _(r,e,s){const n=[],u=[],l={},y={},h=H(r),{path:$}=h;e.incidents&&e.incidents.features&&c(e.incidents.features,u,"incidents.features",l),e.facilities&&e.facilities.features&&c(e.facilities.features,u,"facilities.features",l),e.pointBarriers&&e.pointBarriers.features&&c(e.pointBarriers.features,u,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&c(e.polylineBarriers.features,u,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&c(e.polygonBarriers.features,u,"polygonBarriers.features",l);const N=await L(u);for(const a in l){const d=l[a];n.push(a),y[a]=N.slice(d[0],d[1])}if(V(y,n)){let a=null;try{a=await z($,e.apiKey,s)}catch{}a&&!a.hasZ&&D(y,n)}for(const a in y)y[a].forEach((d,C)=>{e.get(a)[C].geometry=d});const S=g(m({},s),{query:g(m(m({},h.query),Y.toQueryParams(e)),{f:"json"})}),{data:F}=await K(`${$}/solveClosestFacility`,S);return X.fromJSON(F)}let B=class extends M{constructor(r){super(r),this.url=null}solve(r,e){return _(this.url,r,e)}};i([o()],B.prototype,"url",void 0),B=i([P("esri.tasks.ClosestFacilityTask")],B);const oe=B;export{oe as default};
