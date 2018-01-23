/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Renderer_1 = __webpack_require__(1);
var ImageBillboard_1 = __webpack_require__(2);
var main = function () {
    var billboards = new Array();
    billboards.push(new ImageBillboard_1["default"]('images/test.png', 0, 0, 0, 300, 300));
    Renderer_1["default"]('context', 600, 400, billboards);
};
main();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var generateCanvas = function (id, width, height) {
    var canvasElement = document.createElement('canvas');
    document.getElementById(id).appendChild(canvasElement);
    canvasElement.width = width;
    canvasElement.height = height;
    return canvasElement;
};
var getContext = function (canvas) {
    var context = canvas.getContext('2d');
    return context;
};
var orderElements = function (elements) {
    return elements.sort(function (a, b) { return a.z - b.z; });
};
var renderElements = function (id, width, height, elements) {
    var canvas = generateCanvas(id, width, height);
    var context = getContext(canvas);
    var ordedElements = orderElements(elements);
    var render = function () {
        context.clearRect(0, 0, width, height);
        ordedElements.forEach(function (element) { return element.render(context); });
        requestAnimationFrame(render);
    };
    render();
};
exports["default"] = renderElements;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ImageBillboard = /** @class */ (function () {
    function ImageBillboard(imagePath, x, y, z, width, height) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.width = width;
        this.height = height;
        this.loaded = false;
        this.image = new Image();
        this.image.onload = function (event) {
            _this.loaded = true;
        };
        this.image.src = imagePath;
    }
    ImageBillboard.prototype.render = function (context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
    return ImageBillboard;
}());
exports["default"] = ImageBillboard;


/***/ })
/******/ ]);