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

/***/ "./scripts/handler.js":
/*!****************************!*\
  !*** ./scripts/handler.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderFilms = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\")\r\n\r\nconst getFilms = $.get('https://students-api.2.us-1.fl0.io/movies', data => data.map(renderFilms))\r\n\r\nmodule.exports = {\r\n    getFilms\r\n}\r\n\n\n//# sourceURL=webpack://front/./scripts/handler.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getFilms = __webpack_require__(/*! ./handler */ \"./scripts/handler.js\")\r\n\r\ngetFilms()\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("const seccionPeliculas = document.getElementById(\"allMoviesCards\")\r\n\r\nfunction renderFilms(pelicula) {\r\n    const peliculaElemento = document.createElement('article')\r\n    const tarjeta = document.createElement(\"div\")\r\n\r\n    tarjeta.classList.add(\"card__content\")\r\n    peliculaElemento.classList.add(\"responsiveBox\")\r\n\r\n    tarjeta.innerHTML =`\r\n        <h3 id =\"movieTitle\">${pelicula.title}</h3>\r\n        <p class=\"card__title\">${pelicula.year}</p>\r\n        <p class=\"card__title\">${pelicula.director}</p>\r\n        <p class=\"card__title\">${pelicula.genre.join(', ')}</p>\r\n        <p class=\"card__title\">${pelicula.rate}</p>\r\n        <img class=\"imageMovies\" src=\"${pelicula.poster}\">\r\n    `\r\n    seccionPeliculas.appendChild(peliculaElemento)\r\n    peliculaElemento.appendChild(tarjeta)\r\n}\r\n\r\nmodule.exports = renderFilms;\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;