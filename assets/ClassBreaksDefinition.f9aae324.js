import{N as n,E as e,F as i,c6 as p,c7 as u,c8 as c,H as d,Z as y}from"./index.32114bf6.js";const o=new n({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let a=class extends y{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};e([i({type:p,json:{write:!0}})],a.prototype,"baseSymbol",void 0),e([i({types:u,json:{read:{reader:c},write:!0}})],a.prototype,"colorRamp",void 0),e([i({json:{read:o.read,write:o.write}})],a.prototype,"type",void 0),a=e([d("esri.rest.support.ClassificationDefinition")],a);const f=a,r=new n({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),l=new n({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let t=class extends f{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(s){this.classificationMethod==="standard-deviation"&&this._set("standardDeviationInterval",s)}set definedInterval(s){this.classificationMethod==="defined-interval"&&this._set("definedInterval",s)}};e([i({json:{write:!0}})],t.prototype,"breakCount",void 0),e([i({json:{write:!0}})],t.prototype,"classificationField",void 0),e([i({type:String,json:{read:r.read,write:r.write}})],t.prototype,"classificationMethod",void 0),e([i({json:{write:!0}})],t.prototype,"normalizationField",void 0),e([i({json:{read:l.read,write:l.write}})],t.prototype,"normalizationType",void 0),e([i({value:null,json:{write:!0}})],t.prototype,"standardDeviationInterval",null),e([i({value:null,json:{write:!0}})],t.prototype,"definedInterval",null),e([i()],t.prototype,"type",void 0),t=e([d("esri.rest.support.ClassBreaksDefinition")],t);const m=t;export{m as l};
