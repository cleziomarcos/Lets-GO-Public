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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _general_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/version */ \"../general/version.js\");\n/* harmony import */ var _resizeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resizeMap */ \"./resizeMap.js\");\n/* harmony import */ var _searchBarbariansRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchBarbariansRequest */ \"./searchBarbariansRequest.js\");\n\r\n\r\n\r\n\r\n'use strict'\r\n\r\nif ( document.readyState === \"loading\" ) {\r\n    \r\n    document.addEventListener( \"DOMContentLoaded\", mapInit )\r\n\r\n} else {\r\n\r\n    mapInit()\r\n\r\n}\r\n\r\nfunction mapInit(){\r\n\r\n    console.log(\"Map.index...\")\r\n\r\n    if ( (0,_general_version__WEBPACK_IMPORTED_MODULE_0__.returnVersion)() ) {\r\n\r\n        (0,_searchBarbariansRequest__WEBPACK_IMPORTED_MODULE_2__.searchBarbarians)()\r\n        ;(0,_resizeMap__WEBPACK_IMPORTED_MODULE_1__.resizeMap)()\r\n        \r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://map/./index.js?");

/***/ }),

/***/ "./resizeMap.js":
/*!**********************!*\
  !*** ./resizeMap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resizeMap\": () => (/* binding */ resizeMap)\n/* harmony export */ });\n/* harmony import */ var _general_init_tw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/init_tw */ \"../general/init_tw.js\");\n\r\nfunction resizeMap() {\r\n    if (!_general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players[game_data.player.id].configs.reziseMap) {\r\n        _general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players[game_data.player.id].configs.reziseMap = '15x15'\r\n        localStorage.setItem(\"players\", JSON.stringify( _general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players ))\r\n    }\r\n    let newElem = document.createElement('div')\r\n    let elemNode = document.querySelector(\"#contentContainer\")\r\n    elemNode.prepend(newElem)\r\n    newElem.className = \"float_left\"\r\n    newElem.style.margin = \"10px\"\r\n    newElem.innerHTML = ` Change map size: <select id=\"map_resize_select\" onchange=\"TWMap.resize(parseInt($('#map_resize_select').val()), true)\">\r\n        <option id=\"current-map-size\" value=\"15x15\" style=\"display:none;\">15x15</option>\r\n        <option value=\"4\">4x4</option>\r\n        <option value=\"5\">5x5</option>\r\n        <option value=\"7\">7x7</option>\r\n        <option value=\"9\">9x9</option>\r\n        <option value=\"11\">11x11</option>\r\n        <option value=\"13\">13x13</option>\r\n        <option value=\"15\">15x15</option>\r\n        <option value=\"20\">20x20</option>\r\n        <option value=\"30\">30x30</option>\r\n        <option value=\"40\">40x40</option>\r\n        <option value=\"50\">50x50</option>\r\n        <option value=\"60\">60x60</option>\r\n        <option value=\"70\">70x70</option>\r\n        <option value=\"80\">80x80</option>\r\n        <option value=\"100\">100x100</option>\r\n        <option value=\"120\">120x120</option>\r\n    </select>`\r\n   \r\n    const resizeSelect = document.querySelector(\"#map_resize_select\")\r\n    resizeSelect.value = _general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players[game_data.player.id].configs.reziseMap\r\n    window.TWMap.resize(parseInt( _general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players[game_data.player.id].configs.reziseMap ))\r\n    document.querySelector(\"#current-map-size\").style = \"display:none;\"\r\n    resizeSelect.addEventListener(\"change\", saveSize )\r\n    if (document.querySelector(\"#map_chooser_select\")) {\r\n        document.querySelector(\"#map_chooser_select\").addEventListener(\"change\", \r\n        function() {\r\n            resizeSelect.value = document.querySelector(\"#map_chooser_select\").value\r\n            saveSize()        \r\n        })\r\n    }\r\n    function saveSize() {\r\n        _general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players[game_data.player.id].configs.reziseMap = resizeSelect.value\r\n        localStorage.setItem(\"players\", JSON.stringify( _general_init_tw__WEBPACK_IMPORTED_MODULE_0__.players ))\r\n        document.querySelector(\"#current-map-size\").style = \"display:none;\"\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://map/./resizeMap.js?");

