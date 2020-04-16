module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-61f42\",\"private_key_id\":\"d3700abefb821cda1d1b0b16ed10408c6fe1e8ee\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDdWdlU0kXIWYFS\\nHHMrPlawfWOIbyIF/bkhhwzFQy3Mp+94LEO/g5F72q/TvIoysZVFeXE5ytitOgBs\\nQwDQlERihMBh5qIZUhYWoMQUxa9OTyJEW8xwOu7rqHQL0RK8ezs8LsOl9JhoHPm6\\njNyE75FsyER2vQI8TNkBZxm8ZeQjTncudINJBaux8mPyT2t2H/bs/bzue2kj36E8\\nLR4b+dBuo31VeN+xwZ/Ll96//S4+beia39QiJyWkQ0teL+8hi1398Jnb/+Aw8TlR\\n0uhT7lXLjS7kkZk+HonmsyaRuGMXUarDwwWtvW0oFA/1Nno205/wYaRQMf/RRWVd\\nRXV9nADrAgMBAAECggEAGb3Yse4QMngCO4/Wbul9gGHcoOG3tbWngXgoqoog+eNv\\nzGxtZojA8wPgHcIX2kRfpSg13DA0WZTctrpmDlunxkNE8j21jTdIHVKN6xKATB2U\\n0RlR4Z1g6qP49uTWBnhYT6vqkdKrpLP18NVv0b/gjCOQHrTlXSjctbaNPiUlTlua\\nr3idmcbRUa+yucthwE8dDD2A9GH1xQ+XSox9GsR3STPHm1aDEXKtwKhcEYMLjXtN\\nfdbho4/oqAFG8AUNEw66tGwRJT1YFZBvkLiDrURS/UKlvWK11pze2SArNm4hClmj\\nxKyh7zqZie539efkUHc6slVPsiGcVsPbtPXgMg/OzQKBgQD+ond8sYWWkJ9NFbVo\\nzwSrWkAm/Hh/D8IiJ/F4XtrZrdo+ZquYjbGNSCpIes6wwGLdE3px12SGQ/6uwfa2\\nU6xmvMkT+tSFSy4m48xN9Fw1ZNYZhVfHEIbLS4w9KQtgf6ZtSbtrOtR9qA9Kl3Vc\\nA5DBOlvPDoy5ja3moeypT+XTNwKBgQDeibG3ZGFcrM2XjxdHmt4vOpWB3OL7k+1A\\nINHNf++VpB2T8W9D0R9uwTp5M/82FLINJze4XcDaDytN4k7IcdfaWI6Sg/5Ix3sN\\na3Qbcnb2CtxmrGpd3VujVO7oPyo2/gah4YnB/O0+JepXA17t66oVhseB34m/xu+I\\ngyqKPr3B7QKBgDCeEpRTTL9Xs6LDL1Tomeqhm7gV4mfYOWfOGpOyALUpNY9OiRri\\nivD/w1r9X7NtuDKfwnQz/PSJzPnO/O0JAtTG3NmcvbEJjrFMMzj7HBPxwdMzm3Pd\\nmu776LXQvWRaWwto1Yj+vY2UZf8G9hhwcdYC736UN5hCDd8IMaiOIcJ3AoGAJh57\\n/KgLLW7EQMPX/wH+MSTd20LU9rceGrAEgCj8Byv3jRH8NyepNLWQqJZJjx/4Z9xh\\n5QjaMgALMOolCJzHlrU4psxJUHorD99qIhF3Yyn1GvlJtw5l1hKEYe//8S+OP0h8\\n6mfC07R28bS4HBUUK1/M6Og7lkgjW8TsEoYwxvkCgYEA/p3nqP/q8ewzbum+Kykm\\nxNY7KV7aBfJG23Et2z2u1qhflCpl6g9h/KjNyvm0ouFCR160Vjk8nTMPvrNz2pdP\\n3d8ya/XCbsEs/2T+lQCI4UwdHaNNyTe1AyFAFjW+WWJj36xSlMqGENFKQEb7dIWr\\ncOfWjqiP26WqB4fNUu4ndaI=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-5el60@mydailystatus-61f42.iam.gserviceaccount.com\",\"client_id\":\"118132898149380308087\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5el60%40mydailystatus-61f42.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore"); //se não tem inicializa


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore); //Já temos como acessar nosso banco!

module.exports = {
  db
};

/***/ }),

/***/ "./pages/api/salve-status.js":
/*!***********************************!*\
  !*** ./pages/api/salve-status.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");




const salveStatus = async (request, response) => {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_2__["default"].getSession(request);

  try {
    if (session) {
      //verifica a sessão se logado Auth0
      const dados = request.body;
      const today = new Date(); //linha 9 e 10 para pegar a data

      const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay();
      await _lib_db__WEBPACK_IMPORTED_MODULE_0__["db"] //arrumando o banco de dados - colocando na estrutura
      .collection('markers').doc(currentDate).collection('checks').doc('session.user.sub').set({
        status: dados.status,
        //envia os dados
        user: session.user.sub,
        //envia o usuário
        coordinates: new firebase_admin__WEBPACK_IMPORTED_MODULE_1___default.a.firestore.GeoPoint( //envia a localização
        dados.coords.lat, dados.coords.long)
      });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (salveStatus);

/***/ }),

/***/ 9:
/*!*****************************************!*\
  !*** multi ./pages/api/salve-status.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspaces\mydaystatus - Usando Next js\pages\api\salve-status.js */"./pages/api/salve-status.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ })

/******/ });
//# sourceMappingURL=salve-status.js.map