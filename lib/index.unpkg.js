(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("materials", ["react"], factory);
	else if(typeof exports === 'object')
		exports["materials"] = factory(require("react"));
	else
		root["materials"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-3d-models {\n  0% {\n    transform: rotateX(var(--rotateX)) rotateY(0deg) rotateZ(0deg);\n  }\n  100% {\n    transform: rotateX(var(--rotateX)) rotateY(0deg) rotateZ(-360deg);\n  }\n}\n.huxy-css-3d-models-tooltip {\n  --rotate: 135deg;\n}\n.huxy-css-3d-models-tooltip[tooltip] {\n  position: relative;\n}\n.huxy-css-3d-models-tooltip[tooltip]:hover::before,\n.huxy-css-3d-models-tooltip[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-css-3d-models-tooltip[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.huxy-css-3d-models-tooltip[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-css-3d-models-tooltip[tooltip]::before,\n.huxy-css-3d-models-tooltip[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: #303133;\n  border: 1px solid #303133;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-css-3d-models-tooltip[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.huxy-css-3d-models-tooltip[tooltip]::after {\n  content: \"\";\n  height: calc(8px + 2px);\n  width: calc(8px + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.huxy-css-3d-models-tooltip[tooltip]::before {\n  left: 0;\n  bottom: calc(100% + 8px);\n}\n.huxy-css-3d-models-tooltip[tooltip]::after {\n  left: 15px;\n  bottom: calc(100% + 8px / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-css-3d-models {\n  --size: 360px;\n  --cardSize: 42px;\n  --bottom: 60px;\n  --rotateX: 72deg;\n  --time: 20s;\n  position: absolute;\n  left: 50%;\n  bottom: var(--bottom);\n  transform: translateX(-50%);\n  width: var(--size);\n  height: var(--size);\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  perspective-origin: 50% 0;\n}\n.huxy-css-3d-models .model-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-color: transparent;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  animation: huxy-3d-models var(--time) linear 0s infinite;\n  animation-play-state: running;\n}\n.huxy-css-3d-models .model-container:hover {\n  animation-play-state: paused;\n}\n.huxy-css-3d-models .model-container .model-item {\n  --rotateY: 0deg;\n  transform-style: preserve-3d;\n  position: absolute;\n  transform-origin: calc(var(--size) / 2) 0;\n  width: calc(var(--size) / 2);\n  height: var(--cardSize);\n  line-height: var(--cardSize);\n  left: 0;\n  top: 50%;\n  cursor: pointer;\n  transform: rotateX(-90deg) rotateY(calc(var(--rotateY) + 90deg)) translateY(-50%);\n}\n.huxy-css-3d-models .model-container .model-item .model-card {\n  position: absolute;\n  width: calc(var(--cardSize) - 12px);\n  height: var(--cardSize);\n  line-height: var(--cardSize);\n  text-align: center;\n  border-radius: 4px;\n  left: calc(6px - var(--cardSize) / 2);\n  bottom: 0;\n  transform-origin: 50% 50%;\n  transform: rotateY(-90deg);\n  background: rgba(255, 255, 255, 0.98);\n  transition: all 0.3s;\n  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.1));\n}\n.huxy-css-3d-models .model-container .model-item .model-card:hover {\n  color: #fff;\n  background-color: var(--blue2);\n  transition: all 0.3s;\n  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.2));\n}\n.huxy-css-3d-models .model-container .model-item .model-card img {\n  width: 60%;\n  height: 60%;\n  vertical-align: middle;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".g394U {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  perspective: 1000;\n}\n.zasVJ {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n  transform-style: preserve-3d;\n  transition: transform 0.3s;\n}\n.C5n3b, .UdsvP {\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.UdsvP {\n  transform: rotateY(180deg);\n}\n.g394U:hover .zasVJ {\n  transform: rotateY(180deg);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-card-fliper": "g394U",
	"card": "zasVJ",
	"front": "C5n3b",
	"back": "UdsvP"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".huxy-icon-animate-tooltip {\n  --rotate: 135deg;\n}\n.huxy-icon-animate-tooltip[tooltip] {\n  position: relative;\n}\n.huxy-icon-animate-tooltip[tooltip]:hover::before,\n.huxy-icon-animate-tooltip[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-icon-animate-tooltip[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.huxy-icon-animate-tooltip[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-icon-animate-tooltip[tooltip]::before,\n.huxy-icon-animate-tooltip[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: #303133;\n  border: 1px solid #303133;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-icon-animate-tooltip[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.huxy-icon-animate-tooltip[tooltip]::after {\n  content: \"\";\n  height: calc(8px + 2px);\n  width: calc(8px + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.huxy-icon-animate-tooltip[tooltip]::before {\n  left: 0;\n  bottom: calc(100% + 8px);\n}\n.huxy-icon-animate-tooltip[tooltip]::after {\n  left: 15px;\n  bottom: calc(100% + 8px / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n@keyframes huxy-css-obj-jump {\n  0% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(0, var(--y), 0) scale(1.1);\n  }\n  100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n}\n@keyframes huxy-css-obj-blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes huxy-css-obj-scale {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.obj-centerTable {\n  --width: 450px;\n  --left: calc(50% - 224px);\n  --bottom: 78px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-scale 6s ease-in-out infinite;\n}\n.obj-centerLight {\n  --width: 150px;\n  --left: calc(50% - 75px);\n  --bottom: 220px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-blink 3s ease-in-out infinite;\n}\n.obj-brain {\n  --y: 16px;\n  --time: 6s;\n  --width: 80px;\n  --left: calc(50% - 40px);\n  --bottom: 360px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.obj-dataAnalysis {\n  --y: 15px;\n  --time: 6s;\n  --width: 76px;\n  --left: calc(50% - 200px);\n  --bottom: 300px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.obj-coder {\n  --y: 25px;\n  --time: 4s;\n  --width: 66px;\n  --left: calc(50% - 280px);\n  --bottom: 208px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.obj-trend {\n  --y: 24px;\n  --time: 6s;\n  --width: 72px;\n  --left: calc(50% - 380px);\n  --bottom: 160px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.obj-light {\n  --y: 15px;\n  --time: 6s;\n  --width: 78px;\n  --left: calc(50% + 120px);\n  --bottom: 288px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.obj-debug {\n  --y: 30px;\n  --time: 5s;\n  --width: 66px;\n  --left: calc(50% + 220px);\n  --bottom: 168px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.obj-chat {\n  --y: 25px;\n  --time: 6s;\n  --width: 68px;\n  --left: calc(50% + 300px);\n  --bottom: 180px;\n  width: var(--width);\n  left: var(--left);\n  bottom: var(--bottom);\n  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;\n}\n.huxy-icon-animate-container {\n  height: var(--height, 480px);\n  border-radius: 4px;\n  position: relative;\n}\n.huxy-icon-animate-materiels {\n  position: relative;\n  height: 100%;\n}\n.huxy-icon-animate-materiels > a {\n  position: absolute !important;\n}\n.huxy-icon-animate-materiels .obj-img {\n  text-align: center;\n  border: 2px solid rgba(0, 0, 0, 0.02);\n  border-radius: 50%;\n  padding: 6px;\n  z-index: 999;\n}\n.huxy-icon-animate-materiels img {\n  width: 100%;\n  max-width: var(--width);\n  vertical-align: middle;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".huxy-icon-carousel-tooltip-lb {\n  --rotate: 135deg;\n}\n.huxy-icon-carousel-tooltip-lb[tooltip] {\n  position: relative;\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]:hover::before,\n.huxy-icon-carousel-tooltip-lb[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]::before,\n.huxy-icon-carousel-tooltip-lb[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: #303133;\n  border: 1px solid #303133;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]::after {\n  content: \"\";\n  height: calc(8px + 2px);\n  width: calc(8px + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]::before {\n  left: 0;\n  bottom: calc(100% + 8px);\n}\n.huxy-icon-carousel-tooltip-lb[tooltip]::after {\n  left: 15px;\n  bottom: calc(100% + 8px / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-icon-carousel-tooltip-lt {\n  --rotate: -45deg;\n}\n.huxy-icon-carousel-tooltip-lt[tooltip] {\n  position: relative;\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]:hover::before,\n.huxy-icon-carousel-tooltip-lt[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]::before,\n.huxy-icon-carousel-tooltip-lt[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: #303133;\n  border: 1px solid #303133;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]::after {\n  content: \"\";\n  height: calc(8px + 2px);\n  width: calc(8px + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]::before {\n  left: 0;\n  top: calc(100% + 8px);\n}\n.huxy-icon-carousel-tooltip-lt[tooltip]::after {\n  left: 15px;\n  top: calc(100% + 8px / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.huxy-icon-carousel .icon-container {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n.huxy-icon-carousel .icon-container .icon-item {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 60px;\n  border-radius: 50%;\n  text-align: center;\n  border: 2px solid rgba(0, 0, 0, 0.02);\n  padding: 6px;\n}\n.huxy-icon-carousel .icon-container .icon-item img {\n  width: 100%;\n  vertical-align: middle;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-border-animate-dash {\n  100% {\n    background-position: 6% 0, -6% 100%, 0 -6%, 100% 6%;\n  }\n}\n@keyframes huxy-border-animate-solid {\n  0%,\n  100% {\n    clip-path: inset(0% 0% 66% 66%);\n  }\n  8.33% {\n    clip-path: inset(0% 0% 33% 99%);\n  }\n  16.66% {\n    clip-path: inset(33% 0% 0% 99%);\n  }\n  25% {\n    clip-path: inset(66% 0% 0% 66%);\n  }\n  33.33% {\n    clip-path: inset(99% 0% 0% 33%);\n  }\n  41.66% {\n    clip-path: inset(99% 33% 0% 0%);\n  }\n  50% {\n    clip-path: inset(66% 66% 0% 0%);\n  }\n  58.33% {\n    clip-path: inset(33% 99% 0% 0%);\n  }\n  66.66% {\n    clip-path: inset(0% 99% 33% 0%);\n  }\n  75% {\n    clip-path: inset(0% 66% 66% 0%);\n  }\n  83.33% {\n    clip-path: inset(0% 33% 99% 0%);\n  }\n  91.66% {\n    clip-path: inset(0% 0% 99% 33%);\n  }\n}\n.tF3eM {\n  --borderColor: #03a9f3;\n  --space: 2px;\n  padding: var(--space);\n  height: 100%;\n}\n.BHIzz {\n  position: relative;\n  height: 100%;\n  padding: var(--space);\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  background: linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y;\n  background-size: 8px 2px, 8px 2px, 2px 8px, 2px 8px;\n  background-position: 0 0, 0 100%, 0 0, 100% 0;\n}\n.BHIzz {\n  animation: huxy-border-animate-dash 0.5s infinite linear;\n}\n.Ltln8 {\n  position: relative;\n  height: 100%;\n}\n.Ltln8::before, .Ltln8::after {\n  content: \"\";\n  position: absolute;\n  --size: calc(0px - var(--space));\n  top: var(--size);\n  left: var(--size);\n  right: var(--size);\n  bottom: var(--size);\n  border: 2px solid var(--borderColor);\n  border-radius: var(--space);\n}\n.Ltln8::before, .Ltln8::after {\n  animation: huxy-border-animate-solid 6s infinite linear;\n}\n.Ltln8::before {\n  animation-delay: -3s;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-border-wrap": "tF3eM",
	"huxy-border-animate-dash": "BHIzz",
	"huxy-border-animate-solid": "Ltln8"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UJpqU {\n  --bgColor: var(--pageBgColor);\n  --cubeColor: hsla(0, 0%, 100%, 0.3);\n  background-image: linear-gradient(var(--bgColor) 14px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);\n  background-size: 15px 15px, 15px 15px;\n}\n.VXk7W {\n  --bgColor: rgba(0, 0, 0, 0.25);\n  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0);\n  background-size: 30px 30px;\n}\n.q_1dQ {\n  --bgColor: hsl(0, 0%, 100%);\n  --cubeColor: hsla(0, 0%, 100%, 0.3);\n  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0), linear-gradient(var(--cubeColor) 1px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);\n  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;\n}\n.eBK09 {\n  --bgColor: rgba(0, 0, 0, 0.25);\n  background-image: linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0), linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0);\n  background-position: 0 0, 15px 15px;\n  background-size: 30px 30px;\n}\n.o9pvC {\n  --bgColor: hsl(0, 0%, 100%);\n  --cubeColor: hsla(0, 0%, 100%, 0.3);\n  --size: 20% 20%;\n  background-image: linear-gradient(var(--bgColor) 15px, transparent 0), linear-gradient(90deg, var(--bgColor) 15px, transparent 0);\n  background-size: var(--size);\n  background-color: var(--cubeColor);\n  /* background-position: -8px -8px,-8px -8px; */\n}\n.Po9ZE {\n  --bgColor: transparent;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-color: var(--bgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bg-box-dot": "UJpqU",
	"bg-box-strip": "VXk7W",
	"bg-box-cubestrip": "q_1dQ",
	"bg-box-cube": "eBK09",
	"bg-box-grid": "o9pvC",
	"bg-box-img": "Po9ZE"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vpTzN {\n  --cornerSize: 8px;\n  --bgColor: transparent;\n  --borderColor: var(--panelBgColor);\n  --cornerColor: var(--appColor);\n  position: relative;\n  background: var(--bgColor);\n  border: 2px solid var(--cornerColor);\n}\n.vpTzN:before, .vpTzN:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  /* border-radius:2px; */\n  background-color: transparent;\n}\n.vpTzN:before {\n  top: -2px;\n  bottom: -2px;\n  left: var(--cornerSize);\n  right: var(--cornerSize);\n  border-top: 2px solid var(--borderColor);\n  border-bottom: 2px solid var(--borderColor);\n}\n.vpTzN:after {\n  left: -2px;\n  right: -2px;\n  top: var(--cornerSize);\n  bottom: var(--cornerSize);\n  border-left: 2px solid var(--borderColor);\n  border-right: 2px solid var(--borderColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"corner": "vpTzN"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Usszw {\n  --borderColor: var(--appColor);\n}\n.XcsJP {\n  position: relative;\n  border: 2px solid transparent;\n}\n.XcsJP:before, .XcsJP:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: calc(var(--cornerSize) + 2px);\n  height: calc(var(--cornerSize) + 2px);\n  /* border-radius:2px; */\n  background-color: transparent;\n  z-index: 3;\n}\n.XcsJP:before {\n  left: -2px;\n  bottom: -2px;\n  border-left: 2px solid var(--borderColor);\n  border-bottom: 2px solid var(--borderColor);\n}\n.XcsJP:after {\n  top: -2px;\n  right: -2px;\n  border-top: 2px solid var(--borderColor);\n  border-right: 2px solid var(--borderColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"corner-wrap": "Usszw",
	"corner-half": "XcsJP"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".WY0lD {\n  --borderColor: rgba(0, 0, 0, 0.1);\n  --borderSize: 2px;\n  --space: 10px;\n  --fontSize: 14px;\n  font-size: var(--fontSize);\n  position: relative;\n  padding-top: 0.713em;\n  height: 100%;\n}\n.WY0lD ._ORAK {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  z-index: 3;\n}\n.WY0lD ._ORAK:before, .WY0lD ._ORAK:after {\n  content: \"\";\n  height: var(--borderSize);\n  background: var(--borderColor);\n  flex-grow: 1;\n}\n.WY0lD ._ORAK:before {\n  margin-right: var(--space);\n}\n.WY0lD ._ORAK:after {\n  margin-left: var(--space);\n}\n.WY0lD .Vggg7 {\n  height: 100%;\n  border-left: var(--borderSize) solid var(--borderColor);\n  border-right: var(--borderSize) solid var(--borderColor);\n  border-bottom: var(--borderSize) solid var(--borderColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-title-border-wrap": "WY0lD",
	"huxy-title-border-top": "_ORAK",
	"huxy-title-border-box": "Vggg7"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".MuUoF {\n  --titleWidth: 280px;\n  --titleHeight: 80px;\n  --borderColor: rgba(0, 180, 220);\n  height: var(--titleHeight);\n  position: relative;\n  z-index: 1;\n}\n.MuUoF:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  background-image: linear-gradient(to right, transparent, var(--borderColor) 50%, transparent);\n  background-size: 100% 2px;\n  background-position: 0 calc(var(--titleHeight) / 2);\n  background-repeat: no-repeat;\n}\n.MuUoF .fM2FI {\n  margin: 0;\n  width: var(--titleWidth);\n  position: absolute;\n  bottom: calc(var(--titleHeight) / 4);\n  left: calc(50% - var(--titleWidth) / 2);\n  padding: 10px 0;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 500;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 1px 1px 0.2em var(--borderColor);\n}\n.MuUoF .fM2FI:before, .MuUoF .fM2FI:after {\n  content: \"\";\n  position: absolute;\n  height: 0;\n  border-left: calc(var(--titleHeight) / 8) solid transparent;\n  border-right: calc(var(--titleHeight) / 8) solid transparent;\n  z-index: -1;\n}\n.MuUoF .fM2FI:before {\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--borderColor);\n}\n.MuUoF .fM2FI:after {\n  width: calc(100% - 2px);\n  left: 1px;\n  bottom: 1px;\n  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--pageBgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-title-header-box": "MuUoF",
	"title": "fM2FI"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".huDNN {\n  --height: 240px;\n  --borderColor: rgba(0, 0, 0, 0.04);\n  --space: 25px;\n  --itemWidth: 25px;\n  border-left: 1px solid var(--borderColor);\n  border-bottom: 1px solid var(--borderColor);\n  height: var(--height);\n  margin: 0 auto;\n  position: relative;\n}\n.huDNN .V5Fq4 {\n  --itemHeight: 60%;\n  --bgColor: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: block;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  margin-left: var(--space);\n  width: var(--itemWidth);\n  height: var(--itemHeight);\n  background: var(--bgColor);\n  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.08);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-skeleton-barchart": "huDNN",
	"sk-bar-item": "V5Fq4"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nnDaG {\n  --bgColor: transparent;\n  --height: 120px;\n  --leftColor: rgba(0, 0, 0, 0.1);\n  --rightColor: rgba(0, 0, 0, 0.2);\n  --topWidth: 42%;\n  --bottomWidth: 90%;\n  position: relative;\n  height: var(--height);\n  background: var(--bgColor);\n  overflow: hidden;\n}\n.nnDaG .iJtPz {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: var(--height);\n  height: 100%;\n}\n.nnDaG .iJtPz .Bya6y {\n  width: 60%;\n  height: 60%;\n  border-radius: 50%;\n  background: var(--leftColor);\n  margin: 20% auto;\n}\n.nnDaG .c6MGh {\n  margin-left: var(--height);\n  margin-top: calc(var(--height) * 0.2);\n  height: calc(var(--height) * 0.6);\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n}\n.nnDaG .c6MGh .sb1hm, .nnDaG .c6MGh .YDDrB {\n  margin: 0;\n  border-radius: 4px;\n  background: var(--rightColor);\n}\n.nnDaG .c6MGh .sb1hm {\n  font-size: 2.2rem;\n  height: calc(var(--height) * 0.22);\n  width: var(--topWidth);\n  margin-top: calc(var(--height) * 0.05);\n}\n.nnDaG .c6MGh .YDDrB {\n  font-size: 1.6rem;\n  height: calc(var(--height) * 0.18);\n  width: var(--bottomWidth);\n  margin-top: calc(var(--height) * 0.1);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-skeleton-card": "nnDaG",
	"sk-card-left": "iJtPz",
	"sk-card-img": "Bya6y",
	"sk-card-right": "c6MGh",
	"title": "sb1hm",
	"text": "YDDrB"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-animate-border-circle-shadow {\n  0%,\n  40%,\n  60%,\n  100% {\n    box-shadow: 0px 0px 60px 25px var(--shadowOutColor), inset 0px 1px 4px 2px var(--shadowInColor);\n  }\n  50% {\n    box-shadow: 0px 0px 50px 16px var(--shadowOutColor), inset 0px 1px 100px 2px var(--shadowInColor);\n  }\n}\n@keyframes huxy-animate-border-circle {\n  0% {\n    transform: translate(-50%, -50%) rotateZ(var(--rotateStart));\n  }\n  100% {\n    transform: translate(-50%, -50%) rotateZ(var(--rotateEnd));\n  }\n}\n.Krd0d {\n  --size: 300px;\n  --ballBorder: 10px;\n  --ballBgColor: #cedce0;\n  --ballBorderColor: rgba(2, 255, 255, 0.15);\n  --shadowOutColor: rgba(150, 255, 255, 0.5);\n  --shadowInColor: rgba(150, 255, 255, 0.3);\n  position: relative;\n  margin: 0 auto;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n  box-shadow: 0px 0px 50px 15px var(--shadowInColor), inset 0px 0px 50px 15px var(--shadowInColor);\n}\n.Krd0d::after {\n  content: \"\";\n  position: absolute;\n  width: calc(var(--size) / 2 - 20px);\n  height: calc(var(--size) / 2 - 20px);\n  border-radius: 50%;\n  background: var(--ballBgColor);\n  border: var(--ballBorder) solid var(--ballBorderColor);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.Krd0d::after {\n  animation: huxy-animate-border-circle-shadow 1.6s infinite;\n}\n.qcJ0N {\n  --itemSize: 80%;\n  --borderWidth: 5px;\n  --time: 4s;\n  --rotateStart: 0deg;\n  --rotateEnd: 360deg;\n  box-sizing: border-box;\n  border-radius: 50%;\n  position: absolute;\n  width: var(--itemSize);\n  height: var(--itemSize);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotateZ(var(--rotateStart));\n  border-left: var(--borderWidth) solid var(--borderLeftColor, transparent);\n  border-right: var(--borderWidth) solid var(--borderRightColor, transparent);\n  border-top: var(--borderWidth) solid var(--borderTopColor, transparent);\n  border-bottom: var(--borderWidth) solid var(--borderBottomColor, transparent);\n}\n.qcJ0N {\n  animation: huxy-animate-border-circle var(--time) linear infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-animate-border-circle": "Krd0d",
	"border-circle-item": "qcJ0N"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".myyKG {\n  --bgColor: transparent;\n  background: var(--bgColor);\n  padding: 15px 20px;\n}\n.myyKG.AXWTP {\n  --titleBgColor: rgba(0, 0, 0, 0.2);\n  --width: 100px;\n  --height: 20px;\n  padding-top: calc(25px + var(--height));\n}\n.myyKG.AXWTP::after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  width: var(--width);\n  height: var(--height);\n  border-radius: 2px;\n  background: var(--titleBgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"skeleton-container": "myyKG",
	"title": "AXWTP"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-skeleton-dashboard {\n  50% {\n    transform: translate(-50%, -50%) rotate(180deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(180deg);\n  }\n}\n.DYspm {\n  --size: 400px;\n  --width: 20px;\n  --space: 20px;\n  --color0: #fff;\n  --color1: transparent;\n  --color2: #f1462c;\n  --color3: #fc5d2c;\n  --color4: #fba73e;\n  --color5: #e0fa4e;\n  --color6: #12dd7e;\n  --color7: #0a6e3f;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 50%;\n  width: var(--size);\n  height: var(--size);\n  background: conic-gradient(var(--color2) 0%, var(--color3) 12.4%, var(--color0) 12.4%, var(--color0) 12.5%, var(--color3) 12.5%, var(--color4) 24.9%, var(--color0) 24.9%, var(--color0) 25%, var(--color4) 25%, var(--color5) 37.4%, var(--color0) 37.4%, var(--color0) 37.5%, var(--color5) 37.5%, var(--color6) 49.9%, var(--color0) 49.9%, var(--color0) 50%, var(--color6) 50%, var(--color7) 62.4%, var(--color1) 62.4%, var(--color1) 62.5%);\n  transform-origin: 50% 50%;\n  transform: rotate(calc(-0.625 * 180deg));\n}\n.DYspm::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(var(--size) - var(--width) * 2);\n  height: calc(var(--size) - var(--width) * 2);\n  border-radius: 50%;\n  background: conic-gradient(var(--color0) 0 62.4%, var(--color1) 0 100%);\n}\n.DYspm::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(var(--size) - var(--width) * 2 - var(--space) * 2);\n  height: calc(var(--size) - var(--width) * 2 - var(--space) * 2);\n  border-radius: 50%;\n  background: radial-gradient(var(--color0) 0%, var(--color0) 25%, transparent 25%, transparent 100%), conic-gradient(var(--color2) 0 12.5%, var(--color4) 0 25%, var(--color5) 0 37.5%, var(--color6) 0 50%, var(--color7) 0 62.4%, var(--color1) 0 100%);\n}\n.DYspm .Rg6DD {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 30px;\n  height: 30px;\n  background: radial-gradient(#467dc6 0%, #a4c6f3 100%);\n  border-radius: 50%;\n  z-index: 999;\n}\n.DYspm .Rg6DD::before {\n  content: \"\";\n  position: absolute;\n  width: 5px;\n  height: calc(var(--size) - var(--width) * 2 - var(--space));\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(0);\n  border-radius: 100% 100% 5% 5%;\n  background: linear-gradient(180deg, #9bc7f6 0, #467dc6 50%, transparent 50%, transparent 100%);\n}\n.DYspm .Rg6DD::before {\n  animation: huxy-skeleton-dashboard 4s cubic-bezier(0.93, 1.32, 0.89, 1.15) infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-skeleton-dashboard": "DYspm",
	"point": "Rg6DD"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".YWtCI {\n  --bgColor: transparent;\n  --rightWidth: 100px;\n  --itemHeight: 20px;\n  --space: 20px;\n  --leftColor: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15));\n  --rightColor: rgba(0, 0, 0, 0.2);\n  background: var(--bgColor);\n  padding: 15px var(--space);\n}\n.YWtCI .uBGAf {\n  position: relative;\n  border-radius: 2px;\n  height: var(--itemHeight);\n  width: calc(100% - var(--rightWidth) - var(--space));\n  background: var(--leftColor);\n}\n.YWtCI .uBGAf::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: calc(0px - var(--space) - var(--rightWidth));\n  border-radius: 2px;\n  height: var(--itemHeight);\n  width: var(--rightWidth);\n  background: var(--rightColor);\n}\n.YWtCI .uBGAf + .uBGAf {\n  margin-top: calc(var(--space) - 2px);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-skeleton-list": "YWtCI",
	"sk-list-item": "uBGAf"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".IQu9g {\n  --height: 200px;\n  --color1: rgba(0, 0, 0, 0.2);\n  --percent1: 30%;\n  --color2: rgba(0, 0, 0, 0.3);\n  --percent2: 45%;\n  --color3: rgba(0, 0, 0, 0.1);\n  --percent3: 64%;\n  --color4: rgba(0, 0, 0, 0.4);\n  --percent4: 100%;\n  margin: 5px auto;\n  width: var(--height);\n  height: var(--height);\n  background: conic-gradient(var(--color1) 0 var(--percent1), var(--color2) var(--percent1) var(--percent2), var(--color3) var(--percent2) var(--percent3), var(--color4) var(--percent3) var(--percent4));\n  border-radius: 50%;\n  box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.08);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-skeleton-piechart": "IQu9g"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-progress-wave {\n  0% {\n    width: 0;\n    opacity: 0.1;\n  }\n  34% {\n    width: 0;\n    opacity: 0.5;\n  }\n  100% {\n    width: calc(100% * var(--percent) / 100);\n    opacity: 0;\n  }\n}\n.zFNbz {\n  --waveColor: rgba(255, 255, 255, 0.1);\n  --waveTime: 3s;\n  --percent: 60;\n  --height: 20px;\n  --borderRadius: 4px;\n  --bgColor: rgba(0, 0, 0, 0.15);\n  --progressColor: rgba(0, 0, 0, 0.2);\n  position: relative;\n  border-radius: var(--borderRadius);\n  height: var(--height);\n  background: var(--bgColor);\n  overflow: hidden;\n  color: #fff;\n}\n.zFNbz::before, .zFNbz::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: calc(100% * var(--percent) / 100);\n  max-width: 100%;\n  border-radius: var(--borderRadius);\n  background: var(--progressColor);\n  transition: width 1.5s ease-in;\n}\n.zFNbz::before {\n  counter-reset: percent var(--percent);\n  content: counter(percent) \"%\";\n  text-align: right;\n}\n.zFNbz::after {\n  background: var(--waveColor);\n  opacity: 0;\n}\n.zFNbz::after {\n  animation: huxy-progress-wave var(--waveTime) ease-out infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-progress-wave": "zFNbz"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-animate-border-ring {\n  50% {\n    opacity: 0.5;\n  }\n}\n.WbFYr {\n  --size: 300px;\n  --bgColor: rgba(255, 255, 255, 0.9);\n  --shadowColor: rgba(255, 255, 255, 0.6);\n  --itemWidth: 30px;\n  --itemHeight: 4px;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  margin: 0 auto;\n  border-radius: 50%;\n}\n.WbFYr::after {\n  position: absolute;\n  border-radius: 50%;\n  width: calc(var(--size) / 2);\n  height: calc(var(--size) / 2);\n  left: calc(var(--size) / 4);\n  top: calc(var(--size) / 4);\n  background: var(--bgColor);\n  box-shadow: 0px 0px 4px 10px var(--shadowColor);\n}\n.WbFYr .XIIyj {\n  --color: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  width: var(--itemWidth);\n  height: var(--itemHeight);\n  background: var(--color);\n  top: calc(var(--size) / 2);\n  left: 0;\n  transform-origin: calc(var(--size) / 2) calc(var(--itemHeight) / 2);\n}\n.WbFYr .XIIyj {\n  animation: huxy-animate-border-ring 2s infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-animate-border-ring": "WbFYr",
	"border-ring-item": "XIIyj"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".suwUY {\n  --bgColor: transparent;\n  --borderColor: rgba(0, 0, 0, 0.03);\n  --thBgColor: rgba(0, 0, 0, 0.06);\n  --thItemColor: rgba(0, 0, 0, 0.4);\n  --tdItemColor: rgba(0, 0, 0, 0.2);\n  --hoverColor: rgba(0, 0, 0, 0.02);\n  --oddColor: rgba(0, 0, 0, 0.04);\n  border-radius: 2px;\n  border: 1px solid var(--borderColor);\n  background: var(--bgColor);\n}\n.suwUY table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n}\n.suwUY table th {\n  padding: 15px 4%;\n  background: var(--thBgColor);\n}\n.suwUY table th span {\n  display: block;\n  height: 18px;\n  border-radius: 2px;\n  background: var(--thItemColor);\n}\n.suwUY table td {\n  padding: 12px 3%;\n}\n.suwUY table td span {\n  display: block;\n  height: 16px;\n  border-radius: 2px;\n  background: var(--tdItemColor);\n}\n.suwUY table tr {\n  transition: background 0.3s;\n}\n.suwUY table tr:hover {\n  background: var(--hoverColor);\n}\n.suwUY table tr:nth-of-type(odd) {\n  background: var(--oddColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-skeleton-table": "suwUY"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-loading-wave {\n  0% {\n    width: 0;\n    opacity: 0.1;\n  }\n  34% {\n    width: 0;\n    opacity: 0.5;\n  }\n  100% {\n    width: 100%;\n    opacity: 0;\n  }\n}\n.d9M97 {\n  --waveColor: rgba(0, 0, 0, 0.06);\n  --waveTime: 2s;\n  position: relative;\n}\n.d9M97::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: var(--waveColor);\n  border-radius: 2px;\n  opacity: 0;\n}\n.d9M97::after {\n  animation: huxy-loading-wave var(--waveTime) ease-out infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-loading-wave": "d9M97"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-conic-light-animate {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n._ov1n {\n  --rotate: 4;\n  --width: 200px;\n  --height: 180px;\n  --bgColor: linear-gradient(to top, rgba(168, 239, 255, 0.2), rgba(168, 239, 255, 0));\n  --topColor: rgba(168, 239, 255, 0.01);\n  --bottomColor: rgba(168, 239, 255, 0.1);\n  --space: 12%;\n  --time: 6s;\n  --bottomWidth: calc(var(--width) - var(--space) * 2);\n  position: relative;\n  margin: 0 auto;\n  height: var(--height);\n  width: var(--width);\n  border-radius: var(--width) / calc(var(--width) / var(--rotate));\n  background: var(--bgColor);\n  clip-path: polygon(0 0, 100% 0, calc(100% - var(--space)) 100%, var(--space) 100%);\n  opacity: 0;\n}\n._ov1n {\n  animation: huxy-conic-light-animate var(--time) linear infinite;\n}\n._ov1n:before {\n  --height: calc(var(--width) / var(--rotate));\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: var(--width);\n  height: var(--height);\n  border-radius: 50%;\n  background: var(--topColor);\n}\n._ov1n:after {\n  --height: calc(var(--bottomWidth) / var(--rotate));\n  content: \"\";\n  position: absolute;\n  left: var(--space);\n  bottom: 0;\n  width: var(--bottomWidth);\n  height: var(--height);\n  background: var(--bottomColor);\n  border-radius: 50%;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"conic": "_ov1n"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-loading-ball {\n  0%,\n  40%,\n  100% {\n    transform: scale(0.2);\n  }\n  20% {\n    transform: scale(1);\n  }\n}\n.TikRE {\n  --time: 1.6s;\n  --size: 40px;\n  --shadowSize: 50px;\n  display: flex;\n}\n.TikRE .CyLSO {\n  --delay: 0s;\n  --bgColor: rgba(255, 255, 255, 0.8);\n  background: var(--bgColor);\n  box-shadow: 0 0 var(--shadowSize) var(--bgColor);\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n}\n.TikRE .CyLSO {\n  animation: huxy-loading-ball var(--time) ease-in-out var(--delay) infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-loading-ball": "TikRE",
	"ball": "CyLSO"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-location {\n  50% {\n    top: calc(50% - var(--size) * 0.25);\n  }\n}\n@keyframes huxy-location-back {\n  50% {\n    transform: translateX(-50%) scale(0.5);\n  }\n}\n.DdhmP {\n  --size: 24px;\n  --color: #ffffff;\n  --bgColor: rgba(255, 255, 255, 0.2);\n  --time: 2s;\n  position: relative;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n}\n.DdhmP:before, .DdhmP:after {\n  position: absolute;\n  content: \"\";\n}\n.DdhmP:before {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-46deg);\n  width: calc(var(--size) * 0.75);\n  height: calc(var(--size) * 0.75);\n  border-radius: 100% 100% 100% 0;\n  box-shadow: 0px 0px 0px 2px var(--color);\n}\n.DdhmP:before {\n  animation: huxy-location var(--time) linear infinite;\n}\n.DdhmP:after {\n  left: 50%;\n  transform: translateX(-50%) scale(1);\n  bottom: -50%;\n  width: calc(var(--size) * 1.25);\n  height: calc(var(--size) * 0.5);\n  border-radius: 100%;\n  background: var(--bgColor);\n}\n.DdhmP:after {\n  animation: huxy-location-back var(--time) linear infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-location": "DdhmP"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-search {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.3);\n  }\n}\n.r6hPc {\n  --size: 24px;\n  --color: #ffffff;\n  --time: 1s;\n  --bar-width: 2px;\n  --bar-height: 8px;\n  width: var(--size);\n  height: var(--size);\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n  box-shadow: 0px 0px 0px 1px var(--color);\n}\n.r6hPc {\n  animation: huxy-search var(--time) linear infinite alternate;\n}\n.r6hPc:before {\n  position: absolute;\n  content: \"me\";\n  font-size: 12px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.r6hPc:after {\n  position: absolute;\n  content: \"\";\n  width: var(--bar-width);\n  height: var(--bar-height);\n  background: var(--color);\n  bottom: calc(var(--bar-width) - var(--bar-height));\n  left: calc(var(--size) - var(--bar-width) * 2);\n  border-radius: var(--bar-width);\n  transform: rotate(-45deg);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-search": "r6hPc"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-spot {\n  0% {\n    transform: scale(0.5);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes huxy-scale {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n    box-shadow: 0px 0px calc(var(--size) / 8) 0px var(--shadowColor);\n  }\n  50% {\n    opacity: 0.8;\n    transform: scale(0.8);\n    box-shadow: 0px 0px calc(var(--size) / 8) calc(var(--size) * 5 / 8) var(--shadowColor);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n    box-shadow: 0px 0px calc(var(--size) / 8) 0px var(--shadowColor);\n  }\n}\n.JsH0T {\n  --size: 6px;\n  --color: var(--blue1);\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  color: var(--color);\n  background: currentColor;\n  border-radius: 50%;\n  position: relative;\n}\n.JsH0T:before, .JsH0T:after {\n  content: \"\";\n  position: absolute;\n  background: currentColor;\n  border-radius: 50%;\n}\n.JsH0T:before, .JsH0T:after {\n  animation: huxy-spot 1.5s ease-in-out infinite;\n}\n.JsH0T:before {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.JsH0T:after {\n  width: 150%;\n  height: 150%;\n  left: -25%;\n  top: -25%;\n}\n.S4gb8 {\n  --size: 8px;\n  --color: var(--orange1);\n  --shadowColor: var(--orange1);\n  display: inline-block;\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #fff;\n  width: var(--size);\n  height: var(--size);\n  line-height: var(--size);\n  text-align: center;\n  border-radius: 50%;\n  background-color: var(--color);\n}\n.S4gb8 {\n  animation: huxy-scale 1.5s ease-in-out infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-spot": "JsH0T",
	"huxy-scale": "S4gb8"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".x6fRL {\n  --black: #000;\n  --white: #fff;\n  --width: 128px;\n  --border: 2px;\n  box-sizing: content-box;\n  position: relative;\n  width: var(--width);\n  height: calc(var(--width) / 2);\n  background: var(--white);\n  border-color: var(--black);\n  border-style: solid;\n  border-width: var(--border) var(--border) calc(var(--width) / 2 + var(--border)) var(--border);\n  border-radius: 100%;\n  transform: rotate(90deg);\n}\n.x6fRL::before, .x6fRL::after {\n  content: \"\";\n  position: absolute;\n  box-sizing: content-box;\n  width: calc(var(--width) / 8);\n  height: calc(var(--width) / 8);\n  border-radius: 100%;\n  top: 50%;\n}\n.x6fRL::before {\n  left: 0;\n  background: var(--black);\n  border: calc(var(--width) * 3 / 16) solid var(--white);\n}\n.x6fRL::after {\n  left: 50%;\n  background: var(--white);\n  border: calc(var(--width) * 3 / 16) solid var(--black);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-taiji": "x6fRL"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-timer {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.R1ObR {\n  --size: 24px;\n  --color: #ffffff;\n  --handWidth: 2px;\n  --maxHeight: calc(var(--size) / 2 - var(--handWidth));\n  --minHeight: calc(var(--size) / 2 - var(--handWidth) * 2);\n  --maxTime: 2s;\n  --minTime: 8s;\n  width: var(--size);\n  height: var(--size);\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n  box-shadow: inset 0px 0px 0px 2px #fff;\n}\n.R1ObR:after, .R1ObR:before {\n  position: absolute;\n  content: \"\";\n  background: var(--color);\n  height: var(--handWidth);\n  transform-origin: 1px 1px;\n  top: calc(var(--size) / 2 - var(--handWidth) / 2);\n  left: calc(var(--size) / 2 - var(--handWidth) / 2);\n}\n.R1ObR:after {\n  width: var(--maxHeight);\n}\n.R1ObR:after {\n  animation: huxy-timer var(--maxTime) linear infinite;\n}\n.R1ObR:before {\n  width: var(--minHeight);\n}\n.R1ObR:before {\n  animation: huxy-timer var(--minTime) linear infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-timer": "R1ObR"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".q9v4I {\n  --backColor: rgba(0, 0, 0, 0.2);\n  --frontColor: #ffffff;\n  --score: 0;\n  position: relative;\n  font-size: 2.4rem;\n  color: var(--backColor);\n  display: inline-block;\n}\n.q9v4I::before {\n  content: attr(data-text);\n  position: absolute;\n  overflow: hidden;\n  width: var(--score);\n  max-width: 100%;\n  white-space: nowrap;\n  color: var(--frontColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-rate-score": "q9v4I"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-text-3d {\n  0% {\n    transform: rotateX(0deg) rotateY(90deg) rotateZ(90deg);\n  }\n  50% {\n    transform: rotateX(0deg) rotateY(90deg) rotateZ(180deg);\n  }\n  51% {\n    transform: rotateX(0deg) rotateY(90deg) rotateZ(360deg);\n  }\n  100% {\n    transform: rotateX(0deg) rotateY(90deg) rotateZ(450deg);\n  }\n}\n@keyframes huxy-text-3d-animate {\n  0% {\n    opacity: 1;\n    transform: rotateX(90deg) rotateY(180deg) translateX(50%) scale(var(--size));\n  }\n  50% {\n    opacity: 0.5;\n    transform: rotateX(180deg) rotateY(180deg) translateX(50%) scale(0.2);\n  }\n  51% {\n    opacity: 0.5;\n    transform: rotateX(360deg) rotateY(180deg) translateX(50%) scale(0.2);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(450deg) rotateY(180deg) translateX(50%) scale(var(--size));\n  }\n}\n.huxy-text-3d {\n  --bgColor: rgba(0, 0, 0, 0.8);\n  --width: 500px;\n  --padding: 50px;\n  width: 100%;\n  height: var(--width);\n  background-color: var(--bgColor);\n}\n.huxy-text-3d .text-3d-container {\n  margin: 0 auto;\n  position: relative;\n  width: var(--width);\n  height: var(--width);\n  transform-style: preserve-3d;\n  perspective: 1000px;\n  perspective-origin: 50% 50%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.huxy-text-3d .text-3d-container .text-3d-item {\n  --time: 10s;\n  --center: 0px;\n  --rotate: 0deg;\n  --size: 1;\n  --color: #fff;\n  --delay: 0s;\n  --current: 90deg;\n  position: absolute;\n  width: calc(var(--width) - var(--padding) * 2);\n  height: calc(var(--width) - var(--padding) * 2);\n  left: var(--padding);\n  top: var(--padding);\n  background-color: transparent;\n  transform-style: preserve-3d;\n  backface-visibility: hidden;\n  transform: rotateX(0deg) rotateY(90deg) rotateZ(var(--current));\n  animation: huxy-text-3d var(--time) linear var(--delay) infinite;\n}\n.huxy-text-3d .text-3d-container .text-3d-item .text-3d-item-card {\n  transform-style: preserve-3d;\n  transform-origin: 50% 50%;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  transform: rotateX(0deg) rotateY(90deg) rotateZ(var(--rotate));\n}\n.huxy-text-3d .text-3d-container .text-3d-item .text-3d-item-card .animate-text {\n  position: absolute;\n  text-align: center;\n  left: calc(50% - var(--center));\n  bottom: 0;\n  transform-origin: 50% 50%;\n  transform: rotateX(var(--current)) rotateY(180deg) translateX(50%) scale(1);\n  animation: huxy-text-3d-animate var(--time) linear var(--delay) infinite;\n  display: block;\n  font-size: 1.4rem;\n  color: var(--color);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 1px 1px 0.1em currentColor;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100px;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-text-filter {\n  0% {\n    letter-spacing: -2.2rem;\n    filter: blur(0.3rem);\n  }\n  50% {\n    filter: blur(0.5rem);\n  }\n  90%,\n  100% {\n    letter-spacing: 0.5rem;\n    filter: blur(0rem);\n  }\n}\n._zrvj {\n  --time: 3s;\n  height: 32px;\n  color: #ffffff;\n  position: relative;\n  filter: contrast(20);\n  overflow: hidden;\n}\n.ww0tY {\n  text-transform: uppercase;\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  letter-spacing: -2.2rem;\n}\n.ww0tY {\n  animation: huxy-text-filter var(--time) infinite alternate ease-in-out;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-text-filter": "_zrvj",
	"text-filter": "ww0tY"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-text-loading {\n  0% {\n    max-width: 0;\n  }\n}\n.ZYC7Y {\n  --backColor: rgba(0, 0, 0, 0.2);\n  --frontColor: #ffffff;\n  --time: 4s;\n  position: relative;\n  color: var(--backColor);\n  display: inline-block;\n}\n.ZYC7Y::before {\n  content: attr(data-text);\n  position: absolute;\n  overflow: hidden;\n  max-width: 100%;\n  white-space: nowrap;\n  color: var(--frontColor);\n}\n.ZYC7Y::before {\n  animation: huxy-text-loading var(--time) linear infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-text-loading": "ZYC7Y"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes huxy-text-masked {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: -100% 0;\n  }\n}\n.zg3Sy {\n  --startColor: #0ee5ff;\n  --endColor: #f4ab20;\n  --time: 6s;\n  background-image: linear-gradient(to right, var(--startColor), var(--endColor) 50%, var(--startColor) 50%, var(--endColor) 100%, var(--startColor));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 200% 100%;\n}\n.zg3Sy {\n  animation: huxy-text-masked var(--time) infinite linear;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"huxy-text-masked": "zg3Sy"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 414:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 703:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 748:
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 736:
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 706:
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 567:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 306:
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 62:
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AnimateBorder": function() { return /* reexport */ materials_border_animateBorder; },
  "Barchart": function() { return /* reexport */ materials_chart_barchart; },
  "BgBox": function() { return /* reexport */ materials_border_bgBox; },
  "Card": function() { return /* reexport */ materials_chart_card; },
  "Circle": function() { return /* reexport */ materials_chart_circle; },
  "Container": function() { return /* reexport */ materials_chart_container; },
  "CornerBorder": function() { return /* reexport */ materials_border_cornerBorder; },
  "Css3dModel": function() { return /* reexport */ materials_animation_css3dModel; },
  "Dashboard": function() { return /* reexport */ materials_chart_dashboard; },
  "Fliper": function() { return /* reexport */ materials_animation_fliper; },
  "HalfBorder": function() { return /* reexport */ materials_border_halfBorder; },
  "IconAnimate": function() { return /* reexport */ materials_animation_iconAnimate; },
  "IconCarousel": function() { return /* reexport */ materials_animation_iconCarousel; },
  "Light": function() { return /* reexport */ materials_shape_light; },
  "List": function() { return /* reexport */ huxy_materials_chart_list; },
  "Loading": function() { return /* reexport */ materials_shape_loading; },
  "Location": function() { return /* reexport */ huxy_materials_shape_location; },
  "Piechart": function() { return /* reexport */ materials_chart_piechart; },
  "Progress": function() { return /* reexport */ materials_chart_progress; },
  "RateScore": function() { return /* reexport */ materials_text_rateScore; },
  "Ring": function() { return /* reexport */ materials_chart_ring; },
  "Search": function() { return /* reexport */ materials_shape_search; },
  "Spot": function() { return /* reexport */ materials_shape_spot; },
  "Table": function() { return /* reexport */ materials_chart_table; },
  "Taiji": function() { return /* reexport */ materials_shape_taiji; },
  "Text3d": function() { return /* reexport */ materials_text_text3d; },
  "TextFilter": function() { return /* reexport */ materials_text_textFilter; },
  "TextLoading": function() { return /* reexport */ materials_text_textLoading; },
  "TextMasked": function() { return /* reexport */ materials_text_textMasked; },
  "Time": function() { return /* reexport */ materials_shape_time; },
  "TitleBorder": function() { return /* reexport */ materials_border_titleBorder; },
  "TitleHeader": function() { return /* reexport */ materials_border_titleHeader; },
  "Wave": function() { return /* reexport */ materials_chart_wave; }
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
;// CONCATENATED MODULE: ../huxy/utils/rmUnit.js
const rmUnit = function (value) {
  let unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  return `${value}`.replace(unit, '') - 0;
};
/* harmony default export */ var utils_rmUnit = (rmUnit);
;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';
/* harmony default export */ var utils_isReactEle = (isReactEle);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(748);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(306);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(736);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(567);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(706);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(62);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/animation/css3dModel/index.less
var css3dModel = __webpack_require__(615);
;// CONCATENATED MODULE: ../huxy/materials/animation/css3dModel/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(css3dModel/* default */.Z, options);




       /* harmony default export */ var animation_css3dModel = (css3dModel/* default */.Z && css3dModel/* default.locals */.Z.locals ? css3dModel/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
;// CONCATENATED MODULE: ../huxy/materials/animation/css3dModel/index.jsx


const _excluded = ["list", "size", "cardSize", "bottom", "style"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const AnimateModel = _ref => {
  let {
      list = [],
      size = '360px',
      cardSize = '42px',
      bottom = '60px',
      style
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const angle = 360 / list.length;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread(_objectSpread({
    className: "huxy-css-3d-models",
    style: _objectSpread({
      '--size': size,
      '--cardSize': cardSize,
      '--bottom': bottom
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "model-container",
      children: list.map((item, i) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "model-item",
        style: {
          '--rotateY': `${angle * i}deg`
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          className: "model-card huxy-css-3d-models-tooltip",
          tooltip: item.label,
          href: item.link,
          target: "_blank",
          children: [item.icon ? /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: item.icon,
            alt: item.label
          }) : null, utils_isReactEle(item.icon) ? item.icon : item.icon ? /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: item.icon,
            alt: item.label
          }) : null]
        })
      }, item.label))
    })
  }));
};
/* harmony default export */ var materials_animation_css3dModel = (AnimateModel);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/animation/iconAnimate/index.less
var iconAnimate = __webpack_require__(501);
;// CONCATENATED MODULE: ../huxy/materials/animation/iconAnimate/index.less

      
      
      
      
      
      
      
      
      

var iconAnimate_options = {};

iconAnimate_options.styleTagTransform = (styleTagTransform_default());
iconAnimate_options.setAttributes = (setAttributesWithoutAttributes_default());

      iconAnimate_options.insert = insertBySelector_default().bind(null, "head");
    
iconAnimate_options.domAPI = (styleDomAPI_default());
iconAnimate_options.insertStyleElement = (insertStyleElement_default());

var iconAnimate_update = injectStylesIntoStyleTag_default()(iconAnimate/* default */.Z, iconAnimate_options);




       /* harmony default export */ var animation_iconAnimate = (iconAnimate/* default */.Z && iconAnimate/* default.locals */.Z.locals ? iconAnimate/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/animation/iconAnimate/index.jsx


const iconAnimate_excluded = ["objs", "models", "height", "style", "className"];
function iconAnimate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function iconAnimate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? iconAnimate_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : iconAnimate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






const CssModels = _ref => {
  let {
      objs = [],
      models = [],
      height = '480px',
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, iconAnimate_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", iconAnimate_objectSpread(iconAnimate_objectSpread({
    className: `huxy-icon-animate-container${className ? ` ${className}` : ''}`,
    style: iconAnimate_objectSpread({
      '--height': height
    }, style)
  }, rest), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "huxy-icon-animate-materiels",
      children: objs.map(_ref2 => {
        let {
          value,
          label,
          icon,
          link,
          type,
          style
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: `huxy-icon-animate-tooltip obj-${value}${!type ? ' obj-img' : ''}`,
          tooltip: !type ? label : undefined,
          href: link,
          target: "_blank",
          style: style,
          children: utils_isReactEle(icon) ? icon : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: icon,
            alt: label
          })
        }, label);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(materials_animation_css3dModel, {
      list: models,
      size: `${utils_rmUnit(height) - 120}px`
    })]
  }));
};
/* harmony default export */ var materials_animation_iconAnimate = (CssModels);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/animation/fliper/index.less
var fliper = __webpack_require__(729);
;// CONCATENATED MODULE: ../huxy/materials/animation/fliper/index.less

      
      
      
      
      
      
      
      
      

var fliper_options = {};

fliper_options.styleTagTransform = (styleTagTransform_default());
fliper_options.setAttributes = (setAttributesWithoutAttributes_default());

      fliper_options.insert = insertBySelector_default().bind(null, "head");
    
fliper_options.domAPI = (styleDomAPI_default());
fliper_options.insertStyleElement = (insertStyleElement_default());

var fliper_update = injectStylesIntoStyleTag_default()(fliper/* default */.Z, fliper_options);




       /* harmony default export */ var animation_fliper = (fliper/* default */.Z && fliper/* default.locals */.Z.locals ? fliper/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/animation/fliper/index.jsx


const fliper_excluded = ["front", "back"];
function fliper_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function fliper_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fliper_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fliper_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const Index = _ref => {
  let {
      front,
      back
    } = _ref,
    rest = _objectWithoutProperties(_ref, fliper_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", fliper_objectSpread(fliper_objectSpread({
    className: animation_fliper["huxy-card-fliper"]
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: animation_fliper.card,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: animation_fliper.front,
        children: front
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: animation_fliper.back,
        children: back
      })]
    })
  }));
};
/* harmony default export */ var materials_animation_fliper = (Index);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/use/useRaf/index.jsx

const useRaf = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const frame = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(0);
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const setRaf = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(value => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ var use_useRaf = (useRaf);
;// CONCATENATED MODULE: ../huxy/use/useInterval/index.jsx

const useInterval = (callback, delay) => {
  const savedCallback = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (delay) {
      const timer = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
};
/* harmony default export */ var use_useInterval = (useInterval);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/animation/iconCarousel/index.less
var iconCarousel = __webpack_require__(17);
;// CONCATENATED MODULE: ../huxy/materials/animation/iconCarousel/index.less

      
      
      
      
      
      
      
      
      

var iconCarousel_options = {};

iconCarousel_options.styleTagTransform = (styleTagTransform_default());
iconCarousel_options.setAttributes = (setAttributesWithoutAttributes_default());

      iconCarousel_options.insert = insertBySelector_default().bind(null, "head");
    
iconCarousel_options.domAPI = (styleDomAPI_default());
iconCarousel_options.insertStyleElement = (insertStyleElement_default());

var iconCarousel_update = injectStylesIntoStyleTag_default()(iconCarousel/* default */.Z, iconCarousel_options);




       /* harmony default export */ var animation_iconCarousel = (iconCarousel/* default */.Z && iconCarousel/* default.locals */.Z.locals ? iconCarousel/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/animation/iconCarousel/index.jsx


const iconCarousel_excluded = ["width", "wait", "list", "className"];
function iconCarousel_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function iconCarousel_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? iconCarousel_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : iconCarousel_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const formatItems = function (objs) {
  let width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  width = 1.5 * width;
  return objs.map((item, i) => {
    const r = Math.random();
    let s = 1;
    if (r < 0.3334) {
      s = 1.2;
    } else if (r < 0.6667) {
      s = 0.8;
    }
    const row = ~~(i / 3);
    const col = i % 3;
    let x = 1.5 * width * row;
    if (col === 1) {
      x += width / 2;
    }
    const y = col * width + width / 6 * (col + 1);
    item.transform = {
      x,
      y,
      s
    };
    return item;
  });
};
const animateObjs = function (objs) {
  let width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  width = 2.25 * width;
  return objs.map(item => {
    item.transform.x -= 2;
    if (item.transform.x + width < 0) {
      item.transform.x = ~~(objs.length / 3) * width;
    }
    return item;
  });
};
const RandCarousel = _ref => {
  let {
      width = 60,
      wait = 56,
      list = [],
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, iconCarousel_excluded);
  const initData = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useMemo)(() => formatItems(list, width), []);
  const [data, setData] = use_useRaf(initData);
  const [delay, setDelay] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(wait);
  use_useInterval(() => {
    const newData = animateObjs(data, width);
    setData(newData);
  }, delay);
  const onMouseEnter = e => {
    setDelay(null);
  };
  const onMouseLeave = e => {
    setDelay(wait);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", iconCarousel_objectSpread(iconCarousel_objectSpread({
    className: `huxy-icon-carousel${className ? ` ${className}` : ''}`
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "icon-container",
      children: data.map((item, i) => /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: `icon-item huxy-icon-carousel-tooltip-${i % 3 === 0 ? 'lt' : 'lb'}`,
        tooltip: item.label,
        style: {
          transform: `translate(${item.transform.x}px, ${item.transform.y}px) scale(${item.transform.s})`,
          width
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        href: item.link,
        target: "_blank",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: item.icon,
          alt: item.label
        })
      }, item.label))
    })
  }));
};
/* harmony default export */ var materials_animation_iconCarousel = (RandCarousel);
;// CONCATENATED MODULE: ../huxy/materials/animation/index.jsx




// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/border/titleHeader/index.less
var titleHeader = __webpack_require__(511);
;// CONCATENATED MODULE: ../huxy/materials/border/titleHeader/index.less

      
      
      
      
      
      
      
      
      

var titleHeader_options = {};

titleHeader_options.styleTagTransform = (styleTagTransform_default());
titleHeader_options.setAttributes = (setAttributesWithoutAttributes_default());

      titleHeader_options.insert = insertBySelector_default().bind(null, "head");
    
titleHeader_options.domAPI = (styleDomAPI_default());
titleHeader_options.insertStyleElement = (insertStyleElement_default());

var titleHeader_update = injectStylesIntoStyleTag_default()(titleHeader/* default */.Z, titleHeader_options);




       /* harmony default export */ var border_titleHeader = (titleHeader/* default */.Z && titleHeader/* default.locals */.Z.locals ? titleHeader/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/border/titleHeader/index.jsx


const titleHeader_excluded = ["title", "borderColor", "titleWidth", "titleHeight", "style", "className"];
function titleHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function titleHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? titleHeader_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : titleHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const titleHeader_Index = _ref => {
  let {
      title,
      borderColor,
      titleWidth,
      titleHeight,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, titleHeader_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", titleHeader_objectSpread(titleHeader_objectSpread({
    className: `${border_titleHeader["huxy-title-header-box"]}${className ? ` ${className}` : ''}`,
    style: titleHeader_objectSpread({
      '--borderColor': borderColor,
      '--titleWidth': titleWidth,
      '--titleHeight': titleHeight
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
      className: border_titleHeader.title,
      children: title
    })
  }));
};
/* harmony default export */ var materials_border_titleHeader = (titleHeader_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/border/cornerBorder/index.less
var cornerBorder = __webpack_require__(40);
;// CONCATENATED MODULE: ../huxy/materials/border/cornerBorder/index.less

      
      
      
      
      
      
      
      
      

var cornerBorder_options = {};

cornerBorder_options.styleTagTransform = (styleTagTransform_default());
cornerBorder_options.setAttributes = (setAttributesWithoutAttributes_default());

      cornerBorder_options.insert = insertBySelector_default().bind(null, "head");
    
cornerBorder_options.domAPI = (styleDomAPI_default());
cornerBorder_options.insertStyleElement = (insertStyleElement_default());

var cornerBorder_update = injectStylesIntoStyleTag_default()(cornerBorder/* default */.Z, cornerBorder_options);




       /* harmony default export */ var border_cornerBorder = (cornerBorder/* default */.Z && cornerBorder/* default.locals */.Z.locals ? cornerBorder/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/border/cornerBorder/index.jsx


const cornerBorder_excluded = ["size", "borderColor", "cornerColor", "bgColor", "style", "className", "children"];
function cornerBorder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function cornerBorder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? cornerBorder_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : cornerBorder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const cornerBorder_Index = _ref => {
  let {
      size = '8px',
      borderColor = 'var(--panelBgColor)',
      cornerColor = 'var(--appColor)',
      bgColor = 'transparent',
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, cornerBorder_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", cornerBorder_objectSpread(cornerBorder_objectSpread({
    className: `${border_cornerBorder.corner}${className ? ` ${className}` : ''}`,
    style: cornerBorder_objectSpread({
      '--cornerSize': size,
      '--borderColor': borderColor,
      '--cornerColor': cornerColor,
      '--bgColor': bgColor
    }, style)
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ var materials_border_cornerBorder = (cornerBorder_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/border/halfBorder/index.less
var halfBorder = __webpack_require__(538);
;// CONCATENATED MODULE: ../huxy/materials/border/halfBorder/index.less

      
      
      
      
      
      
      
      
      

var halfBorder_options = {};

halfBorder_options.styleTagTransform = (styleTagTransform_default());
halfBorder_options.setAttributes = (setAttributesWithoutAttributes_default());

      halfBorder_options.insert = insertBySelector_default().bind(null, "head");
    
halfBorder_options.domAPI = (styleDomAPI_default());
halfBorder_options.insertStyleElement = (insertStyleElement_default());

var halfBorder_update = injectStylesIntoStyleTag_default()(halfBorder/* default */.Z, halfBorder_options);




       /* harmony default export */ var border_halfBorder = (halfBorder/* default */.Z && halfBorder/* default.locals */.Z.locals ? halfBorder/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/border/halfBorder/index.jsx


const halfBorder_excluded = ["size", "borderColor", "style", "className", "children"];
function halfBorder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function halfBorder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? halfBorder_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : halfBorder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const halfBorder_Index = _ref => {
  let {
      size = '8px',
      borderColor = 'var(--appColor)',
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, halfBorder_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", halfBorder_objectSpread(halfBorder_objectSpread({
    className: `${border_halfBorder["corner-wrap"]}${className ? ` ${className}` : ''}`,
    style: halfBorder_objectSpread({
      '--cornerSize': size,
      '--borderColor': borderColor
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: border_halfBorder["corner-half"],
      children: children
    })
  }));
};
/* harmony default export */ var materials_border_halfBorder = (halfBorder_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/border/bgBox/index.less
var bgBox = __webpack_require__(579);
;// CONCATENATED MODULE: ../huxy/materials/border/bgBox/index.less

      
      
      
      
      
      
      
      
      

var bgBox_options = {};

bgBox_options.styleTagTransform = (styleTagTransform_default());
bgBox_options.setAttributes = (setAttributesWithoutAttributes_default());

      bgBox_options.insert = insertBySelector_default().bind(null, "head");
    
bgBox_options.domAPI = (styleDomAPI_default());
bgBox_options.insertStyleElement = (insertStyleElement_default());

var bgBox_update = injectStylesIntoStyleTag_default()(bgBox/* default */.Z, bgBox_options);




       /* harmony default export */ var border_bgBox = (bgBox/* default */.Z && bgBox/* default.locals */.Z.locals ? bgBox/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/border/bgBox/index.jsx


const bgBox_excluded = ["type", "bgColor", "cubeColor", "url", "style", "className", "children"];
function bgBox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function bgBox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? bgBox_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : bgBox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const bgBox_Index = _ref => {
  let {
      type = 'dot',
      bgColor,
      cubeColor,
      url,
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, bgBox_excluded);
  type = url ? 'img' : type;
  const bgImg = url ? {
    backgroundImage: `url(${url})`
  } : undefined;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", bgBox_objectSpread(bgBox_objectSpread({
    className: `${border_bgBox[`bg-box-${type}`]}${className ? ` ${className}` : ''}`,
    style: bgBox_objectSpread(bgBox_objectSpread({
      '--bgColor': bgColor,
      '--cubeColor': cubeColor
    }, bgImg), style)
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ var materials_border_bgBox = (bgBox_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/border/titleBorder/index.less
var titleBorder = __webpack_require__(914);
;// CONCATENATED MODULE: ../huxy/materials/border/titleBorder/index.less

      
      
      
      
      
      
      
      
      

var titleBorder_options = {};

titleBorder_options.styleTagTransform = (styleTagTransform_default());
titleBorder_options.setAttributes = (setAttributesWithoutAttributes_default());

      titleBorder_options.insert = insertBySelector_default().bind(null, "head");
    
titleBorder_options.domAPI = (styleDomAPI_default());
titleBorder_options.insertStyleElement = (insertStyleElement_default());

var titleBorder_update = injectStylesIntoStyleTag_default()(titleBorder/* default */.Z, titleBorder_options);




       /* harmony default export */ var border_titleBorder = (titleBorder/* default */.Z && titleBorder/* default.locals */.Z.locals ? titleBorder/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/border/titleBorder/index.jsx


const titleBorder_excluded = ["children", "title", "fontSize", "borderSize", "borderColor", "space", "style", "className"];
function titleBorder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function titleBorder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? titleBorder_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : titleBorder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const titleBorder_Index = _ref => {
  let {
      children,
      title,
      fontSize,
      borderSize,
      borderColor = 'var(--appColor)',
      space = '10px',
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, titleBorder_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", titleBorder_objectSpread(titleBorder_objectSpread({
    className: `${border_titleBorder["huxy-title-border-wrap"]}${className ? ` ${className}` : ''}`,
    style: titleBorder_objectSpread({
      '--borderColor': borderColor,
      '--space': space,
      '--fontSize': fontSize,
      '--borderSize': borderSize
    }, style)
  }, rest), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: border_titleBorder["huxy-title-border-top"],
      children: title
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: border_titleBorder["huxy-title-border-box"],
      children: children
    })]
  }));
};
/* harmony default export */ var materials_border_titleBorder = (titleBorder_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/border/animateBorder/index.less
var animateBorder = __webpack_require__(925);
;// CONCATENATED MODULE: ../huxy/materials/border/animateBorder/index.less

      
      
      
      
      
      
      
      
      

var animateBorder_options = {};

animateBorder_options.styleTagTransform = (styleTagTransform_default());
animateBorder_options.setAttributes = (setAttributesWithoutAttributes_default());

      animateBorder_options.insert = insertBySelector_default().bind(null, "head");
    
animateBorder_options.domAPI = (styleDomAPI_default());
animateBorder_options.insertStyleElement = (insertStyleElement_default());

var animateBorder_update = injectStylesIntoStyleTag_default()(animateBorder/* default */.Z, animateBorder_options);




       /* harmony default export */ var border_animateBorder = (animateBorder/* default */.Z && animateBorder/* default.locals */.Z.locals ? animateBorder/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/border/animateBorder/index.jsx


const animateBorder_excluded = ["type", "space", "borderColor", "style", "className", "children"];
function animateBorder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function animateBorder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? animateBorder_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : animateBorder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const animateBorder_Index = _ref => {
  let {
      type = 'solid',
      space = '2px',
      borderColor = 'var(--appColor)',
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, animateBorder_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", animateBorder_objectSpread(animateBorder_objectSpread({
    className: `${border_animateBorder["huxy-border-wrap"]}${className ? ` ${className}` : ''}`,
    style: animateBorder_objectSpread({
      '--space': space,
      '--borderColor': borderColor
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: border_animateBorder[`huxy-border-animate-${type === 'dash' ? 'dash' : 'solid'}`],
      children: children
    })
  }));
};
/* harmony default export */ var materials_border_animateBorder = (animateBorder_Index);
;// CONCATENATED MODULE: ../huxy/materials/border/index.jsx






;// CONCATENATED MODULE: ../huxy/utils/padStart.js
const padStart = function () {
  let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let pad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  const len = str.length;
  if (len >= n) {
    return str;
  }
  const fill = Array(n - len + 1).join(pad);
  return `${fill}${str}`;
};
/* harmony default export */ var utils_padStart = (padStart);
;// CONCATENATED MODULE: ../huxy/utils/randColor.js

const randColor = () => '#' + utils_padStart((~~(Math.random() * (1 << 24))).toString(16), 6);
/* harmony default export */ var utils_randColor = (randColor);
;// CONCATENATED MODULE: ../huxy/utils/randNum.js
const randNum = function () {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let int = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  a < b && (a = [b, b = a][0]);
  if (int) {
    return ~~(Math.random() * (a - b + 1)) + b;
  }
  return Math.random() * (a - b) + b;
};
/* harmony default export */ var utils_randNum = (randNum);
;// CONCATENATED MODULE: ../huxy/utils/randItem.js

const randItem = function () {
  let list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return list[utils_randNum(list.length - 1)];
};
/* harmony default export */ var utils_randItem = (randItem);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/barchart/index.less
var barchart = __webpack_require__(771);
;// CONCATENATED MODULE: ../huxy/materials/chart/barchart/index.less

      
      
      
      
      
      
      
      
      

var barchart_options = {};

barchart_options.styleTagTransform = (styleTagTransform_default());
barchart_options.setAttributes = (setAttributesWithoutAttributes_default());

      barchart_options.insert = insertBySelector_default().bind(null, "head");
    
barchart_options.domAPI = (styleDomAPI_default());
barchart_options.insertStyleElement = (insertStyleElement_default());

var barchart_update = injectStylesIntoStyleTag_default()(barchart/* default */.Z, barchart_options);




       /* harmony default export */ var chart_barchart = (barchart/* default */.Z && barchart/* default.locals */.Z.locals ? barchart/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/barchart/index.jsx


const barchart_excluded = ["list", "height", "space", "itemWidth", "colors", "color", "style", "className"];
function barchart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function barchart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? barchart_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : barchart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






const randColors = colors => colors != null && colors.length ? utils_randItem(colors) : utils_randColor();
const barchart_Index = _ref => {
  let {
      list = 10,
      height = '240px',
      space = '25px',
      itemWidth = '30px',
      colors = [],
      color,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, barchart_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", barchart_objectSpread(barchart_objectSpread({
    className: `${chart_barchart["huxy-skeleton-barchart"]}${className ? ` ${className}` : ''}`,
    style: barchart_objectSpread({
      '--height': height
    }, style)
  }, rest), {}, {
    children: (Array.isArray(list) ? list : [...new Array(list)]).map((item, i) => {
      var _ref2, _item$color, _item$height;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: chart_barchart["sk-bar-item"],
        style: {
          '--space': space,
          '--itemWidth': itemWidth,
          '--bgColor': (_ref2 = (_item$color = item == null ? void 0 : item.color) != null ? _item$color : color) != null ? _ref2 : `linear-gradient(to top, ${randColors(colors)}, ${randColors(colors)})`,
          '--itemHeight': (_item$height = item == null ? void 0 : item.height) != null ? _item$height : `${utils_randNum(15, 100)}%`,
          left: `${i * (utils_rmUnit(space) + utils_rmUnit(itemWidth))}px`
        }
      }, `huxy-skeleton-barchart-${i}`);
    })
  }));
};
/* harmony default export */ var materials_chart_barchart = (barchart_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/card/index.less
var card = __webpack_require__(709);
;// CONCATENATED MODULE: ../huxy/materials/chart/card/index.less

      
      
      
      
      
      
      
      
      

var card_options = {};

card_options.styleTagTransform = (styleTagTransform_default());
card_options.setAttributes = (setAttributesWithoutAttributes_default());

      card_options.insert = insertBySelector_default().bind(null, "head");
    
card_options.domAPI = (styleDomAPI_default());
card_options.insertStyleElement = (insertStyleElement_default());

var card_update = injectStylesIntoStyleTag_default()(card/* default */.Z, card_options);




       /* harmony default export */ var chart_card = (card/* default */.Z && card/* default.locals */.Z.locals ? card/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/card/index.jsx


const card_excluded = ["height", "leftColor", "rightColor", "topWidth", "bottomWidth", "style", "className"];
function card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? card_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const card_Index = _ref => {
  let {
      height = '120px',
      leftColor,
      rightColor,
      topWidth,
      bottomWidth,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, card_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", card_objectSpread(card_objectSpread({
    className: `${chart_card["huxy-skeleton-card"]}${className ? ` ${className}` : ''}`,
    style: card_objectSpread({
      '--height': height,
      '--leftColor': leftColor != null ? leftColor : utils_randColor(),
      '--rightColor': rightColor != null ? rightColor : utils_randColor(),
      '--topWidth': topWidth != null ? topWidth : `${utils_randNum(30, 60)}%`,
      '--bottomWidth': bottomWidth != null ? bottomWidth : `${utils_randNum(55, 95)}%`
    }, style)
  }, rest), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: chart_card["sk-card-left"],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: chart_card["sk-card-img"]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: chart_card["sk-card-right"],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
        className: chart_card.title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: chart_card.text
      })]
    })]
  }));
};
/* harmony default export */ var materials_chart_card = (card_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/circle/index.less
var circle = __webpack_require__(9);
;// CONCATENATED MODULE: ../huxy/materials/chart/circle/index.less

      
      
      
      
      
      
      
      
      

var circle_options = {};

circle_options.styleTagTransform = (styleTagTransform_default());
circle_options.setAttributes = (setAttributesWithoutAttributes_default());

      circle_options.insert = insertBySelector_default().bind(null, "head");
    
circle_options.domAPI = (styleDomAPI_default());
circle_options.insertStyleElement = (insertStyleElement_default());

var circle_update = injectStylesIntoStyleTag_default()(circle/* default */.Z, circle_options);




       /* harmony default export */ var chart_circle = (circle/* default */.Z && circle/* default.locals */.Z.locals ? circle/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/circle/index.jsx


const circle_excluded = ["size", "space", "style", "className"];
function circle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function circle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? circle_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : circle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const list = [{
  borderWidth: '2px',
  borderRightColor: 'rgba(2, 255, 255, 0.15)',
  borderTopColor: 'rgba(2, 255, 255, 0.15)',
  borderBottomColor: 'rgba(2, 255, 255, 0.15)',
  time: '5s'
}, {
  borderWidth: '5px',
  borderTopColor: 'rgba(2, 255, 255, 0.7)',
  borderBottomColor: 'rgba(2, 255, 255, 0.7)',
  time: '4s',
  rotateStart: '360deg',
  rotateEnd: '0deg'
}, {
  borderWidth: '3px',
  borderTopColor: 'rgba(2, 255, 255, 0.5)',
  borderBottomColor: 'rgba(2, 255, 255, 0.5)',
  time: '3s'
}, {
  borderWidth: '4px',
  borderTopColor: 'rgba(2, 255, 255, 0.15)',
  time: '2s',
  rotateStart: '360deg',
  rotateEnd: '0deg'
}];
const circle_Index = _ref => {
  let {
      size = '300px',
      space = '8px',
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, circle_excluded);
  let padding = utils_rmUnit(space) * 3;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", circle_objectSpread(circle_objectSpread({
    className: `${chart_circle["huxy-animate-border-circle"]}${className ? ` ${className}` : ''}`,
    style: circle_objectSpread({
      '--size': size
    }, style)
  }, rest), {}, {
    children: list.map((item, i) => {
      padding = padding + utils_rmUnit(item.borderWidth) * 2 + utils_rmUnit(space) * 2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: chart_circle["border-circle-item"],
        style: {
          '--itemSize': `calc(${size} - ${padding}px)`,
          '--borderWidth': item.borderWidth,
          '--borderLeftColor': item.borderLeftColor,
          '--borderRightColor': item.borderRightColor,
          '--borderTopColor': item.borderTopColor,
          '--borderBottomColor': item.borderBottomColor,
          '--time': item.time,
          '--rotateStart': item.rotateStart,
          '--rotateEnd': item.rotateEnd
        }
      }, `huxy-animate-border-circle-${i}`);
    })
  }));
};
/* harmony default export */ var materials_chart_circle = (circle_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/dashboard/index.less
var dashboard = __webpack_require__(681);
;// CONCATENATED MODULE: ../huxy/materials/chart/dashboard/index.less

      
      
      
      
      
      
      
      
      

var dashboard_options = {};

dashboard_options.styleTagTransform = (styleTagTransform_default());
dashboard_options.setAttributes = (setAttributesWithoutAttributes_default());

      dashboard_options.insert = insertBySelector_default().bind(null, "head");
    
dashboard_options.domAPI = (styleDomAPI_default());
dashboard_options.insertStyleElement = (insertStyleElement_default());

var dashboard_update = injectStylesIntoStyleTag_default()(dashboard/* default */.Z, dashboard_options);




       /* harmony default export */ var chart_dashboard = (dashboard/* default */.Z && dashboard/* default.locals */.Z.locals ? dashboard/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/dashboard/index.jsx


const dashboard_excluded = ["size", "width", "space", "colors", "style", "className"];
function dashboard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function dashboard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? dashboard_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dashboard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const dashboard_Index = _ref => {
  let {
      size = '400px',
      width = '20px',
      space = '20px',
      colors = [],
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, dashboard_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", dashboard_objectSpread(dashboard_objectSpread({
    className: `${chart_dashboard["huxy-skeleton-dashboard"]}${className ? ` ${className}` : ''}`,
    style: dashboard_objectSpread({
      '--size': size,
      '--width': width,
      '--space': space,
      '--color1': colors[0],
      '--color2': colors[1],
      '--color3': colors[2],
      '--color4': colors[3],
      '--color5': colors[4],
      '--color6': colors[5],
      '--color7': colors[6]
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: chart_dashboard.point
    })
  }));
};
/* harmony default export */ var materials_chart_dashboard = (dashboard_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/list/index.less
var chart_list = __webpack_require__(41);
;// CONCATENATED MODULE: ../huxy/materials/chart/list/index.less

      
      
      
      
      
      
      
      
      

var list_options = {};

list_options.styleTagTransform = (styleTagTransform_default());
list_options.setAttributes = (setAttributesWithoutAttributes_default());

      list_options.insert = insertBySelector_default().bind(null, "head");
    
list_options.domAPI = (styleDomAPI_default());
list_options.insertStyleElement = (insertStyleElement_default());

var list_update = injectStylesIntoStyleTag_default()(chart_list/* default */.Z, list_options);




       /* harmony default export */ var materials_chart_list = (chart_list/* default */.Z && chart_list/* default.locals */.Z.locals ? chart_list/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/list/index.jsx


const list_excluded = ["row", "leftColor", "rightColor", "rightWidth", "itemHeight", "space", "className"];
function list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? list_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const list_Index = _ref => {
  let {
      row = 8,
      leftColor = 'linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))',
      rightColor = 'rgba(0, 0, 0, 0.2)',
      rightWidth = '100px',
      itemHeight = '20px',
      space = '20px',
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, list_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", list_objectSpread(list_objectSpread({
    className: `${materials_chart_list["huxy-skeleton-list"]}${className ? ` ${className}` : ''}`,
    style: {
      '--rightWidth': rightWidth,
      '--itemHeight': itemHeight,
      '--space': space,
      '--leftColor': leftColor,
      '--rightColor': rightColor
    }
  }, rest), {}, {
    children: [...new Array(row)].map((v, i) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: materials_chart_list["sk-list-item"]
    }, `huxy-skeleton-list-${i}`))
  }));
};
/* harmony default export */ var huxy_materials_chart_list = (list_Index);
;// CONCATENATED MODULE: ../huxy/utils/randPercent.js

