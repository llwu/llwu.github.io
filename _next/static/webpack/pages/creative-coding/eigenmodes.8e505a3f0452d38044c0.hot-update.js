webpackHotUpdate_N_E("pages/creative-coding/eigenmodes",{

/***/ "./pages/creative-coding/eigenmodes.tsx":
/*!**********************************************!*\
  !*** ./pages/creative-coding/eigenmodes.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/llwu/git/llwu.github.io/pages/creative-coding/eigenmodes.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 18\n      }\n    }, \"Loading...\");\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: ['react-p5-wrapper']\n  }\n});\n_c2 = P5Wrapper;\n\nvar EigenmodePage = function EigenmodePage() {\n  var _require = __webpack_require__(/*! sketches/eigenmodes */ \"./sketches/eigenmodes/index.ts\"),\n      sketch = _require[\"default\"],\n      getHarmonic = _require.getHarmonic,\n      setHarmonic = _require.setHarmonic,\n      ELEMS = _require.ELEMS;\n\n  var handleHarmonic = function handleHarmonic(e) {\n    if (!(Number(e.target.value) >= 0)) {\n      setHarmonic(0);\n    } else if (!(Number(e.target.value) < ELEMS)) {\n      setHarmonic(ELEMS - 1);\n    } else {\n      setHarmonic(e.target.value);\n    }\n  };\n\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Eigenmodes // Creative Coding // Lawrence Wu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Eigenmodes //\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/creative-coding\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Creative Coding\")), \" //\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, \"Lawrence Wu\"))), __jsx(\"input\", {\n    type: \"number\",\n    defaultValue: 20,\n    onChange: handleHarmonic,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), \"(range from 0 to \", ELEMS - 1, \")\", __jsx(P5Wrapper, {\n    sketch: sketch,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c3 = EigenmodePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EigenmodePage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"P5Wrapper$dynamic\");\n$RefreshReg$(_c2, \"P5Wrapper\");\n$RefreshReg$(_c3, \"EigenmodePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRpdmUtY29kaW5nL2VpZ2VubW9kZXMudHN4PzgyNzMiXSwibmFtZXMiOlsiUDVXcmFwcGVyIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJFaWdlbm1vZGVQYWdlIiwicmVxdWlyZSIsInNrZXRjaCIsImdldEhhcm1vbmljIiwic2V0SGFybW9uaWMiLCJFTEVNUyIsImhhbmRsZUhhcm1vbmljIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsbURBQU87QUFBQSxTQUFDLDJKQUFEO0FBQUEsR0FBNkI7QUFDcERDLFNBQU8sRUFBRTtBQUFBLFdBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBTjtBQUFBLEdBRDJDO0FBRXBEQyxLQUFHLEVBQUUsS0FGK0M7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHVFQUFxQjtBQUFBO0FBQUEsY0FBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUE3QixDQUF6QjtNQUFNSCxTOztBQUtOLElBQU1JLGFBQThDLEdBQUcsU0FBakRBLGFBQWlELEdBQU07QUFBQSxpQkFDRUMsbUJBQU8sQ0FBQywyREFBRCxDQURUO0FBQUEsTUFDMUNDLE1BRDBDO0FBQUEsTUFDbENDLFdBRGtDLFlBQ2xDQSxXQURrQztBQUFBLE1BQ3JCQyxXQURxQixZQUNyQkEsV0FEcUI7QUFBQSxNQUNSQyxLQURRLFlBQ1JBLEtBRFE7O0FBRTNELE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUF5QjtBQUM5QyxRQUFJLEVBQUVDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBTixJQUEwQixDQUE1QixDQUFKLEVBQW9DO0FBQ2xDTixpQkFBVyxDQUFDLENBQUQsQ0FBWDtBQUNELEtBRkQsTUFFTyxJQUFJLEVBQUVJLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBTixHQUF5QkwsS0FBM0IsQ0FBSixFQUF1QztBQUM1Q0QsaUJBQVcsQ0FBQ0MsS0FBSyxHQUFHLENBQVQsQ0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMRCxpQkFBVyxDQUFDRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0Q7QUFDRixHQVJEOztBQVNBLFNBQ0UsTUFBQyx5REFBRDtBQUFRLFNBQUssRUFBQyw4Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDZ0IsR0FEaEIsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGtCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBRkYsU0FJYSxHQUpiLEVBS0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBTEYsQ0FERixFQVVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQVksRUFBRSxFQUFuQztBQUF1QyxZQUFRLEVBQUVKLGNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRix1QkFXb0JELEtBQUssR0FBRyxDQVg1QixPQVlFLE1BQUMsU0FBRDtBQUFXLFVBQU0sRUFBRUgsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFnQkQsQ0EzQkQ7O01BQU1GLGE7QUE2QlNBLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY3JlYXRpdmUtY29kaW5nL2VpZ2VubW9kZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBQNVdyYXBwZXIgPSBkeW5hbWljKGltcG9ydCgncmVhY3QtcDUtd3JhcHBlcicpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+LFxuICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IEVpZ2VubW9kZVBhZ2U6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHt9LCB7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdDogc2tldGNoLCBnZXRIYXJtb25pYywgc2V0SGFybW9uaWMsIEVMRU1TIH0gPSByZXF1aXJlKCdza2V0Y2hlcy9laWdlbm1vZGVzJyk7XG4gIGNvbnN0IGhhbmRsZUhhcm1vbmljID0gKGU6IFJlYWN0LklucHV0RXZlbnQpID0+IHtcbiAgICBpZiAoIShOdW1iZXIoZS50YXJnZXQudmFsdWUpID49IDApKSB7XG4gICAgICBzZXRIYXJtb25pYygwKTtcbiAgICB9IGVsc2UgaWYgKCEoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA8IEVMRU1TKSkge1xuICAgICAgc2V0SGFybW9uaWMoRUxFTVMgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SGFybW9uaWMoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJFaWdlbm1vZGVzIC8vIENyZWF0aXZlIENvZGluZyAvLyBMYXdyZW5jZSBXdVwiPlxuICAgICAgPGgxPlxuICAgICAgICBFaWdlbm1vZGVzIC8veycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGl2ZS1jb2RpbmdcIj5cbiAgICAgICAgICA8YT5DcmVhdGl2ZSBDb2Rpbmc8L2E+XG4gICAgICAgIDwvTGluaz4gLy97JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkxhd3JlbmNlIFd1PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBkZWZhdWx0VmFsdWU9ezIwfSBvbkNoYW5nZT17aGFuZGxlSGFybW9uaWN9IC8+XG4gICAgICAocmFuZ2UgZnJvbSAwIHRvIHtFTEVNUyAtIDF9KVxuICAgICAgPFA1V3JhcHBlciBza2V0Y2g9e3NrZXRjaH0vPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVpZ2VubW9kZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/creative-coding/eigenmodes.tsx\n");

/***/ })

})