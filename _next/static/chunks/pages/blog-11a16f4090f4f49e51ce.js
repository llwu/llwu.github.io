_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},e)}m.rewind=function(){};var y=m;e.default=y},"C+bE":function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},HfOp:function(t,e,n){"use strict";n.r(e),n.d(e,"config",(function(){return m}));var r=n("q1tI"),o=n.n(r),a=n("JjeS"),i=n("8Kt/"),u=n.n(i),c=n("apO0"),s=n("M/ue"),f=n("zYNH"),l=n("I1cF"),p=n("NgQY"),d=o.a.createElement,m={amp:"hybrid",unstable_runtimeJS:!1};e.default=function(){var t=Object(a.useAmp)()?".amp":"";return d(c.a,{title:"Blog // Lawrence Wu",description:"Speculating about how society and the world works."},d(u.a,null,d("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Lawrence Wu",item:"https://llwu.me"},{"@type":"ListItem",position:2,name:"Blog"}]})}})),!t&&d(p.a,null),d("h1",null,"Blog // "," ",d("a",{href:"/".concat(t&&"index").concat(t)},"Lawrence Wu")),"Tags: ",s.c.map((function(t,e){return d(o.a.Fragment,null,0===e?"":", ",d(f.a,{tag:t[0]})," (".concat(t[1],")"))})),d("hr",null),s.b.map((function(t){return d(l.a,{id:t.id})})))}},I1cF:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("JjeS"),i=n("M/ue"),u=n("zYNH"),c=o.a.createElement;e.a=function(t){var e=t.id,n=Object(a.useAmp)()&&i.a[e].amp?".amp":"";return c("h3",null,c("a",{href:"/blog/".concat(e).concat(n)},i.a[e].title),c("br",null),i.a[e].date.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})," ",i.a[e].tags.map((function(t){return c(o.a.Fragment,null,c(u.a,{tag:t})," ")})))}},JjeS:function(t,e,n){t.exports=n("/0+H")},KckH:function(t,e,n){var r=n("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},"M/ue":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i}));var r=[{id:"bayes-contingency-table",title:"Bayesian analysis of contingency tables (feat. COVID-19 vaccines)",description:"2x2, mxn, hierarchical, multiple covariates, approximation, prior and posterior plots",date:new Date("2020-11-26T02:35:00Z"),tags:["stats","bayes"],redditUrl:""}];r.sort((function(t,e){return e.date.valueOf()-t.date.valueOf()}));var o={};r.forEach((function(t){return o[t.id]=t}));var a={};r.forEach((function(t){return t.tags.forEach((function(t){a[t]=(a[t]||0)+1}))}));var i=Object.entries(a).sort((function(t,e){return e[1]-t[1]}))},NgQY:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=o.a.createElement;e.a=function(){return u(i.a,null,u("script",{defer:!0,src:"/quicklink.umd.js",key:"quicklink"}),u("script",{defer:!0,dangerouslySetInnerHTML:{__html:"window.addEventListener('load',()=>quicklink.listen())"}}))}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){i(n,t);var e=s(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},apO0:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=o.a.createElement;e.a=function(t){var e=t.children,n=t.title,r=void 0===n?"Lawrence Wu":n,o=t.description,a=void 0===o?"":o;return u("div",null,u(i.a,null,u("title",null,r),u("meta",{charSet:"utf-8"}),u("link",{rel:"shortcut icon",href:"/favicon.ico"}),u("meta",{name:"description",content:a}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:creator",content:"@llllvvuu"}),u("meta",{property:"og:title",content:"Lawrence Wu"}),u("meta",{property:"og:description",content:a}),u("meta",{property:"og:type",content:"website"})),u("div",{style:{maxWidth:"900px",margin:"auto",fontFamily:"Georgia,Times,Times New Roman,serif"}},e))}},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},uh6c:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("HfOp")}])},zYNH:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("JjeS"),i=o.a.createElement;e.a=function(t){var e=t.tag,n=Object(a.useAmp)()?".amp":"";return i("a",{href:"/blog/tags/".concat(e).concat(n)},"#",e)}}},[["uh6c",0,1]]]);