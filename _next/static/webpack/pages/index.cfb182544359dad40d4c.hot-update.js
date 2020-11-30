webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/amp */ \"./node_modules/next/amp.js\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var metadata_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metadata/constants */ \"./metadata/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/llwu/git/llwu.github.io/components/Layout.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Lawrence Wu' : _ref$title,\n      _ref$description = _ref.description,\n      description = _ref$description === void 0 ? '' : _ref$description;\n  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_2__[\"useAmp\"])();\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"alternate\",\n    type: \"application/rss+xml\",\n    title: \"RSS feed for blog posts\",\n    href: \"https://llwu.me/rss.xml\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:creator\",\n    content: \"@llllvvuu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: \"website\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), isAmp ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"script\", {\n    async: true,\n    \"custom-element\": \"amp-analytics\",\n    src: \"https://cdn.ampproject.org/v0/amp-analytics-0.1.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"script\", {\n    src: \"/instantpage.js\",\n    type: \"module\",\n    defer: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(\"script\", {\n    defer: true,\n    src: \"https://www.googletagmanager.com/gtag/js?id=G-MBWQ2DW007\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }), __jsx(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: \"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', '\".concat(metadata_constants__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"], \"');\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }))), isAmp && __jsx(\"amp-analytics\", {\n    type: \"gtag\",\n    \"data-credentials\": \"include\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"script\", {\n    type: \"application/json\",\n    dangerouslySetInnerHTML: {\n      __html: \"{\\n\\\"vars\\\" : {\\n  \\\"gtag_id\\\": \\\"\".concat(metadata_constants__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"], \"\\\",\\n  \\\"config\\\" : {\\n    \\\"\").concat(metadata_constants__WEBPACK_IMPORTED_MODULE_3__[\"GA_TRACKING_ID\"], \"\\\": { \\\"groups\\\": \\\"default\\\" }\\n  }\\n}\\n}\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    style: {\n      maxWidth: '900px',\n      margin: 'auto',\n      fontFamily: 'Georgia,Times,Times New Roman,serif'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s(Layout, \"L+gTh5fFjw/6le84ydLre5BlCN8=\", false, function () {\n  return [next_amp__WEBPACK_IMPORTED_MODULE_2__[\"useAmp\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzZhOTMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaXNBbXAiLCJ1c2VBbXAiLCJfX2h0bWwiLCJHQV9UUkFDS0lOR19JRCIsIm1heFdpZHRoIiwibWFyZ2luIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtFO0FBQUE7O0FBQUEsTUFBL0RDLFFBQStELFFBQS9EQSxRQUErRDtBQUFBLHdCQUFyREMsS0FBcUQ7QUFBQSxNQUFyREEsS0FBcUQsMkJBQTdDLGFBQTZDO0FBQUEsOEJBQTlCQyxXQUE4QjtBQUFBLE1BQTlCQSxXQUE4QixpQ0FBaEIsRUFBZ0I7QUFDL0UsTUFBTUMsS0FBSyxHQUFHQyx1REFBTSxFQUFwQjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUgsS0FBUixDQURGLEVBRUU7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLE9BQUcsRUFBQyxlQUFWO0FBQTBCLFFBQUksRUFBQyxjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUNFLE9BQUcsRUFBQyxXQUROO0FBRUUsUUFBSSxFQUFDLHFCQUZQO0FBR0UsU0FBSyxFQUFDLHlCQUhSO0FBSUUsUUFBSSxFQUFDLHlCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQyxxQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBTSxRQUFJLEVBQUMsaUJBQVg7QUFBNkIsV0FBTyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFRCxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFNLFlBQVEsRUFBQyxnQkFBZjtBQUFnQyxXQUFPLEVBQUVDLFdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFO0FBQU0sWUFBUSxFQUFDLFNBQWY7QUFBeUIsV0FBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQWlCSUMsS0FBSyxHQUFFLG1FQUNMO0FBQVEsU0FBSyxNQUFiO0FBQWMsc0JBQWUsZUFBN0I7QUFBNkMsT0FBRyxFQUFDLG9EQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssQ0FBRixHQUVDLG1FQUNKO0FBQVEsT0FBRyxFQUFDLGlCQUFaO0FBQThCLFFBQUksRUFBQyxRQUFuQztBQUE0QyxTQUFLLE1BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESSxFQUVKO0FBQVEsU0FBSyxNQUFiO0FBQWMsT0FBRyxFQUFDLDBEQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkksRUFHSjtBQUFRLDJCQUF1QixFQUFFO0FBQy9CRSxZQUFNLDhJQUdGQyxpRUFIRTtBQUR5QixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEksQ0FuQlYsQ0FERixFQWdDR0gsS0FBSyxJQUNKO0FBQWUsUUFBSSxFQUFDLE1BQXBCO0FBQTJCLHdCQUFpQixTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBUSxRQUFJLEVBQUMsa0JBQWI7QUFBZ0MsMkJBQXVCLEVBQUU7QUFDdkRFLFlBQU0sOENBRUFDLGlFQUZBLDBDQUlUQSxpRUFKUztBQURpRCxLQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FqQ0osRUE4Q0U7QUFBSyxTQUFLLEVBQUU7QUFDVkMsY0FBUSxFQUFFLE9BREE7QUFFVkMsWUFBTSxFQUFFLE1BRkU7QUFHVkMsZ0JBQVUsRUFBRTtBQUhGLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHVCxRQUxILENBOUNGLENBREY7QUF3REQsQ0ExREQ7O0dBQU1ELE07VUFDVUssK0M7OztLQURWTCxNO0FBNERTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnO1xuaW1wb3J0IHsgR0FfVFJBQ0tJTkdfSUQgfSBmcm9tICdtZXRhZGF0YS9jb25zdGFudHMnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xufTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0xhd3JlbmNlIFd1JywgZGVzY3JpcHRpb24gPSAnJyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBpc0FtcCA9IHVzZUFtcCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vcnNzK3htbFwiXG4gICAgICAgICAgdGl0bGU9XCJSU1MgZmVlZCBmb3IgYmxvZyBwb3N0c1wiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbGx3dS5tZS9yc3MueG1sXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQGxsbGx2dnV1XCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAge1xuICAgICAgICAgIGlzQW1wPyA8PlxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBjdXN0b20tZWxlbWVudD1cImFtcC1hbmFseXRpY3NcIiBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC9hbXAtYW5hbHl0aWNzLTAuMS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDwvPiA6IDw+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9pbnN0YW50cGFnZS5qc1wiIHR5cGU9XCJtb2R1bGVcIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLU1CV1EyRFcwMDdcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG5mdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG5ndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuZ3RhZygnY29uZmlnJywgJyR7R0FfVFJBQ0tJTkdfSUR9Jyk7YFxuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPC9IZWFkPlxuICAgICAge2lzQW1wICYmIChcbiAgICAgICAgPGFtcC1hbmFseXRpY3MgdHlwZT1cImd0YWdcIiBkYXRhLWNyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPlxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGB7XG5cInZhcnNcIiA6IHtcbiAgXCJndGFnX2lkXCI6IFwiJHtHQV9UUkFDS0lOR19JRH1cIixcbiAgXCJjb25maWdcIiA6IHtcbiAgICBcIiR7R0FfVFJBQ0tJTkdfSUR9XCI6IHsgXCJncm91cHNcIjogXCJkZWZhdWx0XCIgfVxuICB9XG59XG59YFxuICAgICAgICB9fSAvPlxuICAgICAgICAgIDwvYW1wLWFuYWx5dGljcz4pXG4gICAgICB9XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIG1heFdpZHRoOiAnOTAwcHgnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0dlb3JnaWEsVGltZXMsVGltZXMgTmV3IFJvbWFuLHNlcmlmJyxcbiAgICAgIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

})