/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms.js */ \"./modules/forms.js\");\nconst timer = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\r\n\r\n\r\n\r\n\r\ntimer(\"19 March 2022\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\r\n\r\n  const inputs = document.querySelectorAll('input.calc-item');\r\n  const nameInputs = document.querySelectorAll('input[name=\"user_name\"]');\r\n  const emailInputs = document.querySelectorAll('input[name=\"user_email\"]');\r\n  const phoneInputs = document.querySelectorAll('input[name=\"user_phone\"]');\r\n\r\n  inputs.forEach((input)=> {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    })\r\n  });\r\n\r\n  nameInputs.forEach((input)=> {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яё\\-\\s]/ig, \"\");\r\n    })\r\n  });\r\n\r\n  emailInputs.forEach((input)=> {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^a-z\\d\\@\\-\\_\\.\\!\\~\\*\\']/ig, \"\");\r\n    })\r\n  });\r\n\r\n  phoneInputs.forEach((input)=> {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]/ig, \"\");\r\n    })\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = document.querySelector(\".close-btn\");\r\n  const menuItems = document.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handleMenu = () => {\r\n   // if (!menu.style.transform) {\r\n     // menu.style.transform = \"translateX(0)\";\r\n    //} else {\r\n      //menu.style.transform = \"\"; // or \"translate(-100%)\" for control\r\n    //}\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n  closeBtn.addEventListener(\"click\",handleMenu);\r\n  menuItems.forEach(menuItem => menuItem.addEventListener(\"click\", handleMenu))\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n  \r\n  buttons.forEach(button => (button.addEventListener(\"click\", () => {\r\n    modal.style.display = \"block\";\r\n    let count = -300;\r\n    let idInterval;\r\n\r\n    const modalAnimate = () => {\r\n      count+=10;\r\n      idInterval = requestAnimationFrame(modalAnimate);\r\n      if (count < 250) {\r\n        modalContent.style.top = count + \"px\";\r\n      } else {\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    };\r\n   \r\n    if (window.screen.width >= 768 ) {\r\n      modalAnimate();\r\n    } else {\r\n      modal.style.display = \"block\";\r\n    }\r\n  })));\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n  })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((module) => {

eval("const timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    //let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    //let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60 ) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return {timeRemaining, hours, minutes, seconds};\r\n  }\r\n  \r\n  const updateClock = () => {\r\n   \r\n    let getTime = getTimeRemaining();\r\n    if (getTime.hours.toString().length < 2) {\r\n      getTime.hours = \"0\" + getTime.hours.toString();\r\n    };\r\n    if (getTime.minutes.toString().length < 2) {\r\n      getTime.minutes = \"0\" + getTime.minutes.toString();\r\n    };\r\n    if (getTime.seconds.toString().length < 2) {\r\n      getTime.seconds = `0${getTime.seconds.toString()}`; //!!! ноль можно добавить через тернарный оператор!!!\r\n    };\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n    \r\n    if(getTime.timeRemaining > 0) {\r\n      setTimeout(updateClock, 1000);\r\n    } else {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n    };\r\n    \r\n  };\r\n  updateClock();\r\n};\r\n\r\nmodule.exports = timer;\r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;