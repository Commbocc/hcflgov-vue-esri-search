import{E as o,F as r,H as d,dR as u}from"./index.32114bf6.js";import"./TileKey.10b9e8d7.js";let t=class extends u{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const l=this.get("tileStore.tileScheme.spatialReference");return l&&l.toJSON()||null}};o([r({readOnly:!0})],t.prototype,"supportsTileUpdates",null),o([r({constructOnly:!0})],t.prototype,"remoteClient",void 0),o([r({constructOnly:!0})],t.prototype,"service",void 0),o([r()],t.prototype,"spatialReference",null),o([r({constructOnly:!0})],t.prototype,"tileInfo",void 0),o([r({constructOnly:!0})],t.prototype,"tileStore",void 0),t=o([d("esri.views.2d.layers.features.processors.BaseProcessor")],t);const v=t;function O(l,c,i,p){const e=l.clone(),n=1<<e.level,s=e.col+c,a=e.row+i;return p&&s<0?(e.col=s+n,e.world-=1):s>=n?(e.col=s-n,e.world+=1):e.col=s,e.row=a,e}export{O as l,v as p};
