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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconnect */ \"./js/reconnect.js\");\n/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../version */ \"../version.js\");\n\r\n\r\n\r\n(() => {\r\n    if ( !localStorage.keyGO ) return\r\n    if ( !JSON.parse( localStorage.keyGO ).key ) return\r\n    const returnVersion = () => (0,_version__WEBPACK_IMPORTED_MODULE_1__.verifyKeyLogin)( JSON.parse( localStorage.keyGO ).key, _reconnect__WEBPACK_IMPORTED_MODULE_0__.user_name )\r\n    if ( returnVersion() && _reconnect__WEBPACK_IMPORTED_MODULE_0__.user_name ) {\r\n        (0,_reconnect__WEBPACK_IMPORTED_MODULE_0__.reconnectInterface)()\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack://reconnect/./js/main.js?");

/***/ }),

/***/ "./js/reconnect.js":
/*!*************************!*\
  !*** ./js/reconnect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reconnectInterface\": () => (/* binding */ reconnectInterface),\n/* harmony export */   \"user_name\": () => (/* binding */ user_name)\n/* harmony export */ });\nconst right_login_wrap = document.querySelector( \"#home div.right.login div.wrap\" )\r\nconst user_name = right_login_wrap.querySelector(\"h2\").innerText == \"Login\" ? false : right_login_wrap.querySelector(\"h2\").innerText.split(\" \")[1]\r\nif ( !localStorage.players ) localStorage.setItem( \"players\", JSON.stringify( {} ) )\r\nconst players = JSON.parse( localStorage.getItem( \"players\" ) )\r\nif ( !players[user_name] ) players[user_name] = {}\r\nfunction reconnectInterface() {\r\n    const reconnectAllChecked = (arr) => arr.reduce(( n, e ) => e ? n += 0 : n += 1, 0 ) >= arr.length / 2 ? false : true\r\n    const worlds = Array.from(document.querySelector(\"#home div.worlds-container\").querySelectorAll(\"a\"))\r\n    const worlds_name = worlds.map( e => e.children[0].innerText )\r\n    const worlds_ref = worlds.map( e => e.attributes[1].value.split('/')[ 3 ] )\r\n    const worlds_href = worlds.map( e => e.attributes[1].value )\r\n    const arrReconnect = []\r\n    for (let i = 0; i < worlds_ref.length; i++) {\r\n        if ( !players[user_name][ worlds_ref[i] ] ) {\r\n            players[user_name][ worlds_ref[i] ] = {}\r\n            players[user_name][ worlds_ref[i] ].href = worlds_href[i]\r\n            players[user_name][ worlds_ref[i] ].reconnect = false\r\n        }\r\n        arrReconnect.push( players[user_name][ worlds_ref[i] ].reconnect )\r\n        localStorage.setItem( \"players\", JSON.stringify( players ) )\r\n    }\r\n    for ( let i = 0; i < worlds.length; i++ ) {\r\n        worlds[i].innerHTML = `<div style=\"display: inline-flex;\"><label for=\"r_${worlds_ref[i]}\" title=\"Select to reconnect this world\" style=\"width: 15%; height: 12px; margin-right: 3px;\"><input type=\"checkbox\" name=\"${worlds_ref[i]}\" id=\"r_${worlds_ref[i]}\" ${ players[user_name][worlds_ref[i]].reconnect == true ? \"checked\" : \"\" }></label><span class=\"world_button_active\">${worlds_name[i]}</span></div>`\r\n    }\r\n    const worlds_container = document.createElement( \"div\" )\r\n    right_login_wrap.append( worlds_container )\r\n    worlds_container.className = \"worlds-container\"\r\n    worlds_container.innerHTML = `<label for=\"reconnectAll\" style=\"font-weight: bold; color: brown;\" title=\"Select to reconnect all worlds\" ><input type=\"checkbox\" name=\"reconnectAll\" id=\"reconnectAll\" ${ reconnectAllChecked(arrReconnect) == true ? \"checked\" : \"\"} > Reconnect all</label>`\r\n\r\n    document.addEventListener( \"click\", function(e) {\r\n        console.log(`e.target.attributes[0].value: ${e.target.attributes[0].value}`)\r\n        console.log(`e.target.id: ${e.target.id}`)\r\n        console.log(`e.target.checked: ${e.target.checked}`)\r\n        const arrInputs = Array.from(document.querySelectorAll(\"#home > div.center > div.content.box-border.red > div.inner > div.right.login > div.wrap > div:nth-child(4) input\"))\r\n        const arrChecked = arrInputs.map( e => e.checked )\r\n        const inputAll = document.querySelector(\"#reconnectAll\")\r\n        if ( e.target.attributes[0].value == \"checkbox\" ) {\r\n            if ( e.target.id == \"reconnectAll\" ) {\r\n                arrInputs.forEach( element => element.checked = inputAll.checked == true ? \"checked\" : \"\" )\r\n                for (const key in players[user_name]) {\r\n                    if (Object.hasOwnProperty.call(players[user_name], key)) {\r\n                        players[user_name][key].reconnect = e.target.checked\r\n                    }\r\n                }\r\n            } else {\r\n                players[user_name][e.target.name].reconnect = e.target.checked\r\n                inputAll.checked = reconnectAllChecked( arrChecked ) == true ? \"checked\" : \"\"\r\n            }\r\n            localStorage.setItem( \"players\", JSON.stringify( players ) )        \r\n        }\r\n\r\n        reconnect()\r\n\r\n    })\r\n\r\n    reconnect()\r\n\r\n}\r\nfunction reconnect() {     \r\n    const random = ( min, max ) => Math.floor( Math.random() * ( Math.floor( max ) - Math.ceil( min ) + 1 ) ) + Math.ceil( min );\r\n    const ref = document.referrer.split( \".\" )[ 0 ].split( \"//\" )[ 1 ]\r\n    console.log( \"Reconnect: \" + ref )\r\n    if ( !players[user_name][ ref ] ) {\r\n        setTimeout(() => window.history.go(-1), random( 1000, 10 * 1000 ) + ( 30 * 1000 ) ) // --- tenta voltar a pagina anterior\r\n    } else {\r\n        setTimeout(() => {\r\n            if ( players[user_name][ ref ].reconnect == true ) {\r\n                self.location = players[user_name][ ref ].href\r\n            }\r\n        }, random( 1000, 10 * 1000 ) + ( 30 * 1000 ) )\r\n    }\r\n}\n\n//# sourceURL=webpack://reconnect/./js/reconnect.js?");

