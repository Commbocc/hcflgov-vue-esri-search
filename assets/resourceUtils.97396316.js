import{G as n,c3 as u,s as d,r as y,t as v,c4 as R,C as I}from"./index.32114bf6.js";async function x(e,t={},r){await e.load(r);const a=n(e.itemUrl,"resources"),{start:o=1,num:c=10,sortOrder:i="asc",sortField:l="created"}=t,p={query:{start:o,num:c,sortOrder:i,sortField:l,token:e.apiKey},signal:u(r,"signal")},s=await e.portal._request(a,p);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:f,size:w,resource:g})=>({created:new Date(f),size:w,resource:e.resourceFromPath(g)}))}}async function F(e,t,r,a){if(!e.hasPath())throw new d(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(a);const c=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[i,l]=m(e.path),p=await b(r),s=new FormData;return i&&i!=="."&&s.append("resourcesPrefix",i),s.append("fileName",l),s.append("file",p,l),s.append("f","json"),y(a)&&a.access&&s.append("access",a.access),await o.portal._request(c,{method:"post",body:s,signal:u(a,"signal")}),e}async function O(e,t,r){if(!t.hasPath())throw new d("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=n(e.userItemUrl,"removeResources");await e.portal._request(a,{method:"post",query:{resource:t.path},signal:u(r,"signal")}),t.portalItem=null}async function S(e,t){await e.load(t);const r=n(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:u(t,"signal")})}function m(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function h(e){const[t,r]=P(e),[a,o]=m(t);return[a,o,r]}function P(e){const t=R(e);return v(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function b(e){return e instanceof Blob?e:(await I(e.url,{responseType:"blob"})).data}function U(e,t){if(!e.hasPath())return null;const[r,,a]=h(e.path);return e.portalItem.resourceFromPath(n(r,t+a))}function T(e,t){if(!e.hasPath())return null;const[r,,a]=h(e.path);return e.portalItem.resourceFromPath(n(r,t+a))}export{F as addOrUpdateResource,b as contentToBlob,x as fetchResources,U as getSiblingOfSameType,T as getSiblingOfSameTypeI,S as removeAllResources,O as removeResource,h as splitPrefixFileNameAndExtension};