/***/ }),

/***/ "./searchBarbariansRequest.js":
/*!************************************!*\
  !*** ./searchBarbariansRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchBarbarians\": () => (/* binding */ searchBarbarians)\n/* harmony export */ });\nasync function insertBlob( data ) {\r\n    console.log(\"insertBlob...\")\r\n    const urlBlob = URL.createObjectURL( data )\r\n    const elem = document.createElement( 'script' )\r\n    document.querySelector( \"body\" ).append( elem )\r\n    elem.src = urlBlob\r\n}\r\nasync function btnClass() {\r\n    const btnInt = setInterval(() => {\r\n        if (document.querySelector(\"#search_barbs\")) {\r\n            clearInterval(btnInt)\r\n            document.querySelector(\"#search_barbs\").className = \"btn float_left\"\r\n            document.querySelector(\"#search_barbs\").innerHTML = \"🔍 Search Barbarians<p style='font-size: xx-small; text-align-last: end;'>by Jorge</p>\"\r\n            document.querySelector(\"#stop_search\").style.display = \"none\"\r\n            document.querySelector(\"#stop_search\").innerHTML = \"⛔️ Stop Search<p style='font-size: xx-small;text-align-last: end;'>by Jorge</p>\"\r\n            document.querySelector(\"#stop_search\").className = \"btn float_left\"\r\n            document.querySelector(\"#search_barbs\").style = \"padding-right: 6px;\"\r\n        }\r\n    }, 500);\r\n}\r\nasync function searchBarbarians() {\r\n    console.log(\"searchBarbarians...\")\r\n    try {\r\n        await insertBlob( await fetch( 'https://raw.githubusercontent.com/cleziomarcos/Lets-GO-Public/dev/scripts/searchBarbarians.js', { mode: 'cors' } ).then( ( resp ) => resp.blob() ) )\r\n        await btnClass()\r\n    } catch ( error ) {\r\n        console.log( error )\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://map/./searchBarbariansRequest.js?");

/***/ }),

/***/ "../general/init_login.js":
/*!********************************!*\
  !*** ../general/init_login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"right_login_wrap\": () => (/* binding */ right_login_wrap),\n/* harmony export */   \"user_name\": () => (/* binding */ user_name)\n/* harmony export */ });\nconst right_login_wrap = !document.querySelector( \"#home div.right.login div.wrap\" ) ? false : document.querySelector( \"#home div.right.login div.wrap\" )\r\nconst user_name = !right_login_wrap ? false : right_login_wrap.querySelector(\"h2\").innerText == \"Login\" ? false : right_login_wrap.querySelector(\"h2\").innerText.split(\" \")[1]\r\n\n\n//# sourceURL=webpack://map/../general/init_login.js?");

/***/ }),

