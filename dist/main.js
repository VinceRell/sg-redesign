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

/***/ "./app/assets/images/erkend.jpg":
/*!**************************************!*\
  !*** ./app/assets/images/erkend.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/0a3ffc226127387c7a781b5265e39ec2.jpg\";\n\n//# sourceURL=webpack:///./app/assets/images/erkend.jpg?");

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

/***/ "./app/assets/images/jobsite-security.jpg":
/*!************************************************!*\
  !*** ./app/assets/images/jobsite-security.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./images/92b25c79c505533a2a5e39a236500140.jpg\";\n\n//# sourceURL=webpack:///./app/assets/images/jobsite-security.jpg?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./app/assets/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ \"./app/assets/images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_hero_small_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero--small.jpg */ \"./app/assets/images/hero--small.jpg\");\n/* harmony import */ var _images_hero_small_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_hero_small_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_hero_medium_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hero--medium.jpg */ \"./app/assets/images/hero--medium.jpg\");\n/* harmony import */ var _images_hero_medium_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_hero_medium_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_hero_large_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/hero--large.jpg */ \"./app/assets/images/hero--large.jpg\");\n/* harmony import */ var _images_hero_large_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_hero_large_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_jobsite_security_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/jobsite-security.jpg */ \"./app/assets/images/jobsite-security.jpg\");\n/* harmony import */ var _images_jobsite_security_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_jobsite_security_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_erkend_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/erkend.jpg */ \"./app/assets/images/erkend.jpg\");\n/* harmony import */ var _images_erkend_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_erkend_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_ScrollTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/ScrollTop */ \"./app/assets/scripts/modules/ScrollTop.js\");\n//css import\n //image imports\n\n\n\n\n\n\n //JS imports\n\n\n\nvar mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nvar scrollTop = new _modules_ScrollTop__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n\n//# sourceURL=webpack:///./app/assets/scripts/main.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MobileMenu =\n/*#__PURE__*/\nfunction () {\n  function MobileMenu() {\n    _classCallCheck(this, MobileMenu);\n\n    this.toggleBtn = document.getElementById(\"toggle-button\");\n    this.mobileNav = document.getElementById(\"main-nav\");\n    this.headerWidth = document.getElementById(\"main-header\");\n    this.eventHandlers();\n  }\n\n  _createClass(MobileMenu, [{\n    key: \"eventHandlers\",\n    value: function eventHandlers() {\n      var _this = this;\n\n      this.toggleBtn.addEventListener(\"click\", function () {\n        _this.mobileNav.classList.toggle(\"open-menu\");\n      });\n      window.addEventListener(\"resize\", function () {\n        if (_this.headerWidth.clientWidth >= 550) {\n          _this.mobileNav.classList.remove(\"open-menu\");\n        }\n      });\n    }\n  }]);\n\n  return MobileMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ScrollTop.js":
/*!*************************************************!*\
  !*** ./app/assets/scripts/modules/ScrollTop.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ScrollTop =\n/*#__PURE__*/\nfunction () {\n  function ScrollTop() {\n    _classCallCheck(this, ScrollTop);\n\n    this.scrollTopBtn = document.querySelector(\".scrollTop\");\n    this.eventHandlers();\n  }\n\n  _createClass(ScrollTop, [{\n    key: \"eventHandlers\",\n    value: function eventHandlers() {\n      var _this = this;\n\n      window.onscroll = function () {\n        if (document.body.ScrollTop > 100 || document.documentElement.scrollTop > 100) {\n          _this.scrollTopBtn.classList.add(\"display-button\");\n        } else {\n          _this.scrollTopBtn.classList.remove(\"display-button\");\n        }\n      };\n\n      this.scrollTopBtn.addEventListener(\"click\", this.scrollToTop.bind(this));\n    }\n  }, {\n    key: \"scrollToTop\",\n    value: function scrollToTop() {\n      window.scroll({\n        top: 0,\n        left: 0,\n        behavior: \"smooth\"\n      });\n    }\n  }]);\n\n  return ScrollTop;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollTop);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ScrollTop.js?");

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