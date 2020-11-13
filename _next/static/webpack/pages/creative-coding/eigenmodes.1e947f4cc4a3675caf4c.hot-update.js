webpackHotUpdate_N_E("pages/creative-coding/eigenmodes",{

/***/ "./sketches/eigenmodes/index.ts":
/*!**************************************!*\
  !*** ./sketches/eigenmodes/index.ts ***!
  \**************************************/
/*! exports provided: ELEMS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELEMS\", function() { return ELEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return s; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-matrix */ \"./node_modules/ml-matrix/src/index.js\");\n\n\n\nvar viridis = __webpack_require__(/*! scale-color-perceptual/viridis */ \"./node_modules/scale-color-perceptual/viridis.js\");\n\nvar BASE_FREQUENCY = 12;\nvar ROWS = 20;\nvar COLUMNS = 20;\nvar WIDTH = 20;\nvar HEIGHT = 20;\nvar ELEMS = ROWS * COLUMNS;\n\nvar idx = function idx(row, column) {\n  return row * COLUMNS + column;\n};\n\nfunction s(sketch) {\n  var t = 0.0;\n  var harmonic = 20;\n  var laplacian = ml_matrix__WEBPACK_IMPORTED_MODULE_1__[\"Matrix\"].zeros(ELEMS, ELEMS);\n\n  for (var i = 0; i < ROWS; i++) {\n    for (var j = 0; j < COLUMNS; j++) {\n      var deg = (i > 0 ? 1 : 0) + (i < ROWS - 1 ? 1 : 0) + (j > 0 ? 1 : 0) + (j < COLUMNS - 1 ? 1 : 0);\n      laplacian.set(idx(i, j), idx(i, j), deg);\n\n      if (i > 0) {\n        laplacian.set(idx(i, j), idx(i - 1, j), -1.0);\n        laplacian.set(idx(i - 1, j), idx(i, j), -1.0);\n      }\n\n      if (i < ROWS - 1) {\n        laplacian.set(idx(i, j), idx(i + 1, j), -1.0);\n        laplacian.set(idx(i + 1, j), idx(i, j), -1.0);\n      }\n\n      if (j > 0) {\n        laplacian.set(idx(i, j), idx(i, j - 1), -1.0);\n        laplacian.set(idx(i, j - 1), idx(i, j), -1.0);\n      }\n\n      if (j < COLUMNS - 1) {\n        laplacian.set(idx(i, j), idx(i, j + 1), -1.0);\n        laplacian.set(idx(i, j + 1), idx(i, j), -1.0);\n      }\n    }\n  }\n\n  var eigendecomp = new ml_matrix__WEBPACK_IMPORTED_MODULE_1__[\"EigenvalueDecomposition\"](laplacian);\n  var eigenvalues = eigendecomp.realEigenvalues;\n  var eigenmodes = eigendecomp.eigenvectorMatrix;\n\n  sketch.setup = function setup() {\n    sketch.createCanvas(WIDTH * COLUMNS, HEIGHT * ROWS);\n  };\n\n  sketch.draw = function draw() {\n    console.log(harmonic);\n    t += 1.0 / 60;\n    sketch.background(128);\n    var eigenmode = [];\n\n    for (var _i = 0; _i < ELEMS; _i++) {\n      eigenmode.push(eigenmodes.get(_i, harmonic));\n    }\n\n    var magnitudes = eigenmode.map(Math.abs);\n    var maxM = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(magnitudes));\n\n    if (maxM > 0.01) {\n      eigenmode = eigenmode.map(function (x) {\n        return x / maxM;\n      });\n    }\n\n    for (var _i2 = 0; _i2 < ROWS; _i2++) {\n      for (var _j = 0; _j < COLUMNS; _j++) {\n        var y = _i2 * HEIGHT;\n        var x = _j * WIDTH;\n        var e = eigenmode[idx(_i2, _j)] * 0.5;\n        var scalar = e * Math.sin(t * BASE_FREQUENCY * Math.sqrt(Math.max(eigenvalues[harmonic], 0))) + 0.5;\n        sketch.push();\n        sketch.fill(viridis(scalar));\n        sketch.strokeWeight(0);\n        sketch.rect(x, y, WIDTH, HEIGHT);\n        sketch.pop();\n      }\n    }\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvZWlnZW5tb2Rlcy9pbmRleC50cz8zNTMwIl0sIm5hbWVzIjpbInZpcmlkaXMiLCJyZXF1aXJlIiwiQkFTRV9GUkVRVUVOQ1kiLCJST1dTIiwiQ09MVU1OUyIsIldJRFRIIiwiSEVJR0hUIiwiRUxFTVMiLCJpZHgiLCJyb3ciLCJjb2x1bW4iLCJzIiwic2tldGNoIiwidCIsImhhcm1vbmljIiwibGFwbGFjaWFuIiwiTWF0cml4IiwiemVyb3MiLCJpIiwiaiIsImRlZyIsInNldCIsImVpZ2VuZGVjb21wIiwiRWlnZW52YWx1ZURlY29tcG9zaXRpb24iLCJlaWdlbnZhbHVlcyIsInJlYWxFaWdlbnZhbHVlcyIsImVpZ2VubW9kZXMiLCJlaWdlbnZlY3Rvck1hdHJpeCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kIiwiZWlnZW5tb2RlIiwicHVzaCIsImdldCIsIm1hZ25pdHVkZXMiLCJtYXAiLCJNYXRoIiwiYWJzIiwibWF4TSIsIm1heCIsIngiLCJ5IiwiZSIsInNjYWxhciIsInNpbiIsInNxcnQiLCJmaWxsIiwic3Ryb2tlV2VpZ2h0IiwicmVjdCIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdGQUFELENBQXZCOztBQUVBLElBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUNPLElBQU1DLEtBQUssR0FBR0osSUFBSSxHQUFHQyxPQUFyQjs7QUFDUCxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFELEVBQWNDLE1BQWQ7QUFBQSxTQUFrQ0QsR0FBRyxHQUFHTCxPQUFOLEdBQWdCTSxN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QSxlQUFJQSxDQUFDLEdBQUdGLElBQVI7QUFBQSxPQUFmLENBQVo7QUFDRDs7QUFFRCxTQUFLLElBQUl2QixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHZixJQUFwQixFQUEwQmUsR0FBQyxFQUEzQixFQUErQjtBQUM3QixXQUFLLElBQUlDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdmLE9BQXBCLEVBQTZCZSxFQUFDLEVBQTlCLEVBQWtDO0FBQ2hDLFlBQU15QixDQUFDLEdBQUcxQixHQUFDLEdBQUdaLE1BQWQ7QUFDQSxZQUFNcUMsQ0FBQyxHQUFHeEIsRUFBQyxHQUFHZCxLQUFkO0FBQ0EsWUFBTXdDLENBQUMsR0FBR1gsU0FBUyxDQUFDMUIsR0FBRyxDQUFDVSxHQUFELEVBQUlDLEVBQUosQ0FBSixDQUFULEdBQXVCLEdBQWpDO0FBQ0EsWUFBTTJCLE1BQU0sR0FBR0QsQ0FBQyxHQUFHTixJQUFJLENBQUNRLEdBQUwsQ0FBU2xDLENBQUMsR0FBR1gsY0FBSixHQUFxQnFDLElBQUksQ0FBQ1MsSUFBTCxDQUFVVCxJQUFJLENBQUNHLEdBQUwsQ0FBU2xCLFdBQVcsQ0FBQ1YsUUFBRCxDQUFwQixFQUFnQyxDQUFoQyxDQUFWLENBQTlCLENBQUosR0FBbUYsR0FBbEc7QUFFQUYsY0FBTSxDQUFDdUIsSUFBUDtBQUNBdkIsY0FBTSxDQUFDcUMsSUFBUCxDQUFZakQsT0FBTyxDQUFDOEMsTUFBRCxDQUFuQjtBQUNBbEMsY0FBTSxDQUFDc0MsWUFBUCxDQUFvQixDQUFwQjtBQUNBdEMsY0FBTSxDQUFDdUMsSUFBUCxDQUFZUixDQUFaLEVBQWVDLENBQWYsRUFBa0J2QyxLQUFsQixFQUF5QkMsTUFBekI7QUFDQU0sY0FBTSxDQUFDd0MsR0FBUDtBQUNEO0FBQ0Y7QUFDRixHQTdCRDtBQThCRCIsImZpbGUiOiIuL3NrZXRjaGVzL2VpZ2VubW9kZXMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwNSBmcm9tICdwNSc7XG5pbXBvcnQgeyBNYXRyaXgsIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uIH0gZnJvbSAnbWwtbWF0cml4JztcbmNvbnN0IHZpcmlkaXMgPSByZXF1aXJlKCdzY2FsZS1jb2xvci1wZXJjZXB0dWFsL3ZpcmlkaXMnKTtcblxuY29uc3QgQkFTRV9GUkVRVUVOQ1kgPSAxMjtcbmNvbnN0IFJPV1MgPSAyMDtcbmNvbnN0IENPTFVNTlMgPSAyMDtcbmNvbnN0IFdJRFRIID0gMjA7XG5jb25zdCBIRUlHSFQgPSAyMDtcbmV4cG9ydCBjb25zdCBFTEVNUyA9IFJPV1MgKiBDT0xVTU5TO1xuY29uc3QgaWR4ID0gKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcikgPT4gKHJvdyAqIENPTFVNTlMgKyBjb2x1bW4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzKHNrZXRjaDogcDUpIHtcbiAgbGV0IHQgPSAwLjA7XG4gIGxldCBoYXJtb25pYyA9IDIwO1xuICBjb25zdCBsYXBsYWNpYW4gPSBNYXRyaXguemVyb3MoRUxFTVMsIEVMRU1TKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1dTOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IENPTFVNTlM7IGorKykge1xuICAgICAgbGV0IGRlZyA9IChpID4gMCA/IDEgOiAwKSArIChpIDwgUk9XUyAtIDEgPyAxIDogMCkgKyAoaiA+IDAgPyAxIDogMCkgKyAoaiA8IENPTFVNTlMgLSAxID8gMSA6IDApO1xuICAgICAgbGFwbGFjaWFuLnNldChpZHgoaSwgaiksIGlkeChpLCBqKSwgZGVnKTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBsYXBsYWNpYW4uc2V0KGlkeChpLCBqKSwgaWR4KGkgLSAxLCBqKSwgLTEuMCk7XG4gICAgICAgIGxhcGxhY2lhbi5zZXQoaWR4KGkgLSAxLCBqKSwgaWR4KGksIGopLCAtMS4wKTtcbiAgICAgIH1cbiAgICAgIGlmIChpIDwgUk9XUyAtIDEpIHtcbiAgICAgICAgbGFwbGFjaWFuLnNldChpZHgoaSwgaiksIGlkeChpICsgMSwgaiksIC0xLjApO1xuICAgICAgICBsYXBsYWNpYW4uc2V0KGlkeChpICsgMSwgaiksIGlkeChpLCBqKSwgLTEuMCk7XG4gICAgICB9XG4gICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgbGFwbGFjaWFuLnNldChpZHgoaSwgaiksIGlkeChpLCBqIC0gMSksIC0xLjApO1xuICAgICAgICBsYXBsYWNpYW4uc2V0KGlkeChpLCBqIC0gMSksIGlkeChpLCBqKSwgLTEuMCk7XG4gICAgICB9XG4gICAgICBpZiAoaiA8IENPTFVNTlMgLSAxKSB7XG4gICAgICAgIGxhcGxhY2lhbi5zZXQoaWR4KGksIGopLCBpZHgoaSwgaiArIDEpLCAtMS4wKTtcbiAgICAgICAgbGFwbGFjaWFuLnNldChpZHgoaSwgaiArIDEpLCBpZHgoaSwgaiksIC0xLjApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBlaWdlbmRlY29tcCA9IG5ldyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvbihsYXBsYWNpYW4pO1xuICBjb25zdCBlaWdlbnZhbHVlcyA9IGVpZ2VuZGVjb21wLnJlYWxFaWdlbnZhbHVlcztcbiAgY29uc3QgZWlnZW5tb2RlcyA9IGVpZ2VuZGVjb21wLmVpZ2VudmVjdG9yTWF0cml4O1xuXG4gIHNrZXRjaC5zZXR1cCA9IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHNrZXRjaC5jcmVhdGVDYW52YXMoV0lEVEggKiBDT0xVTU5TLCBIRUlHSFQgKiBST1dTKTtcbiAgfTtcblxuICBza2V0Y2guZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc29sZS5sb2coaGFybW9uaWMpO1xuICAgIHQgKz0gMS4wIC8gNjA7XG4gICAgc2tldGNoLmJhY2tncm91bmQoMTI4KTtcblxuICAgIGxldCBlaWdlbm1vZGUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVMRU1TOyBpKyspIHtcbiAgICAgIGVpZ2VubW9kZS5wdXNoKGVpZ2VubW9kZXMuZ2V0KGksIGhhcm1vbmljKSk7XG4gICAgfVxuICAgIGNvbnN0IG1hZ25pdHVkZXMgPSBlaWdlbm1vZGUubWFwKE1hdGguYWJzKTtcbiAgICBjb25zdCBtYXhNID0gTWF0aC5tYXgoLi4ubWFnbml0dWRlcyk7XG4gICAgaWYgKG1heE0gPiAwLjAxKSB7XG4gICAgICBlaWdlbm1vZGUgPSBlaWdlbm1vZGUubWFwKHggPT4geCAvIG1heE0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUk9XUzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENPTFVNTlM7IGorKykge1xuICAgICAgICBjb25zdCB5ID0gaSAqIEhFSUdIVDtcbiAgICAgICAgY29uc3QgeCA9IGogKiBXSURUSDtcbiAgICAgICAgY29uc3QgZSA9IGVpZ2VubW9kZVtpZHgoaSwgaildICogMC41O1xuICAgICAgICBjb25zdCBzY2FsYXIgPSBlICogTWF0aC5zaW4odCAqIEJBU0VfRlJFUVVFTkNZICogTWF0aC5zcXJ0KE1hdGgubWF4KGVpZ2VudmFsdWVzW2hhcm1vbmljXSwgMCkpKSArIDAuNTtcblxuICAgICAgICBza2V0Y2gucHVzaCgpO1xuICAgICAgICBza2V0Y2guZmlsbCh2aXJpZGlzKHNjYWxhcikpO1xuICAgICAgICBza2V0Y2guc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBza2V0Y2gucmVjdCh4LCB5LCBXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgc2tldGNoLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sketches/eigenmodes/index.ts\n");

/***/ })

})