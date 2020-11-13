webpackHotUpdate_N_E("pages/creative-coding/eigenmodes",{

/***/ "./pages/creative-coding/eigenmodes.tsx":
/*!**********************************************!*\
  !*** ./pages/creative-coding/eigenmodes.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ \"./components/Layout.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/llwu/git/llwu.github.io/pages/creative-coding/eigenmodes.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\nvar P5Wrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\", 7));\n}, {\n  loading: function loading() {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 18\n      }\n    }, \"Loading...\");\n  },\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-p5-wrapper */ \"./node_modules/react-p5-wrapper/dist/index.js\")];\n    },\n    modules: ['react-p5-wrapper']\n  }\n});\nvar DEFAULT_HARMONIC = 20;\n\nvar EigenmodePage = function EigenmodePage() {\n  var _require = __webpack_require__(/*! sketches/eigenmodes */ \"./sketches/eigenmodes/index.ts\"),\n      Eigenmodes = _require[\"default\"],\n      EigenmodesProps = _require.EigenmodesProps,\n      ELEMS = _require.ELEMS;\n\n  var eigenmodesProps = {\n    harmonic: DEFAULT_HARMONIC\n  };\n\n  var handleHarmonic = function handleHarmonic(e) {\n    var h = Number(e.target.value);\n\n    if (!(h >= 0)) {\n      eigenmodesProps.harmonic = 0;\n    } else if (!(h < ELEMS)) {\n      eigenmodesProps.harmonic = ELEMS - 1;\n    } else {\n      eigenmodesProps.harmonic = h;\n    }\n  };\n\n  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Eigenmodes // Creative Coding // Lawrence Wu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"Eigenmodes //\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/creative-coding\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"Creative Coding\")), \" //\", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Lawrence Wu\"))), \"Eigenvalue #\", __jsx(\"input\", {\n    type: \"number\",\n    defaultValue: DEFAULT_HARMONIC,\n    onChange: handleHarmonic,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 19\n    }\n  }), \"(range from 0 to \", ELEMS - 1, \")\", __jsx(P5Wrapper, {\n    sketch: Eigenmodes(eigenmodesProps),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = EigenmodePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EigenmodePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EigenmodePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRpdmUtY29kaW5nL2VpZ2VubW9kZXMudHN4PzgyNzMiXSwibmFtZXMiOlsiUDVXcmFwcGVyIiwiZHluYW1pYyIsImxvYWRpbmciLCJzc3IiLCJERUZBVUxUX0hBUk1PTklDIiwiRWlnZW5tb2RlUGFnZSIsInJlcXVpcmUiLCJFaWdlbm1vZGVzIiwiRWlnZW5tb2Rlc1Byb3BzIiwiRUxFTVMiLCJlaWdlbm1vZGVzUHJvcHMiLCJoYXJtb25pYyIsImhhbmRsZUhhcm1vbmljIiwiZSIsImgiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPO0FBQUEsU0FBQywySkFBRDtBQUFBLEdBQTZCO0FBQ3BEQyxTQUFPLEVBQUU7QUFBQSxXQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQU47QUFBQSxHQUQyQztBQUVwREMsS0FBRyxFQUFFLEtBRitDO0FBQUE7QUFBQTtBQUFBLGtDQUFyQix1RUFBcUI7QUFBQTtBQUFBLGNBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBN0IsQ0FBekI7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFQSxJQUFNQyxhQUEwQyxHQUFHLFNBQTdDQSxhQUE2QyxHQUFNO0FBQUEsaUJBQ0NDLG1CQUFPLENBQUMsMkRBQUQsQ0FEUjtBQUFBLE1BQ3RDQyxVQURzQztBQUFBLE1BQzFCQyxlQUQwQixZQUMxQkEsZUFEMEI7QUFBQSxNQUNUQyxLQURTLFlBQ1RBLEtBRFM7O0FBRXZELE1BQU1DLGVBQWUsR0FBRztBQUFFQyxZQUFRLEVBQUVQO0FBQVosR0FBeEI7O0FBQ0EsTUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQTRDO0FBQ2pFLFFBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjs7QUFDQSxRQUFJLEVBQUVILENBQUMsSUFBSSxDQUFQLENBQUosRUFBZTtBQUNiSixxQkFBZSxDQUFDQyxRQUFoQixHQUEyQixDQUEzQjtBQUNELEtBRkQsTUFFTyxJQUFJLEVBQUVHLENBQUMsR0FBR0wsS0FBTixDQUFKLEVBQWtCO0FBQ3ZCQyxxQkFBZSxDQUFDQyxRQUFoQixHQUEyQkYsS0FBSyxHQUFHLENBQW5DO0FBQ0QsS0FGTSxNQUVBO0FBQ0xDLHFCQUFlLENBQUNDLFFBQWhCLEdBQTJCRyxDQUEzQjtBQUNEO0FBQ0YsR0FURDs7QUFVQSxTQUNFLE1BQUMseURBQUQ7QUFBUSxTQUFLLEVBQUMsOENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ2dCLEdBRGhCLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQUZGLFNBSWEsR0FKYixFQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQUxGLENBREYsa0JBVWM7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBWSxFQUFFVixnQkFBbkM7QUFBcUQsWUFBUSxFQUFFUSxjQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVmQsdUJBV29CSCxLQUFLLEdBQUcsQ0FYNUIsT0FZRSxNQUFDLFNBQUQ7QUFBVyxVQUFNLEVBQUVGLFVBQVUsQ0FBQ0csZUFBRCxDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERjtBQWdCRCxDQTdCRDs7S0FBTUwsYTtBQStCU0EsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGl2ZS1jb2RpbmcvZWlnZW5tb2Rlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL0xheW91dCc7XG5cbmNvbnN0IFA1V3JhcHBlciA9IGR5bmFtaWMoaW1wb3J0KCdyZWFjdC1wNS13cmFwcGVyJyksIHtcbiAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD4sXG4gIHNzcjogZmFsc2UsXG59KSBhcyBhbnk7XG5cbmNvbnN0IERFRkFVTFRfSEFSTU9OSUMgPSAyMDtcblxuY29uc3QgRWlnZW5tb2RlUGFnZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e30+ID0gKCkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHQ6IEVpZ2VubW9kZXMsIEVpZ2VubW9kZXNQcm9wcywgRUxFTVMgfSA9IHJlcXVpcmUoJ3NrZXRjaGVzL2VpZ2VubW9kZXMnKTtcbiAgY29uc3QgZWlnZW5tb2Rlc1Byb3BzID0geyBoYXJtb25pYzogREVGQVVMVF9IQVJNT05JQyB9O1xuICBjb25zdCBoYW5kbGVIYXJtb25pYyA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGggPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmICghKGggPj0gMCkpIHtcbiAgICAgIGVpZ2VubW9kZXNQcm9wcy5oYXJtb25pYyA9IDA7XG4gICAgfSBlbHNlIGlmICghKGggPCBFTEVNUykpIHtcbiAgICAgIGVpZ2VubW9kZXNQcm9wcy5oYXJtb25pYyA9IEVMRU1TIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWlnZW5tb2Rlc1Byb3BzLmhhcm1vbmljID0gaDtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkVpZ2VubW9kZXMgLy8gQ3JlYXRpdmUgQ29kaW5nIC8vIExhd3JlbmNlIFd1XCI+XG4gICAgICA8aDE+XG4gICAgICAgIEVpZ2VubW9kZXMgLy97JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0aXZlLWNvZGluZ1wiPlxuICAgICAgICAgIDxhPkNyZWF0aXZlIENvZGluZzwvYT5cbiAgICAgICAgPC9MaW5rPiAvL3snICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+TGF3cmVuY2UgV3U8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgICBFaWdlbnZhbHVlICM8aW5wdXQgdHlwZT1cIm51bWJlclwiIGRlZmF1bHRWYWx1ZT17REVGQVVMVF9IQVJNT05JQ30gb25DaGFuZ2U9e2hhbmRsZUhhcm1vbmljfSAvPlxuICAgICAgKHJhbmdlIGZyb20gMCB0byB7RUxFTVMgLSAxfSlcbiAgICAgIDxQNVdyYXBwZXIgc2tldGNoPXtFaWdlbm1vZGVzKGVpZ2VubW9kZXNQcm9wcyl9Lz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFaWdlbm1vZGVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/creative-coding/eigenmodes.tsx\n");

/***/ })

})