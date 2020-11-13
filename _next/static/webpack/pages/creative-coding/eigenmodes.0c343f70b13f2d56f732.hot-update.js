webpackHotUpdate_N_E("pages/creative-coding/eigenmodes",{

/***/ "./pages/creative-coding/eigenmodes.tsx":
/*!**********************************************!*\
  !*** ./pages/creative-coding/eigenmodes.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/llwu/git/llwu.github.io/pages/creative-coding/eigenmodes.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 18\n      }\n    }, \"Loading...\");\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: ['react-p5-wrapper']\n  }\n});\n_c2 = P5Wrapper;\n\nvar EigenmodePage = function EigenmodePage() {\n  var _require = __webpack_require__(/*! sketches/eigenmodes */ \"./sketches/eigenmodes/index.ts\"),\n      sketch = _require[\"default\"],\n      getHarmonic = _require.getHarmonic,\n      setHarmonic = _require.setHarmonic,\n      ELEMS = _require.ELEMS;\n\n  var handleHarmonic = function handleHarmonic(e) {\n    if (!(Number(e.target.value) >= 0)) {\n      setHarmonic(0);\n    } else if (!(Number(e.target.value) < ELEMS)) {\n      setHarmonic(ELEMS - 1);\n    } else {\n      setHarmonic(e.target.value);\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, \"Harmonic: \", __jsx(\"input\", {\n    type: \"range\",\n    defaultValue: 20,\n    min: 0,\n    max: ELEMS - 1,\n    step: 1,\n    onChange: handleHarmonic,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }), __jsx(P5Wrapper, {\n    sketch: sketch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c3 = EigenmodePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EigenmodePage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"EigenmodePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRpdmUtY29kaW5nL2VpZ2VubW9kZXMudHN4PzgyNzMiXSwibmFtZXMiOlsiUDVXcmFwcGVyIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJFaWdlbm1vZGVQYWdlIiwicmVxdWlyZSIsInNrZXRjaCIsImdldEhhcm1vbmljIiwic2V0SGFybW9uaWMiLCJFTEVNUyIsImhhbmRsZUhhcm1vbmljIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxtREFBTztBQUFBLFNBQUMsMkpBQUQ7QUFBQSxHQUE2QjtBQUNwREMsU0FBTyxFQUFFO0FBQUEsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFOO0FBQUEsR0FEMkM7QUFFcERDLEtBQUcsRUFBRSxLQUYrQztBQUFBO0FBQUE7QUFBQSxrQ0FBckIsdUVBQXFCO0FBQUE7QUFBQSxjQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQTdCLENBQXpCO01BQU1ILFM7O0FBS04sSUFBTUksYUFBOEMsR0FBRyxTQUFqREEsYUFBaUQsR0FBTTtBQUFBLGlCQUNFQyxtQkFBTyxDQUFDLDJEQUFELENBRFQ7QUFBQSxNQUMxQ0MsTUFEMEM7QUFBQSxNQUNsQ0MsV0FEa0MsWUFDbENBLFdBRGtDO0FBQUEsTUFDckJDLFdBRHFCLFlBQ3JCQSxXQURxQjtBQUFBLE1BQ1JDLEtBRFEsWUFDUkEsS0FEUTs7QUFFM0QsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQXlCO0FBQzlDLFFBQUksRUFBRUMsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFOLElBQTBCLENBQTVCLENBQUosRUFBb0M7QUFDbENOLGlCQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0QsS0FGRCxNQUVPLElBQUksRUFBRUksTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFOLEdBQXlCTCxLQUEzQixDQUFKLEVBQXVDO0FBQzVDRCxpQkFBVyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUFYO0FBQ0QsS0FGTSxNQUVBO0FBQ0xELGlCQUFXLENBQUNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRDtBQUNGLEdBUkQ7O0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQVksRUFBRSxFQUFsQztBQUFzQyxPQUFHLEVBQUUsQ0FBM0M7QUFBOEMsT0FBRyxFQUFFTCxLQUFLLEdBQUcsQ0FBM0Q7QUFBOEQsUUFBSSxFQUFFLENBQXBFO0FBQXVFLFlBQVEsRUFBRUMsY0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURaLEVBRUUsTUFBQyxTQUFEO0FBQVcsVUFBTSxFQUFFSixNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBakJEOztNQUFNRixhO0FBbUJTQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NyZWF0aXZlLWNvZGluZy9laWdlbm1vZGVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgUDVXcmFwcGVyID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LXA1LXdyYXBwZXInKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nLi4uPC9wPixcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBFaWdlbm1vZGVQYWdlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7fSwge30+ID0gKCkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHQ6IHNrZXRjaCwgZ2V0SGFybW9uaWMsIHNldEhhcm1vbmljLCBFTEVNUyB9ID0gcmVxdWlyZSgnc2tldGNoZXMvZWlnZW5tb2RlcycpO1xuICBjb25zdCBoYW5kbGVIYXJtb25pYyA9IChlOiBSZWFjdC5JbnB1dEV2ZW50KSA9PiB7XG4gICAgaWYgKCEoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA+PSAwKSkge1xuICAgICAgc2V0SGFybW9uaWMoMCk7XG4gICAgfSBlbHNlIGlmICghKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPCBFTEVNUykpIHtcbiAgICAgIHNldEhhcm1vbmljKEVMRU1TIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEhhcm1vbmljKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgSGFybW9uaWM6IDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBkZWZhdWx0VmFsdWU9ezIwfSBtaW49ezB9IG1heD17RUxFTVMgLSAxfSBzdGVwPXsxfSBvbkNoYW5nZT17aGFuZGxlSGFybW9uaWN9IC8+XG4gICAgICA8UDVXcmFwcGVyIHNrZXRjaD17c2tldGNofS8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWlnZW5tb2RlUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/creative-coding/eigenmodes.tsx\n");

/***/ })

})