/***/ "../general/init_tw.js":
/*!*****************************!*\
  !*** ../general/init_tw.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cansed\": () => (/* binding */ cansed),\n/* harmony export */   \"dateServer\": () => (/* binding */ dateServer),\n/* harmony export */   \"fake_limit\": () => (/* binding */ fake_limit),\n/* harmony export */   \"farm_active\": () => (/* binding */ farm_active),\n/* harmony export */   \"link_ir_aldeia\": () => (/* binding */ link_ir_aldeia),\n/* harmony export */   \"link_mesma_aldeia\": () => (/* binding */ link_mesma_aldeia),\n/* harmony export */   \"link_troca_aldeia\": () => (/* binding */ link_troca_aldeia),\n/* harmony export */   \"loyalty_per_hour\": () => (/* binding */ loyalty_per_hour),\n/* harmony export */   \"mdf\": () => (/* binding */ mdf),\n/* harmony export */   \"n_aldeias\": () => (/* binding */ n_aldeias),\n/* harmony export */   \"players\": () => (/* binding */ players),\n/* harmony export */   \"premium_active\": () => (/* binding */ premium_active),\n/* harmony export */   \"scav_active\": () => (/* binding */ scav_active),\n/* harmony export */   \"screen_atual\": () => (/* binding */ screen_atual),\n/* harmony export */   \"screens\": () => (/* binding */ screens),\n/* harmony export */   \"timeServer\": () => (/* binding */ timeServer),\n/* harmony export */   \"timeZone\": () => (/* binding */ timeZone),\n/* harmony export */   \"type_comm\": () => (/* binding */ type_comm),\n/* harmony export */   \"units_speed\": () => (/* binding */ units_speed),\n/* harmony export */   \"verConnection\": () => (/* binding */ verConnection),\n/* harmony export */   \"verifyCurrentScreen\": () => (/* binding */ verifyCurrentScreen),\n/* harmony export */   \"world_delay\": () => (/* binding */ world_delay),\n/* harmony export */   \"world_speed\": () => (/* binding */ world_speed),\n/* harmony export */   \"world_tech\": () => (/* binding */ world_tech)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"../general/util.js\");\n/**\r\n * Inicialização de diversas constantes globais do projeto\r\n**/\r\n\r\n\r\n\r\n// --- retorna data do servidor - pagina\r\nconst dateServer = () => document.querySelector(\"#serverDate\").textContent\r\n\r\n// --- retorna hora do servidor - página\r\nconst timeServer = () => document.querySelector(\"#serverTime\").textContent\r\n\r\n// --- retorna diferença em segundos entre a data e hora do servidor e do sistema\r\nconst timeZone = () => Math.round( ( (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( dateServer(), timeServer() ) - Date.now() ) / 1000 ) + 1\r\n\r\n// --- retorna se está connectado ou não no jogo\r\nconst verConnection = typeof( game_data ) == undefined || !document.querySelector(\"#topContainer\") ? false : true\r\n\r\n// --- se pagina ou aba em foco\r\nconst cansed = false\r\n\r\n// --- conta premium ativa\r\nconst premium_active = game_data.features.Premium.active\r\n\r\n// --- numero de aldeias\r\nconst n_aldeias = game_data.player.villages\r\n\r\n// --- farm ativo\r\nconst farm_active = game_data.features.FarmAssistent.active\r\n\r\n// --- player em MDF\r\nconst mdf = window.location.search.indexOf( 't=' ) == -1 ? '' : window.location.search.substring( window.location.search.indexOf( 't=' ), window.location.search.indexOf( '&' ) )\r\n\r\n// --- link para troca de screen e aldeia\r\nconst link_troca_aldeia = `/game.php?${mdf}&village=n${game_data.village.id}&screen=`\r\n\r\n// --- link para troca de screen na mesma aldeia\r\nconst link_mesma_aldeia = `/game.php?${mdf}&village=${game_data.village.id}&screen=`\r\n\r\n// --- link ir aldeia e screen informados\r\nconst link_ir_aldeia = ( village_id, screen ) => `/game.php?${mdf}&village=${ village_id }&screen=${screen}`\r\n\r\n// --- screen atual\r\nconst screen_atual = location.href.substring( location.href.indexOf( 'screen' ) + 7 )\r\nconst verifyCurrentScreen = screen => window.self.location.search.indexOf( screen ) != -1\r\n\r\n// --- tipos de commandos\r\nconst type_comm = [ \"Ataque\", \"Apoio\", \"NT-2 Nobres\", \"NT-3 Nobres\", \"NT-4 Nobres\", \"NT-5 Nobres\", \"Snip\", \"Farm Player\" ]\r\n\r\n// --- scavenge\r\nconst scav_active = localStorage.scav_active == undefined ? false : localStorage.scav_active == 'true' ? true : false\r\n\r\n// --- screns aonde irá rodar programações\r\nconst screens = [ \"am_farm\", \"main\", \"train\", \"place&mode=scavenge\" ]\r\n\r\n// -------------------------- configurações do mundo -----------------------------\r\n\r\n// --- velocidade do mundo\r\nconst world_speed = !localStorage.world_speed ? 0 : Number( localStorage.world_speed )\r\n\r\n// --- velocidade das unidades\r\nconst units_speed = !localStorage.units_speed ? 0 : Number( localStorage.units_speed )\r\n\r\n// --- delay do mundo\r\nconst world_delay = !localStorage.world_delay ? 0 : Number( localStorage.world_delay )\r\n\r\n// --- lealdade por hora\r\nconst loyalty_per_hour = !localStorage.loyalty_per_hour ? 0 : Number( localStorage.loyalty_per_hour )\r\n\r\n// --- limite de fake\r\nconst fake_limit = !localStorage.fake_limit ? 0 : Number( localStorage.fake_limit )\r\n\r\n// --- tipo de pesquisa\r\nconst world_tech = !localStorage.world_tech ? 0 : Number( localStorage.world_tech )\r\n\r\n// --------------------------- Objeto principal do projeto ------------------------\r\nconst players = localStorage.players ? JSON.parse( localStorage.getItem( \"players\" ) ) : {\r\n    [ game_data.player.id ] : {\r\n        villageIDs : [],\r\n        villages : {},\r\n        schedules : {},\r\n        configs : {\r\n            n_loop : 0,\r\n            n_atk : 0,\r\n            active : true,\r\n            farm : { active: true, season: 150, timer: 30 },\r\n            msg : { place : true },\r\n            scav: true,\r\n            main: true,\r\n            train: true,\r\n            command : true,\r\n            overview : 60,\r\n            map : 60,\r\n            report : 60,\r\n            mail : 120,\r\n            market : 60,\r\n            ranking: 60,\r\n            ally: 60,\r\n            forum : 120,\r\n            info_player : 60,\r\n            mentor : 120,\r\n            premium : 60,\r\n            transfer : 300,\r\n            settings : 60,\r\n            place_command : 90,\r\n            place: 60,\r\n            event : 120\r\n        },\r\n        market_premium : {\r\n            config : {\r\n                active : false,\r\n                option : 2,\r\n                sell : {\r\n                    active: true,\r\n                    storage_res: { \r\n                        wood: 1000,\r\n                        stone: 1000,\r\n                        iron: 1000\r\n                    }, \r\n                    sell_rate: {\r\n                        active: false,\r\n                        wood: 64,\r\n                        stone: 64,\r\n                        iron: 64\r\n                    }\r\n                },\r\n                buy : { \r\n                    active: true,\r\n                    storage_max: 30,\r\n                    buy_max: 1000,\r\n                    buy_rate: {\r\n                        active: false,\r\n                        wood: 64,\r\n                        stone: 64,\r\n                        iron: 64\r\n                    }\r\n                }\r\n            },\r\n            rate_daily : {}\r\n        },\r\n    }\r\n}\n\n//# sourceURL=webpack://map/../general/init_tw.js?");

