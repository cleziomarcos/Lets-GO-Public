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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KEY_2CAPTCHA\": () => (/* binding */ KEY_2CAPTCHA)\n/* harmony export */ });\nconst KEY_2CAPTCHA = \"c6153b81852715fd69b9dc1cbe223420\";\n\n//# sourceURL=webpack://hcaptcha/./config.js?");

/***/ }),

/***/ "./hCaptcha.js":
/*!*********************!*\
  !*** ./hCaptcha.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runCaptcha\": () => (/* binding */ runCaptcha)\n/* harmony export */ });\nconst { KEY_2CAPTCHA } = __webpack_require__(/*! ./config */ \"./config.js\");\r\n\r\nasync function runCaptcha() {\r\n    'use strict'\r\n    // ------ verifica captcha ativo\r\n    //const verifyCaptchaOld = () => Array.from( document.querySelectorAll( \"iframe\" ) ).filter((e) => e.id.indexOf('bot') == -1).length > 0\r\n    const verifyCaptcha = () => Array.from( document.querySelectorAll( \"iframe\" ) ).filter( e => e.src.indexOf(\"sitekey\") != -1 ).length > 0\r\n    // ------ faz uma pausa na execução\r\n    async function sleep(seg) {\r\n        return new Promise((resolve, reject) => {\r\n            setTimeout(() => {\r\n                resolve()\r\n            }, seg * 1000);\r\n        });\r\n    }\r\n    // ------ envia requisições\r\n    async function request2Captcha( url, method ) {\r\n        const response = await fetch( url ).then( response => response.json() )\r\n        return response\r\n    }\r\n    // ------ resolve captcha pelo 2captcha\r\n    async function resolve2Captcha() {\r\n        // ----- salva o elemento\r\n        const captcha = Array.from(document.querySelectorAll(\"iframe\"))\r\n        if ( captcha.length == 0 ) return\r\n        let indCaptcha = -1\r\n        for (const key in captcha) {\r\n            if ( captcha[ key ].src.indexOf(\"sitekey\") != -1 ) {\r\n                indCaptcha = key\r\n            }\r\n        }\r\n        if ( indCaptcha == -1 ) return\r\n        // ------ busca sitekey\r\n        const siteKey = captcha[indCaptcha].src.split(\"&\").filter( e => e.indexOf(\"sitekey\") != -1 )[0].split('=')[1]\r\n        console.log(siteKey)\r\n        // ------ url do captcha\r\n        const urlTw = location.href\r\n        // ------ envia requisição\r\n        const response = await request2Captcha( `https://2captcha.com/in.php?key=${KEY_2CAPTCHA}&method=hcaptcha&sitekey=${siteKey}&pageurl=${urlTw}&json=1&header_acao=1&soft_id=14066511`, \"GET\" )\r\n        if (response.status == 1) {\r\n            const captchaID = response.request\r\n            console.log(captchaID)\r\n            const g_resp = document.querySelectorAll(\"textarea\")[0]\r\n            const h_resp = document.querySelectorAll(\"textarea\")[1]\r\n            //g_resp.style.display = \"\"\r\n            //h_resp.style.display = \"\"\r\n            await sleep(20)\r\n            let count = 1\r\n            while (1) {\r\n                const token = await request2Captcha( `https://2captcha.com/res.php?key=${x2Captcha}&action=get&id=${captchaID}&json=1&header_acao=1&soft_id=14066511`, \"GET\" )\r\n                console.log(`Resolvendo hCaptcha ( ${count} ) ${count == 1 ? 'tentativa' : 'tentativas'}... `)\r\n                if ( token.status == 1 ) {\r\n                    g_resp.value = token.request\r\n                    h_resp.value = token.request\r\n                    console.log(`Resolvendo hCaptcha... ${count} ${count == 1 ? 'tentativa' : 'tentativas'}... Sucesso!!`)\r\n                    console.log(token.request)\r\n                    await sleep(1)\r\n                    window.onload = window.hcaptcha.execute()\r\n                    return console.log(\"hCaptcha resolved!!\")\r\n                } else {\r\n                    console.error( token.request )\r\n                    await sleep(10)\r\n                    if ( count > 30 ) return console.error( \"Não Resolvido!!!\" )\r\n                }\r\n                count++\r\n            }\r\n        }\r\n    }\r\n    // ------ resolve captcha pelo click, método antigo\r\n    async function resolveReCaptcha() {\r\n        // ==Configuration==\r\n        const blacklistedUrls = [\r\n            \"miped.ru\",\r\n            \"www.indiegala\",\r\n            \"https://gleam.io/\"\r\n        ];\r\n        // ==/Configuration==\r\n        // ==Code==\r\n        const url = window.location !== window.parent.location ? document.referrer : document.location.href;\r\n        if (isNotBlackListed(url)) {\r\n            if (location.href.includes(\"google.com/recaptcha\")) {\r\n                var clickCheck = setInterval(function() {\r\n                    if (document.querySelectorAll(\".recaptcha-checkbox-checkmark\").length > 0) {\r\n                        clearInterval(clickCheck)\r\n                        document.querySelector(\".recaptcha-checkbox-checkmark\").click()\r\n                    }\r\n                }, 50)\r\n            } else {\r\n                window.onload = readyToHelp()\r\n            }\r\n        }\r\n        function readyToHelp() {\r\n            var execCheck = setInterval(function() {\r\n                if (window.grecaptcha && window.grecaptcha.execute) {\r\n                    clearInterval(execCheck);\r\n                    try { window.grecaptcha.execute()\r\n                    } catch(e) {\r\n\r\n                    }\r\n                }\r\n            }, 50);\r\n            [...document.forms].forEach(form => {\r\n                if (form.innerHTML.includes(\"google.com/recaptcha\")) {\r\n                    var solveCheck = setInterval(function() {\r\n                        if (window.grecaptcha && !!grecaptcha.getResponse()) {\r\n                            clearInterval(solveCheck);\r\n                            form.submit();\r\n                        }\r\n                    }, 50);\r\n                }\r\n            });\r\n        }\r\n        function isNotBlackListed(url) {\r\n            return blacklistedUrls.every(bu => !url.includes(bu));\r\n        }\r\n        // ==/Code==\r\n    }\r\n    const ini = Date.now()\r\n    const intCaptcha = setInterval( async () => {\r\n        console.log(\"hCaptchaResolve\")\r\n        console.log(\"Captcha exists? \" + verifyCaptcha())\r\n        // ----- se na overview e captcha... tenta resolver pelo método antigo\r\n        if ( verifyCaptcha() ) {\r\n            if ( window.location.href == 'https://www.tribalwars.com.br/' ) {\r\n                window.onload = window.hcaptcha.execute()\r\n            } else {\r\n                clearInterval( intCaptcha )\r\n                await resolveReCaptcha()\r\n                // ----- após 20s verifica novamente e se não resolveu manda para o 2Captcha\r\n                await sleep(20)\r\n                if ( verifyCaptcha() ) await resolve2Captcha()\r\n                await sleep(5)\r\n                window.location.reload()\r\n            }\r\n        }\r\n        console.log( document.querySelector(\"#topContainer\") ? \"Connected game\" \r\n        :  document.querySelector(\"div.logo\") ? \"Connected login\"\r\n        : \"Desconnected\"\r\n        )\r\n        if ( document.querySelector(\"#topContainer\") && Date.now() - ini > 310 * 1000 ) window.location.reload()\r\n        if ( document.querySelector(\"div.logo\") && Date.now() - ini > 60 * 1000 ) window.history.go(-1)\r\n        if ( document.querySelector(\"#topContainer\") && document.querySelector(\"div.logo\") && Date.now() - ini > 60 * 1000 ) window.history.go(-1)\r\n    }, 5000 )\r\n}\r\n\n\n//# sourceURL=webpack://hcaptcha/./hCaptcha.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hCaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hCaptcha */ \"./hCaptcha.js\");\n/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../version */ \"../version.js\");\n\r\n\r\n\r\n(() => {\r\n    let version = false\r\n    if ( !localStorage.keyGO ) return\r\n    if ( !JSON.parse( localStorage.keyGO ).key ) return\r\n    let key = JSON.parse( localStorage.keyGO ).key\r\n    if ( document.querySelector( \"#home div.right.login div.wrap\" ) ) {\r\n        let right_login_wrap =  document.querySelector( \"#home div.right.login div.wrap\" )\r\n        let user_name = right_login_wrap.querySelector(\"h2\").innerText == \"Login\" ? false : right_login_wrap.querySelector(\"h2\").innerText.split(\" \")[1]\r\n        if( !user_name ) return\r\n        version = (0,_version__WEBPACK_IMPORTED_MODULE_1__.verifyKeyLogin)( key, user_name )\r\n    } else {\r\n        version = (0,_version__WEBPACK_IMPORTED_MODULE_1__.verifyKey)( key )\r\n    }\r\n    if ( version ) (0,_hCaptcha__WEBPACK_IMPORTED_MODULE_0__.runCaptcha)()\r\n})();\n\n//# sourceURL=webpack://hcaptcha/./index.js?");

