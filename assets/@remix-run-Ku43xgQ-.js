/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var v;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(v||(v={}));const j="popstate";function se(e){e===void 0&&(e={});function t(a,i){let{pathname:l="/",search:o="",hash:s=""}=P(a.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),O("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let l=a.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let s=a.location.href,c=s.indexOf("#");o=c===-1?s:s.slice(0,c)}return o+"#"+(typeof i=="string"?i:C(i))}function r(a,i){I(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return V(t,n,r,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function I(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T(){return Math.random().toString(36).substr(2,8)}function L(e,t){return{usr:e.state,key:e.key,idx:t}}function O(e,t,n,r){return n===void 0&&(n=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:n,key:t&&t.key||r||T()})}function C(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function P(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function V(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,o=v.Pop,s=null,c=u();c==null&&(c=0,l.replaceState(S({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function d(){o=v.Pop;let h=u(),f=h==null?null:h-c;c=h,s&&s({action:o,location:m.location,delta:f})}function g(h,f){o=v.Push;let p=O(m.location,h,f);n&&n(p,h),c=u()+1;let R=L(p,c),w=m.createHref(p);try{l.pushState(R,"",w)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(w)}i&&s&&s({action:o,location:m.location,delta:1})}function E(h,f){o=v.Replace;let p=O(m.location,h,f);n&&n(p,h),c=u();let R=L(p,c),w=m.createHref(p);l.replaceState(R,"",w),i&&s&&s({action:o,location:m.location,delta:0})}function x(h){let f=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof h=="string"?h:C(h);return p=p.replace(/ $/,"%20"),y(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let m={get action(){return o},get location(){return e(a,l)},listen(h){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(j,d),s=h,()=>{a.removeEventListener(j,d),s=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let f=x(h);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:E,go(h){return l.go(h)}};return m}var B;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(B||(B={}));function oe(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?P(t):t,a=Z(r.pathname||"/",n);if(a==null)return null;let i=M(e);k(i);let l=null;for(let o=0;l==null&&o<i.length;++o){let s=Y(a);l=K(i[o],s)}return l}function M(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,o)=>{let s={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=$([r,s.relativePath]),u=n.concat(s);i.children&&i.children.length>0&&(y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),M(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:J(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,l);else for(let s of U(i.path))a(i,l,s)}),t}function U(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=U(r.join("/")),o=[];return o.push(...l.map(s=>s===""?i:[i,s].join("/"))),a&&o.push(...l),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function k(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N=/^:[\w-]+$/,q=3,z=2,_=1,D=10,F=-2,H=e=>e==="*";function J(e,t){let n=e.split("/"),r=n.length;return n.some(H)&&(r+=F),t&&(r+=z),n.filter(a=>!H(a)).reduce((a,i)=>a+(N.test(i)?q:i===""?_:D),r)}function G(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function K(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let l=0;l<n.length;++l){let o=n[l],s=l===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",u=Q({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},c);if(!u)return null;Object.assign(r,u.params);let d=o.route;i.push({params:r,pathname:$([a,u.pathname]),pathnameBase:ae($([a,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(a=$([a,u.pathnameBase]))}return i}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:g,isOptional:E}=u;if(g==="*"){let m=o[d]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const x=o[d];return E&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function X(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),I(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,s)=>(r.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Y(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return I(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ee(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?P(e):e;return{pathname:n?n.startsWith("/")?n:te(n,t):t,search:re(r),hash:ie(a)}}function te(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function b(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ne(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ce(e,t){let n=ne(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function he(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=P(e):(a=S({},e),y(!a.pathname||!a.pathname.includes("?"),b("?","pathname","search",a)),y(!a.pathname||!a.pathname.includes("#"),b("#","pathname","hash",a)),y(!a.search||!a.search.includes("#"),b("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,o;if(l==null)o=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;a.pathname=g.join("/")}o=d>=0?t[d]:"/"}let s=ee(a,o),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const $=e=>e.join("/").replace(/\/\/+/g,"/"),ae=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),re=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ue(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const A=["post","put","patch","delete"];new Set(A);const le=["get",...A];new Set(le);export{v as A,ue as a,C as b,se as c,ce as g,y as i,$ as j,oe as m,P as p,he as r,Z as s};