const randPercent = function (n) {
  let total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  const pers = [];
  [...new Array(n)].map((v, i) => {
    if (i === n - 1) {
      pers[i] = total;
    } else {
      pers[i] = utils_randNum(1, total - 1);
      total -= pers[i];
    }
  });
  return pers;
};
/* harmony default export */ var utils_randPercent = (randPercent);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/piechart/index.less
var piechart = __webpack_require__(180);
;// CONCATENATED MODULE: ../huxy/materials/chart/piechart/index.less

      
      
      
      
      
      
      
      
      

var piechart_options = {};

piechart_options.styleTagTransform = (styleTagTransform_default());
piechart_options.setAttributes = (setAttributesWithoutAttributes_default());

      piechart_options.insert = insertBySelector_default().bind(null, "head");
    
piechart_options.domAPI = (styleDomAPI_default());
piechart_options.insertStyleElement = (insertStyleElement_default());

var piechart_update = injectStylesIntoStyleTag_default()(piechart/* default */.Z, piechart_options);




       /* harmony default export */ var chart_piechart = (piechart/* default */.Z && piechart/* default.locals */.Z.locals ? piechart/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/piechart/index.jsx


const piechart_excluded = ["height", "colors", "style", "className"];
function piechart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function piechart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? piechart_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : piechart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const piechart_randColors = colors => colors != null && colors.length ? utils_randItem(colors) : utils_randColor();
const pers = utils_randPercent(4);
const piechart_Index = _ref => {
  let {
      height,
      colors = [],
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, piechart_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", piechart_objectSpread({
    className: `${chart_piechart["huxy-skeleton-piechart"]}${className ? ` ${className}` : ''}`,
    style: piechart_objectSpread({
      '--height': height,
      '--color1': piechart_randColors(colors),
      '--color2': piechart_randColors(colors),
      '--color3': piechart_randColors(colors),
      '--color4': piechart_randColors(colors),
      '--percent1': `${pers[0]}%`,
      '--percent2': `${pers[0] + pers[1]}%`,
      '--percent3': `${pers[0] + pers[1] + pers[2]}%`,
      '--percent4': '100%'
    }, style)
  }, rest));
};
/* harmony default export */ var materials_chart_piechart = (piechart_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/progress/index.less
var progress = __webpack_require__(752);
;// CONCATENATED MODULE: ../huxy/materials/chart/progress/index.less

      
      
      
      
      
      
      
      
      

var progress_options = {};

progress_options.styleTagTransform = (styleTagTransform_default());
progress_options.setAttributes = (setAttributesWithoutAttributes_default());

      progress_options.insert = insertBySelector_default().bind(null, "head");
    
progress_options.domAPI = (styleDomAPI_default());
progress_options.insertStyleElement = (insertStyleElement_default());

var progress_update = injectStylesIntoStyleTag_default()(progress/* default */.Z, progress_options);




       /* harmony default export */ var chart_progress = (progress/* default */.Z && progress/* default.locals */.Z.locals ? progress/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/progress/index.jsx


const progress_excluded = ["percent", "height", "bgColor", "progressColor", "borderRadius", "waveColor", "waveTime", "style", "className"];
function progress_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function progress_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? progress_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : progress_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const progress_Index = _ref => {
  let {
      percent,
      height = '20px',
      bgColor = 'rgba(0, 0, 0, 0.15)',
      progressColor,
      borderRadius = '4px',
      waveColor = 'rgba(255, 255, 255, 0.2)',
      waveTime = '3s',
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, progress_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", progress_objectSpread({
    className: `${chart_progress["huxy-progress-wave"]}${className ? ` ${className}` : ''}`,
    style: progress_objectSpread({
      '--percent': percent != null ? percent : utils_randNum(33, 99),
      '--height': height,
      '--bgColor': bgColor,
      '--progressColor': progressColor != null ? progressColor : utils_randColor(),
      '--borderRadius': borderRadius,
      '--waveColor': waveColor,
      '--waveTime': waveTime
    }, style)
  }, rest));
};
/* harmony default export */ var materials_chart_progress = (progress_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/ring/index.less
var ring = __webpack_require__(243);
;// CONCATENATED MODULE: ../huxy/materials/chart/ring/index.less

      
      
      
      
      
      
      
      
      

var ring_options = {};

ring_options.styleTagTransform = (styleTagTransform_default());
ring_options.setAttributes = (setAttributesWithoutAttributes_default());

      ring_options.insert = insertBySelector_default().bind(null, "head");
    
ring_options.domAPI = (styleDomAPI_default());
ring_options.insertStyleElement = (insertStyleElement_default());

var ring_update = injectStylesIntoStyleTag_default()(ring/* default */.Z, ring_options);




       /* harmony default export */ var chart_ring = (ring/* default */.Z && ring/* default.locals */.Z.locals ? ring/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/ring/index.jsx


const ring_excluded = ["list", "size", "itemWidth", "itemHeight", "bgColor", "shadowColor", "color", "style", "className"];
function ring_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ring_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ring_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ring_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const ring_Index = _ref => {
  let {
      list = 60,
      size = '300px',
      itemWidth = '30px',
      itemHeight = '4px',
      bgColor = 'rgba(255, 255, 255 , 0.9)',
      shadowColor = 'rgba(255, 255, 255 , 0.6)',
      color,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, ring_excluded);
  list = Array.isArray(list) ? list : [...new Array(list)];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", ring_objectSpread(ring_objectSpread({
    className: `${chart_ring["huxy-animate-border-ring"]}${className ? ` ${className}` : ''}`,
    style: ring_objectSpread({
      '--size': size,
      '--itemWidth': itemWidth,
      '--itemHeight': itemHeight,
      '--bgColor': bgColor,
      '--shadowColor': shadowColor
    }, style)
  }, rest), {}, {
    children: list.map((item, i) => {
      var _ref2, _item$color;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: chart_ring["border-ring-item"],
        style: {
          '--color': (_ref2 = (_item$color = item == null ? void 0 : item.color) != null ? _item$color : color) != null ? _ref2 : utils_randColor(),
          transform: `rotate(${360 / list.length * i}deg)`
        }
      }, `huxy-animate-border-ring-${i}`);
    })
  }));
};
/* harmony default export */ var materials_chart_ring = (ring_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/container/index.less
var container = __webpack_require__(988);
;// CONCATENATED MODULE: ../huxy/materials/chart/container/index.less

      
      
      
      
      
      
      
      
      

var container_options = {};

container_options.styleTagTransform = (styleTagTransform_default());
container_options.setAttributes = (setAttributesWithoutAttributes_default());

      container_options.insert = insertBySelector_default().bind(null, "head");
    
container_options.domAPI = (styleDomAPI_default());
container_options.insertStyleElement = (insertStyleElement_default());

var container_update = injectStylesIntoStyleTag_default()(container/* default */.Z, container_options);




       /* harmony default export */ var chart_container = (container/* default */.Z && container/* default.locals */.Z.locals ? container/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/container/index.jsx


const container_excluded = ["children", "hasTitle", "titleBgColor", "style", "className"];
function container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? container_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const container_Index = _ref => {
  let {
      children,
      hasTitle,
      titleBgColor,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, container_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", container_objectSpread(container_objectSpread({
    className: `${chart_container["skeleton-container"]}${hasTitle ? ` ${chart_container.title}` : ''}${className ? ` ${className}` : ''}`,
    style: container_objectSpread({
      '--titleBgColor': titleBgColor != null ? titleBgColor : utils_randColor()
    }, style)
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ var materials_chart_container = (container_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/table/index.less
var table = __webpack_require__(77);
;// CONCATENATED MODULE: ../huxy/materials/chart/table/index.less

      
      
      
      
      
      
      
      
      

var table_options = {};

table_options.styleTagTransform = (styleTagTransform_default());
table_options.setAttributes = (setAttributesWithoutAttributes_default());

      table_options.insert = insertBySelector_default().bind(null, "head");
    
table_options.domAPI = (styleDomAPI_default());
table_options.insertStyleElement = (insertStyleElement_default());

var table_update = injectStylesIntoStyleTag_default()(table/* default */.Z, table_options);




       /* harmony default export */ var chart_table = (table/* default */.Z && table/* default.locals */.Z.locals ? table/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/table/index.jsx


const table_excluded = ["row", "col"];
function table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? table_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const table_Index = _ref => {
  let {
      row = 6,
      col = 8
    } = _ref,
    rest = _objectWithoutProperties(_ref, table_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", table_objectSpread(table_objectSpread({
    className: chart_table["huxy-skeleton-table"]
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
          children: [...new Array(col)].map((v, k) => /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {})
          }, `skeleton-table-th-${k}`))
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: [...new Array(row)].map((v, k) => /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
          children: [...new Array(col)].map((sv, sk) => /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {})
          }, `skeleton-table-tr-${k}-${sk}`))
        }, `tr-${k}`))
      })]
    })
  }));
};
/* harmony default export */ var materials_chart_table = (table_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/chart/wave/index.less
var wave = __webpack_require__(832);
;// CONCATENATED MODULE: ../huxy/materials/chart/wave/index.less

      
      
      
      
      
      
      
      
      

var wave_options = {};

wave_options.styleTagTransform = (styleTagTransform_default());
wave_options.setAttributes = (setAttributesWithoutAttributes_default());

      wave_options.insert = insertBySelector_default().bind(null, "head");
    
wave_options.domAPI = (styleDomAPI_default());
wave_options.insertStyleElement = (insertStyleElement_default());

var wave_update = injectStylesIntoStyleTag_default()(wave/* default */.Z, wave_options);




       /* harmony default export */ var chart_wave = (wave/* default */.Z && wave/* default.locals */.Z.locals ? wave/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/chart/wave/index.jsx


const wave_excluded = ["color", "delay", "style", "className", "children"];
function wave_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function wave_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? wave_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : wave_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const wave_Index = _ref => {
  let {
      color = 'rgba(0, 0, 0, 0.06)',
      delay = '2s',
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, wave_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", wave_objectSpread(wave_objectSpread({
    className: `${chart_wave["huxy-loading-wave"]}${className ? ` ${className}` : ''}`,
    style: wave_objectSpread({
      '--waveColor': color,
      '--waveTime': delay
    }, style)
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ var materials_chart_wave = (wave_Index);
;// CONCATENATED MODULE: ../huxy/materials/chart/index.jsx











// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/time/index.less
var time = __webpack_require__(289);
;// CONCATENATED MODULE: ../huxy/materials/shape/time/index.less

      
      
      
      
      
      
      
      
      

var time_options = {};

time_options.styleTagTransform = (styleTagTransform_default());
time_options.setAttributes = (setAttributesWithoutAttributes_default());

      time_options.insert = insertBySelector_default().bind(null, "head");
    
time_options.domAPI = (styleDomAPI_default());
time_options.insertStyleElement = (insertStyleElement_default());

var time_update = injectStylesIntoStyleTag_default()(time/* default */.Z, time_options);




       /* harmony default export */ var shape_time = (time/* default */.Z && time/* default.locals */.Z.locals ? time/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/time/index.jsx

function time_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function time_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? time_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : time_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const time_Index = props => /*#__PURE__*/(0,jsx_runtime.jsx)("span", time_objectSpread({
  className: shape_time["huxy-timer"]
}, props));
/* harmony default export */ var materials_shape_time = (time_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/search/index.less
var search = __webpack_require__(950);
;// CONCATENATED MODULE: ../huxy/materials/shape/search/index.less

      
      
      
      
      
      
      
      
      

var search_options = {};

search_options.styleTagTransform = (styleTagTransform_default());
search_options.setAttributes = (setAttributesWithoutAttributes_default());

      search_options.insert = insertBySelector_default().bind(null, "head");
    
search_options.domAPI = (styleDomAPI_default());
search_options.insertStyleElement = (insertStyleElement_default());

var search_update = injectStylesIntoStyleTag_default()(search/* default */.Z, search_options);




       /* harmony default export */ var shape_search = (search/* default */.Z && search/* default.locals */.Z.locals ? search/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/search/index.jsx

function search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? search_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const search_Index = props => /*#__PURE__*/(0,jsx_runtime.jsx)("span", search_objectSpread({
  className: shape_search["huxy-search"]
}, props));
/* harmony default export */ var materials_shape_search = (search_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/location/index.less
var shape_location = __webpack_require__(875);
;// CONCATENATED MODULE: ../huxy/materials/shape/location/index.less

      
      
      
      
      
      
      
      
      

var location_options = {};

location_options.styleTagTransform = (styleTagTransform_default());
location_options.setAttributes = (setAttributesWithoutAttributes_default());

      location_options.insert = insertBySelector_default().bind(null, "head");
    
location_options.domAPI = (styleDomAPI_default());
location_options.insertStyleElement = (insertStyleElement_default());

var location_update = injectStylesIntoStyleTag_default()(shape_location/* default */.Z, location_options);




       /* harmony default export */ var materials_shape_location = (shape_location/* default */.Z && shape_location/* default.locals */.Z.locals ? shape_location/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/location/index.jsx

function location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? location_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const location_Index = props => /*#__PURE__*/(0,jsx_runtime.jsx)("span", location_objectSpread({
  className: materials_shape_location["huxy-location"]
}, props));
/* harmony default export */ var huxy_materials_shape_location = (location_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/loading/index.less
var loading = __webpack_require__(44);
;// CONCATENATED MODULE: ../huxy/materials/shape/loading/index.less

      
      
      
      
      
      
      
      
      

var loading_options = {};

loading_options.styleTagTransform = (styleTagTransform_default());
loading_options.setAttributes = (setAttributesWithoutAttributes_default());

      loading_options.insert = insertBySelector_default().bind(null, "head");
    
loading_options.domAPI = (styleDomAPI_default());
loading_options.insertStyleElement = (insertStyleElement_default());

var loading_update = injectStylesIntoStyleTag_default()(loading/* default */.Z, loading_options);




       /* harmony default export */ var shape_loading = (loading/* default */.Z && loading/* default.locals */.Z.locals ? loading/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/loading/index.jsx


const loading_excluded = ["list", "size", "shadowSize", "time", "style", "className"];
function loading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function loading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? loading_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : loading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




// const colors = ['#ffff00', '#76ff03', '#f06292', '#4fc3f7', '#ba68c8', '#f57c00', '#673ab7'];

const loading_Index = _ref => {
  let {
      list = 7,
      size = '40px',
      shadowSize = '50px',
      time = '1.6s',
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, loading_excluded);
  time = utils_rmUnit(time, 's');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", loading_objectSpread(loading_objectSpread({
    className: `${shape_loading["huxy-loading-ball"]}${className ? ` ${className}` : ''}`,
    style: loading_objectSpread({
      '--size': size,
      '--shadowSize': shadowSize,
      '--time': `${time}s`
    }, style)
  }, rest), {}, {
    children: (Array.isArray(list) ? list : [...new Array(list)]).map((item, i) => {
      var _item$delay, _list$length, _item$color;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: shape_loading.ball,
        style: {
          '--delay': (_item$delay = item == null ? void 0 : item.delay) != null ? _item$delay : `${time / (((_list$length = list == null ? void 0 : list.length) != null ? _list$length : list) + 1) * (i + 1) - time}s`,
          '--bgColor': (_item$color = item == null ? void 0 : item.color) != null ? _item$color : utils_randColor()
        }
      }, `huxy-loading-ball-${i}`);
    })
  }));
};
/* harmony default export */ var materials_shape_loading = (loading_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/spot/index.less
var spot = __webpack_require__(658);
;// CONCATENATED MODULE: ../huxy/materials/shape/spot/index.less

      
      
      
      
      
      
      
      
      

var spot_options = {};

spot_options.styleTagTransform = (styleTagTransform_default());
spot_options.setAttributes = (setAttributesWithoutAttributes_default());

      spot_options.insert = insertBySelector_default().bind(null, "head");
    
spot_options.domAPI = (styleDomAPI_default());
spot_options.insertStyleElement = (insertStyleElement_default());

var spot_update = injectStylesIntoStyleTag_default()(spot/* default */.Z, spot_options);




       /* harmony default export */ var shape_spot = (spot/* default */.Z && spot/* default.locals */.Z.locals ? spot/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/spot/index.jsx


const spot_excluded = ["type", "size", "color", "shadowColor", "style", "className"];
function spot_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function spot_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? spot_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : spot_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const Spot = _ref => {
  let {
      type = 'spot',
      size,
      color,
      shadowColor,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, spot_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", spot_objectSpread({
    className: `${shape_spot[`huxy-${type}`]}${className ? ` ${className}` : ''}`,
    style: spot_objectSpread({
      '--size': size != null ? size : `${utils_randNum(6, 30)}px`,
      '--color': color != null ? color : utils_randColor(),
      '--shadowColor': shadowColor != null ? shadowColor : utils_randColor()
    }, style)
  }, rest));
};
/* harmony default export */ var materials_shape_spot = (Spot);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/taiji/index.less
var taiji = __webpack_require__(206);
;// CONCATENATED MODULE: ../huxy/materials/shape/taiji/index.less

      
      
      
      
      
      
      
      
      

var taiji_options = {};

taiji_options.styleTagTransform = (styleTagTransform_default());
taiji_options.setAttributes = (setAttributesWithoutAttributes_default());

      taiji_options.insert = insertBySelector_default().bind(null, "head");
    
taiji_options.domAPI = (styleDomAPI_default());
taiji_options.insertStyleElement = (insertStyleElement_default());

var taiji_update = injectStylesIntoStyleTag_default()(taiji/* default */.Z, taiji_options);




       /* harmony default export */ var shape_taiji = (taiji/* default */.Z && taiji/* default.locals */.Z.locals ? taiji/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/taiji/index.jsx


const taiji_excluded = ["width", "border", "black", "white", "style", "className"];
function taiji_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function taiji_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? taiji_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : taiji_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const taiji_Index = _ref => {
  let {
      width,
      border,
      black,
      white,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, taiji_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", taiji_objectSpread({
    className: `${shape_taiji["huxy-taiji"]} ${className}`,
    style: taiji_objectSpread({
      '--width': width,
      '--border': border,
      '--black': black,
      '--white': white
    }, style)
  }, rest));
};
/* harmony default export */ var materials_shape_taiji = (taiji_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/shape/light/index.less
var light = __webpack_require__(784);
;// CONCATENATED MODULE: ../huxy/materials/shape/light/index.less

      
      
      
      
      
      
      
      
      

var light_options = {};

light_options.styleTagTransform = (styleTagTransform_default());
light_options.setAttributes = (setAttributesWithoutAttributes_default());

      light_options.insert = insertBySelector_default().bind(null, "head");
    
light_options.domAPI = (styleDomAPI_default());
light_options.insertStyleElement = (insertStyleElement_default());

var light_update = injectStylesIntoStyleTag_default()(light/* default */.Z, light_options);




       /* harmony default export */ var shape_light = (light/* default */.Z && light/* default.locals */.Z.locals ? light/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/shape/light/index.jsx


const light_excluded = ["width", "height", "space", "bgColor", "style", "className"];
function light_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function light_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? light_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : light_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const Light = _ref => {
  let {
      width = '200px',
      height = '180px',
      space = '12%',
      bgColor,
      style,
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, light_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", light_objectSpread({
    className: `${shape_light.conic}${className ? ` ${className}` : ''}`,
    style: light_objectSpread({
      '--width': width,
      '--height': height,
      '--space': space,
      '--bgColor': bgColor
    }, style)
  }, rest));
};
/* harmony default export */ var materials_shape_light = (Light);
;// CONCATENATED MODULE: ../huxy/materials/shape/index.jsx







// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/text/text3d/index.less
var text3d = __webpack_require__(859);
;// CONCATENATED MODULE: ../huxy/materials/text/text3d/index.less

      
      
      
      
      
      
      
      
      

var text3d_options = {};

text3d_options.styleTagTransform = (styleTagTransform_default());
text3d_options.setAttributes = (setAttributesWithoutAttributes_default());

      text3d_options.insert = insertBySelector_default().bind(null, "head");
    
text3d_options.domAPI = (styleDomAPI_default());
text3d_options.insertStyleElement = (insertStyleElement_default());

var text3d_update = injectStylesIntoStyleTag_default()(text3d/* default */.Z, text3d_options);




       /* harmony default export */ var text_text3d = (text3d/* default */.Z && text3d/* default.locals */.Z.locals ? text3d/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/text/text3d/index.jsx


const text3d_excluded = ["list", "colors", "width", "padding", "bgColor", "style"];
function text3d_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function text3d_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? text3d_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : text3d_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const rand = () => Math.random() - 0.5;
const randCnter = () => ~~(rand() * utils_randNum(5, 10) * 10);
const randRotate = () => ~~(rand() * utils_randNum(2, 8) * 10);
const randSize = () => (1 - rand()) * utils_randNum(1.1, 1.4, false);
const text3d_randColors = colors => colors != null && colors.length ? utils_randItem(colors) : utils_randColor();
const text3d_RandCarousel = _ref => {
  let {
      list = [],
      colors = [],
      width,
      padding,
      bgColor,
      style
    } = _ref,
    rest = _objectWithoutProperties(_ref, text3d_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", text3d_objectSpread(text3d_objectSpread({
    className: "huxy-text-3d",
    style: text3d_objectSpread({
      '--width': width,
      '--padding': padding,
      '--bgColor': bgColor
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "text-3d-container",
      children: list.map((item, i) => {
        var _item$time, _item$delay, _item$center, _item$rotate, _item$size, _item$color;
        const _time = (_item$time = item.time) != null ? _item$time : utils_randNum(6, 24, false).toFixed(2);
        const _delay = (_item$delay = item.delay) != null ? _item$delay : -utils_randNum(0, _time, false).toFixed(2);
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "text-3d-item",
          style: {
            '--time': `${_time}s`,
            '--center': (_item$center = item.center) != null ? _item$center : `${randCnter()}%`,
            '--rotate': (_item$rotate = item.rotate) != null ? _item$rotate : `${randRotate()}deg`,
            '--size': (_item$size = item.size) != null ? _item$size : randSize(),
            '--color': (_item$color = item.color) != null ? _item$color : text3d_randColors(colors),
            '--delay': `${_delay}s`
            // '--current': `${randNum(90, 450)}deg`,
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "text-3d-item-card",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "animate-text",
              children: item.label
            })
          })
        }, item.label);
      })
    })
  }));
};
/* harmony default export */ var materials_text_text3d = (text3d_RandCarousel);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/text/textFilter/index.less
var textFilter = __webpack_require__(589);
;// CONCATENATED MODULE: ../huxy/materials/text/textFilter/index.less

      
      
      
      
      
      
      
      
      

