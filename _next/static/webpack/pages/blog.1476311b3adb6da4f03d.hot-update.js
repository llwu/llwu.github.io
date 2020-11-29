webpackHotUpdate_N_E("pages/blog",{

/***/ "./metadata/posts.ts":
/*!***************************!*\
  !*** ./metadata/posts.ts ***!
  \***************************/
/*! exports provided: Posts, PostMap, TagCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Posts\", function() { return Posts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostMap\", function() { return PostMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TagCounts\", function() { return TagCounts; });\nvar Posts = [{\n  'id': 'bayes-contingency-table',\n  'title': 'Bayesian analysis of contingency tables (feat. COVID-19 vaccines)',\n  'description': '2x2, mxn, hierarchical, multiple covariates, approximation, prior and posterior plots',\n  'date': new Date('2020-11-26T02:35:00Z'),\n  'tags': ['stats', 'bayes'],\n  'redditUrl': 'https://www.reddit.com/user/llllvvuu/comments/k2ddy9/bayesian_analysis_of_contingency_tables_feat/',\n  'twitterUrl': 'https://twitter.com/llllvvuu/status/1332974138517032960'\n}];\nPosts.sort(function (a, b) {\n  return b.date.valueOf() - a.date.valueOf();\n});\nvar PostMap = {};\nPosts.forEach(function (post) {\n  return PostMap[post.id] = post;\n});\nvar unsortedTags = {};\nPosts.forEach(function (post) {\n  return post.tags.forEach(function (tag) {\n    unsortedTags[tag] = (unsortedTags[tag] || 0) + 1;\n  });\n});\nvar TagCounts = Object.entries(unsortedTags).sort(_c = function _c(a, b) {\n  return b[1] - a[1];\n});\n_c2 = TagCounts;\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TagCounts$Object.entries(unsortedTags).sort\");\n$RefreshReg$(_c2, \"TagCounts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWV0YWRhdGEvcG9zdHMudHM/MzNmYiJdLCJuYW1lcyI6WyJQb3N0cyIsIkRhdGUiLCJzb3J0IiwiYSIsImIiLCJkYXRlIiwidmFsdWVPZiIsIlBvc3RNYXAiLCJmb3JFYWNoIiwicG9zdCIsImlkIiwidW5zb3J0ZWRUYWdzIiwidGFncyIsInRhZyIsIlRhZ0NvdW50cyIsIk9iamVjdCIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRSxRQUFNLHlCQURSO0FBRUUsV0FBUyxtRUFGWDtBQUdFLGlCQUFlLHVGQUhqQjtBQUlFLFVBQVEsSUFBSUMsSUFBSixDQUFTLHNCQUFULENBSlY7QUFLRSxVQUFRLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FMVjtBQU1FLGVBQWEsb0dBTmY7QUFPRSxnQkFBYztBQVBoQixDQURZLENBQWQ7QUFXQUQsS0FBSyxDQUFDRSxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBV0EsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLE9BQVAsS0FBbUJILENBQUMsQ0FBQ0UsSUFBRixDQUFPQyxPQUFQLEVBQTlCO0FBQUEsQ0FBWDtBQUVBLElBQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUNBUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxVQUFDQyxJQUFEO0FBQUEsU0FBV0YsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEVBQU4sQ0FBUCxHQUFtQkQsSUFBOUI7QUFBQSxDQUFkO0FBRUEsSUFBTUUsWUFBWSxHQUFHLEVBQXJCO0FBQ0FYLEtBQUssQ0FBQ1EsT0FBTixDQUFjLFVBQUNDLElBQUQ7QUFBQSxTQUFVQSxJQUFJLENBQUNHLElBQUwsQ0FBVUosT0FBVixDQUFrQixVQUFDSyxHQUFELEVBQVM7QUFDakRGLGdCQUFZLENBQUNFLEdBQUQsQ0FBWixHQUFvQixDQUFDRixZQUFZLENBQUNFLEdBQUQsQ0FBWixJQUFxQixDQUF0QixJQUEyQixDQUEvQztBQUNELEdBRnVCLENBQVY7QUFBQSxDQUFkO0FBR0EsSUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsWUFBZixFQUE2QlQsSUFBN0IsTUFBa0MsWUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBV0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPRCxDQUFDLENBQUMsQ0FBRCxDQUFuQjtBQUFBLENBQWxDLENBQWxCO01BQU1XLFM7QUFFTiIsImZpbGUiOiIuL21ldGFkYXRhL3Bvc3RzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUG9zdHMgPSBbXG4gIHtcbiAgICAnaWQnOiAnYmF5ZXMtY29udGluZ2VuY3ktdGFibGUnLFxuICAgICd0aXRsZSc6ICdCYXllc2lhbiBhbmFseXNpcyBvZiBjb250aW5nZW5jeSB0YWJsZXMgKGZlYXQuIENPVklELTE5IHZhY2NpbmVzKScsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJzJ4MiwgbXhuLCBoaWVyYXJjaGljYWwsIG11bHRpcGxlIGNvdmFyaWF0ZXMsIGFwcHJveGltYXRpb24sIHByaW9yIGFuZCBwb3N0ZXJpb3IgcGxvdHMnLFxuICAgICdkYXRlJzogbmV3IERhdGUoJzIwMjAtMTEtMjZUMDI6MzU6MDBaJyksXG4gICAgJ3RhZ3MnOiBbJ3N0YXRzJywgJ2JheWVzJ10sXG4gICAgJ3JlZGRpdFVybCc6ICdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvbGxsbHZ2dXUvY29tbWVudHMvazJkZHk5L2JheWVzaWFuX2FuYWx5c2lzX29mX2NvbnRpbmdlbmN5X3RhYmxlc19mZWF0LycsXG4gICAgJ3R3aXR0ZXJVcmwnOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9sbGxsdnZ1dS9zdGF0dXMvMTMzMjk3NDEzODUxNzAzMjk2MCcsXG4gIH0sXG5dO1xuUG9zdHMuc29ydCgoYSwgYikgPT4gKGIuZGF0ZS52YWx1ZU9mKCkgLSBhLmRhdGUudmFsdWVPZigpKSk7XG5cbmNvbnN0IFBvc3RNYXAgPSB7fSBhcyBhbnk7XG5Qb3N0cy5mb3JFYWNoKChwb3N0KSA9PiAoUG9zdE1hcFtwb3N0LmlkXSA9IHBvc3QpKTtcblxuY29uc3QgdW5zb3J0ZWRUYWdzID0ge30gYXMge1trOiBzdHJpbmddOiBudW1iZXJ9O1xuUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4gcG9zdC50YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICB1bnNvcnRlZFRhZ3NbdGFnXSA9ICh1bnNvcnRlZFRhZ3NbdGFnXSB8fCAwKSArIDE7XG59KSk7XG5jb25zdCBUYWdDb3VudHMgPSBPYmplY3QuZW50cmllcyh1bnNvcnRlZFRhZ3MpLnNvcnQoKGEsIGIpID0+IChiWzFdIC0gYVsxXSkpO1xuXG5leHBvcnQgeyBQb3N0cywgUG9zdE1hcCwgVGFnQ291bnRzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./metadata/posts.ts\n");

/***/ })

})