/***/ }),

/***/ "../general/util.js":
/*!**************************!*\
  !*** ../general/util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cTimeToSeg\": () => (/* binding */ cTimeToSeg),\n/* harmony export */   \"nDateTime\": () => (/* binding */ nDateTime),\n/* harmony export */   \"nSegStrHora\": () => (/* binding */ nSegStrHora),\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"setMillis\": () => (/* binding */ setMillis),\n/* harmony export */   \"sleep\": () => (/* binding */ sleep),\n/* harmony export */   \"strTimeToSec\": () => (/* binding */ strTimeToSec),\n/* harmony export */   \"waitCompleteLoad\": () => (/* binding */ waitCompleteLoad)\n/* harmony export */ });\n\r\n/**\r\n * Uso geral\r\n * Calcula o numero de segundos de uma string hora\r\n * \r\n * @param {String} string - uma string hora (hh:mm:ss)\r\n * @returns Number - segundos\r\n */\r\nconst strTimeToSec = string => {\r\n    let hora = Number( string.substring( 0, string.length - 6 ) ) * 3600\r\n    let min = Number( string.substring( string.length - 5, string.length - 3 ) ) * 60\r\n    return Number( string.substring( string.length - 2, string.length ) ) + hora + min\r\n}\r\n\r\n/**\r\n * Uso geral\r\n * @param {String} c_data \r\n * @param {String} c_hora \r\n * @param {String} c_ms \r\n * @returns Number - milesegundos representando as string data e/ou hora e/ou milisegundos informado\r\n */\r\nconst nDateTime = ( c_data, c_hora = \"00:00:00\", c_ms = \"000\" ) => {\r\n    let n_hh = c_hora ? Number( c_hora.substring( 0, 2 ) ) : 0\r\n    let n_mm = c_hora ? Number( c_hora.substring( 3, 5) ) : 0\r\n    let n_ss = c_hora ? Number( c_hora.substring( 6, 8) ) : 0\r\n    let n_ms = c_hora ? c_hora.length > 8 ? Number ( c_hora.substring( 9, c_hora.length ) ) : 0 : 0\r\n    if ( c_ms ) n_ms = Number( c_ms )\r\n    let n_Dia = Number( c_data.substring( 0, 2 ) )\r\n    let n_Mes = Number( c_data.substring( 3, 5 ) ) - 1\r\n    let n_Ano = Number( c_data.substring( 6, c_data.length) )\r\n    return Date.parse( new Date( n_Ano, n_Mes, n_Dia, n_hh, n_mm, n_ss ) ) + n_ms\r\n}\r\n/**\r\n * Uso Geral\r\n * @param {Number} s - numero de segundos\r\n * @returns String - no formato 'hh:mm:ss'\r\n */\r\nconst nSegStrHora = ( s ) => {\r\n    let h = parseInt( s / 3600 )\r\n    let m = parseInt( ( s - ( h * 3600 ) ) / 60 )\r\n    s = parseInt( s - ( h * 3600 ) - ( m * 60 ) )\r\n    if ( h < 10 ) h = '0' + h\r\n    if ( m < 10 ) m = '0' + m\r\n    if ( s < 10 ) s = '0' + s\r\n    return `${h}:${m}:${s}`\r\n}\r\n\r\n/**\r\n * Uso Geral\r\n * @param {String} c_hora \r\n * @returns Number - de segundos da hora\r\n */\r\nconst cTimeToSeg = ( c_hora ) => {\r\n    let l = c_hora.length\r\n    let n_hh = Number( c_hora.substring( 0, l - 6 ) )\r\n    let n_mm = Number( c_hora.substring( l - 5, l - 3 ) )\r\n    let n_ss = Number( c_hora.substring( l - 2, l ) )\r\n    \r\n    return Number(( n_hh * 3600 ) + ( n_mm * 60 ) + n_ss)\r\n}\r\n\r\n/**\r\n * Uso geral\r\n * @param {Number} min - milisegundos\r\n * @param {Number} max - milisegundos\r\n * @returns Number - Aleatório entre min e max\r\n */\r\nconst random = ( min, max ) => {\r\n    min = Math.ceil( min );\r\n    max = Math.floor( max );\r\n    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;\r\n}\r\n\r\nvar millis = 0 //utilizado na função setMillis\r\n/**\r\n * Uso geral\r\n * \r\n * @param {Number} added_time \r\n * @returns Number - retorna um numero acrescido\r\n */\r\nfunction setMillis( added_time = 200 ) {\r\n    let tmp = millis;\r\n    millis += added_time;\r\n    return tmp;\r\n}\r\n\r\n/**\r\n * Uso Geral\r\n * Faz uma pausa na execussão \r\n * @param {Number} seg \r\n * @returns \r\n */\r\nasync function sleep(seg) {\r\n    return new Promise((resolve, reject) => {\r\n        setTimeout(() => {\r\n            resolve()\r\n        }, seg * 1000);\r\n    });\r\n}\r\n\r\nasync function waitCompleteLoad( fnCalback ) {\r\n    console.log(\"waitCompleteLoad...\")\r\n    if ( document.readyState == \"loading\" || document.readyState == \"interactive\" ) {\r\n        const completeLoad = setInterval( async () => {\r\n            if ( document.readyState == \"complete\" ) {\r\n                clearInterval(completeLoad)\r\n                fnCalback\r\n            }\r\n        }, 1);\r\n    } else if ( document.readyState == \"complete\" ) {\r\n        fnCalback\r\n    }\r\n}\n\n//# sourceURL=webpack://map/../general/util.js?");