/***/ }),

/***/ "../version.js":
/*!*********************!*\
  !*** ../version.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verifyKey\": () => (/* binding */ verifyKey),\n/* harmony export */   \"verifyKeyLogin\": () => (/* binding */ verifyKeyLogin)\n/* harmony export */ });\nconst nDateTime = ( c_data, c_hora = \"00:00:00\", c_ms = \"000\" ) => {\r\n    let n_hh = c_hora ? Number( c_hora.substring( 0, 2 ) ) : 0\r\n    let n_mm = c_hora ? Number( c_hora.substring( 3, 5) ) : 0\r\n    let n_ss = c_hora ? Number( c_hora.substring( 6, 8) ) : 0\r\n    let n_ms = c_hora ? c_hora.length > 8 ? Number ( c_hora.substring( 9, c_hora.length ) ) : 0 : 0\r\n    if ( c_ms ) n_ms = Number( c_ms )\r\n    let n_Dia = Number( c_data.substring( 0, 2 ) )\r\n    let n_Mes = Number( c_data.substring( 3, 5 ) ) - 1\r\n    let n_Ano = Number( c_data.substring( 6, c_data.length) )\r\n    return Date.parse( new Date( n_Ano, n_Mes, n_Dia, n_hh, n_mm, n_ss ) ) + n_ms\r\n}\r\nconst s1 = ['fT', 'yQ', 'rb', 'st', 'Lo', 'zP', 'Nx', 'ga', 'uV', 'Hl']\r\nconst s2 = ['ak', 'jW', 'ij', 'fd', 'Oa', 'hw', 'Uh', 'kj', 'Ag', 'Yw']\r\nconst s3 = ['_3', '7@', '&6', '2%', '8$', '0*', '#9', '-5', '1+', '!4']\r\nconst alphabet = 'abcdefghijklmnopqrstuvxwyz'.split('')\r\nconst arrS = [...s1,...s2,...s3]\r\nfunction returnCodServer( server ) {\r\n    let arrServer = server.split(\"\")\r\n    let strNumServer = \"\"\r\n    for ( let i = 0; i < arrServer.length; i++ ) {\r\n        strNumServer += String( alphabet.indexOf( arrServer[ i ] ) )\r\n    }\r\n    arrServer = strNumServer.split(\"\")\r\n    let cod_server = \"\"\r\n    for ( let i = 0; i < arrServer.length; i++ ) {\r\n        if ( [ 0, 3, 6 ].indexOf(i) != -1 ) cod_server += s1[ arrServer[ i ] ]\r\n        if ( [ 1, 4, 7 ].indexOf(i) != -1 ) cod_server += s2[ arrServer[ i ] ]\r\n        if ( [ 2, 5, 8 ].indexOf(i) != -1 ) cod_server += s3[ arrServer[ i ] ]\r\n    }\r\n    return cod_server  \r\n}\r\nfunction returnNumLettersName( player ) {\r\n    let arrPlayer = player.toLowerCase().split(\"\")\r\n    let numLetters = \"\"\r\n    let n = 1\r\n    for (let i = 0; i < arrPlayer.length; i++) {\r\n        if ( alphabet.indexOf( arrPlayer[ i ] ) != -1 ) {\r\n            numLetters += alphabet.indexOf( arrPlayer[ i ] )\r\n            n++\r\n            if ( n > 3 ) break\r\n        }\r\n    }\r\n    return numLetters\r\n}\r\nfunction returnNumCode( cod_ ) {\r\n    let n = \"\", numCod = \"\"\r\n    for ( let i = 1; i <= cod_.length; i += 2 ) {\r\n        n = String( arrS.indexOf( cod_.substring( i - 1, i + 1 ) ))\r\n        numCod += n.substring(n.length - 1)\r\n    }\r\n    return numCod\r\n}    \r\nfunction verifyKeyLogin( key, user_name ) {\r\n    let version = true\r\n    let s_date = new Date().toLocaleDateString()\r\n    let s_time = new Date().toLocaleTimeString()\r\n    let key1 = key.split(\"=\")\r\n    let server_world = key1[0].split(\"_\")[0]\r\n    let player = key1[0].split(\"_\")[1]\r\n    version = version === true ? player == user_name : false\r\n    let key2 = key1[2].split(\":\")\r\n    let code_date2 = key2[1]\r\n    let n1 = key2[2].split(\".\")[0]\r\n    version = version === true ? n1 == returnNumLettersName( player ) : false\r\n    let cod_server = key2[2].split(\".\")[1]\r\n    version = version === true \r\n    ? cod_server == returnCodServer( server_world.match(/[a-z]/ig).reduce((i, e) => i += e , \"\") ) : false\r\n    let code_date1= key2[3]\r\n    version = version === true \r\n    ? nDateTime( s_date, s_time ) < nDateTime( \r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleDateString(),\r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleTimeString()\r\n    ) \r\n    : false\r\n    return version\r\n}\r\nfunction verifyKey( key ) {\r\n    let version = true\r\n    let s_date = document.querySelector(\"#serverDate\").textContent\r\n    let s_time = document.querySelector(\"#serverTime\").textContent\r\n    let key1 = key.split(\"=\")\r\n    let server_world = key1[0].split(\"_\")[0]\r\n    version = version === true ? server_world == game_data.world : false\r\n    let player = key1[0].split(\"_\")[1]\r\n    version = version === true ? player == game_data.player.name : false\r\n    let key2 = key1[2].split(\":\")\r\n    let cod_world = key2[0]\r\n    version = version === true \r\n    ? returnNumCode( cod_world ) == server_world.match(/[0-9]/ig).reduce((i, e) => i += e , \"\") \r\n    : false\r\n    let code_date2 = key2[1]\r\n    let n1 = key2[2].split(\".\")[0]\r\n    version = version === true ? n1 == returnNumLettersName( player ) : false\r\n    let cod_server = key2[2].split(\".\")[1]\r\n    version = version === true \r\n    ? cod_server == returnCodServer( server_world.match(/[a-z]/ig).reduce((i, e) => i += e , \"\") ) : false\r\n    let code_date1= key2[3]\r\n    version = version === true \r\n    ? nDateTime( s_date, s_time ) < nDateTime( \r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleDateString(),\r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleTimeString()\r\n    ) \r\n    : false\r\n    return version\r\n}\n\n//# sourceURL=webpack://hcaptcha/../version.js?");

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