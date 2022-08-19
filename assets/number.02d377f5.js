var z=Object.defineProperty;var b=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var O=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&O(e,n,t[n]);if(b)for(var n of b(t))j.call(t,n)&&O(e,n,t[n]);return e};import{aG as k,at as w}from"./index.6518a001.js";const m={ar:[".",","],bg:[",","\xA0"],bs:[",","."],ca:[",","."],cs:[",","\xA0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xA0"],fi:[",","\xA0"],fr:[",","\u202F"],"fr-ch":[",","\u202F"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xA0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xA0"],lv:[",","\xA0"],mk:[",","."],nb:[",","\xA0"],nl:[",","."],pl:[",","\xA0"],pt:[",","."],"pt-pt":[",","\xA0"],ro:[",","."],ru:[",","\xA0"],sk:[",","\xA0"],sl:[",","."],sr:[",","."],sv:[",","\xA0"],th:[".",","],tr:[",","."],uk:[",","\xA0"],vi:[",","."],zh:[".",","]};function E(e){e||(e=k());let t=e in m;if(!t){const s=e.split("-");s.length>1&&s[0]in m&&(e=s[0],t=!0),t||(e="en")}const[n,r,o="#,##0.###"]=m[e];return{decimal:n,group:r,pattern:o}}function q(e,t){const n=E((t=S({},t)).locale);t.customs=n;const r=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:I(e,r,t)}const v=/[#0,]*[#0](?:\.0*#*)?/;function I(e,t,n){const r=(n=n||{}).customs.group,o=n.customs.decimal,s=t.split(";"),i=s[0];if((t=s[e<0?1:0]||"-"+i).indexOf("%")!==-1)e*=100;else if(t.indexOf("\u2030")!==-1)e*=1e3;else{if(t.indexOf("\xA4")!==-1)throw new Error("currency notation not supported");if(t.indexOf("E")!==-1)throw new Error("exponential notation not supported")}const f=v,u=i.match(f);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return n.fractional===!1&&(n.places=0),t.replace(f,$(e,u[0],{decimal:o,group:r,places:n.places,round:n.round}))}function $(e,t,n){(n=n||{}).places===!0&&(n.places=0),n.places===1/0&&(n.places=6);const r=t.split("."),o=typeof n.places=="string"&&n.places.indexOf(",");let s=n.places;o?s=n.places.substring(o+1):s>=0||(s=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(s))));const i=String(Math.abs(e)).split("."),f=i[1]||"";if(r[1]||n.places){o&&(n.places=n.places.substring(0,o));const l=n.places!==void 0?n.places:r[1]&&r[1].lastIndexOf("0")+1;l>f.length&&(i[1]=f.padEnd(Number(l),"0")),s<f.length&&(i[1]=f.substr(0,Number(s)))}else i[1]&&i.pop();const u=r[0].replace(",","");let d=u.indexOf("0");d!==-1&&(d=u.length-d,d>i[0].length&&(i[0]=i[0].padStart(d,"0")),u.indexOf("#")===-1&&(i[0]=i[0].substr(i[0].length-d)));let p,c,a=r[0].lastIndexOf(",");if(a!==-1){p=r[0].length-a-1;const l=r[0].substr(0,a);a=l.lastIndexOf(","),a!==-1&&(c=l.length-a-1)}const g=[];for(let l=i[0];l;){const x=l.length-p;g.push(x>0?l.substr(x):l),l=x>0?l.slice(0,x):"",c&&(p=c,c=void 0)}return i[0]=g.reverse().join(n.group||","),i.join(n.decimal||".")}function M(e){const t=E((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,o=t.decimal;let s=1;if(n.indexOf("%")!==-1)s/=100;else if(n.indexOf("\u2030")!==-1)s/=1e3;else if(n.indexOf("\xA4")!==-1)throw new Error("currency notation not supported");const i=n.split(";");return i.length===1&&i.push("-"+i[0]),{regexp:h(i,function(u){return(u="(?:"+w(u,".")+")").replace(v,function(d){const p={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:o,exponent:!1},c=d.split(".");let a=e.places;c.length===1&&s!==1&&(c[1]="###"),c.length===1||a===0?p.fractional=!1:(a===void 0&&(a=e.pattern?c[1].lastIndexOf("0")+1:1/0),a&&e.fractional==null&&(p.fractional=!0),!e.places&&a<c[1].length&&(a+=","+c[1].length),p.places=a);const g=c[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+R(p)+")"})},!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:o,factor:s}}function B(e,t){const n=M(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],n.factor*=-1}return o=o.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(o)*n.factor}function R(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=N(e),n=h(e.fractional,function(o){let s="";return o&&e.places!==0&&(s="\\"+e.decimal,e.places===1/0?s="(?:"+s+"\\d+)?":s+="\\d{"+e.places+"}"),s},!0);let r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+h(e.exponent,function(o){return o?"([eE]"+N({signed:e.eSigned})+")":""})}function N(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,function(t){return t?"[-+]":""},!0)+h(e.separator,function(t){if(!t)return"(?:\\d+)";(t=w(t))===" "?t="\\s":t==="\xA0"&&(t="\\s\\xa0");const n=e.groupSize,r=e.groupSize2;if(r){const o="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+o+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":o}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"},!0)}const h=function(e,t,n){if(!(e instanceof Array))return t(e);const r=[];for(let o=0;o<e.length;o++)r.push(t(e[o]));return A(r.join("|"),n)},A=function(e,t){return"("+(t?"?:":"")+e+")"};export{M as a,q as o,B as p};