/***/ }),

/***/ "../general/version.js":
/*!*****************************!*\
  !*** ../general/version.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnVersion\": () => (/* binding */ returnVersion)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"../general/util.js\");\n/* harmony import */ var _init_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init_login */ \"../general/init_login.js\");\n\r\n\r\n\r\nconst s1 = ['fT', 'yQ', 'rb', 'st', 'Lo', 'zP', 'Nx', 'ga', 'uV', 'Hl']\r\nconst s2 = ['ak', 'jW', 'ij', 'fd', 'Oa', 'hw', 'Uh', 'kj', 'Ag', 'Yw']\r\nconst s3 = ['_3', '7@', '&6', '2%', '8$', '0*', '#9', '-5', '1+', '!4']\r\nconst alphabet = 'abcdefghijklmnopqrstuvxwyz'.split('')\r\nconst arrS = [...s1,...s2,...s3]\r\n\r\nconst returnVersion = () => {\r\n    console.log(\"returnVersion...\")\r\n    if ( !localStorage.keyGO ) return false\r\n    if ( !JSON.parse( localStorage.keyGO ).key ) return false\r\n    if ( !_init_login__WEBPACK_IMPORTED_MODULE_1__.right_login_wrap && window.self.location.host.split(\".\")[0] != \"www\" ) {\r\n        return verifyKey( JSON.parse( localStorage.keyGO ).key )\r\n    } else {\r\n        if ( !_init_login__WEBPACK_IMPORTED_MODULE_1__.user_name ) return false\r\n        return verifyKeyLogin( JSON.parse( localStorage.keyGO ).key, _init_login__WEBPACK_IMPORTED_MODULE_1__.user_name )\r\n    }\r\n}\r\nfunction returnCodServer( server ) {\r\n    console.log(\"returnCodServer...\")\r\n    let arrServer = server.split(\"\")\r\n    let strNumServer = \"\"\r\n    for ( let i = 0; i < arrServer.length; i++ ) {\r\n        strNumServer += String( alphabet.indexOf( arrServer[ i ] ) )\r\n    }\r\n    arrServer = strNumServer.split(\"\")\r\n    let cod_server = \"\"\r\n    for ( let i = 0; i < arrServer.length; i++ ) {\r\n        if ( [ 0, 3, 6 ].indexOf(i) != -1 ) cod_server += s1[ arrServer[ i ] ]\r\n        if ( [ 1, 4, 7 ].indexOf(i) != -1 ) cod_server += s2[ arrServer[ i ] ]\r\n        if ( [ 2, 5, 8 ].indexOf(i) != -1 ) cod_server += s3[ arrServer[ i ] ]\r\n    }\r\n    return cod_server  \r\n}\r\nfunction returnNumLettersName( player ) {\r\n    console.log(\"returnNumLettersName...\")\r\n    let arrPlayer = player.toLowerCase().split(\"\")\r\n    let numLetters = \"\"\r\n    let n = 1\r\n    for (let i = 0; i < arrPlayer.length; i++) {\r\n        if ( alphabet.indexOf( arrPlayer[ i ] ) != -1 ) {\r\n            numLetters += alphabet.indexOf( arrPlayer[ i ] )\r\n            n++\r\n            if ( n > 3 ) break\r\n        }\r\n    }\r\n    return numLetters\r\n}\r\nfunction returnNumCode( cod_ ) {\r\n    console.log(\"returnNumCode...\")\r\n    let n = \"\", numCod = \"\"\r\n    for ( let i = 1; i <= cod_.length; i += 2 ) {\r\n        n = String( arrS.indexOf( cod_.substring( i - 1, i + 1 ) ))\r\n        numCod += n.substring(n.length - 1)\r\n    }\r\n    return numCod\r\n}    \r\nfunction verifyKeyLogin( key, user_name ) {\r\n    console.log(\"verifyKeyLogin...\")\r\n    let version = true\r\n    let s_date = new Date().toLocaleDateString()\r\n    let s_time = new Date().toLocaleTimeString()\r\n    let key1 = key.split(\"=\")\r\n    let server_world = key1[0].split(\"_\")[0]\r\n    let player = key1[0].split(\"_\")[1]\r\n    version = version === true ? player == user_name : false\r\n    let key2 = key1[2].split(\":\")\r\n    let code_date2 = key2[1]\r\n    let n1 = key2[2].split(\".\")[0]\r\n    version = version === true ? n1 == returnNumLettersName( player ) : false\r\n    let cod_server = key2[2].split(\".\")[1]\r\n    version = version === true \r\n    ? cod_server == returnCodServer( server_world.match(/[a-z]/ig).reduce((i, e) => i += e , \"\") ) : false\r\n    let code_date1= key2[3]\r\n    version = version === true \r\n    ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( s_date, s_time ) < (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( \r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleDateString(),\r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleTimeString()\r\n    ) \r\n    : false\r\n    return version\r\n}\r\nfunction verifyKey( key ) {\r\n    console.log(\"verifyKey...\")\r\n    let version = true\r\n    let s_date = document.querySelector(\"#serverDate\").textContent\r\n    let s_time = document.querySelector(\"#serverTime\").textContent\r\n    let key1 = key.split(\"=\")\r\n    let server_world = key1[0].split(\"_\")[0]\r\n    version = version === true ? server_world == game_data.world : false\r\n    let player = key1[0].split(\"_\")[1]\r\n    version = version === true ? player == game_data.player.name : false\r\n    let key2 = key1[2].split(\":\")\r\n    let cod_world = key2[0]\r\n    version = version === true \r\n    ? returnNumCode( cod_world ) == server_world.match(/[0-9]/ig).reduce((i, e) => i += e , \"\") \r\n    : false\r\n    let code_date2 = key2[1]\r\n    let n1 = key2[2].split(\".\")[0]\r\n    version = version === true ? n1 == returnNumLettersName( player ) : false\r\n    let cod_server = key2[2].split(\".\")[1]\r\n    version = version === true \r\n    ? cod_server == returnCodServer( server_world.match(/[a-z]/ig).reduce((i, e) => i += e , \"\") ) : false\r\n    let code_date1= key2[3]\r\n    version = version === true \r\n    ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( s_date, s_time ) < (0,_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)( \r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleDateString(),\r\n        new Date( Number( returnNumCode( code_date1 ) + returnNumCode( code_date2 ) + \"00000\" ) ).toLocaleTimeString()\r\n    ) \r\n    : false\r\n    return version\r\n}\n\n//# sourceURL=webpack://map/../general/version.js?");

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