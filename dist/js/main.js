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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms.js */ \"./modules/forms.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc.js */ \"./modules/calc.js\");\nconst timer = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ntimer(\"19 March 2022\");\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value/10;\r\n    };\r\n    \r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    };\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue; \r\n      let num = 0;\r\n      let interval = setInterval(() => {\r\n        num += 10;\r\n        total.textContent = num;\r\n        if (num === totalValue) {\r\n          clearInterval(interval);\r\n        } \r\n      } , 0.1);\r\n    } else {\r\n      totalValue = 0;\r\n    };\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (e.target === calcType || e.target === calcSquare ||\r\n      e.target === calcCount || e.target === calcDay) {\r\n      countCalc();  \r\n    }\r\n  })\r\n};\r\n \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n  const menu = document.querySelector(\"menu\");\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (menu.classList.contains(\"active-menu\") || e.target.closest(\".menu\")) {\r\n      handleMenu();\r\n    }\r\n  })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n  \r\n  buttons.forEach(button => (button.addEventListener(\"click\", () => {\r\n    modal.style.display = \"block\";\r\n    let count = -300;\r\n    let idInterval;\r\n\r\n    const modalAnimate = () => {\r\n      count+=10;\r\n      idInterval = requestAnimationFrame(modalAnimate);\r\n      if (count < 250) {\r\n        modalContent.style.top = count + \"px\";\r\n      } else {\r\n        cancelAnimationFrame(idInterval);\r\n      }\r\n    };\r\n   \r\n    if (window.screen.width >= 768 ) {\r\n      modalAnimate();\r\n    } else {\r\n      modal.style.display = \"block\";\r\n    }\r\n  })));\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".popup-content\") || e.target.classList.contains (\"popup-close\")) {\r\n      modal.style.display = \"none\";\r\n    }\r\n   \r\n  })\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const dotsList = document.querySelector(\".portfolio-dots\");\r\n\r\n  const addDot =() => {\r\n    dotsList.insertAdjacentHTML (\"beforeend\", `<li class=\"dot\"></li>` );\r\n  }\r\n \r\n  let i = 0;\r\n  while (i < slides.length) {\r\n    i++;\r\n    addDot();\r\n  };\r\n\r\n  const dots = document.querySelectorAll(\".dot\");\r\n  const timeInterval = 2000;\r\n \r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass)\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass)\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide,\"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide,\"dot-active\");\r\n\r\n    currentSlide++;\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    };\r\n    nextSlide(slides, currentSlide,\"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide,\"dot-active\");\r\n  };\r\n\r\n  const startSlider = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlider = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return\r\n    };\r\n    prevSlide(slides, currentSlide,\"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide,\"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      })\r\n    };\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    };\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    };\r\n    nextSlide(slides, currentSlide,\"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide,\"dot-active\");  \r\n  });\r\n\r\n  sliderBlock.addEventListener(\"mouseenter\", (e) => {\r\n    if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n      stopSlider();\r\n    };\r\n  }, true);\r\n\r\n  sliderBlock.addEventListener(\"mouseleave\", (e) => {\r\n    if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n      startSlider(timeInterval);\r\n    }\r\n  }, true);\r\n\r\n  startSlider(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n  const tabMenu = document.querySelector(\".service-header\"); \r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabMenu.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\"); \r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add (\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      })\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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