/***/ }),

/***/ "../version.js":
/*!*********************!*\
  !*** ../version.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verifyKey\": () => (/* binding */ verifyKey),\n/* harmony export */   \"verifyKeyLogin\": () => (/* binding */ verifyKeyLogin)\n/* harmony export */ });\nconst nDateTime = ( c_data, c_hora = \"00:00:00\", c_ms = \"000\" ) => {\r\n    let n_hh = c_hora ? Number( c_hora.substring( 0, 2 ) ) : 0\r\n    let n_mm = c_hora ? Number( c_hora.substring( 3, 5) ) : 0\r\n    let n_ss = c_hora ? Number( c_hora.substring( 6, 8) ) : 0\r\n    let n_ms = c_hora ? c_hora.length > 8 ? Number ( c_hora.substring( 9, c_hora.length ) ) : 0 : 0\r\n    if ( c_ms ) n_ms = Number( c_ms )\r\n    let n_Dia = Number( c_data.substring( 0, 2 ) )\r\n    let n_Mes = Number( c_data.substring( 3, 5 ) ) - 1\r\n    let n_Ano = Number( c_data.substring( 6, c_data.length) )\r\n    return Date.parse( new Date( n_Ano, n_Mes, n_Dia, n_hh, n_mm, n_ss ) ) + n_ms\r\n}\r\nconst s1 = ['fT', 'yQ', 'rb', 'st', 'Lo', 'zP', 'Nx', 'ga', 'uV', 'Hl']\r\nconst s2 = ['ak', 'jW', 'ij', 'fd', 'Oa', 'hw', 'Uh', 'kj', 'Ag', 'Yw']\r\nconst s3 = ['_3', '7@', '&6', '2%', '8$', '0*', '#9', '-5', '1+', '!4']\r\nconst alphabet = 'abcdefghijklmnopqrstuvxwyz'.split('')\r\nconst arrS = [...s1,...s2,...s3]\r\nfunction returnCodServer( server ) {\r\n    let arrServer = server.split(\"\")\r\n    let strNumServer = \"\"\r\n    for ( let i = 0; i < arrServer.length; i++ ) {\r\n        strNumServer += String( alphabet.indexOf( arrServer[ i ] ) )\r\n    }\r\n    arrServer = strNumServer.split(\"\")\r\n    let cod_server = \"\"\r\n    for ( let i = 0; i < arrServer.length; i++ ) {\r\n        if ( [ 0, 3, 6 ].indexOf(i) != -1 ) cod_server += s1[ arrServer[ i ] ]\r\n        if ( [ 1, 4, 7 ].indexOf(i) != -1 ) cod_server += s2[ arrServer[ i ] ]\r\n        if ( [ 2, 5, 8 ].indexOf(i) != -1 ) cod_server += s3[ arrServer[ i ] ]\r\n    }\r\n    return cod_server  \r\n}\r\nfunction returnNumLettersName( player ) {\r\n    let arrPlayer = player.toLowerCase().split(\"\")\r\n    let numLetters = \"\"\r\n    let n = 1\r\n    for (let i = 0; i < arrPlayer.length; i++) {\r\n        if ( alphabet.indexOf( arrPlayer[ i ] ) != -1 ) {\r\n            numLetters += alphabet.indexOf( arrPlayer[ i ] )\r\n            n++\r\n            if ( n > 3 ) break\r\n        }\r\n    }\r\n    return numLetters\r\n}\r\nfunction returnNumCode( cod_ ) {\r\n    let n = \"\", numCod = \"\"\r\n    for ( let i = 1; i <= cod_.length; i += 2 ) {\r\n        n = String( arrS.indexOf( cod_.substring( i - 1, i + 1 ) ))\r\n        numCod += n.substring(n.length - 1)\r\n    }\r\n    return numCod\r\n}    \r\nfunction verifyKeyLogin( key, user_name ) {\r\n    let version = true\r\n    let s_date = new Date().toLocaleDateString()\r\n    let s_time = new Date().toLocaleTimeString()\r\n    let key1 = key.split(\"=\")\r\n    let server_world = key1[0].split(\"_\")[0]\r\n    let player = key1[0].split(\"_\")[1]\r\n    version = version === true ? player == user_name : false\r\n    let key2 = key1[2].split(\":\")\r\n    let code_date2 = key2[1]\r\n    let n1 = key2[2].split(\".\")[0]\r\n    version = version === true ? n1 == returnNumLettersName( player ) : false\r\n    let cod_server = key2[2].split(\".\")[1]\r\n    version = version === true \r\n    ? cod_server == returnCodServer( server_world.match(/[a-z]/ig).reduce((i, e) => i += e , \"\") ) : false\r\n    let code_date1= key2[3]\r\n    version = version === true \r\n    ? nDateTime( s_date, s_time ) < nDateTime( \r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleDateString(),\r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleTimeString()\r\n    ) \r\n    : false\r\n    return version\r\n}\r\nfunction verifyKey( key ) {\r\n    let version = true\r\n    let s_date = document.querySelector(\"#serverDate\").textContent\r\n    let s_time = document.querySelector(\"#serverTime\").textContent\r\n    let key1 = key.split(\"=\")\r\n    let server_world = key1[0].split(\"_\")[0]\r\n    version = version === true ? server_world == game_data.world : false\r\n    let player = key1[0].split(\"_\")[1]\r\n    version = version === true ? player == game_data.player.name : false\r\n    let key2 = key1[2].split(\":\")\r\n    let cod_world = key2[0]\r\n    version = version === true \r\n    ? returnNumCode( cod_world ) == server_world.match(/[0-9]/ig).reduce((i, e) => i += e , \"\") \r\n    : false\r\n    let code_date2 = key2[1]\r\n    let n1 = key2[2].split(\".\")[0]\r\n    version = version === true ? n1 == returnNumLettersName( player ) : false\r\n    let cod_server = key2[2].split(\".\")[1]\r\n    version = version === true \r\n    ? cod_server == returnCodServer( server_world.match(/[a-z]/ig).reduce((i, e) => i += e , \"\") ) : false\r\n    let code_date1= key2[3]\r\n    version = version === true \r\n    ? nDateTime( s_date, s_time ) < nDateTime( \r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleDateString(),\r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleTimeString()\r\n    ) \r\n    : false\r\n    return version\r\n}\n\n//# sourceURL=webpack://reconnect/../version.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;