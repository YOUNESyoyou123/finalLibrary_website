import{r as h}from"./react-7_aYofMc.js";import"./use-ssr-BWHPHbVh.js";var s={};Object.defineProperty(s,"__esModule",{value:!0});var o=h;s.isObject=function(e){return Object.prototype.toString.call(e)==="[object Object]"};var _=function(){var e=o.useRef(!1);return o.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e};function v(e,n){n===void 0&&(n=!0);var a=_(),r=o.useState(e),t=r[0],u=r[1],i=o.useRef(t),d=o.useCallback(function(y){!a.current&&n||(i.current=typeof y=="function"?y(i.current):y,u(i.current))},[]);return[i,d]}s.useRefState=v;s.default=v;var b;(function(e){e.DELETE="DELETE",e.GET="GET",e.HEAD="HEAD",e.OPTIONS="OPTIONS",e.PATCH="PATCH",e.POST="POST",e.PUT="PUT",e.CONNECT="CONNECT",e.TRACE="TRACE"})(b||(b={}));var c;(function(e){e.CACHE_FIRST="cache-first",e.CACHE_AND_NETWORK="cache-and-network",e.NETWORK_ONLY="network-only",e.CACHE_ONLY="cache-only",e.NO_CACHE="no-cache",e.EXACT_CACHE_AND_NETWORK="exact-cache-and-network"})(c||(c={}));var g=function(){for(var e=0,n=0,a=arguments.length;n<a;n++)e+=arguments[n].length;for(var r=Array(e),t=0,n=0;n<a;n++)for(var u=arguments[n],i=0,d=u.length;i<d;i++,t++)r[t]=u[i];return r},p=function(e){return Object.prototype.toString.call(e)==="[object Object]"},l;(function(e){e.Browser="browser",e.Server="server",e.Native="native"})(l||(l={}));l.Browser;l.Server;l.Native;var w=["headers","ok","redirected","trailer","status","statusText","type","url","body","bodyUsed","data"],O=["clone","arrayBuffer","blob","formData","json","text"],m=g(w,O),E=function(e,n){return Object.defineProperties({},m.reduce(function(a,r){return w.includes(r)?a[r]={get:function(){var t=e instanceof Response?e:e&&e.current;if(t){if(r==="data")return n.current;var u="clone"in t?t.clone():{};return u[r]}},enumerable:!0}:O.includes(r)&&(a[r]={value:function(){var t=e instanceof Response?e:e&&e.current;if(t){var u="clone"in t?t.clone():{};return u[r]()}},enumerable:!0}),a},{}))};E();h.createContext({url:"",options:{},graphql:!1});var f=function(){return f=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f.apply(this,arguments)},j={host:"",path:void 0,customOptions:{cacheLife:0,cachePolicy:c.CACHE_FIRST,interceptors:{},onAbort:function(){},onError:function(){},onNewData:function(e,n){return n},onTimeout:function(){},perPage:0,persist:!1,responseType:["json","text","blob","arrayBuffer"],retries:0,retryDelay:1e3,retryOn:[],suspense:!1,timeout:0,data:void 0,loading:!1},requestInit:{headers:{Accept:"application/json, text/plain, */*"}},dependencies:void 0};Object.entries(j).reduce(function(e,n){var a,r=n[0],t=n[1];return p(t)?f(f({},e),t):f(f({},e),(a={},a[r]=t,a))},{});b.GET;c.NETWORK_ONLY;c.NO_CACHE;c.CACHE_FIRST;