var textFilter_options = {};

textFilter_options.styleTagTransform = (styleTagTransform_default());
textFilter_options.setAttributes = (setAttributesWithoutAttributes_default());

      textFilter_options.insert = insertBySelector_default().bind(null, "head");
    
textFilter_options.domAPI = (styleDomAPI_default());
textFilter_options.insertStyleElement = (insertStyleElement_default());

var textFilter_update = injectStylesIntoStyleTag_default()(textFilter/* default */.Z, textFilter_options);




       /* harmony default export */ var text_textFilter = (textFilter/* default */.Z && textFilter/* default.locals */.Z.locals ? textFilter/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/text/textFilter/index.jsx


const textFilter_excluded = ["time", "style", "className", "children"];
function textFilter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function textFilter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? textFilter_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : textFilter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const textFilter_Index = _ref => {
  let {
      time = '3s',
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, textFilter_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", textFilter_objectSpread(textFilter_objectSpread({
    className: `${text_textFilter["huxy-text-filter"]}${className ? ` ${className}` : ''}`,
    style: textFilter_objectSpread({
      '--time': time
    }, style)
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: text_textFilter["text-filter"],
      children: children
    })
  }));
};
/* harmony default export */ var materials_text_textFilter = (textFilter_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/text/textLoading/index.less
var textLoading = __webpack_require__(850);
;// CONCATENATED MODULE: ../huxy/materials/text/textLoading/index.less

      
      
      
      
      
      
      
      
      

var textLoading_options = {};

textLoading_options.styleTagTransform = (styleTagTransform_default());
textLoading_options.setAttributes = (setAttributesWithoutAttributes_default());

      textLoading_options.insert = insertBySelector_default().bind(null, "head");
    
textLoading_options.domAPI = (styleDomAPI_default());
textLoading_options.insertStyleElement = (insertStyleElement_default());

var textLoading_update = injectStylesIntoStyleTag_default()(textLoading/* default */.Z, textLoading_options);




       /* harmony default export */ var text_textLoading = (textLoading/* default */.Z && textLoading/* default.locals */.Z.locals ? textLoading/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/text/textLoading/index.jsx


const textLoading_excluded = ["backColor", "frontColor", "time", "style", "className", "children"];
function textLoading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function textLoading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? textLoading_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : textLoading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const textLoading_Index = _ref => {
  let {
      backColor = 'rgba(0, 0, 0, 0.3)',
      frontColor = 'rgba(255, 255, 255, 1)',
      time = '4s',
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, textLoading_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", textLoading_objectSpread(textLoading_objectSpread({
    className: `${text_textLoading["huxy-text-loading"]}${className ? ` ${className}` : ''}`,
    style: textLoading_objectSpread({
      '--backColor': backColor,
      '--frontColor': frontColor,
      '--time': time
    }, style)
  }, rest), {}, {
    "data-text": children,
    children: children
  }));
};
/* harmony default export */ var materials_text_textLoading = (textLoading_Index);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/text/textMasked/index.less
var textMasked = __webpack_require__(814);
;// CONCATENATED MODULE: ../huxy/materials/text/textMasked/index.less

      
      
      
      
      
      
      
      
      

