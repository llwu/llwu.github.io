_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],d=r[s]||new Set;d.has(l)?o=!1:(d.add(l),r[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},I1cF:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JjeS"),i=n("M/ue"),u=n("zYNH"),c=a.a.createElement;t.a=function(e){var t=e.id,n=Object(o.useAmp)()&&i.a[t].amp?".amp":"";return c("h3",null,c("a",{href:"/blog/".concat(t).concat(n)},i.a[t].title),c("br",null),i.a[t].date.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})," ",i.a[t].tags.map((function(e){return c(a.a.Fragment,null,c(u.a,{tag:e})," ")})))}},JjeS:function(e,t,n){e.exports=n("/0+H")},"M/ue":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var r=[{id:"bayes-contingency-table",title:"Bayesian analysis of contingency tables (feat. COVID-19 vaccines)",description:"2x2, mxn, hierarchical, multiple covariates, approximation, prior and posterior plots",date:new Date("2020-11-26T02:35:00Z"),tags:["stats","bayes"],redditUrl:"https://www.reddit.com/user/llllvvuu/comments/k2ddy9/bayesian_analysis_of_contingency_tables_feat/"}];r.sort((function(e,t){return t.date.valueOf()-e.date.valueOf()}));var a={};r.forEach((function(e){return a[e.id]=e}));var o={};r.forEach((function(e){return e.tags.forEach((function(e){o[e]=(o[e]||0)+1}))}));var i=Object.entries(o).sort((function(e,t){return t[1]-e[1]}))},NgQY:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=a.a.createElement;t.a=function(){return u(i.a,null,u("script",{defer:!0,src:"/quicklink.umd.js",key:"quicklink"}),u("script",{defer:!0,dangerouslySetInnerHTML:{__html:"window.addEventListener('load',()=>quicklink.listen())"}}))}},T4mK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tags/[tag]",function(){return n("kJIg")}])},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},apO0:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=a.a.createElement;t.a=function(e){var t=e.children,n=e.title,r=void 0===n?"Lawrence Wu":n,a=e.description,o=void 0===a?"":a;return u("div",null,u(i.a,null,u("title",null,r),u("meta",{charSet:"utf-8"}),u("link",{rel:"shortcut icon",href:"/favicon.ico"}),u("meta",{name:"description",content:o}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:creator",content:"@llllvvuu"}),u("meta",{property:"og:title",content:"Lawrence Wu"}),u("meta",{property:"og:description",content:o}),u("meta",{property:"og:type",content:"website"})),u("div",{style:{maxWidth:"900px",margin:"auto",fontFamily:"Georgia,Times,Times New Roman,serif"}},t))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kJIg:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return m})),n.d(t,"config",(function(){return h}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("JjeS"),c=n("nOHt"),s=n("M/ue"),l=n("I1cF"),d=n("apO0"),f=n("NgQY"),p=a.a.createElement,m=!0,h={amp:"hybrid",unstable_runtimeJS:!1};t.default=function(){var e=Object(u.useAmp)()?".amp":"",t=Object(c.useRouter)().query.tag,n={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Lawrence Wu",item:"https://llwu.me"},{"@type":"ListItem",position:2,name:"Blog",item:"https://llwu.me/blog"},{"@type":"ListItem",position:3,name:"#".concat(t)}]};return p(d.a,{title:"#".concat(t,' // Blog // Lawrence Wu"'),description:"All posts tagged #".concat(t,".")},p(i.a,null,p("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}})),!e&&p(f.a,null),p("h1",null,"#",t," // "," ",p("a",{href:"/blog".concat(e)},"Blog")," // "," ",p("a",{href:"/".concat(e&&"index").concat(e)},"Lawrence Wu")),p("hr",null),s.b.filter((function(e){return e.tags.includes(t)})).map((function(e){return p(l.a,{id:e.id})})))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},zYNH:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("JjeS"),i=a.a.createElement;t.a=function(e){var t=e.tag,n=Object(o.useAmp)()?".amp":"";return i("a",{href:"/blog/tags/".concat(t).concat(n)},"#",t)}}},[["T4mK",0,1,2]]]);