webpackHotUpdate_N_E("pages/blog/years-later-highlights-from-undergrad-math",{

/***/ "./components/BlogPost.tsx":
/*!*********************************!*\
  !*** ./components/BlogPost.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/amp */ \"./node_modules/next/amp.js\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var metadata_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metadata/posts */ \"./metadata/posts.ts\");\n/* harmony import */ var components_TagLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/TagLink */ \"./components/TagLink.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/llwu/git/llwu.github.io/components/BlogPost.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar BlogPost = function BlogPost(_ref) {\n  _s();\n\n  var children = _ref.children,\n      id = _ref.id;\n  var amp = Object(next_amp__WEBPACK_IMPORTED_MODULE_1__[\"useAmp\"])() ? '.amp' : '';\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"\".concat(metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].title, \" // Blog // Lawrence Wu\"),\n    description: \"\".concat(metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].description),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"script\", {\n    type: \"application/ld+json\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"{\\n          \\\"@context\\\": \\\"https://schema.org\\\",\\n          \\\"@type\\\": \\\"BreadcrumbList\\\",\\n          \\\"itemListElement\\\": [{\\n            \\\"@type\\\": \\\"ListItem\\\",\\n            \\\"position\\\": 1,\\n            \\\"name\\\": \\\"Lawrence Wu\\\",\\n            \\\"item\\\": \\\"https://llwu.me\\\"\\n          },{\\n            \\\"@type\\\": \\\"ListItem\\\",\\n            \\\"position\\\": 2,\\n            \\\"name\\\": \\\"Blog\\\",\\n            \\\"item\\\": \\\"https://llwu.me/blog\\\"\\n          },{\\n            \\\"@type\\\": \\\"ListItem\\\",\\n            \\\"position\\\": 2,\\n            \\\"name\\\": \".concat(metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id.title], \",\\n          }]\\n        }\"))), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].title, \" // \", \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/blog\".concat(amp),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \"Blog\")), \" // \", \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\".concat(amp && 'index').concat(amp),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"Lawrence Wu\"))), __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].date.toLocaleDateString(undefined, {\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  }), ' ', metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].tags.map(function (tag) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_TagLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      tag: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 47\n      }\n    }), ' ');\n  })), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), children, metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].redditUrl && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"a\", {\n    href: metadata_posts__WEBPACK_IMPORTED_MODULE_5__[\"PostMap\"][id].redditUrl,\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Comment on Reddit\")));\n};\n\n_s(BlogPost, \"t7yK9v1+LDV2sKqbVmz7R3Y70zo=\", false, function () {\n  return [next_amp__WEBPACK_IMPORTED_MODULE_1__[\"useAmp\"]];\n});\n\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC50c3g/YWE3ZSJdLCJuYW1lcyI6WyJCbG9nUG9zdCIsImNoaWxkcmVuIiwiaWQiLCJhbXAiLCJ1c2VBbXAiLCJQb3N0TWFwIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bmRlZmluZWQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ0YWdzIiwibWFwIiwidGFnIiwicmVkZGl0VXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU9BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLE1BQWhCQyxFQUFnQixRQUFoQkEsRUFBZ0I7QUFDNUMsTUFBTUMsR0FBRyxHQUFHQyx1REFBTSxLQUFLLE1BQUwsR0FBYyxFQUFoQztBQUNBLFNBQ0UsTUFBQyx5REFBRDtBQUFRLFNBQUssWUFBS0Msc0RBQU8sQ0FBQ0gsRUFBRCxDQUFQLENBQVlJLEtBQWpCLDRCQUFiO0FBQThELGVBQVcsWUFBS0Qsc0RBQU8sQ0FBQ0gsRUFBRCxDQUFQLENBQVlLLFdBQWpCLENBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9qQkFpQmNGLHNEQUFPLENBQUNILEVBQUUsQ0FBQ0ksS0FBSixDQWpCckIsZ0NBREYsQ0FERixFQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELHNEQUFPLENBQUNILEVBQUQsQ0FBUCxDQUFZSSxLQURmLFVBQzBCLEdBRDFCLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksaUJBQVVILEdBQVYsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRkYsVUFJYyxHQUpkLEVBS0UsTUFBQyxnREFBRDtBQUFNLFFBQUksYUFBTUEsR0FBRyxJQUFJLE9BQWIsU0FBdUJBLEdBQXZCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FMRixDQXhCRixFQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLHNEQUFPLENBQUNILEVBQUQsQ0FBUCxDQUFZTSxJQUFaLENBQWlCQyxrQkFBakIsQ0FBb0NDLFNBQXBDLEVBQStDO0FBQUVDLFFBQUksRUFBRSxTQUFSO0FBQW1CQyxTQUFLLEVBQUUsTUFBMUI7QUFBa0NDLE9BQUcsRUFBRTtBQUF2QyxHQUEvQyxDQURILEVBQ3VHLEdBRHZHLEVBRUdSLHNEQUFPLENBQUNILEVBQUQsQ0FBUCxDQUFZWSxJQUFaLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxHQUFEO0FBQUEsV0FBYyxtRUFBRSxNQUFDLDBEQUFEO0FBQVMsU0FBRyxFQUFFQSxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBRixFQUF3QixHQUF4QixDQUFkO0FBQUEsR0FBckIsQ0FGSCxDQWpDRixFQXFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLEVBc0NHZixRQXRDSCxFQXVDR0ksc0RBQU8sQ0FBQ0gsRUFBRCxDQUFQLENBQVllLFNBQVosSUFBeUIsbUVBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEd0IsRUFFeEI7QUFDRSxRQUFJLEVBQUVaLHNEQUFPLENBQUNILEVBQUQsQ0FBUCxDQUFZZSxTQURwQjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLFlBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGd0IsQ0F2QzVCLENBREY7QUFvREQsQ0F0REQ7O0dBQU1qQixRO1VBQ1FJLCtDOzs7S0FEUkosUTtBQXdEU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dQb3N0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnO1xuXG5pbXBvcnQgeyBQb3N0TWFwIH0gZnJvbSAnbWV0YWRhdGEvcG9zdHMnO1xuaW1wb3J0IFRhZ0xpbmsgZnJvbSAnY29tcG9uZW50cy9UYWdMaW5rJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgaWQ6IHN0cmluZ1xufTtcblxuY29uc3QgQmxvZ1Bvc3QgPSAoeyBjaGlsZHJlbiwgaWQgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgYW1wID0gdXNlQW1wKCkgPyAnLmFtcCcgOiAnJztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXtgJHtQb3N0TWFwW2lkXS50aXRsZX0gLy8gQmxvZyAvLyBMYXdyZW5jZSBXdWB9IGRlc2NyaXB0aW9uPXtgJHtQb3N0TWFwW2lkXS5kZXNjcmlwdGlvbn1gfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCI+XG4gICAgICAgIHtge1xuICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIixcbiAgICAgICAgICBcIkB0eXBlXCI6IFwiQnJlYWRjcnVtYkxpc3RcIixcbiAgICAgICAgICBcIml0ZW1MaXN0RWxlbWVudFwiOiBbe1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IDEsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMYXdyZW5jZSBXdVwiLFxuICAgICAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly9sbHd1Lm1lXCJcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgIFwiQHR5cGVcIjogXCJMaXN0SXRlbVwiLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiAyLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxvZ1wiLFxuICAgICAgICAgICAgXCJpdGVtXCI6IFwiaHR0cHM6Ly9sbHd1Lm1lL2Jsb2dcIlxuICAgICAgICAgIH0se1xuICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkxpc3RJdGVtXCIsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IDIsXG4gICAgICAgICAgICBcIm5hbWVcIjogJHtQb3N0TWFwW2lkLnRpdGxlXX0sXG4gICAgICAgICAgfV1cbiAgICAgICAgfWB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPlxuICAgICAgICB7UG9zdE1hcFtpZF0udGl0bGV9IC8vIHtcIiBcIn1cbiAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nJHthbXB9YH0+XG4gICAgICAgICAgPGE+QmxvZzwvYT5cbiAgICAgICAgPC9MaW5rPiAvLyB7XCIgXCJ9XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHthbXAgJiYgJ2luZGV4J30ke2FtcH1gfT5cbiAgICAgICAgICA8YT5MYXdyZW5jZSBXdTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9oMT5cbiAgICAgIDxoMz5cbiAgICAgICAge1Bvc3RNYXBbaWRdLmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfXsnICd9XG4gICAgICAgIHtQb3N0TWFwW2lkXS50YWdzLm1hcCgodGFnOiBhbnkpID0+IDw+PFRhZ0xpbmsgdGFnPXt0YWd9IC8+eycgJ308Lz4pfVxuICAgICAgPC9oMz5cbiAgICAgIDxociAvPlxuICAgICAge2NoaWxkcmVufVxuICAgICAge1Bvc3RNYXBbaWRdLnJlZGRpdFVybCAmJiA8PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtQb3N0TWFwW2lkXS5yZWRkaXRVcmx9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbW1lbnQgb24gUmVkZGl0XG4gICAgICAgIDwvYT5cbiAgICAgIDwvPn1cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlogPost.tsx\n");

/***/ })

})