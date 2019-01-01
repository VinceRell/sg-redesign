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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/images/001-shield.png":
/*!******************************************!*\
  !*** ./app/assets/images/001-shield.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/77285facc4de3ef7f4cb27b12bff3da3.png\";\n\n//# sourceURL=webpack:///./app/assets/images/001-shield.png?");

/***/ }),

/***/ "./app/assets/images/002-idea.png":
/*!****************************************!*\
  !*** ./app/assets/images/002-idea.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/d181cbfb295d480e11de3c0e89b68fcf.png\";\n\n//# sourceURL=webpack:///./app/assets/images/002-idea.png?");

/***/ }),

/***/ "./app/assets/images/003-agreement.png":
/*!*********************************************!*\
  !*** ./app/assets/images/003-agreement.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/42d786337771ddc6ad8847c26af3ac41.png\";\n\n//# sourceURL=webpack:///./app/assets/images/003-agreement.png?");

/***/ }),

/***/ "./app/assets/images/hero--large.jpg":
/*!*******************************************!*\
  !*** ./app/assets/images/hero--large.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/25450fda11b337fcca0c5ac16e58c874.jpg\";\n\n//# sourceURL=webpack:///./app/assets/images/hero--large.jpg?");

/***/ }),

/***/ "./app/assets/images/hero--medium.jpg":
/*!********************************************!*\
  !*** ./app/assets/images/hero--medium.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/4c796a3200b5d0c1d04e5f2e4b06e926.jpg\";\n\n//# sourceURL=webpack:///./app/assets/images/hero--medium.jpg?");

/***/ }),

/***/ "./app/assets/images/hero--small.jpg":
/*!*******************************************!*\
  !*** ./app/assets/images/hero--small.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/8b230b1c55edff6d94c7800764d6b358.jpg\";\n\n//# sourceURL=webpack:///./app/assets/images/hero--small.jpg?");

/***/ }),

/***/ "./app/assets/images/logo.png":
/*!************************************!*\
  !*** ./app/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/6cce7d1038b17edf92b9d52bd3cb0c8d.png\";\n\n//# sourceURL=webpack:///./app/assets/images/logo.png?");

/***/ }),

/***/ "./app/assets/scripts/main.js":
/*!************************************!*\
  !*** ./app/assets/scripts/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./app/assets/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ \"./app/assets/images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_hero_small_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero--small.jpg */ \"./app/assets/images/hero--small.jpg\");\n/* harmony import */ var _images_hero_small_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_hero_small_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_hero_medium_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hero--medium.jpg */ \"./app/assets/images/hero--medium.jpg\");\n/* harmony import */ var _images_hero_medium_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_hero_medium_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_hero_large_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/hero--large.jpg */ \"./app/assets/images/hero--large.jpg\");\n/* harmony import */ var _images_hero_large_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_hero_large_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_001_shield_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/001-shield.png */ \"./app/assets/images/001-shield.png\");\n/* harmony import */ var _images_001_shield_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_001_shield_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_002_idea_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/002-idea.png */ \"./app/assets/images/002-idea.png\");\n/* harmony import */ var _images_002_idea_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_002_idea_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_003_agreement_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/003-agreement.png */ \"./app/assets/images/003-agreement.png\");\n/* harmony import */ var _images_003_agreement_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_003_agreement_png__WEBPACK_IMPORTED_MODULE_7__);\n//css import\n //image imports\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./app/assets/scripts/main.js?");

/***/ }),

/***/ "./app/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./app/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/assets/styles/main.scss?");

/***/ })

/******/ });