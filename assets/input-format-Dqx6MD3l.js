import{r as d,a as A}from"./react-7_aYofMc.js";import{P as s}from"./prop-types-DyStGP7H.js";function x(e,t,r){switch(r){case"Backspace":t>0&&(e=e.slice(0,t-1)+e.slice(t),t--);break;case"Delete":e=e.slice(0,t)+e.slice(t+1);break}return{value:e,caret:t}}function I(e,t,r){for(var a={},n="",i=0,u=0;u<e.length;){var o=r(e[u],n,a);o!==void 0&&(n+=o,t!==void 0&&(t===u?i=n.length-1:t>u&&(i=n.length))),u++}t===void 0&&(i=n.length);var f={value:n,caret:i};return f}function k(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=R(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(e,t){if(e){if(typeof e=="string")return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}}function b(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function p(e,t){for(var r=0,a=k(t.split("")),n;!(n=a()).done;){var i=n.value;i===e&&r++}return r}function D(e,t){for(var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"x",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",n=e.length,i=p("(",e),u=p(")",e),o=i-u;o>0&&n<t.length;)e+=t[n].replace(r,a),t[n]===")"&&o--,n++;return e}function j(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=P(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,t){if(e){if(typeof e=="string")return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}}function m(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function E(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",r=arguments.length>2?arguments[2]:void 0;if(!e)return function(n){return{text:n}};var a=p(t,e);return function(n){if(!n)return{text:"",template:e};for(var i=0,u="",o=j(e.split("")),f;!(f=o()).done;){var c=f.value;if(c!==t){u+=c;continue}if(u+=n[i],i++,i===n.length&&n.length<a)break}return r&&(u=D(u,e)),{text:u,template:e}}}function T(e,t,r){typeof r=="string"&&(r=E(r));var a=r(e)||{},n=a.text,i=a.template;if(n===void 0&&(n=e),i)if(t===void 0)t=n.length;else{for(var u=0,o=!1,f=-1;u<n.length&&u<i.length;){if(n[u]!==i[u]){if(t===0){o=!0,t=u;break}f=u,t--}u++}o||(t=f+1)}return{text:n,caret:t}}function _(e){return e.hasAttribute("readonly")}function K(e){if(e.selectionStart!==e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd}}var w={Backspace:8,Delete:46};function $(e){switch(e.keyCode){case w.Backspace:return"Backspace";case w.Delete:return"Delete"}}function B(e){return e.selectionStart}function C(e,t){t!==void 0&&(q()?setTimeout(function(){return e.setSelectionRange(t,t)},0):e.setSelectionRange(t,t))}function q(){if(typeof navigator<"u")return L.test(navigator.userAgent)}var L=/Android/i;function U(e,t,r,a,n){y(t,r,a,void 0,n)}function F(e,t,r,a,n){if(!_(t)){var i=$(e);switch(i){case"Delete":case"Backspace":e.preventDefault();var u=K(t);return u?(G(t,u),y(t,r,a,void 0,n)):y(t,r,a,i,n)}}}function G(e,t){var r=e.value;r=r.slice(0,t.start)+r.slice(t.end),e.value=r,C(e,t.start)}function y(e,t,r,a,n){var i=I(e.value,B(e),t),u=i.value,o=i.caret;if(a){var f=x(u,o,a);u=f.value,o=f.caret}var c=T(u,o,r),g=c.text;o=c.caret,e.value=g,C(e,o),n(u)}var H=["value","parse","format","inputComponent","onChange","onKeyDown"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(this,arguments)}function M(e,t){if(e==null)return{};var r=N(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function N(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function v(e,t){var r=e.value,a=e.parse,n=e.format,i=e.inputComponent,u=e.onChange,o=e.onKeyDown,f=M(e,H),c=d.useRef(),g=d.useCallback(function(l){c.current=l,t&&(typeof t=="function"?t(l):t.current=l)},[t]),O=d.useCallback(function(l){return U(l,c.current,a,n,u)},[c,a,n,u]),S=d.useCallback(function(l){if(o&&o(l),!l.defaultPrevented)return F(l,c.current,a,n,u)},[c,a,n,u,o]);return A.createElement(i,h({},f,{ref:g,value:n(W(r)?"":r).text,onKeyDown:S,onChange:O}))}v=A.forwardRef(v);v.propTypes={parse:s.func.isRequired,format:s.func.isRequired,inputComponent:s.elementType.isRequired,type:s.string.isRequired,value:s.string,onChange:s.func.isRequired,onKeyDown:s.func,onCut:s.func,onPaste:s.func};v.defaultProps={inputComponent:"input",type:"text"};const J=v;function W(e){return e==null}export{J as I};
