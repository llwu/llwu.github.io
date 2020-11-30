webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/amp */ \"./node_modules/next/amp.js\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/Users/llwu/git/llwu.github.io/components/Layout.tsx\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar GA_TRACKING_ID = 'G-MBWQ2DW007';\n\nvar AmpWrap = function AmpWrap(_ref) {\n  _s();\n\n  var ampOnly = _ref.ampOnly,\n      nonAmp = _ref.nonAmp;\n  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"])();\n  if (ampOnly) return isAmp && ampOnly;\n  return !isAmp && nonAmp;\n};\n\n_s(AmpWrap, \"L+gTh5fFjw/6le84ydLre5BlCN8=\", false, function () {\n  return [next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"]];\n});\n\n_c = AmpWrap;\n\nvar AmpIncludeCustomElement = function AmpIncludeCustomElement(props) {\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 3\n    }\n  }, __jsx(\"script\", {\n    async: true,\n    \"custom-element\": props.name,\n    src: 'https://cdn.ampproject.org/v0/' + props.name + '-' + props.version + '.js',\n    key: props.name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c2 = AmpIncludeCustomElement;\n\nvar AmpAnalytics = function AmpAnalytics(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(AmpIncludeCustomElement, {\n    name: \"amp-analytics\",\n    version: \"0.1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }), __jsx(\"amp-analytics\", {\n    type: props.type,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, props.script && __jsx(\"script\", {\n    type: \"application/json\",\n    dangerouslySetInnerHTML: {\n      __html: JSON.stringify(props.script)\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c3 = AmpAnalytics;\n\nvar Layout = function Layout(_ref2) {\n  _s2();\n\n  var children = _ref2.children,\n      _ref2$title = _ref2.title,\n      title = _ref2$title === void 0 ? 'Lawrence Wu' : _ref2$title,\n      _ref2$description = _ref2.description,\n      description = _ref2$description === void 0 ? '' : _ref2$description;\n  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"])();\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"alternate\",\n    type: \"application/rss+xml\",\n    title: \"RSS feed for blog posts\",\n    href: \"https://llwu.me/rss.xml\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:creator\",\n    content: \"@llllvvuu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: \"website\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }), isAmp ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"script\", {\n    async: true,\n    \"custom-element\": \"amp-analytics\",\n    src: \"https://cdn.ampproject.org/v0/amp-analytics-0.1.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }), __jsx(AmpAnalytics, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(AmpWrap, {\n    ampOnly: __jsx(AmpAnalytics, {\n      type: \"googleanalytics\",\n      script: {\n        vars: {\n          account: GA_TRACKING_ID,\n          gtag_id: GA_TRACKING_ID,\n          config: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, GA_TRACKING_ID, {\n            groups: 'default'\n          })\n        },\n        triggers: {\n          trackPageview: {\n            on: 'visible',\n            request: 'pageview'\n          }\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }), __jsx(AmpWrap, {\n    nonAmp: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"script\", {\n      src: \"/instantpage.js\",\n      type: \"module\",\n      defer: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 15\n      }\n    }), __jsx(\"script\", {\n      async: true,\n      src: \"https://www.googletagmanager.com/gtag/js?id=G-MBWQ2DW007\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 15\n      }\n    }), __jsx(\"script\", {\n      dangerouslySetInnerHTML: {\n        __html: \"window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n  gtag('config', '\".concat(GA_TRACKING_ID, \"');\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 15\n      }\n    })),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    style: {\n      maxWidth: '900px',\n      margin: 'auto',\n      fontFamily: 'Georgia,Times,Times New Roman,serif'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s2(Layout, \"L+gTh5fFjw/6le84ydLre5BlCN8=\", false, function () {\n  return [next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"]];\n});\n\n_c4 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"AmpWrap\");\n$RefreshReg$(_c2, \"AmpIncludeCustomElement\");\n$RefreshReg$(_c3, \"AmpAnalytics\");\n$RefreshReg$(_c4, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzZhOTMiXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJBbXBXcmFwIiwiYW1wT25seSIsIm5vbkFtcCIsImlzQW1wIiwidXNlQW1wIiwiQW1wSW5jbHVkZUN1c3RvbUVsZW1lbnQiLCJwcm9wcyIsIm5hbWUiLCJ2ZXJzaW9uIiwiQW1wQW5hbHl0aWNzIiwidHlwZSIsInNjcmlwdCIsIl9faHRtbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YXJzIiwiYWNjb3VudCIsImd0YWdfaWQiLCJjb25maWciLCJncm91cHMiLCJ0cmlnZ2VycyIsInRyYWNrUGFnZXZpZXciLCJvbiIsInJlcXVlc3QiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUcsY0FBdkI7O0FBUUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUM3QyxNQUFNQyxLQUFLLEdBQUdDLHVEQUFNLEVBQXBCO0FBQ0EsTUFBSUgsT0FBSixFQUFhLE9BQU9FLEtBQUssSUFBSUYsT0FBaEI7QUFDYixTQUFPLENBQUNFLEtBQUQsSUFBVUQsTUFBakI7QUFDRCxDQUpEOztHQUFNRixPO1VBQ1VJLCtDOzs7S0FEVkosTzs7QUFNTixJQUFNSyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLEtBQUQ7QUFBQSxTQUM5QixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssTUFEUDtBQUVFLHNCQUFnQkEsS0FBSyxDQUFDQyxJQUZ4QjtB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLENBdkJGLEVBZ0VFO0FBQUssU0FBSyxFQUFFO0FBQ1Y2QixjQUFRLEVBQUUsT0FEQTtBQUVWQyxZQUFNLEVBQUUsTUFGRTtBQUdWQyxnQkFBVSxFQUFFO0FBSEYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dkLFFBTEgsQ0FoRUYsQ0FERjtBQTBFRCxDQTVFRDs7SUFBTUQsTTtVQUNVWCwrQzs7O01BRFZXLE07QUE4RVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCc7XG5cbmNvbnN0IEdBX1RSQUNLSU5HX0lEID0gJ0ctTUJXUTJEVzAwNydcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn07XG5cbmNvbnN0IEFtcFdyYXAgPSAoeyBhbXBPbmx5LCBub25BbXAgfSA6IGFueSkgPT4ge1xuICBjb25zdCBpc0FtcCA9IHVzZUFtcCgpO1xuICBpZiAoYW1wT25seSkgcmV0dXJuIGlzQW1wICYmIGFtcE9ubHk7XG4gIHJldHVybiAhaXNBbXAgJiYgbm9uQW1wO1xufVxuXG5jb25zdCBBbXBJbmNsdWRlQ3VzdG9tRWxlbWVudCA9IChwcm9wczogYW55KSA9PiAoXG4gIDxIZWFkPlxuICAgIDxzY3JpcHRcbiAgICAgIGFzeW5jXG4gICAgICBjdXN0b20tZWxlbWVudD17cHJvcHMubmFtZX1cbiAgICAgIHNyYz17XG4gICAgICAgICdodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC8nICtcbiAgICAgICAgcHJvcHMubmFtZSArXG4gICAgICAgICctJyArXG4gICAgICAgIHByb3BzLnZlcnNpb24gK1xuICAgICAgICAnLmpzJ1xuICAgICAgfVxuICAgICAga2V5PXtwcm9wcy5uYW1lfVxuICAgIC8+XG4gIDwvSGVhZD5cbilcblxuY29uc3QgQW1wQW5hbHl0aWNzID0gKHByb3BzOiBhbnkpID0+IChcbiAgPD5cbiAgICA8QW1wSW5jbHVkZUN1c3RvbUVsZW1lbnQgbmFtZT1cImFtcC1hbmFseXRpY3NcIiB2ZXJzaW9uPVwiMC4xXCIgLz5cbiAgICA8YW1wLWFuYWx5dGljcyB0eXBlPXtwcm9wcy50eXBlfT5cbiAgICAgIHtwcm9wcy5zY3JpcHQgJiYgKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHByb3BzLnNjcmlwdCksXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9hbXAtYW5hbHl0aWNzPlxuICA8Lz5cbilcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0xhd3JlbmNlIFd1JywgZGVzY3JpcHRpb24gPSAnJyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBpc0FtcCA9IHVzZUFtcCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiXG4gICAgICAgICAgdGl0bGU9XCJSU1MgZmVlZCBmb3IgYmxvZyBwb3N0c1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbGx3dS5tZS9yc3MueG1sXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQGxsbGx2dnV1XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAge2lzQW1wPyA8PlxuICAgICAgICAgIDxzY3JpcHQgYXN5bmMgY3VzdG9tLWVsZW1lbnQ9XCJhbXAtYW5hbHl0aWNzXCIgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAvYW1wLWFuYWx5dGljcy0wLjEuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8QW1wQW5hbHl0aWNzIC8+XG4gICAgICAgIDwvPiA6IDw+XG4gICAgICAgIDwvPn1cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkPlxuICAgICAgICB7LyogQU1QIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cbiAgICAgICAgPEFtcFdyYXBcbiAgICAgICAgICBhbXBPbmx5PXtcbiAgICAgICAgICAgIDxBbXBBbmFseXRpY3NcbiAgICAgICAgICAgICAgdHlwZT1cImdvb2dsZWFuYWx5dGljc1wiXG4gICAgICAgICAgICAgIHNjcmlwdD17e1xuICAgICAgICAgICAgICAgIHZhcnM6IHtcbiAgICAgICAgICAgICAgICAgIGFjY291bnQ6IEdBX1RSQUNLSU5HX0lELFxuICAgICAgICAgICAgICAgICAgZ3RhZ19pZDogR0FfVFJBQ0tJTkdfSUQsXG4gICAgICAgICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgW0dBX1RSQUNLSU5HX0lEXTogeyBncm91cHM6ICdkZWZhdWx0JyB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgICAgICB0cmFja1BhZ2V2aWV3OiB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICdwYWdldmlldycsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogTm9uLUFNUCAtIEdvb2dsZSBBbmFseXRpY3MgKi99XG4gICAgICAgIDxBbXBXcmFwXG4gICAgICAgICAgbm9uQW1wPXtcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2luc3RhbnRwYWdlLmpzXCIgdHlwZT1cIm1vZHVsZVwiIGRlZmVyPjwvc2NyaXB0PlxuICAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1NQldRMkRXMDA3XCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICBndGFnKCdjb25maWcnLCAnJHtHQV9UUkFDS0lOR19JRH0nKTtgXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIG1heFdpZHRoOiAnOTAwcHgnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0dlb3JnaWEsVGltZXMsVGltZXMgTmV3IFJvbWFuLHNlcmlmJyxcbiAgICAgIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

})