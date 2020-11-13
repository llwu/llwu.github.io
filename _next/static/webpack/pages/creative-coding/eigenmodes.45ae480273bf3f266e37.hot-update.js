webpackHotUpdate_N_E("pages/creative-coding/eigenmodes",{

/***/ "./sketches/eigenmodes/index.ts":
/*!**************************************!*\
  !*** ./sketches/eigenmodes/index.ts ***!
  \**************************************/
/*! exports provided: ELEMS, setHarmonic, getHarmonic, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELEMS\", function() { return ELEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHarmonic\", function() { return setHarmonic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHarmonic\", function() { return getHarmonic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return s; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-matrix */ \"./node_modules/ml-matrix/src/index.js\");\n\n\n\nvar viridis = __webpack_require__(/*! scale-color-perceptual/viridis */ \"./node_modules/scale-color-perceptual/viridis.js\");\n\nvar BASE_FREQUENCY = 5;\nvar ROWS = 20;\nvar COLUMNS = 20;\nvar WIDTH = 20;\nvar HEIGHT = 20;\nvar ELEMS = ROWS * COLUMNS;\n\nvar idx = function idx(row, column) {\n  return row * COLUMNS + column;\n};\n\nvar harmonic = 20;\nvar setHarmonic = function setHarmonic(h) {\n  return harmonic = Number(h);\n};\nvar getHarmonic = function getHarmonic() {\n  return harmonic;\n};\nfunction s(sketch) {\n  var t = 0.0;\n  var laplacian = ml_matrix__WEBPACK_IMPORTED_MODULE_1__[\"Matrix\"].zeros(ELEMS, ELEMS);\n  console.log(sketch.frameRate());\n\n  for (var i = 0; i < ROWS; i++) {\n    for (var j = 0; j < COLUMNS; j++) {\n      var deg = (i > 0 ? 1 : 0) + (i < ROWS - 1 ? 1 : 0) + (j > 0 ? 1 : 0) + (j < COLUMNS - 1 ? 1 : 0);\n      laplacian.set(idx(i, j), idx(i, j), deg);\n\n      if (i > 0) {\n        laplacian.set(idx(i, j), idx(i - 1, j), -1.0);\n        laplacian.set(idx(i - 1, j), idx(i, j), -1.0);\n      }\n\n      if (i < ROWS - 1) {\n        laplacian.set(idx(i, j), idx(i + 1, j), -1.0);\n        laplacian.set(idx(i + 1, j), idx(i, j), -1.0);\n      }\n\n      if (j > 0) {\n        laplacian.set(idx(i, j), idx(i, j - 1), -1.0);\n        laplacian.set(idx(i, j - 1), idx(i, j), -1.0);\n      }\n\n      if (j < COLUMNS - 1) {\n        laplacian.set(idx(i, j), idx(i, j + 1), -1.0);\n        laplacian.set(idx(i, j + 1), idx(i, j), -1.0);\n      }\n    }\n  }\n\n  var eigendecomp = new ml_matrix__WEBPACK_IMPORTED_MODULE_1__[\"EigenvalueDecomposition\"](laplacian);\n  var eigenvalues = eigendecomp.realEigenvalues;\n  var eigenmodes = eigendecomp.eigenvectorMatrix;\n\n  sketch.setup = function setup() {\n    sketch.createCanvas(WIDTH * COLUMNS, HEIGHT * ROWS);\n  };\n\n  sketch.draw = function draw() {\n    t += 1.0 / 60;\n    sketch.background(128);\n    var eigenmode = [];\n\n    for (var _i = 0; _i < ELEMS; _i++) {\n      eigenmode.push(eigenmodes.get(_i, harmonic));\n    }\n\n    var magnitudes = eigenmode.map(Math.abs);\n    var maxM = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(magnitudes));\n\n    if (maxM > 0.01) {\n      eigenmode = eigenmode.map(function (x) {\n        return x / maxM;\n      });\n    }\n\n    for (var _i2 = 0; _i2 < ROWS; _i2++) {\n      for (var _j = 0; _j < COLUMNS; _j++) {\n        var y = _i2 * HEIGHT;\n        var x = _j * WIDTH;\n        var e = eigenmode[idx(_i2, _j)] * 0.5;\n        var scalar = e * Math.sin(t * BASE_FREQUENCY * Math.sqrt(Math.max(eigenvalues[harmonic], 0))) + 0.5;\n        sketch.push();\n        sketch.fill(viridis(scalar));\n        sketch.strokeWeight(0);\n        sketch.rect(x, y, WIDTH, HEIGHT);\n        sketch.pop();\n      }\n    }\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2tldGNoZXMvZWlnZW5tb2Rlcy9pbmRleC50cz8zNTMwIl0sIm5hbWVzIjpbInZpcmlkaXMiLCJyZXF1aXJlIiwiQkFTRV9GUkVRVUVOQ1kiLCJST1dTIiwiQ09MVU1OUyIsIldJRFRIIiwiSEVJR0hUIiwiRUxFTVMiLCJpZHgiLCJyb3ciLCJjb2x1bW4iLCJoYXJtb25pYyIsInNldEhhcm1vbmljIiwiaCIsIk51bWJlciIsImdldEhhcm1vbmljIiwicyIsInNrZXRjaCIsInQiLCJsYXBsYWNpYW4iLCJNYXRyaXgiLCJ6ZXJvcyIsImNvbnNvbGUiLCJsb2ciLCJmcmFtZVJhdGUiLCJpIiwiaiIsImRlZyIsInNldCIsImVpZ2VuZGVjb21wIiwiRWlnZW52YWx1ZURlY29tcG9zaXRpb24iLCJlaWdlbnZhbHVlcyIsInJlYWxFaWdlbnZhbHVlcyIsImVpZ2VubW9kZXMiLCJlaWdlbnZlY3Rvck1hdHJpeCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwiZHJhdyIsImJhY2tncm91bmQiLCJlaWdlbm1vZGUiLCJwdXNoIiwiZ2V0IiwibWFnbml0dWRlcyIsIm1hcCIsIk1hdGgiLCJhYnMiLCJtYXhNIiwibWF4IiwieCIsInkiLCJlIiwic2NhbGFyIiwic2luIiwic3FydCIsImZpbGwiLCJzdHJva2VXZWlnaHQiLCJyZWN0IiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3RkFBRCxDQUF2Qjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsQ0FBdkI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBLElBQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDTyxJQUFNQyxLQUFLLEdBQUdKLElBQUksR0FBR0MsT0FBckI7O0FBQ1AsSUFBTUksR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FB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LENBQUNtRCxNQUFELENBQW5CO0FBQ0FsQyxjQUFNLENBQUNzQyxZQUFQLENBQW9CLENBQXBCO0FBQ0F0QyxjQUFNLENBQUN1QyxJQUFQLENBQVlSLENBQVosRUFBZUMsQ0FBZixFQUFrQjVDLEtBQWxCLEVBQXlCQyxNQUF6QjtBQUNBVyxjQUFNLENBQUN3QyxHQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBNUJEO0FBNkJEIiwiZmlsZSI6Ii4vc2tldGNoZXMvZWlnZW5tb2Rlcy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHA1IGZyb20gJ3A1JztcbmltcG9ydCB7IE1hdHJpeCwgRWlnZW52YWx1ZURlY29tcG9zaXRpb24gfSBmcm9tICdtbC1tYXRyaXgnO1xuY29uc3QgdmlyaWRpcyA9IHJlcXVpcmUoJ3NjYWxlLWNvbG9yLXBlcmNlcHR1YWwvdmlyaWRpcycpO1xuXG5jb25zdCBCQVNFX0ZSRVFVRU5DWSA9IDU7XG5jb25zdCBST1dTID0gMjA7XG5jb25zdCBDT0xVTU5TID0gMjA7XG5jb25zdCBXSURUSCA9IDIwO1xuY29uc3QgSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgRUxFTVMgPSBST1dTICogQ09MVU1OUztcbmNvbnN0IGlkeCA9IChyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpID0+IChyb3cgKiBDT0xVTU5TICsgY29sdW1uKTtcbmxldCBoYXJtb25pYyA9IDIwO1xuZXhwb3J0IGNvbnN0IHNldEhhcm1vbmljID0gKGg6IG51bWJlcikgPT4gKGhhcm1vbmljID0gTnVtYmVyKGgpKTtcbmV4cG9ydCBjb25zdCBnZXRIYXJtb25pYyA9ICgpID0+IGhhcm1vbmljO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzKHNrZXRjaDogcDUpIHtcbiAgbGV0IHQgPSAwLjA7XG4gIGNvbnN0IGxhcGxhY2lhbiA9IE1hdHJpeC56ZXJvcyhFTEVNUywgRUxFTVMpO1xuICBjb25zb2xlLmxvZyhza2V0Y2guZnJhbWVSYXRlKCkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ09MVU1OUzsgaisrKSB7XG4gICAgICBsZXQgZGVnID0gKGkgPiAwID8gMSA6IDApICsgKGkgPCBST1dTIC0gMSA/IDEgOiAwKSArIChqID4gMCA/IDEgOiAwKSArIChqIDwgQ09MVU1OUyAtIDEgPyAxIDogMCk7XG4gICAgICBsYXBsYWNpYW4uc2V0KGlkeChpLCBqKSwgaWR4KGksIGopLCBkZWcpO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGxhcGxhY2lhbi5zZXQoaWR4KGksIGopLCBpZHgoaSAtIDEsIGopLCAtMS4wKTtcbiAgICAgICAgbGFwbGFjaWFuLnNldChpZHgoaSAtIDEsIGopLCBpZHgoaSwgaiksIC0xLjApO1xuICAgICAgfVxuICAgICAgaWYgKGkgPCBST1dTIC0gMSkge1xuICAgICAgICBsYXBsYWNpYW4uc2V0KGlkeChpLCBqKSwgaWR4KGkgKyAxLCBqKSwgLTEuMCk7XG4gICAgICAgIGxhcGxhY2lhbi5zZXQoaWR4KGkgKyAxLCBqKSwgaWR4KGksIGopLCAtMS4wKTtcbiAgICAgIH1cbiAgICAgIGlmIChqID4gMCkge1xuICAgICAgICBsYXBsYWNpYW4uc2V0KGlkeChpLCBqKSwgaWR4KGksIGogLSAxKSwgLTEuMCk7XG4gICAgICAgIGxhcGxhY2lhbi5zZXQoaWR4KGksIGogLSAxKSwgaWR4KGksIGopLCAtMS4wKTtcbiAgICAgIH1cbiAgICAgIGlmIChqIDwgQ09MVU1OUyAtIDEpIHtcbiAgICAgICAgbGFwbGFjaWFuLnNldChpZHgoaSwgaiksIGlkeChpLCBqICsgMSksIC0xLjApO1xuICAgICAgICBsYXBsYWNpYW4uc2V0KGlkeChpLCBqICsgMSksIGlkeChpLCBqKSwgLTEuMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGVpZ2VuZGVjb21wID0gbmV3IEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uKGxhcGxhY2lhbik7XG4gIGNvbnN0IGVpZ2VudmFsdWVzID0gZWlnZW5kZWNvbXAucmVhbEVpZ2VudmFsdWVzO1xuICBjb25zdCBlaWdlbm1vZGVzID0gZWlnZW5kZWNvbXAuZWlnZW52ZWN0b3JNYXRyaXg7XG5cbiAgc2tldGNoLnNldHVwID0gZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgc2tldGNoLmNyZWF0ZUNhbnZhcyhXSURUSCAqIENPTFVNTlMsIEhFSUdIVCAqIFJPV1MpO1xuICB9O1xuXG4gIHNrZXRjaC5kcmF3ID0gZnVuY3Rpb24gZHJhdygpIHtcbiAgICB0ICs9IDEuMCAvIDYwO1xuICAgIHNrZXRjaC5iYWNrZ3JvdW5kKDEyOCk7XG5cbiAgICBsZXQgZWlnZW5tb2RlID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFTEVNUzsgaSsrKSB7XG4gICAgICBlaWdlbm1vZGUucHVzaChlaWdlbm1vZGVzLmdldChpLCBoYXJtb25pYykpO1xuICAgIH1cbiAgICBjb25zdCBtYWduaXR1ZGVzID0gZWlnZW5tb2RlLm1hcChNYXRoLmFicyk7XG4gICAgY29uc3QgbWF4TSA9IE1hdGgubWF4KC4uLm1hZ25pdHVkZXMpO1xuICAgIGlmIChtYXhNID4gMC4wMSkge1xuICAgICAgZWlnZW5tb2RlID0gZWlnZW5tb2RlLm1hcCh4ID0+IHggLyBtYXhNKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFJPV1M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDT0xVTU5TOyBqKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGkgKiBIRUlHSFQ7XG4gICAgICAgIGNvbnN0IHggPSBqICogV0lEVEg7XG4gICAgICAgIGNvbnN0IGUgPSBlaWdlbm1vZGVbaWR4KGksIGopXSAqIDAuNTtcbiAgICAgICAgY29uc3Qgc2NhbGFyID0gZSAqIE1hdGguc2luKHQgKiBCQVNFX0ZSRVFVRU5DWSAqIE1hdGguc3FydChNYXRoLm1heChlaWdlbnZhbHVlc1toYXJtb25pY10sIDApKSkgKyAwLjU7XG5cbiAgICAgICAgc2tldGNoLnB1c2goKTtcbiAgICAgICAgc2tldGNoLmZpbGwodmlyaWRpcyhzY2FsYXIpKTtcbiAgICAgICAgc2tldGNoLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgc2tldGNoLnJlY3QoeCwgeSwgV0lEVEgsIEhFSUdIVCk7XG4gICAgICAgIHNrZXRjaC5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sketches/eigenmodes/index.ts\n");

/***/ })

})