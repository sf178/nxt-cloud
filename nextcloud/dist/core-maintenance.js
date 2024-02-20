/*! For license information please see core-maintenance.js.LICENSE.txt */
(()=>{"use strict";var e,t={49e3:(e,t,o)=>{var n=o(93664),r=o(79753),i=o(25108);const a=(0,r.getRootUrl)()+"/status.php",l=()=>{i.info("checking the Nextcloud maintenance status"),n.Z.get(a).then((e=>e.data)).then((e=>{if(!1===e.maintenance)return i.info("Nextcloud is not in maintenance mode anymore -> reloading"),void window.location.reload();i.info("Nextcloud is still in maintenance mode"),setTimeout(l,2e4)})).catch(i.error.bind(void 0))};l()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,d=0;d<o.length;d++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[d])))?o.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.e=()=>Promise.resolve(),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=1802,(()=>{n.b=document.baseURI||self.location.href;var e={1802:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,a=o[0],l=o[1],d=o[2],c=0;if(a.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(d)var u=d(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self.webpackChunknextcloud=self.webpackChunknextcloud||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var r=n.O(void 0,[7874],(()=>n(49e3)));r=n.O(r)})();
//# sourceMappingURL=core-maintenance.js.map?v=8fc2dcd0d3065d8a51ad