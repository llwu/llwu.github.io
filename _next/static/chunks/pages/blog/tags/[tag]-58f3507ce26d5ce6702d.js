_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery,i=void 0!==o&&o;return n||a&&i}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],d=r[s]||new Set;d.has(l)?o=!1:(d.add(l),r[s]=d)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},e)}m.rewind=function(){};var h=m;e.default=h},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=a},I1cF:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JjeS"),i=n("M/ue"),u=n("zYNH"),c=a.a.createElement;e.a=function(t){var e=t.id,n=Object(o.useAmp)()&&i.a[e].amp?".amp":"";return c("h3",null,c("a",{href:"/blog/".concat(e).concat(n)},i.a[e].title),c("br",null),i.a[e].date.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})," ",i.a[e].tags.map((function(t){return c(a.a.Fragment,null,c(u.a,{tag:t})," ")})))}},JjeS:function(t,e,n){t.exports=n("/0+H")},"M/ue":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}));var r=[{id:"bayes-contingency-table",title:"Bayesian analysis of contingency tables (feat. COVID-19 vaccines)",description:"2x2, mxn, hierarchical, multiple covariates, approximation, prior and posterior plots",date:new Date("2020-11-26T02:35:00Z"),tags:["stats","bayes"],redditUrl:"https://www.reddit.com/user/llllvvuu/comments/k2ddy9/bayesian_analysis_of_contingency_tables_feat/",twitterUrl:"https://twitter.com/llllvvuu/status/1332974138517032960"}];r.sort((function(t,e){return e.date.valueOf()-t.date.valueOf()}));var a={};r.forEach((function(t){return a[t.id]=t}));var o={};r.forEach((function(t){return t.tags.forEach((function(t){o[t]=(o[t]||0)+1}))}));var i=Object.entries(o).sort((function(t,e){return e[1]-t[1]}))},T4mK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tags/[tag]",function(){return n("kJIg")}])},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),d=function(t){i(n,t);var e=s(n);function n(t){var o;return a(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=d},apO0:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("JjeS"),c=a.a.createElement;e.a=function(t){var e=t.children,n=t.title,r=void 0===n?"Lawrence Wu":n,o=t.description,s=void 0===o?"":o,l=Object(u.useAmp)();return c("div",null,c(i.a,null,c("title",null,r),c("meta",{charSet:"utf-8"}),c("link",{rel:"shortcut icon",href:"/favicon.ico"}),c("link",{rel:"alternate",type:"application/rss+xml",title:"RSS feed for blog posts",href:"https://llwu.me/rss.xml"}),c("meta",{name:"description",content:s}),c("meta",{name:"twitter:card",content:"summary_large_image"}),c("meta",{name:"twitter:creator",content:"@llllvvuu"}),c("meta",{property:"og:title",content:r}),c("meta",{property:"og:description",content:s}),c("meta",{property:"og:type",content:"website"}),l?c(a.a.Fragment,null,c("script",{async:!0,"custom-element":"amp-analytics",src:"https://cdn.ampproject.org/v0/amp-analytics-0.1.js"})):c(a.a.Fragment,null,c("script",{src:"/instantpage.js",type:"module",defer:!0}),c("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-MBWQ2DW007"}),c("script",{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-MBWQ2DW007');"}}))),c("div",{style:{maxWidth:"900px",margin:"auto",fontFamily:"Georgia,Times,Times New Roman,serif"}},e))}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kJIg:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return p})),n.d(e,"config",(function(){return m}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("JjeS"),c=n("nOHt"),s=n("M/ue"),l=n("I1cF"),d=n("apO0"),f=a.a.createElement,p=!0,m={amp:"hybrid",unstable_runtimeJS:!1};e.default=function(){var t=Object(u.useAmp)()?".amp":"",e=Object(c.useRouter)().query.tag,n={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Lawrence Wu",item:"https://llwu.me"},{"@type":"ListItem",position:2,name:"Blog",item:"https://llwu.me/blog"},{"@type":"ListItem",position:3,name:"#".concat(e)}]};return f(d.a,{title:"#".concat(e," // Blog // Lawrence Wu"),description:"All posts tagged #".concat(e,".")},f(i.a,null,f("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}})),f("h1",null,"#",e," // "," ",f("a",{href:"/blog".concat(t)},"Blog")," // "," ",f("a",{href:"/".concat(t&&"index").concat(t)},"Lawrence Wu")),f("hr",null),s.b.filter((function(t){return t.tags.includes(e)})).map((function(t){return f(l.a,{id:t.id})})))}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},mPvQ:function(t,e,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},zYNH:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JjeS"),i=a.a.createElement;e.a=function(t){var e=t.tag,n=Object(o.useAmp)()?".amp":"";return i("a",{href:"/blog/tags/".concat(e).concat(n)},"#",e)}}},[["T4mK",0,1,2]]]);