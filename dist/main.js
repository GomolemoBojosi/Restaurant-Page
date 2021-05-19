/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n\r\n\r\ninit();\r\n\r\nfunction init() {\r\n  (0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\r\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/Home.js":
/*!*****************************!*\
  !*** ./src/modules/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction home() {\r\n  const homeDiv = document.createElement('div');\r\n  homeDiv.classList.add('content-container');\r\n  homeDiv.innerHTML = `\r\n    <h1>Welcome to Burger Haven</h1>\r\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eius quasi dolore provident facere, blanditiis harum\r\n    pariatur quos atque, cum magni enim hic deleniti laboriosam repellendus velit deserunt, debitis a.\r\n    Autem obcaecati reprehenderit adipisci iusto nulla non similique. Sit aliquid amet sed nemo culpa explicabo atque,\r\n    nobis ea vero impedit ducimus delectus minima, repudiandae voluptatum voluptas eaque voluptatem rem ullam.<p/>\r\n  `;\r\n\r\n  return homeDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://resturant-page/./src/modules/Home.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction createMenuItem(price, name, imgSrc, alt) {\r\n  const menuItem = document.createElement('div');\r\n  const img = document.createElement('img');\r\n  const itemDesc = document.createElement('h3');\r\n  const itemPrice = document.createElement('p');\r\n  const itemName = document.createElement('p');\r\n\r\n  img.setAttribute('src', imgSrc);\r\n  img.setAttribute('alt', alt);\r\n\r\n  itemName.textContent = name;\r\n  itemPrice.textContent = price;\r\n\r\n  itemDesc.appendChild(itemName);\r\n  itemDesc.appendChild(itemPrice);\r\n\r\n  menuItem.appendChild(img);\r\n  menuItem.appendChild(itemDesc);\r\n\r\n  return menuItem;\r\n}\r\n\r\nfunction menu() {\r\n  const menuContainer = document.createElement('div');\r\n  menuContainer.classList.add('menu-container');\r\n\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/eaters-collective-pLKgCsBOiw4-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/eiliv-sonas-aceron-uBigm8w_MpA-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/food-photographer-david-fedulov-E94j3rMcxlw-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/jiroe-ris5_dfbltU-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/joseph-abeesh-vk0SvpcFEnI-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/mae-mu-I7A_pHLcQK8-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n  menuContainer.appendChild(createMenuItem(\r\n    'R12.00',\r\n    'Burger-1',\r\n    './imgs/Images/shaafi-ali-5qBwgjP1ZwE-unsplash-min.jpg',\r\n    'burger-1'\r\n  ));\r\n\r\n  return menuContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://resturant-page/./src/modules/Menu.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction contact() {\r\n  const contactDiv = document.createElement('div');\r\n  contactDiv.classList.add('content-container');\r\n\r\n  contactDiv.innerHTML = `\r\n    <h3>NEED SOMETHING? GET IN TOUCH WITH US</h3>\r\n    <p><i class=\"fas fa-phone\"></i>   : 555-555-5555</p>\r\n    <p><i class=\"fas fa-map-marker-alt\"></i> : The Office</p>\r\n  `;\r\n\r\n  return contactDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://resturant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/modules/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/modules/Menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement('div');\r\n  header.classList.add('header');\r\n  header.innerHTML = `\r\n    <a href=\"#\"><i class=\"fas fa-hamburger rotate\"></i> BURGER <span class=\"highlight\">JOINT</span></b></a>\r\n    <ul>\r\n      <li id=\"home\">HOME</li>\r\n      <li id=\"menu\">MENU</li>\r\n      <li id=\"contact\">CONTACT</li>\r\n    </ul>\r\n  `;\r\n  return header;\r\n}\r\n\r\nfunction loadPage() {\r\n  const content = document.querySelector('#content');\r\n  const { body } = document;\r\n  body.insertBefore(createHeader(), body.firstChild);\r\n  content.appendChild((0,_Home__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n  const menuBtn = document.querySelector('#menu');\r\n  const homeBtn = document.querySelector('#home');\r\n  const contactBtn = document.querySelector('#contact');\r\n\r\n  menuBtn.addEventListener('click', function (e) {\r\n    content.textContent = '';\r\n    content.appendChild((0,_Menu__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n  });\r\n\r\n  homeBtn.addEventListener('click', function (e) {\r\n    content.textContent = '';\r\n    content.appendChild((0,_Home__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n  });\r\n\r\n  contactBtn.addEventListener('click', function (e) {\r\n    content.textContent = '';\r\n    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n  }); \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/modules/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;