var textMasked_options = {};

textMasked_options.styleTagTransform = (styleTagTransform_default());
textMasked_options.setAttributes = (setAttributesWithoutAttributes_default());

      textMasked_options.insert = insertBySelector_default().bind(null, "head");
    
textMasked_options.domAPI = (styleDomAPI_default());
textMasked_options.insertStyleElement = (insertStyleElement_default());

var textMasked_update = injectStylesIntoStyleTag_default()(textMasked/* default */.Z, textMasked_options);




       /* harmony default export */ var text_textMasked = (textMasked/* default */.Z && textMasked/* default.locals */.Z.locals ? textMasked/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/text/textMasked/index.jsx


const textMasked_excluded = ["startColor", "endColor", "style", "className", "children"];
function textMasked_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function textMasked_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? textMasked_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : textMasked_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const TextMasked = _ref => {
  let {
      startColor,
      endColor,
      style,
      className,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, textMasked_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", textMasked_objectSpread(textMasked_objectSpread({
    className: `${text_textMasked["huxy-text-masked"]}${className ? ` ${className}` : ''}`,
    style: textMasked_objectSpread({
      '--startColor': startColor != null ? startColor : utils_randColor(),
      '--endColor': endColor != null ? endColor : utils_randColor()
    }, style)
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ var materials_text_textMasked = (TextMasked);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/materials/text/rateScore/index.less
var rateScore = __webpack_require__(783);
;// CONCATENATED MODULE: ../huxy/materials/text/rateScore/index.less

      
      
      
      
      
      
      
      
      

var rateScore_options = {};

rateScore_options.styleTagTransform = (styleTagTransform_default());
rateScore_options.setAttributes = (setAttributesWithoutAttributes_default());

      rateScore_options.insert = insertBySelector_default().bind(null, "head");
    
rateScore_options.domAPI = (styleDomAPI_default());
rateScore_options.insertStyleElement = (insertStyleElement_default());

var rateScore_update = injectStylesIntoStyleTag_default()(rateScore/* default */.Z, rateScore_options);




       /* harmony default export */ var text_rateScore = (rateScore/* default */.Z && rateScore/* default.locals */.Z.locals ? rateScore/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/materials/text/rateScore/index.jsx


const rateScore_excluded = ["score", "backColor", "frontColor", "style", "className", "children", "backend"];
function rateScore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function rateScore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? rateScore_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : rateScore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const rateScore_Index = _ref => {
  let {
      score = 0,
      backColor = 'rgba(0, 0, 0, 0.3)',
      frontColor = 'var(--yellow2)',
      style,
      className,
      children,
      backend
    } = _ref,
    rest = _objectWithoutProperties(_ref, rateScore_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", rateScore_objectSpread(rateScore_objectSpread({
    className: `${text_rateScore["huxy-rate-score"]}${className ? ` ${className}` : ''}`,
    style: rateScore_objectSpread({
      '--backColor': backColor,
      '--frontColor': frontColor,
      '--score': `${score}`.includes('%') ? score : `${score * 100}%`
    }, style)
  }, rest), {}, {
    "data-text": children,
    children: backend != null ? backend : children
  }));
};
/* harmony default export */ var materials_text_rateScore = (rateScore_Index);
;// CONCATENATED MODULE: ../huxy/materials/text/index.jsx





;// CONCATENATED MODULE: ../huxy/materials/index.jsx






/* const materials = {
  ...Animation,
  ...Border,
  ...Chart,
  ...Shape,
  ...Text,
}; */

// export default materials;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});