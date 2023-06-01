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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => { \r\n    const renderAboutPage = () => {\r\n        const aboutUs = `\r\n        <div class=\"about\">\r\n            <h1>ABOUT US</h1>\r\n            <p>\r\n            It’s hard to find a good pizza.\r\n            But good pizza isn’t hard to do. With great ingredients, a proper oven, and a bit of practice, it’s actually pretty simple.     \r\n            We use fresh veg deliverd daily, the best meats that we can find, and Sardinian ‘00’ flour, and cook it all propertly in a 300 degree stone-based oven.           \r\n            Good pizza is as simple as that, and that’s what we do.\r\n            </p>\r\n            <img src=\"images/logo.jpg\" alt=\"logo\" width=\"300\" style=\"border-radius: 50%;\">\r\n        </div>\r\n        `;\r\n        const body = document.querySelector('body');\r\n        body.insertAdjacentHTML('afterend', aboutUs);\r\n    };\r\n    return { renderAboutPage};\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://pizzaface/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\r\n    const renderBackground = () => {\r\n        const body = document.querySelector('body');\r\n        const bg = document.createElement('div');\r\n        bg.classList.add('home');\r\n        body.appendChild(bg);\r\n    };\r\n    return { renderBackground };\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://pizzaface/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\r\n\r\nconst nav = (0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nnav.addNavbar();\r\n\n\n//# sourceURL=webpack://pizzaface/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pizza: () => (/* binding */ Pizza),\n/* harmony export */   Vegan: () => (/* binding */ Vegan)\n/* harmony export */ });\nclass Pizza {\r\n    constructor(title, price, description, image) {\r\n        this.title = title;\r\n        this.price = price;\r\n        this.description = description;\r\n        this.image = image;\r\n\r\n\r\n    };\r\n    renderPizza() {\r\n        const pizzaMenu = `\r\n        <div class=\"menu\">\r\n            <h1>${this.title} </h1>\r\n            <h3>${this.price}</h3>\r\n            <p>${this.description}</p>\r\n            <img src=${this.image} alt=\"pizza\" width=\"300\">\r\n  \r\n        </div>\r\n        `;\r\n        const body = document.querySelector('body')\r\n        const content = document.createElement('div');\r\n        content.classList.add('wrapper');\r\n        body.appendChild(content);\r\n        content.innerHTML = pizzaMenu;\r\n    };\r\n\r\n};\r\n\r\n\r\nclass Vegan {\r\n    constructor(title, price, description) {\r\n        this.title = title;\r\n        this.price = price;\r\n        this.description = description;\r\n    }; \r\n    sayHi() {\r\n        console.log(`Hi! I'm a ${this.title} pizza!`);\r\n    };\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pizzaface/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst holyCheeses = new _menu__WEBPACK_IMPORTED_MODULE_1__.Pizza('HOLY CHEESES', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion', 'images/holy-cheeses.jpg');\r\nconst johnno = new _menu__WEBPACK_IMPORTED_MODULE_1__.Pizza('JOHNNO', '£13.50', 'Red onions, olives, peppers, sautéed mushrooms, Parmesan, fresh and dried chillies', 'images/johnno.jpg');\r\nconst meathead = new _menu__WEBPACK_IMPORTED_MODULE_1__.Pizza('MEATHEAD', '£15.00', 'Chorizo, pepperoni, pancetta, pork and wild boar salami, and lamb Prosciutto with onions and mushrooms', 'images/meathead.jpg');\r\n\r\nconst homePage = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst aboutPage = (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst navbar = () => {\r\n    const addNavbar = () => {\r\n        homePage.renderBackground();\r\n        const body = document.querySelector('body');\r\n        const navElement = `\r\n        <ul class=\"topnav\">\r\n            <li id=\"home\">HOME</li>\r\n            <li id=\"menu\">MENU</li>\r\n            <li id=\"about\">ABOUT US</li>\r\n        </ul>\r\n        `;\r\n        body.insertAdjacentHTML(\"afterbegin\", navElement);\r\n        setActive('home');       \r\n        setEventListeners();\r\n        clearDisplay('home');   \r\n    };\r\n    const clearDisplay = target => {\r\n        const elements = document.querySelectorAll('div');\r\n        elements.forEach((element) => {\r\n            if (element.className !== `${target}`){\r\n                element.remove();\r\n            };\r\n        });\r\n    };\r\n    const setEventListeners = () => {\r\n        const menuButton = document.getElementById('menu');\r\n        menuButton.addEventListener('click', selectMenu);\r\n        function selectMenu(e) {\r\n            setActive(e.target.id);\r\n            clearDisplay(e.target.id);\r\n            johnno.renderPizza();\r\n            holyCheeses.renderPizza();\r\n            meathead.renderPizza();\r\n        };\r\n        const homeButton = document.getElementById('home');\r\n        homeButton.addEventListener('click', selectHome);\r\n        function selectHome(e) {\r\n            setActive(e.target.id);\r\n            clearDisplay(e.target.id);\r\n            homePage.renderBackground();\r\n\r\n        };\r\n        const aboutButton = document.getElementById('about');\r\n        aboutButton.addEventListener('click', selectAbout);\r\n        function selectAbout(e) {\r\n            setActive(e.target.id);\r\n            clearDisplay(e.target.id);\r\n            aboutPage.renderAboutPage();\r\n        };\r\n    \r\n    };\r\n    const setActive = target => {\r\n        const elements = document.querySelectorAll('li')\r\n        elements.forEach((element) => {\r\n           element.classList.remove('active');\r\n        });\r\n        const link = document.getElementById(`${target}`);\r\n        link.classList.add('active');\r\n    };\r\n\r\n    return { addNavbar }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://pizzaface/./src/navbar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;